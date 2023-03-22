import { INSTRUCTION_BUTTON_CONTAINER } from "../components/instructionButtons"
import { BUTTON_CONTAINER, BUTTON_LABEL_CONTAINER } from "../components/responseButtons"
import { TEXT_CONTAINER } from "../components/textContainer"
import Screen from "./base"


class InstructionsOne extends Screen {
    components = new Map([
        [TEXT_CONTAINER, {
            text: 'You will see a string of letters on the screen.\nSome of these letter strings are real words.\nOthers are not real words.\n',
            css: {fontSize: '45pt'}
        }],
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
            text: 'If the letter string IS a real word, touch \"Real Word.\"\nIf the letter string is NOT a real word, touch \"Not a word.\"',
            css: {fontSize: '40pt'}
        }],
        [BUTTON_CONTAINER, {}],
        [BUTTON_LABEL_CONTAINER, {}],
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
            text: `Let's Practice.`
        }],
        [INSTRUCTION_BUTTON_CONTAINER, {}]
    ])

    get clickHandlers() {
        return {
            nextButton: () => this.instructionButtonClickHandler('next'),
            previousButton: () => this.instructionButtonClickHandler('previous')
        }
    }
}


export {InstructionsOne, InstructionsTwo, InstructionsThree}