import { TaskType } from "./constants"
import { InputDevicesScreen } from "../shared/screens/inputDevices"
import { ParticipantIdScreen } from "../shared/screens/participantID"
import { InstructionsOne, InstructionsTwo, InstructionsThree, InstructionsFour } from "./screens/instructions"
import { Round } from "./round"
import { FinalScreen, ReadyScreen, StopScreen } from "./screens/transitions"
import { TrialScreen } from "./screens/trial"
import { BaseTask } from "../shared/task"


class Task extends BaseTask {
    constructor(engine, taskType) {
        super()

        this.engine = engine
        this.taskType = TaskType.fromString(taskType)
        this.rounds = []
        this.newRound()

        this.initializeScreens()
    }

    initializeScreens() {
        this.setupDOM()

        this.readyScreen = new ReadyScreen(this)
        this.finalScreen = new FinalScreen(this)
        this.trialScreen = new TrialScreen(this)
        this.stopScreen = new StopScreen(this)

        this.instructionScreens = [
            new ParticipantIdScreen(this),
            new InputDevicesScreen(this),
            new InstructionsOne(this),
        ]
        
        if (this.taskType.shouldShowInstructionScreenTwo) {
            this.instructionScreens.push(new InstructionsTwo(this))
        }
            
        this.instructionScreens.push(
            new InstructionsThree(this),
            new InstructionsFour(this),
            this.trialScreen
        )

        this.setupInstructionScreens()
    }

    get currentRound() {
        return this.rounds[this.rounds.length - 1]
    }

    newRound() {
        this.rounds.push(new Round(this.taskType, this.taskType.roundSchedule[this.rounds.length]))
    }

    isDone() {
        return this.rounds.length === this.taskType.roundSchedule.length
    }

    submit() {
        const columns = {
            'OptionA': [],
            'OptionB': [],
            'OptionC': [],
            'OptionD': [],
            'Item': [],
            'CRESP': [],
            'RT': [],
            'IncorrRT': [],
            'IncorrResp': [],
            'PresOrder': [],
            'TrialType': [],
            'Time': [],
            'TimedOut': [],
        }
        const mouseMoveDistances = []
        const mouseMoveDurations = []
        const mouseMoveAverageVelocities = []
        const firstMouseMoves = []

        const thePattern = []
        const patternLength = []
        const patternNumber = []

        this.rounds.map((round, roundIndex) => {
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

                patternNumber.push(roundIndex)
                thePattern.push(round.roundSchedule.join(''))
                patternLength.push(round.roundSchedule.length)
            })
        })
        if (window.location.host === "georgetown.az1.qualtrics.com") {
            for (const [key, values] of Object.entries(columns)) {
                Qualtrics.SurveyEngine.setEmbeddedData(key, values.join(';'))
            }
            Qualtrics.SurveyEngine.setEmbeddedData('ThePattern', thePattern.join(';'))
            Qualtrics.SurveyEngine.setEmbeddedData('PatternLength', patternLength.join(';'))
            Qualtrics.SurveyEngine.setEmbeddedData('PatternNumber', patternNumber.join(';'))
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