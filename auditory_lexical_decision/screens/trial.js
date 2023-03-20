import { BUTTON_CONTAINER, BUTTON_LABEL_CONTAINER } from "../../shared/components/responseButtons"
import { TEXT_CONTAINER } from "../../shared/components/textContainer"
import Screen from "../../shared/screens/base"


class TrialScreen extends Screen {
    components = new Map([
        [TEXT_CONTAINER, {text: '+', css: {color: '#000000', fontSize: '7vw'}}],
        [BUTTON_CONTAINER, {}],
        [BUTTON_LABEL_CONTAINER, {}]
    ])

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
        clearTimeout(this.timeoutID)
        this.task.inTrial = false
        this.task.currentTrial.responseTime = Date.now()
        this.task.currentTrial.response = response
        
        const isCorrectResponse = this.task.currentTrial.correctResponse === response
        const isPracticeRound = this.task.currentTrial.trialType === 'Practice'
        const isLastPracticeRound = this.task.currentProcedure === 'showlastpractice'

        if (isPracticeRound && !isCorrectResponse) {
            this.task.currentScreen = this.task.incorrectScreen
            this.task.newTrial()
        } else if (isLastPracticeRound) {
            this.task.currentScreen = this.task.beginOrPracticeAgainScreen
        } else if (this.task.isDone) {
            this.task.currentScreen = this.task.finishedScreen
        } else if (response === null) {
            this.task.currentScreen = this.task.timeoutScreen
        } else {
            this.task.dataIndex++
            this.task.newTrial()
        }
        this.task.currentScreen.render()
    }

    render() {
        super.render()
        setTimeout(() => {
            this.updateText(this.task.currentTrial.stimulus, {fontSize: '7vw'})
            this.task.currentTrial.startTime = Date.now()
            this.task.inTrial = true
            this.timeoutID = setTimeout(() => this.responseClickHandler(null), 5000)
        }, 500)
    }
}

export { TrialScreen }