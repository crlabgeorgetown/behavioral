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
        const analysis = this.orchestrator.client.getTaskAnalysis()

        const completionRoot = jQuery('<div/>', {
            id: 'publicCompletionRoot',
            class: 'public-completion-root'
        })

        const titleEl = jQuery('<div/>', {
            text: `You've completed this exercise!`,
            class: 'public-completion-title'
        })

        const summaryCard = jQuery('<div/>', {
            id: 'publicSummaryCard',
            class: 'public-summary-card'
        })

        const rows = [
            ['Task', summary.task],
            ['Participant ID', summary.participantId],
            ['Age', summary.age],
            ['Education', summary.education],
            ['Input Device', summary.inputDevice],
            ['Completed At', summary.completedAt],
            ['Trials Completed', summary.trialsCompleted]
        ]

        rows.forEach(([label, value], index) => {
            const row = jQuery('<div/>', {
                class: 'public-summary-row'
            })
            if (index === rows.length - 1) row.css('borderBottom', 'none')

            const labelEl = jQuery('<div/>', {
                text: label,
                class: 'public-summary-label'
            })

            const valueEl = jQuery('<div/>', {
                text: String(value),
                class: 'public-summary-value'
            })

            row.append(labelEl, valueEl)
            summaryCard.append(row)
        })

        const analysisTitle = jQuery('<div/>', {
            text: analysis.title || 'Task Analysis',
            class: 'public-analysis-title'
        })
        summaryCard.append(analysisTitle)

        if (analysis.description) {
            summaryCard.append(jQuery('<div/>', {
                text: analysis.description,
                class: 'public-analysis-description'
            }))
        }

        ;(analysis.metrics || []).forEach((metric, index) => {
            const metricRow = jQuery('<div/>', {
                class: 'public-metric-row'
            })
            if ((analysis.metrics || []).length - 1 === index) metricRow.css('borderBottom', 'none')

            metricRow.append(
                jQuery('<div/>', { text: metric.label, class: 'public-metric-label' }),
                jQuery('<div/>', { text: String(metric.value), class: 'public-metric-value' })
            )

            summaryCard.append(metricRow)
        })

        if (analysis.interpretation) {
            summaryCard.append(jQuery('<div/>', {
                text: `Interpretation: ${analysis.interpretation}`,
                class: 'public-analysis-interpretation'
            }))
        }

        if (analysis.reference && analysis.reference.label) {
            const refContainer = jQuery('<div/>', {
                class: 'public-analysis-reference'
            })

            if (analysis.reference.url) {
                refContainer.append(
                    jQuery('<a/>', {
                        href: analysis.reference.url,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        text: analysis.reference.label
                    })
                )
            } else {
                refContainer.text(analysis.reference.label)
            }

            summaryCard.append(refContainer)
        }

        const actionRow = jQuery('<div/>', {
            class: 'public-completion-actions'
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
