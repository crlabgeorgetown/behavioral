import { MAX_PRACTICE_TRIALS } from "./constants"
import { Trial } from "./trial"


class Round {
    constructor(taskType, roundSchedule) {
        this.taskType = taskType
        this.orderedStimuli = taskType.stimuli
        this.roundSchedule = roundSchedule
        this.scheduleIndex = 0
        this.trials = []
        this.newTrial()
    }

    incrementScheduleIndex() {
        this.scheduleIndex++
        if (this.scheduleIndex === this.roundSchedule.length) {
            this.scheduleIndex = 0
        }
    }
 
    getSearchStimuli() {
        return this.orderedStimuli[this.roundSchedule[this.scheduleIndex]]
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
        const trialType = this.trials.length < MAX_PRACTICE_TRIALS ? 'practice': 'experiment'
        const searchStimuli = this.getSearchStimuli()
        let shuffled = this.shuffle()
        let imageNumbers = this.getRandomImageNumbers()
        
        if (this.currentTrial) {
            while (this.currentTrial.getSearchStimulusIndex() === shuffled.indexOf(searchStimuli)) {
                shuffled = this.shuffle()
            }
            while (this.currentTrial.getSearchStimuliImageNumber() === imageNumbers[shuffled.indexOf(searchStimuli)]) {
                imageNumbers = this.getRandomImageNumbers()
            }
        }
        
        this.trials.push(new Trial(
            trialType,
            shuffled,
            imageNumbers,
            searchStimuli,
            this.taskType
        ))
    }

    get currentTrial() {
        return this.trials[this.trials.length - 1]
    }

    shouldBeginExperiment() {
        return this.trials.length === MAX_PRACTICE_TRIALS
    }
}


export { Round }