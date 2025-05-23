class CrossCaseLetterTrial {
    constructor(config) {
        this.ItemNum = config.ItemNum;
        this.TrialType = config.TrialType;
        this.Procedure = config.Procedure;

        this.topimage = config.topimage;
        this.leftimage = config.leftimage;
        this.rightimage = config.rightimage;

        this.location = {
            ['left']: config.leftimage,
            ['right']: config.rightimage
        }

        this.CRESP = config.CRESP;
        this.TargetLocation = config.TargetLocation;

        this.Response = '';
        this.ResponseLocation = '';

        this.startTime = null;
        this.responseTime = null;
        this.TimedOut = null;
        this.TrialWasAdministered = 1;
    }

    isCorrect() {
        return this.ResponseLocation === this.TargetLocation;
    }

    get columns() {
        return [
            ...Object.keys(this),
            'Accuracy',
            'Time',
            'Date',
            'TimedOut',
            'RT',
            'TrialWasAdministered'
        ]
    }

    get Accuracy() {
        return this.isCorrect() ? 1 : 0;
    }

    get RT() {
        return this.responseTime - this.startTime;
    }

    get Time() {
        return this.startTime.toLocaleString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h24'})
    }

    get Date() {
        return this.startTime.toLocaleDateString('en-US');
    }
}

export { CrossCaseLetterTrial }