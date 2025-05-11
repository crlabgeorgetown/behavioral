import { PROCEED_CONTAINER } from "../../../shared/components/rightChevron";
import { TEXT_CONTAINER } from "../../../shared/components/textContainer";
import { TYPING_CONTAINER, TYPING_INPUT } from "../../../shared/components/typing";
import { AUDIO_CONTAINER, AUDIO_SOURCE} from "../../../shared/components/audioContainer";
import { REPLAY_CONTAINER } from "../../../shared/components/replayAudio";
import Screen from "../base";


class TypingBaselineTrialScreen extends Screen {

    get components() {
        return new Map([
            [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],
            [PROCEED_CONTAINER, {}],
            [TYPING_CONTAINER, {}]
        ])
    }

    get clickHandlers() {
        return { rightChevron: (event) => this.proceedClickHandler(event) }
    }

    get eventListeners() {
        return { keydown: (event) => this.keydownHandler(event) }
    }

    keydownHandler(event) {
        if (event.key === "Enter") {this.proceedClickHandler(event)}
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

class TypingDecisionTrialScreen extends Screen {
    get components() {
        return new Map([
            [REPLAY_CONTAINER, {addClass: 'right-margined'}],
            [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],
            [AUDIO_CONTAINER, {}],
            [PROCEED_CONTAINER, {}],
            [TYPING_CONTAINER, {}]
        ])
    }

    get clickHandlers() {
        return {
            rightChevron: (event) => this.proceedClickHandler(event),
            replayAudio: (event) => this.replayClickHandler(event)
         }
    }

    get eventListeners() {
        return { keydown: (event) => this.keydownHandler(event) }
    }

    keydownHandler(event) {
        if (event.key === "Enter") {this.proceedClickHandler(event)}
        this.orchestrator.currentTrial.keydown(event.key)
        TYPING_INPUT.text(this.orchestrator.currentTrial.Response)
    }

    proceedClickHandler(event) {
        event.stopPropagation()
        clearTimeout(this.timeoutID)

        this.orchestrator.currentTrial.responseTime = new Date()
        const isPractice = this.orchestrator.currentTrial.TrialType === 'Practice'

        if (!this.orchestrator.currentTrial.isCorrect() && isPractice) {
            this.orchestrator.replay()
        } else {
            this.orchestrator.next()
        }
    }

    replayClickHandler(event) {
        AUDIO_CONTAINER[0].play()
        this.orchestrator.currentTrial.Repetitions++
    }

    startTrial() {
        PROCEED_CONTAINER.hide()
        REPLAY_CONTAINER.hide()
        TYPING_CONTAINER.hide()
        TYPING_INPUT.text(this.orchestrator.currentTrial.Response)
        setTimeout(() => {
            TEXT_CONTAINER.text('')
            AUDIO_SOURCE.attr('src', this.orchestrator.currentTrial.audioSource())
            PROCEED_CONTAINER.show()
            REPLAY_CONTAINER.show()
            TYPING_CONTAINER.show()
            AUDIO_CONTAINER[0].load()
            AUDIO_CONTAINER[0].play()
            this.orchestrator.currentTrial.startTime = new Date()
            this.timeoutID = setTimeout(() => {
                this.orchestrator.currentTrial.TimedOut = true
                this.orchestrator.currentTrial.responseTime = new Date()
                this.orchestrator.timedOut()
            }, this.orchestrator.variant.timeToTimeout)
        }, this.orchestrator.variant.fixationDuration)
    }
}

export { TypingBaselineTrialScreen , TypingDecisionTrialScreen }