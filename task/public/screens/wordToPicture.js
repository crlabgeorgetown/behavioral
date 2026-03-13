import Screen from "../../screens/base"
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
        if (!this.orchestrator.client.hasSubmitted) {
            this.orchestrator.client.submit(this.orchestrator.root)
        }

        const summary = this.orchestrator.client.getSummary()

        const completionRoot = jQuery('<div/>', {
            id: 'publicCompletionRoot',
            css: {
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                padding: '24px 0',
                boxSizing: 'border-box',
                fontFamily: 'Arial'
            }
        })

        const titleEl = jQuery('<div/>', {
            text: `You've completed this exercise!`,
            css: {
                fontSize: '56px',
                color: '#000000',
                textAlign: 'center',
                lineHeight: '1.15',
                marginBottom: '8px'
            }
        })

        const summaryCard = jQuery('<div/>', {
            id: 'publicSummaryCard',
            css: {
                width: 'min(900px, 92vw)',
                border: '2px solid #a8a8a8',
                background: '#f7f7f7',
                padding: '18px 24px',
                fontFamily: 'Arial',
                boxSizing: 'border-box'
            }
        })

        const rows = [
            ['Task', summary.task],
            ['Participant ID', summary.participantId],
            ['Age', summary.age],
            ['Education', summary.education],
            ['Input Device', summary.inputDevice],
            ['Completed At', summary.completedAt],
            ['Trials Completed', summary.trialsCompleted],
            ['Accuracy', summary.accuracyPct === 'N/A' ? 'N/A' : `${summary.accuracyPct}%`],
            ['Average RT (ms)', summary.averageRT]
        ]

        rows.forEach(([label, value], index) => {
            const row = jQuery('<div/>', {
                css: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '24px',
                    padding: '6px 0',
                    borderBottom: index === rows.length - 1 ? 'none' : '1px solid #d8d8d8',
                    fontSize: '20pt',
                    color: '#111111'
                }
            })

            const labelEl = jQuery('<div/>', {
                text: label,
                css: {
                    color: '#444444'
                }
            })

            const valueEl = jQuery('<div/>', {
                text: String(value),
                css: {
                    fontWeight: '600',
                    textAlign: 'right'
                }
            })

            row.append(labelEl, valueEl)
            summaryCard.append(row)
        })

        const actionRow = jQuery('<div/>', {
            css: {
                display: 'flex',
                justifyContent: 'center',
                gap: '18px',
                width: '100%',
                marginTop: '2px'
            }
        })

        const csvBtn = jQuery('<div/>', {
            id: 'exportCsvButton',
            class: 'grey-button medium-button-text',
            text: 'Download CSV',
            ontouchstart: ''
        })

        const exportBtn = jQuery('<div/>', {
            id: 'exportPdfButton',
            class: 'grey-button medium-button-text',
            text: 'Export PDF',
            ontouchstart: ''
        })

        actionRow.append(csvBtn, exportBtn)
        completionRoot.append(titleEl, summaryCard, actionRow)

        return new Map([
            [completionRoot, {}]
        ])
    }

    get clickHandlers() {
        return {
            exportCsvButton: () => this.orchestrator.client.exportCsv(),
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
