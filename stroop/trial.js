import { BaseTrial } from "../shared/trial"


class Trial extends BaseTrial {
    constructor(trialType, blockType, inkColorIndex, wordIndex) {
        super()
        this.trialType = trialType
        this.blockType = blockType
        this.inkColorIndex = parseInt(inkColorIndex)
        this.wordIndex = parseInt(wordIndex)
        this.startTime = null
        this.renderTime = null
        this.responseTimes = []
        this.responses = []
    }

    get BlockType() {
        return this.blockType.name
    }

    get TrialType() {
        return this.trialType
    }

    get WordString() {
        return this.blockType.stimulus(this.wordIndex)
    }

    get WordStringIndex() {
        return this.wordIndex
    }

    get InkColor() {
        return this.blockType.inkColor(this.inkColorIndex)
    }

    get CRESP() {
        return this.inkColorIndex
    }

    get Time() {
        return this.renderTime.toTimeString().split(' ')[0]
    }

    get TimedOut() {
        return !this.responses.includes(this.inkColorIndex)
    }

    get RT() {
        if (this.responseTimes.length > 0 && this.isCorrectResponse(this.responses[this.responses.length - 1])) {
            return this.responseTimes[this.responseTimes.length - 1] - this.startTime
        } else {
            return 'N/A'
        } 
    }

    get IncorrRT() {
        const incorrectResponseTimes = []
        this.responses.forEach((response, index) => {
            if (!this.isCorrectResponse(response)) {
                incorrectResponseTimes.push(this.responseTimes[index] - this.startTime)
            }
        })
        if (incorrectResponseTimes.length === 0) {
            return 0
        }
        return incorrectResponseTimes.join('|')
    }

    get IncorrResp() {
        const incorrectResponses = []
        this.responses.forEach((response) => {
            if (!this.isCorrectResponse(response)) {
                incorrectResponses.push(response)
            }
        })
        return incorrectResponses.join('|')
    }

    isCorrectResponse(colorIndex) {
        return this.inkColorIndex === colorIndex
    }

    newResponse(colorIndex) {
        this.responseTimes.push(new Date())
        this.responses.push(colorIndex)
    }
}


export { Trial }