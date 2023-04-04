
const ALL_STIMULI_CSS = {
    'display': 'flex',
    'height': '100px',
    'width': '100%',
    'margin-bottom': '1vh',
    'margin-top': 'auto',
    'align-items': 'center'
}


const ALL_STIMULI_CONTAINER = jQuery('<div/>', {id: 'allStimuliContainer', css: {width: '100%', margin: 'auto'}})


const ALL_STIMULI_ONE = jQuery('<div/>', {id: 'allStimuliOne', css: ALL_STIMULI_CSS})
const ALL_STIMULI_TWO = jQuery('<div/>', {id: 'allStimuliTwo', css: ALL_STIMULI_CSS})
const ALL_STIMULI_THREE = jQuery('<div/>', {id: 'allStimuliThree', css: ALL_STIMULI_CSS})
const ALL_STIMULI_FOUR = jQuery('<div/>', {id: 'allStimuliFour', css: ALL_STIMULI_CSS})


ALL_STIMULI_CONTAINER.append(
    ALL_STIMULI_ONE,
    ALL_STIMULI_TWO,
    ALL_STIMULI_THREE,
    ALL_STIMULI_FOUR
)


export { ALL_STIMULI_CONTAINER, ALL_STIMULI_ONE, ALL_STIMULI_TWO, ALL_STIMULI_THREE, ALL_STIMULI_FOUR}