import Screen from "../../shared/screens/base"
import { STIMULI } from "../components/stimuliGrid"
import { BASE_IMAGE_URL } from "../constants"


class BaseScreen extends Screen{
    
    setStimuliImages() {
        const imageUrls = this.task.taskType.stimuli.map((stimuli) => `${BASE_IMAGE_URL}/${stimuli}1.jpg`)
        STIMULI.map((stimulus, index) => stimulus.attr({src: imageUrls[index]}))
    }

    updateReminders() {
        this.renderer.reminders.map((reminder) => reminder.hide())
        this.game.currentRound.getStimuliSchedule().map((stimulus, index) => {
            const reminder = this.renderer.reminders[index]
            reminder.show()
            reminder.attr({src: `${BASE_URL}/${stimulus}1.jpg`})
            if (this.game.currentRound.getSearchStimuli() === stimulus) {
                reminder.css({border: '1px solid #FF0000'})
            } else {
                reminder.css({border: '1px solid #000000'})
            }
        })
    }
}


export { BaseScreen }