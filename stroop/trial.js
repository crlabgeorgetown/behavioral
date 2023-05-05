import { BaseTrial } from "../shared/trial"


class Trial extends BaseTrial {
    constructor(blockType, inkColorIndex, wordIndex) {
        super()
        this.blockType = blockType
        this.inkColorIndex = inkColorIndex
        this.wordIndex = wordIndex
        this.Response = null
        this.startTime = null
        this.responseTime = null
    }

    get Word() {
        return this.blockType.stimulus(this.wordIndex)
    }

    get InkColor() {
        return this.blockType.inkColor(this.inkColorIndex)
    }
}


export { Trial }