import { BaseTrial } from "../shared/trial"


class Trial extends BaseTrial {
    constructor(blockNum, blockTrial, trialType, blockType, inkColorIndex, wordIndex) {
        super()
        this.blockNum = blockNum
        this.blockTrial = blockTrial
        this.trialType = trialType
        this.blockType = blockType
        this.inkColorIndex = parseInt(inkColorIndex)
        this.wordIndex = parseInt(wordIndex)
        this.startTime = null
        this.renderTime = null
        this.responseTimes = []
        this.responses = []
    }

    get BlockNum() {
        return this.blockNum
    }

    get BlockTrial() {
        return this.blockTrial
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

    get InkColor() {
        return this.blockType.inkColor(this.inkColorIndex)
    }

    get RESP() {
        if (this.responses.length > 0) {
            return this.blockType.buttonLabel(this.responses[this.responses.length - 1])
        } else {
            return 'NR'
        }
    }

    get ErrorOnTrial() {
        return this.responses.some(this.isIncorrectResponse) ? 1 : 0
    }

    get CRESP() {
        return this.blockType.buttonLabel(this.inkColorIndex)
    }

    get Time() {
        return this.renderTime.toTimeString().split(' ')[0]
    }

    get TimedOut() {
        return !this.responses.includes(this.inkColorIndex)
    }

    get RT() {
        if (this.responseTimes.length > 0 && !this.isIncorrectResponse(this.responses[this.responses.length - 1])) {
            return this.responseTimes[this.responseTimes.length - 1] - this.startTime
        } else {
            return 'N/A'
        } 
    }

    get Accuracy() {
        return this.responses.length > 0 && !this.isIncorrectResponse(this.responses[this.responses.length - 1]) ? 1 : 0
    }

    get Volume() {
        return NaN
    }

    isIncorrectResponse(colorIndex) {
        return this.inkColorIndex !== colorIndex
    }

    newResponse(colorIndex) {
        this.responseTimes.push(new Date())
        this.responses.push(colorIndex)
    }
}


export { Trial }