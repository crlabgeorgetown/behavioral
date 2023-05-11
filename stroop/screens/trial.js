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
            redButton: () => this.colorButtonClickHandler('red'),
            blueButton: () => this.colorButtonClickHandler('blue'),
            greenButton: () => this.colorButtonClickHandler('green')
        }
    }

    colorButtonClickHandler(color) {
        this.task.currentTrial.responses.push(color)
        this.task.currentTrial.responseTimes.push(new Date())
        if (this.task.currentTrial.isCorrectResponse(color)) {
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