import { BaseTrial } from "../shared/trial"


class Trial extends BaseTrial {
    constructor(blockType, inkColorIndex, wordIndex) {
        super()
        this.blockType = blockType
        this.inkColorIndex = parseInt(inkColorIndex)
        this.wordIndex = parseInt(wordIndex)
        this.Response = null
        this.startTime = null
        this.responseTimes = []
        this.responses = []
    }

    get Word() {
        return this.blockType.stimulus(this.wordIndex)
    }

    get InkColor() {
        return this.blockType.inkColor(this.inkColorIndex)
    }

    isCorrectResponse(colorIndex) {
        return this.inkColorIndex === colorIndex
    }

    newResponse(colorIndex) {
        this.responseTimes.push(new Date())
        this.responses.push(this.blockType.inkColor(colorIndex))
    }
}


export { Trial }