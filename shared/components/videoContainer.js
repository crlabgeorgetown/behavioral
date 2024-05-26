const VIDEO_CONTAINER = jQuery("<video/>", {id: 'videoContainer'})
const VIDEO_SOURCE = jQuery("<source/>", {id: 'videoSource', type: 'video/mp4'})

VIDEO_CONTAINER.append(VIDEO_SOURCE)


export { VIDEO_CONTAINER, VIDEO_SOURCE }