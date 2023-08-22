import { TEXT_CONTAINER } from "../../shared/components/textContainer";
import { AUDIO_CONTAINER, AUDIO_SOURCE } from "../../shared/components/audioContainer";
import { BUTTON_CONTAINER, BUTTON_LABEL_CONTAINER } from "../../shared/components/responseButtons";
import Screen from "../../shared/screens/base";


class TrialScreen extends Screen {

    get components() {
        AUDIO_SOURCE.attr('src', 'https://crlabgeorgetown.github.io/behavioral/static/beep.wav')
        return new Map([
            [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],
            [AUDIO_CONTAINER, {}],
            [BUTTON_CONTAINER, {}],
            [BUTTON_LABEL_CONTAINER, {}]
        ])
    }

    render() {
        setTimeout(() => {
            this.task.newTrial()
            TEXT_CONTAINER.text(`${this.task.currentTrial.Word}`)
            super.render()
            this.task.currentTrial.startTime = new Date()
            this.task.inTrial = true
            this.timeoutID = setTimeout(() => {
                this.task.currentScreen = this.task.timeoutScreen

            }, 10000)
        }, 200)
    }
}


export { TrialScreen }