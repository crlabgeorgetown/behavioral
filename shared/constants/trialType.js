import Enum from "./enum"

const PRACTICE = 'practice'
const EXPERIMENT = 'experiment'

export default class TrialType extends Enum {
    static Practice = new TrialType(PRACTICE)
    static Experiment = new TrialType(EXPERIMENT)
}
