import { CONTAINER } from "../shared/components/container"
import { Begin, Break, Complete, TimeOut } from "./screens/transition"
import Trial from "./screens/trial"
import SequenceNode from "./sequenceNode"


export default class Orchestrator {

    constructor(variant, client) {
        this.client = client
        this.variant = variant
        this.root = null
        this.previousScreen = null
        this.currentScreen = null
        this.beginScreen = new Begin(this)
        this.breakScreen = new Break(this)
        this.completeScreen = new Complete(this)
        this.timeoutScreen = new TimeOut(this)
        this.trialScreen = new Trial(this)
    }

    get currentTrial() {
        return this.currentScreen.trial
    }

    initialize(data) {
        let previous = null
        let current = null
        this.variant.screens.forEach((screen, _) => {
            previous = current
            current = new SequenceNode(new screen(this))

            if (this.root === null) {
                this.root = current
                this.currentScreen = this.root
            }

            if (previous) previous.next = current
            current.previous = previous
        })

        let previousRow = null
        data.forEach((row, _) => {
            previous = current
            
            if (previousRow && previousRow.Procedure === 'showlastpractice') {
                current = new SequenceNode(this.beginScreen)

                previous.next = current
                current.previous = previous
                previous = current
            }
            
            if (row.Procedure === 'showasbreak') {
                current = new SequenceNode(this.breakScreen)
            } else {
                current = new SequenceNode(this.trialScreen)
                current.initializeTrial(row)
            }

            previous.next = current
            current.previous = previous
            previousRow = row
        })

        current.next = new SequenceNode(this.completeScreen)
    }

    collectMetadata(key, value) {
        this.client.collectMetadata(key, value)
    }

    complete() {
        this.client.submit(this.root)
        this.render()
    }

    timedOut() {
        this.previousScreen = this.currentScreen
        this.currentScreen = new SequenceNode(this.timeoutScreen)
        this.render()
    }

    reenterSequence() {
        this.currentScreen = this.previousScreen.next
        this.render()
        if (this.currentScreen.trial !== null) this.currentScreen.screen.startTrial()
    }

    next() {
        this.currentScreen = this.currentScreen.next
        this.render()
        if (this.currentScreen.trial !== null) this.currentScreen.screen.startTrial()
    }

    previous() {
        this.currentScreen = this.currentScreen.previous
        this.render()
    }

    render() {
        CONTAINER.children().detach()
        for (const [component, ] of this.currentScreen.screen.components.entries()) {
            CONTAINER.append(component)
        }
        this.currentScreen.screen.setClasses()
        this.currentScreen.screen.setClickHandlers()
        this.currentScreen.screen.setTimeouts()
    }
}