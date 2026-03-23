const RADAR_LABELS = [
    'Wr Hi Irr',
    'Aud Lo Reg',
    'Aud Lo Irr',
    'Aud Hi Reg',
    'Aud Hi Irr',
    'Wr Lo Reg',
    'Wr Lo Irr',
    'Wr Hi Reg'
]

const RADAR_RANGE = {
    min: -5,
    max: 5
}

const MODALITY_AXIS_INDEX = {
    written: {
        Ir_HF: 0,
        R_LF: 5,
        Ir_LF: 6,
        R_HF: 7
    },
    auditory: {
        R_LF: 1,
        Ir_LF: 2,
        R_HF: 3,
        Ir_HF: 4
    }
}

const REGULARITY_FREQUENCY_TO_KEY = {
    regular_high: 'R_HF',
    regular_low: 'R_LF',
    irregular_high: 'Ir_HF',
    irregular_low: 'Ir_LF'
}

const normalizeRadarValue = (value) => {
    const numeric = Number(value)
    if (!Number.isFinite(numeric)) return null
    if (numeric > RADAR_RANGE.max) return RADAR_RANGE.max
    if (numeric < RADAR_RANGE.min) return RADAR_RANGE.min
    return numeric
}

const detectModality = (analysis) => {
    const source = `${analysis?.modality || ''} ${analysis?.radar?.modality || ''} ${analysis?.title || ''}`.toLowerCase()
    if (source.includes('written')) return 'written'
    if (source.includes('auditory')) return 'auditory'
    return null
}

const getRowKey = (row) => {
    const regularity = String(row?.cells?.[0] || '').trim().toLowerCase()
    const frequency = String(row?.cells?.[1] || '').trim().toLowerCase()
    return `${regularity}_${frequency}`
}

const readConditionValuesFromTable = (analysis) => {
    const values = {}
    const rows = analysis?.table?.rows || []

    rows.forEach((row) => {
        if (!Array.isArray(row?.cells) || row.cells.length < 6) return
        const key = REGULARITY_FREQUENCY_TO_KEY[getRowKey(row)]
        if (!key) return

        const rawValue = row.cells[5]
        if (rawValue === null || rawValue === undefined || rawValue === '') return

        const numeric = Number(rawValue)
        if (!Number.isFinite(numeric)) return
        values[key] = numeric
    })

    return values
}

const getConditionValues = (analysis) => {
    const explicitValues = analysis?.radar?.values
    if (explicitValues && typeof explicitValues === 'object') {
        return explicitValues
    }
    return readConditionValuesFromTable(analysis)
}

function buildRadarPayloadFromAnalyses(analyses = []) {
    const items = Array.isArray(analyses) ? analyses.filter(Boolean) : []
    if (!items.length) return null

    const values = new Array(RADAR_LABELS.length).fill(null)
    let hasWritten = false
    let hasAuditory = false

    items.forEach((analysis) => {
        const modality = detectModality(analysis)
        if (!modality) return

        if (modality === 'written') hasWritten = true
        if (modality === 'auditory') hasAuditory = true

        const axisMap = MODALITY_AXIS_INDEX[modality]
        const conditionValues = getConditionValues(analysis)

        Object.entries(axisMap).forEach(([conditionKey, axisIndex]) => {
            const normalized = normalizeRadarValue(conditionValues[conditionKey])
            if (normalized === null) return
            values[axisIndex] = normalized
        })
    })

    return {
        labels: RADAR_LABELS,
        values,
        hasWritten,
        hasAuditory,
        range: { ...RADAR_RANGE }
    }
}

export { buildRadarPayloadFromAnalyses, RADAR_RANGE }
