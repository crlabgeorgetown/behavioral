

export default class SequenceNode {
    constructor(screen) {
        this.screen = screen
        this.previous = null
        this.next = null
        this.trial = null
    }

    initializeTrial(trialClass, trial) {
        this.trial = new trialClass(trial)
    }
}