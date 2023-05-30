import { InputDevicesScreen } from "../shared/screens/inputDevices"
import { InstructionsOne, InstructionsThree, InstructionsTwo } from "./screens/instructions"
import { AuditoryTrialScreen } from "./screens/auditoryTrial"
import { WrittenTrialScreen } from "./screens/writtenTrial"
import { ParticipantIdScreen } from "../shared/screens/participantID"
import { Trial } from "./trial"
import { BaseTask } from "../shared/task"
import { GREEN_LABEL, RED_LABEL } from "../shared/components/responseButtons"
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
        RED_LABEL.text('Not a word')
        GREEN_LABEL.text('Real word')

        this.trialScreen = this.type === 'auditory' ? new AuditoryTrialScreen(this) : new WrittenTrialScreen(this)
        
        this.instructionScreens = [
            new ParticipantIdScreen(this),
            new InputDevicesScreen(this), 
            new InstructionsOne(this), 
            new InstructionsTwo(this), 
            new InstructionsThree(this),
            this.trialScreen
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

    newTrial() {
        this.trials.push(new Trial(this.data[this.dataIndex]))        
    }

    submit() {
        const columns = [
            'ItemNum',
            'Item',
            'CRESP',
            'TimedOut',
            'RT',
            'Accuracy',
            'WordType',
            'Frequency',
            'Regularity',
            'Imageability',
            'PartofSpeech',
            'Lexicality',
            'Response',
            'TrialType',
            'Time'
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