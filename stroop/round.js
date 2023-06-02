import { BlockType } from './constants'
import { Trial } from './trial'


class Round {
    constructor(blockNum, config) {
        this.blockType = BlockType.fromString(config.BlockType)
        this.trialType = config.TrialType
        this.InkColorSchedule = config.InkColorSchedule
        this.WordStringSchedule = config.WordStringSchedule
        this.trials = []
        this.blockNum = blockNum
    }

    get isDone() {
        return this.trials.length === this.WordStringSchedule.length
    }

    get currentTrial() {
        return this.trials[this.trials.length - 1]
    }

    newTrial() {
        this.trials.push(new Trial(
            this.blockNum,
            this.trials.length + 1,
            this.trialType,
            this.blockType, 
            this.InkColorSchedule[this.trials.length], 
            this.WordStringSchedule[this.trials.length]
        ))
    }
}


export { Round }