import Beep from '../../static/wordReading/beep_440Hz_300ms.wav'
import PictureNamingBeep from '../../static/pictureNaming/99_ETID.wav'

import { InstructionOne, InstructionTwo, ParticipantId } from "../screens/instruction"
import { LetsPractice } from '../screens/transition'
import { PictureNamingTrial } from '../trials/pictureNaming'
import PictureNamingTrialScreen from '../screens/trials/pictureNaming'


class PictureNaming {
    constructor() {
        this.screens = [
            ParticipantId,
            InstructionOne,
            InstructionTwo,
            LetsPractice
        ]
        this.testNameShort = 'PictureNamingReadMap'
        this.buildTestID = 237
        this.ePrimeTemplateID = 99
        this.instructionOne = 'You will see a picture on the screen.\nName the picture as soon as you see it.'
        this.instructionTwo = 'Give the best one-word name for each picture.'
        this.beginAudio = new Audio(PictureNamingBeep)
        this.fixationAudio = new Audio(Beep)
        this.fixationDuration = 100
        this.timeToTimeout = 10000
        this.trialClass = PictureNamingTrial
        this.trialScreenClass = PictureNamingTrialScreen

    }
}


export { PictureNaming }