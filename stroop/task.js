import { InputDevicesScreen } from "../shared/screens/inputDevices"
import { InstructionsOne, InstructionsTwo, InstructionsThree } from "./screens/instructions"
import { ParticipantIdScreen } from "../shared/screens/participantID"
import { TrialScreen } from "./screens/trial"
import { BaseTask } from "../shared/task"
import { ReadyScreen, StartCountDownScreen, StopScreen } from "./screens/transitions"
import { Round } from "./round"
import { QualtricsClient } from "../shared/qualtricsClient"


class Task extends BaseTask {
	constructor(data, engine, type) {
        super()
        
        this.engine = engine
        this.rounds = []
        this.data = data
        this.inTrial = false
        this.type = type

        this.initializeScreens()
	}

    initializeScreens() {
        this.trialScreen = new TrialScreen(this)
        this.readyScreen = new ReadyScreen(this)
        this.startCountDownScreen = new StartCountDownScreen(this)
        this.stopScreen = new StopScreen(this)

        this.instructionScreens = [
            new ParticipantIdScreen(this),
            new InputDevicesScreen(this), 
            new InstructionsOne(this),
            new InstructionsTwo(this),
            new InstructionsThree(this),
            this.letsPracticeScreen,
            this.startCountDownScreen,
        ]

        this.setupInstructionScreens()
    }

    get currentTrial() {
        return this.currentRound.currentTrial
    }

    get currentRound() {
        return this.rounds[this.rounds.length - 1]
    }

    get currentProcedure() {
        return this.data[this.dataIndex].Procedure
    }

    get isDone() {
        return this.rounds.length === this.data.length
    }

    newRound() {
        this.rounds.push(new Round(this.rounds.length + 1, this.data[this.rounds.length]))
    }

    submit() {
        const columns = [
            'BlockNum',
            'BlockTrial',
            'BlockType',
            'TrialType',
            'WordString',
            'WordStringIndex',
            'InkColor',
            'CRESP',
            'Time',
            'TimedOut',
            'RT',
            'IncorrRT',
            'IncorrResp',
        ]
        if (window.location.host === "georgetown.az1.qualtrics.com") {
            const qualtricsClient = new QualtricsClient(columns, this.inputDevice, this.participantID)
            this.rounds.forEach((round) => qualtricsClient.collectTrialData(round.trials))
            qualtricsClient.submitEmbeddedData()
            this.engine.clickNextButton()
        }
    }
}


export { Task }