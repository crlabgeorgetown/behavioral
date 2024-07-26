import { PictureNaming } from "./pictureNaming"
import { AuditorySemanticRelatedness, WrittenSemanticRelatedness } from "./semanticRelatedness"
import { CrossedRealWord1, CrossedRealWord2, Multimorphemic, OralSentenceReading, POSAndLengthEffect, Pseudoword1, Pseudoword2, SpokenLetterNaming } from './wordReading'
import { Pseudoword, Realword } from "./wordRepetition"

// SEMANTIC RELATEDNESS
const AUDITORY_SEMANTIC_RELATEDNESS = 'AUDITORY_SEMANTIC_RELATEDNESS'
const WRITTEN_SEMANTIC_RELATEDNESS = 'WRITTEN_SEMANTIC_RELATEDNESS'

// WORD READING
const CROSSED_REALWORD_WORD_READING_1 = 'CROSSED_REALWORD_WORD_READING_1'
const CROSSED_REALWORD_WORD_READING_2 = 'CROSSED_REALWORD_WORD_READING_2'
const PSEUDOWORD_WORD_READING_1 = 'PSEUDOWORD_WORD_READING_1'
const PSEUDOWORD_WORD_READING_2 = 'PSEUDOWORD_WORD_READING_2'
const MULTIMORPHEMIC_WORD_READING = 'MULTIMORPHEMIC_WORD_READING'
const POS_AND_LENGTH_EFFECT_WORD_READING = 'POS_AND_LENGTH_EFFECT_WORD_READING'
const ORAL_SENTENCE_READING = 'ORAL_SENTENCE_READING'
const SPOKEN_LETTER_NAMING = 'SPOKEN_LETTER_NAMING'

// WORD REPETITION
const PSEUDOWORD_REPETITION = 'PSEUDOWORD_REPETITION'
const REALWORD_REPETITION = 'REALWORD_REPETITION'

// PICTURE NAMING
const PICTURE_NAMING = 'PICTURE_NAMING'


function variantFromString(string) {
    return new {
        // SEMANTIC RELATEDNESS
        [AUDITORY_SEMANTIC_RELATEDNESS]: AuditorySemanticRelatedness,
        [WRITTEN_SEMANTIC_RELATEDNESS]: WrittenSemanticRelatedness,
        
        // WORD READING
        [CROSSED_REALWORD_WORD_READING_1]: CrossedRealWord1,
        [CROSSED_REALWORD_WORD_READING_2]: CrossedRealWord2,
        [PSEUDOWORD_WORD_READING_1]: Pseudoword1,
        [PSEUDOWORD_WORD_READING_2]: Pseudoword2,
        [MULTIMORPHEMIC_WORD_READING]: Multimorphemic,
        [POS_AND_LENGTH_EFFECT_WORD_READING]: POSAndLengthEffect,
        [ORAL_SENTENCE_READING]: OralSentenceReading,
        [SPOKEN_LETTER_NAMING]: SpokenLetterNaming,
        
        // WORD REPETITION
        [PSEUDOWORD_REPETITION]: Pseudoword,
        [REALWORD_REPETITION]: Realword,

        // PICTURE NAMING
        [PICTURE_NAMING]: PictureNaming
    }[string]()
}


export { variantFromString }