const BASE_IMAGE_URL = 'https://jslawjslaw.github.io/js-crlab/static/images/readmap'

const SEMANTIC = 'semantic'
const PHONOLOGICAL = 'phonological'
const STANDARD = 'standard'
const MAX_PRACTICE_TRIALS = 3
const READY_TIMEOUT = 1000
const ROUND_DURATION = 10000


class TaskType {
    static SemanticReadMap = new TaskType(SEMANTIC)
    static PhonologicalReadMap = new TaskType(PHONOLOGICAL)
    static StandardReadMap = new TaskType(STANDARD)

    constructor(name) {
        this.name = name
    }

    get roundSchedule() {
        return {
            [PHONOLOGICAL]: [[0], [1, 2], [1], [2, 3], [2], [3, 1]],
            [SEMANTIC]: [[0], [1], [2], [3]],
            [STANDARD]: [[0], [1], [2], [3]]
        }[this.name]
    }

    get stimuli() {
        return {
            [PHONOLOGICAL]: ['can', 'coin', 'cone', 'corn'],
            [SEMANTIC]: ['cow', 'pig', 'sheep', 'goat'],
            [STANDARD]: ['triangle', 'square', 'circle', 'star']
        }[this.name]
    }

    get imageExtension() {
        return {
            [PHONOLOGICAL]: 'jpg',
            [SEMANTIC]: 'jpg',
            [STANDARD]: 'bmp'
        }[this.name]
    }

    get shouldShowInstructionScreenTwo() {
        return this.name !== STANDARD
    }

    static fromString(string) {
        switch(string) {
            case SEMANTIC:
                return TaskType.SemanticReadMap
            case PHONOLOGICAL:
                return TaskType.PhonologicalReadMap
            case STANDARD:
                return TaskType.StandardReadMap
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


export { MAX_PRACTICE_TRIALS, READY_TIMEOUT, ROUND_DURATION, TaskType }