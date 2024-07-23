

class Trial {
    constructor(config) {
        this.ItemNum = config.ItemNum
        this.TrialType = config.TrialType
        this.RelationType = config.RelationType
        this.Sound1 = config.Sound1
        this.Sound2 = config.Sound2
        this.CRESP = config.CRESP
        this.Response = 'NR'
        this.startTime = null
        this.responseTime = null
    }

    get columns() {
        return [
            ...Object.keys(this),
            'Item',
            'Time',
            'TimedOut',
            'Date',
            'RT',
            'Accuracy',
            'TrialWasAdministered',
            'Repetitions'
        ]
    }

    get TimedOut() {
        return this.Response === 'NR'
    }

    get Repetitions() {
        return 0
    }

    get TrialWasAdministered() {
        return 1
    }

    get Accuracy() {
        return this.Response === this.CRESP ? 1 : 0
    }

    get RT() {
        return this.responseTime - this.startTime
    }

    get Item() {
        return `${this.Sound1}-${this.Sound2}`
    }

    get Time() {
        return this.startTime.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h24'})
    }

    get Date() {
        return this.startTime.toLocaleDateString('en-US')
    }

    source(index) {
        const sound = this[`Sound${index}`]
        return `https://crlabgeorgetown.github.io/behavioral/static/auditory_rhyme_decision_wav_files/${sound}.wav`
    }
}


export { Trial }