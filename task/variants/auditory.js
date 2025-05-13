import { InputDevice, ParticipantId } from '../screens/instruction'
import { LetsPractice } from '../screens/transition'
import { AuditoryLetterIDTrial } from '../trials/auditory'
import { InstructionAuditoryLetterID, AuditoryLetterIDTrialScreen } from '../screens/trials/auditory'

class AuditoryLetterID {
    constructor() {
        this.screens = [
            ParticipantId, 
            InputDevice,
            InstructionAuditoryLetterID,
            LetsPractice
        ]

        this.testNameShort = "AuditoryLetterID"
        this.buildTestID = 191
        this.ePrimeTemplateID = 62
        this.fixationDuration = 250
        this.timeToTimeout = 8000
        this.waitDuration = 500

        this.trialClass = AuditoryLetterIDTrial
        this.trialScreenClass = AuditoryLetterIDTrialScreen
    }
}



export { AuditoryLetterID }