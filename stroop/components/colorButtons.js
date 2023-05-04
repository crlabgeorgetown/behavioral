const COLOR_BUTTON_CONTAINER = jQuery('<div/>', {
    id: 'colorButtonContainer', 
    class: 'color-button-container'
})


const RED_BUTTON = jQuery('<div/>', {
    id: 'redButton',
    class: 'color-button',
    text: 'Red'
})


const BLUE_BUTTON = jQuery('<div/>', {
    id: 'blueButton',
    class: 'color-button',
    text: 'Blue'
})

const GREEN_BUTTON = jQuery('<div/>', {
    id: 'greenButton',
    class: 'color-button',
    text: 'Green'
})

COLOR_BUTTON_CONTAINER.append(RED_BUTTON, BLUE_BUTTON, GREEN_BUTTON)


export { COLOR_BUTTON_CONTAINER }