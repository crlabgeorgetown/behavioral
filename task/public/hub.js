import { createPublicScreen, createSingleActionButtonContainer } from "../../shared/components/publicTask"
import { createDemographicsForm, createTaskSelectionForm } from "./components/hubForms"


function getDataUrl(key) {
    return `https://crlabgeorgetown.github.io/behavioral/static/data/${key}.csv`
}


function initPublicTaskHub({ publicTaskRegistry, startTask }) {
    const mountPoint = jQuery('#publicTaskHubRoot')
    if (mountPoint.length === 0) return

    const wrapper = jQuery('#Wrapper')

    const screen1 = createPublicScreen()
    const screen2 = createPublicScreen().hide()

    const demographicsForm = createDemographicsForm()
    const taskSelectionForm = createTaskSelectionForm(publicTaskRegistry)

    const toScreen2ButtonContainer = createSingleActionButtonContainer({
        buttonId: 'toScreen2Button',
        text: 'BEGIN>',
        clickHandler: () => {
            const age = jQuery('#ageInput').val().trim()
            const education = jQuery('#educationInput').val()

            if (!age) {
                jQuery('#hubError1').text('Age is required.')
                return
            }

            if (!education) {
                jQuery('#hubError1').text('Education is required.')
                return
            }

            jQuery('#hubError1').text('')
            screen1.hide()
            screen2.show()
        }
    })

    const startTaskButtonContainer = createSingleActionButtonContainer({
        buttonId: 'startTaskButton',
        text: 'START',
        clickHandler: () => {
            const key = jQuery('input[name="taskVariant"]:checked').val()
            if (!key) {
                jQuery('#hubError2').text('Please choose a task.')
                return
            }

            jQuery('#hubError2').text('')

            const entry = publicTaskRegistry.find((candidate) => candidate.key === key)
            const metadata = {
                SubjectID: jQuery('#participantInput').val().trim() || 'XXX',
                Age: jQuery('#ageInput').val().trim(),
                Education: jQuery('#educationInput').val(),
                Task: entry.label
            }

            screen2.hide()
            wrapper.css('display', 'block')

            startTask({
                entry,
                metadata,
                getDataUrl
            })
        }
    })

    screen1.append(demographicsForm, toScreen2ButtonContainer)
    screen2.append(taskSelectionForm, startTaskButtonContainer)

    mountPoint.empty().append(screen1, screen2)
}


export { initPublicTaskHub }
