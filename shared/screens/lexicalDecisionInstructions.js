import { INSTRUCTION_BUTTON_CONTAINER } from "../components/instructionButtons"
import { BUTTON_CONTAINER, BUTTON_LABEL_CONTAINER } from "../components/responseButtons"
import { TEXT_CONTAINER } from "../components/textContainer"
import Screen from "./base"


class InstructionsOne extends Screen {
    components = new Map([
        [TEXT_CONTAINER, {
            text: 'You will see a sequence of letters on the screen.\nSome of these are real words.\nOthers are not real words.\n',
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
            text: 'If the sequence IS a real word, click \"Real Word.\"\nIf the sequence is NOT a real word, click \"Not a word.\"',
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