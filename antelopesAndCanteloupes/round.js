import { MAX_PRACTICE_TRIALS } from "./constants"
import { Trial } from "./trial"


class Round {
    constructor(roundIndex, taskType, roundSchedule) {
        this.roundIndex = roundIndex
        this.taskType = taskType
        this.orderedStimuli = taskType.stimuli
        this.roundSchedule = roundSchedule
        this.scheduleIndex = 0
        this.trials = []
        this.newTrial()
    }

    incrementScheduleIndex() {
        // TODO: this only works for roundSchedule lengths 1 or 2
        this.scheduleIndex = this.roundSchedule.length - this.scheduleIndex - 1
    }
 
    getSearchStimuli() {
        return this.orderedStimuli[this.roundSchedule[this.scheduleIndex]]
    }

    getPreviousSearchStimulus() {
        if (this.getStimuliSchedule().length > 1) {
            return this.orderedStimuli[this.roundSchedule[1 - this.scheduleIndex]]
        }

        return this.orderedStimuli[this.roundSchedule[0]]
    }

    getStimuliSchedule() {
        return this.roundSchedule.map((index) => this.orderedStimuli[index])
    }

    getRandomImageNumbers() {
        let imageNumbers = []
        for (let i = 0; i < 4; i++) {
            imageNumbers.push(Math.floor(Math.random() * 10) + 1)
        }
        return imageNumbers
    }

    shuffle() {
        let array = this.orderedStimuli.map((x) => x)
        let currentIndex = array.length
      
        while (currentIndex != 0) {
          let randomIndex = Math.floor(Math.random() * currentIndex)
          currentIndex--
          [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
        }

        return array
    }

    newTrial() {
        const trialType = this.trials.length < MAX_PRACTICE_TRIALS * this.roundSchedule.length ? 'practice': 'experiment'
        const searchStimulus = this.getSearchStimuli()
        let shuffled = this.shuffle()
        let imageNumbers = this.getRandomImageNumbers()

        if (this.trials.length > 0) {
            // ensure full shuffle such that all stimuli are at new locations
            while (
                shuffled.some((el, idx) => this.currentTrial.stimuli.indexOf(el) === idx)
            ) {
                shuffled = this.shuffle()
            }

            // STANDARD tasktype only has 1 image for each stimulus, so no need to shuffle the image number
            if (this.taskType.shouldShuffleImageNumbers) {
                while (this.currentTrial.getSearchStimuliImageNumber() === imageNumbers[shuffled.indexOf(searchStimulus)]) {
                    imageNumbers = this.getRandomImageNumbers()
                }
            }
        }
        
        this.trials.push(new Trial(
            this.roundIndex,
            this.trials.length < 3 ? this.trials.length + 1 : this.trials.length - 2,
            trialType,
            shuffled,
            imageNumbers,
            searchStimulus,
            this.taskType
        ))
    }

    get currentTrial() {
        return this.trials[this.trials.length - 1]
    }

    shouldBeginExperiment() {
        return this.trials.length === MAX_PRACTICE_TRIALS * this.roundSchedule.length
    }
}


export { Round }