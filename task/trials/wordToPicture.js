class AuditoryWordToPictureMatchingReadMapTrial {
    constructor(config) {
        this.ItemNum = config.ItemNum
        this.TrialType = config.TrialType
        this.Procedure = config.Procedure

        this.topleft = config.topleft
        this.topright = config.topright
        this.botleft = config.botleft
        this.botright = config.botright

        this.location = {
            ['topleft']: config.topleft,
            ['topright']: config.topright,
            ['botleft']: config.botleft,
            ['botright']: config.botright
        }

        this.CRESP = config.CRESP
        this.TargetLocation = config.TargetLocation
        this.WordType = config.WordType
        this.PartofSpeech = config.PartofSpeech

        this.Response = ''
        this.ResponseLocation = ''

        this.startTime = null
        this.responseTime = null
        this.TimedOut = null
        this.TrialWasAdministered = 1
    }

    isCorrect() {
        return this.ResponseLocation === this.TargetLocation
    }

    get columns() {
        return [
            ...Object.keys(this),
            'Accuracy',
            'Time',
            'Date',
            'TimedOut',
            'RT'
        ]
    }

    get Accuracy() {
        return this.isCorrect() ? 1 : 0
    }

    get RT() {
        return this.responseTime - this.startTime
    }

    get Time() {
        return this.startTime.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h24'})
    }

    get Date() {
        return this.startTime.toLocaleDateString('en-US')
    }

    audioSource() {
        const sound = this.CRESP
        return `https://crlabgeorgetown.github.io/behavioral/static/auditory_rhyme_decision_wav_files/${sound}.wav`
    }

    getTopLeft() {
        const topleft = this.topleft
        return `https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/${topleft}.jpeg`
    }

    getTopRight() {
        const topright = this.topright
        return `https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/${topright}.jpeg`
    }

    getBotLeft() {
        const botleft = this.botleft
        return `https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/${botleft}.jpeg`
    }

    getBotRight() {
        const botright = this.botright
        return `https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/${botright}.jpeg`
    }
}

export { AuditoryWordToPictureMatchingReadMapTrial}