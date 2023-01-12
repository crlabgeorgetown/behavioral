const NEW_GAME = "newGame"
const NEW_PRACTICE_GAME = "newPracticeGame"
const TRUE_RESPONSE = "trueResponse"
const FALSE_RESPONSE = "falseResponse"

class Renderable {
	constructor(action, x, y, dx, dy) {
		this.action = action
		this.x = x
		this.y = y
		this.dx = dx
		this.dy = dy
		this.isRendered = false
	}

	isWithinBounds(x, y) {
		return (
			(this.x <= x) && (x <= this.x + this.dx) && 
			(this.y <= y) && (y <= this.y + this.dy)
		)
	}

	clear(ctx) {
		ctx.clearRect(this.x - 1, this.y - 1, this.dx + 2, this.dy + 2)
	}

	render(ctx) {
		throw new Error('Not Implemented');
	}
}

class Button extends Renderable {
	constructor(action, x, y, dx, dy) {
		super(action, x, y, dx, dy)
		this.strokeStyle = "#36454F"
		this.fillStyle = "#D3D3D3"
		this.rounding = 50
	}

	render(ctx) {
		ctx.strokeStyle = this.strokeStyle
		ctx.fillStyle = this.fillStyle
		ctx.beginPath()
		ctx.roundRect(this.x, this.y, this.dx, this.dy, this.rounding)
		ctx.stroke()
		ctx.fill()
	}
}

class ImageButton extends Renderable {
	constructor(action, x, y, dx, dy, source) {
		super(action, x, y, dx, dy)
		this.source = source
	}

	render(ctx) {
		const image = new Image()
		image.onload = () => ctx.drawImage(image, this.x, this.y, this.dx, this.dy)
		image.src = this.source
	}
}

class Text {
	constructor(text, x, y) {
		this.x = x
		this.y = y
		this.text = text
		this.textAlign = "center"
		this.font = "30px Arial"
		this.textcolor = "#000000"
		this.isRendered = false
	}

	render(ctx) {
		ctx.textAlign = this.textAlign
		ctx.font = this.font
		ctx.fillStyle = this.textcolor
		ctx.fillText(this.text, this.x, this.y)
	}

	clear(ctx) {
		const measured = ctx.measureText(this.text)
		ctx.clearRect(
			this.x - measured.actualBoundingBoxLeft - 10, 
			this.y - measured.actualBoundingBoxAscent - 10, 
			measured.width + 10, 
			measured.actualBoundingBoxAscent + measured.actualBoundingBoxDescent + 10
		)
	}
}


class Game {
	#trial = 0

	constructor(stimuli, isPractice, responses) {
		this.stimuli = stimuli
		this.isPractice = isPractice
		this.responses = responses
	}

	isDone() {
		return this.#trial === this.stimuli.length
	}

	getStimuli() {
		return this.stimuli[this.#trial]
	}

	isCorrect(response) {
		return this.responses[this.#trial - 1] === response
	}

	advance() {
		this.#trial++
	}
}

class Renderer {
	constructor(leftSource, rightSource) {
		this.sideLength = 200
		this.leftX = (1/3) * window.innerWidth - (this.sideLength/2)
		this.rightX = (2/3) * window.innerWidth  - (this.sideLength/2)
		this.y = (2/3) * window.innerHeight - (this.sideLength/2)

		this.leftButton = new Button(NEW_PRACTICE_GAME, this.leftX, this.y, this.sideLength, this.sideLength)
		this.rightButton = new Button(NEW_GAME, this.rightX, this.y, this.sideLength, this.sideLength)

		this.leftImage = new ImageButton(TRUE_RESPONSE, this.leftX, this.y, this.sideLength, this.sideLength, leftSource)
		this.rightImage = new ImageButton(FALSE_RESPONSE, this.rightX, this.y, this.sideLength, this.sideLength, rightSource)

		this.textConfig = {
			backgroundcolor: "#FFFFFF",
			textcolor: "#000000",
			font: "30px Arial",
			textAlign: "center",
			instructions: "Instructions: click the green 'check mark' if the text is a word, otherwise click the red 'x'"
		}

		this.renderState = {
			buttons: [this.leftButton, this.rightButton],
			images: [this.leftImage, this.rightImage],
			text: []
		}
	}

	renderInstructions(ctx) {
		this.clear(ctx, ["images", "text"])

		this.renderState.text = [
			new Text(this.textConfig.instructions, window.innerWidth/2, window.innerHeight/3),
			new Text("practice", this.leftX + this.sideLength / 2, this.y + this.sideLength / 1.75),
			new Text("begin", this.rightX + this.sideLength / 2, this.y + this.sideLength / 1.75)
		]

		this.render(ctx, ["buttons", "text"])
	}

	renderGame(ctx, text) {
		this.clear(ctx, ["text", "buttons"])
		this.renderState.text = [new Text(text, window.innerWidth/2, window.innerHeight/3)]
		this.render(ctx, ["text", "images"])
	}

	renderThankYou(ctx) {
		this.clear(ctx, ["buttons", "images", "text"])
		this.renderState.text = [new Text("Thank you for your time!", window.innerWidth/2, window.innerHeight/3)]
		this.render(ctx, ["text"])
	} 

	getActionsFromClick(x, y) {
		return (
			this.renderState.buttons.concat(this.renderState.images)
				.map((button) => button.isWithinBounds(x, y) && button.isRendered ? button.action : null)
				.filter((val) => val !== null)
		)
	}

	clear(ctx, keys) {
		for (const key of keys) {
			for (let i=0; i < this.renderState[key].length; i++) {
				const renderable = this.renderState[key][i]
				if (renderable.isRendered) {
					renderable.clear(ctx)
					renderable.isRendered = false
				}
			}
		}
	}

	render(ctx, keys) {
		for (const key of keys) {
			for (let i=0; i < this.renderState[key].length; i++) {
				const renderable = this.renderState[key][i]
				if (!renderable.isRendered) {
					renderable.render(ctx)
					renderable.isRendered = true
				}
			}
		}
	}
}

class Experiment {
	constructor(stimuli, engine) {
		this.engine = engine
		this.canvas = document.getElementById("root")
		this.ctx = this.canvas.getContext("2d")
		this.canvas.width = window.innerWidth
		this.canvas.height = window.innerHeight				

		this.game = null
		this.stimuli = stimuli
		this.practiceStimuli = ['bean', 'forer', 'keln']
		this.practiceStimuliResponses = [true, false, false]
		this.renderer = new Renderer(
			'https://as1.ftcdn.net/v2/jpg/01/09/34/96/1000_F_109349658_4J4rge1gHrbVsMcEa2pZeMYQ6v0CetJZ.jpg',
			'https://as1.ftcdn.net/v2/jpg/01/44/05/94/1000_F_144059489_2zFsnEA3seaxRzTNQg7NVg3SK5jhc8mV.jpg',
		)

		this.clickDisabled = false
		this.canvasOnClick = this.canvasOnClick.bind(this)
		this.recursiveRender = this.recursiveRender.bind(this)
		this.submitResponse = this.submitResponse.bind(this)
		this.tearDown = this.tearDown.bind(this)

		this.canvas.addEventListener('click', this.canvasOnClick)
	}

	submitResponse(response, endTime) {
		const key = `response${this.trial + 1}`
		const timeKey = `responseTime${this.trial + 1}`
		Qualtrics.SurveyEngine.addEmbeddedData(key, response)
		Qualtrics.SurveyEngine.setEmbeddedData(key, response)
		Qualtrics.SurveyEngine.addEmbeddedData(timeKey, endTime - this.startTime)
		Qualtrics.SurveyEngine.setEmbeddedData(timeKey, endTime - this.startTime)
	}

	recursiveRender() {
		if (this.game.isDone()) {
			clearTimeout(this.timeoutID)
			let callback
			if (this.game.isPractice) {
				this.game = null
				callback = () => this.renderer.renderInstructions(this.ctx)
			} else {
				callback = () => this.tearDown()
			}

			this.renderer.renderThankYou(this.ctx)
			setTimeout(callback, 3000)
			return
		}
		
		if (this.timeoutID != null) {
			clearTimeout(this.timeoutID)
		}

		this.renderer.renderGame(this.ctx, "+")
		this.clickDisabled = true
		setTimeout(() => {
			this.renderer.renderGame(this.ctx, this.game.getStimuli())
			this.clickDisabled = false
			this.game.advance()
			this.timeoutID = setTimeout(() => {
				this.recursiveRender()
			}, 5000)
		}, 500)
	}

	handleResponse(response, endTime) {
		if (this.game.isPractice && !this.game.isCorrect(response)) {
			this.renderer.renderGame(this.ctx, "Incorrect!")
			return () => setTimeout(() => this.recursiveRender(), 2000)
		} 
		if (!this.game.isPractice) {
			this.submitResponse(response, endTime)
		}
		return this.recursiveRender
	}

	canvasOnClick(event) {
		event.preventDefault()
	
		if (this.clickDisabled) {
			return
		}

		const endTime = Date.now()

		this.renderer.getActionsFromClick(event.offsetX, event.offsetY).map((action) => {
			let callback
			switch (action) {
				case NEW_GAME:
					this.game = new Game(this.stimuli, false)
					callback = this.recursiveRender
					break
				case NEW_PRACTICE_GAME:
					this.game = new Game(this.practiceStimuli, true, this.practiceStimuliResponses)
					callback = this.recursiveRender
					break
				case TRUE_RESPONSE:
					callback = this.handleResponse(true, endTime)
					break
				case FALSE_RESPONSE:
					callback = this.handleResponse(false, endTime)
					break
			}

			callback()
		})
	}

	initialize() {
		this.engine.hideNextButton()
		document.getElementById("QID1-1-label").remove()
		this.renderer.renderInstructions(this.ctx)
	}

	tearDown() {
		this.canvas.remove()
		this.engine.clickNextButton()
	}
}