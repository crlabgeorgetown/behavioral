import { INSTRUCTION_BUTTON_CONTAINER } from "../../../shared/components/instructionButtons"


function createHubInstructionButtonContainer(buttonId, text, clickHandler) {
    const container = INSTRUCTION_BUTTON_CONTAINER.clone(false)
    container.removeAttr('id')
    container.empty()

    const button = jQuery('<div/>', {
        id: buttonId,
        class: 'grey-button medium-button-text right-margined',
        text,
        ontouchstart: ''
    })

    button.on('click', clickHandler)
    container.append(button)

    return container
}


export { createHubInstructionButtonContainer }
