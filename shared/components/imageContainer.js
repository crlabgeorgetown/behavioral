const IMAGE_CONTAINER = jQuery('<img/>', {id: 'stop', class: 'stop'})

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

FOUR_IMAGE_CONTAINER.append(topleftImage, toprightImage, botleftImage, botrightImage)

export { IMAGE_CONTAINER, FOUR_IMAGE_CONTAINER, topleftImage, toprightImage, botleftImage, botrightImage }