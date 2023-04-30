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
            AUDIO_SOURCE.attr('src', this.task.currentTrial.audioSource)
            AUDIO_CONTAINER.off('ended')
            AUDIO_CONTAINER.on('ended', () => {
                this.task.currentTrial.startTime = new Date()
                this.task.inTrial = true
                TEXT_CONTAINER.text('')
                this.timeoutID = setTimeout(() => this.responseClickHandler('NR'), 5000)
            })
            AUDIO_CONTAINER[0].load()
            AUDIO_CONTAINER[0].play()
        }, 250)
    }
}

export { AuditoryTrialScreen }