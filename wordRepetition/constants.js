import Beep from '../static/wordReading/beep_440Hz_300ms.wav'
import PseudowordRepetitionBeep from '../static/wordRepetition/100_ETID.wav'
import RealwordRepetitionBeep from '../static/wordRepetition/101_ETID.wav'

const REALWORD_REPETITION = 'REALWORD_REPETITION'
const PSEUDOWORD_REPETITION = 'PSEUDOWORD_REPETITION'


class TaskType {
    static RealwordRepetition = new TaskType(REALWORD_REPETITION)
    static PseudowordRepetition = new TaskType(PSEUDOWORD_REPETITION)

    constructor(name) {
        this.name = name
        this.trialAudio = new Audio(Beep)
        this.beep = {
            [REALWORD_REPETITION]: new Audio(RealwordRepetitionBeep),
            [PSEUDOWORD_REPETITION]: new Audio(PseudowordRepetitionBeep),
        }[name]
        
        this.instructionText = {
            [REALWORD_REPETITION]: 'You will hear a word.\n\nPlease repeat the word.',
            [PSEUDOWORD_REPETITION]: 'You will hear a word that is not real.\nAll of these words are made up.\nPlease repeat the word.',
        }[name]

        this.timeToTimeout = 10000
    }

    static fromString(string) {
        switch(string) {
            case REALWORD_REPETITION:
                return TaskType.RealwordRepetition
            case PSEUDOWORD_REPETITION:
                return TaskType.PseudowordRepetition
            default:
                throw new Error(`Undefined task type: ${string}`)
        }
    }
}


export { TaskType }