class Trial {
    constructor(trialType, stimulus, lexicality, correctResponse, wordType, frequency, regularity, imageability, partOfSpeech) {
        this.trialType = trialType
        this.stimulus = stimulus
        this.lexicality = lexicality
        this.correctResponse = correctResponse
        this.wordType = wordType
        this.frequency = frequency
        this.regularity = regularity
        this.imageability = imageability
        this.partOfSpeech = partOfSpeech
        this.response = null
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
        const reactionTime = this.mouseMoveTimes.length > 0 ? this.mouseMoveTimes[0] - this.startTime : null
        let duration = 0
        let distance = 0
        let avgVelocity = null
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

        return [reactionTime, duration, distance, avgVelocity]
    }

    get audioSource() {
        return `https://jslawjslaw.github.io/js-crlab/static/auditory_lexical_decision_normalized_wav_files/${this.stimulus}.wav`
    }
}


export { Trial }