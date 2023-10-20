import { BUTTON_CONTAINER, BUTTON_LABEL_CONTAINER } from "../../shared/components/responseButtons"
import { AUDIO_CONTAINER, AUDIO_SOURCE } from "../../shared/components/audioContainer"
import { TEXT_CONTAINER } from "../../shared/components/textContainer"
import { DecisionTrialScreen } from "../../shared/screens/decisionTrial"


class AuditoryTrialScreen extends DecisionTrialScreen {
    components = new Map([
        [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text fixed-height'}],
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
            AUDIO_CONTAINER[0].load()
            AUDIO_CONTAINER[0].play().then(() => {
                setTimeout(() => TEXT_CONTAINER.text(''), 750)
                setTimeout(() => {
                    this.task.inTrial = true
                    this.timeoutID = setTimeout(() => this.responseClickHandler('NR'), 5000)
                }, 800)
            })
            // Start time used to compute RT is recorded when the audio plays
            this.task.currentTrial.startTime = new Date()
        }, 250)
    }
}

export { AuditoryTrialScreen }