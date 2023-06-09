class BaseTrial {
    constructor() {
        this.mouseMoveTimes = []
        this.mouseMoveXPositions = []
        this.mouseMoveYPositions = []
    }

    recordMouseMove(time, xPosition, yPosition) {
        this.mouseMoveTimes.push(time)
        this.mouseMoveXPositions.push(xPosition)
        this.mouseMoveYPositions.push(yPosition)
    }

    computeMousemoveStats() {
        const firstMouseMoveTime = this.mouseMoveTimes.length > 0 ? this.mouseMoveTimes[0] - this.startTime : 'N/A'
        let duration = 0
        let distance = 0
        let avgVelocity = 'N/A'
        let startTime = null
        let startX = null
        let startY = null
        while (this.mouseMoveTimes.length > 0) {
            let currentTime = this.mouseMoveTimes.shift() 
            let currentX = this.mouseMoveXPositions.shift()
            let currentY = this.mouseMoveYPositions.shift()
            if (startTime !== null || currentTime - startTime < 500) {
                const aSquared = Math.pow(startX - currentX, 2)        
                const bSquared = Math.pow(startY - currentY, 2)
                distance += Math.round(Math.sqrt(aSquared + bSquared))
                duration += currentTime - startTime
                avgVelocity = (distance / duration).toFixed(3)
            }
            startTime = currentTime
            startX = currentX
            startY = currentY
        }

        return [firstMouseMoveTime, duration, distance, avgVelocity]
    }
}


export { BaseTrial }