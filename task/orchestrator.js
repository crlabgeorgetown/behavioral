import { CONTAINER } from "../shared/components/container"
import { Begin, Break, Complete, Incorrect, TimeOut } from "./screens/transition"
import SequenceNode from "./sequenceNode"
import { preloadImageSource } from "../shared/components/imageContainer"
import { preloadAudioSource } from "../shared/components/audioContainer"


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
        this.incorrectScreen = new Incorrect(this)
        this.timeoutScreen = new TimeOut(this)
        this.trialScreen = new variant.trialScreenClass(this)
        this.interStimulusDuration = this.variant.hasOwnProperty('interStimulusDuration')
            ? this.variant.interStimulusDuration
            : 100
        this.prebufferNodeResources = this.variant.hasOwnProperty('prebufferNodeResources')
            ? this.variant.prebufferNodeResources
            : 0
        this.advanceTimeoutID = null
        this.resourceManifest = []
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
            
            // Check for break row format (Procedure === 'showasbreak')
            if (row.Procedure === 'showasbreak') {
                current = new SequenceNode(this.breakScreen)
                previous.next = current
                current.previous = previous
            } else {
                // Create trial node
                current = new SequenceNode(this.trialScreen)
                current.initializeTrial(this.variant.trialClass, row)
                previous.next = current
                current.previous = previous
                
                // Check if this trial has takebreakafter flag
                // Insert break screen after this trial if takebreakafter is truthy/non-zero
                if (row.takebreakafter && 
                    row.takebreakafter !== '0' && 
                    row.takebreakafter !== 0) {
                    const breakNode = new SequenceNode(this.breakScreen)
                    // Link break node after the trial
                    breakNode.previous = current
                    current.next = breakNode
                    // Update current to break node so next iteration links correctly
                    current = breakNode
                }
            }

            previous = current
            previousRow = row
        })

        current.next = new SequenceNode(this.completeScreen)
        this.resourceManifest = this.buildResourceManifest()
    }

    buildResourceManifest() {
        const manifest = []
        let node = this.root
        let index = 0

        while (node) {
            const resources = this.getNodeResources(node)
            if (resources.length > 0) {
                manifest.push({ index, node, resources })
            }

            node = node.next
            index += 1
        }

        return manifest
    }

    getNodeResources(node) {
        if (!node || !node.screen || typeof node.screen.resourceManifest !== 'function') {
            return []
        }

        const resources = node.screen.resourceManifest()
        return Array.isArray(resources) ? resources : []
    }

    preloadResources(resources) {
        resources.forEach((resource) => {
            if (!resource || !resource.source) return

            if (resource.type === 'audio') {
                preloadAudioSource(resource.source)
            } else if (resource.type === 'image') {
                preloadImageSource(resource.source)
            }
        })
    }

    prebufferUpcomingResources() {
        if (!this.prebufferNodeResources) return

        const currentIndex = this.getCurrentNodeIndex()
        for (let offset = 1; offset <= this.prebufferNodeResources; offset += 1) {
            const entry = this.resourceManifest.find((item) => item.index === currentIndex + offset)
            if (entry) {
                this.preloadResources(entry.resources)
            }
        }
    }

    getCurrentNodeIndex() {
        let node = this.root
        let index = 0

        while (node && node !== this.currentScreen) {
            node = node.next
            index += 1
        }

        return index
    }

    collectMetadata(key, value) {
        this.client.collectMetadata(key, value)
    }

    complete() {
        this.client.submit(this.root)
        this.render()
    }

    timedOut() {
        if (this.currentTrial.TrialType === 'Practice') {
            this.replay(true)
        } else {
            const transitionScreen = new SequenceNode(this.timeoutScreen)
            transitionScreen.next = this.currentScreen.next
            this.currentScreen.next = transitionScreen
            this.next()
        }
    }

    replay(timedOut = false) {
        const replayTrial = new SequenceNode(this.trialScreen)
        replayTrial.initializeTrial(this.variant.trialClass, this.currentTrial)

        const transitionScreen = timedOut ? new SequenceNode(this.timeoutScreen) : new SequenceNode(this.incorrectScreen)
        
        transitionScreen.next = replayTrial
        replayTrial.next = this.currentScreen.next
        this.currentScreen.next = transitionScreen

        this.next()
    }

    next() {
        clearTimeout(this.advanceTimeoutID)
        this.prebufferUpcomingResources()
        this.showTransitionBackground()
        this.advanceTimeoutID = setTimeout(() => {
            this.currentScreen = this.currentScreen.next
            this.render()
            if (this.currentScreen.trial !== null) this.currentScreen.screen.startTrial()
        }, this.interStimulusDuration)
    }

    showTransitionBackground() {
        CONTAINER.children().detach()
        CONTAINER.addClass('response-pending')
    }

    previous() {
        this.currentScreen = this.currentScreen.previous
        this.render()
    }

    render() {
        CONTAINER.removeClass('response-pending')
        CONTAINER.children().detach()
        for (const [component, ] of this.currentScreen.screen.components.entries()) {
            CONTAINER.append(component)
        }
        this.currentScreen.screen.setEventListeners()
        this.currentScreen.screen.setClasses()
        this.currentScreen.screen.setClickHandlers()
        this.currentScreen.screen.setTimeouts()
    }
}