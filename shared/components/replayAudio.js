import replayAudio from '../../static/images/replayAudio.png'


const REPLAY_AUDIO = jQuery('<img/>', {id: 'replayAudio', class: 'replay-audio', src: replayAudio})

const REPLAY_CONTAINER = jQuery('<div/>', {
    id: 'replayContainer', 
    class: 'instruction-button-container',
    css: {
        paddingTop: '75px'
    }
})

REPLAY_CONTAINER.append(REPLAY_AUDIO)

export { REPLAY_CONTAINER }