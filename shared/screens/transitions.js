import { TEXT_CONTAINER } from "../components/textContainer"
import { BEGIN_OR_PRACTICE_CONTAINER } from "../components/beginOrPractice"
import { INSTRUCTION_BUTTON_CONTAINER } from "../components/instructionButtons"
import Screen from "./base"


class Begin extends Screen {
    components = new Map([
        [TEXT_CONTAINER, {text: `Any questions?\nLet's begin.`}],
    ])

    get clickHandlers() {
        return {container: () => this.audioContainerClickHandler(false, this.task.type.beep)}
    }
}


class BeginOrPracticeAgain extends Screen {
    components = new Map([
        [TEXT_CONTAINER, {text: `Any questions?\nLet's begin.`}],
        [BEGIN_OR_PRACTICE_CONTAINER, {}]
    ])

    get clickHandlers() {
        return {
            practiceButton: () => this.handle('practice'),
            beginButton: () => this.handle('begin')
        }
    }

    handle(action) {
        switch (action) {
            case 'practice':
                this.task.dataIndex = 0
                break
            case 'begin':
                this.task.dataIndex++
                break
        }
        this.task.currentScreen = this.task.trialScreen
        this.task.currentScreen.render()
    }
}


class LetsPractice extends Screen {
    components = new Map([
        [TEXT_CONTAINER, {text: `Let's Practice.`, addClass: 'base-text extra-large-text'}],
        [INSTRUCTION_BUTTON_CONTAINER, {}]
    ])

    get clickHandlers() {
        return {
            nextButton: () => this.instructionButtonClickHandler('next'),
            previousButton: () => this.instructionButtonClickHandler('previous')
        }
    }
}


class Break extends Screen {
    components = new Map([
        [
            TEXT_CONTAINER, 
            {
                text: 'Take a break. Click or touch anywhere to continue.',
                addClass: 'base-text extra-large-text blue'
            }
        ]
    ])

    get clickHandlers() {
        return {container: () => this.containerClickHandler(true)}
    }
}


class Incorrect extends Screen {
    components = new Map([
        [
            TEXT_CONTAINER, 
            {
                text: 'Incorrect, click or touch anywhere to try again.',
                addClass: 'base-text extra-large-text red'
            }
        ]
    ])

    get clickHandlers() {
        return {container: () => this.containerClickHandler(false)}
    }
}


class Finished extends Screen {
    components = new Map([
        [TEXT_CONTAINER, {addClass: 'base-text large-text', text: `You've completed this exercise!`}]
    ])

    render() {
        setTimeout(() => this.task.submit())
        super.render()
    }
}


class TimeOut extends Screen {
    components = new Map([
        [TEXT_CONTAINER, {text: 'Click or touch to continue.'}]
    ])

    get clickHandlers() {
        return {container: () => this.containerClickHandler(true)}
    }
}


export { Begin, BeginOrPracticeAgain, Break, Finished, Incorrect, LetsPractice, TimeOut }