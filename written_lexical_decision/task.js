import { CONTAINER } from "../shared/components/container"
import { InputDevicesScreen } from "../shared/screens/inputDevices"
import { InstructionsOne, InstructionsThree, InstructionsTwo } from "../shared/screens/lexicalDecisionInstructions"
import { TrialScreen } from "./screens/trial"
import { BeginOrPracticeAgain, Break, Finished, Incorrect, TimeOut } from "../shared/screens/transitions"
import { Trial } from "../shared/lexicalDecisionTrial"
import { ParticipantIdScreen } from "../shared/screens/participantID"


export class Task {
	constructor(data, engine) {
        this.engine = engine
        this.trials = []
        this.data = data
        this.dataIndex = 0
        this.inTrial = false

        this.recordMouseMove = this.recordMouseMove.bind(this)

        this.initializeScreens()
        this.newTrial()
	}

    initializeScreens() {
        jQuery("#Questions").remove()
        jQuery("#PushStickyFooter").remove()
        jQuery("#Plug").hide()
        jQuery(".SkinInner").hide()
        jQuery("#Wrapper").append(CONTAINER)
        jQuery(document).mousemove(this.recordMouseMove)

        this.trialScreen = new TrialScreen(this)
        this.incorrectScreen = new Incorrect(this)
        this.breakScreen = new Break(this)
        this.beginOrPracticeAgainScreen = new BeginOrPracticeAgain(this)
        this.finishedScreen = new Finished(this)
        this.timeoutScreen = new TimeOut(this)
        
        const instructionScreens = [
            new ParticipantIdScreen(this),
            new InputDevicesScreen(this), 
            new InstructionsOne(this), 
            new InstructionsTwo(this), 
            new InstructionsThree(this),
            this.trialScreen
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
        if (this.currentProcedure === 'showasbreak') {
            this.currentScreen = this.breakScreen
        } else {
            this.trials.push(new Trial(this.data[this.dataIndex]))
        }
        
    }

    recordMouseMove(event) {
        if (this.inTrial) {
            this.currentTrial.recordMouseMove(Date.now(), event.clientX, event.clientY)
        }
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
            'TrialType': []
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