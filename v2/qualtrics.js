const IS_QUALTRICS = window.location.host === "georgetown.az1.qualtrics.com"

class TrialType {
    static Practice = new TrialType("practice")
    static Experiment = new TrialType("experiment")
  
    constructor(name) {
      this.name = name
    }
}


class Renderer {
    
    constructor(state) {
        this.state = state
        this.container = jQuery("<div/>", {id: "container", css: {
            "display": "flex",
            "flex-direction": "column",
            "min-height": "100vh",
            "background-color": "#f0f0f0",
            "align-items": "center",
            "justify-content": "center"
        }})
        this.textContainer = jQuery("<div/>", {id: "textContainer", css: {
            "text-align": "center",
            "font-size": "4vw",
            "min-width": "100vw",
            "white-space": "pre-line",
            "line-height": "1.7em",
            "margin-top": "auto",
            "margin-bottom": "auto"
        }})
        this.greenButton = jQuery("<div/>", {id: "greenButton", css: {
            "margin-left": "auto",
            "margin-right": "auto",
            "justify-content": "center",
            "border-radius": "50%",
            "width": "150px",
            "height": "150px",
            "background-color": "#34eb43"
        }}).hover(
            () => this.greenButton.css("background-color", "#2dc93a"),
            () => this.greenButton.css("background-color", "#34eb43")
        )
        this.redButton = jQuery("<div/>", {id: "redButton", css: {
            "margin-left": "auto",
            "margin-right": "auto",
            "justify-content": "center",
            "border-radius": "50%",
            "width": "150px",
            "height": "150px",
            "background-color": "#eb3434"
        }}).hover(
            () => this.redButton.css("background-color", "#d52f2f"),
            () => this.redButton.css("background-color", "#eb3434")
        )
        this.labelContainer = jQuery("<div/>", {id: "labelContainer", css: {
            "display": "flex",
            "flex-direction": "row",
            "justify-content": "flex-end",
            "min-width": "100%",
            "margin-bottom": "auto"
        }})
        this.greenLabel = jQuery("<div/>", {id: "greenLabel", css: {
            "margin-left": "auto",
            "margin-right": "auto",
            "justify-content": "center",
            "display": "flex",
            "width": "150px",
            "height": "30px",
        }}).text("Real word")
        this.redLabel = jQuery("<div/>", {id: "redLabel", css: {
            "margin-left": "auto",
            "margin-right": "auto",
            "justify-content": "center",
            "display": "flex",
            "width": "150px",
            "height": "30px",
        }}).text("Not a word")
        this.buttonContainer = jQuery("<div/>", {id: "buttonContainer", css: {
            "display": "flex",
            "flex-direction": "row",
            "justify-content": "flex-end",
            "min-width": "100%",
            "margin-top": "5%",
        }})
        this.instructionButtonContainer = jQuery("<div/>", {id: "instructionButtonContainer", css: {
            "display": "flex",
            "flex-direction": "row",
            "justify-content": "flex-end",
            "min-width": "100%",
            "margin-top": "auto",
            "margin-bottom": "4vh"
        }})
        this.nextButton = jQuery('<div id="nextButton">Next &raquo;</div>').css({
            "color": "#2e3138",
            "background": "#A8A8A8",
            "font-size": "3vw",
            "padding": "0.5em",
            "margin-left": "auto",
            "margin-right": "5vw"

        }).hover(
            () => this.nextButton.css({"background-color": "#B0B0B0", "cursor": "pointer"}),
            () => this.nextButton.css("background-color", "#A8A8A8")
        )
        this.previousButton = jQuery('<div id="previousButton">&laquo; Previous</div>').css({
            "color": "#2e3138",
            "background": "#A8A8A8",
            "font-size": "3vw",
            "padding": "0.5em",
            "margin-left": "5vw"
        }).hover(
            () => this.previousButton.css({"background-color": "#B0B0B0", "cursor": "pointer"}),
            () => this.previousButton.css("background-color", "#A8A8A8")
        )
    }

    renderInstructions() {
        this.nextButton.show()
        this.previousButton.show()
        this.buttonContainer.hide()
        this.labelContainer.hide()
        if (this.state.instructionScreen === 0) {
            this.previousButton.hide()
        }
        if (this.state.instructionScreen === 1) {
            this.buttonContainer.show()
            this.labelContainer.show()
        }
        this.updateText(this.state.getInstructions())
    }

    updateClickHandlers(clickHandlers) {
        for (const [id, callback] of Object.entries(clickHandlers)) {
            const element = jQuery(`#${id}`)
            element.off("click")
            element.click(callback)
        }
    }

    renderResetScreen(clickHandlers) {
        this.buttonContainer.hide()
        this.labelContainer.hide()
        this.nextButton.text("Begin")
        this.previousButton.text("Practice")
        this.instructionButtonContainer.show()
        this.updateClickHandlers(clickHandlers)
        this.updateText("Practice again or begin.")
    }

    renderGame() {
        this.instructionButtonContainer.hide()
        this.buttonContainer.show()
        this.labelContainer.show()
    }

    initialize(clickHandlers) {
        jQuery("#Questions").remove()
        jQuery("#PushStickyFooter").remove()
        jQuery("#Plug").hide()
        jQuery(".SkinInner").hide()

        jQuery("#Wrapper").append(
            this.container.append(
                this.textContainer,
                this.buttonContainer.append([
                    this.greenButton, 
                    this.redButton,
                ]),
                this.labelContainer.append([
                    this.greenLabel,
                    this.redLabel,
                ]),
                this.instructionButtonContainer.append([
                    this.previousButton,
                    this.nextButton,
                ])
            )
        )

        this.updateClickHandlers(clickHandlers)
    }

    renderFinalScreen() {
        this.labelContainer.hide()
        this.buttonContainer.hide()
        this.instructionButtonContainer.hide()
        this.updateText("You've completed this exercise!")
    }

    updateText(text) {
        this.textContainer.text(text)
    }
}


class State {

    constructor(config) {
        this.config = config
        this.hasPracticed = false
        this.trialType = TrialType.Practice
        this.trial = 0
        this.clickIsDisabled = true
        this.instructionScreen = 0
    }

    isDone() {
        return this.trial === this.config[this.trialType.name].length
	}

    instructionsComplete() {
        return this.instructionScreen === this.config.instructions.length
    }

    getAnswer() {
        return this.config[this.trialType.name][this.trial].answer
    }

	getStimuli() {
        return this.config[this.trialType.name][this.trial].stimuli
	}

    getInstructions() {
        return this.config.instructions[this.instructionScreen]
    }

    advance() {
        this.trial++
    }
}


class Game {
	constructor(config, engine) {
        this.engine = engine
        this.state = new State(config)
        this.renderer = new Renderer(this.state)
        this.stimuli = []
        this.responses = []
        this.answers = []
        this.trialTypes = []
		this.responseTimes = []
        
        this.start = this.start.bind(this)
        this.recordResponse = this.recordResponse.bind(this)
        this.nextButtonClickHandler = this.nextButtonClickHandler.bind(this)
        this.previousButtonClickHandler = this.previousButtonClickHandler.bind(this)
        this.responseClickHandler = this.responseClickHandler.bind(this)
        this.againButtonClickHandler = this.againButtonClickHandler.bind(this)
        this.teardown = this.teardown.bind(this)

        this.renderer.initialize({
            "nextButton": this.nextButtonClickHandler,
            "previousButton": this.previousButtonClickHandler,
            "greenButton": () => this.responseClickHandler(true),
            "redButton": () => this.responseClickHandler(false)
        })
        this.renderer.renderInstructions()
	}
    
    nextButtonClickHandler() {
        this.state.instructionScreen++
        if (this.state.instructionsComplete()) {
            this.renderer.renderGame()
            this.state.instructionScreen = 0
            this.state.trial = 0
            this.start(false, false)
        } else {
            this.renderer.renderInstructions()
        }
    }

    previousButtonClickHandler() {
        this.state.instructionScreen--
        this.renderer.renderInstructions()
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
        this.renderer.updateText("That was not correct. Try again.")
        this.state.clickIsDisabled = true
        setTimeout(() => this.start(false, timedOut), 2000)
    }

    start(advance, timedOut = false) {
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

        this.renderer.updateText("+")
        this.state.clickIsDisabled = true
        setTimeout(() => {
			this.startTime = Date.now()
			this.renderer.updateText(this.state.getStimuli())
            this.state.clickIsDisabled = false
			this.timeoutID = setTimeout(() => {
                if (this.state.trialType === TrialType.Practice) {
                    this.incorrectEvent(true)
                } else {
                    this.start(true, true)
                }
            }, 5000)
		}, 500)
    }

    recordResponse(response) {
        this.responses.push(response)
        this.responseTimes.push(Date.now() - this.startTime)
        this.trialTypes.push(this.state.trialType.name)
        this.stimuli.push(this.state.getStimuli())
        this.answers.push(this.state.getAnswer())
    }

    setEmbeddedData() {
        Qualtrics.SurveyEngine.setEmbeddedData("responses", this.responses.join(','))
        Qualtrics.SurveyEngine.setEmbeddedData("responseTimes", this.responseTimes.join(','))
        Qualtrics.SurveyEngine.setEmbeddedData("stimuli", this.stimuli.join(","))
        Qualtrics.SurveyEngine.setEmbeddedData("answers", this.answers.join(","))
        Qualtrics.SurveyEngine.setEmbeddedData("trialTypes", this.trialTypes.join(","))
        Qualtrics.SurveyEngine.setEmbeddedData("userAgent", navigator.userAgent)
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

