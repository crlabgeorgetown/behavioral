

export default class Trial {
    constructor(config) {
        this.ItemNum = config.ItemNum
        this.Item = config.Word
        this.TrialType = config.TrialType
        this.Repetitions = 0
        this.WordType = config.WordType
        this.PrecedingWordType = config.PrecedingWordType
        this.Imageability = config.Imageability
        this.Frequency = config.Frequency
        this.PartofSpeech = config.PartofSpeech
        this.startTime = null
        this.responseTime = null
        this.TimedOut = false
        this.Regularity = config.Regularity
        this.Block = config.Block
    }

    get columns() {
        return [
            ...Object.keys(this),
            'TimeOnItem',
            'Time',
            'Date',
        ]
    }

    get TimeOnItem() {
        return this.responseTime - this.startTime
    }

    get Time() {
        return this.startTime.toLocaleTimeString('en-US')
    }

    get Date() {
        return this.startTime.toLocaleDateString('en-US')
    }
}