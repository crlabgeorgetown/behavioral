import { BUTTON_CONTAINER, BUTTON_LABEL_CONTAINER } from "../../shared/components/responseButtons"
import { TEXT_CONTAINER } from "../../shared/components/textContainer"
import { LexicalDecisionTrialScreen } from "./baseTrial"


class WrittenTrialScreen extends LexicalDecisionTrialScreen {
    components = new Map([
        [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text'}],
        [BUTTON_CONTAINER, {}],
        [BUTTON_LABEL_CONTAINER, {}]
    ])

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

export { WrittenTrialScreen }