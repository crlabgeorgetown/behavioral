import { jsPDF } from "jspdf"

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
            task: this.metaData.ExperimentNameShort || 'Unknown Task',
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

    exportPdf() {
        const s = this.getSummary()
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

        const safeName = String(s.task).replace(/[^a-zA-Z0-9_-]/g, '_')
        doc.save(`${safeName}_summary.pdf`)
    }
}
