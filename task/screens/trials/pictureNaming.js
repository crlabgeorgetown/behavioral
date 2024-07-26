import { IMAGE_CONTAINER } from "../../../shared/components/imageContainer";
import { PROCEED_CONTAINER } from "../../../shared/components/rightChevron";
import { TEXT_CONTAINER } from "../../../shared/components/textContainer";
import Screen from "../base";


export default class PictureNamingTrialScreen extends Screen {

    get components() {
        return new Map([
            [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],
            [IMAGE_CONTAINER, {}],
            [PROCEED_CONTAINER, {}]
        ])
    }

    get clickHandlers() {
        return {
            rightChevron: (event) => this.proceedClickHandler(event),
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
        this.orchestrator.variant.fixationAudio.play()
        IMAGE_CONTAINER.hide()
        IMAGE_CONTAINER.attr({src: this.orchestrator.currentTrial.source})
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
        }, this.orchestrator.variant.fixationDuration)
    }

}