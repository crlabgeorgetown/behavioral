import { PROCEED_CONTAINER } from "../../shared/components/rightChevron"
import { VIDEO_CONTAINER, VIDEO_SOURCE } from "../../shared/components/videoContainer"
import { TEXT_CONTAINER } from "../../shared/components/textContainer"
import Screen from "../../shared/screens/base"


class TrialScreen extends Screen {
    components = new Map([
        [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text fixed-height'}],
        [VIDEO_CONTAINER, {}],
        [PROCEED_CONTAINER, {}],
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
            VIDEO_SOURCE.attr('src', this.task.currentTrial.source)
            VIDEO_CONTAINER[0].load()
            VIDEO_CONTAINER[0].play().then(() => {
                setTimeout(() => TEXT_CONTAINER.text(''), 750)
                setTimeout(() => {
                    this.task.inTrial = true
                    this.timeoutID = setTimeout(() => this.responseClickHandler('NR'), 5000)
                }, 800)
            })
            // Start time used to compute RT is recorded when the audio plays
            this.task.currentTrial.startTime = new Date()
        }, 100)
    }
}

export { TrialScreen }