const BEGIN_OR_PRACTICE_CONTAINER = jQuery('<div/>', {
    id: 'instructionButtonContainer', 
    class: 'instruction-button-container'
})


const PRACTICE_BUTTON = jQuery('<div/>', {
    id: 'practiceButton',
    class: 'grey-button medium-button-text left-margined',
    text: '<< Practice'
}).hover(
    () => PRACTICE_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),
    () => PRACTICE_BUTTON.css({background: '#A8A8A8'})
)


const BEGIN_BUTTON = jQuery('<div/>', {
    id: 'beginButton',
    class: 'grey-button medium-button-text right-margined',
    text: 'Begin >>'
}).hover(
    () => BEGIN_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),
    () => BEGIN_BUTTON.css({background: '#A8A8A8'})
)


BEGIN_OR_PRACTICE_CONTAINER.append(PRACTICE_BUTTON, BEGIN_BUTTON)

export {BEGIN_OR_PRACTICE_CONTAINER}