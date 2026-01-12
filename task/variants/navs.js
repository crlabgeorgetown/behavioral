import { InputDevice, InstructionOne, InstructionTwo, ParticipantId } from "../screens/instruction";
import { LetsPractice } from "../screens/transition";
import { NAVSTrial } from "../trials/navs";
import { NAVSTrialScreen } from "../screens/trials/navs";

class NAVS {
    constructor() {
        this.screens = [
            ParticipantId,
            InputDevice,
            InstructionOne,
            InstructionTwo,
            LetsPractice
        ]
        this.testNameShort = "NAVSSCT"
        this.buildTestID = 36
        this.ePrimeTemplateID = 28
        this.InstructionOne = "You will see two pictures and hear a sentence.\nTouch the picture that goes with the sentence."
        this.InstructionTwo = "We'll start with a few practice items before we begin."
        this.fixationDuration = 500
        this.timeToTimeout = 10000
        this.trialClass = NAVSTrial
        this.trialScreenClass = NAVSTrialScreen
    }
}

export { NAVS }