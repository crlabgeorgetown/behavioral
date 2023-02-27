const SEMANTIC = "semantic"
const PHONOLOGICAL = "phonological"
const STANDARD = "standard"


class GameType {
    static SemanticReadMap = new GameType(SEMANTIC)
    static PhonologicalReadMap = new GameType(PHONOLOGICAL)
    static StandardReadMap = new GameType(STANDARD)
  
    constructor(name) {
      this.name = name
    }
}


class Renderer {
    constructor() {
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
            src: './toshare/stimuli_for_adaptation/can1.jpg',
            css: {
                'width': '200px',
                'height': '200px',
                'margin-left': 'auto',
                'margin-right': '1vh',
            }
        })
        this.stimuli2 = jQuery('<img/>', {
            id: 'stimuli1',
            src: './toshare/stimuli_for_adaptation/can1.jpg',
            css: {
                'width': '200px',
                'height': '200px',
                'margin-left': '1vh',
                'margin-right': 'auto',
            }
        })
        this.stimuli3 = jQuery('<img/>', {
            id: 'stimuli1',
            src: './toshare/stimuli_for_adaptation/can1.jpg',
            css: {
                'width': '200px',
                'height': '200px',
                'margin-left': 'auto',
                'margin-right': '1vh',
            }
        })
        this.stimuli4 = jQuery('<img/>', {
            id: 'stimuli1',
            src: './toshare/stimuli_for_adaptation/can1.jpg',
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

        this.initialize()
    }

    initialize() {
        jQuery("#Questions").remove()
        jQuery("#PushStickyFooter").remove()
        jQuery("#Plug").hide()
        jQuery(".SkinInner").hide()

        jQuery("#Wrapper").append(
            this.container.append(
                this.stimuliRow1Container.append(
                    this.stimuli1,
                    this.stimuli2,
                ),
                this.stimuliRow2Container.append(
                    this.stimuli3,
                    this.stimuli4,
                ),
                this.textContainer,
                this.instructionButtonContainer.append(
                    this.previousButton,
                    this.nextButton,
                )
            )
        )
    }
}


class InstructionScreenOne {
    constructor(renderer) {
        this.renderer = renderer
    }

    render() {
        this.renderer.stimuliRow1Container.show()
        this.renderer.stimuliRow2Container.show()
        this.textContainer.text(this.getInstructions())
        this.textContainer.show()
        this.instructionButtonContainer.show()
    }

    getInstructions() {
        return `Every screen will show pictures of a ${A}, a ${B}, a ${C}, and ${D}, but the exact pictures will change.`
    }
}
class InstructionScreenTwo {
    constructor(renderer) {
        this.renderer = renderer
    }

    render() {
        this.renderer.stimuliRow1Container.show()
        this.renderer.stimuliRow2Container.show()
        this.textContainer.text(this.getInstructions())
        this.textContainer.show()
        this.instructionButtonContainer.show()
    }

    getInstructions() {
        return `Here are all the pictures you may see. Notice that some of them may look similar to each other.`
    }
}

class InstructionScreenThree {
    constructor(renderer) {
        this.renderer = renderer
    }

    getInstructions() {
        return `You will be asked to touch one picture as fast as you can. When you touch the picture, the location will change. If you forget what picture to touch, look for the reminder.`
    }
}


class TrialScreen {}


class Game {
    constructor() {
        this.renderer = new Renderer()
    }
}