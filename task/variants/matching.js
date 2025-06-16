import { InputDevice, ParticipantId, InstructionOne } from "../screens/instruction"
import { LetsPractice } from "../screens/transition"
import { CrossCaseLetterTrial, WrittenHomophoneToPictureMatchingTrial } from "../trials/matching"
import { CrossCaseLetterTrialScreen, WrittenHomophoneToPictureMatchingTrialScreen } from "../screens/trials/matching"

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

class WrittenHomophoneToPictureMatching {
    constructor() {
        this.screens = [
            ParticipantId,
            InstructionOne,
            LetsPractice
        ]

        this.testNameShort = 'WrittenHomophonetoPictureMatching'
        this.buildTestID = 205
        this.ePrimeTemplateID = 76
        this.instructionOne = 'You will see a picture and two words.\nDecide which word goes with the picture.'
        this.fixationDuration = 500
        this.timeToTimeout = 8000

        this.trialClass = WrittenHomophoneToPictureMatchingTrial
        this.trialScreenClass = WrittenHomophoneToPictureMatchingTrialScreen
    }
}

export { CrossCaseLetter, WrittenHomophoneToPictureMatching }