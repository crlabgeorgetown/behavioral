import { TEXT_CONTAINER } from "../../shared/components/textContainer"
import { READY_TIMEOUT, ROUND_DURATION } from "../../shared/constants"
import Screen from "../../shared/screens/base"
import { CONTAINER } from "../../shared/components/container"
import { STOP } from "../../shared/components/stop"
import { PRACTICE } from "../constants"


class StopScreen extends Screen {
    get components() {
        const text = this.task.currentRound.blockType.name === PRACTICE ? `Any questions? Let's begin.` : 'Click or touch anywhere to continue.'
        return new Map([
            [STOP, {}],
            [TEXT_CONTAINER, {addClass: 'base-text medium-text', text: text}]
        ])
    }

    get clickHandlers() {
        return {container: () => this.handler()}
    }

    handler() {
        if (Date.now() - this.renderTime > 500) {
            CONTAINER.off('click')
            this.task.currentScreen = this.task.startCountDownScreen
            this.task.currentScreen.render()
        }
    }
}


class StartCountDownScreen extends Screen {
    components = new Map([
        [TEXT_CONTAINER, {addClass: 'base-text medium-text', text: 'Press to begin the countdown.'}]
    ])

    get clickHandlers() {
        return {container: () => this.handler()}
    }

    handler() {
        if (Date.now() - this.renderTime > 500) {
            CONTAINER.off('click')
            this.task.currentScreen = this.task.readyScreen
            this.task.currentScreen.render()
        }
    }
}


class ReadyScreen extends Screen {
    components = new Map([
        [TEXT_CONTAINER, {addClass: 'base-text extra-large-text blue'}]
    ])

    render() {
        super.render()
        TEXT_CONTAINER.text('Ready')
        setTimeout(() => {
            TEXT_CONTAINER.text('Set')
            setTimeout(() => {
                TEXT_CONTAINER.text('Go!')
                setTimeout(() => {
                    this.task.newRound()
                    this.task.currentScreen = this.task.trialScreen
                    this.task.currentScreen.render()
                    if (this.task.currentRound.blockType.name !== PRACTICE) {
                        setTimeout(() => {
                            this.task.inTrial = false
                            if (this.task.isDone) {
                                this.task.submit()
                                this.task.currentScreen = this.task.finalScreen
                            } else {
                                this.task.currentScreen = this.task.stopScreen
                            }
                            this.task.currentScreen.render()
                        }, ROUND_DURATION)
                    }
                }, READY_TIMEOUT)
            }, READY_TIMEOUT)
        }, READY_TIMEOUT)
    }
}


export { ReadyScreen, StartCountDownScreen, StopScreen }
