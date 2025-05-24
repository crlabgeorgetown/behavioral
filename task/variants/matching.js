import { InputDevice, ParticipantId, InstructionOne, InstructionTwo } from "../screens/instruction";
import { CrossCaseLetterTrial } from "../trials/matching";
import { CrossCaseLetterTrialScreen } from "../screens/trials/matching";

class CrossCaseLetter {
    constructor() {
        this.screens = [
            ParticipantId,
            InputDevice,
            InstructionOne,
            InstructionTwo
        ]

        this.testNameShort = "CrossCaseLetter"
        this.buildTestID = 155
        this.ePrimeTemplateID = 51
        this.fixationDuration = 500
        this.timeToTimeout = 5000

        this.instructionOne = "You will see a letter.\nSelect the matching letter."
        this.instructionTwo = "We'll start with a few practice items before we begin."

        this.trialClass = CrossCaseLetterTrial
        this.trialScreenClass = CrossCaseLetterTrialScreen
    }
}

export { CrossCaseLetter }