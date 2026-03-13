import { InputDevice } from "../../screens/instruction"
import { AuditoryWordToPictureMatchingReadMapTrial, WrittenWordToPictureMatchingReadMapTrial } from "../../trials/wordToPicture"
import { AuditoryWordToPictureMatchingReadMapTrialScreen, WrittenWordToPictureMatchingReadMapTrialScreen } from "../../screens/trials/wordToPicture"
import { PublicLetsPractice } from "../screens/transition"
import {
    PublicInstructionAuditoryWordToPictureMatching,
    PublicInstructionWrittenWordToPictureMatching,
    PublicComplete
} from "../screens/wordToPicture"
import { wordToPictureAnalysisProfile } from "../analysis/wordToPicture"


class PublicAuditoryWordToPictureMatchingReadMap {
    constructor(metadata = {}) {
        this.screens = [
            InputDevice,
            PublicInstructionAuditoryWordToPictureMatching,
            PublicLetsPractice
        ]

        this.testNameShort = 'AuditoryWordToPictureMatchingReadMap'
        this.buildTestID = 203
        this.fixationDuration = 100
        this.timeToTimeout = 10000
        this.waitDuration = 500

        this.trialClass = AuditoryWordToPictureMatchingReadMapTrial
        this.trialScreenClass = AuditoryWordToPictureMatchingReadMapTrialScreen
        this.completeScreenClass = PublicComplete
        this.analysisProfile = wordToPictureAnalysisProfile

        // Metadata passed in from the launcher (Age, Education, SubjectID, etc.)
        this.initialMetadata = metadata
    }
}


class PublicWrittenWordToPictureMatchingReadMap {
    constructor(metadata = {}) {
        this.screens = [
            InputDevice,
            PublicInstructionWrittenWordToPictureMatching,
            PublicLetsPractice
        ]

        this.testNameShort = 'WrittenWordToPictureMatchingReadMap'
        this.buildTestID = 201
        this.fixationDuration = 100
        this.timeToTimeout = 10000
        this.waitDuration = 500

        this.trialClass = WrittenWordToPictureMatchingReadMapTrial
        this.trialScreenClass = WrittenWordToPictureMatchingReadMapTrialScreen
        this.completeScreenClass = PublicComplete
        this.analysisProfile = wordToPictureAnalysisProfile

        this.initialMetadata = metadata
    }
}


export { PublicAuditoryWordToPictureMatchingReadMap, PublicWrittenWordToPictureMatchingReadMap }
