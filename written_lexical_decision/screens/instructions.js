import { INSTRUCTION_BUTTON_CONTAINER } from "../../shared/components/instructionButtons"
import { BUTTON_CONTAINER, BUTTON_LABEL_CONTAINER } from "../../shared/components/responseButtons"
import { TEXT_CONTAINER } from "../../shared/components/textContainer"
import Screen from "../../shared/screens/base"


class InstructionsOne extends Screen {
    components = [
        TEXT_CONTAINER,
        INSTRUCTION_BUTTON_CONTAINER
    ]
    text = 'You will see a string of letters on the screen.\nSome of these letter strings are real words.\nOthers are not real words.\n'

    get clickHandlers() {
        return {
            nextButton: () => this.instructionButtonClickHandler('next'),
            previousButton: () => this.instructionButtonClickHandler('previous')
        }
    }
}


class InstructionsTwo extends Screen {
    components = [
        TEXT_CONTAINER,
        BUTTON_CONTAINER,
        BUTTON_LABEL_CONTAINER,
        INSTRUCTION_BUTTON_CONTAINER
    ]
    text = 'If the letter IS a real word, click \"Real Word.\"\nIf the letter is NOT a real word, click \"Not a word.\"'

    get clickHandlers() {
        return {
            nextButton: () => this.instructionButtonClickHandler('next'),
            previousButton: () => this.instructionButtonClickHandler('previous')
        }
    }
}


class InstructionsThree extends Screen {
    components = [
        TEXT_CONTAINER,
        INSTRUCTION_BUTTON_CONTAINER
    ]
    text = `Let's Practice.`

    get clickHandlers() {
        return {
            nextButton: () => this.instructionButtonClickHandler('next'),
            previousButton: () => this.instructionButtonClickHandler('previous')
        }
    }
}


export {InstructionsOne, InstructionsTwo, InstructionsThree}