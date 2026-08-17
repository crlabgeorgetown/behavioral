const AUDIO_CONTAINER = jQuery("<audio/>", {id: 'audioContainer'})
const AUDIO_SOURCE = jQuery("<source/>", {id: 'audioSource', type: 'audio/wav'})

AUDIO_CONTAINER.append(AUDIO_SOURCE)

const preloadedAudioSources = new Set()

function preloadAudioSource(source) {
	if (!source) return null
	if (preloadedAudioSources.has(source)) return null
	preloadedAudioSources.add(source)

	// audio.preload="auto" is only a hint and browsers can buffer just the
	// start of the file when the element never plays. Force the full file
	// into the HTTP cache directly so real playback never has to hit the network.
	fetch(source, { mode: 'no-cors', cache: 'force-cache' }).catch(() => {})

	const audio = new Audio()
	audio.preload = 'auto'
	audio.src = source
	audio.load()
	return audio
}


export { AUDIO_CONTAINER, AUDIO_SOURCE, preloadAudioSource }