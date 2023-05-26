import { BaseTrial } from "../shared/trial"

class Trial extends BaseTrial {
    constructor(config) {
        super()
        this.ItemNum = config.ItemNum
        this.TrialType = config.TrialType
        this.Item = config.Item
        this.Lexicality = config.Lexicality
        this.CRESP = config.CRESP
        this.WordType = config.WordType
        this.Frequency = config.Frequency
        this.Regularity = config.Regularity
        this.Imageability = config.Imageability
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

    get audioSource() {
        return `https://jslawjslaw.github.io/behavioral/static/auditory_lexical_decision_normalized_wav_files/${this.Item}.wav`
    }
}


export { Trial }