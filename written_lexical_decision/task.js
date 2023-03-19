import { CONTAINER } from "../shared/components/container"
import { InputDevicesScreen } from "../shared/screens/inputDevices"
import { InstructionsOne, InstructionsThree, InstructionsTwo } from "./screens/instructions"
import { TrialScreen } from "./screens/trial"
import { BeginOrPracticeAgain, Break, Finished, Incorrect, Timeout } from "./screens/transitions"
import { Trial } from "./trial"


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
        this.timeoutScreen = new Timeout(this)
        
        const instructionScreens = [
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
        const config = this.data[this.dataIndex]

        if (this.currentProcedure === 'showasbreak') {
            this.currentScreen = this.breakScreen
        } else {
            this.trials.push(
                new Trial(
                    config.TrialType, 
                    config.word,
                    config.Lexicality,
                    config.CRESP,
                    config.WordType,
                    config.Frequency,
                    config.Regularity,
                    config.Imageability,
                    config.PartofSpeech
                )
            )
        }
        
    }

    recordMouseMove(event) {
        if (this.inTrial) {
            this.currentTrial.recordMouseMove(Date.now(), event.clientX, event.clientY)
        }
    }

    submit() {
        const responses = []
        const responseTimes = []
        const stimuli = []
        const correctResponses = []
        const trialTypes = []
        const reactionTimes = []
        const mouseMoveDurations = []
        const mouseMoveDistances = []
        const mouseMoveAverageVelocities = []
        const wordTypes = []
        const frequencies = []
        const regularities = []
        const imageabilities = []
        const partsOfSpeech = []

        this.trials.map((trial) => {
            let reactionTime, duration, distance, avgVelocity 
            [reactionTime, duration, distance, avgVelocity] = trial.computeMousemoveStats()
            responses.push(trial.response)
            responseTimes.push(trial.responseTime - trial.startTime)
            stimuli.push(trial.stimulus)
            correctResponses.push(trial.correctResponse)
            trialTypes.push(trial.trialType)
            reactionTimes.push(reactionTime)
            mouseMoveDurations.push(duration)
            mouseMoveDistances.push(distance)
            mouseMoveAverageVelocities.push(avgVelocity)
            wordTypes.push(trial.wordType)
            frequencies.push(trial.frequency)
            regularities.push(trial.regularity)
            imageabilities.push(trial.imageability)
            partsOfSpeech.push(trial.partOfSpeech)
        })

        if (window.location.host === "georgetown.az1.qualtrics.com") {
            Qualtrics.SurveyEngine.setEmbeddedData('responses', responses.join(','))
            Qualtrics.SurveyEngine.setEmbeddedData('responseTimes', responseTimes.join(','))
            Qualtrics.SurveyEngine.setEmbeddedData('stimuli', stimuli.join(','))
            Qualtrics.SurveyEngine.setEmbeddedData('correctResponses', correctResponses.join(','))
            Qualtrics.SurveyEngine.setEmbeddedData('trialTypes', trialTypes.join(','))
            Qualtrics.SurveyEngine.setEmbeddedData('userAgent', navigator.userAgent)
            Qualtrics.SurveyEngine.setEmbeddedData('inputDevice', this.inputDevice)
            Qualtrics.SurveyEngine.setEmbeddedData('reactionTimes', reactionTimes.join(','))
            Qualtrics.SurveyEngine.setEmbeddedData('mouseMoveDurations', mouseMoveDurations.join(','))
            Qualtrics.SurveyEngine.setEmbeddedData('mouseMoveDistances', mouseMoveDistances.join(','))
            Qualtrics.SurveyEngine.setEmbeddedData('mouseMoveAverageVelocities', mouseMoveAverageVelocities.join(','))
            Qualtrics.SurveyEngine.setEmbeddedData('wordTypes', wordTypes.join(','))
            Qualtrics.SurveyEngine.setEmbeddedData('frequencies', frequencies.join(','))
            Qualtrics.SurveyEngine.setEmbeddedData('regularities', regularities.join(','))
            Qualtrics.SurveyEngine.setEmbeddedData('imageabilities', imageabilities.join(','))
            Qualtrics.SurveyEngine.setEmbeddedData('partsOfSpeech', partsOfSpeech.join(','))

            this.engine.clickNextButton()
        }
    }
}