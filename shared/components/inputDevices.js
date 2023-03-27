import Joystick from '../../static/images/joystick.png'
import Mouse from '../../static/images/mouse.png'
import Touchscreen from '../../static/images/touchscreen.png'
import Trackpad from '../../static/images/trackpad.png'


const DEVICE_LABEL_CSS = {
    color: '#000000',
    width: '15%',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    fontSize: '30px'
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
        marginTop: 'auto'
    }
})


const TOUCHSCREEN_BUTTON = jQuery('<img/>', {
    id: 'touchscreenButton', 
    css: DEVICE_BUTTON_CSS,
    src: Touchscreen,
}).hover(
    () => TOUCHSCREEN_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),
    () => TOUCHSCREEN_BUTTON.css({background: 'transparent'})
)


const TRACKPAD_BUTTON = jQuery('<img/>', {
    id: 'trackpadButton',
    css: DEVICE_BUTTON_CSS,
    src: Trackpad,
}).hover(
    () => TRACKPAD_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),
    () => TRACKPAD_BUTTON.css({background: 'transparent'})
)


const MOUSE_BUTTON = jQuery('<img/>', {
    id: 'mouseButton',
    css: DEVICE_BUTTON_CSS,
    src: Mouse,
}).hover(
    () => MOUSE_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),
    () => MOUSE_BUTTON.css({background: 'transparent'})
)


const OTHER_BUTTON = jQuery('<img/>', {
    id: 'otherButton',
    css: DEVICE_BUTTON_CSS,
    src: Joystick,
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
    fontFamily: 'Arial'
}})


const MOUSE_LABEL = jQuery('<div/>', {id: 'mouseLabel', css: DEVICE_LABEL_CSS}).text('Mouse')
const TRACKPAD_LABEL = jQuery('<div/>', {id: 'trackpadLabel', css: DEVICE_LABEL_CSS,}).text('Trackpad')
const TOUCHSCREEN_LABEL = jQuery('<div/>', {id: 'touchscreenLabel', css: DEVICE_LABEL_CSS}).text('Touchscreen')
const OTHER_LABEL = jQuery('<div/>', {id: 'otherLabel', css: DEVICE_LABEL_CSS}).text('Other')


INPUT_DEVICE_CONTAINER.append(MOUSE_BUTTON, TRACKPAD_BUTTON, TOUCHSCREEN_BUTTON, OTHER_BUTTON)
INPUT_DEVICE_LABEL_CONTAINER.append(MOUSE_LABEL, TRACKPAD_LABEL,TOUCHSCREEN_LABEL, OTHER_LABEL)

export {INPUT_DEVICE_CONTAINER, INPUT_DEVICE_LABEL_CONTAINER}