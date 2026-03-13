import { INSTRUCTION_BUTTON_CONTAINER } from "../../../shared/components/instructionButtons"
import { TEXT_CONTAINER } from "../../../shared/components/textContainer"
import { VIDEO_CONTAINER, VIDEO_SOURCE } from "../../../shared/components/videoContainer"
import Screen from "../../screens/base"


const PUBLIC_PRACTICE_REPLAY_BUTTON = jQuery('<div/>', {
    id: 'publicPracticeReplayButton',
    class: 'grey-button medium-button-text public-practice-replay',
    text: 'Replay',
    ontouchstart: ''
})

const PUBLIC_PRACTICE_VIDEO_STACK = jQuery('<div/>', {
    id: 'publicPracticeVideoStack',
    class: 'public-practice-video-stack'
})


class PublicLetsPractice extends Screen {
    get components() {
        let text = `Let's Practice.`
        if (this.orchestrator.variant.hasOwnProperty('customPracticeText')) {
            text = this.orchestrator.variant.customPracticeText
        }

        VIDEO_SOURCE.attr('src', 'https://crlabgeorgetown.github.io/behavioral/static/instruction/LetsPractice.MP4')
        VIDEO_CONTAINER.attr({
            autoplay: false,
            loop: false,
            controls: false,
            playsinline: true
        })
        VIDEO_CONTAINER.prop('muted', false)

        PUBLIC_PRACTICE_VIDEO_STACK.empty().append(VIDEO_CONTAINER, PUBLIC_PRACTICE_REPLAY_BUTTON)

        return new Map([
            [PUBLIC_PRACTICE_VIDEO_STACK, {}],
            [VIDEO_CONTAINER, { addClass: 'public-practice-video' }],
            [PUBLIC_PRACTICE_REPLAY_BUTTON, {}],
            [TEXT_CONTAINER, { text: text, addClass: 'base-text medium-text' }],
            [INSTRUCTION_BUTTON_CONTAINER, {}]
        ])
    }

    get clickHandlers() {
        return {
            publicPracticeReplayButton: () => this.replayVideo(),
            nextButton: () => this.handleNavigation('next'),
            previousButton: () => this.handleNavigation('previous')
        }
    }

    setTimeouts() {
        super.setTimeouts()
        this.bindEndedBehavior()
        this.playFromStart()
    }

    bindEndedBehavior() {
        const replayButton = jQuery('#publicPracticeReplayButton')
        replayButton.hide()

        VIDEO_CONTAINER.off('ended.publicPracticeReplay')
        VIDEO_CONTAINER.on('ended.publicPracticeReplay', () => {
            replayButton.show()
        })
    }

    playFromStart() {
        const element = VIDEO_CONTAINER.get(0)
        if (!element) return

        jQuery('#publicPracticeReplayButton').hide()
        element.currentTime = 0
        element.play().catch(() => {})
    }

    replayVideo() {
        this.playFromStart()
    }

    handleNavigation(direction) {
        const element = VIDEO_CONTAINER.get(0)
        if (element) {
            element.pause()
            element.currentTime = 0
        }

        jQuery('#publicPracticeReplayButton').hide()

        if (direction === 'next') {
            this.orchestrator.next()
        } else {
            this.orchestrator.previous()
        }
    }
}


export { PublicLetsPractice }
