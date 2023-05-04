import { CONTAINER } from "./components/container"
import { BeginOrPracticeAgain, Break, Finished, Incorrect, LetsPractice, TimeOut } from "./screens/transitions"

class BaseTask {

    constructor() {
        this.recordMouseMove = this.recordMouseMove.bind(this)
        jQuery(document).mousemove(this.recordMouseMove)

        jQuery("#Questions").remove()
        jQuery("#PushStickyFooter").remove()
        jQuery("#Plug").hide()
        jQuery(".SkinInner").hide()
        jQuery("#Wrapper").append(CONTAINER)

        this.incorrectScreen = new Incorrect(this)
        this.breakScreen = new Break(this)
        this.beginOrPracticeAgainScreen = new BeginOrPracticeAgain(this)
        this.finishedScreen = new Finished(this)
        this.letsPracticeScreen = new LetsPractice(this)
        this.timeoutScreen = new TimeOut(this)
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