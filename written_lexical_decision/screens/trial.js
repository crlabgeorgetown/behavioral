import { BUTTON_CONTAINER, BUTTON_LABEL_CONTAINER } from "../../shared/components/responseButtons"
import { TEXT_CONTAINER } from "../../shared/components/textContainer"
import Screen from "../../shared/screens/base"


class Trial extends Screen {
    components = [
        TEXT_CONTAINER,
        BUTTON_CONTAINER,
        BUTTON_LABEL_CONTAINER
    ]

    get clickHandlers() {
        return {
            greenButton: () => this.responseClickHandler('Real'),
            redButton: () => this.instructionButtonClickHandler('Pseudo')
        }
    }

    get text() {
        return this.task.currentTrial.stimulus
    }

    responseClickHandler(response) {
        const now = Date.now()
        this.task.currentTrial.response = response
        
        const isCorrectLexicality = this.task.currentTrial.lexicality === response
        const isPracticeRound = this.task.currentTrial.trialType === TrialType.Practice

        if (isPracticeRound && !isCorrectLexicality) {
            this.incorrectEvent(false)
        } else {
            this.start(true)
        }
    }
}

export { Trial }