import Screen from "../base";
import { TEXT_CONTAINER } from "../../../shared/components/textContainer";
import { AUDIO_CONTAINER, AUDIO_SOURCE } from "../../../shared/components/audioContainer";
import { PicLeft, PicRight, NAVS_PIC_CONTAINER } from "../../../shared/components/imageContainer";

class NAVSTrialScreen extends Screen {
    get components() {
        return new Map([
            [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],
            [NAVS_PIC_CONTAINER, {}],
            [AUDIO_CONTAINER, {}]
        ])
    }

    get clickHandlers() {
        return {
            PicLeft: (event) => this.proceedClickHandler(event, 'left'),
            PicRight: (event) => this.proceedClickHandler(event, 'right')
        }
    }

    proceedClickHandler(event, location) {
        event.stopPropagation()
        clearTimeout(this.timeoutID)

        this.orchestrator.currentTrial.responseTime = new Date()
        this.orchestrator.currentTrial.ResponseLocation = location
        this.orchestrator.currentTrial.Response = this.orchestrator.currentTrial.location[location]
        const isPractice = this.orchestrator.currentTrial.TrialType === 'Practice'

        if (!this.orchestrator.currentTrial.isCorrect() && isPractice) {
            this.orchestrator.replay()
        } else {
            this.orchestrator.next()
        }

        TEXT_CONTAINER.show()
    }

    startTrial() {
        NAVS_PIC_CONTAINER.hide()
        PicLeft.attr('src', this.orchestrator.currentTrial.getPicLeftSource())
        PicRight.attr('src', this.orchestrator.currentTrial.getPicRightSource())
        AUDIO_SOURCE.attr('src', this.orchestrator.currentTrial.getSentenceSource())
        AUDIO_CONTAINER[0].load()

        setTimeout(() => {
            AUDIO_CONTAINER[0].play()
            TEXT_CONTAINER.hide()
            NAVS_PIC_CONTAINER.show()
            this.orchestrator.currentTrial.startTime = new Date()
            this.timeoutID = setTimeout(() => {
                this.orchestrator.currentTrial.TimedOut = true
                this.orchestrator.currentTrial.responseTime = new Date()
                this.orchestrator.timedOut()
                TEXT_CONTAINER.show()
            }, this.orchestrator.variant.timeToTimeout)

        }, this.orchestrator.variant.fixationDuration)
    }
}

export { NAVSTrialScreen }