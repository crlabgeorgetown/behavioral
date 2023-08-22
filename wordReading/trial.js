import { BaseTrial } from "../shared/trial"

class Trial extends BaseTrial {
    constructor(config) {
        super()
        this.Word = config.Word
        this.TrialType = config.TrialType
        this.Repetitions = config.Repetitions
        this.WordType = config.WordType
        this.Length = config.Length
        this.Frequency = config.Frequency
        this.Phonemes = config.Phonemes
        this.Syllables = config.Syllables
        this.PartofSpeech = config.PartofSpeech
        this.Response = null
        this.startTime = null
        this.responseTime = null
    }

    get RT() {
        return this.responseTime - this.startTime
    }

    get TimedOut() {
        return this.Response === 'NR'
    }

    get Accuracy() {
        return this.Response === this.CRESP ? 1 : 0
    }

    get Time() {
        return this.startTime.toTimeString().split(' ')[0]
    }
}


export { Trial }