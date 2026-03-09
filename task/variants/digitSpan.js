import { InputDevice, ParticipantId, InstructionOne, InstructionTwo } from "../screens/instruction";
import { LetsPractice } from "../screens/transition";
import { DigitSpanTrial } from "../trials/digitSpan";
import { DigitSpanTrialScreen } from "../screens/trials/digitSpan";

class DigitSpanForward {
    constructor() {
        this.screens = [
            ParticipantId,
            InputDevice,
            InstructionOne,
            InstructionTwo,
            LetsPractice
        ]

        this.testNameShort = 'DigitForward'
        this.buildTestID = 11
        this.ePrimeTemplateID = 9

        this.instructionOne = 'You will hear some numbers.\nWhen the video stops, repeat the numbers.'
        this.instructionTwo = 'This sequence of numbers will get longer.\nListen carefully. The numbers cannot be repeated.'

        this.fixationDuration = 100

        this.trialClass = DigitSpanTrial
        this.trialScreenClass = DigitSpanTrialScreen
    }
}

class DigitSpanBackward {
    constructor() {
        this.screens = [
            ParticipantId,
            InstructionOne,
            InstructionTwo,
            LetsPractice
        ]

        this.testNameShort = 'DigitBackward'
        this.buildTestID = 12
        this.ePrimeTemplateID = 40

        this.instructionOne = 'Now, you\'ll hear more numbers.\nThis time, when the video ends, repeat them backwards.'
        this.instructionTwo = 'This sequence of numbers will get longer.\nListen carefully. The numbers cannot be repeated.'

        this.fixationDuration = 100

        this.trialClass = DigitSpanTrial
        this.trialScreenClass = DigitSpanTrialScreen
    }
}

export { DigitSpanForward, DigitSpanBackward }