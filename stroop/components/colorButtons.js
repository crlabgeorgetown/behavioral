const COLOR_BUTTON_CONTAINER = jQuery('<div/>', {
    id: 'colorButtonContainer', 
    class: 'color-button-container'
})


const RED_BUTTON = jQuery('<div/>', {
    id: 'redButton',
    class: 'grey-button large-button-text fixed-width',
    text: 'Red'
})


const BLUE_BUTTON = jQuery('<div/>', {
    id: 'blueButton',
    class: 'grey-button large-button-text fixed-width',
    text: 'Blue'
})

const GREEN_BUTTON = jQuery('<div/>', {
    id: 'greenButton',
    class: 'grey-button large-button-text fixed-width',
    text: 'Green'
})

COLOR_BUTTON_CONTAINER.append(RED_BUTTON, GREEN_BUTTON, BLUE_BUTTON)


export { COLOR_BUTTON_CONTAINER }