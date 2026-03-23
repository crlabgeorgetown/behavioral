import Screen from "../../screens/base"
import {
    createPublicButton,
    createPublicInfoRow,
    createReplayButton
} from "../../../shared/components/publicTask"
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

const PUBLIC_WRITTEN_INSTRUCTION_REPLAY_BUTTON = createReplayButton({
    id: 'publicWrittenInstructionReplayButton',
    className: 'public-written-instruction-replay'
})

const AUDITORY_INSTRUCTION_VIDEO_URL = 'https://crlabgeorgetown.github.io/behavioral/static/instruction/AuditoryWPM.mp4'
const WRITTEN_INSTRUCTION_VIDEO_URL = 'https://crlabgeorgetown.github.io/behavioral/static/instruction/WrittenWPM.mp4'
const INSTRUCTION_BASE_URL = 'https://crlabgeorgetown.github.io/behavioral/static/instruction'
const REPLAY_BUTTON_SELECTOR = '#publicWrittenInstructionReplayButton'


function createInstructionPairIcon({
    leftIcon,
    rightIcon,
    leftIconClass = 'public-pre-instruction-icon',
    rightIconClass = 'public-pre-instruction-icon',
    leftMark = `${INSTRUCTION_BASE_URL}/greenCheck.png`,
    rightMark = `${INSTRUCTION_BASE_URL}/redX.png`
}) {
    const pair = jQuery('<div/>', {
        class: 'public-pre-instruction-pair'
    })

    const left = jQuery('<div/>', {
        class: 'public-pre-instruction-item'
    })

    const leftMarkEl = jQuery('<img/>', {
        class: 'public-pre-instruction-mark',
        src: leftMark,
        alt: 'Correct'
    })

    const leftIconEl = jQuery('<img/>', {
        class: leftIconClass,
        src: leftIcon,
        alt: 'Recommended'
    })

    left.append(leftMarkEl, leftIconEl)

    const right = jQuery('<div/>', {
        class: 'public-pre-instruction-item'
    })

    const rightMarkEl = jQuery('<img/>', {
        class: 'public-pre-instruction-mark',
        src: rightMark,
        alt: 'Not recommended'
    })

    const rightIconEl = jQuery('<img/>', {
        class: rightIconClass,
        src: rightIcon,
        alt: 'Not recommended'
    })

    right.append(rightMarkEl, rightIconEl)

    pair.append(left, right)
    return pair
}


function createInstructionSingleIcon({ icon, alt }) {
    return jQuery('<div/>', {
        class: 'public-pre-instruction-single'
    }).append(jQuery('<img/>', {
        class: 'public-pre-instruction-icon public-pre-instruction-icon--single',
        src: icon,
        alt
    }))
}


class PublicInstructionReminderScreen extends Screen {
    get instructionText() { return '' }

    get contentElement() {
        return jQuery('<div/>')
    }

    get components() {
        const root = jQuery('<div/>', {
            class: 'public-pre-instruction-root'
        }).append(this.contentElement)

        const text = jQuery('<div/>', {
            class: 'public-pre-instruction-text',
            text: this.instructionText
        })

        return new Map([
            [root, {}],
            [text, {}],
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


class PublicInstructionLandscape extends PublicInstructionReminderScreen {
    get instructionText() {
        return 'Keep your screen in landscape.'
    }

    get contentElement() {
        return createInstructionPairIcon({
            leftIcon: `${INSTRUCTION_BASE_URL}/tablet.png`,
            rightIcon: `${INSTRUCTION_BASE_URL}/tablet.png`,
            rightIconClass: 'public-pre-instruction-icon public-pre-instruction-icon--portrait'
        })
    }
}


class PublicInstructionLeftHand extends PublicInstructionReminderScreen {
    get instructionText() {
        return 'Use your left hand to respond.'
    }

    get contentElement() {
        return createInstructionPairIcon({
            leftIcon: `${INSTRUCTION_BASE_URL}/hands.png`,
            rightIcon: `${INSTRUCTION_BASE_URL}/hands.png`,
            rightIconClass: 'public-pre-instruction-icon public-pre-instruction-icon--mirror'
        })
    }
}


class PublicInstructionHeadphones extends PublicInstructionReminderScreen {
    get instructionText() {
        return 'Wear headphones.'
    }

    get contentElement() {
        return createInstructionSingleIcon({
            icon: `${INSTRUCTION_BASE_URL}/headphones.png`,
            alt: 'Headphones'
        })
    }
}


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
    const replayButton = jQuery(REPLAY_BUTTON_SELECTOR)
    replayButton.hide()

    VIDEO_CONTAINER.off('ended.publicWrittenInstructionReplay')
    VIDEO_CONTAINER.on('ended.publicWrittenInstructionReplay', () => {
        replayButton.show()
    })
}


function playInstructionVideoFromStart() {
    const element = VIDEO_CONTAINER.get(0)
    if (!element) return

    jQuery(REPLAY_BUTTON_SELECTOR).hide()
    element.currentTime = 0
    element.play().catch(() => {})
}


function hideInstructionReplayButton() {
    jQuery(REPLAY_BUTTON_SELECTOR).hide()
}


const AUDITORY_WTP_INSTRUCTION = {
    text: 'You will hear a word.\nThen you will see four pictures.\nTouch the picture that matches the word.',
    writtenMode: false,
    videoUrl: AUDITORY_INSTRUCTION_VIDEO_URL,
    images: {
        topleft: 'https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/swim.jpeg',
        topright: 'https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/run.jpeg',
        botleft: 'https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/dance.jpeg',
        botright: 'https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/climb.jpeg'
    },
    cresp: ''
}

const WRITTEN_WTP_INSTRUCTION = {
    text: 'You will see a word.\nThen you will see four pictures.\nTouch the picture that matches the word.',
    writtenMode: true,
    videoUrl: WRITTEN_INSTRUCTION_VIDEO_URL,
    images: {
        topleft: 'https://crlabgeorgetown.github.io/behavioral/static/writtenWordtoPictureMatching/swim.jpeg',
        topright: 'https://crlabgeorgetown.github.io/behavioral/static/writtenWordtoPictureMatching/run.jpeg',
        botleft: 'https://crlabgeorgetown.github.io/behavioral/static/writtenWordtoPictureMatching/dance.jpeg',
        botright: 'https://crlabgeorgetown.github.io/behavioral/static/writtenWordtoPictureMatching/climb.jpeg'
    },
    cresp: 'climb'
}


class PublicInstructionWordToPictureMatchingBase extends Screen {
    get instructionConfig() {
        return AUDITORY_WTP_INSTRUCTION
    }

    get components() {
        const config = this.instructionConfig

        setupInstructionHeader(config.text, {
            writtenMode: config.writtenMode,
            videoUrl: config.videoUrl
        })

        setWordToPictureImages(config.images)
        setWordToPictureCresp(config.cresp, 'base-text large-text word-to-picture-cresp')
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
                hideInstructionReplayButton()
                this.orchestrator.next()
            },
            previousButton: () => {
                pauseInstructionVideo()
                hideInstructionReplayButton()
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


// ─── Instruction: Auditory ────────────────────────────────────────────────────

class PublicInstructionAuditoryWordToPictureMatching extends PublicInstructionWordToPictureMatchingBase {
    get instructionConfig() {
        return AUDITORY_WTP_INSTRUCTION
    }
}


// ─── Instruction: Written ─────────────────────────────────────────────────────

class PublicInstructionWrittenWordToPictureMatching extends PublicInstructionWordToPictureMatchingBase {
    get instructionConfig() {
        return WRITTEN_WTP_INSTRUCTION
    }
}


// ─── Public completion screen ─────────────────────────────────────────────────

function createPublicAnalysisTable(analysisTable) {
    const wrapper = jQuery('<div/>', {
        class: 'public-analysis-table-wrap'
    })

    const table = jQuery('<table/>', {
        class: 'public-analysis-table'
    })

    if (Array.isArray(analysisTable.columns) && analysisTable.columns.length > 0) {
        const headRow = jQuery('<tr/>')
        analysisTable.columns.forEach((column) => {
            headRow.append(jQuery('<th/>', {
                text: column || ''
            }))
        })
        table.append(jQuery('<thead/>').append(headRow))
    }

    const tbody = jQuery('<tbody/>')
    ;(analysisTable.rows || []).forEach((row) => {
        const tr = jQuery('<tr/>', {
            class: row?.type === 'section' ? 'public-analysis-table-section-row' : ''
        })

        const cells = Array.isArray(row?.cells) ? row.cells : []
        cells.forEach((cell) => {
            tr.append(jQuery('<td/>', {
                text: cell === null || cell === undefined ? '' : String(cell)
            }))
        })

        tbody.append(tr)
    })

    table.append(tbody)
    wrapper.append(table)
    return wrapper
}

function createAnalysisBlock(analysis, { showSectionTitle = false } = {}) {
    const block = jQuery('<div/>', {
        class: 'public-analysis-block'
    })

    if (showSectionTitle) {
        block.append(jQuery('<div/>', {
            text: analysis.title || 'Task Analysis',
            class: 'public-analysis-subtitle'
        }))
    }

    if (analysis.table && Array.isArray(analysis.table.rows)) {
        block.append(createPublicAnalysisTable(analysis.table))
    } else {
        ;(analysis.metrics || []).forEach((metric, index) => {
            block.append(createPublicInfoRow({
                label: metric.label,
                value: metric.value,
                rowClass: 'public-metric-row',
                labelClass: 'public-metric-label',
                valueClass: 'public-metric-value',
                removeBorder: (analysis.metrics || []).length - 1 === index
            }))
        })
    }

    if (analysis.interpretation) {
        block.append(jQuery('<div/>', {
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

        block.append(refContainer)
    }

    return block
}

function ensurePublicClientSubmitted(orchestrator) {
    if (!orchestrator.client.hasSubmitted) {
        orchestrator.client.submit(orchestrator.root)
    }
}

function createCompletionRoot(title) {
    const completionRoot = jQuery('<div/>', {
        id: 'publicCompletionRoot',
        class: 'public-completion-root'
    })

    const titleEl = jQuery('<div/>', {
        text: title,
        class: 'public-completion-title'
    })

    completionRoot.append(titleEl)
    return completionRoot
}

function createSummaryRows(summary) {
    return [
        ['Task', summary.task],
        ['Participant ID', summary.participantId],
        ['Age', summary.age],
        ['Education', summary.education],
        ['Input Device', summary.inputDevice],
        ['Completed At', summary.completedAt],
        ['Trials Completed', summary.trialsCompleted]
    ]
}

function appendSummaryRows(summaryCard, summaryRows) {
    summaryRows.forEach(([label, value], index) => {
        summaryCard.append(createPublicInfoRow({
            label,
            value,
            rowClass: 'public-summary-row',
            labelClass: 'public-summary-label',
            valueClass: 'public-summary-value',
            removeBorder: index === summaryRows.length - 1
        }))
    })
}

function getAnalysisData(client) {
    const analysis = client.getTaskAnalysis()
    const analyses = typeof client.getTaskAnalyses === 'function'
        ? client.getTaskAnalyses()
        : [analysis]
    const hasMultipleAnalyses = Array.isArray(analyses) && analyses.length > 1

    return { analysis, analyses, hasMultipleAnalyses }
}

function createAnalysisContainer({ analysis, analyses, hasMultipleAnalyses }) {
    const container = jQuery('<div/>', {
        class: hasMultipleAnalyses ? 'public-analysis-scroll' : 'public-analysis-content'
    })

    ;(analyses || [analysis]).forEach((item) => {
        container.append(createAnalysisBlock(item, {
            showSectionTitle: hasMultipleAnalyses
        }))
    })

    return container
}

function createPublicCompletionActions() {
    const actionRow = jQuery('<div/>', {
        class: 'public-completion-actions'
    })

    const csvBtn = createPublicButton({
        id: 'exportCsvButton',
        className: 'grey-button medium-button-text',
        text: 'Download CSV'
    })

    const pdfBtn = createPublicButton({
        id: 'exportPdfButton',
        className: 'grey-button medium-button-text',
        text: 'Export PDF'
    })

    actionRow.append(csvBtn, pdfBtn)
    return actionRow
}

class PublicComplete extends Screen {
    get components() {
        ensurePublicClientSubmitted(this.orchestrator)

        const summary = this.orchestrator.client.getSummary()
        const { analysis, analyses, hasMultipleAnalyses } = getAnalysisData(this.orchestrator.client)
        const completionRoot = createCompletionRoot(`You've completed this exercise!`)

        const summaryCard = jQuery('<div/>', {
            id: 'publicSummaryCard',
            class: 'public-summary-card'
        })

        appendSummaryRows(summaryCard, createSummaryRows(summary))

        const analysisTitle = jQuery('<div/>', {
            text: analysis.title || 'Task Analysis',
            class: 'public-analysis-title'
        })
        summaryCard.append(analysisTitle)

        summaryCard.append(createAnalysisContainer({ analysis, analyses, hasMultipleAnalyses }))
        completionRoot.append(summaryCard, createPublicCompletionActions())

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


class PublicContinueToNextTaskComplete extends Screen {
    constructor(orchestrator) {
        super(orchestrator)
        this.hasTriggeredNextTask = false
    }

    get components() {
        ensurePublicClientSubmitted(this.orchestrator)
        const completionRoot = createCompletionRoot(`Great job! Loading the next task...`)

        return new Map([
            [completionRoot, {}]
        ])
    }

    get timeouts() {
        return new Map([
            [() => {
                if (this.hasTriggeredNextTask) return
                this.hasTriggeredNextTask = true

                if (typeof this.orchestrator.onPublicRunComplete === 'function') {
                    this.orchestrator.onPublicRunComplete(this.orchestrator)
                }
            }, 100]
        ])
    }
}


class PublicCombinedComplete extends PublicComplete {
    constructor(orchestrator) {
        super(orchestrator)
        this.hasMergedCurrentRun = false
    }

    get components() {
        const combinedClient = this.orchestrator.publicCombinedClient
        if (combinedClient && !this.hasMergedCurrentRun) {
            ensurePublicClientSubmitted(this.orchestrator)

            const runSummary = this.orchestrator.client.getSummary()
            combinedClient.addRun({
                label: runSummary.task,
                client: this.orchestrator.client
            })

            this.orchestrator.client = combinedClient
            this.hasMergedCurrentRun = true
        }

        return super.components
    }
}


export {
    PublicInstructionLandscape,
    PublicInstructionLeftHand,
    PublicInstructionHeadphones,
    PublicInstructionAuditoryWordToPictureMatching,
    PublicInstructionWrittenWordToPictureMatching,
    PublicComplete,
    PublicContinueToNextTaskComplete,
    PublicCombinedComplete
}
