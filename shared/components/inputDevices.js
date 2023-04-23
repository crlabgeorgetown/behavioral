import Joystick from '../../static/images/joystick.png'
import Mouse from '../../static/images/mouse.png'
import Touchscreen from '../../static/images/touchscreen.png'
import Trackpad from '../../static/images/trackpad.png'


const INPUT_DEVICE_CONTAINER = jQuery('<div/>', {id: 'inputDeviceContainer', class: 'device-container'})


const TOUCHSCREEN_BUTTON = jQuery('<img/>', {
    id: 'touchscreenButton', 
    class: 'device-button',
    src: Touchscreen,
}).hover(
    () => TOUCHSCREEN_BUTTON.addClass('device-hover'),
    () => TOUCHSCREEN_BUTTON.removeClass('device-hover')
)


const TRACKPAD_BUTTON = jQuery('<img/>', {
    id: 'trackpadButton',
    class: 'device-button',
    src: Trackpad,
}).hover(
    () => TRACKPAD_BUTTON.addClass('device-hover'),
    () => TRACKPAD_BUTTON.removeClass('device-hover')
)


const MOUSE_BUTTON = jQuery('<img/>', {
    id: 'mouseButton',
    class: 'device-button',
    src: Mouse,
}).hover(
    () => MOUSE_BUTTON.addClass('device-hover'),
    () => MOUSE_BUTTON.removeClass('device-hover')
)


const OTHER_BUTTON = jQuery('<img/>', {
    id: 'otherButton',
    class: 'device-button',
    src: Joystick,
}).hover(
    () => OTHER_BUTTON.addClass('device-hover'),
    () => OTHER_BUTTON.removeClass('device-hover')
)


const INPUT_DEVICE_LABEL_CONTAINER = jQuery('<div/>', {id: 'inputDeviceLabelContainer', class: 'device-label-container'})


const MOUSE_LABEL = jQuery('<div/>', {id: 'mouseLabel', class: 'device-label'}).text('Mouse')
const TRACKPAD_LABEL = jQuery('<div/>', {id: 'trackpadLabel', class: 'device-label',}).text('Trackpad')
const TOUCHSCREEN_LABEL = jQuery('<div/>', {id: 'touchscreenLabel', class: 'device-label'}).text('Touchscreen')
const OTHER_LABEL = jQuery('<div/>', {id: 'otherLabel', class: 'device-label'}).text('Other')


INPUT_DEVICE_CONTAINER.append(MOUSE_BUTTON, TRACKPAD_BUTTON, TOUCHSCREEN_BUTTON, OTHER_BUTTON)
INPUT_DEVICE_LABEL_CONTAINER.append(MOUSE_LABEL, TRACKPAD_LABEL,TOUCHSCREEN_LABEL, OTHER_LABEL)


export {INPUT_DEVICE_CONTAINER, INPUT_DEVICE_LABEL_CONTAINER}