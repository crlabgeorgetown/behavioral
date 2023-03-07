const BASE_URL = './toshare/stimuli_for_adaptation'

const PRACTICE = 'practice'
const EXPERIMENT = 'experiment'
const SEMANTIC = 'semantic'
const PHONOLOGICAL = 'phonological'
const STANDARD = 'standard'
const READY_TIMEOUT = 1000
const TRIAL_TIMEOUT = 20000
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


class Enum {
    constructor(name) {
        this.name = name
      }
}


class GameType extends Enum {
    static SemanticReadMap = new GameType(SEMANTIC)
    static PhonologicalReadMap = new GameType(PHONOLOGICAL)
    static StandardReadMap = new GameType(STANDARD)
}


class TrialType extends Enum {
    static Practice = new TrialType(PRACTICE)
    static Experiment = new TrialType(EXPERIMENT)
}


class Renderer {
    constructor(config) {
        this.config = config
        this.container = jQuery("<div/>", {id: "container", css: {
            "display": "flex",
            "flex-direction": "column",
            "min-height": "100vh",
            "background-color": "#f0f0f0",
            "align-items": "center",
            "justify-content": "center"
        }})
        this.reminderContainer = jQuery('<div/>', {
            id: 'reminderContainer', 
            css: {
                width: '100%', 
                display: 'flex',
                marginTop: '10px',
                alignItems: 'center'
            }
        })
        this.pointer = jQuery('<div/>', {
            id: 'pointer', 
            css: {
                color: '#FF0000',
                fontSize: '3em',
                marginLeft: 'auto',
                marginRight: '3px',
                fontWeight: '900'
            }
        }).text('\u2192')
        this.reminder = jQuery('<img/>', {
            id: 'reminder', 
            css: {
                width: '80px',
                height: '80px',
                marginRight: '10px'
            }
        })
        this.stimuliToSelectContainer = jQuery('<div/>', {
            id: 'stimuliToSelectContainer', 
            css: {
                width: '100%', 
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 'auto'
            }
        })
        this.stimuliToSelectAndLabelContainer = jQuery('<div/>', {id: 'stimuliToSelectAndLabelContainer', css: {width: '100%', marginTop: 'auto'}})
        this.stimuliToSelect1 = jQuery('<img/>', {id: 'stimuliToSelect1', css: {width: '200px', height: '200px'}})
        this.stimuliToSelect2 = jQuery('<img/>', {id: 'stimuliToSelect2', css: {width: '200px', height: '200px'}})
        this.stimuliToSelectLabelContainer = jQuery('<div/>', {
            id: 'stimuliToSelectLabelContainer', 
            css: {
                width: '100%', 
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 'auto'
            }
        })
        this.stimuliToSelect1Label = jQuery('<div/>', {
            id: 'stimuliToSelect1Label', 
            css: {
                width: '200px', 
                height: '100%', 
                fontSize: '2em',
                textAlign: 'center'
            }
        })
        this.stimuliToSelect2Label = jQuery('<div/>', {
            id: 'stimuliToSelect2Label', 
            css: {
                width: '200px', 
                height: '100%', 
                fontSize: '2em',
                textAlign: 'center'
            }
        })
        this.allStimuliContainer = jQuery('<div/>', {id: 'allStimuliContainer', css: {width: '100%'}})
        this.allAstimuliContainer = jQuery('<div/>', {
            id: 'AllAstimuliContainer',
            css: {
                'display': 'flex',
                'height': '100px',
                'width': '100%',
                'margin-bottom': '1vh',
                'margin-top': 'auto',
                'align-items': 'center'
            }
        })
        this.allBstimuliContainer = jQuery('<div/>', {
            id: 'AllAstimuliContainer',
            css: {
                'display': 'flex',
                'height': '100px',
                'width': '100%',
                'margin-bottom': '1vh',
                'margin-top': 'auto',
                'align-items': 'center'
            }
        })
        this.allCstimuliContainer = jQuery('<div/>', {
            id: 'AllAstimuliContainer',
            css: {
                'display': 'flex',
                'height': '100px',
                'width': '100%',
                'margin-bottom': '1vh',
                'margin-top': 'auto',
                'align-items': 'center'
            }
        })
        this.allDstimuliContainer = jQuery('<div/>', {
            id: 'AllAstimuliContainer',
            css: {
                'display': 'flex',
                'height': '100px',
                'width': '100%',
                'margin-bottom': '1vh',
                'margin-top': 'auto',
                'align-items': 'center'
            }
        })
        this.appendAllStimuli(this.allAstimuliContainer, this.config.A)
        this.appendAllStimuli(this.allBstimuliContainer, this.config.B)
        this.appendAllStimuli(this.allCstimuliContainer, this.config.C)
        this.appendAllStimuli(this.allDstimuliContainer, this.config.D)
        this.textContainer = jQuery("<div/>", {id: "textContainer", css: {
            "color": "#000000",
            "text-align": "center",
            "font-size": "3vh",
            "min-width": "100vw",
            "white-space": "pre-line",
            "line-height": "1.7em",
            "margin-top": "auto",
            "margin-bottom": "auto"
        }})
        this.stimuliRow1Container = jQuery('<div/>', {
            id: 'stimuliRow1Container',
            css: {
                'display': 'flex',
                'height': '200px',
                'width': '100%',
                'margin-bottom': '1vh',
                'margin-top': 'auto',
            }
        })
        this.stimuliRow2Container = jQuery('<div/>', {
            id: 'stimuliRow2Container',
            css: {
                'display': 'flex',
                'height': '200px',
                'width': '100%',
                'margin-top': '1vh'
            }
        })
        this.stimuli1 = jQuery('<img/>', {
            id: 'stimuli1',
            css: {
                'width': '200px',
                'height': '200px',
                'margin-left': 'auto',
                'margin-right': '1vh',
            }
        })
        this.stimuli2 = jQuery('<img/>', {
            id: 'stimuli2',
            css: {
                'width': '200px',
                'height': '200px',
                'margin-left': '1vh',
                'margin-right': 'auto',
            }
        })
        this.stimuli3 = jQuery('<img/>', {
            id: 'stimuli3',
            css: {
                'width': '200px',
                'height': '200px',
                'margin-left': 'auto',
                'margin-right': '1vh',
            }
        })
        this.stimuli4 = jQuery('<img/>', {
            id: 'stimuli4',
            css: {
                'width': '200px',
                'height': '200px',
                'margin-left': '1vh',
                'margin-right': 'auto',
            }
        })
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
            "font-size": "2vw",
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
            "font-size": "2vw",
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

    appendAllStimuli(container, pattern) {
        container.append(jQuery('<div/>', {
            id: `${pattern}`, 
            css: {
                fontSize: '5vh',
                width: '40px',
                marginRight: '1em',
                marginLeft: '1em'
            }
        }).text(pattern))
        for (let i=1; i<11; i++){
            container.append(
                jQuery('<img/>', {
                    id: `${pattern}${i}`,
                    src: `${BASE_URL}/${pattern}${i}.jpg`,
                    css: {
                        width: '90px',
                        height: '90px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }
                })
            )
        }
    }

    initialize(clickHandlers) {
        jQuery("#Questions").remove()
        jQuery("#PushStickyFooter").remove()
        jQuery("#Plug").hide()
        jQuery(".SkinInner").hide()

        jQuery("#Wrapper").append(
            this.container.append(
                this.reminderContainer.append(
                    this.pointer,
                    this.reminder
                ),
                this.stimuliToSelectAndLabelContainer.append(
                    this.stimuliToSelectContainer.append(
                        this.stimuliToSelect1,
                        this.stimuliToSelect2
                    ),
                    this.stimuliToSelectLabelContainer.append(
                        this.stimuliToSelect1Label,
                        this.stimuliToSelect2Label
                    )
                ),
                this.allStimuliContainer.append(
                    this.allAstimuliContainer,
                    this.allBstimuliContainer,
                    this.allCstimuliContainer,
                    this.allDstimuliContainer
                ),
                this.stimuliRow1Container.append(
                    this.stimuli1,
                    this.stimuli2
                ),
                this.stimuliRow2Container.append(
                    this.stimuli3,
                    this.stimuli4
                ),
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
                this.instructionButtonContainer.append(
                    this.previousButton,
                    this.nextButton
                )
            )
        )

        this.updateClickHandlers(clickHandlers)
    }

    updateClickHandlers(clickHandlers) {
        for (const [id, callback] of Object.entries(clickHandlers)) {
            const element = jQuery(`#${id}`)
            element.off("click")
            element.click(callback)
        }
    }
}


class Screen {
    constructor(renderer, config, game) {
        this.renderer = renderer
        this.config = config
        this.game = game
    }
}


class InputDeviceInstructionScreen extends Screen {
    render() {
        this.renderer.inputDeviceContainer.show()
        this.renderer.inputDeviceLabelContainer.show()
        this.renderer.stimuliToSelectAndLabelContainer.hide()
        this.renderer.reminderContainer.hide()
        this.renderer.allStimuliContainer.hide()
        this.renderer.stimuliRow1Container.hide()
        this.renderer.stimuliRow2Container.hide()
        this.renderer.textContainer.text(this.getInstructions())
        this.renderer.textContainer.show()
        this.renderer.instructionButtonContainer.hide()
    }

    getInstructions() {
        return 'Please choose your input device to start.'
    }

    nextScreen() {
        return InstructionScreenOne
    }
}


class InstructionScreenOne extends Screen {
    render() {
        this.renderer.inputDeviceContainer.hide()
        this.renderer.inputDeviceLabelContainer.hide()
        this.renderer.stimuliToSelectAndLabelContainer.hide()
        this.renderer.reminderContainer.hide()
        this.renderer.allStimuliContainer.hide()
        this.renderer.stimuliRow1Container.show()
        this.renderer.stimuli1.attr({'src': `${BASE_URL}/${this.config.A}1.jpg`})
        this.renderer.stimuli2.attr({'src': `${BASE_URL}/${this.config.B}1.jpg`})
        this.renderer.stimuliRow2Container.show()
        this.renderer.stimuli3.attr({'src': `${BASE_URL}/${this.config.C}1.jpg`})
        this.renderer.stimuli4.attr({'src': `${BASE_URL}/${this.config.D}1.jpg`})
        this.renderer.textContainer.text(this.getInstructions())
        this.renderer.textContainer.show()
        this.renderer.instructionButtonContainer.show()
    }

    getInstructions() {
        return `Every screen will show pictures of a ${this.config.A}, a ${this.config.B}, a ${this.config.C}, and ${this.config.D}, but the exact pictures will change.`
    }

    previousScreen() {
        return InputDeviceInstructionScreen
    }

    nextScreen() {
        return InstructionScreenTwo
    }
}


class InstructionScreenTwo extends Screen {
    render() {
        this.renderer.inputDeviceContainer.hide()
        this.renderer.inputDeviceLabelContainer.hide()
        this.renderer.stimuliToSelectAndLabelContainer.hide()
        this.renderer.reminderContainer.hide()
        this.renderer.allStimuliContainer.show()
        this.renderer.stimuliRow1Container.hide()
        this.renderer.stimuliRow2Container.hide()
        this.renderer.textContainer.text(this.getInstructions())
        this.renderer.textContainer.show()
        this.renderer.instructionButtonContainer.show()
    }

    previousScreen() {
        return InstructionScreenOne
    }

    nextScreen() {
        return InstructionScreenThree
    }

    getInstructions() {
        return `Here are all the pictures you may see. Notice that some of them may look similar to each other.`
    }
}

class InstructionScreenThree extends Screen {
    render() {
        this.renderer.inputDeviceContainer.hide()
        this.renderer.inputDeviceLabelContainer.hide()
        this.renderer.stimuliToSelectAndLabelContainer.hide()
        this.renderer.reminderContainer.show()
        this.renderer.reminder.attr({src: `${BASE_URL}/${this.config.A}1.jpg`})
        this.renderer.allStimuliContainer.hide()
        this.renderer.stimuliRow1Container.show()
        this.renderer.stimuliRow2Container.show()
        this.renderer.textContainer.text(this.getInstructions())
        this.renderer.textContainer.show()
        this.renderer.instructionButtonContainer.show()
    }

    previousScreen() {
        return InstructionScreenTwo
    }

    nextScreen() {
        return InstructionScreenFour
    }

    getInstructions() {
        return `You will be asked to touch one picture as fast as you can. When you touch the picture, the location will change. If you forget what picture to touch, look for the reminder.`
    }
}

class InstructionScreenFour extends Screen {
    render() {
        this.renderer.inputDeviceContainer.hide()
        this.renderer.inputDeviceLabelContainer.hide()
        this.renderer.stimuliToSelectAndLabelContainer.show()
        this.renderer.stimuliToSelect1.attr({src: `${BASE_URL}/${this.config.A}1.jpg`})
        this.renderer.stimuliToSelect1Label.text(this.config.A)
        this.renderer.stimuliToSelect2.hide()
        this.renderer.stimuliToSelect2Label.hide()
        this.renderer.reminderContainer.hide()
        this.renderer.allStimuliContainer.hide()
        this.renderer.stimuliRow1Container.hide()
        this.renderer.stimuliRow2Container.hide()
        this.renderer.textContainer.text(this.getInstructions())
        this.renderer.textContainer.show()
        this.renderer.instructionButtonContainer.show()
    }

    previousScreen() {
        return InstructionScreenThree
    }

    nextScreen() {
        return ReadyScreen
    }

    getInstructions() {
        return `Please touch the ${this.config.A} every time. Let's practice a few.`
    }
}


class ReadyScreen extends Screen {
    render() {
        this.renderer.inputDeviceContainer.hide()
        this.renderer.inputDeviceLabelContainer.hide()
        this.renderer.stimuliToSelectAndLabelContainer.hide()
        this.renderer.reminderContainer.hide()
        this.renderer.allStimuliContainer.hide()
        this.renderer.stimuliRow1Container.hide()
        this.renderer.stimuliRow2Container.hide()
        this.renderer.textContainer.text("Ready")
        this.renderer.textContainer.css({
            fontSize: '10vh',
            color: '#0000FF'
        })
        this.renderer.textContainer.show()
        this.renderer.instructionButtonContainer.hide()
        setTimeout(() => {
            this.renderer.textContainer.text("Set")
            setTimeout(() => {
                this.renderer.textContainer.text("Go!")
                setTimeout(() => {
                    this.game.handleNewTrial(TrialType.Practice)
                }, READY_TIMEOUT)
            }, READY_TIMEOUT)
        }, READY_TIMEOUT)
    }

    nextScreen() {
        return TrialScreen
    }
}


class TrialScreen extends Screen {
    constructor(renderer, config, game) {
        super(renderer, config, game)
    }

    render() {
        const images = this.game.state.currentTrial.stimuli.map((stimuli, index) => {
            return `${BASE_URL}/${stimuli}${this.game.state.currentTrial.imageNumbers[index]}.jpg`
        })
        this.renderer.updateClickHandlers({
            stimuli1: () => this.game.stimuliButtonClickHandler(this.game.state.currentTrial.stimuli[0]),
            stimuli2: () => this.game.stimuliButtonClickHandler(this.game.state.currentTrial.stimuli[1]),
            stimuli3: () => this.game.stimuliButtonClickHandler(this.game.state.currentTrial.stimuli[2]),
            stimuli4: () => this.game.stimuliButtonClickHandler(this.game.state.currentTrial.stimuli[3])
        })

        this.renderer.stimuliToSelectAndLabelContainer.hide()
        this.renderer.reminderContainer.show()
        this.renderer.pointer.hide()
        this.renderer.reminder.css({marginLeft: 'auto'})
        this.renderer.reminder.attr({src: `${BASE_URL}/${this.config.A}1.jpg`})
        this.renderer.allStimuliContainer.hide()
        this.renderer.stimuliRow1Container.show()
        this.renderer.stimuli1.attr({src: images[0]})
        this.renderer.stimuli2.attr({src: images[1]})
        this.renderer.stimuliRow2Container.show()
        this.renderer.stimuli3.attr({src: images[2]})
        this.renderer.stimuli4.attr({src: images[3]})
        this.renderer.stimuliRow2Container.css({marginBottom: 'auto'})
        this.renderer.textContainer.hide()
        this.renderer.instructionButtonContainer.hide()
    }

    nextScreen() {
        return TrialScreen
    }
}


class State {
    constructor(config) {
        this.config = config
        this.hasPracticed = false
        this.currentTrial = null
        this.round = 0
        this.roundIndex = 0
        this.searchStimuli = [this.config.A]
        
    }

    getSearchStimuli() {
        return this.config.roundSchedule[this.round][this.roundIndex]
    }

    getRandomImageNumbers() {
        let imageNumbers = []
        for (let i = 0; i < 4; i++) {
            imageNumbers.push(Math.floor(Math.random() * 10) + 1)
        }
        return imageNumbers
    }

    shuffle() {
        let array = [this.config.A, this.config.B, this.config.C, this.config.D]
        let currentIndex = array.length
      
        while (currentIndex != 0) {
          let randomIndex = Math.floor(Math.random() * currentIndex)
          currentIndex--
          [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
        }

        return array
    }

    newCurrentTrial(trialType) {
        const searchStimuli = this.getSearchStimuli()
        let shuffled = this.shuffle()
        let imageNumbers = this.getRandomImageNumbers()
        if (this.currentTrial) {
            while (this.currentTrial.getSearchStimuliIndex() === shuffled.indexOf(searchStimuli)) {
                shuffled = this.shuffle()
            }
            while (this.currentTrial.getSearchStimuliImageNumber() === imageNumbers[shuffled.indexOf(searchStimuli)]) {
                imageNumbers = this.getRandomImageNumbers()
            }
        }
        this.currentTrial = new Trial(
            trialType, 
            shuffled,
            imageNumbers,
            searchStimuli,
        )
    }
}


class Trial {
    constructor(trialType, stimuli, imageNumbers, searchStimuli) {
        this.trialType = trialType
        this.startTime = Date.now()
        this.endTime = null
        this.selected = null
        this.stimuli = stimuli
        this.imageNumbers = imageNumbers
        this.searchStimuli = searchStimuli
        this.mistakes = 0
    }

    getSearchStimuliIndex() {
        return this.stimuli.indexOf(this.searchStimuli)
    }

    getSearchStimuliImageNumber() {
        return this.imageNumbers[this.stimuli.indexOf(this.searchStimuli)]
    }
}


class Game {
    constructor(config, engine) {
        this.renderer = new Renderer(config)
        this.state = new State(config)
        this.engine = engine
        this.config = config
        
        this.trials = []

        this.nextScreen = this.nextScreen.bind(this)
        this.inputDeviceClickHandler = this.inputDeviceClickHandler.bind(this)
        this.instructionButtonClickHandler = this.instructionButtonClickHandler.bind(this)
        this.stimuliButtonClickHandler = this.stimuliButtonClickHandler.bind(this)
        this.handleNewTrial = this.handleNewTrial.bind(this)

        this.renderer.initialize({
            nextButton: () => this.instructionButtonClickHandler('next'),
            previousButton: () => this.instructionButtonClickHandler('previous'),
            mouseButton: () => this.inputDeviceClickHandler('mouse'),
            trackpadButton: () => this.inputDeviceClickHandler('trackpad'),
            touchscreenButton: () => this.inputDeviceClickHandler('touchscreen'),
            otherButton: () => this.inputDeviceClickHandler('other'),
        })
        this.currentScreen = new InputDeviceInstructionScreen(this.renderer, this.config, this)
        this.currentScreen.render()
    }

    inputDeviceClickHandler(inputDevice) {
        this.inputDevice = inputDevice
        this.nextScreen(this.currentScreen.nextScreen())
    }

    nextScreen(screenClass) {
        this.currentScreen = new screenClass(this.renderer, this.config, this)
        this.currentScreen.render()
    }

    instructionButtonClickHandler(functionName) {
        let ScreenClass
        switch (functionName) {
            case "next":
                ScreenClass = this.currentScreen.nextScreen()
                break
            case "previous":
                ScreenClass = this.currentScreen.previousScreen()
                break
        }
        this.nextScreen(ScreenClass)
    }

    stimuliButtonClickHandler(stimuli) {
        if (this.state.getSearchStimuli() === stimuli) {
            this.handleNewTrial(TrialType.Practice)
        } else {
            this.state.currentTrial.mistakes++
        }
    }

    handleNewTrial(trialType) {
        this.state.newCurrentTrial(trialType)
        this.nextScreen(this.currentScreen.nextScreen())
    }
}