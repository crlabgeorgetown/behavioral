import Screen from "../base";
import { TEXT_CONTAINER } from "../../../shared/components/textContainer";
import { INSTRUCTION_BUTTON_CONTAINER } from "../../../shared/components/instructionButtons";
import { IMAGE_CONTAINER } from "../../../shared/components/imageContainer";

class ArizonaSemanticTestTrialScreen extends Screen {

}

class InstructionArizonaSemanticTest extends Screen {
    get components() {
        IMAGE_CONTAINER.attr('src', 'https://crlabgeorgetown.github.io/behavioral/static/arizonaSemanticTest/PictureASTInstructions.png')
        return new Map([
            [IMAGE_CONTAINER, {}],
            [TEXT_CONTAINER, {text: 'Show me which of these pictures goes with this one.', addClass: 'base-text large-text'}],
            [INSTRUCTION_BUTTON_CONTAINER, {}]
        ])
    }

    get clickHandlers() {
        return {
            nextButton: (event) => this.orchestrator.next(),
            previousButton: (event) => this.orchestrator.previous()
        }
    }
}

export { ArizonaSemanticTestTrialScreen, InstructionArizonaSemanticTest }