import { BaseTrial } from "../shared/trial"


class Trial extends BaseTrial {
    constructor(roundIndex, trialNumber, trialType, stimuli, imageNumbers, searchStimulus, taskType) {
        super()
        this.roundIndex = roundIndex
        this.trialNumber = trialNumber
        this.trialType = trialType
        this.startTime = null
        this.stimuli = stimuli
        this.imageNumbers = imageNumbers
        this.searchStimulus = searchStimulus
        this.taskType = taskType
        this.responses = []
        this.responseTimes = []
    }

    getStimulusIndex(stimulus) {
        return this.stimuli.indexOf(stimulus)
    }

    getSearchStimuliImageNumber() {
        return this.imageNumbers[this.getStimulusIndex(this.searchStimulus)]
    }

    getImages() {
        return this.stimuli.map((stimulus, index) => this.taskType.imageUrlFromStimulus(stimulus, this.imageNumbers[index]))
    }

    isCorrectResponse(stimulus) {
        return this.searchStimulus === stimulus
    }

    get TotalElementNum() {
        return this.trialNumber
    }

    get PatternChoiceOrder() {
        return 'ABCD'
    }

    get PatternNumber() {
        return this.roundIndex
    }

    get OptionA() {
        return this.taskType.getOption(this.stimuli[0], this.imageNumbers[0])
    }
    
    get OptionB() {
        return this.taskType.getOption(this.stimuli[1], this.imageNumbers[1])
    }
    
    get OptionC() {
        return this.taskType.getOption(this.stimuli[2], this.imageNumbers[2])
    }
    
    get OptionD() {
        return this.taskType.getOption(this.stimuli[3], this.imageNumbers[3])
    }

    get CRESP() {
        return this.taskType.getOption(this.searchStimulus, this.getSearchStimuliImageNumber())
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
        return this.stimuli.map((stimulus) => this.taskType.stimuli.indexOf(stimulus) + 1).join('')
    }

    get IncorrRT() {
        let incorrectResponseTime = 0
        this.responses.forEach((response, index) => {
            if (!this.isCorrectResponse(response)) {
                incorrectResponseTime = this.responseTimes[index] - this.startTime
            }
        })
        return incorrectResponseTime
    }

    get IncorrResp() {
        let incorrectResponse = 'N/A'
        this.responses.forEach((response) => {
            if (!this.isCorrectResponse(response)) {
                incorrectResponse = response
            }
        })
        return incorrectResponse
    }

    get TimedOut() {
        return !this.responses.includes(this.searchStimulus)
    }

    get RunInPeriod() {
        return this.trialType === 'practice'
    }
}


export { Trial }