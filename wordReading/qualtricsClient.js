

export default class QualtricsClient {
    constructor(engine) {
        this.engine = engine
        this.trialData = {}
        this.metaData = {
            'userAgent': navigator.userAgent.replace(',', '|').replace(';','|'),
            'RecipientFirstName': 'N/A',
            'RecipientLastName': 'N/A',
            'RecipientEmail': 'N/A',
            'ExternalReference': 'N/A'
        }
    }

    collectTrialData(root) {
        let current = root
        while(current !== null) {
            if (current.trial !== null) {
                current.trial.columns.forEach((column, _) => {
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

        if (window.location.host === "georgetown.az1.qualtrics.com") {
            for (const [key, values] of Object.entries(this.trialData)) {
                Qualtrics.SurveyEngine.setEmbeddedData(key, values.join(';'))
            }
            for (const [key, value] of Object.entries(this.metaData)) {
                Qualtrics.SurveyEngine.setEmbeddedData(key, value)
            }

            this.engine.clickNextButton()
        }
    }
}