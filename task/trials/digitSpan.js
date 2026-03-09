class DigitSpanTrial {
    constructor(config) {
        this.ItemNum = config.ItemNum
        this.Weight = config.weight
        this.Nested = config.nested
        this.Procedure = config.Procedure
        this.video = config.video
        this.forwardbutton = config.ForwardButton
        this.TrialWasAdministered = 1
        this.TrialType = config.TrialType
        this.repetitions = config.Repetitions
        this.LengthNumber = config.LengthNumber
        this.Response = null
        this.startTime = new Date()
        this.responseTime = new Date()
        this.TimedOut = false
        this.Discontinued = false
    }

    get columns() {
        return [
            ...Object.keys(this),
            'TimeOnItem',
            'Time',
            'Date',
            'Accuracy',
        ]
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

    get Accuracy() {
        return this.Response
    }

    isCorrect() {
        return this.Response === '1'
    }

    get source() {
        
        return `https://crlabgeorgetown.github.io/behavioral/static/digitSpan/${this.video}.m4v`
    }
}

export { DigitSpanTrial }