import { RED_ARROW, REMINDER_BLOCK } from "../components/reminder";
import { STIMULI_GRID } from "../components/stimuliGrid";
import { BaseScreen } from "./base";


class TrialScreen extends BaseScreen {
    components = new Map([
        [REMINDER_BLOCK, {}],
        [STIMULI_GRID, {addClass: 'stimuli-grid top-auto-margined'}],

    ])

    get clickHandlers() {
        return {
            stimuli1: () => this.stimuliButtonClickHandler(this.task.currentRound.currentTrial.stimuli[0]),
            stimuli2: () => this.stimuliButtonClickHandler(this.task.currentRound.currentTrial.stimuli[1]),
            stimuli3: () => this.stimuliButtonClickHandler(this.task.currentRound.currentTrial.stimuli[2]),
            stimuli4: () => this.stimuliButtonClickHandler(this.task.currentRound.currentTrial.stimuli[3])
        }
    }

    stimuliButtonClickHandler(stimulus) {
        this.task.currentRound.currentTrial.responses.push(stimulus)
        this.task.currentRound.currentTrial.responseTimes.push(new Date())
        if (this.task.currentRound.currentTrial.isCorrectResponse(stimulus)) {
            this.inTask = false
            this.task.currentScreen = this.task.stopScreen
            this.task.currentRound.incrementScheduleIndex()
            if (!this.task.currentRound.shouldBeginExperiment()) {
                this.task.currentScreen = this.task.trialScreen
                this.task.currentRound.newTrial()
            }
            this.task.currentScreen.render()
        }
    }

    render() {
        RED_ARROW.hide()
        this.updateReminders()
        this.setStimuliImages(this.task.currentRound.currentTrial.getImages())
        this.task.currentRound.currentTrial.startTime = new Date()
        this.task.inTrial = true
        super.render()
    }
}


export { TrialScreen }