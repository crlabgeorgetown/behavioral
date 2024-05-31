import Trial from './trial'


export default class SequenceNode {
    constructor(screen) {
        this.screen = screen
        this.previous = null
        this.next = null
        this.trial = null
    }

    initializeTrial(trial) {
        this.trial = new Trial(trial)
    }
}