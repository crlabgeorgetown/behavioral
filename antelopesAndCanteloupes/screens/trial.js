import { RED_ARROW, REMINDER_BLOCK } from "../components/reminder";
import { STIMULI_GRID } from "../components/stimuliGrid";
import { BaseScreen } from "./base";


class TrialScreen extends BaseScreen {
    components = new Map([
        [REMINDER_BLOCK, {}],
        [STIMULI_GRID, {css: {marginTop: ''}}],

    ])

    get clickHandlers() {
        return {
            stimuli1: () => this.stimuliButtonClickHandler(this.task.currentRound.currentTrial.stimuli[0]),
            stimuli2: () => this.stimuliButtonClickHandler(this.task.currentRound.currentTrial.stimuli[1]),
            stimuli3: () => this.stimuliButtonClickHandler(this.task.currentRound.currentTrial.stimuli[2]),
            stimuli4: () => this.stimuliButtonClickHandler(this.task.currentRound.currentTrial.stimuli[3])
        }
    }

    stimuliButtonClickHandler(stimuli) {
        this.task.currentRound.currentTrial.selections.push(stimuli)
        this.task.currentRound.currentTrial.selectionTimes.push(Date.now())
        if (this.task.currentRound.currentTrial.searchStimuli === stimuli) {
            this.task.currentScreen = this.task.stopScreen
            if (!this.task.currentRound.shouldBeginExperiment()) {
                this.task.currentScreen = this.task.trialScreen
                this.task.currentRound.incrementScheduleIndex()
                this.task.currentRound.newTrial()
            }
            this.task.currentScreen.render()
        }
    }

    render() {
        RED_ARROW.hide()
        this.updateReminders()
        this.setStimuliImages(this.task.currentRound.currentTrial.getImages())
        this.task.currentRound.currentTrial.startTime = Date.now()
        super.render()
    }
}


export { TrialScreen }