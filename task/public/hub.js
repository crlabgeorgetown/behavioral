import { createPublicScreen, createSingleActionButtonContainer } from "../../shared/components/publicTask"
import { createDemographicsForm, createTaskSelectionForm } from "./components/hubForms"


const AGE_INPUT_SELECTOR = '#ageInput'
const EDUCATION_INPUT_SELECTOR = '#educationInput'
const PARTICIPANT_INPUT_SELECTOR = '#participantInput'
const TASK_VARIANT_SELECTOR = 'input[name="taskVariant"]:checked'
const HUB_ERROR_1_SELECTOR = '#hubError1'
const HUB_ERROR_2_SELECTOR = '#hubError2'


function readTrimmedValue(selector) {
    return jQuery(selector).val().trim()
}

function readValue(selector) {
    return jQuery(selector).val()
}


function validateDemographics() {
    const age = readTrimmedValue(AGE_INPUT_SELECTOR)
    const education = readValue(EDUCATION_INPUT_SELECTOR)

    if (!age) {
        jQuery(HUB_ERROR_1_SELECTOR).text('Age is required.')
        return false
    }

    if (!education) {
        jQuery(HUB_ERROR_1_SELECTOR).text('Education is required.')
        return false
    }

    jQuery(HUB_ERROR_1_SELECTOR).text('')
    return true
}

function buildMetadata(entry) {
    return {
        SubjectID: readTrimmedValue(PARTICIPANT_INPUT_SELECTOR) || 'XXX',
        Age: readTrimmedValue(AGE_INPUT_SELECTOR),
        Education: readValue(EDUCATION_INPUT_SELECTOR),
        Task: entry.label
    }
}

function getSelectedTaskEntry(publicTaskRegistry) {
    const key = readValue(TASK_VARIANT_SELECTOR)
    if (!key) {
        jQuery(HUB_ERROR_2_SELECTOR).text('Please choose a task.')
        return null
    }

    const entry = publicTaskRegistry.find((candidate) => candidate.key === key)
    if (!entry) {
        jQuery(HUB_ERROR_2_SELECTOR).text('Selected task is unavailable.')
        return null
    }

    jQuery(HUB_ERROR_2_SELECTOR).text('')
    return entry
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
        text: 'BEGIN>>',
        clickHandler: () => {
            if (!validateDemographics()) {
                return
            }

            screen1.hide()
            screen2.show()
        }
    })

    const startTaskButtonContainer = createSingleActionButtonContainer({
        buttonId: 'startTaskButton',
        text: 'START',
        clickHandler: () => {
            const entry = getSelectedTaskEntry(publicTaskRegistry)
            if (!entry) return

            const metadata = buildMetadata(entry)

            screen2.hide()
            wrapper.css('display', 'block')

            startTask({
                entry,
                metadata
            })
        }
    })

    screen1.append(demographicsForm, toScreen2ButtonContainer)
    screen2.append(taskSelectionForm, startTaskButtonContainer)

    mountPoint.empty().append(screen1, screen2)
}


export { initPublicTaskHub }
