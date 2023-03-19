
const BUTTON_CONTAINER = jQuery('<div/>', {id: 'buttonContainer', css: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    minWidth: '100%',
    marginTop: '5%',
}})


const GREEN_BUTTON = jQuery('<img/>', {
    id: 'greenButton',
    src: 'https://jslawjslaw.github.io/js-crlab/static/check.png',
    css: {
        marginLeft: 'auto',
        marginRight: '2.5%',
        padding: '1%',
        width: '150px',
        height: '150px',
}}).hover(
    () => GREEN_BUTTON.css({background: '#E3E3E3'}),
    () => GREEN_BUTTON.css({background: 'transparent'})
)


const RED_BUTTON = jQuery('<img/>', {
    id: 'redButton',
    src: 'https://jslawjslaw.github.io/js-crlab/static/remove.png',
    css: {
        marginLeft: '2.5%',
        marginRight: 'auto',
        padding: '1%',
        width: '150px',
        height: '150px',
}}).hover(
    () => RED_BUTTON.css({background: '#E3E3E3'}),
    () => RED_BUTTON.css({background: 'transparent'})
)


const BUTTON_LABEL_CONTAINER = jQuery('<div/>', {
    id: 'labelContainer', 
    css: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        minWidth: '100%',
        marginBottom: 'auto'
    }
})


const GREEN_LABEL = jQuery('<div/>', {
    id: 'greenLabel', 
    css: {
        color: '#000000',
        marginLeft: 'auto',
        marginRight: '2.5%',
        padding: '1%',
        justifyContent: 'center',
        display: 'flex',
        width: '150px',
        height: '30px',
        fontSize: '30px'
    }
}).text('Real word')


const RED_LABEL = jQuery('<div/>', {
    id: 'redLabel', 
    css: {
        color: '#000000',
        marginLeft: '2.5%',
        marginRight: 'auto',
        padding: '1%',
        justifyContent: 'center',
        display: 'flex',
        width: '150px',
        height: '30px',
        fontSize: '30px'
    }
}).text('Not a word')


BUTTON_CONTAINER.append(GREEN_BUTTON, RED_BUTTON)
BUTTON_LABEL_CONTAINER.append(GREEN_LABEL, RED_LABEL)

export {BUTTON_CONTAINER, BUTTON_LABEL_CONTAINER}