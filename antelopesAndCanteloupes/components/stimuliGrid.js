
const STIMULI_GRID = jQuery('<div/>', {id: 'stimuliGrid', class: 'stimuli-grid'})

const STIMULI = [
    jQuery('<img/>', {id: 'stimuli1', class: 'random-stimulus'}),
    jQuery('<img/>', {id: 'stimuli2', class: 'random-stimulus'}),
    jQuery('<img/>', {id: 'stimuli3', class: 'random-stimulus'}),
    jQuery('<img/>', {id: 'stimuli4', class: 'random-stimulus'})
]

STIMULI_GRID.append(...STIMULI)


export { STIMULI_GRID, STIMULI }