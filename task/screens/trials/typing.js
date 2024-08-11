import { PROCEED_CONTAINER } from "../../../shared/components/rightChevron";
import { TEXT_CONTAINER } from "../../../shared/components/textContainer";
import { TYPING_INPUT } from "../../../shared/components/typing";
import Screen from "../base";


class TypingBaselineTrialScreen extends Screen {

    get components() {
        return new Map([
            [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],
            [PROCEED_CONTAINER, {}],
            [TYPING_INPUT, {}],
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
            this.orchestrator.currentTrial.startTime = new Date()
            TEXT_CONTAINER.text(this.orchestrator.currentTrial.Item)
            this.timeoutID = setTimeout(() => {
                this.orchestrator.currentTrial.TimedOut = true
                this.orchestrator.currentTrial.responseTime = new Date()
                this.orchestrator.timedOut()
            }, this.orchestrator.variant.timeToTimeout)
        }, this.orchestrator.variant.fixationDuration)
    }

}


export { TypingBaselineTrialScreen }