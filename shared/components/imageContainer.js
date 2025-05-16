const IMAGE_CONTAINER = jQuery('<img/>', {id: 'stop', class: 'stop'})

// Word to Picture Matching
const FOUR_IMAGE_CONTAINER = jQuery('<div/>', {
    id: 'four-image-container', 
    class: 'four-image-container'
})

const topleftImage = jQuery('<img/>', {
    id: 'topleftImage',
    class: 'image-container'
})

const toprightImage = jQuery('<img/>', {
    id: 'toprightImage',
    class: 'image-container'
})

const botleftImage = jQuery('<img/>', {
    id: 'botleftImage',
    class: 'image-container'
})

const botrightImage = jQuery('<img/>', {
    id: 'botrightImage',
    class: 'image-container'
})


const TEXT_CRESP_CONTAINER = jQuery('<div/>', {
    id: 'text-cresp-container',
    class: 'base-text extra-large-text large-fixed-height overlay-container',
    text: ''
})

FOUR_IMAGE_CONTAINER.append(topleftImage, toprightImage, botleftImage, botrightImage)

// Arizona Semantic Test
const ARIZONA_IMAGE_CONTAINER = jQuery('<div/>', {
    id: 'arizona-image-container',
    class: 'arizona-container'
})

const ArizonaTopleftImage = jQuery('<img/>', {
    id: 'arizona-topleftImage',
    class: 'arizona-image'
})

const ArizonaTopRightImage = jQuery('<img/>', {
    id: 'arizona-toprightImage',
    class: 'arizona-image'
})

const ArizonaTargetImage = jQuery('<img/>', {
    id: 'arizona-targetImage',
    class: 'arizona-image'
})

const ArizonaBottomeLeftImage = jQuery('<img/>', {
    id: 'arizona-botleftImage',
    class: 'arizona-image'
})

const ArizonaBottomRightImage = jQuery('<img/>', {
    id: 'arizona-botrightImage',
    class: 'arizona-image'
})

ARIZONA_IMAGE_CONTAINER.append(ArizonaTopleftImage, ArizonaTopRightImage, ArizonaTargetImage, ArizonaBottomeLeftImage, ArizonaBottomRightImage)

export { IMAGE_CONTAINER, FOUR_IMAGE_CONTAINER, topleftImage, toprightImage, botleftImage, botrightImage, TEXT_CRESP_CONTAINER,
    ARIZONA_IMAGE_CONTAINER, ArizonaTopleftImage, ArizonaTopRightImage, ArizonaTargetImage, ArizonaBottomeLeftImage, ArizonaBottomRightImage }