import Screen from "../../shared/screens/base"
import { REMINDERS } from "../components/reminder"
import { STIMULI } from "../components/stimuliGrid"


class BaseScreen extends Screen {
    
    setStimuliImages(images) {
        STIMULI.map((stimulus, index) => stimulus.attr({src: images[index]}))
    }

    pluralize(stimulus) {
        if (stimulus === 'coin') {
            return 'coin(s)'
        }
        return stimulus
    }

    updateReminders() {
        REMINDERS.map((reminder) => reminder.hide())
        this.task.currentRound.getStimuliSchedule().map((stimulus, index) => {
            const reminder = REMINDERS[index]
            reminder.show()
            reminder.attr({src: this.task.taskType.imageUrlFromStimulus(stimulus, 1)})
            if (this.task.currentRound.getSearchStimuli() === stimulus) {
                reminder.addClass('red-border')
                reminder.removeClass('black-border')
            } else {
                reminder.removeClass('red-border')
                reminder.addClass('black-border')
            }
        })
    }
}


export { BaseScreen }