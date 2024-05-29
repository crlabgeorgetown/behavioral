import { BaseTrial } from "../shared/trial"

class Trial extends BaseTrial {
    constructor(config) {
        super()
        this.ItemNum = config.ItemNum
        this.Word = config.Word
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
    }

    get TimeOnItem() {
        return this.responseTime - this.startTime
    }

    get Time() {
        return this.startTime.toTimeString().split(' ')[0]
    }

    get Date() {
        return this.startTime.toLocaleDateString('en-US')
    }

    get Item() {
        return this.Word
    }
}


export { Trial }