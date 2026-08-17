import { CONTAINER } from "../../shared/components/container"
import LocalClient from "./localClient"
import CombinedWordToPictureClient from "./combinedClient"
import Orchestrator from "../orchestrator"
import { PUBLIC_TASK_REGISTRY } from "./variants/index"
import { initPublicTaskHub } from "./hub"
import { PublicCombinedComplete, PublicContinueToNextTaskComplete } from "./screens/wordToPicture"
import { preloadImageSource } from "../../shared/components/imageContainer"
import { preloadAudioSource } from "../../shared/components/audioContainer"
import { preloadVideoSource } from "../../shared/components/videoContainer"

import { Analytics } from './internal/plausibleAnalytics'


// Thin subclass: replaces the shared Complete screen with the variant's
// completeScreenClass, and seeds metadata from the variant's initialMetadata.
class PublicOrchestrator extends Orchestrator {
    constructor(variant, client) {
        super(variant, client)

        // Override the complete screen created by the parent
        if (variant.completeScreenClass) {
            this.completeScreen = new variant.completeScreenClass(this)
        }

        // Seed metadata supplied by the launcher
        if (variant.initialMetadata) {
            Object.entries(variant.initialMetadata).forEach(([key, value]) => {
                this.client.collectMetadata(key, value)
            })
        }
    }
}


class PublicTask {
    constructor({ data, VariantClass, metadata = {}, options = {} }) {
        jQuery("#Wrapper").append(CONTAINER)

        const variant = new VariantClass(metadata)
        if (options.completeScreenClass) {
            variant.completeScreenClass = options.completeScreenClass
        }

        const client = new LocalClient(variant)

        this.orchestrator = new PublicOrchestrator(variant, client)
        if (typeof options.onRunComplete === 'function') {
            this.orchestrator.onPublicRunComplete = options.onRunComplete
        }
        if (options.combinedClient) {
            this.orchestrator.publicCombinedClient = options.combinedClient
        }

        this.client = client
        this.variant = variant
        this.orchestrator.initialize(data)
        this.orchestrator.render()
        Analytics.testStarted({ testName: metadata.Task, version: variant.version })
    }
}


function buildDataUrl(key) {
    return `https://crlabgeorgetown.github.io/behavioral/static/data/${key}.csv`
}

function loadData(key) {
    return d3.csv(buildDataUrl(key))
}

// Fixed instruction screens (video, icons) don't depend on trial CSV data,
// so their resources can be warmed the moment we know a variant is coming up,
// well before its own Orchestrator gets a chance to preload them itself.
function preloadFixedScreenResources(VariantClass, metadata) {
    const variant = new VariantClass(metadata)

    variant.screens.forEach((ScreenClass) => {
        const screen = new ScreenClass({})
        if (typeof screen.resourceManifest !== 'function') return

        const resources = screen.resourceManifest()
        if (!Array.isArray(resources)) return

        resources.forEach((resource) => {
            if (!resource || !resource.source) return

            if (resource.type === 'audio') preloadAudioSource(resource.source)
            else if (resource.type === 'image') preloadImageSource(resource.source)
            else if (resource.type === 'video') preloadVideoSource(resource.source)
        })
    })
}

function runSingleTask({ key, VariantClass, metadata, options = {}, dataPromise }) {
    return (dataPromise || loadData(key)).then((data) => {
        return new PublicTask({
            data,
            VariantClass,
            metadata,
            options
        })
    })
}

function runSingleEntry({ entry, metadata }) {
    return runSingleTask({
        key: entry.key,
        VariantClass: entry.variantClass,
        metadata
    })
}

function buildSequenceStepOptions({ isLastStep, step, combinedClient, runNextStep }) {
    return {
        completeScreenClass: isLastStep ? PublicCombinedComplete : PublicContinueToNextTaskComplete,
        onRunComplete: (orchestrator) => {
            combinedClient.addRun({
                label: step.label,
                modality: step.modality,
                client: orchestrator.client
            })

            runNextStep()
        },
        combinedClient: isLastStep ? combinedClient : undefined
    }
}

function startEntry({ entry, metadata }) {
    if (entry.mode === 'sequence') {
        runWordToPictureSequence({ entry, metadata: { ...metadata, Task: entry.label } })
        return
    }

    runSingleEntry({ entry, metadata })
}

function runWordToPictureSequence({ entry, metadata }) {
    const sequence = Array.isArray(entry.sequence) ? entry.sequence : []
    if (sequence.length === 0) return

    const combinedClient = new CombinedWordToPictureClient(metadata)

    // Give every step's video/icons the full duration of earlier steps to
    // download in the background, instead of only the brief gap between one
    // step ending and the next beginning.
    sequence.forEach((step) => preloadFixedScreenResources(step.variantClass, metadata))
    const dataPromises = sequence.map((step) => loadData(step.key))

    const runStep = (index) => {
        const step = sequence[index]
        if (!step) return

        const isLastStep = index === sequence.length - 1
        runSingleTask({
            key: step.key,
            VariantClass: step.variantClass,
            metadata: {
                ...metadata,
                Task: step.label
            },
            dataPromise: dataPromises[index],
            options: buildSequenceStepOptions({
                isLastStep,
                step,
                combinedClient,
                runNextStep: () => runStep(index + 1)
            })
        })
    }

    runStep(0)
}

if (typeof window !== 'undefined') {
    initPublicTaskHub({
        publicTaskRegistry: PUBLIC_TASK_REGISTRY,
        startTask: ({ entry, metadata }) => startEntry({ entry, metadata })
    })
}

export { PublicTask as Task, PUBLIC_TASK_REGISTRY, initPublicTaskHub }
