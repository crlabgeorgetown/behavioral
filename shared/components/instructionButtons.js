const INSTRUCTION_BUTTON_CONTAINER = jQuery('<div/>', {
    id: 'instructionButtonContainer', 
    css: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        minWidth: '100%',
        marginTop: 'auto',
        marginBottom: '4vh',
        fontFamily: 'Arial',
        textAlign: 'center'
    }
})


const NEXT_BUTTON = jQuery('<div/>', {
    id: 'nextButton',
    css: {
        color: '#000000',
        background: '#A8A8A8',
        fontSize: '2vw',
        padding: '0.5em',
        marginLeft: 'auto',
        marginRight: '5vw',
    },
    text: 'Next >>'
}).hover(
    () => NEXT_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),
    () => NEXT_BUTTON.css({background: '#A8A8A8'})
)


const PREVIOUS_BUTTON = jQuery('<div/>', {
    id: 'previousButton',
    css: {
        color: '#000000',
        background: '#A8A8A8',
        fontSize: '2vw',
        padding: '0.5em',
        marginLeft: '5vw',
    },
    text: '<< Previous'
}).hover(
    () => PREVIOUS_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),
    () => PREVIOUS_BUTTON.css({background: '#A8A8A8'})
)


INSTRUCTION_BUTTON_CONTAINER.append(PREVIOUS_BUTTON, NEXT_BUTTON)

export {INSTRUCTION_BUTTON_CONTAINER}