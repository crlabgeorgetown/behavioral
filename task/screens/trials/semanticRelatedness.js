import { AUDIO_CONTAINER, AUDIO_SOURCE } from "../../../shared/components/audioContainer";
import { BUTTON_CONTAINER, BUTTON_LABEL_CONTAINER, GREEN_LABEL, RED_LABEL } from "../../../shared/components/responseButtons";
import { TEXT_CONTAINER } from "../../../shared/components/textContainer";
import Screen from "../base";


class BaseTrialScreen extends Screen {
    constructor(orchestrator) {
        super(orchestrator)
        RED_LABEL.text('Not Related')
        GREEN_LABEL.text('Related')
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
}


class WrittenTrialScreen extends BaseTrialScreen {

    get components() {
        return new Map([
            [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],
            [BUTTON_CONTAINER, {}],
            [BUTTON_LABEL_CONTAINER, {}]
        ])
    }

    startTrial() {
        setTimeout(() => {
            TEXT_CONTAINER.text(`${this.orchestrator.currentTrial.Sound1}\n${this.orchestrator.currentTrial.Sound2}`)
            this.orchestrator.currentTrial.startTime = new Date()
            this.timeoutID = setTimeout(() => {
                this.orchestrator.currentTrial.responseTime = new Date()
                this.orchestrator.timedOut()
            }, 10000)
        }, 100)
    }
}


class AuditoryTrialScreen extends BaseTrialScreen {
    components = new Map([
        [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text fixed-height'}],
        [AUDIO_CONTAINER, {}],
        [BUTTON_CONTAINER, {}],
        [BUTTON_LABEL_CONTAINER, {}]
    ])

    startTrial() {
        setTimeout(() => {
            TEXT_CONTAINER.text('')
            AUDIO_SOURCE.attr('src', this.orchestrator.currentTrial.source(1))
            AUDIO_CONTAINER.on('ended', () => {
                setTimeout(() => {
                    AUDIO_SOURCE.attr('src', this.orchestrator.currentTrial.source(2))
                    AUDIO_CONTAINER[0].load()
                    AUDIO_CONTAINER[0].play()
                }, 500)
                AUDIO_CONTAINER.off('ended')
            },10000)
            AUDIO_CONTAINER[0].load()
            AUDIO_CONTAINER[0].play()
            this.orchestrator.currentTrial.startTime = new Date()
            this.timeoutID = setTimeout(() => {
                this.orchestrator.currentTrial.responseTime = new Date()
                this.orchestrator.timedOut()
            }, 10000)
        }, 100)
    }
}


export { AuditoryTrialScreen, WrittenTrialScreen }