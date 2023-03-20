import Screen from "./base"
import { PARTICIPANT_ID_CONTAINER } from "../components/participantID"


class ParticipantIdScreen extends Screen {
    components = new Map([
        [PARTICIPANT_ID_CONTAINER, {}],
    ])

    get clickHandlers() {
        return {submitButton: () => this.handleInput()}
    }

    handleInput() {
        this.task.participantID = jQuery('#participantIdInput')[0].value
        this.task.currentScreen = this.nextScreen
        this.task.currentScreen.render()
    }
}

export { ParticipantIdScreen }