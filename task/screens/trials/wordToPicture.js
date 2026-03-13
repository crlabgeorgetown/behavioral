import Screen from "../base";
import { TEXT_CONTAINER } from "../../../shared/components/textContainer";
import { AUDIO_CONTAINER, AUDIO_SOURCE } from "../../../shared/components/audioContainer";
import { INSTRUCTION_BUTTON_CONTAINER } from "../../../shared/components/instructionButtons";
import {
    FOUR_IMAGE_CONTAINER,
    topleftImage,
    toprightImage,
    botleftImage,
    botrightImage,
    setWordToPictureImages,
    setWordToPictureCresp,
    setWordToPictureImagesVisible
} from "../../../shared/components/imageContainer";

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
        setWordToPictureCresp('', 'base-text extra-large-text word-to-picture-cresp')
        setWordToPictureImagesVisible(true)
        setWordToPictureImages({
            topleft: this.orchestrator.currentTrial.getTopLeft(),
            topright: this.orchestrator.currentTrial.getTopRight(),
            botleft: this.orchestrator.currentTrial.getBotLeft(),
            botright: this.orchestrator.currentTrial.getBotRight()
        })

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
        setWordToPictureImages({
            topleft: this.orchestrator.currentTrial.getTopLeft(),
            topright: this.orchestrator.currentTrial.getTopRight(),
            botleft: this.orchestrator.currentTrial.getBotLeft(),
            botright: this.orchestrator.currentTrial.getBotRight()
        })
        setWordToPictureCresp(this.orchestrator.currentTrial.CRESP, 'base-text extra-large-text word-to-picture-cresp')
        setWordToPictureImagesVisible(false)

        setTimeout(() => {
            TEXT_CONTAINER.hide()
            FOUR_IMAGE_CONTAINER.show()
            setTimeout(() => {
                setWordToPictureImagesVisible(true)
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
        setWordToPictureImages({
            topleft: 'https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/swim.jpeg',
            topright: 'https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/run.jpeg',
            botleft: 'https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/dance.jpeg',
            botright: 'https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/climb.jpeg'
        })
        setWordToPictureCresp('', 'base-text large-text word-to-picture-cresp')
        setWordToPictureImagesVisible(true)
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
        setWordToPictureImages({
            topleft: 'https://crlabgeorgetown.github.io/behavioral/static/writtenWordtoPictureMatching/swim.jpeg',
            topright: 'https://crlabgeorgetown.github.io/behavioral/static/writtenWordtoPictureMatching/run.jpeg',
            botleft: 'https://crlabgeorgetown.github.io/behavioral/static/writtenWordtoPictureMatching/dance.jpeg',
            botright: 'https://crlabgeorgetown.github.io/behavioral/static/writtenWordtoPictureMatching/climb.jpeg'
        })
        setWordToPictureCresp('climb', 'base-text large-text word-to-picture-cresp')
        setWordToPictureImagesVisible(true)
        return new Map([
            [FOUR_IMAGE_CONTAINER, {addClass: 'four-image-container-instruction'}],
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