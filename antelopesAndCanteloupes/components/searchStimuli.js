const SEARCH_STIMULI_CSS = {
    width: '200px', 
    height: '200px', 
    padding: '50px',
    background: '#BEBEBE',
    border: '1px solid #000000'
}


const SEARCH_STIMULI_LABEL_CSS = {
    width: '200px', 
    height: '100%', 
    fontSize: '2em',
    textAlign: 'center'
}


const SEARCH_STIMULI_CONTAINER = jQuery('<div/>', {
    id: 'searchStimuliContainer', 
    css: {
        width: '600px',
        maxHeight: '400px', 
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'auto',
        marginBottom: 'auto'
    }
})


const SEARCH_STIMULI = [
    jQuery('<img/>', {id: 'stimuliToSelect1', css: SEARCH_STIMULI_CSS}),
    jQuery('<div/>', {id: 'stimuliToSelect1Label', css: SEARCH_STIMULI_LABEL_CSS}),
    jQuery('<img/>', {id: 'stimuliToSelect2', css: SEARCH_STIMULI_CSS}),
    jQuery('<div/>', {id: 'stimuliToSelect2Label', css: SEARCH_STIMULI_LABEL_CSS})
]


SEARCH_STIMULI_CONTAINER.append(...SEARCH_STIMULI)


export { SEARCH_STIMULI_CONTAINER, SEARCH_STIMULI }