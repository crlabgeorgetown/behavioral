import { PROCEED_CONTAINER } from "../../../shared/components/rightChevron";
import { TEXT_CONTAINER } from "../../../shared/components/textContainer";
import Screen from "../base";


export default class WordReadingTrialScreen extends Screen {
    constructor(orchestrator, trialManager) {
        super(orchestrator)
        this.trialManager = trialManager
    }

    get components() {
        return new Map([
            [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],
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
    }

    startTrial() {
        this.orchestrator.variant.fixationAudio.play()
        setTimeout(() => {
            TEXT_CONTAINER.text(`${this.orchestrator.currentTrial.Item}`)
            this.orchestrator.currentTrial.startTime = new Date()
            this.timeoutID = setTimeout(() => {
                this.orchestrator.currentTrial.TimedOut = true
                this.orchestrator.currentTrial.responseTime = new Date()
                this.orchestrator.timedOut()
            }, this.orchestrator.variant.timeToTimeout)
        }, 200)
    }

}