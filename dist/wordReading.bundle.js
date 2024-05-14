/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var wordReading;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./shared/components/beginOrPractice.js":
/*!**********************************************!*\
  !*** ./shared/components/beginOrPractice.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BEGIN_OR_PRACTICE_CONTAINER: () => (/* binding */ BEGIN_OR_PRACTICE_CONTAINER)\n/* harmony export */ });\nconst BEGIN_OR_PRACTICE_CONTAINER = jQuery('<div/>', {\n    id: 'instructionButtonContainer', \n    class: 'instruction-button-container'\n})\n\n\nconst PRACTICE_BUTTON = jQuery('<div/>', {\n    id: 'practiceButton',\n    class: 'grey-button medium-button-text left-margined',\n    text: '<< Practice'\n}).hover(\n    () => PRACTICE_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => PRACTICE_BUTTON.css({background: '#A8A8A8'})\n)\n\n\nconst BEGIN_BUTTON = jQuery('<div/>', {\n    id: 'beginButton',\n    class: 'grey-button medium-button-text right-margined',\n    text: 'Begin >>'\n}).hover(\n    () => BEGIN_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => BEGIN_BUTTON.css({background: '#A8A8A8'})\n)\n\n\nBEGIN_OR_PRACTICE_CONTAINER.append(PRACTICE_BUTTON, BEGIN_BUTTON)\n\n\n\n//# sourceURL=webpack://behavioral/./shared/components/beginOrPractice.js?");

/***/ }),

/***/ "./shared/components/container.js":
/*!****************************************!*\
  !*** ./shared/components/container.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CONTAINER: () => (/* binding */ CONTAINER)\n/* harmony export */ });\nconst CONTAINER = jQuery('<div/>', {\n    id: 'container', \n    css: {\n        display: 'flex',\n        flexDirection: 'column',\n        minHeight: '100vh',\n        background: '#f0f0f0',\n        alignItems: 'center',\n        justifyContent: 'center',\n        fontFamiliy: 'Poppins,Verdana,sans-serif'\n    }\n})\n\n\n\n\n//# sourceURL=webpack://behavioral/./shared/components/container.js?");

/***/ }),

/***/ "./shared/components/instructionButtons.js":
/*!*************************************************!*\
  !*** ./shared/components/instructionButtons.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   INSTRUCTION_BUTTON_CONTAINER: () => (/* binding */ INSTRUCTION_BUTTON_CONTAINER)\n/* harmony export */ });\nconst INSTRUCTION_BUTTON_CONTAINER = jQuery('<div/>', {\n    id: 'instructionButtonContainer', \n    class: 'instruction-button-container'\n})\n\n\nconst NEXT_BUTTON = jQuery('<div/>', {\n    id: 'nextButton',\n    class: 'grey-button medium-button-text right-margined',\n    text: 'Next >>',\n    ontouchstart: ''\n})\n\n\nconst PREVIOUS_BUTTON = jQuery('<div/>', {\n    id: 'previousButton',\n    class: 'grey-button medium-button-text left-margined',\n    text: '<< Previous',\n    ontouchstart: ''\n})\n\n\nINSTRUCTION_BUTTON_CONTAINER.append(PREVIOUS_BUTTON, NEXT_BUTTON)\n\n\n\n//# sourceURL=webpack://behavioral/./shared/components/instructionButtons.js?");

/***/ }),

/***/ "./shared/components/participantID.js":
/*!********************************************!*\
  !*** ./shared/components/participantID.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PARTICIPANT_ID_CONTAINER: () => (/* binding */ PARTICIPANT_ID_CONTAINER)\n/* harmony export */ });\nconst PARTICIPANT_ID_CONTAINER = jQuery(\"<div/>\", {\n    id: 'participantIdContainer', \n    class: \"participant-id-container\"\n})\n\n\nconst PARTICIPANT_ID_LABEL = jQuery('<div/>', {\n    id: 'participantIdLabel',\n    class: 'participant-id-label',\n    text: 'Participant ID'\n})\n\nconst PARTICIPANT_ID_INPUT = jQuery('<input/>', {\n    id: 'participantIdInput',\n    class: 'participant-id-input'\n})\n\n\nconst SUBMIT_BUTTON = jQuery('<div/>', {\n    id: 'submitButton',\n    class: 'grey-button large-button-text left-margined',\n    text: 'Submit',\n    ontouchstart: ''\n\n}).hover(\n    () => SUBMIT_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => SUBMIT_BUTTON.css({background: '#A8A8A8'})\n)\n\nPARTICIPANT_ID_CONTAINER.append(PARTICIPANT_ID_LABEL, PARTICIPANT_ID_INPUT, SUBMIT_BUTTON)\n\n\n\n\n//# sourceURL=webpack://behavioral/./shared/components/participantID.js?");

/***/ }),

/***/ "./shared/components/rightChevron.js":
/*!*******************************************!*\
  !*** ./shared/components/rightChevron.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PROCEED_CONTAINER: () => (/* binding */ PROCEED_CONTAINER)\n/* harmony export */ });\n/* harmony import */ var _static_images_rightChevron_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../static/images/rightChevron.png */ \"./static/images/rightChevron.png\");\n\n\n\nconst RIGHT_CHEVRON = jQuery('<img/>', {id: 'rightChevron', class: 'right-chevron', src: _static_images_rightChevron_png__WEBPACK_IMPORTED_MODULE_0__})\n\nconst PROCEED_CONTAINER = jQuery('<div/>', {\n    id: 'proceedContainer', \n    class: 'instruction-button-container'\n})\n\nPROCEED_CONTAINER.append(RIGHT_CHEVRON)\n\n\n\n//# sourceURL=webpack://behavioral/./shared/components/rightChevron.js?");

/***/ }),

/***/ "./shared/components/textContainer.js":
/*!********************************************!*\
  !*** ./shared/components/textContainer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TEXT_CONTAINER: () => (/* binding */ TEXT_CONTAINER)\n/* harmony export */ });\nconst TEXT_CONTAINER = jQuery(\"<div/>\", {id: 'textContainer'})\n\n\n\n\n//# sourceURL=webpack://behavioral/./shared/components/textContainer.js?");

/***/ }),

/***/ "./shared/qualtricsClient.js":
/*!***********************************!*\
  !*** ./shared/qualtricsClient.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QualtricsClient: () => (/* binding */ QualtricsClient)\n/* harmony export */ });\n\n\nclass QualtricsClient {\n    constructor(trialColumns, inputDevice, participantID) {\n        this.inputDevice = inputDevice\n        this.participantID = participantID\n        this.trialColumns = trialColumns\n        this.mouseMoveColumns = [\n            'firstMouseMoves',\n            'mouseMoveDurations',\n            'mouseMoveDistances',\n            'mouseMoveAverageVelocities',\n        ]\n        this.data = trialColumns.concat(this.mouseMoveColumns).reduce((obj, name) => {\n            obj[name] = []\n            return obj\n        }, {})\n    }\n\n    collectTrialData(trials) {\n        trials.forEach((trial) => {\n            const mouseMoveStats = trial.computeMousemoveStats()\n\n            this.mouseMoveColumns.forEach((columnName, index) => {\n                this.data[columnName].push(mouseMoveStats[index])\n            })\n\n            this.trialColumns.forEach((columnName) => {\n                this.data[columnName].push(trial[columnName])\n            })\n        })\n    }\n\n    submitEmbeddedData() {\n        for (const [key, values] of Object.entries(this.data)) {\n            Qualtrics.SurveyEngine.setEmbeddedData(key, values.join(';'))\n        }\n        Qualtrics.SurveyEngine.setEmbeddedData('userAgent', navigator.userAgent.replace(',', '|').replace(';','|'))\n        Qualtrics.SurveyEngine.setEmbeddedData('inputDevice', this.inputDevice)\n        Qualtrics.SurveyEngine.setEmbeddedData('SubjectID', this.participantID)\n        Qualtrics.SurveyEngine.setEmbeddedData('RecipientFirstName', 'N/A')\n        Qualtrics.SurveyEngine.setEmbeddedData('RecipientLastName', 'N/A')\n        Qualtrics.SurveyEngine.setEmbeddedData('RecipientEmail', 'N/A')\n        Qualtrics.SurveyEngine.setEmbeddedData('ExternalReference', 'N/A')\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./shared/qualtricsClient.js?");

/***/ }),

/***/ "./shared/screens/base.js":
/*!********************************!*\
  !*** ./shared/screens/base.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Screen)\n/* harmony export */ });\n/* harmony import */ var _shared_components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/container */ \"./shared/components/container.js\");\n\n\n\nclass Screen {\n    constructor(task) {\n        this.task = task\n        this.previousScreen = null\n        this.nextScreen = null\n        this.renderTime = null\n    }\n\n    get clickHandlers() {\n        return {}\n    }\n\n    render() {\n        _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.children().detach()\n        for (const [component, settings] of this.components.entries()) {\n            for (const [setting, value] of Object.entries(settings)) {\n                if (setting === 'addClass') {\n                    component.removeClass()\n                }\n                component[setting](value)\n            }\n            _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.append(component)\n        }\n        this.updateClickHandlers()\n        this.renderTime = new Date()\n    }\n\n    updateClickHandlers() {\n        for (const [id, callback] of Object.entries(this.clickHandlers)) {\n            const element = jQuery(`#${id}`)\n            element.off('click')\n            element.on('click', () => callback())\n        }\n    }\n\n    inputDeviceClickHandler(inputDevice) {\n        this.task.inputDevice = inputDevice\n        this.task.currentScreen = this.nextScreen\n        this.task.currentScreen.render()\n    }\n\n    instructionButtonClickHandler(action) {\n        switch (action) {\n            case 'previous':\n                this.task.currentScreen = this.previousScreen\n                break\n            case 'next':\n                this.task.currentScreen = this.nextScreen\n                break\n        }\n        this.task.currentScreen.render()\n    }\n\n    audioContainerClickHandler(nextItem, audio) {\n        if (Date.now() - this.renderTime > 500) {\n            audio.addEventListener('ended', () => this.containerClickHandler(nextItem))\n            audio.play()\n        }\n    }\n\n    containerClickHandler(nextItem) {\n        if (Date.now() - this.renderTime > 500) {\n            _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.off('click')\n            if (nextItem) {\n                this.task.dataIndex++\n            }\n            this.task.currentScreen = this.task.trialScreen\n            this.task.currentScreen.render()\n        }\n    }\n}\n\n//# sourceURL=webpack://behavioral/./shared/screens/base.js?");

/***/ }),

/***/ "./shared/screens/participantID.js":
/*!*****************************************!*\
  !*** ./shared/screens/participantID.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ParticipantIdScreen: () => (/* binding */ ParticipantIdScreen)\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./shared/screens/base.js\");\n/* harmony import */ var _components_participantID__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/participantID */ \"./shared/components/participantID.js\");\n\n\n\n\nclass ParticipantIdScreen extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    components = new Map([\n        [_components_participantID__WEBPACK_IMPORTED_MODULE_1__.PARTICIPANT_ID_CONTAINER, {}],\n    ])\n\n    get clickHandlers() {\n        return {submitButton: () => this.handleSubmit()}\n    }\n\n    handleSubmit() {\n        this.task.participantID = jQuery('#participantIdInput')[0].value\n        this.task.currentScreen = this.nextScreen\n        this.task.currentScreen.render()\n    }\n}\n\n\n\n//# sourceURL=webpack://behavioral/./shared/screens/participantID.js?");

/***/ }),

/***/ "./shared/screens/transitions.js":
/*!***************************************!*\
  !*** ./shared/screens/transitions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Begin: () => (/* binding */ Begin),\n/* harmony export */   BeginOrPracticeAgain: () => (/* binding */ BeginOrPracticeAgain),\n/* harmony export */   Break: () => (/* binding */ Break),\n/* harmony export */   Finished: () => (/* binding */ Finished),\n/* harmony export */   Incorrect: () => (/* binding */ Incorrect),\n/* harmony export */   LetsPractice: () => (/* binding */ LetsPractice),\n/* harmony export */   TimeOut: () => (/* binding */ TimeOut)\n/* harmony export */ });\n/* harmony import */ var _components_textContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _components_beginOrPractice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/beginOrPractice */ \"./shared/components/beginOrPractice.js\");\n/* harmony import */ var _components_instructionButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/instructionButtons */ \"./shared/components/instructionButtons.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ \"./shared/screens/base.js\");\n\n\n\n\n\n\nclass Begin extends _base__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    components = new Map([\n        [_components_textContainer__WEBPACK_IMPORTED_MODULE_0__.TEXT_CONTAINER, {text: `Any questions?\\nLet's begin`}],\n    ])\n\n    get clickHandlers() {\n        return {container: () => this.audioContainerClickHandler(false, this.task.type.beginAudio)}\n    }\n}\n\n\nclass BeginOrPracticeAgain extends _base__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    components = new Map([\n        [_components_textContainer__WEBPACK_IMPORTED_MODULE_0__.TEXT_CONTAINER, {text: `Any questions?\\nLet's begin`}],\n        [_components_beginOrPractice__WEBPACK_IMPORTED_MODULE_1__.BEGIN_OR_PRACTICE_CONTAINER, {}]\n    ])\n\n    get clickHandlers() {\n        return {\n            practiceButton: () => this.handle('practice'),\n            beginButton: () => this.handle('begin')\n        }\n    }\n\n    handle(action) {\n        switch (action) {\n            case 'practice':\n                this.task.dataIndex = 0\n                break\n            case 'begin':\n                this.task.dataIndex++\n                break\n        }\n        this.task.currentScreen = this.task.trialScreen\n        this.task.currentScreen.render()\n    }\n}\n\n\nclass LetsPractice extends _base__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    components = new Map([\n        [_components_textContainer__WEBPACK_IMPORTED_MODULE_0__.TEXT_CONTAINER, {text: `Let's Practice.`, addClass: 'base-text extra-large-text'}],\n        [_components_instructionButtons__WEBPACK_IMPORTED_MODULE_2__.INSTRUCTION_BUTTON_CONTAINER, {}]\n    ])\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.instructionButtonClickHandler('next'),\n            previousButton: () => this.instructionButtonClickHandler('previous')\n        }\n    }\n}\n\n\nclass Break extends _base__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    components = new Map([\n        [\n            _components_textContainer__WEBPACK_IMPORTED_MODULE_0__.TEXT_CONTAINER, \n            {\n                text: 'Take a break. Click or touch anywhere to continue.',\n                addClass: 'base-text extra-large-text blue'\n            }\n        ]\n    ])\n\n    get clickHandlers() {\n        return {container: () => this.containerClickHandler(true)}\n    }\n}\n\n\nclass Incorrect extends _base__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    components = new Map([\n        [\n            _components_textContainer__WEBPACK_IMPORTED_MODULE_0__.TEXT_CONTAINER, \n            {\n                text: 'Incorrect, click or touch anywhere to try again.',\n                addClass: 'base-text extra-large-text red'\n            }\n        ]\n    ])\n\n    get clickHandlers() {\n        return {container: () => this.containerClickHandler(false)}\n    }\n}\n\n\nclass Finished extends _base__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    components = new Map([\n        [_components_textContainer__WEBPACK_IMPORTED_MODULE_0__.TEXT_CONTAINER, {addClass: 'base-text large-text', text: `You've completed this exercise!`}]\n    ])\n\n    render() {\n        setTimeout(() => this.task.submit())\n        super.render()\n    }\n}\n\n\nclass TimeOut extends _base__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    components = new Map([\n        [_components_textContainer__WEBPACK_IMPORTED_MODULE_0__.TEXT_CONTAINER, {text: 'Click or touch to continue.'}]\n    ])\n\n    get clickHandlers() {\n        return {container: () => this.containerClickHandler(true)}\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./shared/screens/transitions.js?");

/***/ }),

/***/ "./shared/task.js":
/*!************************!*\
  !*** ./shared/task.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BaseTask: () => (/* binding */ BaseTask)\n/* harmony export */ });\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/container */ \"./shared/components/container.js\");\n/* harmony import */ var _screens_transitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/transitions */ \"./shared/screens/transitions.js\");\n\n\n\nclass BaseTask {\n\n    constructor() {\n        this.recordMouseMove = this.recordMouseMove.bind(this)\n        jQuery(document).mousemove(this.recordMouseMove)\n\n        jQuery(\"#Questions\").remove()\n        jQuery(\"#PushStickyFooter\").remove()\n        jQuery(\"#Plug\").hide()\n        jQuery(\".SkinInner\").hide()\n        jQuery(\"#Wrapper\").append(_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER)\n\n        this.incorrectScreen = new _screens_transitions__WEBPACK_IMPORTED_MODULE_1__.Incorrect(this)\n        this.breakScreen = new _screens_transitions__WEBPACK_IMPORTED_MODULE_1__.Break(this)\n        this.beginScreen = new _screens_transitions__WEBPACK_IMPORTED_MODULE_1__.Begin(this)\n        this.beginOrPracticeAgainScreen = new _screens_transitions__WEBPACK_IMPORTED_MODULE_1__.BeginOrPracticeAgain(this)\n        this.finishedScreen = new _screens_transitions__WEBPACK_IMPORTED_MODULE_1__.Finished(this)\n        this.letsPracticeScreen = new _screens_transitions__WEBPACK_IMPORTED_MODULE_1__.LetsPractice(this)\n        this.timeoutScreen = new _screens_transitions__WEBPACK_IMPORTED_MODULE_1__.TimeOut(this)\n    }\n\n    setupInstructionScreens() {\n        for (let i=0; i<this.instructionScreens.length; i++) {\n            if (i < this.instructionScreens.length - 1) {\n                this.instructionScreens[i].nextScreen = this.instructionScreens[i + 1]\n            }\n            if (i > 0) {\n                this.instructionScreens[i].previousScreen = this.instructionScreens[i - 1]\n            }\n        }\n\n        this.currentScreen = this.instructionScreens[0]\n        this.currentScreen.render()\n    }\n\n    recordMouseMove(event) {\n        if (this.inTrial) {\n            this.currentTrial.recordMouseMove(Date.now(), event.clientX, event.clientY)\n        }\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./shared/task.js?");

/***/ }),

/***/ "./shared/trial.js":
/*!*************************!*\
  !*** ./shared/trial.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BaseTrial: () => (/* binding */ BaseTrial)\n/* harmony export */ });\nclass BaseTrial {\n    constructor() {\n        this.mouseMoveTimes = []\n        this.mouseMoveXPositions = []\n        this.mouseMoveYPositions = []\n    }\n\n    recordMouseMove(time, xPosition, yPosition) {\n        this.mouseMoveTimes.push(time)\n        this.mouseMoveXPositions.push(xPosition)\n        this.mouseMoveYPositions.push(yPosition)\n    }\n\n    computeMousemoveStats() {\n        const firstMouseMoveTime = this.mouseMoveTimes.length > 0 ? this.mouseMoveTimes[0] - this.startTime : 'N/A'\n        let duration = 0\n        let distance = 0\n        let avgVelocity = 'N/A'\n        let startTime = null\n        let startX = null\n        let startY = null\n        while (this.mouseMoveTimes.length > 0) {\n            let currentTime = this.mouseMoveTimes.shift() \n            let currentX = this.mouseMoveXPositions.shift()\n            let currentY = this.mouseMoveYPositions.shift()\n            if (startTime !== null || currentTime - startTime < 500) {\n                const aSquared = Math.pow(startX - currentX, 2)        \n                const bSquared = Math.pow(startY - currentY, 2)\n                distance += Math.round(Math.sqrt(aSquared + bSquared))\n                duration += currentTime - startTime\n                avgVelocity = (distance / duration).toFixed(3)\n            }\n            startTime = currentTime\n            startX = currentX\n            startY = currentY\n        }\n\n        return [firstMouseMoveTime, duration, distance, avgVelocity]\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./shared/trial.js?");

/***/ }),

/***/ "./wordReading/constants.js":
/*!**********************************!*\
  !*** ./wordReading/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TaskType: () => (/* binding */ TaskType)\n/* harmony export */ });\n/* harmony import */ var _static_wordReading_beep_440Hz_300ms_wav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../static/wordReading/beep_440Hz_300ms.wav */ \"./static/wordReading/beep_440Hz_300ms.wav\");\n/* harmony import */ var _static_wordReading_39_ETID_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/wordReading/39_ETID.wav */ \"./static/wordReading/39_ETID.wav\");\n/* harmony import */ var _static_wordReading_44_ETID_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/wordReading/44_ETID.wav */ \"./static/wordReading/44_ETID.wav\");\n/* harmony import */ var _static_wordReading_92_ETID_wav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/wordReading/92_ETID.wav */ \"./static/wordReading/92_ETID.wav\");\n/* harmony import */ var _static_wordReading_93_ETID_wav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/wordReading/93_ETID.wav */ \"./static/wordReading/93_ETID.wav\");\n/* harmony import */ var _static_wordReading_87_ETID_wav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/wordReading/87_ETID.wav */ \"./static/wordReading/87_ETID.wav\");\n/* harmony import */ var _static_wordReading_71_ETID_wav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/wordReading/71_ETID.wav */ \"./static/wordReading/71_ETID.wav\");\n\n\n\n\n\n\n\n\nconst CROSSED_REALWORD_1 = 'CROSSED_REALWORD_1'\nconst CROSSED_REALWORD_2 = 'CROSSED_REALWORD_2'\nconst PSEUDOWORD_1 = 'PSEUDOWORD_1'\nconst PSEUDOWORD_2 = 'PSEUDOWORD_2'\nconst MULTIMORPHEMIC = 'MULTIMORPHEMIC'\nconst POS_AND_LENGTH_EFFECT = 'POS_AND_LENGTH_EFFECT'\n\n\nclass TaskType {\n    static CrossedRealWord1 = new TaskType(CROSSED_REALWORD_1)\n    static CrossedRealWord2 = new TaskType(CROSSED_REALWORD_2)\n    static Pseudoword1 = new TaskType(PSEUDOWORD_1)\n    static Pseudoword2 = new TaskType(PSEUDOWORD_2)\n    static Multimorphemic = new TaskType(MULTIMORPHEMIC)\n    static POSAndLengthEffect = new TaskType(POS_AND_LENGTH_EFFECT)\n\n    constructor(name) {\n        this.name = name\n        this.trialAudio = new Audio(_static_wordReading_beep_440Hz_300ms_wav__WEBPACK_IMPORTED_MODULE_0__)\n        this.beginBeep = {\n            [CROSSED_REALWORD_1]: new Audio(_static_wordReading_39_ETID_wav__WEBPACK_IMPORTED_MODULE_1__),\n            [CROSSED_REALWORD_2]: new Audio(_static_wordReading_44_ETID_wav__WEBPACK_IMPORTED_MODULE_2__),\n            [PSEUDOWORD_1]: new Audio(_static_wordReading_92_ETID_wav__WEBPACK_IMPORTED_MODULE_3__),\n            [PSEUDOWORD_2]: new Audio(_static_wordReading_93_ETID_wav__WEBPACK_IMPORTED_MODULE_4__),\n            [MULTIMORPHEMIC]: new Audio(_static_wordReading_87_ETID_wav__WEBPACK_IMPORTED_MODULE_5__),\n            [POS_AND_LENGTH_EFFECT]: new Audio(_static_wordReading_71_ETID_wav__WEBPACK_IMPORTED_MODULE_6__)\n        }\n    }\n\n    static fromString(string) {\n        switch(string) {\n            case CROSSED_REALWORD_1:\n                return TaskType.CrossedRealWord1\n            case CROSSED_REALWORD_2:\n                return TaskType.CrossedRealWord2\n            case PSEUDOWORD_1:\n                return TaskType.Pseudoword1\n            case PSEUDOWORD_2:\n                return TaskType.Pseudoword2\n            case MULTIMORPHEMIC:\n                return TaskType.Multimorphemic\n            case POS_AND_LENGTH_EFFECT:\n                return TaskType.POSAndLengthEffect\n            default:\n                throw new Error(`Undefined task type: ${string}`)\n        }\n    }\n\n    get beginAudio() {\n        return this.beginBeep[this.name]\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./wordReading/constants.js?");

/***/ }),

/***/ "./wordReading/screens/instructions.js":
/*!*********************************************!*\
  !*** ./wordReading/screens/instructions.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InstructionsOne: () => (/* binding */ InstructionsOne)\n/* harmony export */ });\n/* harmony import */ var _shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/instructionButtons */ \"./shared/components/instructionButtons.js\");\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _shared_screens_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/screens/base */ \"./shared/screens/base.js\");\n\n\n\n\n\nclass InstructionsOne extends _shared_screens_base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    components = new Map([\n        [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {text: 'You will see a word on the screen.\\nRead the word out loud.', addClass: 'base-text large-text'}],\n        [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__.INSTRUCTION_BUTTON_CONTAINER, {}]\n    ])\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.instructionButtonClickHandler('next'),\n            previousButton: () => this.instructionButtonClickHandler('previous')\n        }\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./wordReading/screens/instructions.js?");

/***/ }),

/***/ "./wordReading/screens/trial.js":
/*!**************************************!*\
  !*** ./wordReading/screens/trial.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TrialScreen: () => (/* binding */ TrialScreen)\n/* harmony export */ });\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _shared_components_rightChevron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/rightChevron */ \"./shared/components/rightChevron.js\");\n/* harmony import */ var _shared_screens_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/screens/base */ \"./shared/screens/base.js\");\n\n\n\n\n\nclass TrialScreen extends _shared_screens_base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_0__.TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],\n            [_shared_components_rightChevron__WEBPACK_IMPORTED_MODULE_1__.PROCEED_CONTAINER, {}]\n        ])\n    }\n\n    get clickHandlers() {\n        return {\n            rightChevron: () => this.proceedClickHandler(),\n        }\n    }\n\n    proceedClickHandler() {\n        clearTimeout(this.timeoutID) \n        this.task.currentScreen = this.task.trialScreen       \n        if (this.task.currentProcedure === 'showlastpractice') {\n            this.task.currentScreen = this.task.beginScreen\n        } else if (this.task.isDone) {\n            this.task.currentScreen = this.task.finishedScreen\n        }\n        this.task.currentScreen.render()\n    }\n\n    render() {\n        this.task.newTrial()\n        if (this.task.currentProcedure === 'showasbreak') {\n            this.task.currentScreen = this.task.breakScreen\n            this.task.currentScreen.render()\n            return\n        }\n\n        super.render()\n        this.task.type.trialAudio.play()\n        setTimeout(() => {\n            _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_0__.TEXT_CONTAINER.text(`${this.task.currentTrial.Word}`)\n            this.task.inTrial = true\n            this.task.currentTrial.startTime = new Date()\n            this.timeoutID = setTimeout(() => {\n                this.task.currentScreen = this.task.timeoutScreen\n                this.task.currentScreen.render()\n            }, 10000)\n        }, 200)\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./wordReading/screens/trial.js?");

/***/ }),

/***/ "./wordReading/task.js":
/*!*****************************!*\
  !*** ./wordReading/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _shared_screens_participantID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/screens/participantID */ \"./shared/screens/participantID.js\");\n/* harmony import */ var _shared_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/task */ \"./shared/task.js\");\n/* harmony import */ var _screens_instructions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/instructions */ \"./wordReading/screens/instructions.js\");\n/* harmony import */ var _screens_trial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/trial */ \"./wordReading/screens/trial.js\");\n/* harmony import */ var _shared_qualtricsClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/qualtricsClient */ \"./shared/qualtricsClient.js\");\n/* harmony import */ var _trial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trial */ \"./wordReading/trial.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./wordReading/constants.js\");\n\n\n\n\n\n\n\n\n\nclass Task extends _shared_task__WEBPACK_IMPORTED_MODULE_1__.BaseTask {\n\tconstructor(data, engine, taskType) {\n        super()\n        \n        this.engine = engine\n        this.trials = []\n        this.data = data\n        this.inTrial = false\n        this.type = _constants__WEBPACK_IMPORTED_MODULE_6__.TaskType.fromString(taskType)\n\n        this.initializeScreens()\n\t}\n\n    initializeScreens() {\n        this.trialScreen = new _screens_trial__WEBPACK_IMPORTED_MODULE_3__.TrialScreen(this)\n\n        this.instructionScreens = [\n            new _shared_screens_participantID__WEBPACK_IMPORTED_MODULE_0__.ParticipantIdScreen(this),\n            new _screens_instructions__WEBPACK_IMPORTED_MODULE_2__.InstructionsOne(this),\n            this.letsPracticeScreen,\n            this.trialScreen,\n        ]\n\n        this.setupInstructionScreens()\n    }\n\n    get currentTrial() {\n        return this.trials[this.trials.length - 1]\n    }\n\n    get currentProcedure() {\n        return this.data[this.trials.length - 1].Procedure\n    }\n\n    get isDone() {\n        return this.data.length === this.trials.length\n    }\n\n    newTrial() {\n        this.trials.push(new _trial__WEBPACK_IMPORTED_MODULE_5__.Trial(this.data[this.trials.length]))\n    }\n\n    submit() {\n        const columns = [\n            'Word',\n            'TrialType',\n            'Repetitions',\n            'WordType',\n            'Length',\n            'Frequency',\n            'Phonemes',\n            'Syllables',\n            'PartofSpeech',\n        ]\n        if (window.location.host === \"georgetown.az1.qualtrics.com\") {\n            const qualtricsClient = new _shared_qualtricsClient__WEBPACK_IMPORTED_MODULE_4__.QualtricsClient(columns, 'mouse', this.participantID)\n            qualtricsClient.collectTrialData(this.trials)\n            qualtricsClient.submitEmbeddedData()\n            this.engine.clickNextButton()\n        }\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./wordReading/task.js?");

/***/ }),

/***/ "./wordReading/trial.js":
/*!******************************!*\
  !*** ./wordReading/trial.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Trial: () => (/* binding */ Trial)\n/* harmony export */ });\n/* harmony import */ var _shared_trial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/trial */ \"./shared/trial.js\");\n\n\nclass Trial extends _shared_trial__WEBPACK_IMPORTED_MODULE_0__.BaseTrial {\n    constructor(config) {\n        super()\n        this.Word = config.Word\n        this.TrialType = config.TrialType\n        this.Repetitions = config.Repetitions\n        this.WordType = config.WordType\n        this.Length = config.Length\n        this.Frequency = config.Frequency\n        this.Phonemes = config.Phonemes\n        this.Syllables = config.Syllables\n        this.PartofSpeech = config.PartofSpeech\n        this.Response = null\n        this.startTime = null\n        this.responseTime = null\n    }\n\n    get RT() {\n        return this.responseTime - this.startTime\n    }\n\n    get TimedOut() {\n        return this.Response === 'NR'\n    }\n\n    get Accuracy() {\n        return this.Response === this.CRESP ? 1 : 0\n    }\n\n    get Time() {\n        return this.startTime.toTimeString().split(' ')[0]\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./wordReading/trial.js?");

/***/ }),

/***/ "./static/images/rightChevron.png":
/*!****************************************!*\
  !*** ./static/images/rightChevron.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7981b55cd02dd66aaa94.png\";\n\n//# sourceURL=webpack://behavioral/./static/images/rightChevron.png?");

/***/ }),

/***/ "./static/wordReading/39_ETID.wav":
/*!****************************************!*\
  !*** ./static/wordReading/39_ETID.wav ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0ac937b0b6d647179542.wav\";\n\n//# sourceURL=webpack://behavioral/./static/wordReading/39_ETID.wav?");

/***/ }),

/***/ "./static/wordReading/44_ETID.wav":
/*!****************************************!*\
  !*** ./static/wordReading/44_ETID.wav ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"666dfb15b5d3bef4bf98.wav\";\n\n//# sourceURL=webpack://behavioral/./static/wordReading/44_ETID.wav?");

/***/ }),

/***/ "./static/wordReading/71_ETID.wav":
/*!****************************************!*\
  !*** ./static/wordReading/71_ETID.wav ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ccfb5c0d56089d35dd7e.wav\";\n\n//# sourceURL=webpack://behavioral/./static/wordReading/71_ETID.wav?");

/***/ }),

/***/ "./static/wordReading/87_ETID.wav":
/*!****************************************!*\
  !*** ./static/wordReading/87_ETID.wav ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5a76a060a378f907dad7.wav\";\n\n//# sourceURL=webpack://behavioral/./static/wordReading/87_ETID.wav?");

/***/ }),

/***/ "./static/wordReading/92_ETID.wav":
/*!****************************************!*\
  !*** ./static/wordReading/92_ETID.wav ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0340450a73c53ac5e220.wav\";\n\n//# sourceURL=webpack://behavioral/./static/wordReading/92_ETID.wav?");

/***/ }),

/***/ "./static/wordReading/93_ETID.wav":
/*!****************************************!*\
  !*** ./static/wordReading/93_ETID.wav ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"41f6870cd6c80c664aa8.wav\";\n\n//# sourceURL=webpack://behavioral/./static/wordReading/93_ETID.wav?");

/***/ }),

/***/ "./static/wordReading/beep_440Hz_300ms.wav":
/*!*************************************************!*\
  !*** ./static/wordReading/beep_440Hz_300ms.wav ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9c7fa9174eba13523787.wav\";\n\n//# sourceURL=webpack://behavioral/./static/wordReading/beep_440Hz_300ms.wav?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./wordReading/task.js");
/******/ 	wordReading = __webpack_exports__;
/******/ 	
/******/ })()
;