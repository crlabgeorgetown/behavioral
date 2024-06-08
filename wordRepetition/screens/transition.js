import { INSTRUCTION_BUTTON_CONTAINER } from "../../shared/components/instructionButtons"
import { TEXT_CONTAINER } from "../../shared/components/textContainer"
import Screen from "./base"


class Begin extends Screen {
    get components() {
        return new Map([
            [TEXT_CONTAINER, {text: `Any questions?\nLet's begin.`}],
        ])
    }

    get clickHandlers() {
        return {
            container: () => {
                this.audioContainerClickHandler(this.orchestrator.variant.beginAudio)
            }
        }
    }
}


class Break extends Screen {
    get components() {
        return new Map([
            [TEXT_CONTAINER, {
                text: 'Take a break. Click or touch anywhere to continue.',
                addClass: 'base-text extra-large-text blue'
            }]
        ])
    }

    get clickHandlers() {
        return {container: () => this.containerClickHander()}
    }
}


class LetsPractice extends Screen {
    get components() {
       return new Map([
            [TEXT_CONTAINER, {text: `Let's Practice.`, addClass: 'base-text extra-large-text'}],
            [INSTRUCTION_BUTTON_CONTAINER, {}]
        ])
    }

    get clickHandlers() {
        return {
            nextButton: () => this.orchestrator.next(),
            previousButton: () => this.orchestrator.previous()
        }
    }
}


class TimeOut extends Screen {
    get components() {
        return new Map([
            [TEXT_CONTAINER, {text: 'Click or touch to continue.'}]
        ])
    }

    get clickHandlers() {
        return { container: () => this.timeoutContainerClickHandler() }
    }
}


class Complete extends Screen {
    get components() {
        return new Map([
            [TEXT_CONTAINER, {addClass: 'base-text large-text', text: `You've completed this exercise!`}]
        ])
    }

    get timeouts() {
        return new Map([
            [() => this.orchestrator.complete(), 1000]
        ])
    }
}


export { Begin, Break, Complete, LetsPractice, TimeOut }