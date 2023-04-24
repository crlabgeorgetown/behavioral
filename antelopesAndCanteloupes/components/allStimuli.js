
const ALL_STIMULI_CONTAINER = jQuery('<div/>', {id: 'allStimuliContainer', class: 'all-stimuli-container'})


const ALL_STIMULI_ONE = jQuery('<div/>', {id: 'allStimuliOne', class: 'stimuli-row-container'})
const ALL_STIMULI_TWO = jQuery('<div/>', {id: 'allStimuliTwo', class: 'stimuli-row-container'})
const ALL_STIMULI_THREE = jQuery('<div/>', {id: 'allStimuliThree', class: 'stimuli-row-container'})
const ALL_STIMULI_FOUR = jQuery('<div/>', {id: 'allStimuliFour', class: 'stimuli-row-container'})


ALL_STIMULI_CONTAINER.append(
    ALL_STIMULI_ONE,
    ALL_STIMULI_TWO,
    ALL_STIMULI_THREE,
    ALL_STIMULI_FOUR
)


export { ALL_STIMULI_CONTAINER, ALL_STIMULI_ONE, ALL_STIMULI_TWO, ALL_STIMULI_THREE, ALL_STIMULI_FOUR}