import { BaseTrial } from "../shared/trial"


class Trial extends BaseTrial {
    constructor(trialType, stimuli, imageNumbers, searchStimulus, taskType) {
        super()
        this.trialType = trialType
        this.startTime = null
        this.stimuli = stimuli
        this.imageNumbers = imageNumbers
        this.searchStimulus = searchStimulus
        this.taskType = taskType
        this.responses = []
        this.responseTimes = []
    }

    getSearchStimuliIndex() {
        return this.stimuli.indexOf(this.searchStimuli)
    }

    getSearchStimuliImageNumber() {
        return this.imageNumbers[this.getSearchStimuliIndex()]
    }

    getImages() {
        return this.stimuli.map((stimulus, index) => this.taskType.imageUrlFromStimulus(stimulus, this.imageNumbers[index]))
    }

    isCorrectResponse(stimulus) {
        return this.searchStimulus === stimulus
    }

    get OptionA() {
        return this.taskType.imageUrlFromStimulus(this.stimuli[0], this.imageNumbers[0])
    }
    
    get OptionB() {
        return this.taskType.imageUrlFromStimulus(this.stimuli[1], this.imageNumbers[1])
    }
    
    get OptionC() {
        return this.taskType.imageUrlFromStimulus(this.stimuli[2], this.imageNumbers[2])
    }
    
    get OptionD() {
        return this.taskType.imageUrlFromStimulus(this.stimuli[3], this.imageNumbers[3])
    }

    get CRESP() {
        return this.taskType.imageUrlFromStimulus(this.searchStimulus, this.getSearchStimuliImageNumber())
    }

    get Time() {
        return this.startTime.toTimeString().split(' ')[0]
    }

    get RT() {
        if (this.responseTimes.length > 0 && this.isCorrectResponse(this.responses[this.responses.length - 1])) {
            return this.responseTimes[this.responseTimes.length - 1] - this.startTime
        } else {
            return 'N/A'
        } 
    }

    get PresOrder() {
        return this.stimuli.map((stimulus) => this.taskType.stimuli.indexOf(stimulus)).join('')
    }

    get IncorrRT() {
        const incorrectResponseTimes = []
        this.responses.forEach((response, index) => {
            if (!this.isCorrectResponse(response)) {
                incorrectResponseTimes.push(this.responseTimes[index] - this.startTime)
            }
        })
        return incorrectResponseTimes.join('|')
    }

    get IncorrResp() {
        const incorrectResponses = []
        this.responses.forEach((response) => {
            if (!this.isCorrectResponse(response)) {
                incorrectResponses.push(this.taskType.stimuli.indexOf(response))
            }
        })
        return incorrectResponses.join('|')
    }

    get TrialType() {
        return this.trialType
    }

    get TimedOut() {
        return !this.responses.includes(this.searchStimulus)
    }
}


export { Trial }