import { CONTAINER } from "../../../shared/components/container"


function createHubScreen() {
    const screen = CONTAINER.clone(false)
    screen.removeAttr('id')
    screen.addClass('hub-screen')
    return screen
}


export { createHubScreen }
