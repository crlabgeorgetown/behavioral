const READY_TIMEOUT = 1000
const NEUTRAL = 'Neutral'
const CONGRUENT = 'Congruent'
const INCONGRUENT = 'Incongruent'
const PRACTICE = 'Practice'


class BlockType {
    static Neutral = new BlockType(NEUTRAL)
    static Congruent = new BlockType(CONGRUENT)
    static Incongruent = new BlockType(INCONGRUENT)
    static Practice = new BlockType(PRACTICE)

    stimuliMap = {
        [NEUTRAL]: {
            1: 'far', 
            2: 'most', 
            3: 'slant', 
            4: 'plan'
        },
        [PRACTICE]: {
            1: 'slant',
            2: 'red',
            3: 'blue'
        },
        [CONGRUENT]: {
            1: 'red', 
            2: 'green', 
            3: 'blue'
        },
        [INCONGRUENT]: {
            1: 'red', 
            2: 'green', 
            3: 'blue'
        }
    }
    inkColorMap = {
        1: 'red',
        2: 'green',
        3: 'blue'
    }

    constructor(name) {
        this.name = name
    }

    stimulus(index) {
        return this.stimuliMap[this.name][index]
    }

    inkColor(index) {
        return this.inkColorMap[index]
    }

    static fromString(string) {
        switch(string) {
            case NEUTRAL:
                return BlockType.Neutral
            case INCONGRUENT:
                return BlockType.Incongruent
            case CONGRUENT:
                return BlockType.Congruent
            case PRACTICE:
                return BlockType.Practice
            default:
                throw new Error(`Undefined BlockType: ${string}`)
        }
    }
}


export { BlockType, PRACTICE, READY_TIMEOUT }