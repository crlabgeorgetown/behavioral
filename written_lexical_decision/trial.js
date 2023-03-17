export default class Trial {
    constructor(trialType, stimulus) {
        this.trialType = trialType
        this.stimulus = stimulus
        this.response = null
        this.mouseMoveTimes = []
        this.mouseMoveXPositions = []
        this.mouseMoveYPositions = []

    }

    recordMouseMove(time, xPosition, yPosition) {
        this.mouseMoveTimes.push(time)
        this.mouseMoveXPositions.push(xPosition)
        this.mouseMoveYPositions.push(yPosition)
    }
}