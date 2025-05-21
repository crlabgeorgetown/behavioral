import { InputDevice, ParticipantId } from "../screens/instruction";
import { LetsPractice } from "../screens/transition";
import { ArizonaSemanticTestTrial, WrittenArizonaSemanticTestTrial } from "../trials/arizonaSemanticTest";
import { ArizonaSemanticTestTrialScreen, InstructionArizonaSemanticTest } from "../screens/trials/arizonaSemanticTest";
import { WrittenArizonaSemanticTestTrialScreen, InstructionWrittenArizonaSemanticTest } from "../screens/trials/arizonaSemanticTest";

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

class WrittenArizonaSemanticTest {
    constructor() {
        this.screens = [
            ParticipantId,
            InputDevice,
            InstructionWrittenArizonaSemanticTest,
            LetsPractice
        ]

        this.testNameShort = 'WrittenArizonaSemanticTest'
        this.buildTestID = 228
        this.ePrimeTemplateID = 95
        this.fixationDuration = 500
        this.timeToTimeout = 10000

        this.trialClass = WrittenArizonaSemanticTestTrial
        this.trialScreenClass = WrittenArizonaSemanticTestTrialScreen
    }
}

export { ArizonaSemanticTest, WrittenArizonaSemanticTest }