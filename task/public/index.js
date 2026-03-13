import { CONTAINER } from "../../shared/components/container"
import LocalClient from "./localClient"
import Orchestrator from "../orchestrator"
import { PUBLIC_TASK_REGISTRY } from "./variants/index"
import { initPublicWordToPictureHub } from "./hub"


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


class Task {
    constructor(data, VariantClass, metadata = {}) {
        jQuery("#Wrapper").append(CONTAINER)

        const variant = new VariantClass(metadata)
        const client = new LocalClient(variant)

        this.orchestrator = new PublicOrchestrator(variant, client)
        this.orchestrator.initialize(data)
        this.orchestrator.render()
    }
}

if (typeof window !== 'undefined') {
    initPublicWordToPictureHub({
        publicTaskRegistry: PUBLIC_TASK_REGISTRY,
        startTask: (data, VariantClass, metadata) => new Task(data, VariantClass, metadata)
    })
}

export { Task, PUBLIC_TASK_REGISTRY, initPublicWordToPictureHub }
