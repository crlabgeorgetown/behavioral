import Beep from '../../static/wordReading/beep_440Hz_300ms.wav'

import { InstructionOne, InstructionTwo, ParticipantId } from "../screens/instruction"
import { LetsPractice } from '../screens/transition'
import { TypingTrial } from '../trials/typing'
import { TypingBaselineTrialScreen } from '../screens/trials/typing'


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
        this.fixationAudio = new Audio(Beep)
        this.fixationDuration = 1000
        this.timeToTimeout = 30000
        this.trialClass = TypingTrial
        this.trialScreenClass = TypingBaselineTrialScreen
    }
}


export { TypingBaseline }