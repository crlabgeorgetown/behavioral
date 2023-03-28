import { BUTTON_CONTAINER, BUTTON_LABEL_CONTAINER } from "../../shared/components/responseButtons"
import { TEXT_CONTAINER } from "../../shared/components/textContainer"
import { LexicalDecisionTrialScreen } from "./baseTrial"
import { AUDIO_CONTAINER, AUDIO_SOURCE } from "../components/audioContainer"


class AuditoryTrialScreen extends LexicalDecisionTrialScreen {
    components = new Map([
        [TEXT_CONTAINER, {text: '+', css: {color: '#000000'}}],
        [AUDIO_CONTAINER, {}],
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
        AUDIO_SOURCE.attr('src', this.task.currentTrial.audioSource)
        AUDIO_CONTAINER.on('ended', () => {
            this.task.inTrial = true
            this.task.currentTrial.startTime = new Date()
            this.updateText('')
            this.timeoutID = setTimeout(() => this.responseClickHandler(null), 5000)
        })
        AUDIO_CONTAINER[0].play()
    }
}

export { AuditoryTrialScreen }