import Screen from "../../shared/screens/base"
import { REMINDERS } from "../components/reminder"
import { STIMULI } from "../components/stimuliGrid"
import { BASE_IMAGE_URL } from "../constants"


class BaseScreen extends Screen {
    
    setStimuliImages(images) {
        STIMULI.map((stimulus, index) => stimulus.attr({src: images[index]}))
    }

    updateReminders() {
        REMINDERS.map((reminder) => reminder.hide())
        this.task.currentRound.getStimuliSchedule().map((stimulus, index) => {
            const reminder = REMINDERS[index]
            reminder.show()
            reminder.attr({src: `${BASE_IMAGE_URL}/${stimulus}1.jpg`})
            if (this.task.currentRound.getSearchStimuli() === stimulus) {
                reminder.css({border: '1px solid #FF0000'})
            } else {
                reminder.css({border: '1px solid #000000'})
            }
        })
    }
}


export { BaseScreen }