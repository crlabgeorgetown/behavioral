import { TaskType } from "./constants"
import { InputDevicesScreen } from "../shared/screens/inputDevices"
import { ParticipantIdScreen } from "../shared/screens/participantID"
import { InstructionsOne, InstructionsTwo, InstructionsThree, InstructionsFour } from "./screens/instructions"
import { CONTAINER } from "../shared/components/container"
import { Round } from "./round"
import { FinalScreen, ReadyScreen, StopScreen } from "./screens/transitions"
import { TrialScreen } from "./screens/trial"


class Task {
    constructor(engine, taskType) {
        this.engine = engine
        this.taskType = TaskType.fromString(taskType)
        this.rounds = []
        this.newRound()

        this.initializeScreens()
    }

    initializeScreens() {
        jQuery("#Questions").remove()
        jQuery("#PushStickyFooter").remove()
        jQuery("#Plug").hide()
        jQuery(".SkinInner").hide()
        jQuery("#Wrapper").append(CONTAINER)

        this.readyScreen = new ReadyScreen(this)
        this.finalScreen = new FinalScreen(this)
        this.trialScreen = new TrialScreen(this)
        this.stopScreen = new StopScreen(this)

        this.instructionScreens = [
            new ParticipantIdScreen(this),
            new InputDevicesScreen(this),
            new InstructionsOne(this),
            new InstructionsTwo(this),
            new InstructionsThree(this),
            new InstructionsFour(this),
            this.trialScreen
        ]

        for (let i=0; i<this.instructionScreens.length; i++) {
            if (i < this.instructionScreens.length - 1) {
                this.instructionScreens[i].nextScreen = this.instructionScreens[i + 1]
            }
            if (i > 0) {
                this.instructionScreens[i].previousScreen = this.instructionScreens[i - 1]
            }
        }

        this.currentScreen = this.instructionScreens[0]
        this.currentScreen.render()
    }

    get currentRound() {
        return this.rounds[this.rounds.length - 1]
    }

    newRound() {
        this.rounds.push(
            new Round(this.taskType.stimuli, this.taskType.roundSchedule[this.rounds.length])
        )
    }

    isDone() {
        return this.rounds.length === this.taskType.roundSchedule.length
    }

    submit() {
        const searchStimuli = []
        const imageNumbers = []
        const stimuliOrdering = []
        const selections = []
        const selectionTimes = []
        const trialTypes = []
        const timedOut = []
        this.rounds.map((round) => {
            round.trials.map((trial) => {
                searchStimuli.push(trial.searchStimuli)
                imageNumbers.push(trial.imageNumbers.join(';'))
                stimuliOrdering.push(trial.stimuli.join(';'))
                selections.push(trial.selections.join(';'))
                selectionTimes.push(trial.selectionTimes.map((selectionTime) => selectionTime - trial.startTime).join(';'))
                trialTypes.push(trial.trialType.name)
                timedOut.push(!trial.selections.includes(trial.searchStimuli))
            })
        })
        if (window.location.host === "georgetown.az1.qualtrics.com") {
            setTimeout(() => this.engine.clickNextButton(), 500)
        }
    }
}


export { Task }