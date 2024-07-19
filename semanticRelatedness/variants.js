import { InputDevice, InstructionOne, InstructionThree, InstructionTwo, ParticipantId } from "./screens/instruction"
import { LetsPractice } from './screens/transition'
import { AuditoryTrialScreen, WrittenTrialScreen } from "./screens/trial"
import { Trial } from "./trial"


const AUDITORY = 'AUDITORY'
const WRITTEN = 'WRITTEN'

const INSTRUCTION_TWO = 'If they are related, press Related.\nFor example, juice and cup.'
const INSTRUCTION_THREE = 'If they are NOT related, press Not Related.\nFor example, juice and roof.'


function variantFromString(string) {
    return new {
        [AUDITORY]: AuditorySemanticRelatedness,
        [WRITTEN]: WrittenSemanticRelatedness,
    }[string]()
}


class AuditorySemanticRelatedness {
    constructor() {
        this.screens = [
            InputDevice,
            ParticipantId,
            InstructionOne,
            InstructionTwo,
            InstructionThree,
            LetsPractice
        ]
        this.testNameShort = 'AuditorySemanticRelatednessJudgment'
        this.buildTestID = 209
        this.ePrimeTemplateID = 79
        this.instructionOne = 'You will hear two words.'
        this.instructionTwo = INSTRUCTION_TWO
        this.instructionThree = INSTRUCTION_THREE
        this.trialClass = Trial
        this.trialScreenClass = AuditoryTrialScreen
    }
}

class WrittenSemanticRelatedness {
    constructor() {
        this.screens = [
            InputDevice,
            ParticipantId,
            InstructionOne,
            InstructionTwo,
            InstructionThree,
            LetsPractice
        ]
        this.testNameShort = 'WrittenSemanticRelatednessJudgment'
        this.buildTestID = 204
        this.ePrimeTemplateID = 75
        this.instructionOne = 'You will see two words.'
        this.instructionTwo = INSTRUCTION_TWO
        this.instructionThree = INSTRUCTION_THREE
        this.trialClass = Trial
        this.trialScreenClass = WrittenTrialScreen
    }
}


export { variantFromString }