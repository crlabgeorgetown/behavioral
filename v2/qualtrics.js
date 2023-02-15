const IS_QUALTRICS = window.location.host === "georgetown.az1.qualtrics.com"
const DEVICE_LABEL_CSS = {
    "color": "#000000",
    "width": "15%",
    "margin-left": "auto",
    "margin-right": "auto",
    "text-align": "center",
}
const DEVICE_BUTTON_CSS = {
    "width": "15%",
    "margin-left": "auto",
    "margin-right": "auto"
}

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
            "color": "#000000",
            "text-align": "center",
            "font-size": "4vw",
            "min-width": "100vw",
            "white-space": "pre-line",
            "line-height": "1.7em",
            "margin-top": "auto",
            "margin-bottom": "auto"
        }})
        this.greenButton = jQuery("<img/>", {
            id: "greenButton",
            src: "https://jslawjslaw.github.io/js-crlab/static/check.png",
            css: {
                "margin-left": "auto",
                "margin-right": "2.5%",
                "padding": "1%",
                "width": "150px",
                "height": "150px",
        }}).hover(
            () => this.greenButton.css({"background": "#e3e3e3"}),
            () => this.greenButton.css({"background": "transparent"})
        )
        this.redButton = jQuery("<img/>", {
            id: "redButton",
            src: "https://jslawjslaw.github.io/js-crlab/static/remove.png",
            css: {
                "margin-left": "2.5%",
                "margin-right": "auto",
                "padding": "1%",
                "width": "150px",
                "height": "150px",
        }}).hover(
            () => this.redButton.css({"background": "#e3e3e3"}),
            () => this.redButton.css({"background": "transparent"})
        )
        this.labelContainer = jQuery("<div/>", {id: "labelContainer", css: {
            "display": "flex",
            "flex-direction": "row",
            "justify-content": "flex-end",
            "min-width": "100%",
            "margin-bottom": "auto"
        }})
        this.greenLabel = jQuery("<div/>", {id: "greenLabel", css: {
            "color": "#000000",
            "margin-left": "auto",
            "margin-right": "2.5%",
            "padding": "1%",
            "justify-content": "center",
            "display": "flex",
            "width": "150px",
            "height": "30px",
        }}).text("Real word")
        this.redLabel = jQuery("<div/>", {id: "redLabel", css: {
            "color": "#000000",
            "margin-left": "2.5%",
            "margin-right": "auto",
            "padding": "1%",
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
            "color": "#000000",
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
            "color": "#000000",
            "background": "#A8A8A8",
            "font-size": "3vw",
            "padding": "0.5em",
            "margin-left": "5vw"
        }).hover(
            () => this.previousButton.css({"background-color": "#B0B0B0", "cursor": "pointer"}),
            () => this.previousButton.css("background-color", "#A8A8A8")
        )
        this.inputDeviceContainer = jQuery("<div/>", {id: "inputDeviceContainer", css: {
            "display": "flex",
            "flex-direction": "row",
            "justify-content": "flex-end",
            "min-width": "100%",
            "margin-top": "5%",
        }})
        this.touchscreenButton = jQuery('<img/>', {
            id: "touchscreenButton", 
            css: DEVICE_BUTTON_CSS,
            src: "https://jslawjslaw.github.io/js-crlab/static/touchscreen.png",
        }).hover(
            () => this.touchscreenButton.css({"background": "#B0B0B0", "cursor": "pointer"}),
            () => this.touchscreenButton.css("background", "transparent")
        )
        this.trackpadButton = jQuery('<img/>', {
            id: "trackpadButton",
            css: DEVICE_BUTTON_CSS,
            src: "https://jslawjslaw.github.io/js-crlab/static/trackpad.png",
        }).hover(
            () => this.trackpadButton.css({"background": "#B0B0B0", "cursor": "pointer"}),
            () => this.trackpadButton.css("background", "transparent")
        )
        this.mouseButton = jQuery('<img/>', {
            id: "mouseButton",
            css: DEVICE_BUTTON_CSS,
            src: "https://jslawjslaw.github.io/js-crlab/static/computer-mouse.png",
        }).hover(
            () => this.mouseButton.css({"background": "#B0B0B0", "cursor": "pointer"}),
            () => this.mouseButton.css("background", "transparent")
        )
        this.otherButton = jQuery('<img/>', {
            id: "otherButton",
            css: DEVICE_BUTTON_CSS,
            src: "https://jslawjslaw.github.io/js-crlab/static/joystick.png",
        }).hover(
            () => this.otherButton.css({"background": "#B0B0B0", "cursor": "pointer"}),
            () => this.otherButton.css("background", "transparent")
        )
        this.inputDeviceLabelContainer = jQuery("<div/>", {id: "inputDeviceLabelContainer", css: {
            "display": "flex",
            "flex-direction": "row",
            "justify-content": "flex-end",
            "min-width": "100%",
            "margin-top": "2.5%",
            "margin-bottom": "auto",
        }})
        this.mouseButtonLabel = jQuery("<div/>", {
            id: "mouseButtonLabel",
            css: DEVICE_LABEL_CSS,
        }).text("Mouse")
        this.trackpadButtonLabel = jQuery("<div/>", {
            id: "trackpadButtonLabel",
            css: DEVICE_LABEL_CSS,
        }).text("Trackpad")
        this.touchscreenButtonLabel = jQuery("<div/>", {
            id: "touchscreenButtonLabel",
            css: DEVICE_LABEL_CSS,
        }).text("Touchscreen")
        this.otherButtonLabel = jQuery("<div/>", {
            id: "otherButtonLabel",
            css: DEVICE_LABEL_CSS,
        }).text("other")
    }

    renderInstructions() {
        switch (this.state.instructionScreen) {
            case 0:
                this.instructionButtonContainer.hide()
                this.buttonContainer.hide()
                this.labelContainer.hide()
                this.inputDeviceContainer.show()
                this.inputDeviceLabelContainer.show()
                break
            case 1:
                this.instructionButtonContainer.show()
                this.buttonContainer.hide()
                this.labelContainer.hide()
                this.inputDeviceContainer.hide()
                this.inputDeviceLabelContainer.hide()
                break
            case 2:
                this.instructionButtonContainer.show()
                this.buttonContainer.show()
                this.labelContainer.show()
                this.inputDeviceContainer.hide()
                this.inputDeviceLabelContainer.hide()
                break
            default:
                this.instructionButtonContainer.show()
                this.buttonContainer.hide()
                this.labelContainer.hide()
                this.inputDeviceContainer.hide()
                this.inputDeviceLabelContainer.hide()
                break  
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
                this.inputDeviceContainer.append([
                    this.mouseButton,
                    this.touchscreenButton,
                    this.trackpadButton,
                    this.otherButton,
                ]),
                this.inputDeviceLabelContainer.append([
                    this.mouseButtonLabel,
                    this.touchscreenButtonLabel,
                    this.trackpadButtonLabel,
                    this.otherButtonLabel,
                ]),
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
        this.inputDeviceClickHandler = this.inputDeviceClickHandler.bind(this)
        this.teardown = this.teardown.bind(this)

        this.renderer.initialize({
            "nextButton": this.nextButtonClickHandler,
            "previousButton": this.previousButtonClickHandler,
            "greenButton": () => this.responseClickHandler(true),
            "redButton": () => this.responseClickHandler(false),
            "mouseButton": () => this.inputDeviceClickHandler("mouse"),
            "trackpadButton": () => this.inputDeviceClickHandler("trackpad"),
            "touchscreenButton": () => this.inputDeviceClickHandler("touchscreen"),
            "otherButton": () => this.inputDeviceClickHandler("other"),
        })
        this.renderer.renderInstructions()
	}

    inputDeviceClickHandler(inputDevice) {
        this.state.instructionScreen++
        this.inputDevice = inputDevice
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
        Qualtrics.SurveyEngine.setEmbeddedData("inputDevice", this.inputDevice)
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

