import { jsPDF } from "jspdf"
import { defaultTaskAnalysisProfile } from "./analysis/default"
import { buildRadarPayloadFromAnalyses } from "./analysis/radar"
import { renderRadarChartToDataUrl } from "./charts/radar"

import { Analytics } from './internal/plausibleAnalytics'

const WRITTEN_BUILD_COLUMNS = [
    'ItemNum',
    'Date',
    'Time',
    'SubjectID',
    'Item',
    'RT',
    'TrialType',
    'TimedOut',
    'TargetLocation',
    'ResponseLocation',
    'Accuracy',
    'Repetitions',
    'Response',
    'WordType',
    'PartOfSpeech',
    'TrialWasAdministered',
    'BuildTestID',
    'EPrimeTemplateID',
    'Volume',
    'ExperimentNameShort'
]

const AUDITORY_BUILD_COLUMNS = [
    'ItemNum',
    'Date',
    'Time',
    'SubjectID',
    'Item',
    'RT',
    'TimedOut',
    'TargetLocation',
    'ResponseLocation',
    'Accuracy',
    'Repetitions',
    'Response',
    'TrialType',
    'WordType',
    'PartOfSpeech',
    'TrialWasAdministered',
    'BuildTestID',
    'EPrimeTemplateID',
    'Volume',
    'ExperimentNameShort'
]

const BUILD_DEFAULTS = {
    written: {
        BuildTestID: 201,
        EPrimeTemplateID: 72,
        Volume: -1000
    },
    auditory: {
        BuildTestID: 203,
        EPrimeTemplateID: 74,
        Volume: -1000
    }
}

function detectModalityFromText(text = '') {
    const value = String(text || '').toLowerCase()
    if (value.includes('written')) return 'written'
    if (value.includes('auditory')) return 'auditory'
    return null
}

function detectBuildModality(metaData = {}, summary = {}) {
    return detectModalityFromText(metaData.Task)
        || detectModalityFromText(metaData.ExperimentNameShort)
        || detectModalityFromText(summary.task)
        || 'auditory'
}

function toBuildBoolean(value) {
    if (value === true || value === 'true' || value === 'True' || value === 1 || value === '1') return 'True'
    return 'False'
}

function toBuildTrialType(value) {
    const text = String(value || '').trim().toLowerCase()
    if (!text) return ''
    if (text === 'practice') return 'Practice'
    if (text === 'real') return 'Real'
    return text.charAt(0).toUpperCase() + text.slice(1)
}

function pickTrialValue(trialData, key, index) {
    const values = trialData[key] || []
    return values[index]
}

function getBuildDefaults({ modality, variant }) {
    const defaults = BUILD_DEFAULTS[modality] || BUILD_DEFAULTS.auditory
    return {
        BuildTestID: variant?.buildTestID ?? defaults.BuildTestID,
        EPrimeTemplateID: variant?.ePrimeTemplateID ?? defaults.EPrimeTemplateID,
        Volume: defaults.Volume
    }
}

function buildRowFromTrial({ trialData, metaData, variant, modality, index }) {
    const defaults = getBuildDefaults({ modality, variant })
    const response = pickTrialValue(trialData, 'Response', index)
    const cresp = pickTrialValue(trialData, 'CRESP', index)

    return {
        ItemNum: pickTrialValue(trialData, 'ItemNum', index) ?? index + 1,
        Date: pickTrialValue(trialData, 'Date', index) ?? '',
        Time: pickTrialValue(trialData, 'Time', index) ?? '',
        SubjectID: metaData.SubjectID || 'XXX',
        Item: pickTrialValue(trialData, 'Item', index) ?? cresp ?? response ?? '',
        RT: pickTrialValue(trialData, 'RT', index) ?? '',
        TrialType: toBuildTrialType(pickTrialValue(trialData, 'TrialType', index)),
        TimedOut: toBuildBoolean(pickTrialValue(trialData, 'TimedOut', index)),
        TargetLocation: pickTrialValue(trialData, 'TargetLocation', index) ?? '',
        ResponseLocation: pickTrialValue(trialData, 'ResponseLocation', index) ?? '',
        Accuracy: pickTrialValue(trialData, 'Accuracy', index) ?? '',
        Repetitions: pickTrialValue(trialData, 'Repetitions', index) ?? 0,
        Response: response ?? '',
        WordType: pickTrialValue(trialData, 'WordType', index) ?? pickTrialValue(trialData, 'ResponseWordType', index) ?? '',
        PartOfSpeech: pickTrialValue(trialData, 'PartOfSpeech', index) ?? pickTrialValue(trialData, 'PartofSpeech', index) ?? '',
        TrialWasAdministered: pickTrialValue(trialData, 'TrialWasAdministered', index) ?? 1,
        BuildTestID: pickTrialValue(trialData, 'BuildTestID', index) ?? metaData.BuildTestID ?? defaults.BuildTestID,
        EPrimeTemplateID: pickTrialValue(trialData, 'EPrimeTemplateID', index) ?? metaData.EPrimeTemplateID ?? defaults.EPrimeTemplateID,
        Volume: pickTrialValue(trialData, 'Volume', index) ?? metaData.Volume ?? defaults.Volume,
        ExperimentNameShort: metaData.ExperimentNameShort || metaData.Task || ''
    }
}

function getBuildLikeColumns(modality) {
    return modality === 'written' ? WRITTEN_BUILD_COLUMNS : AUDITORY_BUILD_COLUMNS
}

export default class LocalClient {
    constructor(variant) {
        this.variant = variant
        this.trialData = {}
        this.hasSubmitted = false
        this.submittedAt = null
        this.metaData = {
            ExperimentNameShort: variant.testNameShort,
            BuildTestID: variant.buildTestID,
            EPrimeTemplateID: variant.ePrimeTemplateID,
            Volume: -1000,
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
        const correctRtValues = (this.trialData.RT || [])
            .map((rt, index) => ({ rt: Number(rt), accuracy: Number((this.trialData.Accuracy || [])[index]) }))
            .filter(({ rt, accuracy }) => Number.isFinite(rt) && rt >= 0 && accuracy === 1)
            .map(({ rt }) => rt)

        const trialsCompleted = accuracyValues.length
        const accuracyPct = trialsCompleted > 0
            ? ((accuracyValues.reduce((sum, v) => sum + Number(v), 0) / trialsCompleted) * 100).toFixed(1)
            : 'N/A'
        const avgRT = correctRtValues.length > 0
            ? (correctRtValues.reduce((sum, v) => sum + v, 0) / correctRtValues.length).toFixed(0)
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

        const summary = this.getSummary()
        const modality = detectBuildModality(this.metaData, summary)
        const buildColumns = getBuildLikeColumns(modality)

        const trialColumns = Object.keys(this.trialData)
        const trialRowCount = trialColumns.reduce((max, key) => {
            const values = this.trialData[key] || []
            return Math.max(max, values.length)
        }, 0)

        const mappedTrialKeys = new Set([
            'ItemNum',
            'Date',
            'Time',
            'SubjectID',
            'Item',
            'CRESP',
            'RT',
            'TrialType',
            'TimedOut',
            'TargetLocation',
            'ResponseLocation',
            'Accuracy',
            'Repetitions',
            'Response',
            'WordType',
            'ResponseWordType',
            'PartOfSpeech',
            'PartofSpeech',
            'TrialWasAdministered',
            'BuildTestID',
            'EPrimeTemplateID',
            'Volume',
            'ExperimentNameShort'
        ])

        const unmappedTrialKeys = trialColumns.filter((key) => !mappedTrialKeys.has(key))

        const metadataRows = Object.entries(this.metaData).map(([key, value]) => [key, value])
        if (this.submittedAt) {
            metadataRows.push(['CompletedAt', this.submittedAt.toISOString()])
        }
        metadataRows.push(['BuildLikeSchema', modality])
        metadataRows.push(['BuildLikeTrialDelimiter', 'COMMA'])
        metadataRows.push(['BuildLikeTrialColumns', buildColumns.join(';')])
        metadataRows.push(['UnmappedTrialColumns', unmappedTrialKeys.join(';') || ''])

        unmappedTrialKeys.forEach((key) => {
            const values = (this.trialData[key] || []).map((value) => String(value ?? ''))
            metadataRows.push([`Unmapped:${key}`, values.join(';')])
        })

        const buildRows = []
        for (let index = 0; index < trialRowCount; index++) {
            buildRows.push(buildRowFromTrial({
                trialData: this.trialData,
                metaData: this.metaData,
                variant: this.variant,
                modality,
                index
            }))
        }

        const csvLines = []
        csvLines.push('MetadataKey,MetadataValue')
        metadataRows.forEach(([key, value]) => {
            csvLines.push(`${escapeCsv(key)},${escapeCsv(value)}`)
        })
        csvLines.push('')

        if (buildRows.length > 0) {
            csvLines.push(buildColumns.map(escapeCsv).join(','))
            csvLines.push('')
            buildRows.forEach((row) => {
                csvLines.push(buildColumns.map((column) => escapeCsv(row[column])).join(','))
            })
        } else {
            csvLines.push('No trial data available')
        }

        const blob = new Blob([csvLines.join('\n')], { type: 'text/csv;charset=utf-8;' })
        const url = URL.createObjectURL(blob)

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
