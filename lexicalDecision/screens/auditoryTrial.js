import { BUTTON_CONTAINER, BUTTON_LABEL_CONTAINER } from "../../shared/components/responseButtons"
import { TEXT_CONTAINER } from "../../shared/components/textContainer"
import { LexicalDecisionTrialScreen } from "./baseTrial"
import { AUDIO_CONTAINER, AUDIO_SOURCE } from "../components/audioContainer"


class AuditoryTrialScreen extends LexicalDecisionTrialScreen {
    components = new Map([
        [TEXT_CONTAINER, {text: '+', css: {fontSize: '60pt', color: '#000000', height: '90px'}}],
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

        setTimeout(() => {
            this.task.newTrial()
            super.render()
            AUDIO_SOURCE.attr('src', this.task.currentTrial.audioSource)
            AUDIO_CONTAINER.off('ended')
            AUDIO_CONTAINER.on('ended', () => {
                this.task.currentTrial.startTime = new Date()
                this.task.inTrial = true
                this.updateText('')
                this.timeoutID = setTimeout(() => this.responseClickHandler('NR'), 5000)
            })
            AUDIO_CONTAINER[0].load()
            AUDIO_CONTAINER[0].play()
        }, 250)
    }
}

export { AuditoryTrialScreen }