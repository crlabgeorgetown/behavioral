const AUDIO_CONTAINER = jQuery("<audio/>", {id: 'audioContainer'})
const AUDIO_SOURCE = jQuery("<source/>", {id: 'audioSource', type: 'audio/wav'})

AUDIO_CONTAINER.append(AUDIO_SOURCE)


export { AUDIO_CONTAINER, AUDIO_SOURCE }