class Trial {
    constructor(config) {
        this.ItemNum = config.ItemNum
        this.TrialType = config.TrialType
        this.Item = config.Item
        this.Lexicality = config.Lexicality
        this.CRESP = config.CRESP
        this.WordType = config.WordType
        this.Frequency = config.Frequency
        this.Regularity = config.Regularity
        this.Imageability = config.Imageability
        this.PartofSpeech = config.PartofSpeech
        this.Response = null
        this.startTime = null
        this.responseTime = null
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

    get RT() {
        return this.responseTime - this.startTime
    }

    get TimedOut() {
        return this.Response === 'NR'
    }

    get Accuracy() {
        return this.Response === this.CRESP ? 1 : 0
    }

    get TrialOnset() {
        return this.startTime.toTimeString().split(' ')[0]
    }

    get audioSource() {
        return `https://jslawjslaw.github.io/js-crlab/static/auditory_lexical_decision_normalized_wav_files/${this.Item}.wav`
    }
}


export { Trial }