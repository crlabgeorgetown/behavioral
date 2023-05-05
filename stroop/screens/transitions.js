import { TEXT_CONTAINER } from "../../shared/components/textContainer"
import { READY_TIMEOUT } from "../constants"
import Screen from "../../shared/screens/base"
import { CONTAINER } from "../../shared/components/container"
import { STOP } from "../../shared/components/stop"


class StopScreen extends Screen {
    components = new Map([
        [STOP, {}],
        [TEXT_CONTAINER, {addClass: 'base-text medium-text', text: `Any questions? Let's begin.`}]
    ])

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
                    if (this.task.isDone) {
                        this.task.submit()
                        this.task.currentScreen = this.task.finalScreen
                    } else {
                        this.task.newRound()
                        this.task.currentScreen = this.task.trialScreen
                    }
                    this.task.currentScreen.render()
                }, READY_TIMEOUT)
            }, READY_TIMEOUT)
        }, READY_TIMEOUT)
    }
}


export { ReadyScreen, StartCountDownScreen, StopScreen }
