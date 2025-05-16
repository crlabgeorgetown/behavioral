import Screen from "../base";
import { TEXT_CONTAINER } from "../../../shared/components/textContainer";
import { INSTRUCTION_BUTTON_CONTAINER } from "../../../shared/components/instructionButtons";
import { IMAGE_CONTAINER, topleftImage } from "../../../shared/components/imageContainer";

class ArizonaSemanticTestTrialScreen extends Screen {
    get components() {
        return new Map([
            [ARIZONA_IMAGE_CONTAINER, {}],
            [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}]
        ])
    }

    get clickHandlers() {
        return {
            topleftImage: (event) => this.proceedClickHandler(event, 'topleft'),
            toprightImage: (event) => this.proceedClickHandler(event, 'topright'),
            bottomleftImage: (event) => this.proceedClickHandler(event, 'bottomleft'),
            bottomrightImage: (event) => this.proceedClickHandler(event, 'bottomright')
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
        IMAGE_CONTAINER.hide()
        topleftImage.attr('src', this.orchestrator.currentTrial.getTopLeft())
        toprightImage.attr('src', this.orchestrator.currentTrial.getTopRight())
        bottomleftImage.attr('src', this.orchestrator.currentTrial.getBotLeft())
        bottomrightImage.attr('src', this.orchestrator.currentTrial.getBotRight())

        setTimeout(() => {
            IMAGE_CONTAINER.show()
            this.orchestrator.currentTrial.startTime = new Date()
            this.timeoutID = setTimeout(() => {
                this.orchestrator.next()
            }, this.orchestrator.currentTrial.timeToTimeout)
        }, 1000)
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