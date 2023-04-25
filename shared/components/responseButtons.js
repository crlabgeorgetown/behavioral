import Check from '../../static/images/check.png'
import Remove from '../../static/images/remove.png'


const BUTTON_CONTAINER = jQuery('<div/>', {id: 'buttonContainer', class: 'response-button-container'})


const GREEN_BUTTON = jQuery('<img/>', {
    id: 'greenButton',
    src: Check,
    class: 'button right-aligned'
})


const RED_BUTTON = jQuery('<img/>', {
    id: 'redButton',
    src: Remove,
    class: 'button left-aligned'
})


const BUTTON_LABEL_CONTAINER = jQuery('<div/>', {
    id: 'labelContainer', 
    css: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        minWidth: '100%',
        marginBottom: 'auto',
        fontFamily: 'Arial'
    }
})


const GREEN_LABEL = jQuery('<div/>', {id: 'greenLabel', class: 'button-label right-aligned'})
const RED_LABEL = jQuery('<div/>', {id: 'redLabel', class: 'button-label left-aligned'})


BUTTON_CONTAINER.append(GREEN_BUTTON, RED_BUTTON)
BUTTON_LABEL_CONTAINER.append(GREEN_LABEL, RED_LABEL)

export {BUTTON_CONTAINER, BUTTON_LABEL_CONTAINER, GREEN_BUTTON, RED_BUTTON, GREEN_LABEL, RED_LABEL}