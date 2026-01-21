class NAVSTrial {
    constructor(config) {
        this.ItemNum = config.ItemNum
        this.TrialType = config.TrialType
        this.Procedure = config.Procedure

        this.Weight = config.Weight

        this.Sentence = config.Sentence
        this.PicLeft = config.PicLeft
        this.PicRight = config.PicRight

        this.location = {
            ['left']: config.PicLeft,
            ['right']: config.PicRight
        }

        this.CRESP = config.CRESP
        this.Response = ''
        this.ResponseLocation = ''
        this.TargetLocation = config.TargetLocation

        this.SentType = config.SentType
        this.Canonicity = config.Canonicity
        this.takebreakafter = config.takebreakafter

        this.startTime = null
        this.responseTime = null
        this.TimedOut = false

        this.Repetitions = 0
        this.TrialWasAdministered = 1
    }

    isCorrect() {
        return this.TargetLocation === this.ResponseLocation
    }

    get columns() {
        return [
            ...Object.keys(this),
            'Accuracy',
            'Time',
            'Date',
            'RT',
        ]
    }

    get Accuracy() {
        return this.isCorrect() ? 1 : 0
    }

    get Time() {
        return this.startTime.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h24'})
    }
    
    get Date() {
        return this.startTime.toLocaleDateString('en-US')
    }

    get RT() {
        return this.responseTime - this.startTime
    }

    getPicLeftSource() {
        return `https://crlabgeorgetown.github.io/behavioral/static/NAVS/${this.PicLeft}.bmp`
    }

    getPicRightSource() {
        return `https://crlabgeorgetown.github.io/behavioral/static/NAVS/${this.PicRight}.bmp`
    }

    getSentenceSource() {
        return `https://crlabgeorgetown.github.io/behavioral/static/NAVS/${this.Sentence}.wav`
    }
}

export { NAVSTrial }