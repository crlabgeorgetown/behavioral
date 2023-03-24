import { BUTTON_CONTAINER, BUTTON_LABEL_CONTAINER } from "../../shared/components/responseButtons"
import { TEXT_CONTAINER } from "../../shared/components/textContainer"
import Screen from "../../shared/screens/base"
import { AUDIO_CONTAINER, AUDIO_SOURCE } from "../components/audioContainer"


class TrialScreen extends Screen {
    components = new Map([
        [TEXT_CONTAINER, {text: '+', css: {color: '#000000'}}],
        [AUDIO_CONTAINER, {}],
        [BUTTON_CONTAINER, {}],
        [BUTTON_LABEL_CONTAINER, {}]
    ])

    get clickHandlers() {
        return {
            greenButton: () => this.responseClickHandler('yes'),
            redButton: () => this.responseClickHandler('no')
        }
    }

    responseClickHandler(response) {
        if (!this.task.inTrial) {
            return
        }
        clearTimeout(this.timeoutID)
        this.task.inTrial = false
        this.task.currentTrial.responseTime = new Date()
        this.task.currentTrial.response = response
        
        const isCorrectResponse = this.task.currentTrial.correctResponse === response
        const isPracticeRound = this.task.currentTrial.trialType === 'Practice'
        const isLastPracticeRound = this.task.currentProcedure === 'showlastpractice'

        if (isPracticeRound && !isCorrectResponse) {
            this.task.currentScreen = this.task.incorrectScreen
            this.task.newTrial()
        } else if (isLastPracticeRound) {
            this.task.currentScreen = this.task.beginOrPracticeAgainScreen
        } else if (this.task.isDone) {
            this.task.currentScreen = this.task.finishedScreen
        } else if (response === null) {
            this.task.currentScreen = this.task.timeoutScreen
        } else {
            this.task.dataIndex++
            this.task.newTrial()
        }
        this.task.currentScreen.render()
    }

    render() {
        super.render()
        AUDIO_SOURCE.attr('src', this.task.currentTrial.audioSource)
        AUDIO_CONTAINER.on('ended', () => {
            this.task.inTrial = true
            this.task.currentTrial.startTime = new Date()
            this.updateText('')
            this.timeoutID = setTimeout(() => this.responseClickHandler(null), 5000)
        })
        AUDIO_CONTAINER[0].play()
    }
}

export { TrialScreen }