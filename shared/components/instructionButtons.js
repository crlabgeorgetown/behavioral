const INSTRUCTION_BUTTON_CONTAINER = jQuery('<div/>', {
    id: 'instructionButtonContainer', 
    class: 'instruction-button-container'
})


const NEXT_BUTTON = jQuery('<div/>', {
    id: 'nextButton',
    class: 'next-button',
    text: 'Next >>'
}).hover(
    () => NEXT_BUTTON.addClass('instruction-button-hover'),
    () => NEXT_BUTTON.removeClass('instruction-button-hover')
)


const PREVIOUS_BUTTON = jQuery('<div/>', {
    id: 'previousButton',
    class: 'previous-button',
    text: '<< Previous'
}).hover(
    () => PREVIOUS_BUTTON.addClass('instruction-button-hover'),
    () => PREVIOUS_BUTTON.removeClass('instruction-button-hover')
)


INSTRUCTION_BUTTON_CONTAINER.append(PREVIOUS_BUTTON, NEXT_BUTTON)

export {INSTRUCTION_BUTTON_CONTAINER}