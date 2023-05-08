const INSTRUCTION_BUTTON_CONTAINER = jQuery('<div/>', {
    id: 'instructionButtonContainer', 
    class: 'instruction-button-container'
})


const NEXT_BUTTON = jQuery('<div/>', {
    id: 'nextButton',
    class: 'grey-button medium-button-text right-margined',
    text: 'Next >>'
})


const PREVIOUS_BUTTON = jQuery('<div/>', {
    id: 'previousButton',
    class: 'grey-button medium-button-text left-margined',
    text: '<< Previous'
})


INSTRUCTION_BUTTON_CONTAINER.append(PREVIOUS_BUTTON, NEXT_BUTTON)

export {INSTRUCTION_BUTTON_CONTAINER}