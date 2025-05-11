

class TypingTrial {
    constructor(config) {
        this.ItemNum = config.ItemNum
        this.TrialType = config.TrialType
        this.Item = config.Item
        
        this.Response = ''
        this._KeysPressed = []
        this._KeyPressTiming = []

        this.startTime = null
        this.responseTime = null
        this.TimedOut = false
        this.Repetitions = 0
        this.TrialWasAdministered = 1
    }

    isCorrect() {
        return this.Item === this.Response
    }

    keydown(key) {
        if (key === 'Backspace') {
            this.Response = this.Response.slice(0, -1)
        } else if (key.length === 1) {
            this.Response += key
        }
        
        this._KeysPressed.push(key)
        this._KeyPressTiming.push(new Date() - this.startTime)
    }

    get columns() {
        return [
            ...Object.keys(this),
            'Accuracy',
            'KeysPressed',
            'KeyPressTiming',
            'NumBackspaces',
            'NumLettersFinalResponse',
            'NumNonBackspaces',
            'Time',
            'Date',
            'TimeOnItem',
        ]
    }

    get Accuracy() {
        return this.isCorrect() ? 1 : 0
    }

    get KeysPressed() {
        return this._KeysPressed.join('|')
    }

    get KeyPressTiming() {
        return this._KeyPressTiming.join('|')
    }

    get NumBackspaces() {
        return this._KeysPressed.filter(char => char === 'Backspace').length
    }

    get NumLettersFinalResponse() {
        return this.Response.length
    }

    get NumNonBackspaces() {
        return this._KeysPressed.filter(char => char !== 'Backspace').length
    }

    get TimeOnItem() {
        return this.responseTime - this.startTime
    }

    get Time() {
        return this.startTime.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h24'})
    }

    get Date() {
        return this.startTime.toLocaleDateString('en-US')
    }

}

class TypingDecisionTrial {
    constructor(config) {
        this.ItemNum = config.ItemNum
        this.TrialType = config.TrialType
        this.Item = config.Item
        
        this.Response = ''
        this._KeysPressed = []
        this._KeyPressTiming = []

        this.startTime = null
        this.responseTime = null
        this.TimedOut = false
        this.Repetitions = 0
        this.TrialWasAdministered = 1
    }

    isCorrect() {
        return this.Item === this.Response
    }

    keydown(key) {
        if (key === 'Backspace') {
            this.Response = this.Response.slice(0, -1)
        } else if (key.length === 1) {
            this.Response += key
        }

        this._KeysPressed.push(key)
        this._KeyPressTiming.push(new Date() - this.startTime)
    }

    get columns() {
        return [
            ...Object.keys(this),
            'Accuracy',
            'KeysPressed',
            'KeyPressTiming',
            'NumBackspaces',
            'NumLettersFinalResponse',
            'NumNonBackspaces',
            'Time',
            'Date',
            'TimeOnItem',
        ]
    }

    get Accuracy() {
        return this.isCorrect() ? 1 : 0
    }

    get KeysPressed() {
        return this._KeysPressed.join('|')
    }

    get KeyPressTiming() {
        return this._KeyPressTiming.join('|')
    }

    get NumBackspaces() {
        return this._KeysPressed.filter(char => char === 'Backspace').length
    }

    get NumLettersFinalResponse() {
        return this.Response.length
    }

    get NumNonBackspaces() {
        return this._KeysPressed.filter(char => char !== 'Backspace').length
    }

    get TimeOnItem() {
        return this.responseTime - this.startTime
    }

    get Time() {
        return this.startTime.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h24'})
    }

    get Date() {
        return this.startTime.toLocaleDateString('en-US')
    }

    audioSource() {
        const sound = this.Item
        // TODO: replace link to folder with typing to diction stimuli
        // TODO: add stimuli
        return `https://crlabgeorgetown.github.io/behavioral/static/auditory_rhyme_decision_wav_files/${sound}.wav`
    }
}

export { TypingTrial, TypingDecisionTrial }