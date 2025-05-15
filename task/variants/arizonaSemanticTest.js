import { InputDevice, ParticipantId } from "../screens/instruction";
import { LetsPractice } from "../screens/transition";
import { ArizonaSemanticTestTrial } from "../trials/arizonaSemanticTest";
import { ArizonaSemanticTestTrialScreen, InstructionArizonaSemanticTest } from "../screens/trials/arizonaSemanticTest";

class ArizonaSemanticTest {
    constructor() {
        this.screens = [
            ParticipantId,
            InputDevice,
            InstructionArizonaSemanticTest,
            LetsPractice
        ]

        this.testNameShort = 'ArizonaSemanticTest'
        this.buildTestID = 227
        this.ePrimeTemplateID = 94
        this.fixationDuration = 500
        this.timeToTimeout = 10000

        this.trialClass = ArizonaSemanticTestTrial
        this.trialScreenClass = ArizonaSemanticTestTrialScreen
    }
}

export { ArizonaSemanticTest }