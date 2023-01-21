class Experiment {
	constructor(config, engine) {
		this.isQualtrics = window.location.host === "georgetown.az1.qualtrics.com"
		this.engine = engine
        debugger
        this.game = new Game(stimuli, practiceStimuli)
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
        hasStarted: false,
        trial: 0
    }

	constructor(stimuli, practiceStimuli) {
        this.stimuli = stimuli
        this.practiceStimuli = practiceStimuli
        this.renderer = new Renderer()

        this.renderer.hideButtons()
        this.renderer.updateText(this.getInstructions())
	}

	// isDone() {
	// 	return this.#trial === this.stimuli.length
	// }

	getStimuli() {
        if (this.#state.isPracticeRound) {
            return this.practiceStimuli[this.#state.trial]
        } else {
            return this.stimuli[this.#state.trial]
        }
	}

	// getTrial() {
	// 	return this.#trial
	// }

	// isCorrect(response) {
	// 	return this.responses[this.#trial - 1] === response
	// }

	// advance() {
	// 	this.#trial++
	// }

    getInstructions() {
        const instructions = "Instructions: click the green circle if the text is a word, otherwise click the red circle."
        if (!this.#state.hasPracticed) {
            return instructions + " Click anywhere to begin."
        } else {
            return instructions + " Click the green circle to begin or click the red circle to practice again."
        }
    }

    ButtonClickHandler() {

    }

    start() {
        this.renderer.updateText("+")
        setTimeout(() => {
			this.startTime = Date.now()
			this.renderer.updateText(this.getStimuli())
			this.clickDisabled = false
			this.game.advance()
			this.timeoutID = setTimeout(() => {
				this.recursiveRender()
			}, 5000)
		}, 500)
    }
}