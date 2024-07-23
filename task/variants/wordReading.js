import Beep from '../../static/wordReading/beep_440Hz_300ms.wav'
import CrossedRealWord1Beep from '../../static/wordReading/39_ETID.wav'
import CrossedRealWord2Beep from '../../static/wordReading/44_ETID.wav'
import MultimorphemicBeep from '../../static/wordReading/87_ETID.wav'
import OralSentenceReadingBeep from '../../static/wordReading/83_ETID.wav'
import POSAndLengthEffectBeep from '../../static/wordReading/71_ETID.wav'
import Pseudoword1Beep from '../../static/wordReading/92_ETID.wav'
import Pseudoword2Beep from '../../static/wordReading/93_ETID.wav'
import SpokenLetterNamingBeep from '../../static/wordReading/64_ETID.wav'

import { InstructionOne, InstructionTwo, ParticipantId } from "../screens/instruction"
import { LetsPractice } from '../screens/transition'
import { CrossedRealWordTrial, MultimorphemicTrial, OralSentenceReadingTrial, POSAndLengthEffectTrial, PseudoWordTrial, SpokenLetterNamingTrial } from '../trials/wordReading'
import WordReadingTrialScreen from '../screens/trials/wordReading'


const DEFAULT_INSTRUCTION_ONE = 'You will see a word on the screen.\nRead the word out loud.'
const PSEUDOWORD_INSTRUCTION_ONE = 'You will see words that are not real words.\nThey are all made-up words.\n\nRead the words out loud.'
const INSTRUCTION_TWO = 'Most of the words do not sound like real words.\nFor example, nuft.\n\nBut some of the made-up words may sound like real words.\nFor example, toze.'


class Base {
    constructor() {
        this.fixationAudio = new Audio(Beep)
        this.timeToTimeout = 10000
    }
}


class CrossedRealWord1 extends Base {
    constructor() {
        super()
        this.screens = [
            ParticipantId,
            InstructionOne,
            LetsPractice
        ]
        this.testNameShort = 'CrossedRWRdg1'
        this.buildTestID = 47
        this.ePrimeTemplateID = 39
        this.instructionOne = DEFAULT_INSTRUCTION_ONE
        this.beginAudio = new Audio(CrossedRealWord1Beep)
        this.trialClass = CrossedRealWordTrial
        this.trialScreenClass = WordReadingTrialScreen
    }
}


class CrossedRealWord2 extends Base {
    constructor() {
        super()
        this.screens = [
            ParticipantId,
            InstructionOne,
            LetsPractice
        ]
        this.testNameShort = 'CrossedRWRdg2'
        this.buildTestID = 52
        this.ePrimeTemplateID = 44
        this.instructionOne = DEFAULT_INSTRUCTION_ONE
        this.beginAudio = new Audio(CrossedRealWord2Beep)
        this.trialClass = CrossedRealWordTrial
        this.trialScreenClass = WordReadingTrialScreen
    }
}


class Multimorphemic extends Base {
    constructor() {
        super()
        this.screens = [
            ParticipantId,
            InstructionOne,
            LetsPractice
        ]
        this.testNameShort = 'MultimorphemicWordReading'
        this.buildTestID = 218
        this.ePrimeTemplateID = 87
        this.instructionOne = DEFAULT_INSTRUCTION_ONE
        this.beginAudio = new Audio(MultimorphemicBeep)
        this.trialClass = MultimorphemicTrial
        this.trialScreenClass = WordReadingTrialScreen
    }
}


class OralSentenceReading extends Base {
    constructor() {
        super()
        this.screens = [
            ParticipantId,
            InstructionOne,
            LetsPractice
        ]
        this.testNameShort = 'OralSentenceReading'
        this.buildTestID = 213
        this.ePrimeTemplateID = 83
        this.instructionOne = 'Read the following sentences out loud.'
        this.timeToTimeout = 30000
        this.beginAudio = new Audio(OralSentenceReadingBeep)
        this.trialClass = OralSentenceReadingTrial
        this.trialScreenClass = WordReadingTrialScreen
    }
}


class POSAndLengthEffect extends Base {
    constructor() {
        super()
        this.screens = [
            ParticipantId,
            InstructionOne,
            LetsPractice
        ]
        this.testNameShort = 'ReadingPOSandLengthEffect'
        this.buildTestID = 200
        this.ePrimeTemplateID = 71
        this.instructionOne = DEFAULT_INSTRUCTION_ONE
        this.beginAudio = new Audio(POSAndLengthEffectBeep)
        this.trialClass = POSAndLengthEffectTrial
        this.trialScreenClass = WordReadingTrialScreen
    }
}


class Pseudoword1 extends Base {
    constructor() {
        super()
        this.screens = [
            ParticipantId,
            InstructionOne,
            InstructionTwo,
            LetsPractice
        ]
        this.testNameShort = 'PseudowordOralReading1'
        this.buildTestID = 46
        this.ePrimeTemplateID = 38
        this.instructionOne = PSEUDOWORD_INSTRUCTION_ONE
        this.instructionTwo = INSTRUCTION_TWO
        this.beginAudio = new Audio(Pseudoword1Beep)
        this.trialClass = PseudoWordTrial
        this.trialScreenClass = WordReadingTrialScreen
    }
}


class Pseudoword2 extends Base {
    constructor() {
        super()
        this.screens = [
            ParticipantId,
            InstructionOne,
            InstructionTwo,
            LetsPractice
        ]
        this.testNameShort = 'PseudowordOralReading2'
        this.buildTestID = 51
        this.ePrimeTemplateID = 43
        this.instructionOne = PSEUDOWORD_INSTRUCTION_ONE
        this.instructionTwo = INSTRUCTION_TWO
        this.beginAudio = new Audio(Pseudoword2Beep)
        this.trialClass = PseudoWordTrial
        this.trialScreenClass = WordReadingTrialScreen
    }
}

class SpokenLetterNaming extends Base {
    constructor() {
        super()
        this.screens = [
            ParticipantId,
            InstructionOne,
            LetsPractice
        ]
        this.testNameShort = 'SpokenLetterNaming'
        this.buildTestID = 193
        this.ePrimeTemplateID = 64
        this.instructionOne = 'You will see a letter on the screen.\nName the letter out loud.'
        this.beginAudio = new Audio(SpokenLetterNamingBeep)
        this.trialClass = SpokenLetterNamingTrial
        this.trialScreenClass = WordReadingTrialScreen
    }
}


export { CrossedRealWord1, CrossedRealWord2, Multimorphemic, OralSentenceReading, POSAndLengthEffect, Pseudoword1, Pseudoword2, SpokenLetterNaming }