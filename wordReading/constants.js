import Beep from '../static/wordReading/beep_440Hz_300ms.wav'
import MultimorphemicBeep from '../static/wordReading/87_ETID.wav'
import POSBeep from '../static/wordReading/71_ETID.wav'

const CROSSED_REAL = 'CROSSED_REAL'
const PSEUDOWORD = 'PSEUDOWORD'
const MULTIMORPHEMIC = 'MULTIMORPHEMIC'
const POS_AND_LENGTH_EFFECT = 'POS_AND_LENGTH_EFFECT'


class TaskType {
    static CrossedReal = new TaskType(CROSSED_REAL)
    static Pseudoword = new TaskType(PSEUDOWORD)
    static Multimorphemic = new TaskType(MULTIMORPHEMIC)
    static POSAndLengthEffect = new TaskType(POS_AND_LENGTH_EFFECT)

    constructor(name) {
        this.name = name
        this.trialAudio = new Audio(Beep)
        this.beginBeep = {
            [MULTIMORPHEMIC]: new Audio(MultimorphemicBeep),
            [POS_AND_LENGTH_EFFECT]: new Audio(POSBeep)
        }
    }

    static fromString(string) {
        switch(string) {
            case CROSSED_REAL:
                return TaskType.CrossedReal
            case PSEUDOWORD:
                return TaskType.Pseudoword
            case MULTIMORPHEMIC:
                return TaskType.Multimorphemic
            case POS_AND_LENGTH_EFFECT:
                return TaskType.POSAndLengthEffect
            default:
                throw new Error(`Undefined task type: ${string}`)
        }
    }

    get beginAudio() {
        return this.beginBeep[this.name]
    }
}


export { TaskType }