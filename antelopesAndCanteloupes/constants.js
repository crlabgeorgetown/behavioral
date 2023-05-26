const BASE_IMAGE_URL = 'https://jslawjslaw.github.io/behavioral/static/images/readmap'

const SEMANTIC = 'semantic'
const PHONOLOGICAL = 'phonological'
const STANDARD = 'standard'
const UNRELATED = 'unrelated'
const MAX_PRACTICE_TRIALS = 3


class TaskType {
    static SemanticReadMap = new TaskType(SEMANTIC)
    static PhonologicalReadMap = new TaskType(PHONOLOGICAL)
    static StandardReadMap = new TaskType(STANDARD)
    static UnrelatedReadMap = new TaskType(UNRELATED)

    constructor(name) {
        this.name = name
    }

    get version() {
        return `${this.name.charAt(0).toUpperCase()}${this.name.slice(1)}ReadMap`
    }

    get roundSchedule() {
        return {
            [PHONOLOGICAL]: [[0], [1], [2], [3]],
            [SEMANTIC]: [[0], [1], [2], [3]],
            [STANDARD]: [[0], [1, 2], [1], [2, 0], [2], [1, 0]],
            [UNRELATED]: [[0], [1], [2], [3]],
        }[this.name]
    }

    get stimuli() {
        return {
            [PHONOLOGICAL]: ['can', 'coin', 'cone', 'corn'],
            [SEMANTIC]: ['cow', 'pig', 'sheep', 'goat'],
            [STANDARD]: ['triangle', 'square', 'circle', 'star'],
            [UNRELATED]: ['bread', 'duck', 'rope', 'shoe']
        }[this.name]
    }

    get imageExtension() {
        if (this.name === STANDARD) {
            return 'bmp'
        }

        return 'jpg'
    }

    get shouldShowInstructionScreenTwo() {
        return this.name !== STANDARD
    }

    get instructionsOne() {
        return {
            [PHONOLOGICAL]: 'Every screen will show pictures of a can, coin(s), a cone, and corn, but the exact pictures will change.',
            [SEMANTIC]: 'Every screen will show pictures of a cow, a pig, a sheep, and a goat, but the exact pictures will change.',
            [STANDARD]: 'Every screen will show pictures of a triangle, a square, a circle, and a star.',
            [UNRELATED]: 'Every screen will show picures of bread, a duck, a rope, and a shoe, but the exact pictures will change.'
        }[this.name]
    }

    static fromString(string) {
        switch(string) {
            case SEMANTIC:
                return TaskType.SemanticReadMap
            case PHONOLOGICAL:
                return TaskType.PhonologicalReadMap
            case STANDARD:
                return TaskType.StandardReadMap
            case UNRELATED:
                return TaskType.UnrelatedReadMap
            default:
                throw new Error(`Undefined task type: ${string}`)
        }
    }

    imageUrlFromStimulus(stimulus, imageNumber) {
        return `${BASE_IMAGE_URL}/${this.getOption(stimulus, imageNumber)}.${this.imageExtension}`
    }

    getOption(stimulus, imageNumber) {
        let option = `${stimulus}`
        if (this.name !== STANDARD) {
            option += imageNumber
        }
        return option
    }
}


export { MAX_PRACTICE_TRIALS, TaskType }