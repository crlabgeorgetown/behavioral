import { jsPDF } from "jspdf"
import { defaultTaskAnalysisProfile } from "./analysis/default"
import { buildRadarPayloadFromAnalyses } from "./analysis/radar"
import { renderRadarChartToDataUrl } from "./charts/radar"

export default class LocalClient {
    constructor(variant) {
        this.variant = variant
        this.trialData = {}
        this.hasSubmitted = false
        this.submittedAt = null
        this.metaData = {
            ExperimentNameShort: variant.testNameShort,
            SubjectID: 'XXX'
        }
    }

    collectTrialData(root) {
        let current = root
        while (current !== null) {
            if (current.trial !== null) {
                current.trial.columns.forEach((column) => {
                    if (column in this.trialData) {
                        this.trialData[column].push(current.trial[column])
                    } else {
                        this.trialData[column] = [current.trial[column]]
                    }
                })
            }
            current = current.next
        }
    }

    collectMetadata(key, value) {
        this.metaData[key] = value
    }

    submit(root) {
        if (this.hasSubmitted) return
        this.collectTrialData(root)
        this.hasSubmitted = true
        this.submittedAt = new Date()
    }

    getSummary() {
        const accuracyValues = (this.trialData.Accuracy || []).filter((v) => v !== null && v !== undefined && v !== '')
        const rtValues = (this.trialData.RT || [])
            .map((v) => Number(v))
            .filter((v) => Number.isFinite(v) && v >= 0)

        const trialsCompleted = accuracyValues.length
        const accuracyPct = trialsCompleted > 0
            ? ((accuracyValues.reduce((sum, v) => sum + Number(v), 0) / trialsCompleted) * 100).toFixed(1)
            : 'N/A'
        const avgRT = rtValues.length > 0
            ? (rtValues.reduce((sum, v) => sum + v, 0) / rtValues.length).toFixed(0)
            : 'N/A'

        return {
            task: this.metaData.Task || this.metaData.ExperimentNameShort || 'Unknown Task',
            participantId: this.metaData.SubjectID || 'XXX',
            age: this.metaData.Age || 'N/A',
            education: this.metaData.Education || 'N/A',
            inputDevice: this.metaData.inputDevice || 'N/A',
            completedAt: this.submittedAt ? this.submittedAt.toLocaleString() : 'N/A',
            trialsCompleted,
            accuracyPct,
            averageRT: avgRT
        }
    }

    getTaskAnalysis() {
        const summary = this.getSummary()
        const profile = this.variant.analysisProfile || defaultTaskAnalysisProfile

        if (!profile || typeof profile.compute !== 'function') {
            return defaultTaskAnalysisProfile.compute({
                trialData: this.trialData,
                metaData: this.metaData,
                summary
            })
        }

        return profile.compute({
            trialData: this.trialData,
            metaData: this.metaData,
            summary
        })
    }

    exportPdf() {
        const s = this.getSummary()
        const analysis = this.getTaskAnalysis()
        let radarImage = null
        try {
            const radarPayload = buildRadarPayloadFromAnalyses([analysis])
            radarImage = radarPayload
                ? renderRadarChartToDataUrl(radarPayload, { title: 'Performance' })
                : null
        } catch (error) {
            console.error('Failed to render radar chart for PDF export:', error)
        }
        const doc = new jsPDF({ unit: 'pt', format: 'letter' })

        doc.setFontSize(16)
        doc.text('Cognitive Recovery Lab — Task Summary', 40, 50)
        doc.setFontSize(11)

        const lines = [
            `Task: ${s.task}`,
            `Participant ID: ${s.participantId}`,
            `Age: ${s.age}`,
            `Education: ${s.education}`,
            `Input Device: ${s.inputDevice}`,
            `Completed At: ${s.completedAt}`,
            `Trials Completed: ${s.trialsCompleted}`,
            `Accuracy: ${s.accuracyPct === 'N/A' ? 'N/A' : `${s.accuracyPct}%`}`,
            `Average RT (ms): ${s.averageRT}`
        ]

        lines.forEach((line, i) => doc.text(line, 40, 90 + i * 20))

        if (radarImage) {
            try {
                doc.addImage(radarImage, 'PNG', 314, 80, 250, 194)
            } catch (error) {
                console.error('Failed to embed radar image in PDF:', error)
                radarImage = null
            }
        }

        const chartBottomY = radarImage ? 80 + 194 + 16 : 0
        let cursorY = Math.max(90 + lines.length * 20 + 24, chartBottomY)
        doc.setFontSize(13)
        doc.text(analysis.title || 'Task Analysis', 40, cursorY)
        cursorY += 20

        doc.setFontSize(11)
        if (analysis.description) {
            const wrappedDescription = doc.splitTextToSize(analysis.description, 530)
            doc.text(wrappedDescription, 40, cursorY)
            cursorY += wrappedDescription.length * 16
        }

        if (analysis.table && Array.isArray(analysis.table.rows) && Array.isArray(analysis.table.columns)) {
            const columns = analysis.table.columns
            const rows = analysis.table.rows
            const xPositions = [40, 130, 220, 315, 390, 470]

            doc.setFont(undefined, 'bold')
            columns.forEach((column, index) => {
                if (!column) return
                doc.text(String(column), xPositions[index] || 40, cursorY)
            })
            cursorY += 18

            rows.forEach((row) => {
                const cells = Array.isArray(row?.cells) ? row.cells : []
                const style = row?.type === 'section' ? 'bold' : 'normal'
                doc.setFont(undefined, style)
                cells.forEach((cell, index) => {
                    if (cell === null || cell === undefined || cell === '') return
                    doc.text(String(cell), xPositions[index] || 40, cursorY)
                })
                cursorY += 18
            })

            doc.setFont(undefined, 'normal')
        } else {
            ;(analysis.metrics || []).forEach((metric) => {
                doc.text(`${metric.label}: ${metric.value}`, 40, cursorY)
                cursorY += 18
            })
        }

        if (analysis.interpretation) {
            cursorY += 8
            const wrappedInterpretation = doc.splitTextToSize(`Interpretation: ${analysis.interpretation}`, 530)
            doc.text(wrappedInterpretation, 40, cursorY)
            cursorY += wrappedInterpretation.length * 16
        }

        if (analysis.reference && analysis.reference.label) {
            cursorY += 8
            const refText = analysis.reference.url
                ? `Reference: ${analysis.reference.label} (${analysis.reference.url})`
                : `Reference: ${analysis.reference.label}`
            const wrappedReference = doc.splitTextToSize(refText, 530)
            doc.text(wrappedReference, 40, cursorY)
        }

        const safeName = String(s.task).replace(/[^a-zA-Z0-9_-]/g, '_')
        doc.save(`${safeName}_summary.pdf`)
    }

    exportCsv() {
        const escapeCsv = (value) => {
            if (value === null || value === undefined) return ''
            const stringValue = String(value)
            if (/[",\n]/.test(stringValue)) {
                return `"${stringValue.replace(/"/g, '""')}"`
            }
            return stringValue
        }

        const metadataRows = Object.entries(this.metaData).map(([key, value]) => [key, value])
        if (this.submittedAt) {
            metadataRows.push(['CompletedAt', this.submittedAt.toISOString()])
        }

        const trialColumns = Object.keys(this.trialData)
        const trialRowCount = trialColumns.reduce((max, key) => {
            const values = this.trialData[key] || []
            return Math.max(max, values.length)
        }, 0)

        const csvLines = []
        csvLines.push('MetadataKey,MetadataValue')
        metadataRows.forEach(([key, value]) => {
            csvLines.push(`${escapeCsv(key)},${escapeCsv(value)}`)
        })
        csvLines.push('')

        if (trialColumns.length > 0) {
            csvLines.push(trialColumns.map(escapeCsv).join(','))
            for (let index = 0; index < trialRowCount; index++) {
                const row = trialColumns.map((key) => {
                    const columnValues = this.trialData[key] || []
                    return escapeCsv(columnValues[index])
                })
                csvLines.push(row.join(','))
            }
        } else {
            csvLines.push('No trial data available')
        }

        const blob = new Blob([csvLines.join('\n')], { type: 'text/csv;charset=utf-8;' })
        const url = URL.createObjectURL(blob)

        const summary = this.getSummary()
        const safeName = String(summary.task).replace(/[^a-zA-Z0-9_-]/g, '_')

        const link = document.createElement('a')
        link.href = url
        link.download = `${safeName}_trials.csv`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        URL.revokeObjectURL(url)
    }
}
