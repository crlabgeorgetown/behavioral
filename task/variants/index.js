import { PictureNaming } from "./pictureNaming"
import { AuditorySemanticRelatedness, WrittenSemanticRelatedness } from "./semanticRelatedness"
import { TypingBaseline, TypingDiction } from "./typing"
import { CrossedRealWord1, CrossedRealWord2, Multimorphemic, OralSentenceReading, POSAndLengthEffect, Pseudoword1, Pseudoword2, SpokenLetterNaming } from './wordReading'
import { Pseudoword, Realword } from "./wordRepetition"
import { AuditoryLetterID, AuditorySyllableToGraphemeMatching } from "./auditory"
import { AuditoryWordToPictureMatchingReadMap, WrittenWordToPictureMatchingReadMap } from "./wordToPicture"
import { ArizonaSemanticTest, WrittenArizonaSemanticTest } from "./arizonaSemanticTest"
import { CrossCaseLetter, WrittenHomophoneToPictureMatching } from "./matching"
import { NAVS } from "./navs"

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

// TYPING
const TYPING_BASELINE = 'TYPING_BASELINE'
const TYPING_TO_DICTION = 'TYPING_TO_DICTION'

// AUDITORY
const AUDITORY_LETTER_ID = 'AUDITORY_LETTER_ID'
const AUDITORY_SYLLABLE_TO_GRAPHEME_MATCHING = 'AUDITORY_SYLLABLE_TO_GRAPHEME_MATCHING'

// WORD TO PICTURE
const AUDITORY_WORD_TO_PICTURE_MATCHING_READMAP = 'AUDITORY_WORD_TO_PICTURE_MATCHING_READMAP'
const WRITTEN_WORD_TO_PICTURE_MATCHING_READMAP = 'WRITTEN_WORD_TO_PICTURE_MATCHING_READMAP'

// ARIZONA SEMANTIC TEST
const ARIZONA_SEMANTIC_TEST = 'ARIZONA_SEMANTIC_TEST'
const WRITTEN_ARIZONA_SEMANTIC_TEST = 'WRITTEN_ARIZONA_SEMANTIC_TEST'

// MATCHING & HOMOPHONE
const CROSS_CASE_LETTER = 'CROSS_CASE_LETTER'
const WRITTEN_HOMOPHONE_TO_PICTURE_MATCHING = 'WRITTEN_HOMOPHONE_TO_PICTURE_MATCHING'

// NAVS
const NAVS = 'NAVS'

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
        [PICTURE_NAMING]: PictureNaming,

        // TYPING
        [TYPING_BASELINE]: TypingBaseline,
        [TYPING_TO_DICTION]: TypingDiction,

        // AUDITORY
        [AUDITORY_LETTER_ID]: AuditoryLetterID,
        [AUDITORY_SYLLABLE_TO_GRAPHEME_MATCHING]: AuditorySyllableToGraphemeMatching,

        // WORD TO PICTURE
        [AUDITORY_WORD_TO_PICTURE_MATCHING_READMAP]: AuditoryWordToPictureMatchingReadMap,
        [WRITTEN_WORD_TO_PICTURE_MATCHING_READMAP]: WrittenWordToPictureMatchingReadMap,

        // ARIZONA SEMANTIC TEST
        [ARIZONA_SEMANTIC_TEST]: ArizonaSemanticTest,
        [WRITTEN_ARIZONA_SEMANTIC_TEST]: WrittenArizonaSemanticTest,

        // MATCHING & HOMOPHONE
        [CROSS_CASE_LETTER]: CrossCaseLetter,
        [WRITTEN_HOMOPHONE_TO_PICTURE_MATCHING]: WrittenHomophoneToPictureMatching,

        // NAVS
        [NAVS]: NAVS
    }[string]()
}


export { variantFromString }