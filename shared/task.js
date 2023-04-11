import { CONTAINER } from "./components/container"

class BaseTask {

    constructor() {
        this.recordMouseMove = this.recordMouseMove.bind(this)
        jQuery(document).mousemove(this.recordMouseMove)
    }
    
    setupDOM() {
        jQuery("#Questions").remove()
        jQuery("#PushStickyFooter").remove()
        jQuery("#Plug").hide()
        jQuery(".SkinInner").hide()
        jQuery("#Wrapper").append(CONTAINER)
    }

    setupInstructionScreens() {
        for (let i=0; i<this.instructionScreens.length; i++) {
            if (i < this.instructionScreens.length - 1) {
                this.instructionScreens[i].nextScreen = this.instructionScreens[i + 1]
            }
            if (i > 0) {
                this.instructionScreens[i].previousScreen = this.instructionScreens[i - 1]
            }
        }

        this.currentScreen = this.instructionScreens[0]
        this.currentScreen.render()
    }

    recordMouseMove(event) {
        if (this.inTrial) {
            this.currentTrial.recordMouseMove(Date.now(), event.clientX, event.clientY)
        }
    }
}


export { BaseTask }