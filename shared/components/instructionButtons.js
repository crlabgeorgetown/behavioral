const INSTRUCTION_BUTTON_CONTAINER = jQuery('<div/>', {
    id: 'instructionButtonContainer', 
    class: 'instruction-button-container'
})


const NEXT_BUTTON = jQuery('<div/>', {
    id: 'nextButton',
    class: 'instruction-button right-margined',
    text: 'Next >>'
})


const PREVIOUS_BUTTON = jQuery('<div/>', {
    id: 'previousButton',
    class: 'instruction-button left-margined',
    text: '<< Previous'
})


INSTRUCTION_BUTTON_CONTAINER.append(PREVIOUS_BUTTON, NEXT_BUTTON)

export {INSTRUCTION_BUTTON_CONTAINER}