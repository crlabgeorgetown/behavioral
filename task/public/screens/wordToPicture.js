import Screen from "../../screens/base"
import { INSTRUCTION_BUTTON_CONTAINER } from "../../../shared/components/instructionButtons"
import { VIDEO_CONTAINER, VIDEO_SOURCE } from "../../../shared/components/videoContainer"
import {
    FOUR_IMAGE_CONTAINER,
    setWordToPictureImages,
    setWordToPictureCresp,
    setWordToPictureImagesVisible
} from "../../../shared/components/imageContainer"


const PUBLIC_INSTRUCTION_HEADER = jQuery('<div/>', {
    id: 'publicInstructionHeader',
    class: 'public-instruction-header'
})

const PUBLIC_INSTRUCTION_TEXT = jQuery('<div/>', {
    id: 'publicInstructionText',
    class: 'public-instruction-text'
})

const PUBLIC_WRITTEN_INSTRUCTION_VIDEO_STACK = jQuery('<div/>', {
    id: 'publicWrittenInstructionVideoStack',
    class: 'public-written-instruction-video-stack'
})

const PUBLIC_WRITTEN_INSTRUCTION_REPLAY_BUTTON = jQuery('<div/>', {
    id: 'publicWrittenInstructionReplayButton',
    class: 'grey-button medium-button-text public-written-instruction-replay',
    text: 'Replay',
    ontouchstart: ''
})

const AUDITORY_INSTRUCTION_VIDEO_URL = 'https://crlabgeorgetown.github.io/behavioral/static/instruction/AuditoryWPM.mp4'
const WRITTEN_INSTRUCTION_VIDEO_URL = 'https://crlabgeorgetown.github.io/behavioral/static/instruction/WrittenWPM.mp4'


function setupInstructionHeader(text, { writtenMode = false, videoUrl = AUDITORY_INSTRUCTION_VIDEO_URL } = {}) {
    VIDEO_SOURCE.attr('src', videoUrl)
    VIDEO_CONTAINER.attr({
        autoplay: false,
        loop: false,
        controls: false,
        playsinline: true
    })
    VIDEO_CONTAINER.prop('muted', false)
    VIDEO_CONTAINER.off('ended.publicPracticeReplay')
    VIDEO_CONTAINER.off('ended.publicInstructionHeader')

    const element = VIDEO_CONTAINER.get(0)
    if (element) {
        element.pause()
        element.currentTime = 0
        element.load()
    }

    PUBLIC_INSTRUCTION_TEXT.text(text)
    PUBLIC_INSTRUCTION_HEADER.removeClass('public-instruction-header--written')
    PUBLIC_INSTRUCTION_TEXT.removeClass('public-instruction-text--written')
    VIDEO_CONTAINER.removeClass('public-instruction-video--written')

    if (writtenMode) {
        PUBLIC_INSTRUCTION_HEADER.addClass('public-instruction-header--written')
        PUBLIC_INSTRUCTION_TEXT.addClass('public-instruction-text--written')
        VIDEO_CONTAINER.addClass('public-instruction-video--written')
    }

    PUBLIC_WRITTEN_INSTRUCTION_VIDEO_STACK.empty().append(
        VIDEO_CONTAINER,
        PUBLIC_WRITTEN_INSTRUCTION_REPLAY_BUTTON
    )
    PUBLIC_INSTRUCTION_HEADER.empty().append(PUBLIC_WRITTEN_INSTRUCTION_VIDEO_STACK, PUBLIC_INSTRUCTION_TEXT)
}


function pauseInstructionVideo() {
    const element = VIDEO_CONTAINER.get(0)
    if (!element) return

    element.pause()
    element.currentTime = 0
}


function bindInstructionReplayBehavior() {
    const replayButton = jQuery('#publicWrittenInstructionReplayButton')
    replayButton.hide()

    VIDEO_CONTAINER.off('ended.publicWrittenInstructionReplay')
    VIDEO_CONTAINER.on('ended.publicWrittenInstructionReplay', () => {
        replayButton.show()
    })
}


function playInstructionVideoFromStart() {
    const element = VIDEO_CONTAINER.get(0)
    if (!element) return

    jQuery('#publicWrittenInstructionReplayButton').hide()
    element.currentTime = 0
    element.play().catch(() => {})
}


// ─── Instruction: Auditory ────────────────────────────────────────────────────

class PublicInstructionAuditoryWordToPictureMatching extends Screen {
    get components() {
        setupInstructionHeader('You will hear a word.\nThen you will see four pictures.\nTouch the picture that matches the word.', {
            videoUrl: AUDITORY_INSTRUCTION_VIDEO_URL
        })

        setWordToPictureImages({
            topleft: 'https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/swim.jpeg',
            topright: 'https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/run.jpeg',
            botleft: 'https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/dance.jpeg',
            botright: 'https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/climb.jpeg'
        })
        setWordToPictureCresp('', 'base-text large-text word-to-picture-cresp')
        setWordToPictureImagesVisible(true)
        return new Map([
            [PUBLIC_INSTRUCTION_HEADER, {}],
            [VIDEO_CONTAINER, { addClass: 'public-instruction-video' }],
            [PUBLIC_INSTRUCTION_TEXT, {}],
            [FOUR_IMAGE_CONTAINER, {addClass: 'four-image-container-instruction'}],
            [INSTRUCTION_BUTTON_CONTAINER, {}]
        ])
    }

    get clickHandlers() {
        return {
            publicWrittenInstructionReplayButton: () => this.replayInstructionVideo(),
            nextButton: () => {
                pauseInstructionVideo()
                jQuery('#publicWrittenInstructionReplayButton').hide()
                this.orchestrator.next()
            },
            previousButton: () => {
                pauseInstructionVideo()
                jQuery('#publicWrittenInstructionReplayButton').hide()
                this.orchestrator.previous()
            }
        }
    }

    setTimeouts() {
        super.setTimeouts()
        bindInstructionReplayBehavior()
        playInstructionVideoFromStart()
    }

    replayInstructionVideo() {
        playInstructionVideoFromStart()
    }
}


// ─── Instruction: Written ─────────────────────────────────────────────────────

class PublicInstructionWrittenWordToPictureMatching extends Screen {
    get components() {
        setupInstructionHeader('You will see a word.\nThen you will see four pictures.\nTouch the picture that matches the word.', {
            writtenMode: true,
            videoUrl: WRITTEN_INSTRUCTION_VIDEO_URL
        })

        setWordToPictureImages({
            topleft: 'https://crlabgeorgetown.github.io/behavioral/static/writtenWordtoPictureMatching/swim.jpeg',
            topright: 'https://crlabgeorgetown.github.io/behavioral/static/writtenWordtoPictureMatching/run.jpeg',
            botleft: 'https://crlabgeorgetown.github.io/behavioral/static/writtenWordtoPictureMatching/dance.jpeg',
            botright: 'https://crlabgeorgetown.github.io/behavioral/static/writtenWordtoPictureMatching/climb.jpeg'
        })
        setWordToPictureCresp('climb', 'base-text large-text word-to-picture-cresp')
        setWordToPictureImagesVisible(true)
        return new Map([
            [PUBLIC_INSTRUCTION_HEADER, {}],
            [VIDEO_CONTAINER, { addClass: 'public-instruction-video' }],
            [PUBLIC_INSTRUCTION_TEXT, {}],
            [FOUR_IMAGE_CONTAINER, {addClass: 'four-image-container-instruction'}],
            [INSTRUCTION_BUTTON_CONTAINER, {}]
        ])
    }

    get clickHandlers() {
        return {
            publicWrittenInstructionReplayButton: () => this.replayInstructionVideo(),
            nextButton: () => {
                pauseInstructionVideo()
                jQuery('#publicWrittenInstructionReplayButton').hide()
                this.orchestrator.next()
            },
            previousButton: () => {
                pauseInstructionVideo()
                jQuery('#publicWrittenInstructionReplayButton').hide()
                this.orchestrator.previous()
            }
        }
    }

    setTimeouts() {
        super.setTimeouts()
        bindInstructionReplayBehavior()
        playInstructionVideoFromStart()
    }

    replayInstructionVideo() {
        playInstructionVideoFromStart()
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
