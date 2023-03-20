const BEGIN_OR_PRACTICE_CONTAINER = jQuery('<div/>', {
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


const PRACTICE_BUTTON = jQuery('<div/>', {
    id: 'practiceButton',
    css: {
        color: '#000000',
        background: '#A8A8A8',
        fontSize: '25pt',
        padding: '0.5em',
        marginRight: 'auto',
        marginLeft: '5vw'
    
    },
    text: '<< Practice'
}).hover(
    () => PRACTICE_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),
    () => PRACTICE_BUTTON.css({background: '#A8A8A8'})
)


const BEGIN_BUTTON = jQuery('<div/>', {
    id: 'beginButton',
    css: {
        color: '#000000',
        background: '#A8A8A8',
        fontSize: '25pt',
        padding: '0.5em',
        marginRight: '5vw'
    },
    text: 'Begin >>'
}).hover(
    () => BEGIN_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),
    () => BEGIN_BUTTON.css({background: '#A8A8A8'})
)


BEGIN_OR_PRACTICE_CONTAINER.append(PRACTICE_BUTTON, BEGIN_BUTTON)

export {BEGIN_OR_PRACTICE_CONTAINER}