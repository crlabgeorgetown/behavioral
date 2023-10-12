import { AUDIO_CONTAINER, AUDIO_SOURCE } from "../../shared/components/audioContainer";
import { BUTTON_CONTAINER, BUTTON_LABEL_CONTAINER } from "../../shared/components/responseButtons"
import { TEXT_CONTAINER } from "../../shared/components/textContainer";
import { DecisionTrialScreen } from "../../shared/screens/decisionTrial";


class AuditoryTrialScreen extends DecisionTrialScreen {
    components = new Map([
        [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text fixed-height'}],
        [AUDIO_CONTAINER, {}],
        [BUTTON_CONTAINER, {}],
        [BUTTON_LABEL_CONTAINER, {}]
    ])

    render() {
        setTimeout(() => {
            this.task.newTrial()
            super.render()
            let sourceIndex = 1
            AUDIO_SOURCE.attr('src', this.task.currentTrial.audioSource(1))
            AUDIO_CONTAINER.off('ended')
            AUDIO_CONTAINER.on('ended', () => {
                switch (sourceIndex) {
                    case 1:
                        sourceIndex++
                        AUDIO_SOURCE.attr('src', this.task.currentTrial.audioSource(2))
                        AUDIO_CONTAINER[0].load()
                        setTimeout(() => {
                            AUDIO_CONTAINER[0].play()
                            this.task.currentTrial.startTime = new Date()
                        }, 500)
                        break
                    case 2:
                        this.task.inTrial = true
                        TEXT_CONTAINER.text('')
                        this.timeoutID = setTimeout(() => this.responseClickHandler('NR'), 5000)
                        break
                }
            })
            AUDIO_CONTAINER[0].load()
            AUDIO_CONTAINER[0].play()
        }, 250)
    }
}

export { AuditoryTrialScreen }