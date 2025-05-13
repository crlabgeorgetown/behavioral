import Screen from "../base";
import { TEXT_CONTAINER } from "../../../shared/components/textContainer";
import { AUDIO_CONTAINER, AUDIO_SOURCE } from "../../../shared/components/audioContainer";
import { SIX_LETTER_CONTAINER, topleft6, topmid6, topright6, botleft6, botmid6, botright6 } from "../../../shared/components/letterContainer";
import { FOUR_LETTER_CONTAINER, topleft4, topright4, botleft4, botright4 } from "../../../shared/components/letterContainer";
import { INSTRUCTION_BUTTON_CONTAINER } from "../../../shared/components/instructionButtons";

class AuditoryLetterIDTrialScreen extends Screen {
    get components() {
        return new Map([
            [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],
            [AUDIO_CONTAINER, {}],
            [SIX_LETTER_CONTAINER, {addClass: 'six-grid-container six-letter-container'}],
        ])
    }

    get clickHandlers() {
        return { 
            topleft6: (event) => this.proceedClickHandler(event, 'topleft'),
            topmid6: (event) => this.proceedClickHandler(event, 'topmid'),
            topright6: (event) => this.proceedClickHandler(event, 'topright'),
            botleft6: (event) => this.proceedClickHandler(event, 'botleft'),
            botmid6: (event) => this.proceedClickHandler(event, 'botmid'),
            botright6: (event) => this.proceedClickHandler(event, 'botright')
        }
    }

    proceedClickHandler(event, location) {
        event.stopPropagation()
        clearTimeout(this.timeoutID)

        this.orchestrator.currentTrial.responseTime = new Date()
        this.orchestrator.currentTrial.ResponseLocation = location
        this.orchestrator.currentTrial.Response = this.orchestrator.currentTrial.location[location]
        const isPractice = this.orchestrator.currentTrial.TrialType === 'Practice'

        if (!this.orchestrator.currentTrial.isCorrect() && isPractice) {
            this.orchestrator.replay()
        } else {
            this.orchestrator.next()
        }
        TEXT_CONTAINER.show()
    }

    startTrial() {
        SIX_LETTER_CONTAINER.hide()
        topleft6.text(this.orchestrator.currentTrial.topleft)
        topmid6.text(this.orchestrator.currentTrial.topmid)
        topright6.text(this.orchestrator.currentTrial.topright)
        botleft6.text(this.orchestrator.currentTrial.botleft)
        botmid6.text(this.orchestrator.currentTrial.botmid)
        botright6.text(this.orchestrator.currentTrial.botright)
        setTimeout(() => {
            AUDIO_SOURCE.attr('src', this.orchestrator.currentTrial.audioSource())
            AUDIO_CONTAINER[0].load()
            TEXT_CONTAINER.hide()
            SIX_LETTER_CONTAINER.show()
            setTimeout(() => {
                AUDIO_CONTAINER[0].play()
                this.orchestrator.currentTrial.startTime = new Date()
                this.timeoutID = setTimeout(() => {
                    this.orchestrator.currentTrial.TimedOut = true
                    this.orchestrator.currentTrial.responseTime = new Date()
                    this.orchestrator.timedOut()
                    TEXT_CONTAINER.show()
                }, this.orchestrator.variant.timeToTimeout)
            }, this.orchestrator.variant.waitDuration)
        }, this.orchestrator.variant.fixationDuration)
    }
}

class AuditorySyllableToGraphemeMatchingTrialScreen extends Screen {
    get components() {
        return new Map([
            [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],
            [AUDIO_CONTAINER, {}],
            [FOUR_LETTER_CONTAINER, {addClass: 'four-grid-container four-letter-container'}],
        ])
    }

    get clickHandlers() {
        return { 
            topleft4: (event) => this.proceedClickHandler(event, 'topleft'),
            botleft4: (event) => this.proceedClickHandler(event, 'botleft'),
            botright4: (event) => this.proceedClickHandler(event, 'botright'),
            topright4: (event) => this.proceedClickHandler(event, 'topright')
        }
    }

    proceedClickHandler(event, location) {
        event.stopPropagation()
        clearTimeout(this.timeoutID)

        this.orchestrator.currentTrial.responseTime = new Date()
        this.orchestrator.currentTrial.ResponseLocation = location
        this.orchestrator.currentTrial.Response = this.orchestrator.currentTrial.location[location]
        const isPractice = this.orchestrator.currentTrial.TrialType === 'Practice'

        if (!this.orchestrator.currentTrial.isCorrect() && isPractice) {
            this.orchestrator.replay()
        } else {
            this.orchestrator.next()
        }
        TEXT_CONTAINER.show()
    }

    startTrial() {
        FOUR_LETTER_CONTAINER.hide()
        topleft4.text(this.orchestrator.currentTrial.topleft)
        botleft4.text(this.orchestrator.currentTrial.botleft)
        botright4.text(this.orchestrator.currentTrial.botright)
        topright4.text(this.orchestrator.currentTrial.topright)
        setTimeout(() => {
            AUDIO_SOURCE.attr('src', this.orchestrator.currentTrial.audioSource())
            AUDIO_CONTAINER[0].load()
            TEXT_CONTAINER.hide()
            FOUR_LETTER_CONTAINER.show()
            setTimeout(() => {
                AUDIO_CONTAINER[0].play()
                this.orchestrator.currentTrial.startTime = new Date()
                this.timeoutID = setTimeout(() => {
                    this.orchestrator.currentTrial.TimedOut = true
                    this.orchestrator.currentTrial.responseTime = new Date()
                    this.orchestrator.timedOut()
                    TEXT_CONTAINER.show()
                }, this.orchestrator.variant.timeToTimeout)
            }, this.orchestrator.variant.waitDuration)
        }, this.orchestrator.variant.fixationDuration)
    }
}

class InstructionAuditoryLetterID extends Screen {
    get components() {
        topleft6.text('d')
        topmid6.text('f')
        topright6.text('j')
        botleft6.text('n')
        botmid6.text('q')
        botright6.text('h')

        return new Map([
            [SIX_LETTER_CONTAINER, {addClass: 'six-grid-container-instruction six-letter-container'}],
            [TEXT_CONTAINER, {text: 'You will see six letters.\nYou will hear a letter.\n\nTouch the letter that you hear.', addClass: 'base-text medium-text'}],
            [INSTRUCTION_BUTTON_CONTAINER, {}]
        ])
    }

    get clickHandlers() {
        return { 
            nextButton: () => this.orchestrator.next(),
            previousButton: () => this.orchestrator.previous()
        }
    }
}

class InstructionAuditorySyllableToGraphemeMatching extends Screen {
    get components() {
        topleft4.text('g')
        topright4.text('s')
        botleft4.text('z')
        botright4.text('f')

        return new Map([
            [FOUR_LETTER_CONTAINER, {addClass: 'four-grid-container-instruction four-letter-container'}],
            [TEXT_CONTAINER, {text: 'You will hear a sound.\nTouch the one that you hear.', addClass: 'base-text medium-text'}],
            [INSTRUCTION_BUTTON_CONTAINER, {}]
        ])
    }

    get clickHandlers() {
        return { 
            nextButton: () => this.orchestrator.next(),
            previousButton: () => this.orchestrator.previous()
        }
    }
}

export { InstructionAuditoryLetterID, AuditoryLetterIDTrialScreen, InstructionAuditorySyllableToGraphemeMatching, AuditorySyllableToGraphemeMatchingTrialScreen }
