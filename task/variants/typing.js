import Beep from '../../static/wordReading/beep_440Hz_300ms.wav'

import { InstructionOne, InstructionTwo, ParticipantId } from "../screens/instruction"
import { LetsPractice } from '../screens/transition'
import { TypingTrial, TypingDecisionTrial } from '../trials/typing'
import { TypingBaselineTrialScreen, TypingDecisionTrialScreen } from '../screens/trials/typing'


class TypingBaseline {
    constructor() {
        this.screens = [
            ParticipantId,
            InstructionOne,
            InstructionTwo,
            LetsPractice
        ]
        this.testNameShort = 'TypingBaseline'
        this.buildTestID = 154
        this.ePrimeTemplateID = 50
        this.instructionOne = 'Please use the keyboard to type each word you see.'
        this.instructionTwo = 'Press Backspace to delete a letter. Press Enter to move to the next word.'
        this.customPracticeText = `We'll do some practice items before we begin.`
        this.fixationAudio = new Audio(Beep)
        this.fixationDuration = 1000
        this.timeToTimeout = 30000
        this.trialClass = TypingTrial
        this.trialScreenClass = TypingBaselineTrialScreen
    }
}

class TypingDiction {
    constructor() {
        this.testNameShort = 'TypingDiction'
        this.buildTestID = 153
        this.ePrimeTemplateID = 49
        this.instructionOne = 'You will hear a word.\nPlease use the keyboard to type the word you hear.'
        this.instructionTwo = 'Press Backspace to delete a letter. Press Enter to move to the next word.'
        this.customPracticeText = `We will start with a few practice items before we begin.`
        this.fixationDuration = 1000
        this.timeToTimeout = 30000
        this.trialClass = TypingDecisionTrial
        this.trialScreenClass = TypingDecisionTrialScreen
        this.screens = [
            ParticipantId,
            InstructionOne,
            InstructionTwo,
            LetsPractice
        ] // putting this last, just in case the screens need the attributes before building the screens (instructions)
    }
}

export { TypingBaseline, TypingDiction }