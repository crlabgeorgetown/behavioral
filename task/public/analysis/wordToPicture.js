const CONTROL_EFFICIENCY_NORMS = {
    written: {
        R_HF: { mean: 0.78, stdev: 0.18 },
        Ir_HF: { mean: 0.72, stdev: 0.19 },
        R_LF: { mean: 0.66, stdev: 0.20 },
        Ir_LF: { mean: 0.61, stdev: 0.15 }
    },
    auditory: {
        R_HF: { mean: 0.77, stdev: 0.17 },
        Ir_HF: { mean: 0.73, stdev: 0.15 },
        R_LF: { mean: 0.69, stdev: 0.15 },
        Ir_LF: { mean: 0.70, stdev: 0.15 }
    }
}

const WORD_TYPE_ROWS = [
    { regularity: 'Irregular', frequency: 'High', normKey: 'Ir_HF', displayKey: 'HI' },
    { regularity: 'Regular', frequency: 'High', normKey: 'R_HF', displayKey: 'HR' },
    { regularity: 'Irregular', frequency: 'Low', normKey: 'Ir_LF', displayKey: 'LI' },
    { regularity: 'Regular', frequency: 'Low', normKey: 'R_LF', displayKey: 'LR' }
]

const HARD_MINIMUM_RT_MS = 200

const median = (values) => {
    if (!values.length) return null
    const sorted = [...values].sort((a, b) => a - b)
    const middle = Math.floor(sorted.length / 2)
    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2
    }
    return sorted[middle]
}

const percentile = (values, p) => {
    if (!values.length) return NaN
    const sorted = [...values].sort((a, b) => a - b)
    const n = sorted.length
    if (n === 1) return sorted[0]

    const position = p * n - 0.5
    
    if (position <= 0) return sorted[0]
    if (position >= n - 1) return sorted[n - 1]
    
    const lower = Math.floor(position)
    const upper = Math.ceil(position)
    if (lower === upper) return sorted[lower]
    
    const weight = position - lower
    return sorted[lower] * (1 - weight) + sorted[upper] * weight
}

const formatPercent = (value) => (Number.isFinite(value) ? `${(value * 100).toFixed(1)}%` : 'N/A')
const formatRT = (value) => (Number.isFinite(value) ? `${Math.round(value)}` : 'N/A')
const formatScore = (value) => (Number.isFinite(value) ? value.toFixed(4) : '')

const toBoolean = (value) => {
    if (value === true || value === 1) return true
    const text = String(value ?? '').trim().toLowerCase()
    if (text === 'true' || text === '1') return true

    const numeric = Number(value)
    return Number.isFinite(numeric) && numeric === 1
}

const toNumericAccuracy = (value) => {
    if (value === null || value === undefined || value === '') return NaN
    if (value === true) return 1
    if (value === false) return 0

    const text = String(value).trim().toLowerCase()
    if (text === 'true') return 1
    if (text === 'false') return 0

    const numeric = Number(value)
    return Number.isFinite(numeric) ? numeric : NaN
}

const finiteMean = (values) => {
    const finiteValues = values.filter((value) => Number.isFinite(value))
    if (!finiteValues.length) return NaN
    return finiteValues.reduce((sum, value) => sum + value, 0) / finiteValues.length
}

const deriveGuessingAccuracy = (trialData) => {
    const explicit = Number(trialData?.GuessingAccuracy?.[0])
    if (Number.isFinite(explicit) && explicit > 0 && explicit < 1) return explicit

    const targetLocations = (trialData?.TargetLocation || [])
        .map((value) => String(value ?? '').trim())
        .filter((value) => value !== '')
    const uniqueTargets = new Set(targetLocations)
    if (uniqueTargets.size > 1) {
        return 1 / uniqueTargets.size
    }

    return 0.25
}

const removeRtOutliersStandard = (rows) => {
    const rowsWithFiniteRt = rows.filter((row) => Number.isFinite(Number(row.rt)))

    // Apply hard floor FIRST, matching Matlab's applyHardMinimumRTCutoff order
    const rowsAboveFloor = rowsWithFiniteRt.filter((row) => Number(row.rt) >= HARD_MINIMUM_RT_MS)

    if (rowsAboveFloor.length < 4) {
        return rowsAboveFloor 
        }

    const rts = rowsAboveFloor.map((row) => Number(row.rt)) // IQR computed on floored set
    const q1 = percentile(rts, 0.25)
    const q3 = percentile(rts, 0.75)
    const iqr = q3 - q1
    const minRt = q1 - (1.5 * iqr)
    const maxRt = q3 + (1.5 * iqr)

    return rowsAboveFloor.filter((row) => {
        const rt = Number(row.rt)
        return rt >= minRt && rt <= maxRt // floor already satisfied by rowsAboveFloor
    })
}

const toWordTypeParts = (wordTypeValue) => {
    const value = String(wordTypeValue || '').trim()
    if (!value) return null

    // Format: HI_HF_Reg or HI_LF_Irr, etc.
    const parts = value.split('_')
    if (parts.length < 3) return null

    const frequency = parts[1]?.toUpperCase() === 'HF' ? 'High' : parts[1]?.toUpperCase() === 'LF' ? 'Low' : null
    const regularity = parts[2]?.toLowerCase() === 'reg' ? 'Regular' : parts[2]?.toLowerCase() === 'irr' ? 'Irregular' : null

    if (!frequency || !regularity) return null
    return { frequency, regularity }
}

const computeEfficiencyStats = (rows, accuracyRows = rows, debugLabel = '') => {
    const displayAccuracyValues = accuracyRows.map((row) => row.accuracy)
    const displayAccuracy = finiteMean(displayAccuracyValues)

    const accuracyValues = rows.map((row) => row.accuracy)
    const accuracy = finiteMean(accuracyValues)
    
    // medianRT to display: finite RT
    const allFiniteRTs = rows.map((row) => Number(row.rt)).filter((value) => Number.isFinite(value))
    const medianRTDisplay = median(allFiniteRTs)

    // Filter to only rows with perfect accuracy (accuracy === 1)
    const accurateRows = rows.filter((row) => row.accuracy === 1)
    const accurateRTs = accurateRows
        .map((row) => Number(row.rt))
        .filter((value) => Number.isFinite(value))


    // medianRT for efficiency calculation: only accurate trials with finite RT
    const medianRT = median(accurateRTs)
    const rawEfficiency = (1000 * accuracy) / medianRT
    const efficiency = Number.isFinite(rawEfficiency) ? rawEfficiency : null

    // Debug logging (only in development)
    if (debugLabel && typeof window !== 'undefined' && window.__DEBUG_ANALYSIS) {
    }

    return {
        accuracy: Number.isFinite(displayAccuracy) ? displayAccuracy : null,
        medianRT: Number.isFinite(medianRTDisplay) ? medianRTDisplay : null,
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
    const timedOutValues = trialData.TimedOut || []

    const guessingAccuracy = deriveGuessingAccuracy(trialData)

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

        let accuracy = toNumericAccuracy(accuracyValues[index])
        const timedOut = toBoolean(timedOutValues[index])
        if (timedOut && Number.isFinite(guessingAccuracy) && guessingAccuracy > 0 && guessingAccuracy < 1) {
            accuracy = guessingAccuracy
        }

        rows.push({
            accuracy,
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

        // Build analyzable rows (removes practice trials, converts accuracy, handles timed-out)
        const allRows = buildAnalyzableRows(trialData)

        // Step 4: Overall score - run IQR outlier removal on ALL real trials pooled
        const overallFilteredRows = removeRtOutliersStandard(allRows)
        const overall = computeEfficiencyStats(overallFilteredRows, allRows, 'OVERALL')
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

        // Step 5: For each condition, compute efficiency on filtered condition subset
        WORD_TYPE_ROWS.forEach((rowConfig) => {
            // Step 5a: Filter raw trials to that condition
            const conditionRows = allRows.filter((row) => {
                const parts = toWordTypeParts(row.wordType)
                if (!parts) return false
                return parts.regularity === rowConfig.regularity && parts.frequency === rowConfig.frequency
            })

            //const displayAccuracy = finiteMean(conditionRows.map((row) => row.accuracy))

            // Step 5b: Run IQR outlier removal on ONLY that condition's trials
            const filteredConditionRows = removeRtOutliersStandard(conditionRows)

            // Step 5c: Compute efficiency on the filtered condition subset
            const metrics = computeEfficiencyStats(filteredConditionRows, conditionRows, `${rowConfig.normKey}`)

            

            // Step 6: Z-score each condition efficiency against hardcoded norms
            const norm = controlNorms[rowConfig.normKey]
            const efficiencyZ = Number.isFinite(metrics.efficiency) && norm && Number.isFinite(norm.mean) && Number.isFinite(norm.stdev) && norm.stdev > 0
                ? (metrics.efficiency - norm.mean) / norm.stdev
                : null

            radarValues[rowConfig.normKey] = efficiencyZ

            // Debug: Store row data for analysis
            const debugInfo = {
                config: rowConfig,
                filteredCount: filteredConditionRows.length,
                accuracy: metrics.accuracy,
                medianRT: metrics.medianRT,
                efficiency: metrics.efficiency
            }

            if (typeof window !== 'undefined' && !window.__ANALYSIS_DEBUG) {
                window.__ANALYSIS_DEBUG = {}
            }
            if (typeof window !== 'undefined') {
                window.__ANALYSIS_DEBUG[`${rowConfig.frequency[0]}${rowConfig.regularity[0]}`] = debugInfo
            }

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

        // Step 7: Return same shape as current implementation
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
