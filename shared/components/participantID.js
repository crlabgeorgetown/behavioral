const PARTICIPANT_ID_CONTAINER = jQuery("<div/>", {
    id: 'participantIdContainer', 
    css: {
        display: 'flex',
        flexDirection: 'row',
        fontFamily: 'Arial',
        alignItems: 'center',
        minWidth: '100%'
    }
})


const PARTICIPANT_ID_LABEL = jQuery('<div/>', {
    id: 'participantIdLabel',
    text: 'Participant ID',
    css: {
        fontSize: '35pt',
        color: '#000000',
        marginLeft: 'auto',
        marginRight: '20px'
    }
})

const PARTICIPANT_ID_INPUT = jQuery('<input/>', {
    id: 'participantIdInput',
    css: {
        fontSize: '25pt',
        height: '65px'
    }
})


const SUBMIT_BUTTON = jQuery('<div/>', {
    id: 'submitButton',
    css: {
        color: '#000000',
        background: '#A8A8A8',
        fontSize: '25pt',
        padding: '0.5em',
        marginLeft: '20px',
        marginRight: 'auto'
    },
    text: 'Submit'

}).hover(
    () => SUBMIT_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),
    () => SUBMIT_BUTTON.css({background: '#A8A8A8'})
)

PARTICIPANT_ID_CONTAINER.append(PARTICIPANT_ID_LABEL, PARTICIPANT_ID_INPUT, SUBMIT_BUTTON)


export { PARTICIPANT_ID_CONTAINER }