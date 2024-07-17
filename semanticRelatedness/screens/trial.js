import { BUTTON_CONTAINER, BUTTON_LABEL_CONTAINER } from "../../shared/components/responseButtons";
import { TEXT_CONTAINER } from "../../shared/components/textContainer";
import Screen from "./base";


export default class Trial extends Screen {

    get components() {
        return new Map([
            [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],
            [BUTTON_CONTAINER, {}],
            [BUTTON_LABEL_CONTAINER, {}]
        ])
    }

    get clickHandlers() {
        return {
            greenButton: (event) => this.responseClickHandler(event, 'yes'),
            redButton: (event) => this.responseClickHandler(event, 'no'),
        }
    }

    responseClickHandler(event, response) {
        event.stopPropagation()  // required in order to prevent container on clicks from triggering immediately after being set
        clearTimeout(this.timeoutID)
        this.orchestrator.currentTrial.responseTime = new Date()
        this.orchestrator.currentTrial.Response = response

        const isCorrect = this.orchestrator.currentTrial.CRESP === response
        const isPractice = this.orchestrator.currentTrial.TrialType === 'Practice' 
        
        if (!isCorrect && isPractice) {
            this.orchestrator.replay()
        } else {
            this.orchestrator.next()
        }
    }

    startTrial() {
        setTimeout(() => {
            TEXT_CONTAINER.text(`${this.orchestrator.currentTrial.Sound1}\n${this.orchestrator.currentTrial.Sound2}`)
            this.orchestrator.currentTrial.startTime = new Date()
            this.timeoutID = setTimeout(() => {
                this.orchestrator.currentTrial.TimedOut = true
                this.orchestrator.currentTrial.responseTime = new Date()
                this.orchestrator.timedOut()
            }, 10000)
        }, 100)
    }
}