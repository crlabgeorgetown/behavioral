import { INSTRUCTION_BUTTON_CONTAINER } from "../../shared/components/instructionButtons"
import { TEXT_CONTAINER } from "../../shared/components/textContainer"
import { ALL_STIMULI_CONTAINER, ALL_STIMULI_FOUR, ALL_STIMULI_ONE, ALL_STIMULI_THREE, ALL_STIMULI_TWO } from "../components/allStimuli"
import { REMINDER_BLOCK } from "../components/reminder"
import { SEARCH_STIMULI, SEARCH_STIMULI_CONTAINER } from "../components/searchStimuli"
import { STIMULI_GRID } from "../components/stimuliGrid"
import { BaseScreen } from "./base"


class InstructionsOne extends BaseScreen {
    components = new Map([
        [STIMULI_GRID, {}],
        [TEXT_CONTAINER, {addClass: 'base-text small-text'}],
        [INSTRUCTION_BUTTON_CONTAINER, {}]
    ])

    get clickHandlers() {
        return {
            nextButton: () => this.instructionButtonClickHandler('next'),
            previousButton: () => this.instructionButtonClickHandler('previous')
        }
    }

    render() {
        this.setStimuliImages(this.task.taskType.stimuli.map((stimulus) => this.task.taskType.imageUrlFromStimulus(stimulus, 1)))
        const pluralized = this.task.taskType.stimuli.map(this.pluralize)
        TEXT_CONTAINER.text(`Every screen will show pictures of a ${pluralized[0]}, a ${pluralized[1]}, a ${pluralized[2]}, and ${pluralized[3]}, but the exact pictures will change.`)
        super.render()
    }
}


class InstructionsTwo extends BaseScreen {
    components = new Map([
        [ALL_STIMULI_CONTAINER, {}],
        [TEXT_CONTAINER, {addClass: 'base-text small-text', text: 'Here are all the pictures you may see. Notice that some of them may look similar to each other.'}],
        [INSTRUCTION_BUTTON_CONTAINER, {}]
    ])

    constructor(task) {
        super(task)
        this.appendAllStimuli(ALL_STIMULI_ONE, this.task.taskType.stimuli[0])
        this.appendAllStimuli(ALL_STIMULI_TWO, this.task.taskType.stimuli[1])
        this.appendAllStimuli(ALL_STIMULI_THREE, this.task.taskType.stimuli[2])
        this.appendAllStimuli(ALL_STIMULI_FOUR, this.task.taskType.stimuli[3])
    }

    get clickHandlers() {
        return {
            nextButton: () => this.instructionButtonClickHandler('next'),
            previousButton: () => this.instructionButtonClickHandler('previous')
        }
    }

    appendAllStimuli(container, pattern) {
        container.append(jQuery('<div/>', {id: pattern, class: 'stimuli-label'}).text(this.pluralize(pattern)))
        for (let i=1; i<11; i++){
            container.append(
                jQuery('<img/>', {id: `${pattern}${i}`, src: this.task.taskType.imageUrlFromStimulus(pattern, i), class: 'stimulus'})
            )
        }
    }
}


class InstructionsThree extends BaseScreen {
    components = new Map([
        [REMINDER_BLOCK, {}],
        [STIMULI_GRID, {addClass: 'stimuli-grid'}],
        [TEXT_CONTAINER, {
            text: 'You will be asked to touch one picture as fast as you can. When you touch the picture, the location will change. If you forget what picture to touch, look for the reminder.',
            addClass: 'base-text extra-small-text'
        }],
        [INSTRUCTION_BUTTON_CONTAINER, {}]
    ])

    constructor(task) {
        super(task)
        this.updateReminders()
    }

    get clickHandlers() {
        return {
            nextButton: () => this.instructionButtonClickHandler('next'),
            previousButton: () => this.instructionButtonClickHandler('previous')
        }
    }
}


class InstructionsFour extends BaseScreen {
    components = new Map([
        [SEARCH_STIMULI_CONTAINER, {}],
        [TEXT_CONTAINER, {addClass: 'base-text small-text'}],
        [INSTRUCTION_BUTTON_CONTAINER, {}]
    ])

    get clickHandlers() {
        return {
            nextButton: () => this.instructionButtonClickHandler('next'),
            previousButton: () => this.instructionButtonClickHandler('previous')
        }
    }

    updateSearchStimuli() {
        SEARCH_STIMULI.map((stimulusToSelect) => stimulusToSelect.hide())
        this.task.currentRound.getStimuliSchedule().map((stimulus, index) => {
            SEARCH_STIMULI[2 * index].show()
            SEARCH_STIMULI[2 * index].attr({src: this.task.taskType.imageUrlFromStimulus(stimulus, 1)})
            SEARCH_STIMULI[2 * index + 1].show()
            SEARCH_STIMULI[2 * index + 1].text(this.pluralize(stimulus))
        })
    }

    render() {
        super.render()
        let text
        if (this.task.currentRound.roundSchedule.length === 1) {
            text = `Please touch the ${this.pluralize(this.task.currentRound.getSearchStimuli())} every time. Let's practice a few.`
        } else {
            const stimuli = this.task.currentRound.getStimuliSchedule().map(this.pluralize)
            text = `Please alternate between the ${stimuli[0]} and the ${stimuli[1]}. Let's practice a few.`
        }
        TEXT_CONTAINER.text(text)
        this.updateSearchStimuli()
    }
}


export { InstructionsOne, InstructionsTwo, InstructionsThree, InstructionsFour }