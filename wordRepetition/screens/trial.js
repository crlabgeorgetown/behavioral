import { PROCEED_CONTAINER } from "../../shared/components/rightChevron"
import { VIDEO_CONTAINER, VIDEO_SOURCE } from "../../shared/components/videoContainer"
import { TEXT_CONTAINER } from "../../shared/components/textContainer"
import Screen from "./base"


export default class Trial extends Screen {
    constructor(orchestrator, trialManager) {
        super(orchestrator)
        this.trialManager = trialManager
    }

    get components() {
        return new Map([
            [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],
            [VIDEO_CONTAINER, {}],
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
        TEXT_CONTAINER.show()
        this.orchestrator.next()
    }

    startTrial() {
        TEXT_CONTAINER.show()
        VIDEO_CONTAINER.hide()
        PROCEED_CONTAINER.hide()

        setTimeout(() => {
            TEXT_CONTAINER.hide()
            VIDEO_CONTAINER.show()
            VIDEO_SOURCE.attr('src', this.orchestrator.currentTrial.source)
            VIDEO_CONTAINER.off('ended')
            VIDEO_CONTAINER.on('ended', () => {
                VIDEO_CONTAINER.hide()
                PROCEED_CONTAINER.show()
            })
            VIDEO_CONTAINER[0].load()
            VIDEO_CONTAINER[0].play().then(() => {
                this.timeoutID = setTimeout(() => {
                    this.orchestrator.currentTrial.TimedOut = true
                    this.orchestrator.currentTrial.responseTime = new Date()
                    TEXT_CONTAINER.show()
                    this.orchestrator.timedOut()
                }, this.orchestrator.variant.timeToTimeout)
            })
            // Start time used to compute RT is recorded when the audio plays
            this.orchestrator.currentTrial.startTime = new Date()
        }, 100)
    }
}


export { Trial }