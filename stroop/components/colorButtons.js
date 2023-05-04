const COLOR_BUTTON_CONTAINER = jQuery('<div/>', {
    id: 'instructionButtonContainer', 
    class: 'instruction-button-container'
})


const RED_BUTTON = jQuery('<div/>', {
    id: 'redButton',
    class: 'instruction-button right-margined',
    text: 'Red'
})


const BLUE_BUTTON = jQuery('<div/>', {
    id: 'blueButton',
    class: 'instruction-button left-margined',
    text: 'Blue'
})

const GREEN_BUTTON = jQuery('<div/>', {
    id: 'greenButton',
    class: 'instruction-button left-margined',
    text: 'Green'
})

COLOR_BUTTON_CONTAINER.append(RED_BUTTON, BLUE_BUTTON, GREEN_BUTTON)


export { COLOR_BUTTON_CONTAINER }