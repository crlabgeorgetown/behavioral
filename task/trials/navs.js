class NAVSTrial {
    constructor(config) {
        this.ItemNum = config.ItemNum
        this.TrialType = config.TrialType
        this.Procedure = config.Procedure
        this.Weight = config.Weight
        this.Sentence = config.Sentence
        this.PicLeft = config.PicLeft
        this.PicRight = config.PicRight
        this.CRESP = config.CRESP
        this.TrialWasAdministered = 1
        this.Repetitions = 0
        this.SentType = config.SentType
        this.Canonicity = config.Canonicity
        this.takebreakafter = config.takebreakafter
        this.Response = 'NR'
        this.startTime = null
        this.responseTime = null
        this.TimedOut = false
        this.Accuracy = -1
    }

    get columns() {
        return [
            ...Object.keys(this),
            'Time',
            'Date',
            'RT',
        ]
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

    get PicLeftSource() {
        return `https://crlabgeorgetown.github.io/behavioral/static/navs/${this.PicLeft}.bmp`
    }

    get PicRightSource() {
        return `https://crlabgeorgetown.github.io/behavioral/static/navs/${this.PicRight}.bmp`
    }

    get SentenceSource() {
        return `https://crlabgeorgetown.github.io/behavioral/static/navs/${this.Sentence}.wav`
    }
}

export { NAVSTrial }