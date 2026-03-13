const defaultTaskAnalysisProfile = {
    title: 'Task Analysis',
    compute({ summary }) {
        const metrics = [
            { label: 'Trials Completed', value: summary.trialsCompleted },
            { label: 'Accuracy', value: summary.accuracyPct === 'N/A' ? 'N/A' : `${summary.accuracyPct}%` },
            { label: 'Average RT (ms)', value: summary.averageRT }
        ]

        return {
            title: 'Task Analysis',
            description: 'General task performance summary based on completed trials.',
            metrics,
            interpretation: 'Interpret task performance in context of task-specific norms and clinical profile.',
            reference: null
        }
    }
}

export { defaultTaskAnalysisProfile }
