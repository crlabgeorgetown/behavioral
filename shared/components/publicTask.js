import { CONTAINER } from "./container"
import { INSTRUCTION_BUTTON_CONTAINER } from "./instructionButtons"


function createPublicScreen(additionalClasses = []) {
    const screen = CONTAINER.clone(false)
    screen.removeAttr('id')
    screen.addClass(['hub-screen', ...additionalClasses].join(' '))
    return screen
}


function createPublicButton({
    id,
    text,
    className = 'grey-button medium-button-text',
    clickHandler
}) {
    const button = jQuery('<div/>', {
        id,
        class: className,
        text,
        ontouchstart: ''
    })

    if (clickHandler) {
        button.on('click', clickHandler)
    }

    return button
}


function createSingleActionButtonContainer({
    buttonId,
    text,
    clickHandler,
    buttonClass = 'grey-button medium-button-text right-margined'
}) {
    const container = INSTRUCTION_BUTTON_CONTAINER.clone(false)
    container.removeAttr('id')
    container.empty()
    container.append(createPublicButton({
        id: buttonId,
        text,
        className: buttonClass,
        clickHandler
    }))
    return container
}


function createLabeledFieldRow({ labelText, field }) {
    const row = jQuery('<div/>', { class: 'participant-id-container' })
    const label = jQuery('<div/>', {
        class: 'participant-id-label',
        text: labelText
    })

    row.append(label, field)
    return row
}


function createPublicInfoRow({
    label,
    value,
    rowClass,
    labelClass,
    valueClass,
    removeBorder = false
}) {
    const row = jQuery('<div/>', {
        class: rowClass
    })

    if (removeBorder) {
        row.css('borderBottom', 'none')
    }

    row.append(
        jQuery('<div/>', {
            text: label,
            class: labelClass
        }),
        jQuery('<div/>', {
            text: String(value),
            class: valueClass
        })
    )

    return row
}


function createReplayButton({ id, className }) {
    return createPublicButton({
        id,
        text: 'Replay',
        className: `grey-button medium-button-text ${className}`.trim()
    })
}


export {
    createLabeledFieldRow,
    createPublicButton,
    createPublicInfoRow,
    createPublicScreen,
    createReplayButton,
    createSingleActionButtonContainer
}