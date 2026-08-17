const VIDEO_CONTAINER = jQuery("<video/>", {id: 'videoContainer'})
const VIDEO_SOURCE = jQuery("<source/>", {id: 'videoSource', type: 'video/mp4'})

VIDEO_CONTAINER.append(VIDEO_SOURCE)

const preloadedVideoSources = new Set()

function preloadVideoSource(source) {
	if (!source) return null
	if (preloadedVideoSources.has(source)) return null
	preloadedVideoSources.add(source)

	// video.preload="auto" is only a hint and browsers often buffer just the
	// start of the file when the element never plays. Force the full file
	// into the HTTP cache directly so playback never has to hit the network.
	fetch(source, { mode: 'no-cors', cache: 'force-cache' }).catch(() => {})

	const video = document.createElement('video')
	video.preload = 'auto'
	video.src = source
	video.load()
	return video
}


export { VIDEO_CONTAINER, VIDEO_SOURCE, preloadVideoSource }