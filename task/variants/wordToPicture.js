import { InputDevice, ParticipantId } from "../screens/instruction";
import { LetsPractice } from "../screens/transition";
import { AuditoryWordToPictureMatchingReadMapTrial, WrittenWordToPictureMatchingReadMapTrial } from "../trials/wordToPicture";
import { AuditoryWordToPictureMatchingReadMapTrialScreen, InstructionAuditoryWordToPictureMatching } from "../screens/trials/wordToPicture";
import { WrittenWordToPictureMatchingReadMapTrialScreen, InstructionWrittenWordToPictureMatching } from "../screens/trials/wordToPicture";

class AuditoryWordToPictureMatchingReadMap {
    constructor() {
        this.screens = [
            ParticipantId,
            InputDevice,
            InstructionAuditoryWordToPictureMatching,
            LetsPractice
        ]

        this.testNameShort = 'AuditoryWordToPictureMatchingReadMap'
        this.buildTestID = 203
        this.ePrimeTemplateID = 74
        this.fixationDuration = 100
        this.timeToTimeout = 10000
        this.waitDuration = 500

        this.trialClass = AuditoryWordToPictureMatchingReadMapTrial
        this.trialScreenClass = AuditoryWordToPictureMatchingReadMapTrialScreen
    }
}

class WrittenWordToPictureMatchingReadMap {
    constructor() {
        this.screens = [
            ParticipantId,
            InputDevice,
            InstructionWrittenWordToPictureMatching,
            LetsPractice
        ]

        this.testNameShort = 'WrittenWordToPictureMatchingReadMap'
        this.buildTestID = 201
        this.ePrimeTemplateID = 72
        this.fixationDuration = 100
        this.timeToTimeout = 10000
        this.waitDuration = 500

        this.trialClass = WrittenWordToPictureMatchingReadMapTrial
        this.trialScreenClass = WrittenWordToPictureMatchingReadMapTrialScreen
    }
}

export {AuditoryWordToPictureMatchingReadMap, WrittenWordToPictureMatchingReadMap }