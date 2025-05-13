import Screen from "../base";
import { TEXT_CONTAINER } from "../../../shared/components/textContainer";
import { AUDIO_CONTAINER, AUDIO_SOURCE } from "../../../shared/components/audioContainer";
import { SIX_LETTER_CONTAINER, topleft, topmid, topright, botleft, botmid, botright, FOUR_LETTER_CONTAINER } from "../../../shared/components/letterContainer";
import { INSTRUCTION_BUTTON_CONTAINER } from "../../../shared/components/instructionButtons";

class AuditoryLetterIDTrialScreen extends Screen {
    get components() {
        return new Map([
            [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],
            [AUDIO_CONTAINER, {}],
            [SIX_LETTER_CONTAINER, {addClass: 'grid-container six-letter-container'}],
        ])
    }

    get clickHandlers() {
        return { 
            topleft: (event) => this.proceedClickHandler(event, 'topleft'),
            topmid: (event) => this.proceedClickHandler(event, 'topmid'),
            topright: (event) => this.proceedClickHandler(event, 'topright'),
            botleft: (event) => this.proceedClickHandler(event, 'botleft'),
            botmid: (event) => this.proceedClickHandler(event, 'botmid'),
            botright: (event) => this.proceedClickHandler(event, 'botright')
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
        topleft.text(this.orchestrator.currentTrial.topleft)
        topmid.text(this.orchestrator.currentTrial.topmid)
        topright.text(this.orchestrator.currentTrial.topright)
        botleft.text(this.orchestrator.currentTrial.botleft)
        botmid.text(this.orchestrator.currentTrial.botmid)
        botright.text(this.orchestrator.currentTrial.botright)
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
            [FOUR_LETTER_CONTAINER, {addClass: 'grid-container four-letter-container'}],
        ])
    }

    get clickHandlers() {
        return { 
            topleft: (event) => this.proceedClickHandler(event, 'topleft'),
            botleft: (event) => this.proceedClickHandler(event, 'botleft'),
            botright: (event) => this.proceedClickHandler(event, 'botright'),
            topright: (event) => this.proceedClickHandler(event, 'topright')
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
        topleft.text(this.orchestrator.currentTrial.topleft)
        botleft.text(this.orchestrator.currentTrial.botleft)
        botright.text(this.orchestrator.currentTrial.botright)
        topright.text(this.orchestrator.currentTrial.topright)
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
        topleft.text('d')
        topmid.text('f')
        topright.text('j')
        botleft.text('n')
        botmid.text('q')
        botright.text('h')
        return new Map([
            [SIX_LETTER_CONTAINER, {addClass: 'grid-container-instruction six-letter-container'}],
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
        topleft.text('g')
        topright.text('s')
        botleft.text('z')
        botright.text('f')

        return new Map([
            [FOUR_LETTER_CONTAINER, {addClass: 'grid-container-instruction four-letter-container'}],
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
