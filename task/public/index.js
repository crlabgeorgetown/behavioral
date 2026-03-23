import { CONTAINER } from "../../shared/components/container"
import LocalClient from "./localClient"
import CombinedWordToPictureClient from "./combinedClient"
import Orchestrator from "../orchestrator"
import { PUBLIC_TASK_REGISTRY } from "./variants/index"
import { initPublicTaskHub } from "./hub"
import { PublicCombinedComplete, PublicContinueToNextTaskComplete } from "./screens/wordToPicture"


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
    }
}


function buildDataUrl(key) {
    return `https://crlabgeorgetown.github.io/behavioral/static/data/${key}.csv`
}

function loadData(key) {
    return d3.csv(buildDataUrl(key))
}

function runSingleTask({ key, VariantClass, metadata, options = {} }) {
    return loadData(key).then((data) => {
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
