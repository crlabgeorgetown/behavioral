const SIX_LETTER_CONTAINER = jQuery('<div/>', {
    id: 'SIX_LETTER_CONTAINER',
    class: 'grid-container six-letter-container'
})

const FOUR_LETTER_CONTAINER = jQuery('<div/>', {
    id: 'FOUR_LETTER_CONTAINER',
    class: 'grid-container four-letter-container'
})

const topleft = jQuery('<div/>', {
    id: 'topleft',
    class: 'letter-container base-text large-text large-fixed-height'
})

const topmid = jQuery('<div/>', {
    id: 'topmid',
    class: 'letter-container base-text large-text large-fixed-height'
})

const topright = jQuery('<div/>', {
    id: 'topright',
    class: 'letter-container base-text large-text large-fixed-height'
})

const botleft = jQuery('<div/>', {
    id: 'botleft',
    class: 'letter-container base-text large-text large-fixed-height'
})

const botmid = jQuery('<div/>', {
    id: 'botmid',
    class: 'letter-container base-text large-text large-fixed-height'
})

const botright = jQuery('<div/>', {
    id: 'botright',
    class: 'letter-container base-text large-text large-fixed-height'
})

SIX_LETTER_CONTAINER.append(topleft, topmid, topright, botleft, botmid, botright)

//FOUR_LETTER_CONTAINER.append(topleft, topmid, topright, botleft)

export { SIX_LETTER_CONTAINER, FOUR_LETTER_CONTAINER, topleft, topmid, topright, botleft, botmid, botright }
