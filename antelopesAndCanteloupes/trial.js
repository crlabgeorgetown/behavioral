import { BASE_IMAGE_URL } from "./constants"


class Trial {
    constructor(trialType, stimuli, imageNumbers, searchStimuli) {
        this.trialType = trialType
        this.startTime = null
        this.stimuli = stimuli
        this.imageNumbers = imageNumbers
        this.searchStimuli = searchStimuli
        this.selections = []
        this.selectionTimes = []
    }

    getSearchStimuliIndex() {
        return this.stimuli.indexOf(this.searchStimuli)
    }

    getSearchStimuliImageNumber() {
        return this.imageNumbers[this.getSearchStimuliIndex()]
    }

    getImages() {
        return this.stimuli.map((stimulus, index) => `${BASE_IMAGE_URL}/${stimulus}${this.imageNumbers[index]}.jpg`)
    }
}


export { Trial }