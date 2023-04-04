import RedArrow from '../../static/images/redArrow.png'


const REMINDER_CSS = {
    width: '80px',
    height: '80px',
    margin: 'auto'
}


const REMINDER_BLOCK = jQuery('<div/>', {
    id: 'reminderBlock',
    css: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'right',
    }
})


const RED_ARROW = jQuery('<img/>', {
    id: 'redArrow',
    css: {
        width: '200px',
        height: '80px',
        padding: '5px'
    },
    src: RedArrow
})


const REMINDER_CONTAINER = jQuery('<div/>', {
    id: 'reminderContainer', 
    css: {
        width: '200px', 
        display: 'flex',
        padding: '5px',
        alignItems: 'center',
        background: '#BEBEBE',
        border: 'solid 1px'
    }
})


const REMINDERS = [
    jQuery('<img/>', {id: 'reminder1', css: REMINDER_CSS}),
    jQuery('<img/>', {id: 'reminder2', css: REMINDER_CSS})
]


REMINDER_BLOCK.append(RED_ARROW, REMINDER_CONTAINER.append(...REMINDERS))  


export { REMINDER_BLOCK, REMINDERS, RED_ARROW }