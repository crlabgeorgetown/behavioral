import { INSTRUCTION_BUTTON_CONTAINER } from "../../shared/components/instructionButtons"
import { TEXT_CONTAINER } from "../../shared/components/textContainer"
import { STIMULI_GRID } from "../components/stimuliGrid"
import { BaseScreen } from "./base"


const DEFAULT_TEXT_CSS = {
    color: "#000000",
    textAlign: "center",
    fontSize: "3vh",
    minWidth: "100vw",
    whiteSpace: "pre-line",
    lineHeight: "1.7em",
    marginBottom: '',
    marginTop: ''
}


class InstructionsOne extends BaseScreen {
    components = new Map([
        [STIMULI_GRID, {}],
        [TEXT_CONTAINER, {css: DEFAULT_TEXT_CSS}],
        [INSTRUCTION_BUTTON_CONTAINER, {}]
    ])

    get clickHandlers() {
        return {
            nextButton: () => this.instructionButtonClickHandler('next'),
            previousButton: () => this.instructionButtonClickHandler('previous')
        }
    }

    render() {
        this.setStimuliImages()
        this.updateText(`Every screen will show pictures of a ${this.task.taskType.stimuli[0]}, a ${this.task.taskType.stimuli[1]}, a ${this.task.taskType.stimuli[2]}, and ${this.task.taskType.stimuli[3]}, but the exact pictures will change.`)
        super.render()
    }
}


export { InstructionsOne }