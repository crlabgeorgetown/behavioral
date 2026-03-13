import { InputDevice } from "../../screens/instruction"
import { LetsPractice } from "../../screens/transition"
import { AuditoryWordToPictureMatchingReadMapTrial, WrittenWordToPictureMatchingReadMapTrial } from "../../trials/wordToPicture"
import { AuditoryWordToPictureMatchingReadMapTrialScreen, WrittenWordToPictureMatchingReadMapTrialScreen } from "../../screens/trials/wordToPicture"
import {
    PublicInstructionAuditoryWordToPictureMatching,
    PublicInstructionWrittenWordToPictureMatching,
    PublicComplete
} from "../../screens/public/wordToPicture"


class PublicAuditoryWordToPictureMatchingReadMap {
    constructor(metadata = {}) {
        this.screens = [
            InputDevice,
            PublicInstructionAuditoryWordToPictureMatching,
            LetsPractice
        ]

        this.testNameShort = 'AuditoryWordToPictureMatchingReadMap'
        this.buildTestID = 203
        this.fixationDuration = 100
        this.timeToTimeout = 10000
        this.waitDuration = 500

        this.trialClass = AuditoryWordToPictureMatchingReadMapTrial
        this.trialScreenClass = AuditoryWordToPictureMatchingReadMapTrialScreen
        this.completeScreenClass = PublicComplete

        // Metadata passed in from the launcher (Age, Education, SubjectID, etc.)
        this.initialMetadata = metadata
    }
}


class PublicWrittenWordToPictureMatchingReadMap {
    constructor(metadata = {}) {
        this.screens = [
            InputDevice,
            PublicInstructionWrittenWordToPictureMatching,
            LetsPractice
        ]

        this.testNameShort = 'WrittenWordToPictureMatchingReadMap'
        this.buildTestID = 201
        this.fixationDuration = 100
        this.timeToTimeout = 10000
        this.waitDuration = 500

        this.trialClass = WrittenWordToPictureMatchingReadMapTrial
        this.trialScreenClass = WrittenWordToPictureMatchingReadMapTrialScreen
        this.completeScreenClass = PublicComplete

        this.initialMetadata = metadata
    }
}


export { PublicAuditoryWordToPictureMatchingReadMap, PublicWrittenWordToPictureMatchingReadMap }
