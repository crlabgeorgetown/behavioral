import { InputDevicesScreen } from "../shared/screens/inputDevices"
import { AuditoryTrialScreen } from "./screens/auditoryTrial"
import { WrittenTrialScreen } from "./screens/writtenTrial"
import { ParticipantIdScreen } from "../shared/screens/participantID"
import { Trial } from "./trial"
import { BaseTask } from "../shared/task"
import { GREEN_LABEL, RED_LABEL } from "../shared/components/responseButtons"
import { InstructionsOne, InstructionsTwo, InstructionsThree, InstructionsFour, InstructionFive } from "./screens/instructions"
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
        RED_LABEL.text('No Rhyme')
        GREEN_LABEL.text('Rhyme')
        
        this.instructionScreens = [
            new ParticipantIdScreen(this),
            new InputDevicesScreen(this), 
            new InstructionsOne(this),
            new InstructionsTwo(this),
            new InstructionsThree(this),
        ]

        this.trialScreen = new AuditoryTrialScreen(this)

        if (this.type === 'written') {
            this.instructionScreens.push(
                new InstructionsFour(this),
                new InstructionFive(this),
            )

            this.trialScreen = new WrittenTrialScreen(this)
        }

        this.instructionScreens.push(
            this.letsPracticeScreen,
            this.trialScreen
        )

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

    newTrial() {
        this.trials.push(new Trial(this.data[this.dataIndex]))        
    }

    submit() {
        const columns = {
            'ItemNum': [],
            'CRESP': [],
            'TimedOut': [],
            'RT': [],
            'Accuracy': [],
            'Response': [],
            'Sound1': [],
            'Sound2': [],
            'RhymeMatch': [],
            'OrthoMatch': [],
            'TrialType': [],
            'Time': []
        }

        if (window.location.host === "georgetown.az1.qualtrics.com") {
            const qualtricsClient = new QualtricsClient(columns, this.inputDevice, this.participantID)
            qualtricsClient.collectTrialData(this.trials)
            qualtricsClient.submitEmbeddedData()
            this.engine.clickNextButton()
        }
    }
}


export { Task }