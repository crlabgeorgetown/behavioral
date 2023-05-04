import { INSTRUCTION_BUTTON_CONTAINER } from "../../shared/components/instructionButtons"
import { TEXT_CONTAINER } from "../../shared/components/textContainer"
import { COLOR_BUTTON_CONTAINER } from "../components/colorButtons"
import { STIMULUS_CONTAINER } from "../components/stimulusContainer"
import Screen from "../../shared/screens/base"


class InstructionsOne extends Screen {
    components = new Map([
        [TEXT_CONTAINER, {
            text: 'You will see a word in red, green, or blue ink.', 
            addClass: 'base-text medium-text vertically-marginless medium-fixed-height'
        }],
        [STIMULUS_CONTAINER, {text: 'plan', addClass: 'base-text large-text red'}],
        [COLOR_BUTTON_CONTAINER, {}],
        [INSTRUCTION_BUTTON_CONTAINER, {}]
    ])

    get clickHandlers() {
        return {
            nextButton: () => this.instructionButtonClickHandler('next'),
            previousButton: () => this.instructionButtonClickHandler('previous')
        }
    }
}


class InstructionsTwo extends Screen {
    components = new Map([
        [TEXT_CONTAINER, {
            text: 'Press the color of the ink.',
            addClass: 'base-text medium-text vertically-marginless medium-fixed-height'
        }],
        [STIMULUS_CONTAINER, {text: 'red', addClass: 'base-text large-text red'}],
        [COLOR_BUTTON_CONTAINER, {}],
        [INSTRUCTION_BUTTON_CONTAINER, {}]
    ])

    get clickHandlers() {
        return {
            nextButton: () => this.instructionButtonClickHandler('next'),
            previousButton: () => this.instructionButtonClickHandler('previous')
        }
    }
}


class InstructionsThree extends Screen {
    components = new Map([
        [TEXT_CONTAINER, {
            text: 'Sometimes the word and the ink color will not match.\nAlways press the color of the ink!', 
            addClass: 'base-text medium-text vertically-marginless medium-fixed-height'
        }],
        [STIMULUS_CONTAINER, {text: 'red', addClass: 'base-text large-text blue'}],
        [COLOR_BUTTON_CONTAINER, {}],
        [INSTRUCTION_BUTTON_CONTAINER, {}]
    ])

    get clickHandlers() {
        return {
            nextButton: () => this.instructionButtonClickHandler('next'),
            previousButton: () => this.instructionButtonClickHandler('previous')
        }
    }
}

export { InstructionsOne, InstructionsTwo, InstructionsThree }