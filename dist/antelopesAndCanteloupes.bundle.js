/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var antelopesAndCanteloupes;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./antelopesAndCanteloupes/components/stimuliGrid.js":
/*!***********************************************************!*\
  !*** ./antelopesAndCanteloupes/components/stimuliGrid.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"STIMULI\": () => (/* binding */ STIMULI),\n/* harmony export */   \"STIMULI_GRID\": () => (/* binding */ STIMULI_GRID)\n/* harmony export */ });\nconst STIMULI_CSS = {\n    width: '200px',\n    height: '200px',\n}\n\n\nconst STIMULI_GRID = jQuery('<div/>', {\n    id: 'stimuliGrid',\n    css: {\n        display: 'flex',\n        flexDirection: 'row',\n        flexWrap: 'wrap',\n        gap: '10px',\n        width: '430px',\n        marginTop: 'auto',\n        marginBottom: 'auto',\n        justifyContent: 'center'\n    }\n})\n\n\nconst STIMULI = [\n    jQuery('<img/>', {id: 'stimuli1', css: STIMULI_CSS}),\n    jQuery('<img/>', {id: 'stimuli2', css: STIMULI_CSS}),\n    jQuery('<img/>', {id: 'stimuli3', css: STIMULI_CSS}),\n    jQuery('<img/>', {id: 'stimuli4', css: STIMULI_CSS})\n]\n\n\nSTIMULI_GRID.append(...STIMULI)\n\n\n\n\n//# sourceURL=webpack://js-crlab/./antelopesAndCanteloupes/components/stimuliGrid.js?");

/***/ }),

/***/ "./antelopesAndCanteloupes/constants.js":
/*!**********************************************!*\
  !*** ./antelopesAndCanteloupes/constants.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BASE_IMAGE_URL\": () => (/* binding */ BASE_IMAGE_URL),\n/* harmony export */   \"TaskType\": () => (/* binding */ TaskType)\n/* harmony export */ });\nconst BASE_IMAGE_URL = '../../static/images/readmap'\n\nconst SEMANTIC = 'semantic'\nconst PHONOLOGICAL = 'phonological'\nconst STANDARD = 'standard'\n\n\nclass TaskType {\n    static SemanticReadMap = new TaskType(SEMANTIC)\n    static PhonologicalReadMap = new TaskType(PHONOLOGICAL)\n    static StandardReadMap = new TaskType(STANDARD)\n\n    constructor(name) {\n        this.name = name\n    }\n\n    get roundSchedule() {\n        return {\n            [TaskType.PhonologicalReadMap]: [[0], [1, 2], [1], [2, 3], [2], [3, 1]]\n        }[this]\n    }\n\n    get stimuli() {\n        return {\n            [TaskType.PhonologicalReadMap]: ['can', 'coin', 'cone', 'corn']\n        }[this]\n    }\n\n    static fromString(string) {\n        switch(string) {\n            case SEMANTIC:\n                return TaskType.SemanticReadMap\n            case PHONOLOGICAL:\n                return TaskType.PhonologicalReadMap\n            case STANDARD:\n                return TaskType.StandardReadMap\n            default:\n                throw new Error(`Undefined task type: ${string}`)\n        }\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./antelopesAndCanteloupes/constants.js?");

/***/ }),

/***/ "./antelopesAndCanteloupes/screens/base.js":
/*!*************************************************!*\
  !*** ./antelopesAndCanteloupes/screens/base.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BaseScreen\": () => (/* binding */ BaseScreen)\n/* harmony export */ });\n/* harmony import */ var _shared_screens_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/screens/base */ \"./shared/screens/base.js\");\n/* harmony import */ var _components_stimuliGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/stimuliGrid */ \"./antelopesAndCanteloupes/components/stimuliGrid.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./antelopesAndCanteloupes/constants.js\");\n\n\n\n\n\nclass BaseScreen extends _shared_screens_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n    \n    setStimuliImages() {\n        const imageUrls = this.task.taskType.stimuli.map((stimuli) => `${_constants__WEBPACK_IMPORTED_MODULE_2__.BASE_IMAGE_URL}/${stimuli}1.jpg`)\n        _components_stimuliGrid__WEBPACK_IMPORTED_MODULE_1__.STIMULI.map((stimulus, index) => stimulus.attr({src: imageUrls[index]}))\n    }\n\n    updateReminders() {\n        this.renderer.reminders.map((reminder) => reminder.hide())\n        this.game.currentRound.getStimuliSchedule().map((stimulus, index) => {\n            const reminder = this.renderer.reminders[index]\n            reminder.show()\n            reminder.attr({src: `${BASE_URL}/${stimulus}1.jpg`})\n            if (this.game.currentRound.getSearchStimuli() === stimulus) {\n                reminder.css({border: '1px solid #FF0000'})\n            } else {\n                reminder.css({border: '1px solid #000000'})\n            }\n        })\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./antelopesAndCanteloupes/screens/base.js?");

/***/ }),

/***/ "./antelopesAndCanteloupes/screens/instructions.js":
/*!*********************************************************!*\
  !*** ./antelopesAndCanteloupes/screens/instructions.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InstructionsOne\": () => (/* binding */ InstructionsOne)\n/* harmony export */ });\n/* harmony import */ var _shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/instructionButtons */ \"./shared/components/instructionButtons.js\");\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _components_stimuliGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/stimuliGrid */ \"./antelopesAndCanteloupes/components/stimuliGrid.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ \"./antelopesAndCanteloupes/screens/base.js\");\n\n\n\n\n\n\nconst DEFAULT_TEXT_CSS = {\n    color: \"#000000\",\n    textAlign: \"center\",\n    fontSize: \"3vh\",\n    minWidth: \"100vw\",\n    whiteSpace: \"pre-line\",\n    lineHeight: \"1.7em\",\n    marginBottom: '',\n    marginTop: ''\n}\n\n\nclass InstructionsOne extends _base__WEBPACK_IMPORTED_MODULE_3__.BaseScreen {\n    components = new Map([\n        [_components_stimuliGrid__WEBPACK_IMPORTED_MODULE_2__.STIMULI_GRID, {}],\n        [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {css: DEFAULT_TEXT_CSS}],\n        [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__.INSTRUCTION_BUTTON_CONTAINER, {}]\n    ])\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.instructionButtonClickHandler('next'),\n            previousButton: () => this.instructionButtonClickHandler('previous')\n        }\n    }\n\n    render() {\n        this.setStimuliImages()\n        this.updateText(`Every screen will show pictures of a ${this.task.taskType.stimuli[0]}, a ${this.task.taskType.stimuli[1]}, a ${this.task.taskType.stimuli[2]}, and ${this.task.taskType.stimuli[3]}, but the exact pictures will change.`)\n        super.render()\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./antelopesAndCanteloupes/screens/instructions.js?");

/***/ }),

/***/ "./antelopesAndCanteloupes/task.js":
/*!*****************************************!*\
  !*** ./antelopesAndCanteloupes/task.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./antelopesAndCanteloupes/constants.js\");\n/* harmony import */ var _shared_screens_inputDevices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/screens/inputDevices */ \"./shared/screens/inputDevices.js\");\n/* harmony import */ var _shared_screens_participantID__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/screens/participantID */ \"./shared/screens/participantID.js\");\n/* harmony import */ var _screens_instructions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/instructions */ \"./antelopesAndCanteloupes/screens/instructions.js\");\n/* harmony import */ var _shared_components_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/container */ \"./shared/components/container.js\");\n\n\n\n\n\n\n\nclass Task {\n    constructor(engine, taskType) {\n        this.engine = engine\n        this.taskType = _constants__WEBPACK_IMPORTED_MODULE_0__.TaskType.fromString(taskType)        \n        this.rounds = []\n\n        this.initializeScreens()\n    }\n\n    initializeScreens() {\n        jQuery(\"#Questions\").remove()\n        jQuery(\"#PushStickyFooter\").remove()\n        jQuery(\"#Plug\").hide()\n        jQuery(\".SkinInner\").hide()\n        jQuery(\"#Wrapper\").append(_shared_components_container__WEBPACK_IMPORTED_MODULE_4__.CONTAINER)\n\n        const instructionScreens = [\n            new _shared_screens_participantID__WEBPACK_IMPORTED_MODULE_2__.ParticipantIdScreen(this),\n            new _shared_screens_inputDevices__WEBPACK_IMPORTED_MODULE_1__.InputDevicesScreen(this),\n            new _screens_instructions__WEBPACK_IMPORTED_MODULE_3__.InstructionsOne(this)\n        ]\n\n        for (let i=0; i<instructionScreens.length; i++) {\n            if (i < instructionScreens.length - 1) {\n                instructionScreens[i].nextScreen = instructionScreens[i + 1]\n            }\n            if (i > 0) {\n                instructionScreens[i].previousScreen = instructionScreens[i - 1]\n            }\n             \n        }\n        this.currentScreen = instructionScreens[0]\n        this.currentScreen.render()\n    }\n\n    stopClickHandler(startTime) {\n        if (Date.now() - startTime > 500) {\n            jQuery('#Wrapper').off('click')\n            this.nextScreen(this.currentScreen.nextScreen)\n        }\n    }\n\n    inputDeviceClickHandler(inputDevice) {\n        this.inputDevice = inputDevice\n        this.nextScreen(this.currentScreen.nextScreen)\n    }\n\n    nextScreen(screenClass) {\n        this.currentScreen = new screenClass(this.renderer, this.config, this)\n        this.currentScreen.render()\n    }\n\n    instructionButtonClickHandler(functionName) {\n        let ScreenClass = this.currentScreen.nextScreen\n        if (functionName === 'previous') {\n            ScreenClass = this.currentScreen.previousScreen\n        }\n        this.nextScreen(ScreenClass)\n    }\n\n    stimuliButtonClickHandler(stimuli) {\n        this.currentRound.currentTrial.selections.push(stimuli)\n        this.currentRound.currentTrial.selectionTimes.push(Date.now())\n        if (this.currentRound.currentTrial.searchStimuli === stimuli) {\n            let nextScreen = StopScreen\n            if (!this.currentRound.shouldBeginExperiment()) {\n                nextScreen = TrialScreen\n                this.currentRound.incrementScheduleIndex()\n                this.currentRound.newTrial()\n            }\n            this.nextScreen(nextScreen)\n        }\n    }\n\n    get currentRound() {\n        return this.rounds[this.rounds.length - 1]\n    }\n\n    newRound() {\n        this.rounds.push(\n            new Round(this.config.stimuli, this.config.roundSchedule[this.rounds.length])\n        )\n    }\n\n    isDone() {\n        return this.rounds.length === this.config.roundSchedule.length\n    }\n\n    submit() {\n        const searchStimuli = []\n        const imageNumbers = []\n        const stimuliOrdering = []\n        const selections = []\n        const selectionTimes = []\n        const trialTypes = []\n        const timedOut = []\n        this.rounds.map((round) => {\n            round.trials.map((trial) => {\n                searchStimuli.push(trial.searchStimuli)\n                imageNumbers.push(trial.imageNumbers.join(';'))\n                stimuliOrdering.push(trial.stimuli.join(';'))\n                selections.push(trial.selections.join(';'))\n                selectionTimes.push(trial.selectionTimes.map((selectionTime) => selectionTime - trial.startTime).join(';'))\n                trialTypes.push(trial.trialType.name)\n                timedOut.push(!trial.selections.includes(trial.searchStimuli))\n            })\n        })\n        if (IS_QUALTRICS) {\n            setTimeout(() => this.engine.clickNextButton(), 500)\n        }\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./antelopesAndCanteloupes/task.js?");

/***/ }),

/***/ "./shared/components/container.js":
/*!****************************************!*\
  !*** ./shared/components/container.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CONTAINER\": () => (/* binding */ CONTAINER)\n/* harmony export */ });\nconst CONTAINER = jQuery('<div/>', {\n    id: 'container', \n    css: {\n        display: 'flex',\n        flexDirection: 'column',\n        minHeight: '100vh',\n        background: '#f0f0f0',\n        alignItems: 'center',\n        justifyContent: 'center',\n        fontFamiliy: 'Poppins,Verdana,sans-serif'\n    }\n})\n\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/components/container.js?");

/***/ }),

/***/ "./shared/components/inputDevices.js":
/*!*******************************************!*\
  !*** ./shared/components/inputDevices.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"INPUT_DEVICE_CONTAINER\": () => (/* binding */ INPUT_DEVICE_CONTAINER),\n/* harmony export */   \"INPUT_DEVICE_LABEL_CONTAINER\": () => (/* binding */ INPUT_DEVICE_LABEL_CONTAINER)\n/* harmony export */ });\n/* harmony import */ var _static_images_joystick_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../static/images/joystick.png */ \"./static/images/joystick.png\");\n/* harmony import */ var _static_images_mouse_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/images/mouse.png */ \"./static/images/mouse.png\");\n/* harmony import */ var _static_images_touchscreen_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/images/touchscreen.png */ \"./static/images/touchscreen.png\");\n/* harmony import */ var _static_images_trackpad_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/images/trackpad.png */ \"./static/images/trackpad.png\");\n\n\n\n\n\n\nconst DEVICE_LABEL_CSS = {\n    color: '#000000',\n    width: '15%',\n    marginLeft: 'auto',\n    marginRight: 'auto',\n    textAlign: 'center',\n    fontSize: '30px'\n}\n\n\nconst DEVICE_BUTTON_CSS = {\n    width: '15%',\n    marginLeft: 'auto',\n    marginRight: 'auto'\n}\n\n\nconst INPUT_DEVICE_CONTAINER = jQuery('<div/>', {\n    id: 'inputDeviceContainer', \n    css: {\n        display: 'flex',\n        flexDirection: 'row',\n        justifyContent: 'flex-end',\n        minWidth: '100%',\n        marginTop: 'auto'\n    }\n})\n\n\nconst TOUCHSCREEN_BUTTON = jQuery('<img/>', {\n    id: 'touchscreenButton', \n    css: DEVICE_BUTTON_CSS,\n    src: _static_images_touchscreen_png__WEBPACK_IMPORTED_MODULE_2__,\n}).hover(\n    () => TOUCHSCREEN_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => TOUCHSCREEN_BUTTON.css({background: 'transparent'})\n)\n\n\nconst TRACKPAD_BUTTON = jQuery('<img/>', {\n    id: 'trackpadButton',\n    css: DEVICE_BUTTON_CSS,\n    src: _static_images_trackpad_png__WEBPACK_IMPORTED_MODULE_3__,\n}).hover(\n    () => TRACKPAD_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => TRACKPAD_BUTTON.css({background: 'transparent'})\n)\n\n\nconst MOUSE_BUTTON = jQuery('<img/>', {\n    id: 'mouseButton',\n    css: DEVICE_BUTTON_CSS,\n    src: _static_images_mouse_png__WEBPACK_IMPORTED_MODULE_1__,\n}).hover(\n    () => MOUSE_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => MOUSE_BUTTON.css({background: 'transparent'})\n)\n\n\nconst OTHER_BUTTON = jQuery('<img/>', {\n    id: 'otherButton',\n    css: DEVICE_BUTTON_CSS,\n    src: _static_images_joystick_png__WEBPACK_IMPORTED_MODULE_0__,\n}).hover(\n    () => OTHER_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => OTHER_BUTTON.css({background: 'transparent'})\n)\n\n\nconst INPUT_DEVICE_LABEL_CONTAINER = jQuery('<div/>', {id: 'inputDeviceLabelContainer', css: {\n    display: 'flex',\n    flexDirection: 'row',\n    justifyContent: 'flex-end',\n    minWidth: '100%',\n    marginTop: '2.5%',\n    marginBottom: 'auto',\n    fontFamily: 'Arial'\n}})\n\n\nconst MOUSE_LABEL = jQuery('<div/>', {id: 'mouseLabel', css: DEVICE_LABEL_CSS}).text('Mouse')\nconst TRACKPAD_LABEL = jQuery('<div/>', {id: 'trackpadLabel', css: DEVICE_LABEL_CSS,}).text('Trackpad')\nconst TOUCHSCREEN_LABEL = jQuery('<div/>', {id: 'touchscreenLabel', css: DEVICE_LABEL_CSS}).text('Touchscreen')\nconst OTHER_LABEL = jQuery('<div/>', {id: 'otherLabel', css: DEVICE_LABEL_CSS}).text('Other')\n\n\nINPUT_DEVICE_CONTAINER.append(MOUSE_BUTTON, TRACKPAD_BUTTON, TOUCHSCREEN_BUTTON, OTHER_BUTTON)\nINPUT_DEVICE_LABEL_CONTAINER.append(MOUSE_LABEL, TRACKPAD_LABEL,TOUCHSCREEN_LABEL, OTHER_LABEL)\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/components/inputDevices.js?");

/***/ }),

/***/ "./shared/components/instructionButtons.js":
/*!*************************************************!*\
  !*** ./shared/components/instructionButtons.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"INSTRUCTION_BUTTON_CONTAINER\": () => (/* binding */ INSTRUCTION_BUTTON_CONTAINER)\n/* harmony export */ });\nconst INSTRUCTION_BUTTON_CONTAINER = jQuery('<div/>', {\n    id: 'instructionButtonContainer', \n    css: {\n        display: 'flex',\n        flexDirection: 'row',\n        justifyContent: 'flex-end',\n        minWidth: '100%',\n        marginTop: 'auto',\n        marginBottom: '4vh',\n        fontFamily: 'Arial',\n        textAlign: 'center'\n    }\n})\n\n\nconst NEXT_BUTTON = jQuery('<div/>', {\n    id: 'nextButton',\n    css: {\n        color: '#000000',\n        background: '#A8A8A8',\n        fontSize: '25pt',\n        padding: '0.5em',\n        marginLeft: 'auto',\n        marginRight: '5vw',\n    },\n    text: 'Next >>'\n}).hover(\n    () => NEXT_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => NEXT_BUTTON.css({background: '#A8A8A8'})\n)\n\n\nconst PREVIOUS_BUTTON = jQuery('<div/>', {\n    id: 'previousButton',\n    css: {\n        color: '#000000',\n        background: '#A8A8A8',\n        fontSize: '25pt',\n        padding: '0.5em',\n        marginLeft: '5vw',\n    },\n    text: '<< Previous'\n}).hover(\n    () => PREVIOUS_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => PREVIOUS_BUTTON.css({background: '#A8A8A8'})\n)\n\n\nINSTRUCTION_BUTTON_CONTAINER.append(PREVIOUS_BUTTON, NEXT_BUTTON)\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/components/instructionButtons.js?");

/***/ }),

/***/ "./shared/components/participantID.js":
/*!********************************************!*\
  !*** ./shared/components/participantID.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PARTICIPANT_ID_CONTAINER\": () => (/* binding */ PARTICIPANT_ID_CONTAINER)\n/* harmony export */ });\nconst PARTICIPANT_ID_CONTAINER = jQuery(\"<div/>\", {\n    id: 'participantIdContainer', \n    css: {\n        display: 'flex',\n        flexDirection: 'row',\n        fontFamily: 'Arial',\n        alignItems: 'center',\n        minWidth: '100%'\n    }\n})\n\n\nconst PARTICIPANT_ID_LABEL = jQuery('<div/>', {\n    id: 'participantIdLabel',\n    text: 'Participant ID',\n    css: {\n        fontSize: '35pt',\n        color: '#000000',\n        marginLeft: 'auto',\n        marginRight: '20px'\n    }\n})\n\nconst PARTICIPANT_ID_INPUT = jQuery('<input/>', {\n    id: 'participantIdInput',\n    css: {\n        fontSize: '25pt',\n        height: '65px'\n    }\n})\n\n\nconst SUBMIT_BUTTON = jQuery('<div/>', {\n    id: 'submitButton',\n    css: {\n        color: '#000000',\n        background: '#A8A8A8',\n        fontSize: '25pt',\n        padding: '0.5em',\n        marginLeft: '20px',\n        marginRight: 'auto'\n    },\n    text: 'Submit'\n\n}).hover(\n    () => SUBMIT_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => SUBMIT_BUTTON.css({background: '#A8A8A8'})\n)\n\nPARTICIPANT_ID_CONTAINER.append(PARTICIPANT_ID_LABEL, PARTICIPANT_ID_INPUT, SUBMIT_BUTTON)\n\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/components/participantID.js?");

/***/ }),

/***/ "./shared/components/textContainer.js":
/*!********************************************!*\
  !*** ./shared/components/textContainer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TEXT_CONTAINER\": () => (/* binding */ TEXT_CONTAINER)\n/* harmony export */ });\nconst TEXT_CONTAINER = jQuery(\"<div/>\", {\n    id: 'textContainer', \n    css: {\n        color: '#000000',\n        textAlign: 'center',\n        fontSize: '60pt',\n        minWidth: '100vw',\n        whiteSpace: 'pre-line',\n        lineHeight: '1.7em',\n        marginTop: 'auto',\n        marginBottom: 'auto',\n        fontFamily: 'Arial'\n    }\n})\n\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/components/textContainer.js?");

/***/ }),

/***/ "./shared/screens/base.js":
/*!********************************!*\
  !*** ./shared/screens/base.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Screen)\n/* harmony export */ });\n/* harmony import */ var _shared_components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/container */ \"./shared/components/container.js\");\n\n\n\nclass Screen {\n    constructor(task) {\n        this.task = task\n        this.previousScreen = null\n        this.nextScreen = null\n        this.renderTime = null\n    }\n\n    get clickHandlers() {\n        return {}\n    }\n\n    render() {\n        _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.children().detach()\n        for (const [component, settings] of this.components.entries()) {\n            for (const [setting, value] of Object.entries(settings)) {\n                component[setting](value)\n            }\n            _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.append(component)\n        }\n        this.updateClickHandlers()\n        this.renderTime = Date.now()\n    }\n\n    updateClickHandlers() {\n        for (const [id, callback] of Object.entries(this.clickHandlers)) {\n            const element = jQuery(`#${id}`)\n            element.off('click')\n            element.click(callback)\n        }\n    }\n\n    updateText(text, css={fontSize: '60pt', fontColor: '#000000'}) {\n        jQuery('#textContainer').text(text).css(css)\n    }\n\n    inputDeviceClickHandler(inputDevice) {\n        this.task.inputDevice = inputDevice\n        this.task.currentScreen = this.nextScreen\n        this.task.currentScreen.render()\n    }\n\n    instructionButtonClickHandler(action) {\n        switch (action) {\n            case 'previous':\n                this.task.currentScreen = this.previousScreen\n                break\n            case 'next':\n                this.task.currentScreen = this.nextScreen\n                break\n        }\n        this.task.currentScreen.render()\n    }\n\n    containerClickHandler(nextItem) {\n        if (Date.now() - this.renderTime > 500) {\n            _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.off('click')\n            if (nextItem) {\n                this.task.dataIndex++\n            }\n            this.task.currentScreen = this.task.trialScreen\n            this.task.currentScreen.render()\n        }\n    }\n}\n\n//# sourceURL=webpack://js-crlab/./shared/screens/base.js?");

/***/ }),

/***/ "./shared/screens/inputDevices.js":
/*!****************************************!*\
  !*** ./shared/screens/inputDevices.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InputDevicesScreen\": () => (/* binding */ InputDevicesScreen)\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./shared/screens/base.js\");\n/* harmony import */ var _components_inputDevices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/inputDevices */ \"./shared/components/inputDevices.js\");\n/* harmony import */ var _components_textContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/textContainer */ \"./shared/components/textContainer.js\");\n\n\n\n\nclass InputDevicesScreen extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    components = new Map([\n        [_components_inputDevices__WEBPACK_IMPORTED_MODULE_1__.INPUT_DEVICE_CONTAINER, {}],\n        [_components_inputDevices__WEBPACK_IMPORTED_MODULE_1__.INPUT_DEVICE_LABEL_CONTAINER, {}],\n        [_components_textContainer__WEBPACK_IMPORTED_MODULE_2__.TEXT_CONTAINER, {\n            text: 'Please choose your input device to start.',\n            css: {fontSize: '45pt'}\n        }],\n    ])\n\n    get clickHandlers() {\n        return {\n            mouseButton: () => this.inputDeviceClickHandler('mouse'),\n            trackpadButton: () => this.inputDeviceClickHandler('trackpad'),\n            touchscreenButton: () => this.inputDeviceClickHandler('touchscreen'),\n            otherButton: () => this.inputDeviceClickHandler('other'),\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/screens/inputDevices.js?");

/***/ }),

/***/ "./shared/screens/participantID.js":
/*!*****************************************!*\
  !*** ./shared/screens/participantID.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ParticipantIdScreen\": () => (/* binding */ ParticipantIdScreen)\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./shared/screens/base.js\");\n/* harmony import */ var _components_participantID__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/participantID */ \"./shared/components/participantID.js\");\n\n\n\n\nclass ParticipantIdScreen extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    components = new Map([\n        [_components_participantID__WEBPACK_IMPORTED_MODULE_1__.PARTICIPANT_ID_CONTAINER, {}],\n    ])\n\n    get clickHandlers() {\n        return {submitButton: () => this.handleSubmit()}\n    }\n\n    handleSubmit() {\n        this.task.participantID = jQuery('#participantIdInput')[0].value\n        this.task.currentScreen = this.nextScreen\n        this.task.currentScreen.render()\n    }\n}\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/screens/participantID.js?");

/***/ }),

/***/ "./static/images/joystick.png":
/*!************************************!*\
  !*** ./static/images/joystick.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"09266e10475fea030f5d.png\";\n\n//# sourceURL=webpack://js-crlab/./static/images/joystick.png?");

/***/ }),

/***/ "./static/images/mouse.png":
/*!*********************************!*\
  !*** ./static/images/mouse.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"61b7cb57c03ffecee052.png\";\n\n//# sourceURL=webpack://js-crlab/./static/images/mouse.png?");

/***/ }),

/***/ "./static/images/touchscreen.png":
/*!***************************************!*\
  !*** ./static/images/touchscreen.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0fb8531231b5724cb5de.png\";\n\n//# sourceURL=webpack://js-crlab/./static/images/touchscreen.png?");

/***/ }),

/***/ "./static/images/trackpad.png":
/*!************************************!*\
  !*** ./static/images/trackpad.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"20da724564a7fae46e8b.png\";\n\n//# sourceURL=webpack://js-crlab/./static/images/trackpad.png?");

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
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 	var __webpack_exports__ = __webpack_require__("./antelopesAndCanteloupes/task.js");
/******/ 	antelopesAndCanteloupes = __webpack_exports__;
/******/ 	
/******/ })()
;