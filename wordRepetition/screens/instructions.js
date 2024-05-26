import { INSTRUCTION_BUTTON_CONTAINER } from "../../shared/components/instructionButtons"
import { TEXT_CONTAINER } from "../../shared/components/textContainer"
import Screen from "../../shared/screens/base"


class InstructionsOne extends Screen {
    get components() {
        return new Map([
            [TEXT_CONTAINER, {text: this.task.type.instructionText, addClass: 'base-text large-text'}],
            [INSTRUCTION_BUTTON_CONTAINER, {}]
        ])
    }

    get clickHandlers() {
        return {
            nextButton: () => this.instructionButtonClickHandler('next'),
            previousButton: () => this.instructionButtonClickHandler('previous')
        }
    }
}


export { InstructionsOne }