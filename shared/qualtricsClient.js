

class QualtricsClient {
    constructor(trialColumns, inputDevice, participantID) {
        this.inputDevice = inputDevice
        this.participantID = participantID
        this.trialColumns = trialColumns
        this.mouseMoveColumns = [
            'firstMouseMoves',
            'mouseMoveDurations',
            'mouseMoveDistances',
            'mouseMoveAverageVelocities',
        ]
        this.data = trialColumns.concat(this.mouseMoveColumns).reduce((obj, name) => {
            obj[name] = []
            return obj
        }, {})
    }

    collectTrialData(trials) {
        trials.forEach((trial) => {
            const mouseMoveStats = trial.computeMousemoveStats()

            this.mouseMoveColumns.forEach((columnName, index) => {
                this.data[columnName].push(mouseMoveStats[index])
            })

            this.trialColumns.forEach((columnName) => {
                this.data[columnName].push(trial[columnName])
            })
        })
    }

    submitEmbeddedData() {
        for (const [key, values] of Object.entries(this.data)) {
            Qualtrics.SurveyEngine.setEmbeddedData(key, values.join(';'))
        }
        Qualtrics.SurveyEngine.setEmbeddedData('userAgent', navigator.userAgent.replace(',', '|').replace(';','|'))
        Qualtrics.SurveyEngine.setEmbeddedData('inputDevice', this.inputDevice)
        Qualtrics.SurveyEngine.setEmbeddedData('SubjectID', this.participantID)
        Qualtrics.SurveyEngine.setEmbeddedData('RecipientFirstName', 'N/A')
        Qualtrics.SurveyEngine.setEmbeddedData('RecipientLastName', 'N/A')
        Qualtrics.SurveyEngine.setEmbeddedData('RecipientEmail', 'N/A')
        Qualtrics.SurveyEngine.setEmbeddedData('ExternalReference', 'N/A')
    }
}


export { QualtricsClient }