import { InstructionOne, ParticipantId } from "../screens/instruction";
import { LetsPractice } from '../screens/transition';
import { WrittenHomophoneToPictureMatchingTrial } from '../trials/homophone';
import { WrittenHomophoneToPictureMatchingTrialScreen } from '../screens/trials/homophone';

class WrittenHomophoneToPictureMatching {
    constructor() {
        this.screens = [
            ParticipantId,
            InstructionOne,
            LetsPractice
        ]

        this.testNameShort = 'WrittenHomophonetoPictureMatching'
        this.buildTestID = 205
        this.ePrimeTemplateID = 76
        this.instructionOne = 'You will see a word and three pictures.\nPlease select the picture that matches the word.'
        this.fixationDuration = 500
        this.timeToTimeout = 8000

        this.trialClass = WrittenHomophoneToPictureMatchingTrial
        this.trialScreenClass = WrittenHomophoneToPictureMatchingTrialScreen
    }
}

export { WrittenHomophoneToPictureMatching }