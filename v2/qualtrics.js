const IS_QUALTRICS = window.location.host === "georgetown.az1.qualtrics.com"

class Renderer {
    
    constructor(engine) {
        this.engine = engine
        this.container = jQuery("<div/>", {id: "container", css: {
            "display": "flex",
            "flex-direction": "column",
            "min-height": "100vh"
        }})
        this.textContainer = jQuery("<div/>", {id: "text", css: {
            "text-align": "center",
            "padding-top": "15vh",
            "padding-bottom": "15vh",
            "font-size": "40pt"
        }})
        this.greenButton = jQuery("<div/>", {id: "greenButton", css: {
            "margin-left": "auto",
            "margin-right": "auto",
            "justify-content": "center",
            "border-radius": "50%",
            "width": "200px",
            "height": "200px",
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
            "width": "200px",
            "height": "200px",
            "background-color": "#eb3434"
        }}).hover(
            () => this.redButton.css("background-color", "#d52f2f"),
            () => this.redButton.css("background-color", "#eb3434")
        )
        this.buttonContainer = jQuery("<div/>", {id: "buttonContainer", css: {
            "display": "flex",
            "flex-direction": "row",
            "justify-content": "center"
        }})

        this.setButtonClickHandlers = this.setButtonClickHandlers.bind(this)
    }

    initialize() {
        jQuery("body").append(jQuery("#NextButton"))
        jQuery("body").children().hide()
        jQuery("body").append(
            this.container.append(
                this.textContainer, 
                this.buttonContainer.append([
                    this.greenButton, 
                    this.redButton
                ])
            )
        )
    }

    showNextButton() {
        jQuery("#NextButton").show()
    }

    hideButtons() {
        this.buttonContainer.hide()
    }

    showButtons() {
        this.buttonContainer.show()
    }

    updateText(text) {
        this.textContainer.text(text)
    }

    setButtonClickHandlers(callbacks) {
        this.greenButton.off("click")
        this.redButton.off("click")
        this.greenButton.click((event) => {
            event.preventDefault()
            callbacks.greenCallback()
        })
        this.redButton.click((event) => {
            event.preventDefault()
            callbacks.redCallback()
        })
    }

    setClickHandler(callback) {
        jQuery("body").one("click", () => {
            this.showButtons()
            callback()
        })
    }
}

class Game {
    #state = {
        hasPracticed: false,
        isPracticeRound: true,
        trial: 0,
        clickIsDisabled: false
    }

	constructor(config, engine) {
        this.engine = engine
        this.stimuli = config.stimuli
        this.practiceStimuli = config.practiceStimuli
        this.practiceStimuliAnswers = config.practiceStimuliAnswers
        this.responses = new Array(config.stimuli.length).fill("null")
		this.responseTimes = new Array(config.stimuli.length).fill("null")
        this.renderer = new Renderer(engine)

        this.start = this.start.bind(this)
        this.ButtonClickResponseHandler = this.ButtonClickResponseHandler.bind(this)
        this.ButtonClickHandler = this.ButtonClickHandler.bind(this)
        this.teardown = this.teardown.bind(this)

        this.renderer.initialize()
        this.renderer.hideButtons()
        this.renderer.updateText(this.getInstructions())
        this.renderer.setClickHandler(this.start)
        this.renderer.setButtonClickHandlers({
            greenCallback: () => this.ButtonClickResponseHandler(true),
            redCallback: () => this.ButtonClickResponseHandler(false)
        })
	}

	isDone() {
        if (this.#state.isPracticeRound) {
            return this.#state.trial === this.practiceStimuli.length
        } else {
            return this.#state.trial === this.stimuli.length
        }
	}

	getStimuli() {
        if (this.#state.isPracticeRound) {
            return this.practiceStimuli[this.#state.trial]
        } else {
            return this.stimuli[this.#state.trial]
        }
	}

    reset() {
        this.#state.hasPracticed = true
        this.#state.trial = 0
        this.renderer.updateText(this.getInstructions())
        this.renderer.setButtonClickHandlers({
            greenCallback: () => this.ButtonClickHandler(false),
            redCallback: () => this.ButtonClickHandler(true)
        })
    }

	isCorrect(response) {
        return this.practiceStimuliAnswers[this.#state.trial - 1] === response
	}

	advance() {
		this.#state.trial++
	}

    getInstructions() {
        const instructions = "Instructions: click the green circle if the text is a word, otherwise click the red circle."
        if (!this.#state.hasPracticed) {
            return instructions + " Click anywhere to begin."
        } else {
            return instructions + " Click the green circle to begin or click the red circle to practice again."
        }
    }

    ButtonClickHandler(isPracticeRound) {
        this.#state.isPracticeRound = isPracticeRound
        this.renderer.setButtonClickHandlers({
            greenCallback: () => this.ButtonClickResponseHandler(true),
            redCallback: () => this.ButtonClickResponseHandler(false)
        })
        this.start()
    }

    ButtonClickResponseHandler(response) {
        if (this.#state.clickIsDisabled) {
            return
        }
        if (this.#state.isPracticeRound) {
            clearTimeout(this.timeoutID)
            if (!this.isCorrect(response)) {
                this.renderer.updateText("Incorrect")
                this.#state.clickIsDisabled = true
                setTimeout(() => this.start(), 2000)
            } else {
                this.start()
            }
        } else {
            this.responses[this.#state.trial - 1] = response
			this.responseTimes[this.#state.trial - 1] = Date.now() - this.startTime
            this.start()
        }
    }

    start() {
        if (this.timeoutID != null) {
			clearTimeout(this.timeoutID)
		}

        if (this.isDone()) {
			this.teardown()
			return
		}

        this.renderer.updateText("+")
        this.#state.clickIsDisabled = true
        setTimeout(() => {
			this.startTime = Date.now()
			this.renderer.updateText(this.getStimuli())
            this.#state.clickIsDisabled = false
			this.advance()
			this.timeoutID = setTimeout(this.start, 5000)
		}, 500)
    }

    teardown() {
        if (this.#state.isPracticeRound) {
            this.reset()
        } else {
            this.renderer.hideButtons()
            this.renderer.updateText("You've completed this exercise!")
            if (IS_QUALTRICS) {
                Qualtrics.SurveyEngine.setEmbeddedData("responses", this.responses.join(','))
		        Qualtrics.SurveyEngine.setEmbeddedData("responseTimes", this.responseTimes.join(','))
                setTimeout(() => {
                    this.renderer.showNextButton()
                    this.engine.clickNextButton()
                }, 500)                
            }
        }
    }
}

