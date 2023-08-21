import { InputDevicesScreen } from "../shared/screens/inputDevices"
import { ParticipantIdScreen } from "../shared/screens/participantID"
import { BaseTask } from "../shared/task"
import { InstructionsOne } from "./screens/instructions"
import { QualtricsClient } from "../shared/qualtricsClient"


class Task extends BaseTask {
	constructor(data, engine, type) {
        super()
        
        this.engine = engine
        this.trials = []
        this.data = data
        this.dataIndex = 0
        this.inTrial = false
        this.type = type

        this.initializeScreens()
	}

    initializeScreens() {
        this.trialScreen = new TrialScreen(this)

        this.instructionScreens = [
            new ParticipantIdScreen(this),
            new InputDevicesScreen(this), 
            new InstructionsOne(this),
            this.letsPracticeScreen,
            this.trialscreen,
        ]

        this.setupInstructionScreens()
    }

    get currentTrial() {
        return this.trials[this.trials.length - 1]
    }

    get currentProcedure() {
        return this.data[this.dataIndex].Procedure
    }

    get isDone() {
        return this.dataIndex === this.data.length - 1
    }

    submit() {
        const columns = [
            'ItemNum',
            'CRESP',
            'TimedOut',
            'RT',
            'Accuracy',
            'Response',
            'Sound1',
            'Sound2',
            'RhymeMatch',
            'OrthoMatch',
            'TrialType',
            'Time',
        ]
        if (window.location.host === "georgetown.az1.qualtrics.com") {
            const qualtricsClient = new QualtricsClient(columns, this.inputDevice, this.participantID)
            qualtricsClient.collectTrialData(this.trials)
            qualtricsClient.submitEmbeddedData()
            this.engine.clickNextButton()
        }
    }
}


export { Task }