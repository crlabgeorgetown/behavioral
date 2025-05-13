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

export { SIX_LETTER_CONTAINER, FOUR_LETTER_CONTAINER, 
    topleft6, topmid6, topright6, botleft6, botmid6, botright6,
    topleft4, topright4, botleft4, botright4 }
