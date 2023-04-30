import { TEXT_CONTAINER } from "../../shared/components/textContainer";
import { BUTTON_CONTAINER, BUTTON_LABEL_CONTAINER } from "../../shared/components/responseButtons";
import { DecisionTrialScreen } from "../../shared/screens/decisionTrial";


class WrittenTrialScreen extends DecisionTrialScreen {
    components = new Map([
        [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],
        [BUTTON_CONTAINER, {}],
        [BUTTON_LABEL_CONTAINER, {}]
    ])

    render() {
        this.task.newTrial()
        super.render()
        setTimeout(() => {
            TEXT_CONTAINER.text(`${this.task.currentTrial.Sound1}\n${this.task.currentTrial.Sound2}`)
            this.task.currentTrial.startTime = new Date()
            this.task.inTrial = true
            this.timeoutID = setTimeout(() => this.responseClickHandler('NR'), 5000)
        }, 500)
    }
}


export { WrittenTrialScreen }