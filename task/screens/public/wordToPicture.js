import Screen from "../base"
import { INSTRUCTION_BUTTON_CONTAINER } from "../../../shared/components/instructionButtons"
import { TEXT_CONTAINER } from "../../../shared/components/textContainer"
import {
    FOUR_IMAGE_CONTAINER,
    topleftImage, toprightImage, botleftImage, botrightImage,
    TEXT_CRESP_CONTAINER
} from "../../../shared/components/imageContainer"


// ─── Instruction: Auditory ────────────────────────────────────────────────────

class PublicInstructionAuditoryWordToPictureMatching extends Screen {
    get components() {
        topleftImage.attr('src', 'https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/swim.jpeg')
        toprightImage.attr('src', 'https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/run.jpeg')
        botleftImage.attr('src', 'https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/dance.jpeg')
        botrightImage.attr('src', 'https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/climb.jpeg')
        return new Map([
            [FOUR_IMAGE_CONTAINER, {addClass: 'four-image-container-instruction'}],
            [TEXT_CONTAINER, {
                text: 'You will see four pictures.\nYou will hear a word.\nTap the picture that matches the word.',
                addClass: 'base-text medium-text'
            }],
            [INSTRUCTION_BUTTON_CONTAINER, {}]
        ])
    }

    get clickHandlers() {
        return {
            nextButton: () => this.orchestrator.next(),
            previousButton: () => this.orchestrator.previous()
        }
    }
}


// ─── Instruction: Written ─────────────────────────────────────────────────────

class PublicInstructionWrittenWordToPictureMatching extends Screen {
    get components() {
        topleftImage.attr('src', 'https://crlabgeorgetown.github.io/behavioral/static/writtenWordtoPictureMatching/swim.jpeg')
        toprightImage.attr('src', 'https://crlabgeorgetown.github.io/behavioral/static/writtenWordtoPictureMatching/run.jpeg')
        botleftImage.attr('src', 'https://crlabgeorgetown.github.io/behavioral/static/writtenWordtoPictureMatching/dance.jpeg')
        botrightImage.attr('src', 'https://crlabgeorgetown.github.io/behavioral/static/writtenWordtoPictureMatching/climb.jpeg')
        return new Map([
            [FOUR_IMAGE_CONTAINER, {addClass: 'four-image-container-instruction'}],
            [TEXT_CRESP_CONTAINER, {text: 'climb', addClass: 'base-text large-text large-fixed-height overlay-container-instruction'}],
            [TEXT_CONTAINER, {
                text: 'You will see four pictures.\nYou will also see a word.\nTap the picture that matches the word.',
                addClass: 'base-text medium-text'
            }],
            [INSTRUCTION_BUTTON_CONTAINER, {}]
        ])
    }

    get clickHandlers() {
        return {
            nextButton: () => this.orchestrator.next(),
            previousButton: () => this.orchestrator.previous()
        }
    }
}


// ─── Public completion screen ─────────────────────────────────────────────────

class PublicComplete extends Screen {
    get components() {
        const summary = this.orchestrator.client.getSummary()
        const lines = [
            `Task: ${summary.task}`,
            `Participant ID: ${summary.participantId}`,
            `Age: ${summary.age}`,
            `Education: ${summary.education}`,
            `Input Device: ${summary.inputDevice}`,
            `Completed At: ${summary.completedAt}`,
            `Trials Completed: ${summary.trialsCompleted}`,
            `Accuracy: ${summary.accuracyPct === 'N/A' ? 'N/A' : `${summary.accuracyPct}%`}`,
            `Average RT (ms): ${summary.averageRT}`
        ]

        const summaryEl = jQuery('<div/>', {id: 'publicSummary', class: 'base-text medium-text'})
        summaryEl.html(lines.join('<br>'))

        const exportBtn = jQuery('<div/>', {
            id: 'exportPdfButton',
            class: 'grey-button medium-button-text',
            text: 'Export PDF',
            ontouchstart: ''
        })

        return new Map([
            [TEXT_CONTAINER, {addClass: 'base-text large-text', text: `You've completed this exercise!`}],
            [summaryEl, {}],
            [exportBtn, {}]
        ])
    }

    get clickHandlers() {
        return {
            exportPdfButton: () => this.orchestrator.client.exportPdf()
        }
    }

    get timeouts() {
        // No auto-advance on public path — participant exports then closes
        return new Map()
    }
}


export {
    PublicInstructionAuditoryWordToPictureMatching,
    PublicInstructionWrittenWordToPictureMatching,
    PublicComplete
}
