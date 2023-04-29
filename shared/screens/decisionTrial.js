import Screen from "./base"
import { GREEN_BUTTON, RED_BUTTON } from "../components/responseButtons"



class DecisionTrialScreen extends Screen {
    get clickHandlers() {
        return {
            greenButton: () => this.responseClickHandler('yes'),
            redButton: () => this.responseClickHandler('no')
        }
    }

    responseClickHandler(response) {
        if (!this.task.inTrial) {
            return
        }
        GREEN_BUTTON.mouseout()
        RED_BUTTON.mouseout()
        clearTimeout(this.timeoutID)
        this.task.inTrial = false
        this.task.currentTrial.responseTime = new Date()
        this.task.currentTrial.Response = response
        
        const isCorrectResponse = this.task.currentTrial.CRESP === response
        const isPracticeRound = this.task.currentTrial.TrialType === 'Practice'
        const isLastPracticeRound = this.task.currentProcedure === 'showlastpractice'

        if (isPracticeRound && !isCorrectResponse) {
            this.task.currentScreen = this.task.incorrectScreen
        } else if (isLastPracticeRound) {
            this.task.currentScreen = this.task.beginOrPracticeAgainScreen
        } else if (this.task.isDone) {
            this.task.currentScreen = this.task.finishedScreen
        } else if (response === 'NR') {
            this.task.currentScreen = this.task.timeoutScreen
        } else {
            this.task.dataIndex++
        }
        this.task.currentScreen.render()
    }
}

export { DecisionTrialScreen }