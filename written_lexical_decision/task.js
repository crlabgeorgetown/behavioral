import * as d3 from 'd3'
import { CONTAINER } from "../shared/components/container"
import InputDevicesScreen from "../shared/screens/inputDevices"
import { InstructionsOne, InstructionsThree, InstructionsTwo } from "./screens/instructions"
import Trial from "./trial"


export class Task {
	constructor(config, engine) {
        this.config = config
        this.engine = engine
        this.trials = []
        
        this.initializeScreens()       
	}

    initializeScreens() {
        jQuery("#Questions").remove()
        jQuery("#PushStickyFooter").remove()
        jQuery("#Plug").hide()
        jQuery(".SkinInner").hide()
        jQuery("#Wrapper").append(CONTAINER)

        const screens = [
            new InputDevicesScreen(this), 
            new InstructionsOne(this), 
            new InstructionsTwo(this), 
            new InstructionsThree(this)
        ]

        for (let i=0; i<screens.length; i++) {
            if (i < screens.length - 1) {
                screens[i].nextScreen = screens[i + 1]
            }
            if (i > 0) {
                screens[i].previousScreen = screens[i - 1]
            }
             
        }
        this.currentScreen = screens[0]
        this.currentScreen.render()
    }

    get currentTrial() {
        return this.trials[this.trials.length - 1]
    }

    newTrial() {
        this.trials.push(
            new Trial(TrialType.Practice, "bean")
        )
    }

    recordMouseMove(event) {
        const now = Date.now()
        if (this.inTrial) {
            this.currentTrial.recordMouseMove(now, event.clientX, event.clientY)
        }
    }

    againButtonClickHandler(trialType) {
        this.state.trialType = trialType
        this.renderer.renderGame()
        this.start(false, false)
    }

    responseClickHandler(response) {
        if (this.state.clickIsDisabled) {
            return
        }

        this.recordResponse(response)
        clearTimeout(this.timeoutID)

        if (this.state.trialType === TrialType.Practice && this.state.getAnswer() !== response) {
            this.incorrectEvent(false)
        } else {
            this.start(true)
        }
    }

    incorrectEvent(timedOut) {
        this.renderer.updateText("Incorrect, try again.", "7vw", "#FF0000")
        this.state.clickIsDisabled = true
        this.state.inTrial = false
        setTimeout(() => this.start(false, timedOut), 2000)
    }

    start(advance, timedOut = false) {
        this.state.inTrial = false
        if (timedOut) {
            this.recordResponse(null)
        }

        if (advance) {
            this.state.advance()
        }

        if (this.timeoutID != null) {
			clearTimeout(this.timeoutID)
		}

        if (this.state.isDone()) {
			this.teardown()
			return
		}

        this.renderer.updateText("+", "7vw")
        this.state.clickIsDisabled = true
        setTimeout(() => {
			this.renderer.updateText(this.state.getStimuli(), "7vw")
            this.state.resetMousemoveState()
            this.state.inTrial = true
			this.state.trialStartTime = Date.now()
            this.state.clickIsDisabled = false
			this.timeoutID = setTimeout(() => {
                if (this.state.trialType === TrialType.Practice) {
                    this.incorrectEvent(true)
                } else {
                    this.start(true, true)
                }
            }, TIMEOUT)
		}, 500)
    }

    recordResponse(response) {
        this.responses.push(response)
        if (response === null) {
            this.responseTimes.push(TIMEOUT)
        } else {
            this.responseTimes.push(Date.now() - this.state.trialStartTime)
        }
        let reactionTime, duration, distance, avgVelocity
        [reactionTime, duration, distance, avgVelocity] = this.state.computeTrialMousemoveStats()
        this.reactionTimes.push(reactionTime)
        this.durations.push(duration)
        this.distances.push(distance)
        this.avgVelocities.push(avgVelocity)
        this.trialTypes.push(this.state.trialType.name)
        this.stimuli.push(this.state.getStimuli())
        this.answers.push(this.state.getAnswer())
    }

    setEmbeddedData() {
        Qualtrics.SurveyEngine.setEmbeddedData('responses', this.responses.join(','))
        Qualtrics.SurveyEngine.setEmbeddedData('responseTimes', this.responseTimes.join(','))
        Qualtrics.SurveyEngine.setEmbeddedData('stimuli', this.stimuli.join(','))
        Qualtrics.SurveyEngine.setEmbeddedData('answers', this.answers.join(','))
        Qualtrics.SurveyEngine.setEmbeddedData('trialTypes', this.trialTypes.join(','))
        Qualtrics.SurveyEngine.setEmbeddedData('userAgent', navigator.userAgent)
        Qualtrics.SurveyEngine.setEmbeddedData('inputDevice', this.inputDevice)
        Qualtrics.SurveyEngine.setEmbeddedData('reactionTimes', this.reactionTimes.join(','))
        Qualtrics.SurveyEngine.setEmbeddedData('durations', this.durations.join(','))
        Qualtrics.SurveyEngine.setEmbeddedData('distances', this.distances.join(','))
        Qualtrics.SurveyEngine.setEmbeddedData('avgVelocities', this.avgVelocities.join(','))
    }

    teardown() {
        switch (this.state.trialType) {
            case TrialType.Practice:
                this.state.hasPracticed = true
                this.state.trial = 0
                this.renderer.renderResetScreen({
                    "nextButton": () => this.againButtonClickHandler(TrialType.Experiment),
                    "previousButton": () => this.againButtonClickHandler(TrialType.Practice)
                })
                break
            case TrialType.Experiment:
                this.renderer.renderFinalScreen()
                if (IS_QUALTRICS) {
                    this.setEmbeddedData()
                    setTimeout(() => this.engine.clickNextButton(), 500)                
                }
                break
        }
    }
}