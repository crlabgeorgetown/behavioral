class Experiment {
	constructor(config, engine) {
		this.isQualtrics = window.location.host === "georgetown.az1.qualtrics.com"
		this.engine = engine
        this.game = new Game(config.stimuli, config.practiceStimuli)
	}
}

class Renderer {
    
    constructor() {
        this.container = $("<div/>", {id: "container", class: "container"})
        this.textContainer = $("<div/>", {id: "text", class: "text"})
        this.greenButton = $("<div/>", {id: "greenButton", class: "button green"})
        this.redButton = $("<div/>", {id: "redButton", class: "button red"})
        this.buttonContainer = $("<div/>", {id: "buttonContainer", class: "button-container"})
    
        $("#root").append(
            this.container.append(
                this.textContainer, 
                this.buttonContainer.append([
                    this.greenButton, 
                    this.redButton
                ])
            )
        )

        this.setButtonClickHandlers = this.setButtonClickHandlers.bind(this)
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
        this.greenButton.on("click", callbacks.greenCallback)
        this.redButton.on("click", callbacks.redCallback)
    }

    setClickHandler(callback) {
        $("#root").one("click", () => {
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

	constructor(stimuli, practiceStimuli) {
        this.stimuli = stimuli
        this.practiceStimuli = practiceStimuli
        this.responses = new Array(stimuli.length).fill("null")
		this.responseTimes = new Array(stimuli.length).fill("null")
        this.renderer = new Renderer()

        this.start = this.start.bind(this)
        this.ButtonClickResponseHandler = this.ButtonClickResponseHandler.bind(this)

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
    }

	isCorrect(response) {
		return this.responses[this.#state.trial - 1] === response
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

    ButtonClickResponseHandler(response) {
        if (this.#state.isPracticeRound && !this.isCorrect(response)) {
            this.renderer.updateText("Incorrect")
            setTimeout(() => this.start(), 2000)
            clearTimeout(this.timeoutID)
        }
        // if (!this.#state.isPracticeRound) {
        //     consol
        // }
    }

    start() {
        if (this.isDone()) {
			this.reset()
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
}