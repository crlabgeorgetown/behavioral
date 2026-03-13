const computeCategoryAccuracy = (categories, accuracyValues) => {
    const results = []
    const grouped = {}

    categories.forEach((category, index) => {
        const key = category || 'Unknown'
        if (!grouped[key]) {
            grouped[key] = { correct: 0, total: 0 }
        }

        const accuracy = Number(accuracyValues[index])
        if (Number.isFinite(accuracy)) {
            grouped[key].total += 1
            grouped[key].correct += accuracy
        }
    })

    Object.entries(grouped).forEach(([key, value]) => {
        if (value.total > 0) {
            const pct = ((value.correct / value.total) * 100).toFixed(1)
            results.push({ label: `${key} Accuracy`, value: `${pct}%` })
        }
    })

    return results
}

const wordToPictureAnalysisProfile = {
    title: 'Word-to-Picture Analysis',
    compute({ trialData, summary }) {
        const accuracyValues = trialData.Accuracy || []
        const wordTypeMetrics = computeCategoryAccuracy(trialData.WordType || [], accuracyValues)
        const partOfSpeechMetrics = computeCategoryAccuracy(trialData.PartofSpeech || [], accuracyValues)

        const metrics = [
            { label: 'Overall Accuracy', value: summary.accuracyPct === 'N/A' ? 'N/A' : `${summary.accuracyPct}%` },
            { label: 'Average RT (ms)', value: summary.averageRT },
            ...wordTypeMetrics,
            ...partOfSpeechMetrics
        ]

        return {
            title: 'Word-to-Picture Analysis',
            description: 'Performance is summarized overall and by lexical categories captured in the stimulus file.',
            metrics,
            /*interpretation: 'Lower accuracy or slower responses in specific lexical categories may indicate selective language processing challenges.',
            reference: {
                label: 'Laks et al., 2026',
                url: 'https://doi.org/10.0000/example'
            }*/
        }
    }
}

export { wordToPictureAnalysisProfile }
