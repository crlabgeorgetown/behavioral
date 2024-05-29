import { TEXT_CONTAINER } from "../../shared/components/textContainer";
import { PROCEED_CONTAINER } from "../../shared/components/rightChevron";
import Screen from "../../shared/screens/base";


class TrialScreen extends Screen {

    get components() {
        return new Map([
            [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],
            [PROCEED_CONTAINER, {}]
        ])
    }

    get clickHandlers() {
        return {
            rightChevron: () => this.proceedClickHandler(),
        }
    }

    proceedClickHandler() {
        clearTimeout(this.timeoutID) 
        this.task.currentScreen = this.task.trialScreen       
        if (this.task.currentProcedure === 'showlastpractice') {
            this.task.currentScreen = this.task.beginScreen
        } else if (this.task.isDone) {
            this.task.currentScreen = this.task.finishedScreen
        } else if (this.task.nextProcedure === 'showasbreak') {
            this.task.currentScreen = this.task.breakScreen
        }
        this.task.dataIndex++
        this.task.currentScreen.render()
    }

    render() {
        this.task.newTrial()
        super.render()
        this.task.type.trialAudio.play()
        setTimeout(() => {
            TEXT_CONTAINER.text(`${this.task.currentTrial.Word}`)
            this.task.inTrial = true
            this.task.currentTrial.startTime = new Date()
            this.timeoutID = setTimeout(() => {
                this.task.trials[this.task.trials.length - 1].TimedOut = true
                this.task.currentScreen = this.task.timeoutScreen
                this.task.currentScreen.render()
            }, this.task.type.timeToTimeout)
        }, 200)
    }
}


export { TrialScreen }