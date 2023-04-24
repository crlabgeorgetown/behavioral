import RedArrow from '../../static/images/redArrow.png'


const REMINDER_BLOCK = jQuery('<div/>', {id: 'reminderBlock', class: 'reminder-block'})
const RED_ARROW = jQuery('<img/>', {id: 'redArrow', src: RedArrow, class: 'red-arrow'})
const REMINDER_CONTAINER = jQuery('<div/>', {id: 'reminderContainer', class: 'reminder-container'})
const REMINDERS = [
    jQuery('<img/>', {id: 'reminder1', class: 'reminder'}),
    jQuery('<img/>', {id: 'reminder2', class: 'reminder'})
]


REMINDER_BLOCK.append(RED_ARROW, REMINDER_CONTAINER.append(...REMINDERS))  


export { REMINDER_BLOCK, REMINDERS, RED_ARROW }