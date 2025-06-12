import Screen from "../base";
import { TEXT_CONTAINER } from "../../../shared/components/textContainer";
import { AUDIO_CONTAINER, AUDIO_SOURCE } from "../../../shared/components/audioContainer";
import { INSTRUCTION_BUTTON_CONTAINER } from "../../../shared/components/instructionButtons";
import { FOUR_IMAGE_CONTAINER, topleftImage, toprightImage, botleftImage, botrightImage, TEXT_CRESP_CONTAINER } from "../../../shared/components/imageContainer";

class AuditoryWordToPictureMatchingReadMapTrialScreen extends Screen {
    get components() {
        return new Map([
            [FOUR_IMAGE_CONTAINER, {addClass: 'four-image-container'}],
            [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],
            [AUDIO_CONTAINER, {}]
        ])
    }

    get clickHandlers() {
        return { 
            topleftImage: (event) => this.proceedClickHandler(event, 'topleft'),
            toprightImage: (event) => this.proceedClickHandler(event, 'topright'),
            botleftImage: (event) => this.proceedClickHandler(event, 'botleft'),
            botrightImage: (event) => this.proceedClickHandler(event, 'botright')
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
        // prepare the trial
        // load the pictures into the containers
        FOUR_IMAGE_CONTAINER.hide()
        topleftImage.attr('src', this.orchestrator.currentTrial.getTopLeft())
        toprightImage.attr('src', this.orchestrator.currentTrial.getTopRight())
        botleftImage.attr('src', this.orchestrator.currentTrial.getBotLeft())
        botrightImage.attr('src', this.orchestrator.currentTrial.getBotRight())

        setTimeout(() => {
            AUDIO_SOURCE.attr('src', this.orchestrator.currentTrial.audioSource())
            AUDIO_CONTAINER[0].load()
            AUDIO_CONTAINER[0].play()
            setTimeout(() => {
                TEXT_CONTAINER.hide()
                FOUR_IMAGE_CONTAINER.show()
                this.orchestrator.currentTrial.startTime = new Date()
                this.timeoutID = setTimeout(() => {
                    this.orchestrator.currentTrial.TimedOut = true
                    this.orchestrator.currentTrial.responseTime = new Date()
                    this.orchestrator.timedOut()
                    TEXT_CONTAINER.show()
                }, this.orchestrator.variant.timeToTimeout)
            }, this.orchestrator.variant.waitDuration)
        }, this.orchestrator.variant.fixationDuration)
        /*
        to show options after audio ends
        setTimeout(() => {
            AUDIO_SOURCE.attr('src', this.orchestrator.currentTrial.audioSource())
            AUDIO_CONTAINER.off('ended')
            AUDIO_CONTAINER.on('ended', () => {
                setTimeout(() => {
                    TEXT_CONTAINER.hide()
                    FOUR_IMAGE_CONTAINER.show()
                    this.orchestrator.currentTrial.startTime = new Date()
                    this.timeoutID = setTimeout(() => {
                        this.orchestrator.currentTrial.TimedOut = true
                        this.orchestrator.currentTrial.responseTime = new Date()
                        this.orchestrator.timedOut()
                        TEXT_CONTAINER.show()
                    }, this.orchestrator.variant.timeToTimeout)
                }, this.orchestrator.variant.waitDuration)
            })
            AUDIO_CONTAINER[0].load()
            AUDIO_CONTAINER[0].play()

        }, this.orchestrator.variant.fixationDuration)
        */
    }
}

class WrittenWordToPictureMatchingReadMapTrialScreen extends Screen {
    get components() {
        return new Map([
            [FOUR_IMAGE_CONTAINER, {addClass: 'four-image-container'}],
            [TEXT_CRESP_CONTAINER, {addClass: 'base-text extra-large-text large-fixed-height overlay-container'}],
            [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}]
        ])
    }

    get clickHandlers() {
        return { 
            topleftImage: (event) => this.proceedClickHandler(event, 'topleft'),
            toprightImage: (event) => this.proceedClickHandler(event, 'topright'),
            botleftImage: (event) => this.proceedClickHandler(event, 'botleft'),
            botrightImage: (event) => this.proceedClickHandler(event, 'botright')
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
        FOUR_IMAGE_CONTAINER.hide()
        TEXT_CRESP_CONTAINER.hide()
        topleftImage.attr('src', this.orchestrator.currentTrial.getTopLeft())
        toprightImage.attr('src', this.orchestrator.currentTrial.getTopRight())
        botleftImage.attr('src', this.orchestrator.currentTrial.getBotLeft())
        botrightImage.attr('src', this.orchestrator.currentTrial.getBotRight())
        TEXT_CRESP_CONTAINER.text(this.orchestrator.currentTrial.CRESP)

        setTimeout(() => {
            TEXT_CONTAINER.hide()
            TEXT_CRESP_CONTAINER.show()
            setTimeout(() => {
                FOUR_IMAGE_CONTAINER.show()
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

class InstructionAuditoryWordToPictureMatching extends Screen {
    get components() {
        topleftImage.attr('src', 'https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/swim.jpeg')
        toprightImage.attr('src', 'https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/run.jpeg')
        botleftImage.attr('src', 'https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/dance.jpeg')
        botrightImage.attr('src', 'https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/climb.jpeg')
        return new Map([
            [FOUR_IMAGE_CONTAINER, {addClass: 'four-image-container-instruction'}],
            [TEXT_CONTAINER, {text: 'You will see four pictures.\nYou will hear a word.\nTouch the picture that matches the word.', addClass: 'base-text medium-text'}],
            [INSTRUCTION_BUTTON_CONTAINER, {}]
        ])
    }

    get clickHandlers() {
        return { 
            nextButton: (event) => this.orchestrator.next(),
            previousButton: (event) => this.orchestrator.previous()
        }
    }
}

class InstructionWrittenWordToPictureMatching extends Screen {
    get components() {
        topleftImage.attr('src', 'https://crlabgeorgetown.github.io/behavioral/static/writtenWordtoPictureMatching/swim.jpeg')
        toprightImage.attr('src', 'https://crlabgeorgetown.github.io/behavioral/static/writtenWordtoPictureMatching/run.jpeg')
        botleftImage.attr('src', 'https://crlabgeorgetown.github.io/behavioral/static/writtenWordtoPictureMatching/dance.jpeg')
        botrightImage.attr('src', 'https://crlabgeorgetown.github.io/behavioral/static/writtenWordtoPictureMatching/climb.jpeg')
        return new Map([
            [FOUR_IMAGE_CONTAINER, {addClass: 'four-image-container-instruction'}],
            [TEXT_CRESP_CONTAINER, {text: "climb", addClass: 'base-text large-text large-fixed-height overlay-container-instruction'}],
            [TEXT_CONTAINER, {text: 'You will see four pictures.\nYou will also see a word.\nTouch the picture that matches the word.', addClass: 'base-text medium-text'}],
            [INSTRUCTION_BUTTON_CONTAINER, {}]
        ])
    }

    get clickHandlers() {
        return { 
            nextButton: (event) => this.orchestrator.next(),
            previousButton: (event) => this.orchestrator.previous()
        }
    }
}

export { InstructionAuditoryWordToPictureMatching, AuditoryWordToPictureMatchingReadMapTrialScreen, InstructionWrittenWordToPictureMatching, WrittenWordToPictureMatchingReadMapTrialScreen }