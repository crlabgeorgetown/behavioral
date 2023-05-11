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
                instructionText = 'You will see two words.\nDecide if they rhyme or not.'
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
    components = new Map([
        [TEXT_CONTAINER, {text: 'If the words rhyme, press Rhyme.\nFor example, hat and cat.'}],
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
            text: 'If the words do not rhyme, press No Rhyme.\nFor example, hat and sit.',
            addClass: 'base-text large-text'
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


class InstructionsFour extends Screen {
    components = new Map([
        [TEXT_CONTAINER, {
            text: 'Sometimes the words may look similar, but do NOT rhyme.\nLike wood and food.\n\nOther times the words may look different, but DO rhyme.\nLike mite and night.',
            addClass: 'base-text medium-text'
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


class InstructionFive extends Screen {
    components = new Map([
        [TEXT_CONTAINER, {
            text: 'Decide if the words rhyme based on how they sound in your head, not how they are written.',
            addClass: 'base-text large-text'
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


export { InstructionsOne, InstructionsTwo, InstructionsThree, InstructionsFour, InstructionFive }