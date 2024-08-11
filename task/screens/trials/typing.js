import { PROCEED_CONTAINER } from "../../../shared/components/rightChevron";
import { TEXT_CONTAINER } from "../../../shared/components/textContainer";
import { TYPING_CONTAINER, TYPING_INPUT } from "../../../shared/components/typing";
import Screen from "../base";


class TypingBaselineTrialScreen extends Screen {

    get components() {
        return new Map([
            [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],
            [TYPING_CONTAINER, {}],
            [PROCEED_CONTAINER, {}]
        ])
    }

    get clickHandlers() {
        return { rightChevron: (event) => this.proceedClickHandler(event) }
    }

    get eventListeners() {
        return { keydown: (event) => this.keydownHandler(event) }
    }

    keydownHandler(event) {
        this.orchestrator.currentTrial.keydown(event.key)
        TYPING_INPUT.text(this.orchestrator.currentTrial.Response)
    }

    proceedClickHandler(event) {
        event.stopPropagation()  // required in order to prevent container on clicks from triggering immediately after being set
        clearTimeout(this.timeoutID)
        this.orchestrator.currentTrial.responseTime = new Date()

        const isPractice = this.orchestrator.currentTrial.TrialType === 'Practice' 
        
        if (!this.orchestrator.currentTrial.isCorrect() && isPractice) {
            this.orchestrator.replay()
        } else {
            this.orchestrator.next()
        }
    }

    startTrial() {
        PROCEED_CONTAINER.hide()
        TYPING_CONTAINER.hide()
        TYPING_INPUT.text(this.orchestrator.currentTrial.Response)
        setTimeout(() => {
            this.orchestrator.variant.fixationAudio.play()
            PROCEED_CONTAINER.show()
            TYPING_CONTAINER.show()
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