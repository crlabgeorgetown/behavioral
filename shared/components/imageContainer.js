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

const ArizonatopleftImage = jQuery('<img/>', {
    id: 'ArizonatopleftImage',
    class: 'arizona-image AZTL'
})

const ArizonatoprightImage = jQuery('<img/>', {
    id: 'ArizonatoprightImage',
    class: 'arizona-image AZTR'
})

const Arizonatargetimage = jQuery('<img/>', {
    id: 'ArizonatargetImage',
    class: 'arizona-target-image'
})

const ArizonabottomleftImage = jQuery('<img/>', {
    id: 'ArizonabottomleftImage',
    class: 'arizona-image AZBL'
})

const ArizonabottomrightImage = jQuery('<img/>', {
    id: 'ArizonabottomrightImage',
    class: 'arizona-image AZBR'
})

ARIZONA_IMAGE_CONTAINER.append(ArizonatopleftImage, ArizonatoprightImage, Arizonatargetimage, ArizonabottomleftImage, ArizonabottomrightImage)

// Written Homoephone to Picture Matching
const topimage = jQuery('<img/>', {
    id: 'topimage',
    class: 'top-image-container'
})

const ONE_IMAGE_CONTAINER = jQuery('<div/>', {
    id: 'one-image-container',
    class: 'one-image-container'
})

ONE_IMAGE_CONTAINER.append(topimage)

// NAVS
const PicLeft = jQuery('<img/>', {
    id: 'PicLeft',
    class: 'navs-pic'
})

const PicRight = jQuery('<img/>', {
    id: 'PicRight',
    class: 'navs-pic'
})

const NAVS_PIC_CONTAINER = jQuery('<div/>', {
    id: 'navs-pic-container',
    class: 'navs-container'
})

NAVS_PIC_CONTAINER.append(PicLeft, PicRight)

export { IMAGE_CONTAINER, FOUR_IMAGE_CONTAINER, topleftImage, toprightImage, botleftImage, botrightImage, TEXT_CRESP_CONTAINER,
    ARIZONA_IMAGE_CONTAINER, ArizonatopleftImage, ArizonatoprightImage, Arizonatargetimage, ArizonabottomleftImage, ArizonabottomrightImage,
    ONE_IMAGE_CONTAINER, topimage, PicLeft, PicRight, NAVS_PIC_CONTAINER }