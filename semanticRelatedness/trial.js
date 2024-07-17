

class WrittenTrial {
    constructor(config) {
        this.ItemNum = config.ItemNum
        this.TrialType = config.TrialType
        this.WordType = config.WordType
        this.RelationType = config.RelationType
        this.Sound1 = config.Sound1
        this.Sound2 = config.Sound2
        this.CRESP = config.CRESP
        this.Response = null
        this.startTime = null
        this.responseTime = null
        this.TimedOut = false
    }

    get columns() {
        return [
            ...Object.keys(this),
            'Item',
            'Time',
            'Date',
            'RT',
            'Accuracy',
            'TimedOut',
            'TrialWasAdministered',
            'Repetitions'
        ]
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

    get TimedOut() {
        return this.Response === null
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
}


export { WrittenTrial }