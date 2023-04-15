import { CONTAINER } from "../../shared/components/container";
import { TEXT_CONTAINER } from "../../shared/components/textContainer";
import { STOP } from "../components/stop";
import { READY_TIMEOUT, ROUND_DURATION } from "../constants";
import { BaseScreen } from "./base";


class FinalScreen extends BaseScreen {
    components = new Map([
        [TEXT_CONTAINER, {text: `You've completed this exercise!`}]
    ])
}


class StopScreen extends BaseScreen {
    components = new Map([
        [STOP, {}],
        [TEXT_CONTAINER, {css: {marginBottom: 'auto'}, text: 'Click anywhere when you are ready to begin the real thing. Go as fast as you can.'}]
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


class ReadyScreen extends BaseScreen {
    components = new Map([
        [TEXT_CONTAINER, {css: {fontSize: '10vh', color: '#0000FF', marginTop: 'auto'}}]
    ])

    render() {
        super.render()
        this.updateText('Ready')
        setTimeout(() => {
            this.updateText('Set')
            setTimeout(() => {
                this.updateText('Go!')
                setTimeout(() => {
                    this.task.currentRound.newTrial()
                    this.task.currentScreen = this.task.trialScreen
                    this.task.currentScreen.render()
                    setTimeout(() => {
                        this.task.inTrial = false
                        if (this.task.isDone()) {
                            this.task.submit()
                            this.task.currentScreen = this.task.finalScreen
                        } else {
                            this.task.newRound()
                            this.task.currentScreen = this.task.instructionScreens[this.task.instructionScreens.length - 2]
                        }
                        this.task.currentScreen.render()
                    }, ROUND_DURATION)
                }, READY_TIMEOUT)
            }, READY_TIMEOUT)
        }, READY_TIMEOUT)
    }
}


export { FinalScreen, ReadyScreen, StopScreen }