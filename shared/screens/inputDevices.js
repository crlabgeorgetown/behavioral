import Screen from "./base"
import { INPUT_DEVICE_CONTAINER, INPUT_DEVICE_LABEL_CONTAINER } from "../components/inputDevices"
import { TEXT_CONTAINER } from "../components/textContainer"

export default class InputDevicesScreen extends Screen {
    components = [
        INPUT_DEVICE_CONTAINER,
        INPUT_DEVICE_LABEL_CONTAINER,
        TEXT_CONTAINER,
    ]
    text = 'Please choose your input device to start.'

    get clickHandlers() {
        return {
            mouseButton: () => this.inputDeviceClickHandler('mouse'),
            trackpadButton: () => this.inputDeviceClickHandler('trackpad'),
            touchscreenButton: () => this.inputDeviceClickHandler('touchscreen'),
            otherButton: () => this.inputDeviceClickHandler('other'),
        }
    }
}