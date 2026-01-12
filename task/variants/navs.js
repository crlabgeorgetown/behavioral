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
        this.InstructionOne = ""
        this.InstructionTwo = ""
        this.fixationDuration = 500
        this.timeToTimeout = 10000
        this.trialClass = NAVSTrial
        this.trialScreenClass = NAVSTrialScreen
    }
}

export { NAVS }