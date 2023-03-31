const BASE_IMAGE_URL = '../../static/images/readmap'

const SEMANTIC = 'semantic'
const PHONOLOGICAL = 'phonological'
const STANDARD = 'standard'


class TaskType {
    static SemanticReadMap = new TaskType(SEMANTIC)
    static PhonologicalReadMap = new TaskType(PHONOLOGICAL)
    static StandardReadMap = new TaskType(STANDARD)

    constructor(name) {
        this.name = name
    }

    get roundSchedule() {
        return {
            [TaskType.PhonologicalReadMap]: [[0], [1, 2], [1], [2, 3], [2], [3, 1]]
        }[this]
    }

    get stimuli() {
        return {
            [TaskType.PhonologicalReadMap]: ['can', 'coin', 'cone', 'corn']
        }[this]
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
}


export { BASE_IMAGE_URL, TaskType }