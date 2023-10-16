import rightChevron from '../../static/images/rightChevron.png'


const RIGHT_CHEVRON = jQuery('<img/>', {id: 'rightChevron', class: 'right-chevron', src: rightChevron})

const PROCEED_CONTAINER = jQuery('<div/>', {
    id: 'proceedContainer', 
    class: 'instruction-button-container'
})

PROCEED_CONTAINER.append(RIGHT_CHEVRON)

export { PROCEED_CONTAINER }