import { BUTTON_CONTAINER, BUTTON_LABEL_CONTAINER } from "../../shared/components/responseButtons"
import { TEXT_CONTAINER } from "../../shared/components/textContainer"
import Screen from "../../shared/screens/base"


class TrialScreen extends Screen {
    components = new Map([
        [TEXT_CONTAINER, {text: '+', css: {color: '#000000', fontSize: '60pt'}}],
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

    render() {
        if (this.task.currentProcedure === 'showasbreak') {
            this.task.currentScreen = this.task.breakScreen
            this.task.currentScreen.render()
            return
        }
        
        this.task.newTrial()
        super.render()
        setTimeout(() => {
            this.updateText(this.task.currentTrial.Item)
            this.task.currentTrial.startTime = new Date()
            this.task.inTrial = true
            this.timeoutID = setTimeout(() => this.responseClickHandler('NR'), 5000)
        }, 500)
    }
}

export { TrialScreen }