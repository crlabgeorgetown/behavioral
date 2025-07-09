import Screen from '../components/FOUR_IMAGE_CONTAINER.js';
import { FOUR_IMAGE_CONTAINER, topleftImage, toprightImage, botleftImage, botrightImage, TEXT_CRESP_CONTAINER } from '../components/FOUR_IMAGE_CONTAINER.js';

class FOUR_IMAGE_CONTAINER_SCREEN extends Screen {
    get components() {
        return [FOUR_IMAGE_CONTAINER];
    }

    onShow() {
        super.onShow();
        FOUR_IMAGE_CONTAINER.hide();
        TEXT_CRESP_CONTAINER.hide();
    }

    onHide() {
        super.onHide();
        clearTimeout(this.timeoutID);
    }
}

export { FOUR_IMAGE_CONTAINER_SCREEN }