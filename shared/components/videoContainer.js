const VIDEO_CONTAINER = jQuery("<video/>", {id: 'videoContainer'})
const VIDEO_SOURCE = jQuery("<source/>", {id: 'videoSource', type: 'video/mp4'})

VIDEO_CONTAINER.append(VIDEO_SOURCE)

function preloadVideoSource(source) {
	if (!source) return null

	const video = document.createElement('video')
	video.preload = 'auto'
	video.src = source
	video.load()
	return video
}


export { VIDEO_CONTAINER, VIDEO_SOURCE, preloadVideoSource }