import Beep from '../static/wordReading/beep_440Hz_300ms.wav'
import PseudowordRepetitionBeep from '../static/wordRepetition/100_ETID.wav'
import RealwordRepetitionBeep from '../static/wordRepetition/101_ETID.wav'
import { InstructionOne, ParticipantId } from './screens/instruction'
import { LetsPractice } from './screens/transition'
import { Trial } from './trial'


const PSEUDOWORD_REPETITION = 'PSEUDOWORD_REPETITION'
const REALWORD_REPETITION = 'REALWORD_REPETITION'


function variantFromString(string) {
    return new {
        [PSEUDOWORD_REPETITION]: Pseudoword,
        [REALWORD_REPETITION]: Realword
    }[string]()
}


class Base {
    constructor() {
        this.fixationAudio = new Audio(Beep)
        this.timeToTimeout = 10000
    }
}


class Pseudoword extends Base {
    constructor() {
        super()
        this.screens = [
            ParticipantId,
            InstructionOne,
            LetsPractice
        ]
        this.instructionOne = 'You will hear a word that is not real.\nAll of these words are made up.\nPlease repeat the word.'
        this.beginAudio = new Audio(PseudowordRepetitionBeep)
        this.trialClass = Trial
        this.testNameShort = 'PseudowordRepReadMap'
        this.buildTestID = 238
        this.ePrimeTemplateID = 100
    }
}


class Realword extends Base {
    constructor() {
        super()
        this.screens = [
            ParticipantId,
            InstructionOne,
            LetsPractice
        ]
        this.instructionOne = 'You will hear a word.\n\nPlease repeat the word.'
        this.beginAudio = new Audio(RealwordRepetitionBeep)
        this.trialClass = Trial
        this.testNameShort = 'RealwordRepReadMap'
        this.buildTestID = 239
        this.ePrimeTemplateID = 101
    }
}


export { variantFromString, Pseudoword, Realword }