

const TYPING_INPUT = jQuery('<div/>', {
    id: 'typing',
    class: 'typing-input',
    disabled: true
})

const CARET = jQuery('<div/>', {
    id: 'caret',
    class: 'blinking-caret',
    text: '_'
})

const TYPING_CONTAINER = jQuery('<div/>', {
    id: 'typingContainer',
    class: 'typing-container'
})

TYPING_CONTAINER.append(TYPING_INPUT, CARET)


export { TYPING_CONTAINER, TYPING_INPUT }