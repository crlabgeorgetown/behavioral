import { InputDevice, InstructionOne, InstructionThree, InstructionTwoWithButtons, ParticipantId } from "../screens/instruction"
import { LetsPractice } from '../screens/transition'
import { AuditoryTrialScreen, WrittenTrialScreen } from "../screens/trials/semanticRelatedness"
import { Trial } from "../trials/semanticRelatedness"


const INSTRUCTION_TWO = 'If they are related, press Related.\nFor example, juice and cup.'
const INSTRUCTION_THREE = 'If they are NOT related, press Not Related.\nFor example, juice and roof.'


class Base {
    constructor() {
        this.trialClass = Trial
        this.instructionTwo = INSTRUCTION_TWO
        this.instructionThree = INSTRUCTION_THREE
    }
}

class AuditorySemanticRelatedness extends Base {
    constructor() {
        super()
        this.screens = [
            InputDevice,
            ParticipantId,
            InstructionOne,
            InstructionTwoWithButtons,
            InstructionThree,
            LetsPractice
        ]
        this.testNameShort = 'AuditorySemanticRelatednessJudgment'
        this.buildTestID = 209
        this.ePrimeTemplateID = 79
        this.instructionOne = 'You will hear two words.'
        this.trialScreenClass = AuditoryTrialScreen
    }
}

class WrittenSemanticRelatedness extends Base {
    constructor() {
        super()
        this.screens = [
            InputDevice,
            ParticipantId,
            InstructionOne,
            InstructionTwoWithButtons,
            InstructionThree,
            LetsPractice
        ]
        this.testNameShort = 'WrittenSemanticRelatednessJudgment'
        this.buildTestID = 204
        this.ePrimeTemplateID = 75
        this.instructionOne = 'You will see two words.'
        this.trialScreenClass = WrittenTrialScreen
    }
}


export { AuditorySemanticRelatedness, WrittenSemanticRelatedness }