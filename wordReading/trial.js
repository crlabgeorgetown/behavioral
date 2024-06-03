

class CrossedRealWordTrial {
    constructor(config) {
        this.ItemNum = config.ItemNum
        this.Item = config.Item
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


class PseudoWordTrial {
    constructor(config) {
        this.ItemNum = config.ItemNum
        this.Item = config.Item
        this.TrialType = config.TrialType
        this.Repetitions = 0
        this.Accuracy = -1
        this.Version = 'v2'
        this.WordType = config.WordType
        this.startTime = null
        this.responseTime = null
        this.TimedOut = false
        this.BlockNumber = config.BlockNumber
        this.StartBlock = config.StartBlock
    }

    get columns() {
        return [
            ...Object.keys(this),
            'TrialWasAdministered',
            'TimeOnItem',
            'Time',
            'Date',
        ]
    }

    get TrialWasAdministered() {
        return !this.TimedOut
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


class MultimorphemicTrial {
    constructor(config) {
        this.ItemNum = config.ItemNum
        this.Item = config.Item
        this.TrialType = config.TrialType
        this.Repetitions = 0
        this.Length = config.Length
        this.Frequency = config.Frequency
        this.Phonemes = config.Phonemes
        this.Syllables = config.Syllables
        this.PartofSpeech = config.PartofSpeech
        this.WordType = config.WordType
        this.startTime = null
        this.responseTime = null
        this.TimedOut = false
    }

    get columns() {
        return [
            ...Object.keys(this),
            'TrialWasAdministered',
            'TimeOnItem',
            'Time',
            'Date',
        ]
    }

    get TrialWasAdministered() {
        return !this.TimedOut
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


class OralSentenceReadingTrial {
    constructor(config) {
        this.ItemNum = config.ItemNum
        this.Item = config.Item
        this.TrialType = config.TrialType
        this.Repetitions = 0
        this.Accuracy = -1
        this.Version = 'ReadMap'
        this.WordType = config.WordType
        this.startTime = null
        this.responseTime = null
        this.TimedOut = false
    }

    get columns() {
        return [
            ...Object.keys(this),
            'TrialWasAdministered',
            'TimeOnItem',
            'Time',
            'Date',
        ]
    }

    get TrialWasAdministered() {
        return !this.TimedOut
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


export { CrossedRealWordTrial, MultimorphemicTrial, OralSentenceReadingTrial, PseudoWordTrial }