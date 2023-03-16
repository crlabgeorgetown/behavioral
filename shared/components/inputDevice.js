
const DEVICE_LABEL_CSS = {
    color: '#000000',
    width: '15%',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
}

const DEVICE_BUTTON_CSS = {
    width: '15%',
    marginLeft: 'auto',
    marginRight: 'auto'
}

const INPUT_DEVICE_CONTAINER = jQuery('<div/>', {
    id: 'inputDeviceContainer', 
    css: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        minWidth: '100%',
        marginTop: 'auto',
    }
})

const TOUCH_SCREEN_BUTTON = jQuery('<img/>', {
    id: 'touchscreenButton', 
    css: DEVICE_BUTTON_CSS,
    src: 'https://jslawjslaw.github.io/js-crlab/static/touchscreen.png',
}).hover(
    () => this.touchscreenButton.css({background: '#B0B0B0', cursor: 'pointer'}),
    () => this.touchscreenButton.css({background: 'transparent'})
)


const TRACKPAD_BUTTON = jQuery('<img/>', {
    id: 'trackpadButton',
    css: DEVICE_BUTTON_CSS,
    src: 'https://jslawjslaw.github.io/js-crlab/static/trackpad.png',
}).hover(
    () => this.trackpadButton.css({background: '#B0B0B0', cursor: 'pointer'}),
    () => this.trackpadButton.css({background: 'transparent'})
)


const MOUSE_BUTTON = jQuery('<img/>', {
    id: 'mouseButton',
    css: DEVICE_BUTTON_CSS,
    src: 'https://jslawjslaw.github.io/js-crlab/static/computer-mouse.png',
}).hover(
    () => MOUSE_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),
    () => MOUSE_BUTTON.css({background: 'transparent'})
)


const OTHER_BUTTON = jQuery('<img/>', {
    id: 'otherButton',
    css: DEVICE_BUTTON_CSS,
    src: 'https://jslawjslaw.github.io/js-crlab/static/joystick.png',
}).hover(
    () => OTHER_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),
    () => OTHER_BUTTON.css({background: 'transparent'})
)


const INPUT_DEVICE_LABEL_CONTAINER = jQuery('<div/>', {id: 'inputDeviceLabelContainer', css: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    minWidth: '100%',
    marginTop: '2.5%',
    marginBottom: 'auto',
}})

const MOUSE_LABEL = jQuery('<div/>', {id: 'mouseLabel', css: DEVICE_LABEL_CSS}).text('Mouse')
const TRACKPAD_LABEL = jQuery('<div/>', {id: 'trackpadLabel', css: DEVICE_LABEL_CSS,}).text('Trackpad')
const TOUCHSCREEN_LABEL = jQuery('<div/>', {id: 'touchscreenLabel', css: DEVICE_LABEL_CSS}).text('Touchscreen')
const OTHER_LABEL = jQuery('<div/>', {id: 'otherLabel', css: DEVICE_LABEL_CSS}).text('other')


INPUT_DEVICE_LABEL_CONTAINER.append(
    MOUSE_LABEL,
    TRACKPAD_LABEL,
    TOUCHSCREEN_LABEL,
    OTHER_LABEL
)

export {INPUT_DEVICE_CONTAINER, INPUT_DEVICE_LABEL_CONTAINER}