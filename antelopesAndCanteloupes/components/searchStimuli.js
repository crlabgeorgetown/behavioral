
const SEARCH_STIMULI_CONTAINER = jQuery('<div/>', {
    id: 'searchStimuliContainer', 
    class: 'search-stimuli-container'
})


const SEARCH_STIMULI = [
    jQuery('<img/>', {id: 'stimuliToSelect1', class: 'search-stimuli'}),
    jQuery('<div/>', {id: 'stimuliToSelect1Label', class: 'search-stimuli-label'}),
    jQuery('<img/>', {id: 'stimuliToSelect2', class: 'search-stimuli'}),
    jQuery('<div/>', {id: 'stimuliToSelect2Label', class: 'search-stimuli-label'})
]


SEARCH_STIMULI_CONTAINER.append(...SEARCH_STIMULI)


export { SEARCH_STIMULI_CONTAINER, SEARCH_STIMULI }