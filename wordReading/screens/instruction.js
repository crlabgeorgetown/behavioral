import Screen from "./base"
import { INSTRUCTION_BUTTON_CONTAINER } from "../../shared/components/instructionButtons"
import { PARTICIPANT_ID_CONTAINER } from "../../shared/components/participantID"
import { TEXT_CONTAINER } from "../../shared/components/textContainer"


class ParticipantId extends Screen {
    get components() {
        return new Map([
            [PARTICIPANT_ID_CONTAINER, {}],
        ])
    }

    get clickHandlers() {
        return {submitButton: () => this.handleSubmit()}
    }

    handleSubmit() {
        this.orchestrator.collectMetadata('SubjectID', jQuery('#participantIdInput')[0].value)
        this.orchestrator.next()
    }
}


class InstructionOne extends Screen {
    get components() {
        return new Map([
            [TEXT_CONTAINER, {text: this.orchestrator.variant.instructionOne, addClass: 'base-text large-text'}],
            [INSTRUCTION_BUTTON_CONTAINER, {}]
        ])
    }

    get clickHandlers() {
        return {
            nextButton: () => this.orchestrator.next(),
            previousButton: () => this.orchestrator.previous()
        }
    }
}


class InstructionTwo extends Screen {
    get components() {
        return new Map([
            [TEXT_CONTAINER, {text: this.orchestrator.variant.instructionTwo, addClass: 'base-text medium-text'}],
            [INSTRUCTION_BUTTON_CONTAINER, {}]
        ])
    }

    get clickHandlers() {
        return {
            nextButton: () => this.orchestrator.next(),
            previousButton: () => this.orchestrator.previous()
        }
    }
}


export { InstructionOne, InstructionTwo, ParticipantId }
