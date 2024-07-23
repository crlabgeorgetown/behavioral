/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var task;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./shared/components/audioContainer.js":
/*!*********************************************!*\
  !*** ./shared/components/audioContainer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AUDIO_CONTAINER: () => (/* binding */ AUDIO_CONTAINER),\n/* harmony export */   AUDIO_SOURCE: () => (/* binding */ AUDIO_SOURCE)\n/* harmony export */ });\nconst AUDIO_CONTAINER = jQuery(\"<audio/>\", {id: 'audioContainer'})\nconst AUDIO_SOURCE = jQuery(\"<source/>\", {id: 'audioSource', type: 'audio/wav'})\n\nAUDIO_CONTAINER.append(AUDIO_SOURCE)\n\n\n\n\n//# sourceURL=webpack://behavioral/./shared/components/audioContainer.js?");

/***/ }),

/***/ "./shared/components/container.js":
/*!****************************************!*\
  !*** ./shared/components/container.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CONTAINER: () => (/* binding */ CONTAINER)\n/* harmony export */ });\nconst CONTAINER = jQuery('<div/>', {\n    id: 'container', \n    css: {\n        display: 'flex',\n        flexDirection: 'column',\n        minHeight: '100vh',\n        background: '#f0f0f0',\n        alignItems: 'center',\n        justifyContent: 'center',\n        fontFamiliy: 'Poppins,Verdana,sans-serif'\n    }\n})\n\n\n\n\n//# sourceURL=webpack://behavioral/./shared/components/container.js?");

/***/ }),

/***/ "./shared/components/inputDevices.js":
/*!*******************************************!*\
  !*** ./shared/components/inputDevices.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   INPUT_DEVICE_CONTAINER: () => (/* binding */ INPUT_DEVICE_CONTAINER),\n/* harmony export */   INPUT_DEVICE_LABEL_CONTAINER: () => (/* binding */ INPUT_DEVICE_LABEL_CONTAINER)\n/* harmony export */ });\n/* harmony import */ var _static_images_joystick_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../static/images/joystick.png */ \"./static/images/joystick.png\");\n/* harmony import */ var _static_images_mouse_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/images/mouse.png */ \"./static/images/mouse.png\");\n/* harmony import */ var _static_images_touchscreen_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/images/touchscreen.png */ \"./static/images/touchscreen.png\");\n/* harmony import */ var _static_images_trackpad_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/images/trackpad.png */ \"./static/images/trackpad.png\");\n\n\n\n\n\n\nconst INPUT_DEVICE_CONTAINER = jQuery('<div/>', {id: 'inputDeviceContainer', class: 'device-container'})\n\n\nconst TOUCHSCREEN_BUTTON = jQuery('<img/>', {\n    id: 'touchscreenButton', \n    class: 'device-button',\n    src: _static_images_touchscreen_png__WEBPACK_IMPORTED_MODULE_2__,\n}).hover(\n    () => TOUCHSCREEN_BUTTON.addClass('device-hover'),\n    () => TOUCHSCREEN_BUTTON.removeClass('device-hover')\n)\n\n\nconst TRACKPAD_BUTTON = jQuery('<img/>', {\n    id: 'trackpadButton',\n    class: 'device-button',\n    src: _static_images_trackpad_png__WEBPACK_IMPORTED_MODULE_3__,\n}).hover(\n    () => TRACKPAD_BUTTON.addClass('device-hover'),\n    () => TRACKPAD_BUTTON.removeClass('device-hover')\n)\n\n\nconst MOUSE_BUTTON = jQuery('<img/>', {\n    id: 'mouseButton',\n    class: 'device-button',\n    src: _static_images_mouse_png__WEBPACK_IMPORTED_MODULE_1__,\n}).hover(\n    () => MOUSE_BUTTON.addClass('device-hover'),\n    () => MOUSE_BUTTON.removeClass('device-hover')\n)\n\n\nconst OTHER_BUTTON = jQuery('<img/>', {\n    id: 'otherButton',\n    class: 'device-button',\n    src: _static_images_joystick_png__WEBPACK_IMPORTED_MODULE_0__,\n}).hover(\n    () => OTHER_BUTTON.addClass('device-hover'),\n    () => OTHER_BUTTON.removeClass('device-hover')\n)\n\n\nconst INPUT_DEVICE_LABEL_CONTAINER = jQuery('<div/>', {id: 'inputDeviceLabelContainer', class: 'device-label-container'})\n\n\nconst MOUSE_LABEL = jQuery('<div/>', {id: 'mouseLabel', class: 'device-label'}).text('Mouse')\nconst TRACKPAD_LABEL = jQuery('<div/>', {id: 'trackpadLabel', class: 'device-label',}).text('Trackpad')\nconst TOUCHSCREEN_LABEL = jQuery('<div/>', {id: 'touchscreenLabel', class: 'device-label'}).text('Touchscreen')\nconst OTHER_LABEL = jQuery('<div/>', {id: 'otherLabel', class: 'device-label'}).text('Other')\n\n\nINPUT_DEVICE_CONTAINER.append(MOUSE_BUTTON, TRACKPAD_BUTTON, TOUCHSCREEN_BUTTON, OTHER_BUTTON)\nINPUT_DEVICE_LABEL_CONTAINER.append(MOUSE_LABEL, TRACKPAD_LABEL,TOUCHSCREEN_LABEL, OTHER_LABEL)\n\n\n\n\n//# sourceURL=webpack://behavioral/./shared/components/inputDevices.js?");

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

/***/ "./shared/components/responseButtons.js":
/*!**********************************************!*\
  !*** ./shared/components/responseButtons.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BUTTON_CONTAINER: () => (/* binding */ BUTTON_CONTAINER),\n/* harmony export */   BUTTON_LABEL_CONTAINER: () => (/* binding */ BUTTON_LABEL_CONTAINER),\n/* harmony export */   GREEN_BUTTON: () => (/* binding */ GREEN_BUTTON),\n/* harmony export */   GREEN_LABEL: () => (/* binding */ GREEN_LABEL),\n/* harmony export */   RED_BUTTON: () => (/* binding */ RED_BUTTON),\n/* harmony export */   RED_LABEL: () => (/* binding */ RED_LABEL)\n/* harmony export */ });\n/* harmony import */ var _static_images_check_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../static/images/check.png */ \"./static/images/check.png\");\n/* harmony import */ var _static_images_remove_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/images/remove.png */ \"./static/images/remove.png\");\n\n\n\n\nconst BUTTON_CONTAINER = jQuery('<div/>', {id: 'buttonContainer', class: 'response-button-container'})\n\n\nconst GREEN_BUTTON = jQuery('<img/>', {\n    id: 'greenButton',\n    src: _static_images_check_png__WEBPACK_IMPORTED_MODULE_0__,\n    class: 'image-button right-margined',\n    ontouchstart: ''\n})\n\n\nconst RED_BUTTON = jQuery('<img/>', {\n    id: 'redButton',\n    src: _static_images_remove_png__WEBPACK_IMPORTED_MODULE_1__,\n    class: 'image-button left-margined',\n    ontouchstart: ''\n})\n\n\nconst BUTTON_LABEL_CONTAINER = jQuery('<div/>', {\n    id: 'labelContainer', \n    css: {\n        display: 'flex',\n        flexDirection: 'row',\n        justifyContent: 'flex-end',\n        minWidth: '100%',\n        marginBottom: 'auto',\n        fontFamily: 'Arial'\n    }\n})\n\n\nconst GREEN_LABEL = jQuery('<div/>', {id: 'greenLabel', class: 'button-label right-margined'})\nconst RED_LABEL = jQuery('<div/>', {id: 'redLabel', class: 'button-label left-margined'})\n\n\nBUTTON_CONTAINER.append(GREEN_BUTTON, RED_BUTTON)\nBUTTON_LABEL_CONTAINER.append(GREEN_LABEL, RED_LABEL)\n\n\n\n//# sourceURL=webpack://behavioral/./shared/components/responseButtons.js?");

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

/***/ "./task/orchestrator.js":
/*!******************************!*\
  !*** ./task/orchestrator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Orchestrator)\n/* harmony export */ });\n/* harmony import */ var _shared_components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/container */ \"./shared/components/container.js\");\n/* harmony import */ var _screens_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/transition */ \"./task/screens/transition.js\");\n/* harmony import */ var _sequenceNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sequenceNode */ \"./task/sequenceNode.js\");\n\n\n\n\n\nclass Orchestrator {\n\n    constructor(variant, client) {\n        this.client = client\n        this.variant = variant\n        this.root = null\n        this.previousScreen = null\n        this.currentScreen = null\n        this.beginScreen = new _screens_transition__WEBPACK_IMPORTED_MODULE_1__.Begin(this)\n        this.breakScreen = new _screens_transition__WEBPACK_IMPORTED_MODULE_1__.Break(this)\n        this.completeScreen = new _screens_transition__WEBPACK_IMPORTED_MODULE_1__.Complete(this)\n        this.incorrectScreen = new _screens_transition__WEBPACK_IMPORTED_MODULE_1__.Incorrect(this)\n        this.timeoutScreen = new _screens_transition__WEBPACK_IMPORTED_MODULE_1__.TimeOut(this)\n        this.trialScreen = new variant.trialScreenClass(this)\n    }\n\n    get currentTrial() {\n        return this.currentScreen.trial\n    }\n\n    initialize(data) {\n        let previous = null\n        let current = null\n        this.variant.screens.forEach((screen, _) => {\n            previous = current\n            current = new _sequenceNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"](new screen(this))\n\n            if (this.root === null) {\n                this.root = current\n                this.currentScreen = this.root\n            }\n\n            if (previous) previous.next = current\n            current.previous = previous\n        })\n\n        let previousRow = null\n        data.forEach((row, _) => {\n            previous = current\n            \n            if (previousRow && previousRow.Procedure === 'showlastpractice') {\n                current = new _sequenceNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.beginScreen)\n\n                previous.next = current\n                current.previous = previous\n                previous = current\n            }\n            \n            if (row.Procedure === 'showasbreak') {\n                current = new _sequenceNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.breakScreen)\n            } else {\n                current = new _sequenceNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.trialScreen)\n                current.initializeTrial(this.variant.trialClass, row)\n            }\n\n            previous.next = current\n            current.previous = previous\n            previousRow = row\n        })\n\n        current.next = new _sequenceNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.completeScreen)\n    }\n\n    collectMetadata(key, value) {\n        this.client.collectMetadata(key, value)\n    }\n\n    complete() {\n        this.client.submit(this.root)\n        this.render()\n    }\n\n    timedOut() {\n        if (this.currentTrial.TrialType === 'Practice') {\n            this.replay(true)\n        } else {\n            const transitionScreen = new _sequenceNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.timeoutScreen)\n            transitionScreen.next = this.currentScreen.next\n            this.currentScreen.next = transitionScreen\n            this.next()\n        }\n    }\n\n    replay(timedOut = false) {\n        const replayTrial = new _sequenceNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.trialScreen)\n        replayTrial.initializeTrial(this.variant.trialClass, this.currentTrial)\n\n        const transitionScreen = timedOut ? new _sequenceNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.timeoutScreen) : new _sequenceNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.incorrectScreen)\n        \n        transitionScreen.next = replayTrial\n        replayTrial.next = this.currentScreen.next\n        this.currentScreen.next = transitionScreen\n\n        this.next()\n    }\n\n    next() {\n        this.currentScreen = this.currentScreen.next\n        this.render()\n        if (this.currentScreen.trial !== null) this.currentScreen.screen.startTrial()\n    }\n\n    previous() {\n        this.currentScreen = this.currentScreen.previous\n        this.render()\n    }\n\n    render() {\n        _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.children().detach()\n        for (const [component, ] of this.currentScreen.screen.components.entries()) {\n            _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.append(component)\n        }\n        this.currentScreen.screen.setClasses()\n        this.currentScreen.screen.setClickHandlers()\n        this.currentScreen.screen.setTimeouts()\n    }\n}\n\n//# sourceURL=webpack://behavioral/./task/orchestrator.js?");

/***/ }),

/***/ "./task/qualtricsClient.js":
/*!*********************************!*\
  !*** ./task/qualtricsClient.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ QualtricsClient)\n/* harmony export */ });\n\n\nclass QualtricsClient {\n    constructor(engine, variant) {\n        this.engine = engine\n        this.trialData = {}\n        this.metaData = {\n            'ExperimentNameShort': variant.testNameShort,\n            'BuildTestID': variant.buildTestID,\n            'userAgent': navigator.userAgent.replace(',', '|').replace(';','|'),\n            'RecipientFirstName': 'N/A',\n            'RecipientLastName': 'N/A',\n            'RecipientEmail': 'N/A',\n            'ExternalReference': 'N/A'\n        }\n    }\n\n    collectTrialData(root) {\n        let current = root\n        while(current !== null) {\n            if (current.trial !== null) {\n                current.trial.columns.forEach((column, _) => {\n                    if (column in this.trialData) {\n                        this.trialData[column].push(current.trial[column])\n                    } else {\n                        this.trialData[column] = [current.trial[column]]\n                    }\n                })\n            }\n            \n            current = current.next\n        }\n    }\n\n    collectMetadata(key, value) {\n        this.metaData[key] = value\n    }\n\n    submit(root) {\n        this.collectTrialData(root)\n\n        if (window.location.host === \"georgetown.az1.qualtrics.com\") {\n            for (const [key, values] of Object.entries(this.trialData)) {\n                Qualtrics.SurveyEngine.setEmbeddedData(key, values.join(';'))\n            }\n            for (const [key, value] of Object.entries(this.metaData)) {\n                Qualtrics.SurveyEngine.setEmbeddedData(key, value)\n            }\n\n            this.engine.clickNextButton()\n        }\n    }\n}\n\n//# sourceURL=webpack://behavioral/./task/qualtricsClient.js?");

/***/ }),

/***/ "./task/screens/base.js":
/*!******************************!*\
  !*** ./task/screens/base.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Screen)\n/* harmony export */ });\n/* harmony import */ var _shared_components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/container */ \"./shared/components/container.js\");\n\n\n\nclass Screen {\n    constructor(orchestrator) {\n        this.orchestrator = orchestrator\n    }\n\n    get clickHandlers() { return {} }\n\n    get timeouts() { return [] }\n\n    audioContainerClickHandler(audio) {\n        audio.addEventListener('ended', () => this.containerClickHandler())\n        audio.play()\n    }\n\n    containerClickHandler() {\n        _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.off('click')\n        this.orchestrator.next()\n    }\n\n    setClasses() {\n        for (const [component, settings] of this.components.entries()) {\n            for (const [setting, value] of Object.entries(settings)) {\n                if (setting === 'addClass') component.removeClass()\n                component[setting](value)\n            }\n        }\n    }\n\n    setClickHandlers() {\n        for (const [id, callback] of Object.entries(this.clickHandlers)) {\n            const element = jQuery(`#${id}`)\n            element.off('click')\n            element.on('click', callback)\n        }\n    }\n\n    setTimeouts() {\n        this.timeouts.forEach((milliseconds, callback) => setTimeout(callback, milliseconds))\n    }\n}\n\n//# sourceURL=webpack://behavioral/./task/screens/base.js?");

/***/ }),

/***/ "./task/screens/instruction.js":
/*!*************************************!*\
  !*** ./task/screens/instruction.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InputDevice: () => (/* binding */ InputDevice),\n/* harmony export */   InstructionOne: () => (/* binding */ InstructionOne),\n/* harmony export */   InstructionThree: () => (/* binding */ InstructionThree),\n/* harmony export */   InstructionTwo: () => (/* binding */ InstructionTwo),\n/* harmony export */   ParticipantId: () => (/* binding */ ParticipantId)\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./task/screens/base.js\");\n/* harmony import */ var _shared_components_inputDevices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/inputDevices */ \"./shared/components/inputDevices.js\");\n/* harmony import */ var _shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/instructionButtons */ \"./shared/components/instructionButtons.js\");\n/* harmony import */ var _shared_components_participantID__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/participantID */ \"./shared/components/participantID.js\");\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n\n\n\n\n\n\n\nclass InputDevice extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_inputDevices__WEBPACK_IMPORTED_MODULE_1__.INPUT_DEVICE_CONTAINER, {}],\n            [_shared_components_inputDevices__WEBPACK_IMPORTED_MODULE_1__.INPUT_DEVICE_LABEL_CONTAINER, {}],\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_4__.TEXT_CONTAINER, {text: 'Please choose your input device to start.', addClass: 'base-text large-text'}],\n        ])\n    }\n\n    get clickHandlers() {\n        return {\n            mouseButton: () => this.inputDeviceHandler('mouse'),\n            trackpadButton: () => this.inputDeviceHandler('trackpad'),\n            touchscreenButton: () => this.inputDeviceHandler('touchscreen'),\n            otherButton: () => this.inputDeviceHandler('other'),\n        }\n    }\n\n    inputDeviceHandler(inputDevice) {\n        this.orchestrator.collectMetadata('inputDevice', inputDevice)\n        this.orchestrator.next()\n    }\n}\n\n\nclass ParticipantId extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_participantID__WEBPACK_IMPORTED_MODULE_3__.PARTICIPANT_ID_CONTAINER, {}],\n        ])\n    }\n\n    get clickHandlers() {\n        return {submitButton: () => this.handleSubmit()}\n    }\n\n    handleSubmit() {\n        this.orchestrator.collectMetadata('SubjectID', jQuery('#participantIdInput')[0].value)\n        this.orchestrator.next()\n    }\n}\n\n\nclass InstructionOne extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_4__.TEXT_CONTAINER, {text: this.orchestrator.variant.instructionOne, addClass: 'base-text medium-text'}],\n            [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_2__.INSTRUCTION_BUTTON_CONTAINER, {}]\n        ])\n    }\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.orchestrator.next(),\n            previousButton: () => this.orchestrator.previous()\n        }\n    }\n}\n\n\nclass InstructionTwo extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_4__.TEXT_CONTAINER, {text: this.orchestrator.variant.instructionTwo, addClass: 'base-text medium-text'}],\n            [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_2__.INSTRUCTION_BUTTON_CONTAINER, {}]\n        ])\n    }\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.orchestrator.next(),\n            previousButton: () => this.orchestrator.previous()\n        }\n    }\n}\n\n\nclass InstructionThree extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_4__.TEXT_CONTAINER, {text: this.orchestrator.variant.instructionThree, addClass: 'base-text medium-text'}],\n            [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_2__.INSTRUCTION_BUTTON_CONTAINER, {}]\n        ])\n    }\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.orchestrator.next(),\n            previousButton: () => this.orchestrator.previous()\n        }\n    }\n}\n\n\n\n\n\n//# sourceURL=webpack://behavioral/./task/screens/instruction.js?");

/***/ }),

/***/ "./task/screens/transition.js":
/*!************************************!*\
  !*** ./task/screens/transition.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Begin: () => (/* binding */ Begin),\n/* harmony export */   Break: () => (/* binding */ Break),\n/* harmony export */   Complete: () => (/* binding */ Complete),\n/* harmony export */   Incorrect: () => (/* binding */ Incorrect),\n/* harmony export */   LetsPractice: () => (/* binding */ LetsPractice),\n/* harmony export */   TimeOut: () => (/* binding */ TimeOut)\n/* harmony export */ });\n/* harmony import */ var _shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/instructionButtons */ \"./shared/components/instructionButtons.js\");\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ \"./task/screens/base.js\");\n\n\n\n\n\nclass Begin extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {text: `Any questions?\\nLet's begin.`}],\n        ])\n    }\n\n    get clickHandlers() {\n        return {container: () => this.containerClickHandler()}\n    }\n}\n\n\nclass Break extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {\n                text: 'Take a break. Click or touch anywhere to continue.',\n                addClass: 'base-text extra-large-text blue'\n            }]\n        ])\n    }\n\n    get clickHandlers() {\n        return {container: () => this.containerClickHandler()}\n    }\n}\n\n\nclass Incorrect extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    get components() {\n        return new Map([\n            [\n                _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, \n                {\n                    text: 'Incorrect, click or touch anywhere to try again.',\n                    addClass: 'base-text extra-large-text red'\n                }\n            ]\n        ])\n   }\n\n    get clickHandlers() {\n        return {container: () => this.containerClickHandler()}\n    }\n}\n\n\nclass LetsPractice extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    get components() {\n       return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {text: `Let's Practice.`, addClass: 'base-text medium-text'}],\n            [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__.INSTRUCTION_BUTTON_CONTAINER, {}]\n        ])\n    }\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.orchestrator.next(),\n            previousButton: () => this.orchestrator.previous()\n        }\n    }\n}\n\n\nclass TimeOut extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {text: 'Click or touch to continue.'}]\n        ])\n    }\n\n    get clickHandlers() {\n        return { container: () => this.containerClickHandler() }\n    }\n}\n\n\nclass Complete extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {addClass: 'base-text large-text', text: `You've completed this exercise!`}]\n        ])\n    }\n\n    get timeouts() {\n        return new Map([\n            [() => this.orchestrator.complete(), 1000]\n        ])\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./task/screens/transition.js?");

/***/ }),

/***/ "./task/screens/trials/semanticRelatedness.js":
/*!****************************************************!*\
  !*** ./task/screens/trials/semanticRelatedness.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuditoryTrialScreen: () => (/* binding */ AuditoryTrialScreen),\n/* harmony export */   WrittenTrialScreen: () => (/* binding */ WrittenTrialScreen)\n/* harmony export */ });\n/* harmony import */ var _shared_components_audioContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/audioContainer */ \"./shared/components/audioContainer.js\");\n/* harmony import */ var _shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/responseButtons */ \"./shared/components/responseButtons.js\");\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base */ \"./task/screens/base.js\");\n\n\n\n\n\n\nclass BaseTrialScreen extends _base__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    constructor(orchestrator) {\n        super(orchestrator)\n        _shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__.RED_LABEL.text('Not Related')\n        _shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__.GREEN_LABEL.text('Related')\n    }\n\n    get clickHandlers() {\n        return {\n            greenButton: (event) => this.responseClickHandler(event, 'yes'),\n            redButton: (event) => this.responseClickHandler(event, 'no'),\n        }\n    }\n\n    responseClickHandler(event, response) {\n        event.stopPropagation()  // required in order to prevent container on clicks from triggering immediately after being set\n        clearTimeout(this.timeoutID)\n        this.orchestrator.currentTrial.responseTime = new Date()\n        this.orchestrator.currentTrial.Response = response\n\n        const isCorrect = this.orchestrator.currentTrial.CRESP === response\n        const isPractice = this.orchestrator.currentTrial.TrialType === 'Practice' \n        \n        if (!isCorrect && isPractice) {\n            this.orchestrator.replay()\n        } else {\n            this.orchestrator.next()\n        }\n    }\n}\n\n\nclass WrittenTrialScreen extends BaseTrialScreen {\n\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__.TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],\n            [_shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__.BUTTON_CONTAINER, {}],\n            [_shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__.BUTTON_LABEL_CONTAINER, {}]\n        ])\n    }\n\n    startTrial() {\n        setTimeout(() => {\n            _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__.TEXT_CONTAINER.text(`${this.orchestrator.currentTrial.Sound1}\\n${this.orchestrator.currentTrial.Sound2}`)\n            this.orchestrator.currentTrial.startTime = new Date()\n            this.timeoutID = setTimeout(() => {\n                this.orchestrator.currentTrial.responseTime = new Date()\n                this.orchestrator.timedOut()\n            }, 10000)\n        }, 100)\n    }\n}\n\n\nclass AuditoryTrialScreen extends BaseTrialScreen {\n    components = new Map([\n        [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__.TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text fixed-height'}],\n        [_shared_components_audioContainer__WEBPACK_IMPORTED_MODULE_0__.AUDIO_CONTAINER, {}],\n        [_shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__.BUTTON_CONTAINER, {}],\n        [_shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__.BUTTON_LABEL_CONTAINER, {}]\n    ])\n\n    startTrial() {\n        setTimeout(() => {\n            _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__.TEXT_CONTAINER.text('')\n            _shared_components_audioContainer__WEBPACK_IMPORTED_MODULE_0__.AUDIO_SOURCE.attr('src', this.orchestrator.currentTrial.source(1))\n            _shared_components_audioContainer__WEBPACK_IMPORTED_MODULE_0__.AUDIO_CONTAINER.on('ended', () => {\n                _shared_components_audioContainer__WEBPACK_IMPORTED_MODULE_0__.AUDIO_SOURCE.attr('src', this.orchestrator.currentTrial.source(2))\n                _shared_components_audioContainer__WEBPACK_IMPORTED_MODULE_0__.AUDIO_CONTAINER[0].load()\n                _shared_components_audioContainer__WEBPACK_IMPORTED_MODULE_0__.AUDIO_CONTAINER[0].play()\n                _shared_components_audioContainer__WEBPACK_IMPORTED_MODULE_0__.AUDIO_CONTAINER.off('ended')\n            })\n            _shared_components_audioContainer__WEBPACK_IMPORTED_MODULE_0__.AUDIO_CONTAINER[0].load()\n            _shared_components_audioContainer__WEBPACK_IMPORTED_MODULE_0__.AUDIO_CONTAINER[0].play()\n            this.orchestrator.currentTrial.startTime = new Date()\n            this.timeoutID = setTimeout(() => {\n                this.orchestrator.currentTrial.responseTime = new Date()\n                this.orchestrator.timedOut()\n            }, 10000)\n        }, 100)\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./task/screens/trials/semanticRelatedness.js?");

/***/ }),

/***/ "./task/screens/trials/wordReading.js":
/*!********************************************!*\
  !*** ./task/screens/trials/wordReading.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WordReadingTrialScreen)\n/* harmony export */ });\n/* harmony import */ var _shared_components_rightChevron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/rightChevron */ \"./shared/components/rightChevron.js\");\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base */ \"./task/screens/base.js\");\n\n\n\n\n\nclass WordReadingTrialScreen extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    constructor(orchestrator, trialManager) {\n        super(orchestrator)\n        this.trialManager = trialManager\n    }\n\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],\n            [_shared_components_rightChevron__WEBPACK_IMPORTED_MODULE_0__.PROCEED_CONTAINER, {}]\n        ])\n    }\n\n    get clickHandlers() {\n        return {\n            rightChevron: (event) => this.proceedClickHandler(event),\n        }\n    }\n\n    proceedClickHandler(event) {\n        event.stopPropagation()  // required in order to prevent container on clicks from triggering immediately after being set\n        clearTimeout(this.timeoutID)\n        this.orchestrator.currentTrial.responseTime = new Date()\n        this.orchestrator.next()\n    }\n\n    startTrial() {\n        this.orchestrator.variant.fixationAudio.play()\n        setTimeout(() => {\n            _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER.text(`${this.orchestrator.currentTrial.Item}`)\n            this.orchestrator.currentTrial.startTime = new Date()\n            this.timeoutID = setTimeout(() => {\n                this.orchestrator.currentTrial.TimedOut = true\n                this.orchestrator.currentTrial.responseTime = new Date()\n                this.orchestrator.timedOut()\n            }, this.orchestrator.variant.timeToTimeout)\n        }, 200)\n    }\n\n}\n\n//# sourceURL=webpack://behavioral/./task/screens/trials/wordReading.js?");

/***/ }),

/***/ "./task/sequenceNode.js":
/*!******************************!*\
  !*** ./task/sequenceNode.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SequenceNode)\n/* harmony export */ });\n\nclass SequenceNode {\n    constructor(screen) {\n        this.screen = screen\n        this.previous = null\n        this.next = null\n        this.trial = null\n    }\n\n    initializeTrial(trialClass, trial) {\n        this.trial = new trialClass(trial)\n    }\n}\n\n//# sourceURL=webpack://behavioral/./task/sequenceNode.js?");

/***/ }),

/***/ "./task/task.js":
/*!**********************!*\
  !*** ./task/task.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _shared_components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/container */ \"./shared/components/container.js\");\n/* harmony import */ var _orchestrator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orchestrator */ \"./task/orchestrator.js\");\n/* harmony import */ var _qualtricsClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qualtricsClient */ \"./task/qualtricsClient.js\");\n/* harmony import */ var _variants_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variants/index */ \"./task/variants/index.js\");\n\n\n\n\n\n\nclass Task {\n    constructor(data, engine, variantString) {\n        jQuery(\"#Questions\").remove()\n        jQuery(\"#PushStickyFooter\").remove()\n        jQuery(\"#Plug\").hide()\n        jQuery(\".SkinInner\").hide()\n        jQuery(\"#Wrapper\").append(_shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER)\n        \n        const variant = (0,_variants_index__WEBPACK_IMPORTED_MODULE_3__.variantFromString)(variantString)\n        this.orchestrator = new _orchestrator__WEBPACK_IMPORTED_MODULE_1__[\"default\"](variant, new _qualtricsClient__WEBPACK_IMPORTED_MODULE_2__[\"default\"](engine, variant))\n        this.orchestrator.initialize(data)\n        this.orchestrator.render()\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./task/task.js?");

/***/ }),

/***/ "./task/trials/semanticRelatedness.js":
/*!********************************************!*\
  !*** ./task/trials/semanticRelatedness.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Trial: () => (/* binding */ Trial)\n/* harmony export */ });\n\n\nclass Trial {\n    constructor(config) {\n        this.ItemNum = config.ItemNum\n        this.TrialType = config.TrialType\n        this.RelationType = config.RelationType\n        this.Sound1 = config.Sound1\n        this.Sound2 = config.Sound2\n        this.CRESP = config.CRESP\n        this.Response = 'NR'\n        this.startTime = null\n        this.responseTime = null\n    }\n\n    get columns() {\n        return [\n            ...Object.keys(this),\n            'Item',\n            'Time',\n            'TimedOut',\n            'Date',\n            'RT',\n            'Accuracy',\n            'TrialWasAdministered',\n            'Repetitions'\n        ]\n    }\n\n    get TimedOut() {\n        return this.Response === 'NR'\n    }\n\n    get Repetitions() {\n        return 0\n    }\n\n    get TrialWasAdministered() {\n        return 1\n    }\n\n    get Accuracy() {\n        return this.Response === this.CRESP ? 1 : 0\n    }\n\n    get RT() {\n        return this.responseTime - this.startTime\n    }\n\n    get Item() {\n        return `${this.Sound1}-${this.Sound2}`\n    }\n\n    get Time() {\n        return this.startTime.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h24'})\n    }\n\n    get Date() {\n        return this.startTime.toLocaleDateString('en-US')\n    }\n\n    source(index) {\n        const sound = this[`Sound${index}`]\n        return `https://crlabgeorgetown.github.io/behavioral/static/auditory_rhyme_decision_wav_files/${sound}.wav`\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./task/trials/semanticRelatedness.js?");

/***/ }),

/***/ "./task/trials/wordReading.js":
/*!************************************!*\
  !*** ./task/trials/wordReading.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CrossedRealWordTrial: () => (/* binding */ CrossedRealWordTrial),\n/* harmony export */   MultimorphemicTrial: () => (/* binding */ MultimorphemicTrial),\n/* harmony export */   OralSentenceReadingTrial: () => (/* binding */ OralSentenceReadingTrial),\n/* harmony export */   POSAndLengthEffectTrial: () => (/* binding */ POSAndLengthEffectTrial),\n/* harmony export */   PseudoWordTrial: () => (/* binding */ PseudoWordTrial),\n/* harmony export */   SpokenLetterNamingTrial: () => (/* binding */ SpokenLetterNamingTrial)\n/* harmony export */ });\n\n\nclass CrossedRealWordTrial {\n    constructor(config) {\n        this.ItemNum = config.ItemNum\n        this.Item = config.Item\n        this.TrialType = config.TrialType\n        this.Repetitions = 0\n        this.WordType = config.WordType\n        this.PrecedingWordType = config.PrecedingWordType\n        this.Imageability = config.Imageability\n        this.Frequency = config.Frequency\n        this.PartofSpeech = config.PartofSpeech\n        this.startTime = null\n        this.responseTime = null\n        this.TimedOut = false\n        this.Regularity = config.Regularity\n        this.Block = config.Block\n    }\n\n    get columns() {\n        return [\n            ...Object.keys(this),\n            'TimeOnItem',\n            'Time',\n            'Date',\n        ]\n    }\n\n    get TimeOnItem() {\n        return this.responseTime - this.startTime\n    }\n\n    get Time() {\n        return this.startTime.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h24'})\n    }\n\n    get Date() {\n        return this.startTime.toLocaleDateString('en-US')\n    }\n}\n\n\nclass PseudoWordTrial {\n    constructor(config) {\n        this.ItemNum = config.ItemNum\n        this.Item = config.Item\n        this.TrialType = config.TrialType\n        this.Repetitions = 0\n        this.Accuracy = -1\n        this.Version = 'v2'\n        this.WordType = config.WordType\n        this.startTime = null\n        this.responseTime = null\n        this.TimedOut = false\n        this.BlockNumber = config.BlockNumber\n        this.StartBlock = config.StartBlock\n    }\n\n    get columns() {\n        return [\n            ...Object.keys(this),\n            'TrialWasAdministered',\n            'TimeOnItem',\n            'Time',\n            'Date',\n        ]\n    }\n\n    get TrialWasAdministered() {\n        return !this.TimedOut\n    }\n\n    get TimeOnItem() {\n        return this.responseTime - this.startTime\n    }\n\n    get Time() {\n        return this.startTime.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h24'})\n    }\n\n    get Date() {\n        return this.startTime.toLocaleDateString('en-US')\n    }\n}\n\n\nclass MultimorphemicTrial {\n    constructor(config) {\n        this.ItemNum = config.ItemNum\n        this.Item = config.Item\n        this.TrialType = config.TrialType\n        this.Repetitions = 0\n        this.Length = config.Length\n        this.Frequency = config.Frequency\n        this.Phonemes = config.Phonemes\n        this.Syllables = config.Syllables\n        this.PartofSpeech = config.PartofSpeech\n        this.WordType = config.WordType\n        this.startTime = null\n        this.responseTime = null\n        this.TimedOut = false\n    }\n\n    get columns() {\n        return [\n            ...Object.keys(this),\n            'TrialWasAdministered',\n            'TimeOnItem',\n            'Time',\n            'Date',\n        ]\n    }\n\n    get TrialWasAdministered() {\n        return !this.TimedOut\n    }\n\n    get TimeOnItem() {\n        return this.responseTime - this.startTime\n    }\n\n    get Time() {\n        return this.startTime.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h24'})\n    }\n\n    get Date() {\n        return this.startTime.toLocaleDateString('en-US')\n    }\n}\n\n\nclass OralSentenceReadingTrial {\n    constructor(config) {\n        this.ItemNum = config.ItemNum\n        this.Item = config.Item\n        this.TrialType = config.TrialType\n        this.Repetitions = 0\n        this.Accuracy = -1\n        this.Version = 'ReadMap'\n        this.WordType = config.WordType\n        this.startTime = null\n        this.responseTime = null\n        this.TimedOut = false\n    }\n\n    get columns() {\n        return [\n            ...Object.keys(this),\n            'TrialWasAdministered',\n            'TimeOnItem',\n            'Time',\n            'Date',\n        ]\n    }\n\n    get TrialWasAdministered() {\n        return !this.TimedOut\n    }\n\n    get TimeOnItem() {\n        return this.responseTime - this.startTime\n    }\n\n    get Time() {\n        return this.startTime.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h24'})\n    }\n\n    get Date() {\n        return this.startTime.toLocaleDateString('en-US')\n    }\n}\n\n\nclass POSAndLengthEffectTrial {\n    constructor(config) {\n        this.ItemNum = config.ItemNum\n        this.Item = config.Item\n        this.TrialType = config.TrialType\n        this.Repetitions = 0\n        this.Version = 'v2'\n        this.Accuracy = -1\n        this.LetterCount = config.LetterCount\n        this.SyllableCount = config.SyllableCount\n        this.PartOfSpeech = config.PartOfSpeech\n        this.startTime = null\n        this.responseTime = null\n        this.TimedOut = false\n        this.BlockNumber = config.BlockNumber\n    }\n\n    get columns() {\n        return [\n            ...Object.keys(this),\n            'TrialWasAdministered',\n            'TimeOnItem',\n            'Time',\n            'Date',\n        ]\n    }\n\n    get TrialWasAdministered() {\n        return !this.TimedOut\n    }\n\n    get TimeOnItem() {\n        return this.responseTime - this.startTime\n    }\n\n    get Time() {\n        return this.startTime.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h24'})\n    }\n\n    get Date() {\n        return this.startTime.toLocaleDateString('en-US')\n    }\n}\n\n\nclass SpokenLetterNamingTrial {\n    constructor(config) {\n        this.ItemNum = config.ItemNum\n        this.Item = config.Item\n        this.TrialType = config.TrialType\n        this.Repetitions = 0\n        this.startTime = null\n        this.responseTime = null\n        this.TimedOut = false\n    }\n\n    get columns() {\n        return [\n            ...Object.keys(this),\n            'TrialWasAdministered',\n            'RT',\n            'Time',\n            'Date',\n        ]\n    }\n\n    get TrialWasAdministered() {\n        return !this.TimedOut\n    }\n\n    get RT() {\n        return this.responseTime - this.startTime\n    }\n\n    get Time() {\n        return this.startTime.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h24'})\n    }\n\n    get Date() {\n        return this.startTime.toLocaleDateString('en-US')\n    }\n}\n\n\n\n\n\n//# sourceURL=webpack://behavioral/./task/trials/wordReading.js?");

/***/ }),

/***/ "./task/variants/index.js":
/*!********************************!*\
  !*** ./task/variants/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   variantFromString: () => (/* binding */ variantFromString)\n/* harmony export */ });\n/* harmony import */ var _semanticRelatedness__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./semanticRelatedness */ \"./task/variants/semanticRelatedness.js\");\n/* harmony import */ var _wordReading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wordReading */ \"./task/variants/wordReading.js\");\n\n\n\n// SEMANTIC RELATEDNESS\nconst AUDITORY_SEMANTIC_RELATEDNESS = 'AUDITORY_SEMANTIC_RELATEDNESS'\nconst WRITTEN_SEMANTIC_RELATEDNESS = 'WRITTEN_SEMANTIC_RELATEDNESS'\n\n// WORD READING\nconst CROSSED_REALWORD_WORD_READING_1 = 'CROSSED_REALWORD_WORD_READING_1'\nconst CROSSED_REALWORD_WORD_READING_2 = 'CROSSED_REALWORD_WORD_READING_2'\nconst PSEUDOWORD_WORD_READING_1 = 'PSEUDOWORD_WORD_READING_1'\nconst PSEUDOWORD_WORD_READING_2 = 'PSEUDOWORD_WORD_READING_2'\nconst MULTIMORPHEMIC_WORD_READING = 'MULTIMORPHEMIC_WORD_READING'\nconst POS_AND_LENGTH_EFFECT_WORD_READING = 'POS_AND_LENGTH_EFFECT_WORD_READING'\nconst ORAL_SENTENCE_READING = 'ORAL_SENTENCE_READING'\nconst SPOKEN_LETTER_NAMING = 'SPOKEN_LETTER_NAMING'\n\n\nfunction variantFromString(string) {\n    return new {\n        [AUDITORY_SEMANTIC_RELATEDNESS]: _semanticRelatedness__WEBPACK_IMPORTED_MODULE_0__.AuditorySemanticRelatedness,\n        [WRITTEN_SEMANTIC_RELATEDNESS]: _semanticRelatedness__WEBPACK_IMPORTED_MODULE_0__.WrittenSemanticRelatedness,\n        [CROSSED_REALWORD_WORD_READING_1]: _wordReading__WEBPACK_IMPORTED_MODULE_1__.CrossedRealWord1,\n        [CROSSED_REALWORD_WORD_READING_2]: _wordReading__WEBPACK_IMPORTED_MODULE_1__.CrossedRealWord2,\n        [PSEUDOWORD_WORD_READING_1]: _wordReading__WEBPACK_IMPORTED_MODULE_1__.Pseudoword1,\n        [PSEUDOWORD_WORD_READING_2]: _wordReading__WEBPACK_IMPORTED_MODULE_1__.Pseudoword2,\n        [MULTIMORPHEMIC_WORD_READING]: _wordReading__WEBPACK_IMPORTED_MODULE_1__.Multimorphemic,\n        [POS_AND_LENGTH_EFFECT_WORD_READING]: _wordReading__WEBPACK_IMPORTED_MODULE_1__.POSAndLengthEffect,\n        [ORAL_SENTENCE_READING]: _wordReading__WEBPACK_IMPORTED_MODULE_1__.OralSentenceReading,\n        [SPOKEN_LETTER_NAMING]: _wordReading__WEBPACK_IMPORTED_MODULE_1__.SpokenLetterNaming\n    }[string]()\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./task/variants/index.js?");

/***/ }),

/***/ "./task/variants/semanticRelatedness.js":
/*!**********************************************!*\
  !*** ./task/variants/semanticRelatedness.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuditorySemanticRelatedness: () => (/* binding */ AuditorySemanticRelatedness),\n/* harmony export */   WrittenSemanticRelatedness: () => (/* binding */ WrittenSemanticRelatedness)\n/* harmony export */ });\n/* harmony import */ var _screens_instruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../screens/instruction */ \"./task/screens/instruction.js\");\n/* harmony import */ var _screens_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../screens/transition */ \"./task/screens/transition.js\");\n/* harmony import */ var _screens_trials_semanticRelatedness__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../screens/trials/semanticRelatedness */ \"./task/screens/trials/semanticRelatedness.js\");\n/* harmony import */ var _trials_semanticRelatedness__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trials/semanticRelatedness */ \"./task/trials/semanticRelatedness.js\");\n\n\n\n\n\n\nconst INSTRUCTION_TWO = 'If they are related, press Related.\\nFor example, juice and cup.'\nconst INSTRUCTION_THREE = 'If they are NOT related, press Not Related.\\nFor example, juice and roof.'\n\n\nclass AuditorySemanticRelatedness {\n    constructor() {\n        this.screens = [\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_0__.InputDevice,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_0__.ParticipantId,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionOne,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionTwo,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionThree,\n            _screens_transition__WEBPACK_IMPORTED_MODULE_1__.LetsPractice\n        ]\n        this.testNameShort = 'AuditorySemanticRelatednessJudgment'\n        this.buildTestID = 209\n        this.ePrimeTemplateID = 79\n        this.instructionOne = 'You will hear two words.'\n        this.instructionTwo = INSTRUCTION_TWO\n        this.instructionThree = INSTRUCTION_THREE\n        this.trialClass = _trials_semanticRelatedness__WEBPACK_IMPORTED_MODULE_3__.Trial\n        this.trialScreenClass = _screens_trials_semanticRelatedness__WEBPACK_IMPORTED_MODULE_2__.AuditoryTrialScreen\n    }\n}\n\nclass WrittenSemanticRelatedness {\n    constructor() {\n        this.screens = [\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_0__.InputDevice,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_0__.ParticipantId,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionOne,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionTwo,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionThree,\n            _screens_transition__WEBPACK_IMPORTED_MODULE_1__.LetsPractice\n        ]\n        this.testNameShort = 'WrittenSemanticRelatednessJudgment'\n        this.buildTestID = 204\n        this.ePrimeTemplateID = 75\n        this.instructionOne = 'You will see two words.'\n        this.instructionTwo = INSTRUCTION_TWO\n        this.instructionThree = INSTRUCTION_THREE\n        this.trialClass = _trials_semanticRelatedness__WEBPACK_IMPORTED_MODULE_3__.Trial\n        this.trialScreenClass = _screens_trials_semanticRelatedness__WEBPACK_IMPORTED_MODULE_2__.WrittenTrialScreen\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./task/variants/semanticRelatedness.js?");

/***/ }),

/***/ "./task/variants/wordReading.js":
/*!**************************************!*\
  !*** ./task/variants/wordReading.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CrossedRealWord1: () => (/* binding */ CrossedRealWord1),\n/* harmony export */   CrossedRealWord2: () => (/* binding */ CrossedRealWord2),\n/* harmony export */   Multimorphemic: () => (/* binding */ Multimorphemic),\n/* harmony export */   OralSentenceReading: () => (/* binding */ OralSentenceReading),\n/* harmony export */   POSAndLengthEffect: () => (/* binding */ POSAndLengthEffect),\n/* harmony export */   Pseudoword1: () => (/* binding */ Pseudoword1),\n/* harmony export */   Pseudoword2: () => (/* binding */ Pseudoword2),\n/* harmony export */   SpokenLetterNaming: () => (/* binding */ SpokenLetterNaming)\n/* harmony export */ });\n/* harmony import */ var _static_wordReading_beep_440Hz_300ms_wav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../static/wordReading/beep_440Hz_300ms.wav */ \"./static/wordReading/beep_440Hz_300ms.wav\");\n/* harmony import */ var _static_wordReading_39_ETID_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/wordReading/39_ETID.wav */ \"./static/wordReading/39_ETID.wav\");\n/* harmony import */ var _static_wordReading_44_ETID_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/wordReading/44_ETID.wav */ \"./static/wordReading/44_ETID.wav\");\n/* harmony import */ var _static_wordReading_87_ETID_wav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/wordReading/87_ETID.wav */ \"./static/wordReading/87_ETID.wav\");\n/* harmony import */ var _static_wordReading_83_ETID_wav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/wordReading/83_ETID.wav */ \"./static/wordReading/83_ETID.wav\");\n/* harmony import */ var _static_wordReading_71_ETID_wav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/wordReading/71_ETID.wav */ \"./static/wordReading/71_ETID.wav\");\n/* harmony import */ var _static_wordReading_92_ETID_wav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../static/wordReading/92_ETID.wav */ \"./static/wordReading/92_ETID.wav\");\n/* harmony import */ var _static_wordReading_93_ETID_wav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/wordReading/93_ETID.wav */ \"./static/wordReading/93_ETID.wav\");\n/* harmony import */ var _static_wordReading_64_ETID_wav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../static/wordReading/64_ETID.wav */ \"./static/wordReading/64_ETID.wav\");\n/* harmony import */ var _screens_instruction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../screens/instruction */ \"./task/screens/instruction.js\");\n/* harmony import */ var _screens_transition__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../screens/transition */ \"./task/screens/transition.js\");\n/* harmony import */ var _trials_wordReading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../trials/wordReading */ \"./task/trials/wordReading.js\");\n/* harmony import */ var _screens_trials_wordReading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../screens/trials/wordReading */ \"./task/screens/trials/wordReading.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst DEFAULT_INSTRUCTION_ONE = 'You will see a word on the screen.\\nRead the word out loud.'\nconst PSEUDOWORD_INSTRUCTION_ONE = 'You will see words that are not real words.\\nThey are all made-up words.\\n\\nRead the words out loud.'\nconst INSTRUCTION_TWO = 'Most of the words do not sound like real words.\\nFor example, nuft.\\n\\nBut some of the made-up words may sound like real words.\\nFor example, toze.'\n\n\nclass Base {\n    constructor() {\n        this.fixationAudio = new Audio(_static_wordReading_beep_440Hz_300ms_wav__WEBPACK_IMPORTED_MODULE_0__)\n        this.timeToTimeout = 10000\n    }\n}\n\n\nclass CrossedRealWord1 extends Base {\n    constructor() {\n        super()\n        this.screens = [\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.ParticipantId,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.InstructionOne,\n            _screens_transition__WEBPACK_IMPORTED_MODULE_10__.LetsPractice\n        ]\n        this.testNameShort = 'CrossedRWRdg1'\n        this.buildTestID = 47\n        this.ePrimeTemplateID = 39\n        this.instructionOne = DEFAULT_INSTRUCTION_ONE\n        this.beginAudio = new Audio(_static_wordReading_39_ETID_wav__WEBPACK_IMPORTED_MODULE_1__)\n        this.trialClass = _trials_wordReading__WEBPACK_IMPORTED_MODULE_11__.CrossedRealWordTrial\n        this.trialScreenClass = _screens_trials_wordReading__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n    }\n}\n\n\nclass CrossedRealWord2 extends Base {\n    constructor() {\n        super()\n        this.screens = [\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.ParticipantId,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.InstructionOne,\n            _screens_transition__WEBPACK_IMPORTED_MODULE_10__.LetsPractice\n        ]\n        this.testNameShort = 'CrossedRWRdg2'\n        this.buildTestID = 52\n        this.ePrimeTemplateID = 44\n        this.instructionOne = DEFAULT_INSTRUCTION_ONE\n        this.beginAudio = new Audio(_static_wordReading_44_ETID_wav__WEBPACK_IMPORTED_MODULE_2__)\n        this.trialClass = _trials_wordReading__WEBPACK_IMPORTED_MODULE_11__.CrossedRealWordTrial\n        this.trialScreenClass = _screens_trials_wordReading__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n    }\n}\n\n\nclass Multimorphemic extends Base {\n    constructor() {\n        super()\n        this.screens = [\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.ParticipantId,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.InstructionOne,\n            _screens_transition__WEBPACK_IMPORTED_MODULE_10__.LetsPractice\n        ]\n        this.testNameShort = 'MultimorphemicWordReading'\n        this.buildTestID = 218\n        this.ePrimeTemplateID = 87\n        this.instructionOne = DEFAULT_INSTRUCTION_ONE\n        this.beginAudio = new Audio(_static_wordReading_87_ETID_wav__WEBPACK_IMPORTED_MODULE_3__)\n        this.trialClass = _trials_wordReading__WEBPACK_IMPORTED_MODULE_11__.MultimorphemicTrial\n        this.trialScreenClass = _screens_trials_wordReading__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n    }\n}\n\n\nclass OralSentenceReading extends Base {\n    constructor() {\n        super()\n        this.screens = [\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.ParticipantId,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.InstructionOne,\n            _screens_transition__WEBPACK_IMPORTED_MODULE_10__.LetsPractice\n        ]\n        this.testNameShort = 'OralSentenceReading'\n        this.buildTestID = 213\n        this.ePrimeTemplateID = 83\n        this.instructionOne = 'Read the following sentences out loud.'\n        this.timeToTimeout = 30000\n        this.beginAudio = new Audio(_static_wordReading_83_ETID_wav__WEBPACK_IMPORTED_MODULE_4__)\n        this.trialClass = _trials_wordReading__WEBPACK_IMPORTED_MODULE_11__.OralSentenceReadingTrial\n        this.trialScreenClass = _screens_trials_wordReading__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n    }\n}\n\n\nclass POSAndLengthEffect extends Base {\n    constructor() {\n        super()\n        this.screens = [\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.ParticipantId,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.InstructionOne,\n            _screens_transition__WEBPACK_IMPORTED_MODULE_10__.LetsPractice\n        ]\n        this.testNameShort = 'ReadingPOSandLengthEffect'\n        this.buildTestID = 200\n        this.ePrimeTemplateID = 71\n        this.instructionOne = DEFAULT_INSTRUCTION_ONE\n        this.beginAudio = new Audio(_static_wordReading_71_ETID_wav__WEBPACK_IMPORTED_MODULE_5__)\n        this.trialClass = _trials_wordReading__WEBPACK_IMPORTED_MODULE_11__.POSAndLengthEffectTrial\n        this.trialScreenClass = _screens_trials_wordReading__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n    }\n}\n\n\nclass Pseudoword1 extends Base {\n    constructor() {\n        super()\n        this.screens = [\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.ParticipantId,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.InstructionOne,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.InstructionTwo,\n            _screens_transition__WEBPACK_IMPORTED_MODULE_10__.LetsPractice\n        ]\n        this.testNameShort = 'PseudowordOralReading1'\n        this.buildTestID = 46\n        this.ePrimeTemplateID = 38\n        this.instructionOne = PSEUDOWORD_INSTRUCTION_ONE\n        this.instructionTwo = INSTRUCTION_TWO\n        this.beginAudio = new Audio(_static_wordReading_92_ETID_wav__WEBPACK_IMPORTED_MODULE_6__)\n        this.trialClass = _trials_wordReading__WEBPACK_IMPORTED_MODULE_11__.PseudoWordTrial\n        this.trialScreenClass = _screens_trials_wordReading__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n    }\n}\n\n\nclass Pseudoword2 extends Base {\n    constructor() {\n        super()\n        this.screens = [\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.ParticipantId,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.InstructionOne,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.InstructionTwo,\n            _screens_transition__WEBPACK_IMPORTED_MODULE_10__.LetsPractice\n        ]\n        this.testNameShort = 'PseudowordOralReading2'\n        this.buildTestID = 51\n        this.ePrimeTemplateID = 43\n        this.instructionOne = PSEUDOWORD_INSTRUCTION_ONE\n        this.instructionTwo = INSTRUCTION_TWO\n        this.beginAudio = new Audio(_static_wordReading_93_ETID_wav__WEBPACK_IMPORTED_MODULE_7__)\n        this.trialClass = _trials_wordReading__WEBPACK_IMPORTED_MODULE_11__.PseudoWordTrial\n        this.trialScreenClass = _screens_trials_wordReading__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n    }\n}\n\nclass SpokenLetterNaming extends Base {\n    constructor() {\n        super()\n        this.screens = [\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.ParticipantId,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.InstructionOne,\n            _screens_transition__WEBPACK_IMPORTED_MODULE_10__.LetsPractice\n        ]\n        this.testNameShort = 'SpokenLetterNaming'\n        this.buildTestID = 193\n        this.ePrimeTemplateID = 64\n        this.instructionOne = 'You will see a letter on the screen.\\nName the letter out loud.'\n        this.beginAudio = new Audio(_static_wordReading_64_ETID_wav__WEBPACK_IMPORTED_MODULE_8__)\n        this.trialClass = _trials_wordReading__WEBPACK_IMPORTED_MODULE_11__.SpokenLetterNamingTrial\n        this.trialScreenClass = _screens_trials_wordReading__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./task/variants/wordReading.js?");

/***/ }),

/***/ "./static/images/check.png":
/*!*********************************!*\
  !*** ./static/images/check.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a2b4bba181f6ccf84f84.png\";\n\n//# sourceURL=webpack://behavioral/./static/images/check.png?");

/***/ }),

/***/ "./static/images/joystick.png":
/*!************************************!*\
  !*** ./static/images/joystick.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"09266e10475fea030f5d.png\";\n\n//# sourceURL=webpack://behavioral/./static/images/joystick.png?");

/***/ }),

/***/ "./static/images/mouse.png":
/*!*********************************!*\
  !*** ./static/images/mouse.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"61b7cb57c03ffecee052.png\";\n\n//# sourceURL=webpack://behavioral/./static/images/mouse.png?");

/***/ }),

/***/ "./static/images/remove.png":
/*!**********************************!*\
  !*** ./static/images/remove.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3032c2aacc989cb25071.png\";\n\n//# sourceURL=webpack://behavioral/./static/images/remove.png?");

/***/ }),

/***/ "./static/images/rightChevron.png":
/*!****************************************!*\
  !*** ./static/images/rightChevron.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7981b55cd02dd66aaa94.png\";\n\n//# sourceURL=webpack://behavioral/./static/images/rightChevron.png?");

/***/ }),

/***/ "./static/images/touchscreen.png":
/*!***************************************!*\
  !*** ./static/images/touchscreen.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0fb8531231b5724cb5de.png\";\n\n//# sourceURL=webpack://behavioral/./static/images/touchscreen.png?");

/***/ }),

/***/ "./static/images/trackpad.png":
/*!************************************!*\
  !*** ./static/images/trackpad.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"20da724564a7fae46e8b.png\";\n\n//# sourceURL=webpack://behavioral/./static/images/trackpad.png?");

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

/***/ "./static/wordReading/64_ETID.wav":
/*!****************************************!*\
  !*** ./static/wordReading/64_ETID.wav ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a9e04966ddd48e2aefa3.wav\";\n\n//# sourceURL=webpack://behavioral/./static/wordReading/64_ETID.wav?");

/***/ }),

/***/ "./static/wordReading/71_ETID.wav":
/*!****************************************!*\
  !*** ./static/wordReading/71_ETID.wav ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ccfb5c0d56089d35dd7e.wav\";\n\n//# sourceURL=webpack://behavioral/./static/wordReading/71_ETID.wav?");

/***/ }),

/***/ "./static/wordReading/83_ETID.wav":
/*!****************************************!*\
  !*** ./static/wordReading/83_ETID.wav ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dafaad1a492bbcf86903.wav\";\n\n//# sourceURL=webpack://behavioral/./static/wordReading/83_ETID.wav?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./task/task.js");
/******/ 	task = __webpack_exports__;
/******/ 	
/******/ })()
;