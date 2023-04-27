import { InputDevicesScreen } from "../shared/screens/inputDevices"
// import { BeginOrPracticeAgain, Break, Finished, Incorrect, TimeOut } from "../shared/screens/transitions"
// import { AuditoryTrialScreen } from "./screens/auditoryTrial"
// import { WrittenTrialScreen } from "./screens/writtenTrial"
import { ParticipantIdScreen } from "../shared/screens/participantID"
// import { Trial } from "./trial"
import { BaseTask } from "../shared/task"
import { GREEN_LABEL, RED_LABEL } from "../shared/components/responseButtons"
import { InstructionsOne, InstructionsTwo, InstructionsThree, InstructionsFour } from "./screens/instructions"


class Task extends BaseTask {
	constructor(engine, type) {
        super()
        
        this.engine = engine
        this.trials = []
        // this.data = data
        this.dataIndex = 0
        this.inTrial = false
        this.type = type

        this.initializeScreens()
	}

    initializeScreens() {
        this.setupDOM()
        RED_LABEL.text('No Rhyme')
        GREEN_LABEL.text('Rhyme')

        // this.trialScreen = this.type === 'auditory' ? new AuditoryTrialScreen(this) : new WrittenTrialScreen(this)
        // this.incorrectScreen = new Incorrect(this)
        // this.breakScreen = new Break(this)
        // this.beginOrPracticeAgainScreen = new BeginOrPracticeAgain(this)
        // this.finishedScreen = new Finished(this)
        // this.timeoutScreen = new TimeOut(this)
        
        this.instructionScreens = [
            new ParticipantIdScreen(this),
            new InputDevicesScreen(this), 
            new InstructionsOne(this),
            new InstructionsTwo(this),
            new InstructionsThree(this),
            new InstructionsFour(this),
            // this.trialScreen
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
        const columns = {
            'ItemNum': [],
            'Item': [],
            'CRESP': [],
            'TimedOut': [],
            'RT': [],
            'Accuracy': [],
            'WordType': [],
            'Frequency': [],
            'Regularity': [],
            'Imageability': [],
            'PartofSpeech': [],
            'Lexicality': [],
            'Response': [],
            'TrialType': [],
            'Time': []
        }
        const mouseMoveDistances = []
        const mouseMoveDurations = []
        const mouseMoveAverageVelocities = []
        const firstMouseMoves = []

        this.trials.map((trial) => {
            let firstMouseMove, duration, distance, avgVelocity 
            [firstMouseMove, duration, distance, avgVelocity] = trial.computeMousemoveStats()
            firstMouseMoves.push(firstMouseMove)
            mouseMoveDurations.push(duration)
            mouseMoveDistances.push(distance)
            mouseMoveAverageVelocities.push(avgVelocity)
            
            for (const [key, values] of Object.entries(columns)) {
                values.push(trial[key])
            }
        })

        if (window.location.host === "georgetown.az1.qualtrics.com") {
            for (const [key, values] of Object.entries(columns)) {
                Qualtrics.SurveyEngine.setEmbeddedData(key, values.join(';'))
            }
            Qualtrics.SurveyEngine.setEmbeddedData('userAgent', navigator.userAgent.replace(',', '|').replace(';','|'))
            Qualtrics.SurveyEngine.setEmbeddedData('inputDevice', this.inputDevice)
            Qualtrics.SurveyEngine.setEmbeddedData('SubjectID', this.participantID)
            Qualtrics.SurveyEngine.setEmbeddedData('firstMouseMoves', firstMouseMoves.join(';'))
            Qualtrics.SurveyEngine.setEmbeddedData('mouseMoveDurations', mouseMoveDurations.join(';'))
            Qualtrics.SurveyEngine.setEmbeddedData('mouseMoveDistances', mouseMoveDistances.join(';'))
            Qualtrics.SurveyEngine.setEmbeddedData('mouseMoveAverageVelocities', mouseMoveAverageVelocities.join(';'))
            Qualtrics.SurveyEngine.setEmbeddedData('RecipientFirstName', 'N/A')
            Qualtrics.SurveyEngine.setEmbeddedData('RecipientLastName', 'N/A')
            Qualtrics.SurveyEngine.setEmbeddedData('RecipientEmail', 'N/A')
            Qualtrics.SurveyEngine.setEmbeddedData('ExternalReference', 'N/A')

            this.engine.clickNextButton()
        }
    }
}


export { Task }