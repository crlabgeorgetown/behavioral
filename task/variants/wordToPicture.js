import { InputDevice, ParticipantId } from "../screens/instruction";
import { LetsPractice } from "../screens/transition";
import { AuditoryWordToPictureMatchingReadMapTrial } from "../trials/wordToPicture";
import { AuditoryWordToPictureMatchingReadMapTrialScreen, InstructionAuditoryWordToPictureMatching } from "../screens/trials/wordToPicture";

class AuditoryWordToPictureMatchingReadMap {
    constructor() {
        this.screens = [
            ParticipantId,
            InputDevice,
            InstructionAuditoryWordToPictureMatching,
            LetsPractice
        ]

        this.testShortName = 'AuditoryWordToPictureMatchingReadMap'
        this.buildTestID = 203
        this.ePrimeTemplateID = 74
        this.fixationDuration = 100
        this.timeToTimeout = 10000
        this.waitDuration = 500

        this.trialClass = AuditoryWordToPictureMatchingReadMapTrial
        this.trialScreenClass = AuditoryWordToPictureMatchingReadMapTrialScreen
    }
}

export {AuditoryWordToPictureMatchingReadMap }