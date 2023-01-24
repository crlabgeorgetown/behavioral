const IS_QUALTRICS = window.location.host === "georgetown.az1.qualtrics.com"

class Renderer {
    
    constructor(engine) {
        this.engine = engine
        this.container = jQuery("<div/>", {id: "container", class: "container"})
        this.textContainer = jQuery("<div/>", {id: "text", class: "text"})
        this.greenButton = jQuery("<div/>", {id: "greenButton", class: "button green"})
        this.redButton = jQuery("<div/>", {id: "redButton", class: "button red"})
        this.buttonContainer = jQuery("<div/>", {id: "buttonContainer", class: "button-container"})

        this.setButtonClickHandlers = this.setButtonClickHandlers.bind(this)
    }

    initialize() {
        if (IS_QUALTRICS) {
            this.engine.hideNextButton()
        }
    
        debugger
        jQuery(".Wrapper").empty().append(
            this.container.append(
                this.textContainer, 
                this.buttonContainer.append([
                    this.greenButton, 
                    this.redButton
                ])
            )
        )
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
        this.greenButton.click(callbacks.greenCallback)
        this.redButton.click(callbacks.redCallback)
    }

    setClickHandler(callback) {
        jQuery(".Wrapper").one("click", () => {
            this.showButtons()
            callback()
        })
    }
}

class Game {
    #state = {
        hasPracticed: false,
        isPracticeRound: true,
        trial: 0
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
        if (this.#state.isPracticeRound) {
            clearTimeout(this.timeoutID)
            if (!this.isCorrect(response)) {
                this.renderer.updateText("Incorrect")
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
        setTimeout(() => {
			this.startTime = Date.now()
			this.renderer.updateText(this.getStimuli())
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
                this.engine.clickNextButton()
            }
        }
    }
}