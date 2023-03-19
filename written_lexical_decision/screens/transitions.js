import { TEXT_CONTAINER } from "../../shared/components/textContainer"
import { BEGIN_OR_PRACTICE_CONTAINER } from "../components/beginOrPractice"
import Screen from "../../shared/screens/base"


class BeginOrPracticeAgain extends Screen {
    components = new Map([
        [TEXT_CONTAINER, {text: 'Begin or practice again?'}],
        [BEGIN_OR_PRACTICE_CONTAINER, {css: {fontSize: '4vw'}}]
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
        this.task.newTrial()
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
                css: {color: '#0000FF', fontSize: '4vw'}
            }
        ]
    ])

    get clickHandlers() {
        return {container: () => this.containerClickHandler()}
    }
}


class Incorrect extends Screen {
    components = new Map([
        [
            TEXT_CONTAINER, 
            {
                text: 'Incorrect, click or touch anywhere to try again.',
                css: {color: '#FF0000', fontSize: '4vw'}
            }
        ]
    ])

    get clickHandlers() {
        return {container: () => this.containerClickHandler()}
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


export { BeginOrPracticeAgain, Break, Finished, Incorrect }