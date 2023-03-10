const IS_QUALTRICS = window.location.host === "georgetown.az1.qualtrics.com"
const BASE_URL = './toshare/stimuli_for_adaptation'

const PRACTICE = 'practice'
const EXPERIMENT = 'experiment'
const SEMANTIC = 'semantic'
const PHONOLOGICAL = 'phonological'
const STANDARD = 'standard'
const READY_TIMEOUT = 1000
const ROUND_DURATION = 3000
const MAX_PRACTICE_TRIALS = 3
const DEVICE_LABEL_CSS = {
    color: "#000000",
    width: "15%",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
}
const DEVICE_BUTTON_CSS = {
    width: "15%",
    marginLeft: "auto",
    marginRight: "auto"
}
const DEFAULT_TEXT_CSS = {
    color: "#000000",
    textAlign: "center",
    fontSize: "3vh",
    minWidth: "100vw",
    whiteSpace: "pre-line",
    lineHeight: "1.7em",
    marginBottom: '',
    marginTop: ''
}
const REMINDER_CSS = {
    width: '80px',
    height: '80px',
    margin: 'auto'
}
const SEARCH_STIMULI_CSS = {
    width: '200px', 
    height: '200px', 
    padding: '50px',
    background: '#BEBEBE',
    border: '1px solid #000000'
}
const SEARCH_STIMULI_LABEL_CSS = {
    width: '200px', 
    height: '100%', 
    fontSize: '2em',
    textAlign: 'center'
}
const STIMULI_CSS = {
    width: '200px',
    height: '200px',
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
        this.reminderRow = jQuery('<div/>', {
            id: 'reminderRow',
            css: {
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'right',
            }
        })
        this.redArrow = jQuery('<img/>', {
            id: 'redArrow',
            css: {
                width: '200px',
                height: '80px',
                marginTop: '10px',
                marginBottom: '10px',
                padding: '5px'
            },
            src: 'https://jslawjslaw.github.io/js-crlab/static/red-arrow.png'
        })
        this.reminderContainer = jQuery('<div/>', {
            id: 'reminderContainer', 
            css: {
                width: '200px', 
                display: 'flex',
                marginTop: '10px',
                marginBottom: '10px',
                padding: '5px',
                alignItems: 'center',
                background: '#BEBEBE',
                border: 'solid 1px'
            }
        })
        this.reminders = [
            jQuery('<img/>', {id: 'reminder1', css: REMINDER_CSS}),
            jQuery('<img/>', {id: 'reminder2', css: REMINDER_CSS})
        ]
        this.stimuliToSelectContainer = jQuery('<div/>', {
            id: 'stimuliToSelectContainer', 
            css: {
                width: '600px',
                maxHeight: '400px', 
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 'auto',
                marginBottom: 'auto'
            }
        })
        this.stimuliToSelect = [
            jQuery('<img/>', {id: 'stimuliToSelect1', css: SEARCH_STIMULI_CSS}),
            jQuery('<div/>', {id: 'stimuliToSelect1Label', css: SEARCH_STIMULI_LABEL_CSS}),
            jQuery('<img/>', {id: 'stimuliToSelect2', css: SEARCH_STIMULI_CSS}),
            jQuery('<div/>', {id: 'stimuliToSelect2Label', css: SEARCH_STIMULI_LABEL_CSS})
        ]
        this.allStimuliContainer = jQuery('<div/>', {id: 'allStimuliContainer', css: {width: '100%', margin: 'auto'}})
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
        this.appendAllStimuli(this.allAstimuliContainer, this.config.stimuli[0])
        this.appendAllStimuli(this.allBstimuliContainer, this.config.stimuli[1])
        this.appendAllStimuli(this.allCstimuliContainer, this.config.stimuli[2])
        this.appendAllStimuli(this.allDstimuliContainer, this.config.stimuli[3])
        this.textContainer = jQuery("<div/>", {id: "textContainer", css: DEFAULT_TEXT_CSS})
        this.stimuliGrid = jQuery('<div/>', {
            id: 'stimuliGrid',
            css: {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '10px',
                width: '430px',
                marginTop: 'auto',
                marginBottom: 'auto',
                justifyContent: 'center'
            }
        })
        this.stimuli = [
            jQuery('<img/>', {id: 'stimuli1', css: STIMULI_CSS}),
            jQuery('<img/>', {id: 'stimuli2', css: STIMULI_CSS}),
            jQuery('<img/>', {id: 'stimuli3', css: STIMULI_CSS}),
            jQuery('<img/>', {id: 'stimuli4', css: STIMULI_CSS})
        ]
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
        this.stopImage = jQuery('<img/>', {
            id: 'stopImage', 
            css: {
                width: '300px',
                height: '300px',
                margin: 'auto',
                marginBottom: '20px'
            },
            src: 'https://jslawjslaw.github.io/js-crlab/static/stop.png' 
        })
        this.inputDeviceContainer = jQuery("<div/>", {
            id: "inputDeviceContainer", 
            css: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                minWidth: "100%",
                marginTop: "auto",
            }
        })
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
                this.reminderRow.append(
                    this.redArrow, 
                    this.reminderContainer.append(...this.reminders)
                ),               
                this.stimuliToSelectContainer.append(...this.stimuliToSelect),
                this.allStimuliContainer.append(
                    this.allAstimuliContainer,
                    this.allBstimuliContainer,
                    this.allCstimuliContainer,
                    this.allDstimuliContainer
                ),
                this.stimuliGrid.append(...this.stimuli),
                this.stopImage,
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
                this.textContainer,
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

    setStimuliImages(images) {
        this.renderer.stimuli.map((stimulus, index) => stimulus.attr({src: images[index]}))
    }

    updateReminders() {
        this.renderer.reminders.map((reminder) => reminder.hide())
        this.game.currentRound.getStimuliSchedule().map((stimulus, index) => {
            const reminder = this.renderer.reminders[index]
            reminder.show()
            reminder.attr({src: `${BASE_URL}/${stimulus}1.jpg`})
            if (this.game.currentRound.getSearchStimuli() === stimulus) {
                reminder.css({border: '1px solid #FF0000'})
            } else {
                reminder.css({border: '1px solid #000000'})
            }
        })
    }
}


class InputDeviceInstructionScreen extends Screen {
    nextScreen = InstructionScreenOne
    
    render() {
        this.renderer.redArrow.hide()
        this.renderer.inputDeviceContainer.show()
        this.renderer.inputDeviceLabelContainer.show()
        this.renderer.stimuliToSelectContainer.hide()
        this.renderer.reminderRow.hide()
        this.renderer.allStimuliContainer.hide()
        this.renderer.stimuliGrid.hide()
        this.renderer.stopImage.hide()
        this.renderer.textContainer.text(this.getInstructions()).css({marginBottom: 'auto'})
        this.renderer.textContainer.show()
        this.renderer.instructionButtonContainer.hide()
    }

    getInstructions() {
        return 'Please choose your input device to start.'
    }
}


class InstructionScreenOne extends Screen {
    previousScreen = InputDeviceInstructionScreen
    nextScreen = InstructionScreenTwo
    render() {
        this.renderer.redArrow.hide()
        this.renderer.inputDeviceContainer.hide()
        this.renderer.inputDeviceLabelContainer.hide()
        this.renderer.stimuliToSelectContainer.hide()
        this.renderer.reminderRow.hide()
        this.renderer.allStimuliContainer.hide()
        this.renderer.stimuliGrid.show()
        this.setStimuliImages(this.config.stimuli.map((stimuli) => `${BASE_URL}/${stimuli}1.jpg`))
        this.renderer.stopImage.hide()
        this.renderer.textContainer.text(this.getInstructions()).css(DEFAULT_TEXT_CSS)
        this.renderer.textContainer.show()
        this.renderer.instructionButtonContainer.show()
    }

    getInstructions() {
        return `Every screen will show pictures of a ${this.config.stimuli[0]}, a ${this.config.stimuli[1]}, a ${this.config.stimuli[2]}, and ${this.config.stimuli[3]}, but the exact pictures will change.`
    }
}


class InstructionScreenTwo extends Screen {
    previousScreen = InstructionScreenOne
    nextScreen = InstructionScreenThree

    render() {
        this.renderer.redArrow.hide()
        this.renderer.inputDeviceContainer.hide()
        this.renderer.inputDeviceLabelContainer.hide()
        this.renderer.stimuliToSelectContainer.hide()
        this.renderer.reminderRow.hide()
        this.renderer.allStimuliContainer.show()
        this.renderer.stimuliGrid.hide()
        this.renderer.stopImage.hide()
        this.renderer.textContainer.text(this.getInstructions())
        this.renderer.textContainer.show()
        this.renderer.instructionButtonContainer.show()
    }

    getInstructions() {
        return `Here are all the pictures you may see. Notice that some of them may look similar to each other.`
    }
}

class InstructionScreenThree extends Screen {
    previousScreen = InstructionScreenTwo
    nextScreen = InstructionScreenFour

    render() {
        this.renderer.redArrow.show()
        this.renderer.inputDeviceContainer.hide()
        this.renderer.inputDeviceLabelContainer.hide()
        this.renderer.stimuliToSelectContainer.hide()
        this.renderer.reminderRow.show()
        this.updateReminders()
        this.renderer.allStimuliContainer.hide()
        this.renderer.stimuliGrid.show()
        this.renderer.stopImage.hide()
        this.renderer.textContainer.text(this.getInstructions())
        this.renderer.textContainer.show()
        this.renderer.instructionButtonContainer.show()
    }

    getInstructions() {
        return `You will be asked to touch one picture as fast as you can. When you touch the picture, the location will change. If you forget what picture to touch, look for the reminder.`
    }
}

class InstructionScreenFour extends Screen {
    previousScreen = InstructionScreenThree
    nextScreen = TrialScreen

    render() {
        this.renderer.inputDeviceContainer.hide()
        this.renderer.inputDeviceLabelContainer.hide()
        this.renderer.stimuliToSelectContainer.show()
        this.updateSearchStimuli()
        this.renderer.reminderRow.hide()
        this.renderer.allStimuliContainer.hide()
        this.renderer.stimuliGrid.hide()
        this.renderer.stopImage.hide()
        this.renderer.textContainer.text(this.getInstructions()).css(DEFAULT_TEXT_CSS)
        this.renderer.textContainer.show()
        this.renderer.previousButton.hide()
        this.renderer.instructionButtonContainer.show()
    }

    updateSearchStimuli() {
        this.renderer.stimuliToSelect.map((stimulusToSelect) => stimulusToSelect.hide())
        this.game.currentRound.getStimuliSchedule().map((stimulus, index) => {
            this.renderer.stimuliToSelect[2 * index].show()
            this.renderer.stimuliToSelect[2 * index].attr({src: `${BASE_URL}/${stimulus}1.jpg`})
            this.renderer.stimuliToSelect[2 * index + 1].show()
            this.renderer.stimuliToSelect[2 * index + 1].text(stimulus)
        })
    }

    getInstructions() {
        if (this.game.currentRound.roundSchedule.length === 1) {
            return `Please touch the ${this.game.currentRound.getSearchStimuli()} every time. Let's practice a few.`
        } else {
            const stimuli = this.game.currentRound.getStimuliSchedule()
            return `Please alternate between the ${stimuli[0]} and the ${stimuli[1]}. Let's practice a few.`
        }
    }
}


class StopScreen extends Screen {
    nextScreen = ReadyScreen

    render() {
        this.renderer.inputDeviceContainer.hide()
        this.renderer.inputDeviceLabelContainer.hide()
        this.renderer.stimuliToSelectContainer.hide()
        this.renderer.reminderRow.hide()
        this.renderer.allStimuliContainer.hide()
        this.renderer.stimuliGrid.hide()
        this.renderer.stopImage.show()
        this.renderer.textContainer.text(this.getInstructions()).css({marginBottom: 'auto'})
        this.renderer.textContainer.show()
        this.renderer.instructionButtonContainer.hide()
        const startTime = Date.now()
        this.renderer.updateClickHandlers({Wrapper: () => this.game.stopClickHandler(startTime)})
    }

    getInstructions() {
        return 'Click anywhere when you are ready to begin the real thing. Go as fast as you can.'
    }
}



class ReadyScreen extends Screen {
    nextScreen = TrialScreen

    render() {
        this.renderer.inputDeviceContainer.hide()
        this.renderer.inputDeviceLabelContainer.hide()
        this.renderer.stimuliToSelectContainer.hide()
        this.renderer.reminderRow.hide()
        this.renderer.allStimuliContainer.hide()
        this.renderer.stimuliGrid.hide()
        this.renderer.textContainer.css({
            fontSize: '10vh',
            color: '#0000FF'
        })
        this.renderer.stopImage.hide()
        this.renderer.textContainer.css({marginTop: 'auto'})
        this.renderer.textContainer.text('Ready')
        this.renderer.textContainer.show()
        this.renderer.instructionButtonContainer.hide()
        
        setTimeout(() => {
            this.renderer.textContainer.text('Set')
            setTimeout(() => {
                this.renderer.textContainer.text('Go!')
                setTimeout(() => {
                    this.game.currentRound.experimentStartTime = Date.now()
                    this.game.currentRound.newTrial()
                    this.game.nextScreen(this.nextScreen)
                    setTimeout(() => {
                        if (this.game.isDone()) {
                            this.game.submit()
                            this.game.nextScreen(FinalScreen)
                        } else {
                            this.game.newRound()
                            this.game.nextScreen(InstructionScreenFour)
                        }
                    }, ROUND_DURATION)
                }, READY_TIMEOUT)
            }, READY_TIMEOUT)
        }, READY_TIMEOUT)
    }
}


class TrialScreen extends Screen {
    nextScreen = TrialScreen

    constructor(renderer, config, game) {
        super(renderer, config, game)
    }

    render() {
        this.renderer.updateClickHandlers({
            stimuli1: () => this.game.stimuliButtonClickHandler(this.game.currentRound.currentTrial.stimuli[0]),
            stimuli2: () => this.game.stimuliButtonClickHandler(this.game.currentRound.currentTrial.stimuli[1]),
            stimuli3: () => this.game.stimuliButtonClickHandler(this.game.currentRound.currentTrial.stimuli[2]),
            stimuli4: () => this.game.stimuliButtonClickHandler(this.game.currentRound.currentTrial.stimuli[3])
        })

        this.renderer.stimuliToSelectContainer.hide()
        this.renderer.reminderRow.show()
        this.renderer.redArrow.hide()
        this.updateReminders()
        this.renderer.allStimuliContainer.hide()
        this.renderer.stimuliGrid.css({marginTop: ''})
        this.renderer.stimuliGrid.show()
        this.setStimuliImages(this.game.currentRound.currentTrial.getImages())
        this.renderer.stopImage.hide()
        this.renderer.textContainer.hide()
        this.renderer.instructionButtonContainer.hide()

        this.game.currentRound.currentTrial.startTime = Date.now()
    }
}


class FinalScreen extends Screen {
    render() {
        this.renderer.stimuliToSelectContainer.hide()
        this.renderer.reminderRow.hide()
        this.renderer.allStimuliContainer.hide()
        this.renderer.stimuliGrid.hide()
        this.renderer.stopImage.hide()
        this.renderer.textContainer.show()
        this.renderer.textContainer.text(`You've completed this exercise!`)
        this.renderer.instructionButtonContainer.hide()
    }
}


class Round {
    constructor(orderedStimuli, roundSchedule) {
        this.orderedStimuli = orderedStimuli
        this.roundSchedule = roundSchedule
        this.scheduleIndex = 0
        this.experimentStartTime = null
        this.trials = []
        this.newTrial()
    }

    incrementScheduleIndex() {
        this.scheduleIndex++
        if (this.scheduleIndex === this.roundSchedule.length) {
            this.scheduleIndex = 0
        }
    }
 
    getSearchStimuli() {
        return this.orderedStimuli[this.roundSchedule[this.scheduleIndex]]
    }

    getStimuliSchedule() {
        return this.roundSchedule.map((index) => this.orderedStimuli[index])
    }

    getRandomImageNumbers() {
        let imageNumbers = []
        for (let i = 0; i < 4; i++) {
            imageNumbers.push(Math.floor(Math.random() * 10) + 1)
        }
        return imageNumbers
    }

    shuffle() {
        let array = this.orderedStimuli.map((x) => x)
        let currentIndex = array.length
      
        while (currentIndex != 0) {
          let randomIndex = Math.floor(Math.random() * currentIndex)
          currentIndex--
          [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
        }

        return array
    }

    newTrial() {
        const trialType = this.trials.length < MAX_PRACTICE_TRIALS ? TrialType.Practice: TrialType.Experiment
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
        
        this.trials.push(new Trial(
            trialType, 
            shuffled,
            imageNumbers,
            searchStimuli,
        ))
    }

    get currentTrial() {
        return this.trials[this.trials.length - 1]
    }

    shouldBeginExperiment() {
        return this.trials.length === MAX_PRACTICE_TRIALS
    }
}


class Trial {
    constructor(trialType, stimuli, imageNumbers, searchStimuli) {
        this.trialType = trialType
        this.startTime = null
        this.stimuli = stimuli
        this.imageNumbers = imageNumbers
        this.searchStimuli = searchStimuli
        this.selections = []
        this.selectionTimes = []
    }

    getSearchStimuliIndex() {
        return this.stimuli.indexOf(this.searchStimuli)
    }

    getSearchStimuliImageNumber() {
        return this.imageNumbers[this.getSearchStimuliIndex()]
    }

    getImages() {
        return this.stimuli.map((stimulus, index) => `${BASE_URL}/${stimulus}${this.imageNumbers[index]}.jpg`)
    }
}


class Game {
    constructor(config, engine) {
        this.renderer = new Renderer(config)
        this.engine = engine
        this.config = config
        
        this.rounds = []
        this.newRound()

        this.nextScreen = this.nextScreen.bind(this)
        this.inputDeviceClickHandler = this.inputDeviceClickHandler.bind(this)
        this.instructionButtonClickHandler = this.instructionButtonClickHandler.bind(this)
        this.stimuliButtonClickHandler = this.stimuliButtonClickHandler.bind(this)
        this.stopClickHandler = this.stopClickHandler.bind(this)

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

    stopClickHandler(startTime) {
        if (Date.now() - startTime > 500) {
            jQuery('#Wrapper').off('click')
            this.nextScreen(this.currentScreen.nextScreen)
        }
    }

    inputDeviceClickHandler(inputDevice) {
        this.inputDevice = inputDevice
        this.nextScreen(this.currentScreen.nextScreen)
    }

    nextScreen(screenClass) {
        this.currentScreen = new screenClass(this.renderer, this.config, this)
        this.currentScreen.render()
    }

    instructionButtonClickHandler(functionName) {
        let ScreenClass = this.currentScreen.nextScreen
        if (functionName === 'previous') {
            ScreenClass = this.currentScreen.previousScreen
        }
        this.nextScreen(ScreenClass)
    }

    stimuliButtonClickHandler(stimuli) {
        this.currentRound.currentTrial.selections.push(stimuli)
        this.currentRound.currentTrial.selectionTimes.push(Date.now())
        if (this.currentRound.currentTrial.searchStimuli === stimuli) {
            let nextScreen = StopScreen
            if (!this.currentRound.shouldBeginExperiment()) {
                nextScreen = TrialScreen
                this.currentRound.incrementScheduleIndex()
                this.currentRound.newTrial()
            }
            this.nextScreen(nextScreen)
        }
    }

    get currentRound() {
        return this.rounds[this.rounds.length - 1]
    }

    newRound() {
        this.rounds.push(
            new Round(this.config.stimuli, this.config.roundSchedule[this.rounds.length])
        )
    }

    isDone() {
        return this.rounds.length === this.config.roundSchedule.length
    }

    submit() {
        const searchStimuli = []
        const imageNumbers = []
        const stimuliOrdering = []
        const selections = []
        const selectionTimes = []
        const trialTypes = []
        const timedOut = []
        this.rounds.map((round) => {
            round.trials.map((trial) => {
                searchStimuli.push(trial.searchStimuli)
                imageNumbers.push(trial.imageNumbers.join(';'))
                stimuliOrdering.push(trial.stimuli.join(';'))
                selections.push(trial.selections.join(';'))
                selectionTimes.push(trial.selectionTimes.map((selectionTime) => selectionTime - trial.startTime).join(';'))
                trialTypes.push(trial.trialType.name)
                timedOut.push(!trial.selections.includes(trial.searchStimuli))
            })
        })
        if (IS_QUALTRICS) {
            setTimeout(() => this.engine.clickNextButton(), 500)
        }
    }
}