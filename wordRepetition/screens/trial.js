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

        VIDEO_CONTAINER.hide()
        PROCEED_CONTAINER.hide()
        super.render()

        setTimeout(() => {
            this.task.newTrial()
            TEXT_CONTAINER.hide()
            VIDEO_CONTAINER.show()
            VIDEO_SOURCE.attr('src', this.task.currentTrial.source)
            VIDEO_CONTAINER.off('ended')
            VIDEO_CONTAINER.on('ended', () => {
                VIDEO_CONTAINER.hide()
                PROCEED_CONTAINER.show()
            })
            VIDEO_CONTAINER[0].load()
            VIDEO_CONTAINER[0].play()
            // Start time used to compute RT is recorded when the audio plays
            this.task.currentTrial.startTime = new Date()
        }, 100)
    }
}

export { TrialScreen }