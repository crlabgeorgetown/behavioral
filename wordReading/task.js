import { CONTAINER } from "../shared/components/container"
import Orchestrator from "./orchestrator"
import QualtricsClient from "./qualtricsClient"
import { variantFromString } from "./variants"


class Task {
	constructor(data, engine, variant) {
        jQuery("#Questions").remove()
        jQuery("#PushStickyFooter").remove()
        jQuery("#Plug").hide()
        jQuery(".SkinInner").hide()
        jQuery("#Wrapper").append(CONTAINER)
        
        this.orchestrator = new Orchestrator(
            variantFromString(variant),
            new QualtricsClient(engine)
        )
        this.orchestrator.initialize(data)
        this.orchestrator.render()
	}
}


export { Task }