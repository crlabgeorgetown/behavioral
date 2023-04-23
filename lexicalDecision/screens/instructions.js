import { INSTRUCTION_BUTTON_CONTAINER } from "../../shared/components/instructionButtons"
import { BUTTON_CONTAINER, BUTTON_LABEL_CONTAINER } from "../../shared/components/responseButtons"
import { TEXT_CONTAINER } from "../../shared/components/textContainer"
import Screen from "../../shared/screens/base"


class InstructionsOne extends Screen {
    get components() {
        let instructionText
        switch (this.task.type) {
            case 'auditory':
                instructionText = 'You will hear a word.\nSome of these words are real words.\nOthers are not real words.'
                break
            case 'written':
                instructionText = 'You will see a string of letters on the screen.\nSome of these letter strings are real words.\nOthers are not real words.\n'
                break
        }
        
        return new Map([
            [TEXT_CONTAINER, {text: instructionText, addClass: 'base-text large-text'}],
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


class InstructionsTwo extends Screen {
    get components() {
        let instructionText
        switch (this.task.type) {
            case 'auditory':
                instructionText = 'If the word IS a real word, touch \"Real word.\"\nIf the word is NOT a real word, touch \"Not a word\"'
                break
            case 'written':
                instructionText = 'If the letter string IS a real word, touch \"Real Word.\"\nIf the letter string is NOT a real word, touch \"Not a word.\"'
                break
        }
        
        return new Map([
            [TEXT_CONTAINER, {text: instructionText, addClass: 'base-text medium-text'}],
            [BUTTON_CONTAINER, {}],
            [BUTTON_LABEL_CONTAINER, {}],
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


class InstructionsThree extends Screen {
    components = new Map([
        [TEXT_CONTAINER, {text: `Let's Practice.`, addClass: 'base-text extra-large-text'}],
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