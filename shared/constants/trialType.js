import Enum from "./enum"

const PRACTICE = 'Practice'
const EXPERIMENT = 'Experiment'

export default class TrialType extends Enum {
    static Practice = new TrialType(PRACTICE)
    static Experiment = new TrialType(EXPERIMENT)

    static fromString(value) {
        switch (value) {
            case PRACTICE:
                return TrialType.Practice
            case EXPERIMENT:
                return TrialType.Experiment
        }
    }
}
