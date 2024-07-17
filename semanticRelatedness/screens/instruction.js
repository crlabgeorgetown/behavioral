import Screen from "./base"
import { INPUT_DEVICE_CONTAINER, INPUT_DEVICE_LABEL_CONTAINER } from "../../shared/components/inputDevices"
import { INSTRUCTION_BUTTON_CONTAINER } from "../../shared/components/instructionButtons"
import { PARTICIPANT_ID_CONTAINER } from "../../shared/components/participantID"
import { TEXT_CONTAINER } from "../../shared/components/textContainer"


class InputDevice extends Screen {
    get components() {
        return new Map([
            [INPUT_DEVICE_CONTAINER, {}],
            [INPUT_DEVICE_LABEL_CONTAINER, {}],
            [TEXT_CONTAINER, {text: 'Please choose your input device to start.', addClass: 'base-text large-text'}],
        ])
    }

    get clickHandlers() {
        return {
            mouseButton: () => this.inputDeviceHandler('mouse'),
            trackpadButton: () => this.inputDeviceHandler('trackpad'),
            touchscreenButton: () => this.inputDeviceHandler('touchscreen'),
            otherButton: () => this.inputDeviceHandler('other'),
        }
    }

    inputDeviceHandler(inputDevice) {
        this.orchestrator.collectMetadata('inputDevice', inputDevice)
        this.orchestrator.next()
    }
}


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
            [TEXT_CONTAINER, {text: this.orchestrator.variant.instructionTwo, addClass: 'base-text large-text'}],
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


class InstructionThree extends Screen {
    get components() {
        return new Map([
            [TEXT_CONTAINER, {text: this.orchestrator.variant.instructionThree, addClass: 'base-text large-text'}],
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


export { InputDevice, InstructionOne, InstructionTwo, InstructionThree, ParticipantId }
