import Screen from "../base";
import { TEXT_CONTAINER } from "../../../shared/components/textContainer";
import { AUDIO_CONTAINER, AUDIO_SOURCE } from "../../../shared/components/audioContainer";
import { IMAGE_CONTAINER } from "../../../shared/components/imageContainer";

class NAVSTrialScreen extends Screen {
    get components() {
        return new Map([
            [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],
            [IMAGE_CONTAINER, {}],
            [AUDIO_CONTAINER, {}]
        ])
    }

    get clickHandlers() {
        return {
            IMAGE_CONTAINER: (event) => this.proceedClickHandler(event)
        }
    }

    proceedClickHandler(event) {
        event.stopPropagation()  // required in order to prevent container on clicks from triggering immediately after being set
        clearTimeout(this.timeoutID)
        this.orchestrator.currentTrial.responseTime = new Date()
        this.orchestrator.next()
        TEXT_CONTAINER.show()
    }

    startTrial() {
        IMAGE_CONTAINER.hide()
        IMAGE_CONTAINER.attr({src: this.orchestrator.currentTrial.PicLeftSource})

        setTimeout(() => {
            AUDIO_SOURCE.attr('src', this.orchestrator.currentTrial.SentenceSource)
            AUDIO_CONTAINER[0].load()
            AUDIO_CONTAINER[0].play()
            setTimeout(() => {
                TEXT_CONTAINER.hide()
                IMAGE_CONTAINER.show()
                this.orchestrator.currentTrial.startTime = new Date()
                this.timeoutID = setTimeout(() => {
                    this.orchestrator.currentTrial.TimedOut = true
                    this.orchestrator.currentTrial.responseTime = new Date()
                    this.orchestrator.timedOut()
                    TEXT_CONTAINER.show()
                }, this.orchestrator.variant.timeToTimeout)
            }, 500)
        }, this.orchestrator.variant.fixationDuration)
    }
}

export { NAVSTrialScreen }