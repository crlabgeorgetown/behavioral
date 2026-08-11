const AUDIO_CONTAINER = jQuery("<audio/>", {id: 'audioContainer'})
const AUDIO_SOURCE = jQuery("<source/>", {id: 'audioSource', type: 'audio/wav'})

AUDIO_CONTAINER.append(AUDIO_SOURCE)

function preloadAudioSource(source) {
	if (!source) return null

	const audio = new Audio()
	audio.preload = 'auto'
	audio.src = source
	audio.load()
	return audio
}


export { AUDIO_CONTAINER, AUDIO_SOURCE, preloadAudioSource }