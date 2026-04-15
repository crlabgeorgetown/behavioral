const CONTROL_EFFICIENCY_NORMS = {
    written: {
        R_HF: { mean: 0.69, stdev: 0.17 },
        Ir_HF: { mean: 0.72, stdev: 0.19 },
        R_LF: { mean: 0.66, stdev: 0.20 },
        Ir_LF: { mean: 0.61, stdev: 0.15 }
    },
    auditory: {
        R_HF: { mean: 0.72, stdev: 0.14 },
        Ir_HF: { mean: 0.73, stdev: 0.15 },
        R_LF: { mean: 0.69, stdev: 0.15 },
        Ir_LF: { mean: 0.70, stdev: 0.15 }
    }
}

const WORD_TYPE_ROWS = [
    { regularity: 'Regular', frequency: 'High', normKey: 'R_HF' },
    { regularity: 'Regular', frequency: 'Low', normKey: 'R_LF' },
    { regularity: 'Irregular', frequency: 'High', normKey: 'Ir_HF' },
    { regularity: 'Irregular', frequency: 'Low', normKey: 'Ir_LF' }
]

const median = (values) => {
    if (!values.length) return null
    const sorted = [...values].sort((a, b) => a - b)
    const middle = Math.floor(sorted.length / 2)
    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2
    }
    return sorted[middle]
}

const formatPercent = (value) => (Number.isFinite(value) ? `${(value * 100).toFixed(1)}%` : 'N/A')
const formatRT = (value) => (Number.isFinite(value) ? `${Math.round(value)}` : 'N/A')
const formatScore = (value) => (Number.isFinite(value) ? value.toFixed(4) : '')

const toWordTypeParts = (wordTypeValue) => {
    const value = String(wordTypeValue || '').trim().toLowerCase()
    if (!value) return null

    const frequency = value.includes('_hf_') ? 'High' : value.includes('_lf_') ? 'Low' : null
    const regularity = value.endsWith('_reg') ? 'Regular' : value.endsWith('_irr') ? 'Irregular' : null

    if (!frequency || !regularity) return null
    return { frequency, regularity }
}

const computeEfficiencyStats = (rows) => {
    const accuracyValues = rows
        .map((row) => Number(row.accuracy))
        .filter((value) => Number.isFinite(value))

    const total = accuracyValues.length
    if (!total) {
        return {
            accuracy: null,
            medianRT: null,
            efficiency: null
        }
    }

    const correct = accuracyValues.reduce((sum, value) => sum + value, 0)
    const accuracy = correct / total

    const accurateRTs = rows
        .filter((row) => Number(row.accuracy) === 1)
        .map((row) => Number(row.rt))
        .filter((value) => Number.isFinite(value) && value >= 0)

    const medianRT = median(accurateRTs)
    const efficiency = Number.isFinite(medianRT) && medianRT > 0
        ? (1000 * accuracy) / medianRT
        : null

    return {
        accuracy,
        medianRT,
        efficiency
    }
}

const detectModality = ({ metaData, summary }) => {
    const source = `${metaData?.Task || ''} ${metaData?.ExperimentNameShort || ''} ${summary?.task || ''}`.toLowerCase()
    if (source.includes('written')) return 'written'
    if (source.includes('auditory')) return 'auditory'
    return 'auditory'
}

const getTaskTitle = (modality) => {
    if (modality === 'written') return 'Written Word-To-Picture Matching'
    if (modality === 'auditory') return 'Auditory Word-To-Picture Matching'
    return 'Word-To-Picture Matching'
}

const buildAnalyzableRows = (trialData) => {
    const accuracyValues = trialData.Accuracy || []
    const rtValues = trialData.RT || []
    const wordTypes = trialData.WordType || []
    const trialTypes = trialData.TrialType || []

    const rowCount = Math.max(
        accuracyValues.length,
        rtValues.length,
        wordTypes.length,
        trialTypes.length
    )

    const rows = []
    for (let index = 0; index < rowCount; index++) {
        const trialType = String(trialTypes[index] || '').trim().toLowerCase()
        if (trialType === 'practice') continue

        rows.push({
            accuracy: accuracyValues[index],
            rt: rtValues[index],
            wordType: wordTypes[index]
        })
    }

    return rows
}

const wordToPictureAnalysisProfile = {
    title: 'Word-to-Picture Analysis',
    compute({ trialData, summary, metaData }) {
        const modality = detectModality({ metaData, summary })
        const title = getTaskTitle(modality)
        const controlNorms = CONTROL_EFFICIENCY_NORMS[modality] || CONTROL_EFFICIENCY_NORMS.auditory

        const rows = buildAnalyzableRows(trialData)
        const overall = computeEfficiencyStats(rows)
        const radarValues = {}

        const tableRows = [
            {
                type: 'overall',
                cells: [
                    'Overall',
                    '',
                    formatPercent(overall.accuracy),
                    formatRT(overall.medianRT),
                    formatScore(overall.efficiency),
                    ''
                ]
            },
            {
                type: 'section',
                cells: ['Regularity', 'Frequency', '', '', '', '']
            }
        ]

        WORD_TYPE_ROWS.forEach((rowConfig) => {
            const groupedRows = rows.filter((row) => {
                const parts = toWordTypeParts(row.wordType)
                if (!parts) return false
                return parts.regularity === rowConfig.regularity && parts.frequency === rowConfig.frequency
            })

            const metrics = computeEfficiencyStats(groupedRows)
            const norm = controlNorms[rowConfig.normKey]
            const efficiencyZ = Number.isFinite(metrics.efficiency) && norm && Number.isFinite(norm.mean) && Number.isFinite(norm.stdev) && norm.stdev > 0
                ? (metrics.efficiency - norm.mean) / norm.stdev
                : null

            radarValues[rowConfig.normKey] = efficiencyZ

            tableRows.push({
                type: 'data',
                cells: [
                    rowConfig.regularity,
                    rowConfig.frequency,
                    formatPercent(metrics.accuracy),
                    formatRT(metrics.medianRT),
                    formatScore(metrics.efficiency),
                    formatScore(efficiencyZ)
                ]
            })
        })

        const metrics = [
            { label: 'Overall Accuracy', value: formatPercent(overall.accuracy) },
            { label: 'Median RT for Accurate Items (ms)', value: formatRT(overall.medianRT) },
            { label: 'Overall Efficiency', value: formatScore(overall.efficiency) }
        ]

        return {
            title,
            modality,
            metrics,
            radar: {
                modality,
                values: radarValues
            },
            table: {
                columns: ['', '', 'Accuracy (%)', 'RT (ms)', 'Efficiency', 'EfficiencyZ'],
                rows: tableRows
            }
        }
    }
}

export { wordToPictureAnalysisProfile }
