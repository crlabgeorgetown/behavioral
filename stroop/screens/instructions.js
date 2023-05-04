import { INSTRUCTION_BUTTON_CONTAINER } from "../../shared/components/instructionButtons"
import { BUTTON_CONTAINER, BUTTON_LABEL_CONTAINER } from "../../shared/components/responseButtons"
import { TEXT_CONTAINER } from "../../shared/components/textContainer"
import Screen from "../../shared/screens/base"


class InstructionsOne extends Screen {
    components = new Map([
        [TEXT_CONTAINER, {text: 'You will see a word in red, green, or blue ink.', addClass: 'base-text large-text'}],
        [COLOR_BUTTON_CONTAINER, {}],
        [INSTRUCTION_BUTTON_CONTAINER, {}]
    ])

    get clickHandlers() {
        return {
            nextButton: () => this.instructionButtonClickHandler('next'),
            previousButton: () => this.instructionButtonClickHandler('previous'),
            redButton: () => this.colorButtonClickHandler('red'),
            blueButton: () => this.colorButtonClickHandler('blue'),
            greenButton: () => this.colorButtonClickHandler('green')
        }
    }
}

export { InstructionsOne }