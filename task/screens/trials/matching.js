import { TEXT_CONTAINER } from "../../../shared/components/textContainer";
import { TWO_LETTER_CONTAINER, left2, right2, topimage } from "../../../shared/components/letterContainer";
import Screen from "../base";

class CrossCaseLetterTrialScreen extends Screen {
    get components() {
        return new Map([
            [TEXT_CONTAINER, { text: '+', addClass: 'base-text extra-large-text large-fixed-height' }],
            [topimage, {}],
            [TWO_LETTER_CONTAINER, {}]
        ]);
    }

    get clickHandlers() {
        return {
            left2: (event) => this.proceedClickHandler(event, 'left'),
            right2: (event) => this.proceedClickHandler(event, 'right')
        };
    }

    proceedClickHandler(event, location) {
        event.stopPropagation();
        clearTimeout(this.timeoutID);

        this.orchestrator.currentTrial.responseTime = new Date();
        this.orchestrator.currentTrial.ResponseLocation = location;
        this.orchestrator.currentTrial.Response = this.orchestrator.currentTrial.location[location];
        const isPractice = this.orchestrator.currentTrial.TrialType === 'Practice';

        if (!this.orchestrator.currentTrial.isCorrect() && isPractice) {
            this.orchestrator.replay();
        } else {
            this.orchestrator.next();
        }
        TEXT_CONTAINER.show();
    }

    startTrial() {
        TWO_LETTER_CONTAINER.hide()
        left2.text(this.orchestrator.currentTrial.leftimage)
        right2.text(this.orchestrator.currentTrial.rightimage)
        topimage.text(this.orchestrator.currentTrial.topimage)
        setTimeout(() => {
            TEXT_CONTAINER.hide()
            TWO_LETTER_CONTAINER.show()
            this.timeoutID = setTimeout(() => {
                this.orchestrator.currentTrial.TimedOut = true
                this.orchestrator.currentTrial.responseTime = new Date()
                this.orchestrator.timedOut()
                TEXT_CONTAINER.show()
            }, this.orchestrator.variant.timeToTimeout)
        }, this.orchestrator.variant.fixationDuration)
    }
}

export { CrossCaseLetterTrialScreen }