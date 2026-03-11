import { VIDEO_CONTAINER, VIDEO_SOURCE } from "../../../shared/components/videoContainer";
import { TEXT_CONTAINER } from "../../../shared/components/textContainer";
import Screen from "../base";
import SequenceNode from "../../sequenceNode";

class DigitSpanTrialScreen extends Screen {
    get components() {
        return new Map([
            [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],
            [VIDEO_CONTAINER, {}]
        ])
    }

    get eventListeners() {
        return { keydown: (event) => this.keydownHandler(event) }
    }

    keydownHandler(event) {
        if (event.key === "1" || event.key === "0") {
            this.orchestrator.currentTrial.Response = event.key
            this.proceedClickHandler(event)
        }
    }

    proceedClickHandler(event) {
        event.stopPropagation()
        clearTimeout(this.timeoutID)
        this.orchestrator.currentTrial.responseTime = new Date()

        const isPractice = this.orchestrator.currentTrial.TrialType === 'Practice'

        if (!this.orchestrator.currentTrial.isCorrect() && isPractice) {
            this.orchestrator.replay()
        } else {
            if (this.discontinue()) { this.terminate()}
            else { this.orchestrator.next() }
        }
        TEXT_CONTAINER.show()

    }

    discontinue() {
        const currentTrial = this.orchestrator.currentTrial
        if (currentTrial.Response !== '0' || Number(currentTrial.LengthNumber) !== 2) {
            return false
        }

        let previousNode = this.orchestrator.currentScreen.previous
        while (previousNode !== null && previousNode.trial === null) {
            previousNode = previousNode.previous
        }

        if (previousNode === null || previousNode.trial === null) {
            return false
        }

        const previousTrial = previousNode.trial
        return previousTrial.Response === '0' && Number(previousTrial.LengthNumber) === 1

    }

    terminate() {
        const originalNext = this.orchestrator.currentScreen.next
        let nextNode = originalNext

        while (nextNode !== null) {
            if (nextNode.trial !== null) {
                nextNode.trial.Discontinued = true
                nextNode.trial.TrialWasAdministered = 0
            }
            nextNode = nextNode.next
        }

        const completeNode = new SequenceNode(this.orchestrator.completeScreen)
        completeNode.next = originalNext
        this.orchestrator.currentScreen.next = completeNode
        this.orchestrator.next()
        if (this.orchestrator.currentScreen.screen === this.orchestrator.completeScreen) {
            this.orchestrator.complete()
        }

    }

    startTrial() {
        TEXT_CONTAINER.show()
        VIDEO_CONTAINER.hide()
        
        VIDEO_SOURCE.attr('src', this.orchestrator.currentTrial.source)
        VIDEO_CONTAINER.off('ended')
        VIDEO_CONTAINER.on('ended', () => {
            VIDEO_CONTAINER.hide()
        })
        VIDEO_CONTAINER[0].load()
        setTimeout(() => {
            TEXT_CONTAINER.hide()
            VIDEO_CONTAINER.show()
            VIDEO_CONTAINER[0].play()

            this.orchestrator.currentTrial.startTime = new Date()
        }, this.orchestrator.variant.fixationTime)
    }
}

export { DigitSpanTrialScreen }