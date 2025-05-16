import Screen from "../base";
import { TEXT_CONTAINER } from "../../../shared/components/textContainer";
import { INSTRUCTION_BUTTON_CONTAINER } from "../../../shared/components/instructionButtons";
import { IMAGE_CONTAINER, ARIZONA_IMAGE_CONTAINER, ArizonatopleftImage, ArizonatoprightImage, Arizonatargetimage, ArizonabottomleftImage, ArizonabottomrightImage } from "../../../shared/components/imageContainer";

class ArizonaSemanticTestTrialScreen extends Screen {
    get components() {
        return new Map([
            [ARIZONA_IMAGE_CONTAINER, {}],
            [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}]
        ])
    }

    get clickHandlers() {
        return {
            ArizonatopleftImage: (event) => this.proceedClickHandler(event, 'topleft'),
            ArizonatoprightImage: (event) => this.proceedClickHandler(event, 'topright'),
            ArizonabottomleftImage: (event) => this.proceedClickHandler(event, 'bottomleft'),
            ArizonabottomrightImage: (event) => this.proceedClickHandler(event, 'bottomright')
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
        ARIZONA_IMAGE_CONTAINER.hide()
        ArizonatopleftImage.attr('src', this.orchestrator.currentTrial.gettopleftimage())
        ArizonatoprightImage.attr('src', this.orchestrator.currentTrial.gettoprightimage())
        Arizonatargetimage.attr('src', this.orchestrator.currentTrial.gettargetimage())
        ArizonabottomleftImage.attr('src', this.orchestrator.currentTrial.getbottomleftimage())
        ArizonabottomrightImage.attr('src', this.orchestrator.currentTrial.getbottomrightimage())
        setTimeout(() => {
            TEXT_CONTAINER.hide()
            ARIZONA_IMAGE_CONTAINER.show()
            this.orchestrator.currentTrial.startTime = new Date()
            this.timeoutID = setTimeout(() => {
                this.orchestrator.currentTrial.TimedOut = true
                this.orchestrator.currentTrial.responseTime = new Date()
                this.orchestrator.timedOut()
                TEXT_CONTAINER.show()
            }, this.orchestrator.variant.timeToTimeout)
        }, this.orchestrator.variant.fixationDuration)
    }
}

class InstructionArizonaSemanticTest extends Screen {
    get components() {
        IMAGE_CONTAINER.attr('src', 'https://crlabgeorgetown.github.io/behavioral/static/arizonaSemanticTest/PictureASTInstructions.png')
        return new Map([
            [IMAGE_CONTAINER, {}],
            [TEXT_CONTAINER, {text: 'Show me which of these pictures goes with this one.', addClass: 'base-text large-text'}],
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

export { ArizonaSemanticTestTrialScreen, InstructionArizonaSemanticTest }