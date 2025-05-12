class AuditoryLetterIDTrial {
    constructor(config) {
        this.ItemNum = config.ItemNum
        this.TrialType = config.TrialType

        this.topleft = config.topleft
        this.topmid = config.topmid
        this.topright = config.topright
        this.botleft = config.botleft
        this.botmid = config.botmid
        this.botright = config.botright

        this.location = {
            ['topleft']: config.topleft,
            ['topmid']: config.topmid,
            ['topright']: config.topright,
            ['botleft']: config.botleft,
            ['botmid']: config.botmid,
            ['botright']: config.botright
        }

        this.CRESP = config.CRESP
        this.TargetLocation = config.TargetLocation

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
            'Accruacy',
            'Time',
            'Date',
            'TimeOnItem',
            'TimedOut',
            'TrialWasAdministered'
        ]
    }

    get Accuracy() {
        return this.isCorrect() ? 1 : 0
    }

    get TimeOnItem() {
        return this.responseTime - this.startTime
    }

    get Time() {
        return this.startTime.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h24'})
    }

    get Date() {
        return this.startTime.toLocaleTimeString('en-US')
    }

    audioSource() {
        const sound = this.CRESP
        return `https://3m1l1032.github.io/behavioral/static/auditory_letter_id_wav_files/${sound}.wav`
    }
}

export { AuditoryLetterIDTrial }