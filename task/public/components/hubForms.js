const EDUCATION_OPTIONS = [
    "Some high school",
    "High school diploma / GED",
    "Some college",
    "Associate's degree",
    "Bachelor's degree",
    "Some graduate school",
    "Master's degree",
    "Doctoral degree",
    "Professional degree (MD, JD, etc.)"
]


function createDemographicsForm() {
    const form = jQuery('<div/>', { class: 'hub-form' })

    const ageRow = jQuery('<div/>', { class: 'participant-id-container' })
        .append(jQuery('<div/>', { class: 'participant-id-label', text: 'Age' }))
        .append(jQuery('<input/>', {
            id: 'ageInput',
            class: 'participant-id-input',
            type: 'number',
            min: 1,
            max: 120,
            placeholder: '0'
        }))

    const educationRow = jQuery('<div/>', { class: 'participant-id-container' })
        .append(jQuery('<div/>', { class: 'participant-id-label', text: 'Education' }))

    const educationInput = jQuery('<select/>', {
        id: 'educationInput',
        class: 'participant-id-input'
    })

    educationInput.append(jQuery('<option/>', {
        value: '',
        text: 'Select',
        disabled: true,
        selected: true
    }))

    EDUCATION_OPTIONS.forEach((optionText) => {
        educationInput.append(jQuery('<option/>', {
            value: optionText,
            text: optionText
        }))
    })

    educationRow.append(educationInput)

    const codeRow = jQuery('<div/>', { class: 'participant-id-container' })
        .append(jQuery('<div/>', { class: 'participant-id-label', text: 'Code' }))
        .append(jQuery('<input/>', {
            id: 'participantInput',
            class: 'participant-id-input',
            type: 'text',
            placeholder: 'Identifier (optional)'
        }))

    const error = jQuery('<div/>', { class: 'hub-error', id: 'hubError1' })

    form.append(ageRow, educationRow, codeRow, error)
    return form
}


function createTaskSelectionForm(publicTaskRegistry) {
    const form = jQuery('<div/>', { class: 'hub-form' })

    const heading = jQuery('<div/>', {
        class: 'base-text medium-text',
        css: { marginBottom: '28px' },
        text: 'Choose a task'
    })

    const taskOptions = jQuery('<div/>', {
        class: 'hub-task-options',
        id: 'taskOptions'
    })

    publicTaskRegistry.forEach((entry, i) => {
        const label = jQuery('<label/>', { class: 'hub-task-option' })
        const radio = jQuery('<input/>', {
            type: 'radio',
            name: 'taskVariant',
            value: entry.key
        })

        if (i === 0) radio.prop('checked', true)

        label.append(radio).append(document.createTextNode(entry.label))
        taskOptions.append(label)
    })

    const error = jQuery('<div/>', { class: 'hub-error', id: 'hubError2' })
    form.append(heading, taskOptions, error)

    return form
}


export { createDemographicsForm, createTaskSelectionForm }
