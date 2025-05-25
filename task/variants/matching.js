import { InputDevice, ParticipantId, InstructionOne } from "../screens/instruction"
import { LetsPractice } from "../screens/transition"
import { CrossCaseLetterTrial } from "../trials/matching"
import { CrossCaseLetterTrialScreen } from "../screens/trials/matching"

class CrossCaseLetter {
    constructor() {
        this.screens = [
            ParticipantId,
            InputDevice,
            InstructionOne,
            LetsPractice
        ]

        this.testNameShort = 'CrossCaseLetter'
        this.buildTestID = 155
        this.ePrimeTemplateID = 51
        this.fixationDuration = 500
        this.timeToTimeout = 5000

        this.instructionOne = 'You will see a letter.\nSelect the matching letter.'
        this.customPracticeText = `We'll do some practice items before we begin.`

        this.trialClass = CrossCaseLetterTrial
        this.trialScreenClass = CrossCaseLetterTrialScreen
    }
}

export { CrossCaseLetter }