import { InputDevice, ParticipantId } from '../screens/instruction'
import { LetsPractice } from '../screens/transition'
import { AuditoryLetterIDTrial, AuditorySyllableToGraphemeMatchingTrial } from '../trials/auditory'
import { InstructionAuditoryLetterID, AuditoryLetterIDTrialScreen, InstructionAuditorySyllableToGraphemeMatching, AuditorySyllableToGraphemeMatchingTrialScreen } from '../screens/trials/auditory'

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

class AuditorySyllableToGraphemeMatching {
    constructor() {
        this.screens = [
            ParticipantId, 
            InputDevice,
            InstructionAuditorySyllableToGraphemeMatching,
            LetsPractice
        ]

        this.testNameShort = "AuditorySyllableToGraphemeMatching"
        this.buildTestID = 206
        this.ePrimeTemplateID = 77
        this.fixationDuration = 500
        this.timeToTimeout = 8000
        this.waitDuration = 500

        this.trialClass = AuditorySyllableToGraphemeMatchingTrial
        this.trialScreenClass = AuditorySyllableToGraphemeMatchingTrialScreen
    }
}

export { AuditoryLetterID, AuditorySyllableToGraphemeMatching }