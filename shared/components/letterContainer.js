// Auditory Letter ID
const SIX_LETTER_CONTAINER = jQuery('<div/>', {
    id: 'SIX_LETTER_CONTAINER',
    class: 'six-grid-container six-letter-container'
})

const topleft6 = jQuery('<div/>', {
    id: 'topleft6',
    class: 'letter-container base-text large-text large-fixed-height'
})

const topmid6 = jQuery('<div/>', {
    id: 'topmid6',
    class: 'letter-container base-text large-text large-fixed-height'
})

const topright6 = jQuery('<div/>', {
    id: 'topright6',
    class: 'letter-container base-text large-text large-fixed-height'
})

const botleft6 = jQuery('<div/>', {
    id: 'botleft6',
    class: 'letter-container base-text large-text large-fixed-height'
})

const botmid6 = jQuery('<div/>', {
    id: 'botmid6',
    class: 'letter-container base-text large-text large-fixed-height'
})

const botright6 = jQuery('<div/>', {
    id: 'botright6',
    class: 'letter-container base-text large-text large-fixed-height'
})

SIX_LETTER_CONTAINER.append(topleft6, topmid6, topright6, botleft6, botmid6, botright6)

// Auditory Syllable to Grapheme Matching
const FOUR_LETTER_CONTAINER = jQuery('<div/>', {
    id: 'FOUR_LETTER_CONTAINER',
    class: 'four-grid-container four-letter-container'
})

const topleft4 = jQuery('<div/>', {
    id: 'topleft4',
    class: 'letter-container base-text large-text large-fixed-height'
})

const topright4 = jQuery('<div/>', {
    id: 'topright4',
    class: 'letter-container base-text large-text large-fixed-height'
})

const botleft4 = jQuery('<div/>', {
    id: 'botleft4',
    class: 'letter-container base-text large-text large-fixed-height'
})

const botright4 = jQuery('<div/>', {
    id: 'botright4',
    class: 'letter-container base-text large-text large-fixed-height'
})

FOUR_LETTER_CONTAINER.append(topleft4, topright4, botleft4, botright4)

// Written Arizona Semantic Test
const ARIZONA_TEXT_CONTAINER = jQuery('<div/>', {
    id: 'arizona-text-container',
    class: 'arizona-container',
})

const Arizonatopleft = jQuery('<div/>', {
    id: 'Arizonatopleft',
    class: 'arizona-image base-text large-text large-fixed-height AZTL'
})

const Arizonatopright = jQuery('<div/>', {
    id: 'Arizonatopright',
    class: 'arizona-image base-text large-text large-fixed-height AZTR'
})

const Arizonatarget = jQuery('<div/>', {
    id: 'Arizonatarget',
    class: 'arizona-target-image base-text large-text large-fixed-height AZT'
})

const Arizonabottomleft = jQuery('<div/>', {
    id: 'Arizonabottomleft',
    class: 'arizona-image base-text large-text large-fixed-height AZBL'
})

const Arizonabottomright = jQuery('<div/>', {
    id: 'Arizonabottomright',
    class: 'arizona-image base-text large-text large-fixed-height AZBR'
})

ARIZONA_TEXT_CONTAINER.append(Arizonatopleft, Arizonatopright, Arizonatarget, Arizonabottomleft, Arizonabottomright)

// Matching: Cross Case Letter & Written Homophone to picture Matching

const TWO_LETTER_CONTAINER = jQuery('<div/>', {
    id: 'TWO_LETTER_CONTAINER',
    class: 'two-letter-container'
})

const ONE_LETTER_CONTAINER = jQuery('<div/>', {
    id: 'ONE_LETTER_CONTAINER',
    class: 'one-letter-container'
})

const left2 = jQuery('<div/>', {
    id: 'left2',
    class: 'letter-container base-text large-text large-fixed-height'
})

const right2 = jQuery('<div/>', {
    id: 'right2',
    class: 'letter-container base-text large-text large-fixed-height'
})

const topletter = jQuery('<div/>', {
    id: 'topimage',
    class: 'top-image-2 base-text large-text large-fixed-height'
})

const divider = jQuery('<hr/>', {
    id: 'divider',
    class: 'divider'
})

TWO_LETTER_CONTAINER.append(left2, right2)
ONE_LETTER_CONTAINER.append(topletter)

export { SIX_LETTER_CONTAINER, FOUR_LETTER_CONTAINER, ARIZONA_TEXT_CONTAINER, TWO_LETTER_CONTAINER,
    topleft6, topmid6, topright6, botleft6, botmid6, botright6,
    topleft4, topright4, botleft4, botright4,
    Arizonatopleft, Arizonatopright, Arizonatarget, Arizonabottomleft, Arizonabottomright,
    left2, right2, topletter, divider, ONE_LETTER_CONTAINER }
