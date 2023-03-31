import { TaskType } from "./constants"
import { InputDevicesScreen } from "../shared/screens/inputDevices"
import { ParticipantIdScreen } from "../shared/screens/participantID"
import { InstructionsOne } from "./screens/instructions"
import { CONTAINER } from "../shared/components/container"


class Task {
    constructor(engine, taskType) {
        this.engine = engine
        this.taskType = TaskType.fromString(taskType)        
        this.rounds = []

        this.initializeScreens()
    }

    initializeScreens() {
        jQuery("#Questions").remove()
        jQuery("#PushStickyFooter").remove()
        jQuery("#Plug").hide()
        jQuery(".SkinInner").hide()
        jQuery("#Wrapper").append(CONTAINER)

        const instructionScreens = [
            new ParticipantIdScreen(this),
            new InputDevicesScreen(this),
            new InstructionsOne(this)
        ]

        for (let i=0; i<instructionScreens.length; i++) {
            if (i < instructionScreens.length - 1) {
                instructionScreens[i].nextScreen = instructionScreens[i + 1]
            }
            if (i > 0) {
                instructionScreens[i].previousScreen = instructionScreens[i - 1]
            }
             
        }
        this.currentScreen = instructionScreens[0]
        this.currentScreen.render()
    }

    stopClickHandler(startTime) {
        if (Date.now() - startTime > 500) {
            jQuery('#Wrapper').off('click')
            this.nextScreen(this.currentScreen.nextScreen)
        }
    }

    inputDeviceClickHandler(inputDevice) {
        this.inputDevice = inputDevice
        this.nextScreen(this.currentScreen.nextScreen)
    }

    nextScreen(screenClass) {
        this.currentScreen = new screenClass(this.renderer, this.config, this)
        this.currentScreen.render()
    }

    instructionButtonClickHandler(functionName) {
        let ScreenClass = this.currentScreen.nextScreen
        if (functionName === 'previous') {
            ScreenClass = this.currentScreen.previousScreen
        }
        this.nextScreen(ScreenClass)
    }

    stimuliButtonClickHandler(stimuli) {
        this.currentRound.currentTrial.selections.push(stimuli)
        this.currentRound.currentTrial.selectionTimes.push(Date.now())
        if (this.currentRound.currentTrial.searchStimuli === stimuli) {
            let nextScreen = StopScreen
            if (!this.currentRound.shouldBeginExperiment()) {
                nextScreen = TrialScreen
                this.currentRound.incrementScheduleIndex()
                this.currentRound.newTrial()
            }
            this.nextScreen(nextScreen)
        }
    }

    get currentRound() {
        return this.rounds[this.rounds.length - 1]
    }

    newRound() {
        this.rounds.push(
            new Round(this.config.stimuli, this.config.roundSchedule[this.rounds.length])
        )
    }

    isDone() {
        return this.rounds.length === this.config.roundSchedule.length
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
        if (IS_QUALTRICS) {
            setTimeout(() => this.engine.clickNextButton(), 500)
        }
    }
}


export { Task }