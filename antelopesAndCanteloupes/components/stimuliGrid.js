const STIMULI_CSS = {
    width: '200px',
    height: '200px',
}


const STIMULI_GRID = jQuery('<div/>', {
    id: 'stimuliGrid',
    css: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '10px',
        width: '430px',
        marginTop: 'auto',
        marginBottom: 'auto',
        justifyContent: 'center'
    }
})


const STIMULI = [
    jQuery('<img/>', {id: 'stimuli1', css: STIMULI_CSS}),
    jQuery('<img/>', {id: 'stimuli2', css: STIMULI_CSS}),
    jQuery('<img/>', {id: 'stimuli3', css: STIMULI_CSS}),
    jQuery('<img/>', {id: 'stimuli4', css: STIMULI_CSS})
]


STIMULI_GRID.append(...STIMULI)


export { STIMULI_GRID, STIMULI }