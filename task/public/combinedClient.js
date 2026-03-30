import { jsPDF } from "jspdf"
import { buildRadarPayloadFromAnalyses } from "./analysis/radar"
import { renderRadarChartToDataUrl } from "./charts/radar"

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

function getBuildLikeColumns(modality) {
    return modality === 'written' ? WRITTEN_BUILD_COLUMNS : AUDITORY_BUILD_COLUMNS
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

function getBuildDefaults(modality) {
    return BUILD_DEFAULTS[modality] || BUILD_DEFAULTS.auditory
}

function buildRowFromTrial({ trialData, metaData, modality, index }) {
    const defaults = getBuildDefaults(modality)
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


export default class CombinedWordToPictureClient {
    constructor(metadata = {}) {
        this.baseMetadata = {
            SubjectID: metadata.SubjectID || 'XXX',
            Age: metadata.Age || 'N/A',
            Education: metadata.Education || 'N/A',
            Task: metadata.Task || 'Both'
        }
        this.runs = []
    }

    addRun({ label, modality, client }) {
        if (!client) return

        this.runs.push({
            label,
            modality,
            submittedAt: client.submittedAt,
            trialData: client.trialData,
            metaData: client.metaData,
            summary: client.getSummary(),
            analysis: client.getTaskAnalysis()
        })
    }

    get hasSubmitted() {
        return this.runs.length > 0
    }

    submit() {
        // No-op: run clients are already submitted.
    }

    getSummary() {
        const firstRun = this.runs[0]
        const lastRun = this.runs[this.runs.length - 1]

        const totalTrials = this.runs.reduce((sum, run) => {
            return sum + Number(run.summary?.trialsCompleted || 0)
        }, 0)

        const runDevices = this.runs
            .map((run) => run.summary?.inputDevice)
            .filter((value) => value && value !== 'N/A')

        const uniqueDevices = [...new Set(runDevices)]
        const inputDevice = uniqueDevices.length > 0 ? uniqueDevices.join(' / ') : 'N/A'

        return {
            task: this.baseMetadata.Task || 'Both',
            participantId: this.baseMetadata.SubjectID || firstRun?.summary?.participantId || 'XXX',
            age: this.baseMetadata.Age || firstRun?.summary?.age || 'N/A',
            education: this.baseMetadata.Education || firstRun?.summary?.education || 'N/A',
            inputDevice,
            completedAt: lastRun?.summary?.completedAt || 'N/A',
            trialsCompleted: totalTrials,
            accuracyPct: 'N/A',
            averageRT: 'N/A'
        }
    }

    getTaskAnalyses() {
        return this.runs.map((run) => run.analysis).filter(Boolean)
    }

    getTaskAnalysis() {
        return {
            title: 'Word-to-Picture Analysis',
            metrics: []
        }
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

        const mappedTrialKeys = new Set([
            'ItemNum',
            'Date',
            'Time',
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
            'Volume'
        ])

        const csvLines = []
        csvLines.push('MetadataKey,MetadataValue')

        Object.entries(this.baseMetadata).forEach(([key, value]) => {
            csvLines.push(`${escapeCsv(key)},${escapeCsv(value)}`)
        })

        csvLines.push(`BuildLikeTrialDelimiter,COMMA`)

        this.runs.forEach((run, index) => {
            csvLines.push(`${escapeCsv(`Run${index + 1}`)},${escapeCsv(run.label)}`)
            if (run.submittedAt) {
                csvLines.push(`${escapeCsv(`Run${index + 1}CompletedAt`)},${escapeCsv(run.submittedAt.toISOString())}`)
            }

            const modality = detectBuildModality(run.metaData, run.summary)
            const runColumns = Object.keys(run.trialData || {})
            const unmappedRunColumns = runColumns.filter((key) => !mappedTrialKeys.has(key))

            csvLines.push(`${escapeCsv(`Run${index + 1}BuildLikeSchema`)},${escapeCsv(modality)}`)
            csvLines.push(`${escapeCsv(`Run${index + 1}BuildLikeTrialColumns`)},${escapeCsv(getBuildLikeColumns(modality).join(';'))}`)
            csvLines.push(`${escapeCsv(`Run${index + 1}UnmappedTrialColumns`)},${escapeCsv(unmappedRunColumns.join(';'))}`)

            unmappedRunColumns.forEach((key) => {
                const values = (run.trialData?.[key] || []).map((value) => String(value ?? ''))
                csvLines.push(`${escapeCsv(`Run${index + 1}Unmapped:${key}`)},${escapeCsv(values.join(';'))}`)
            })
        })

        csvLines.push('')

        this.runs.forEach((run) => {
            const modality = detectBuildModality(run.metaData, run.summary)
            const buildColumns = getBuildLikeColumns(modality)
            const trialColumns = Object.keys(run.trialData || {})
            const rowCount = trialColumns.reduce((max, key) => {
                return Math.max(max, (run.trialData[key] || []).length)
            }, 0)

              csvLines.push(buildColumns.map(escapeCsv).join(','))
            csvLines.push('')

            for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
                const row = buildRowFromTrial({
                    trialData: run.trialData || {},
                    metaData: run.metaData || {},
                    modality,
                    index: rowIndex
                })
                  csvLines.push(buildColumns.map((column) => escapeCsv(row[column])).join(','))
            }

            csvLines.push('')
        })

        const blob = new Blob([csvLines.join('\n')], { type: 'text/csv;charset=utf-8;' })
        const url = URL.createObjectURL(blob)

        const safeName = String(this.baseMetadata.Task || 'Both').replace(/[^a-zA-Z0-9_-]/g, '_')

        const link = document.createElement('a')
        link.href = url
        link.download = `${safeName}_trials.csv`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        URL.revokeObjectURL(url)
    }

    exportPdf() {
        const doc = new jsPDF({ unit: 'pt', format: 'letter' })
        const summary = this.getSummary()
        const analyses = this.getTaskAnalyses()
        let radarImage = null
        try {
            const radarPayload = buildRadarPayloadFromAnalyses(analyses)
            radarImage = radarPayload
                ? renderRadarChartToDataUrl(radarPayload, { title: 'Performance' })
                : null
        } catch (error) {
            console.error('Failed to render radar chart for combined PDF export:', error)
        }

        doc.setFontSize(16)
        doc.text('Cognitive Recovery Lab — Task Summary', 40, 50)
        doc.setFontSize(11)

        const lines = [
            `Task: ${summary.task}`,
            `Participant ID: ${summary.participantId}`,
            `Age: ${summary.age}`,
            `Education: ${summary.education}`,
            `Input Device: ${summary.inputDevice}`,
            `Completed At: ${summary.completedAt}`,
            `Trials Completed: ${summary.trialsCompleted}`
        ]

        lines.forEach((line, index) => doc.text(line, 40, 90 + index * 20))

        if (radarImage) {
            try {
                doc.addImage(radarImage, 'PNG', 314, 80, 250, 194)
            } catch (error) {
                console.error('Failed to embed radar image in combined PDF:', error)
                radarImage = null
            }
        }

        const chartBottomY = radarImage ? 80 + 194 + 16 : 0
        let cursorY = Math.max(90 + lines.length * 20 + 24, chartBottomY)
        const pageHeight = doc.internal.pageSize.getHeight()

        const ensurePageSpace = (neededHeight = 24) => {
            if (cursorY + neededHeight <= pageHeight - 40) return
            doc.addPage()
            cursorY = 50
        }

        analyses.forEach((analysis) => {
            ensurePageSpace(64)

            doc.setFontSize(13)
            doc.text(analysis.title || 'Task Analysis', 40, cursorY)
            cursorY += 20

            doc.setFontSize(11)
            if (analysis.description) {
                const wrappedDescription = doc.splitTextToSize(analysis.description, 530)
                ensurePageSpace(wrappedDescription.length * 16 + 8)
                doc.text(wrappedDescription, 40, cursorY)
                cursorY += wrappedDescription.length * 16
            }

            if (analysis.table && Array.isArray(analysis.table.rows) && Array.isArray(analysis.table.columns)) {
                const columns = analysis.table.columns
                const rows = analysis.table.rows
                const xPositions = [40, 130, 220, 315, 390, 470]

                ensurePageSpace(26)
                doc.setFont(undefined, 'bold')
                columns.forEach((column, index) => {
                    if (!column) return
                    doc.text(String(column), xPositions[index] || 40, cursorY)
                })
                cursorY += 18

                rows.forEach((row) => {
                    ensurePageSpace(18)
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
                    ensurePageSpace(18)
                    doc.text(`${metric.label}: ${metric.value}`, 40, cursorY)
                    cursorY += 18
                })
            }

            if (analysis.interpretation) {
                const wrappedInterpretation = doc.splitTextToSize(`Interpretation: ${analysis.interpretation}`, 530)
                ensurePageSpace(wrappedInterpretation.length * 16 + 8)
                doc.text(wrappedInterpretation, 40, cursorY)
                cursorY += wrappedInterpretation.length * 16
            }

            if (analysis.reference && analysis.reference.label) {
                const refText = analysis.reference.url
                    ? `Reference: ${analysis.reference.label} (${analysis.reference.url})`
                    : `Reference: ${analysis.reference.label}`
                const wrappedReference = doc.splitTextToSize(refText, 530)
                ensurePageSpace(wrappedReference.length * 16 + 8)
                doc.text(wrappedReference, 40, cursorY)
                cursorY += wrappedReference.length * 16
            }

            cursorY += 12
        })

        const safeName = String(summary.task).replace(/[^a-zA-Z0-9_-]/g, '_')
        doc.save(`${safeName}_summary.pdf`)
    }
}
