import Screen from "../base";
import { TEXT_CONTAINER } from "../../../shared/components/textContainer";
import { AUDIO_CONTAINER, AUDIO_SOURCE } from "../../../shared/components/audioContainer";
import { INSTRUCTION_BUTTON_CONTAINER } from "../../../shared/components/instructionButtons";
import {
    FOUR_IMAGE_CONTAINER,
    topleftImage,
    toprightImage,
    botleftImage,
    botrightImage,
    setWordToPictureImages,
    setWordToPictureCresp,
    setWordToPictureImagesVisible
} from "../../../shared/components/imageContainer";

// ============================================================
// TEMP DIAGNOSTICS (field testing) — START
// Only active when orchestrator.collectDiagnostics is true (public variants
// only, see task/public/variants/wordToPicture.js). Purely observational -
// event listeners and Performance API reads, never adds delay to the trial
// itself. Remove this whole block, and every block below marked
// "TEMP DIAGNOSTICS call site", once field testing is done.
// ============================================================

function earliestResourceRequestTime(url) {
    const entries = performance.getEntriesByName(url)
    if (entries.length === 0) return null
    return Math.min(...entries.map((entry) => entry.startTime))
}

function recordDeviceDiagnostics(trial) {
    trial.Diag_ViewportWidth = window.innerWidth
    trial.Diag_ViewportHeight = window.innerHeight
    trial.Diag_Orientation = window.innerWidth >= window.innerHeight ? 'landscape' : 'portrait'
    trial.Diag_DevicePixelRatio = window.devicePixelRatio || ''
    trial.Diag_UserAgent = navigator.userAgent || ''
    trial.Diag_ConnectionType = (navigator.connection && navigator.connection.effectiveType) || ''
}

function recordImageDiagnostics(trial, revealDelayMs) {
    const images = [
        { el: topleftImage, src: trial.getTopLeft() },
        { el: toprightImage, src: trial.getTopRight() },
        { el: botleftImage, src: trial.getBotLeft() },
        { el: botrightImage, src: trial.getBotRight() }
    ]
    const srcSetAt = performance.now()
    const loadTimes = []
    const leadTimes = images
        .map((image) => earliestResourceRequestTime(image.src))
        .filter((time) => time !== null)
        .map((time) => srcSetAt - time)

    images.forEach((image, index) => {
        image.el.one('load', () => {
            loadTimes[index] = performance.now() - srcSetAt
        })
    })

    setTimeout(() => {
        const finishedCount = loadTimes.filter(Number.isFinite).length
        trial.Diag_SlowestImageLoadMs = finishedCount > 0
            ? Math.round(Math.max(...loadTimes.filter(Number.isFinite)))
            : null
        trial.Diag_ImagesAllLoadedBeforeReveal = finishedCount === images.length
        trial.Diag_MinImagePrebufferLeadMs = leadTimes.length > 0 ? Math.round(Math.min(...leadTimes)) : 0
    }, revealDelayMs)
}

function recordAudioDiagnostics(trial, audioUrl) {
    const el = AUDIO_CONTAINER[0]
    const playAt = performance.now()

    const firstRequestedAt = earliestResourceRequestTime(audioUrl)
    trial.Diag_AudioPrebufferLeadMs = firstRequestedAt !== null ? Math.round(playAt - firstRequestedAt) : 0
    trial.Diag_AudioStallCount = 0

    const onWaiting = () => { trial.Diag_AudioStallCount += 1 }
    const onPlaying = () => {
        trial.Diag_AudioPlayToAudibleMs = Math.round(performance.now() - playAt)
        el.removeEventListener('waiting', onWaiting)
        el.removeEventListener('playing', onPlaying)
    }

    el.addEventListener('waiting', onWaiting)
    el.addEventListener('playing', onPlaying, { once: true })
}
// ============================================================
// TEMP DIAGNOSTICS (field testing) — END
// ============================================================

class AuditoryWordToPictureMatchingReadMapTrialScreen extends Screen {
    resourceManifest(trial) {
        if (!trial) return []

        return [
            { type: 'image', source: trial.getTopLeft(), label: 'topleft' },
            { type: 'image', source: trial.getTopRight(), label: 'topright' },
            { type: 'image', source: trial.getBotLeft(), label: 'botleft' },
            { type: 'image', source: trial.getBotRight(), label: 'botright' },
            { type: 'audio', source: trial.audioSource(), label: 'audio' }
        ]
    }

    get components() {
        return new Map([
            [FOUR_IMAGE_CONTAINER, {addClass: 'four-image-container'}],
            [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],
            [AUDIO_CONTAINER, {}]
        ])
    }

    get clickHandlers() {
        return { 
            topleftImage: (event) => this.proceedClickHandler(event, 'topleft'),
            toprightImage: (event) => this.proceedClickHandler(event, 'topright'),
            botleftImage: (event) => this.proceedClickHandler(event, 'botleft'),
            botrightImage: (event) => this.proceedClickHandler(event, 'botright')
        }
    }

    proceedClickHandler(event, location) {
        event.stopPropagation()
        clearTimeout(this.timeoutID)

        this.orchestrator.currentTrial.responseTime = new Date()
        this.orchestrator.currentTrial.ResponseLocation = location
        this.orchestrator.currentTrial.Response = this.orchestrator.currentTrial.location[location]
        const isPractice = this.orchestrator.currentTrial.TrialType === 'Practice'

        if (!this.orchestrator.currentTrial.isCorrect() && isPractice) {
            this.orchestrator.replay()
        } else {
            this.orchestrator.next()
        }

        TEXT_CONTAINER.show()
    }

    startTrial() {
        // prepare the trial
        // load the pictures into the containers
        FOUR_IMAGE_CONTAINER.hide()
        setWordToPictureCresp('', 'base-text extra-large-text word-to-picture-cresp')
        setWordToPictureImagesVisible(true)
        setWordToPictureImages({
            topleft: this.orchestrator.currentTrial.getTopLeft(),
            topright: this.orchestrator.currentTrial.getTopRight(),
            botleft: this.orchestrator.currentTrial.getBotLeft(),
            botright: this.orchestrator.currentTrial.getBotRight()
        })

        // ---- TEMP DIAGNOSTICS call site (see block above) ----
        if (this.orchestrator.collectDiagnostics) {
            recordDeviceDiagnostics(this.orchestrator.currentTrial)
            recordImageDiagnostics(
                this.orchestrator.currentTrial,
                this.orchestrator.variant.fixationDuration + this.orchestrator.variant.waitDuration
            )
        }
        // ---- end TEMP DIAGNOSTICS call site ----

        setTimeout(() => {
            AUDIO_SOURCE.attr('src', this.orchestrator.currentTrial.audioSource())
            AUDIO_CONTAINER[0].load()
            // ---- TEMP DIAGNOSTICS call site (see block above) ----
            if (this.orchestrator.collectDiagnostics) {
                recordAudioDiagnostics(this.orchestrator.currentTrial, this.orchestrator.currentTrial.audioSource())
            }
            // ---- end TEMP DIAGNOSTICS call site ----
            AUDIO_CONTAINER[0].play()
            setTimeout(() => {
                TEXT_CONTAINER.hide()
                FOUR_IMAGE_CONTAINER.show()
                this.orchestrator.currentTrial.startTime = new Date()
                this.timeoutID = setTimeout(() => {
                    this.orchestrator.currentTrial.TimedOut = true
                    this.orchestrator.currentTrial.responseTime = new Date()
                    this.orchestrator.timedOut()
                    TEXT_CONTAINER.show()
                }, this.orchestrator.variant.timeToTimeout)
            }, this.orchestrator.variant.waitDuration)
        }, this.orchestrator.variant.fixationDuration)
        /*
        to show options after audio ends
        setTimeout(() => {
            AUDIO_SOURCE.attr('src', this.orchestrator.currentTrial.audioSource())
            AUDIO_CONTAINER.off('ended')
            AUDIO_CONTAINER.on('ended', () => {
                setTimeout(() => {
                    TEXT_CONTAINER.hide()
                    FOUR_IMAGE_CONTAINER.show()
                    this.orchestrator.currentTrial.startTime = new Date()
                    this.timeoutID = setTimeout(() => {
                        this.orchestrator.currentTrial.TimedOut = true
                        this.orchestrator.currentTrial.responseTime = new Date()
                        this.orchestrator.timedOut()
                        TEXT_CONTAINER.show()
                    }, this.orchestrator.variant.timeToTimeout)
                }, this.orchestrator.variant.waitDuration)
            })
            AUDIO_CONTAINER[0].load()
            AUDIO_CONTAINER[0].play()

        }, this.orchestrator.variant.fixationDuration)
        */
    }
}

class WrittenWordToPictureMatchingReadMapTrialScreen extends Screen {
    resourceManifest(trial) {
        if (!trial) return []

        return [
            { type: 'image', source: trial.getTopLeft(), label: 'topleft' },
            { type: 'image', source: trial.getTopRight(), label: 'topright' },
            { type: 'image', source: trial.getBotLeft(), label: 'botleft' },
            { type: 'image', source: trial.getBotRight(), label: 'botright' }
        ]
    }

    get components() {
        return new Map([
            [FOUR_IMAGE_CONTAINER, {addClass: 'four-image-container'}],
            [TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}]
        ])
    }

    get clickHandlers() {
        return { 
            topleftImage: (event) => this.proceedClickHandler(event, 'topleft'),
            toprightImage: (event) => this.proceedClickHandler(event, 'topright'),
            botleftImage: (event) => this.proceedClickHandler(event, 'botleft'),
            botrightImage: (event) => this.proceedClickHandler(event, 'botright')
        }
    }

    proceedClickHandler(event, location) {
        event.stopPropagation()
        clearTimeout(this.timeoutID)

        this.orchestrator.currentTrial.responseTime = new Date()
        this.orchestrator.currentTrial.ResponseLocation = location
        this.orchestrator.currentTrial.Response = this.orchestrator.currentTrial.location[location]
        const isPractice = this.orchestrator.currentTrial.TrialType === 'Practice'

        if (!this.orchestrator.currentTrial.isCorrect() && isPractice) {
            this.orchestrator.replay()
        } else {
            this.orchestrator.next()
        }

        TEXT_CONTAINER.show()
    }

    startTrial() {
        FOUR_IMAGE_CONTAINER.hide()
        setWordToPictureImages({
            topleft: this.orchestrator.currentTrial.getTopLeft(),
            topright: this.orchestrator.currentTrial.getTopRight(),
            botleft: this.orchestrator.currentTrial.getBotLeft(),
            botright: this.orchestrator.currentTrial.getBotRight()
        })
        setWordToPictureCresp(this.orchestrator.currentTrial.CRESP, 'base-text extra-large-text word-to-picture-cresp')
        setWordToPictureImagesVisible(false)

        // ---- TEMP DIAGNOSTICS call site (see block above) ----
        if (this.orchestrator.collectDiagnostics) {
            recordDeviceDiagnostics(this.orchestrator.currentTrial)
            recordImageDiagnostics(
                this.orchestrator.currentTrial,
                this.orchestrator.variant.fixationDuration + this.orchestrator.variant.waitDuration
            )
        }
        // ---- end TEMP DIAGNOSTICS call site ----

        setTimeout(() => {
            TEXT_CONTAINER.hide()
            FOUR_IMAGE_CONTAINER.show()
            setTimeout(() => {
                setWordToPictureImagesVisible(true)
                this.orchestrator.currentTrial.startTime = new Date()
                this.timeoutID = setTimeout(() => {
                    this.orchestrator.currentTrial.TimedOut = true
                    this.orchestrator.currentTrial.responseTime = new Date()
                    this.orchestrator.timedOut()
                    TEXT_CONTAINER.show()
                }, this.orchestrator.variant.timeToTimeout)
            }, this.orchestrator.variant.waitDuration)
        }, this.orchestrator.variant.fixationDuration)
    }
}

class InstructionAuditoryWordToPictureMatching extends Screen {
    get components() {
        setWordToPictureImages({
            topleft: 'https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/swim.jpeg',
            topright: 'https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/run.jpeg',
            botleft: 'https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/dance.jpeg',
            botright: 'https://crlabgeorgetown.github.io/behavioral/static/auditoryWordToPictureMatching/climb.jpeg'
        })
        setWordToPictureCresp('', 'base-text large-text word-to-picture-cresp')
        setWordToPictureImagesVisible(true)
        return new Map([
            [FOUR_IMAGE_CONTAINER, {addClass: 'four-image-container-instruction'}],
            [TEXT_CONTAINER, {text: 'You will see four pictures.\nYou will hear a word.\nTouch the picture that matches the word.', addClass: 'base-text medium-text'}],
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

class InstructionWrittenWordToPictureMatching extends Screen {
    get components() {
        setWordToPictureImages({
            topleft: 'https://crlabgeorgetown.github.io/behavioral/static/writtenWordtoPictureMatching/swim.jpeg',
            topright: 'https://crlabgeorgetown.github.io/behavioral/static/writtenWordtoPictureMatching/run.jpeg',
            botleft: 'https://crlabgeorgetown.github.io/behavioral/static/writtenWordtoPictureMatching/dance.jpeg',
            botright: 'https://crlabgeorgetown.github.io/behavioral/static/writtenWordtoPictureMatching/climb.jpeg'
        })
        setWordToPictureCresp('climb', 'base-text large-text word-to-picture-cresp')
        setWordToPictureImagesVisible(true)
        return new Map([
            [FOUR_IMAGE_CONTAINER, {addClass: 'four-image-container-instruction'}],
            [TEXT_CONTAINER, {text: 'You will see four pictures.\nYou will also see a word.\nTouch the picture that matches the word.', addClass: 'base-text medium-text'}],
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

export { InstructionAuditoryWordToPictureMatching, AuditoryWordToPictureMatchingReadMapTrialScreen, InstructionWrittenWordToPictureMatching, WrittenWordToPictureMatchingReadMapTrialScreen }