import { COLOR_BUTTON_CONTAINER } from "../components/colorButtons"
import { STIMULUS_CONTAINER } from "../components/stimulusContainer"
import Screen from "../../shared/screens/base"


class TrialScreen extends Screen {
    get components() {
        return new Map([
            [STIMULUS_CONTAINER, {
                text: this.task.currentTrial.Word, 
                addClass: `base-text large-text ${this.task.currentTrial.InkColor}`}],
            [COLOR_BUTTON_CONTAINER, {}]
        ])
    }

    get clickHandlers() {
        return {
            redButton: () => this.colorButtonClickHandler(1),
            greenButton: () => this.colorButtonClickHandler(2),
            blueButton: () => this.colorButtonClickHandler(3),
        }
    }

    colorButtonClickHandler(colorIndex) {
        this.task.currentTrial.newResponse(colorIndex)
        if (this.task.currentTrial.isCorrectResponse(colorIndex)) {
            this.task.inTask = false
            this.task.currentScreen = this.task.trialScreen
            if (this.task.currentRound.isDone) {
                this.task.currentScreen = this.task.stopScreen
            }
            this.task.currentScreen.render()
        }
    }

    render() {
        this.task.currentRound.newTrial()
        super.render()
        this.task.currentTrial.startTime = this.renderTime
        this.task.inTrial = true
    }
}


export { TrialScreen }