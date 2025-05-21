class ArizonaSemanticTestTrial {
    constructor(config) {
        this.ItemNum = config.ItemNum
        this.TrialType = config.TrialType
        this.Procedure = config.Procedure

        this.topleft = config.topleft
        this.topright = config.topright
        this.bottomleft = config.bottomleft
        this.bottomright = config.bottomright

        this.location = {
            ['topleft']: config.topleft,
            ['topright']: config.topright,
            ['bottomleft']: config.bottomleft,
            ['bottomright']: config.bottomright
        }

        this.targetimage = config.targetimage
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

    gettargetimage() {
        const targetimage = this.targetimage
        return `https://crlabgeorgetown.github.io/behavioral/static/arizonaSemanticTest/${targetimage}.png`
    }

    gettopleftimage() {
        const topleft = this.topleft
        return `https://crlabgeorgetown.github.io/behavioral/static/arizonaSemanticTest/${topleft}.png`
    }

    gettoprightimage() {
        const topright = this.topright
        return `https://crlabgeorgetown.github.io/behavioral/static/arizonaSemanticTest/${topright}.png`
    }

    getbottomleftimage() {
        const bottomleft = this.bottomleft
        return `https://crlabgeorgetown.github.io/behavioral/static/arizonaSemanticTest/${bottomleft}.png`
    }

    getbottomrightimage() {
        const bottomright = this.bottomright
        return `https://crlabgeorgetown.github.io/behavioral/static/arizonaSemanticTest/${bottomright}.png`
    }
}

class WrittenArizonaSemanticTestTrial {
    constructor(config) {
        this.ItemNum = config.ItemNum
        this.TrialType = config.TrialType
        this.Procedure = config.Procedure

        this.topleft = config.topleft
        this.topright = config.topright
        this.bottomleft = config.bottomleft
        this.bottomright = config.bottomright

        this.location = {
            ['topleft']: config.topleft,
            ['topright']: config.topright,
            ['bottomleft']: config.bottomleft,
            ['bottomright']: config.bottomright
        }

        this.targetimage = config.targetimage
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
}

export { ArizonaSemanticTestTrial, WrittenArizonaSemanticTestTrial }