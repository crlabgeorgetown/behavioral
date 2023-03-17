import { CONTAINER } from "../components/container"

export default class Screen {
    constructor(task) {
        this.task = task
        this.previousScreen = null
        this.nextScreen = null
    }

    get clickHandlers() {
        return {}
    }

    render() {
        CONTAINER.children().detach()
        CONTAINER.append(this.components)
        this.updateClickHandlers()
        jQuery('#textContainer').text(this.text)
    }

    updateClickHandlers() {
        for (const [id, callback] of Object.entries(this.clickHandlers)) {
            const element = jQuery(`#${id}`)
            element.off("click")
            element.click(callback)
        }
    }

    inputDeviceClickHandler(inputDevice) {
        this.task.inputDevice = inputDevice
        this.task.currentScreen = this.nextScreen
        this.task.currentScreen.render()
    }

    instructionButtonClickHandler(action) {
        switch (action) {
            case 'previous':
                this.task.currentScreen = this.previousScreen
                break
            case 'next':
                this.task.currentScreen = this.nextScreen
                break
        }
        this.task.currentScreen.render()
    }
}