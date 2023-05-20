import { InputDevicesScreen } from "../shared/screens/inputDevices"
import { InstructionsOne, InstructionsTwo, InstructionsThree } from "./screens/instructions"
import { ParticipantIdScreen } from "../shared/screens/participantID"
import { TrialScreen } from "./screens/trial"
import { BaseTask } from "../shared/task"
import { ReadyScreen, StartCountDownScreen, StopScreen } from "./screens/transitions"
import { Round } from "./round"


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
        this.rounds.push(new Round(this.data[this.rounds.length]))
    }

    submit() {
        const columns = {
            'BlockType': [],
            'TrialType': [],
            'WordString': [],
            'WordStringIndex': [],
            'InkColor': [],
            'CRESP': [],
            'Time': [],
            'TimedOut': [],
            'RT': [],
            'IncorrRT': [],
            'IncorrResp': [],
        }
        const mouseMoveDistances = []
        const mouseMoveDurations = []
        const mouseMoveAverageVelocities = []
        const firstMouseMoves = []

        this.rounds.map((round) => {
            round.trials.map((trial) => {
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