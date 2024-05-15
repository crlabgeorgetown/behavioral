import Beep from '../static/wordReading/beep_440Hz_300ms.wav'
import CrossedRealWord1Beep from '../static/wordReading/39_ETID.wav'
import CrossedRealWord2Beep from '../static/wordReading/44_ETID.wav'
import Pseudoword1Beep from '../static/wordReading/92_ETID.wav'
import Pseudoword2Beep from '../static/wordReading/93_ETID.wav'
import MultimorphemicBeep from '../static/wordReading/87_ETID.wav'
import OralSentenceReadingBeep from '../static/wordReading/83_ETID.wav'
import SpokenLetterNamingBeep from '../static/wordReading/64_ETID.wav'
import POSBeep from '../static/wordReading/71_ETID.wav'

const CROSSED_REALWORD_1 = 'CROSSED_REALWORD_1'
const CROSSED_REALWORD_2 = 'CROSSED_REALWORD_2'
const PSEUDOWORD_1 = 'PSEUDOWORD_1'
const PSEUDOWORD_2 = 'PSEUDOWORD_2'
const MULTIMORPHEMIC = 'MULTIMORPHEMIC'
const POS_AND_LENGTH_EFFECT = 'POS_AND_LENGTH_EFFECT'
const ORAL_SENTENCE_READING = 'ORAL_SENTENCE_READING'
const SPOKEN_LETTER_NAMING = 'SPOKEN_LETTER_NAMING'

const DEFAULT_INSTRUCTIONS = 'You will see a word on the screen.\nRead the word out loud.'


class TaskType {
    static CrossedRealWord1 = new TaskType(CROSSED_REALWORD_1)
    static CrossedRealWord2 = new TaskType(CROSSED_REALWORD_2)
    static Pseudoword1 = new TaskType(PSEUDOWORD_1)
    static Pseudoword2 = new TaskType(PSEUDOWORD_2)
    static Multimorphemic = new TaskType(MULTIMORPHEMIC)
    static POSAndLengthEffect = new TaskType(POS_AND_LENGTH_EFFECT)
    static OralSentenceReading = new TaskType(ORAL_SENTENCE_READING)
    static SpokenLetterNaming = new TaskType(SPOKEN_LETTER_NAMING)

    constructor(name) {
        this.name = name
        this.trialAudio = new Audio(Beep)
        this.beep = {
            [CROSSED_REALWORD_1]: new Audio(CrossedRealWord1Beep),
            [CROSSED_REALWORD_2]: new Audio(CrossedRealWord2Beep),
            [PSEUDOWORD_1]: new Audio(Pseudoword1Beep),
            [PSEUDOWORD_2]: new Audio(Pseudoword2Beep),
            [MULTIMORPHEMIC]: new Audio(MultimorphemicBeep),
            [POS_AND_LENGTH_EFFECT]: new Audio(POSBeep),
            [ORAL_SENTENCE_READING]: new Audio(OralSentenceReadingBeep),
            [SPOKEN_LETTER_NAMING]: new Audio(SpokenLetterNamingBeep)
        }[name]
        
        this.instructionText = {
            [CROSSED_REALWORD_1]: DEFAULT_INSTRUCTIONS,
            [CROSSED_REALWORD_2]: DEFAULT_INSTRUCTIONS,
            [PSEUDOWORD_1]: DEFAULT_INSTRUCTIONS,
            [PSEUDOWORD_2]: DEFAULT_INSTRUCTIONS,
            [MULTIMORPHEMIC]: DEFAULT_INSTRUCTIONS,
            [POS_AND_LENGTH_EFFECT]: DEFAULT_INSTRUCTIONS,
            [ORAL_SENTENCE_READING]: 'Read the following sentences out loud.',
            [SPOKEN_LETTER_NAMING]: 'You will see a letter on the screen.\nName the letter out loud.'
        }[name]

        this.timeToTimeout = name === ORAL_SENTENCE_READING ? 30000 : 10000
    }

    static fromString(string) {
        switch(string) {
            case CROSSED_REALWORD_1:
                return TaskType.CrossedRealWord1
            case CROSSED_REALWORD_2:
                return TaskType.CrossedRealWord2
            case PSEUDOWORD_1:
                return TaskType.Pseudoword1
            case PSEUDOWORD_2:
                return TaskType.Pseudoword2
            case MULTIMORPHEMIC:
                return TaskType.Multimorphemic
            case POS_AND_LENGTH_EFFECT:
                return TaskType.POSAndLengthEffect
            case ORAL_SENTENCE_READING:
                return TaskType.OralSentenceReading
            case SPOKEN_LETTER_NAMING:
                return TaskType.SpokenLetterNaming
            default:
                throw new Error(`Undefined task type: ${string}`)
        }
    }
}


export { TaskType }