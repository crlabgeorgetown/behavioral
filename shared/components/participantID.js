const PARTICIPANT_ID_CONTAINER = jQuery("<div/>", {
    id: 'participantIdContainer', 
    class: "participant-id-container"
})


const PARTICIPANT_ID_LABEL = jQuery('<div/>', {
    id: 'participantIdLabel',
    class: 'participant-id-label',
    text: 'Participant ID'
})

const PARTICIPANT_ID_INPUT = jQuery('<input/>', {
    id: 'participantIdInput',
    class: 'participant-id-input'
})


const SUBMIT_BUTTON = jQuery('<div/>', {
    id: 'submitButton',
    class: 'grey-button large-button-text left-margined',
    text: 'Submit'

}).hover(
    () => SUBMIT_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),
    () => SUBMIT_BUTTON.css({background: '#A8A8A8'})
)

PARTICIPANT_ID_CONTAINER.append(PARTICIPANT_ID_LABEL, PARTICIPANT_ID_INPUT, SUBMIT_BUTTON)


export { PARTICIPANT_ID_CONTAINER }