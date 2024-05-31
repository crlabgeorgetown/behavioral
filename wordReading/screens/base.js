import { CONTAINER } from "../../shared/components/container"


export default class Screen {
    constructor(orchestrator) {
        this.orchestrator = orchestrator
    }

    get clickHandlers() { return {} }

    audioContainerClickHandler(audio) {
        audio.addEventListener('ended', () => this.containerClickHander())
        audio.play()
    }

    containerClickHander() {
        CONTAINER.off('click')
        this.orchestrator.next()
    }

    setClasses() {
        for (const [component, settings] of this.components.entries()) {
            for (const [setting, value] of Object.entries(settings)) {
                if (setting === 'addClass') component.removeClass()
                component[setting](value)
            }
        }
    }

    setClickHandlers() {
        for (const [id, callback] of Object.entries(this.clickHandlers)) {
            const element = jQuery(`#${id}`)
            element.off('click')
            element.on('click', callback)
        }
    }

}