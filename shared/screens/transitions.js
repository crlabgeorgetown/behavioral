import { TEXT_CONTAINER } from "../components/textContainer"
import { BEGIN_OR_PRACTICE_CONTAINER } from "../components/beginOrPractice"
import Screen from "./base"


class BeginOrPracticeAgain extends Screen {
    components = new Map([
        [TEXT_CONTAINER, {text: `Any questions?\nLet's begin`}],
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


class Break extends Screen {
    components = new Map([
        [
            TEXT_CONTAINER, 
            {
                text: 'Take a break. Click or touch anywhere to continue.',
                css: {color: '#0000FF'}
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
                css: {color: '#FF0000'}
            }
        ]
    ])

    get clickHandlers() {
        return {container: () => this.containerClickHandler(false)}
    }
}


class Finished extends Screen {
    components = new Map([
        [TEXT_CONTAINER, {text: `You've completed this exercise!`}]
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


export { BeginOrPracticeAgain, Break, Finished, Incorrect, TimeOut }