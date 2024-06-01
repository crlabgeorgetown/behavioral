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

/***/ "./wordReading/orchestrator.js":
/*!*************************************!*\
  !*** ./wordReading/orchestrator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Orchestrator)\n/* harmony export */ });\n/* harmony import */ var _shared_components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/container */ \"./shared/components/container.js\");\n/* harmony import */ var _screens_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/transition */ \"./wordReading/screens/transition.js\");\n/* harmony import */ var _screens_trial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/trial */ \"./wordReading/screens/trial.js\");\n/* harmony import */ var _sequenceNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sequenceNode */ \"./wordReading/sequenceNode.js\");\n\n\n\n\n\n\nclass Orchestrator {\n\n    constructor(variant, client) {\n        this.client = client\n        this.variant = variant\n        this.root = null\n        this.previousScreen = null\n        this.currentScreen = null\n        this.beginScreen = new _screens_transition__WEBPACK_IMPORTED_MODULE_1__.Begin(this)\n        this.breakScreen = new _screens_transition__WEBPACK_IMPORTED_MODULE_1__.Break(this)\n        this.completeScreen = new _screens_transition__WEBPACK_IMPORTED_MODULE_1__.Complete(this)\n        this.timeoutScreen = new _screens_transition__WEBPACK_IMPORTED_MODULE_1__.TimeOut(this)\n        this.trialScreen = new _screens_trial__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this)\n    }\n\n    get currentTrial() {\n        return this.currentScreen.trial\n    }\n\n    initialize(data) {\n        let previous = null\n        let current = null\n        this.variant.screens.forEach((screen, _) => {\n            previous = current\n            current = new _sequenceNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"](new screen(this))\n\n            if (this.root === null) {\n                this.root = current\n                this.currentScreen = this.root\n            }\n\n            if (previous) previous.next = current\n            current.previous = previous\n        })\n\n        let previousRow = null\n        data.forEach((row, _) => {\n            previous = current\n            \n            if (previousRow && previousRow.Procedure === 'showlastpractice') {\n                current = new _sequenceNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.beginScreen)\n\n                previous.next = current\n                current.previous = previous\n                previous = current\n            }\n            \n            if (row.Procedure === 'showasbreak') {\n                current = new _sequenceNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.breakScreen)\n            } else {\n                current = new _sequenceNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.trialScreen)\n                current.initializeTrial(row)\n            }\n\n            previous.next = current\n            current.previous = previous\n            previousRow = row\n        })\n\n        current.next = new _sequenceNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.completeScreen)\n    }\n\n    collectMetadata(key, value) {\n        this.client.collectMetadata(key, value)\n    }\n\n    complete() {\n        this.client.submit(this.root)\n        this.render()\n    }\n\n    timedOut() {\n        this.previousScreen = this.currentScreen\n        this.currentScreen = new _sequenceNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.timeoutScreen)\n        this.render()\n    }\n\n    reenterSequence() {\n        this.currentScreen = this.previousScreen.next\n        this.render()\n        if (this.currentScreen.trial !== null) this.currentScreen.screen.startTrial()\n    }\n\n    next() {\n        this.currentScreen = this.currentScreen.next\n        this.render()\n        if (this.currentScreen.trial !== null) this.currentScreen.screen.startTrial()\n    }\n\n    previous() {\n        this.currentScreen = this.currentScreen.previous\n        this.render()\n    }\n\n    render() {\n        _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.children().detach()\n        for (const [component, ] of this.currentScreen.screen.components.entries()) {\n            _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.append(component)\n        }\n        this.currentScreen.screen.setClasses()\n        this.currentScreen.screen.setClickHandlers()\n        this.currentScreen.screen.setTimeouts()\n    }\n}\n\n//# sourceURL=webpack://behavioral/./wordReading/orchestrator.js?");

/***/ }),

/***/ "./wordReading/qualtricsClient.js":
/*!****************************************!*\
  !*** ./wordReading/qualtricsClient.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ QualtricsClient)\n/* harmony export */ });\n\n\nclass QualtricsClient {\n    constructor(engine) {\n        this.engine = engine\n        this.trialData = {}\n        this.metaData = {\n            'userAgent': navigator.userAgent.replace(',', '|').replace(';','|'),\n            'RecipientFirstName': 'N/A',\n            'RecipientLastName': 'N/A',\n            'RecipientEmail': 'N/A',\n            'ExternalReference': 'N/A'\n        }\n    }\n\n    collectTrialData(root) {\n        let current = root\n        while(current !== null) {\n            if (current.trial !== null) {\n                current.trial.columns.forEach((column, _) => {\n                    if (column in this.trialData) {\n                        this.trialData[column].push(current.trial[column])\n                    } else {\n                        this.trialData[column] = [current.trial[column]]\n                    }\n                })\n            }\n            \n            current = current.next\n        }\n    }\n\n    collectMetadata(key, value) {\n        this.metaData[key] = value\n    }\n\n    submit(root) {\n        this.collectTrialData(root)\n\n        if (window.location.host === \"georgetown.az1.qualtrics.com\") {\n            for (const [key, values] of Object.entries(this.trialData)) {\n                Qualtrics.SurveyEngine.setEmbeddedData(key, values.join(';'))\n            }\n            for (const [key, value] of Object.entries(this.metaData)) {\n                Qualtrics.SurveyEngine.setEmbeddedData(key, value)\n            }\n        }\n\n        this.engine.clickNextButton()\n    }\n}\n\n//# sourceURL=webpack://behavioral/./wordReading/qualtricsClient.js?");

/***/ }),

/***/ "./wordReading/screens/base.js":
/*!*************************************!*\
  !*** ./wordReading/screens/base.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Screen)\n/* harmony export */ });\n/* harmony import */ var _shared_components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/container */ \"./shared/components/container.js\");\n\n\n\nclass Screen {\n    constructor(orchestrator) {\n        this.orchestrator = orchestrator\n    }\n\n    get clickHandlers() { return {} }\n\n    get timeouts() { return [] }\n\n    audioContainerClickHandler(audio) {\n        audio.addEventListener('ended', () => this.containerClickHander())\n        audio.play()\n    }\n\n    containerClickHander() {\n        _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.off('click')\n        this.orchestrator.next()\n    }\n\n    timeoutContainerClickHandler() {\n        _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.off('click')\n        this.orchestrator.reenterSequence()\n    }\n\n    setClasses() {\n        for (const [component, settings] of this.components.entries()) {\n            for (const [setting, value] of Object.entries(settings)) {\n                if (setting === 'addClass') component.removeClass()\n                component[setting](value)\n            }\n        }\n    }\n\n    setClickHandlers() {\n        for (const [id, callback] of Object.entries(this.clickHandlers)) {\n            const element = jQuery(`#${id}`)\n            element.off('click')\n            element.on('click', callback)\n        }\n    }\n\n    setTimeouts() {\n        for (const [callback, milliseconds] of Object.entries(this.timeouts)) {\n            setTimeout(callback, milliseconds)\n        }\n    }\n}\n\n//# sourceURL=webpack://behavioral/./wordReading/screens/base.js?");

/***/ }),

/***/ "./wordReading/screens/instruction.js":
/*!********************************************!*\
  !*** ./wordReading/screens/instruction.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InstructionOne: () => (/* binding */ InstructionOne),\n/* harmony export */   InstructionTwo: () => (/* binding */ InstructionTwo),\n/* harmony export */   ParticipantId: () => (/* binding */ ParticipantId)\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./wordReading/screens/base.js\");\n/* harmony import */ var _shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/instructionButtons */ \"./shared/components/instructionButtons.js\");\n/* harmony import */ var _shared_components_participantID__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/participantID */ \"./shared/components/participantID.js\");\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n\n\n\n\n\n\nclass ParticipantId extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_participantID__WEBPACK_IMPORTED_MODULE_2__.PARTICIPANT_ID_CONTAINER, {}],\n        ])\n    }\n\n    get clickHandlers() {\n        return {submitButton: () => this.handleSubmit()}\n    }\n\n    handleSubmit() {\n        this.orchestrator.collectMetadata('SubjectID', jQuery('#participantIdInput')[0].value)\n        this.orchestrator.next()\n    }\n}\n\n\nclass InstructionOne extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_3__.TEXT_CONTAINER, {text: this.orchestrator.variant.instructionOne, addClass: 'base-text large-text'}],\n            [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_1__.INSTRUCTION_BUTTON_CONTAINER, {}]\n        ])\n    }\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.orchestrator.next(),\n            previousButton: () => this.orchestrator.previous()\n        }\n    }\n}\n\n\nclass InstructionTwo extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_3__.TEXT_CONTAINER, {text: this.orchestrator.variant.instructionTwo, addClass: 'base-text medium-text'}],\n            [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_1__.INSTRUCTION_BUTTON_CONTAINER, {}]\n        ])\n    }\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.orchestrator.next(),\n            previousButton: () => this.orchestrator.previous()\n        }\n    }\n}\n\n\n\n\n\n//# sourceURL=webpack://behavioral/./wordReading/screens/instruction.js?");

/***/ }),

/***/ "./wordReading/screens/transition.js":
/*!*******************************************!*\
  !*** ./wordReading/screens/transition.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Begin: () => (/* binding */ Begin),\n/* harmony export */   Break: () => (/* binding */ Break),\n/* harmony export */   Complete: () => (/* binding */ Complete),\n/* harmony export */   LetsPractice: () => (/* binding */ LetsPractice),\n/* harmony export */   TimeOut: () => (/* binding */ TimeOut)\n/* harmony export */ });\n/* harmony import */ var _shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/instructionButtons */ \"./shared/components/instructionButtons.js\");\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ \"./wordReading/screens/base.js\");\n\n\n\n\n\nclass Begin extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {text: `Any questions?\\nLet's begin.`}],\n        ])\n    }\n\n    get clickHandlers() {\n        return {\n            container: () => {\n                this.audioContainerClickHandler(this.orchestrator.variant.beginAudio)\n            }\n        }\n    }\n}\n\n\nclass Break extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {\n                text: 'Take a break. Click or touch anywhere to continue.',\n                addClass: 'base-text extra-large-text blue'\n            }]\n        ])\n    }\n\n    get clickHandlers() {\n        return {container: () => this.containerClickHander()}\n    }\n}\n\n\nclass LetsPractice extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    get components() {\n       return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {text: `Let's Practice.`, addClass: 'base-text extra-large-text'}],\n            [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__.INSTRUCTION_BUTTON_CONTAINER, {}]\n        ])\n    }\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.orchestrator.next(),\n            previousButton: () => this.orchestrator.previous()\n        }\n    }\n}\n\n\nclass TimeOut extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {text: 'Click or touch to continue.'}]\n        ])\n    }\n\n    get clickHandlers() {\n        return { container: () => this.timeoutContainerClickHandler() }\n    }\n}\n\n\nclass Complete extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {addClass: 'base-text large-text', text: `You've completed this exercise!`}]\n        ])\n    }\n\n    get timeouts() {\n        return new Map([\n            [this.orchestrator.complete, 1000]\n        ])\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./wordReading/screens/transition.js?");

/***/ }),

/***/ "./wordReading/screens/trial.js":
/*!**************************************!*\
  !*** ./wordReading/screens/trial.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Trial)\n/* harmony export */ });\n/* harmony import */ var _shared_components_rightChevron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/rightChevron */ \"./shared/components/rightChevron.js\");\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ \"./wordReading/screens/base.js\");\n\n\n\n\n\nclass Trial extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    constructor(orchestrator, trialManager) {\n        super(orchestrator)\n        this.trialManager = trialManager\n    }\n\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],\n            [_shared_components_rightChevron__WEBPACK_IMPORTED_MODULE_0__.PROCEED_CONTAINER, {}]\n        ])\n    }\n\n    get clickHandlers() {\n        return {\n            rightChevron: (event) => this.proceedClickHandler(event),\n        }\n    }\n\n    proceedClickHandler(event) {\n        event.stopPropagation()  // required in order to prevent container on clicks from triggering immediately after being set\n        clearTimeout(this.timeoutID)\n        this.orchestrator.currentTrial.responseTime = new Date()\n        this.orchestrator.next()\n    }\n\n    startTrial() {\n        this.orchestrator.variant.fixationAudio.play()\n        setTimeout(() => {\n            _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER.text(`${this.orchestrator.currentTrial.Item}`)\n            this.orchestrator.currentTrial.startTime = new Date()\n            this.timeoutID = setTimeout(() => {\n                this.orchestrator.currentTrial.TimedOut = true\n                this.orchestrator.timedOut()\n            }, this.orchestrator.variant.timeToTimeout)\n        }, 200)\n    }\n\n}\n\n//# sourceURL=webpack://behavioral/./wordReading/screens/trial.js?");

/***/ }),

/***/ "./wordReading/sequenceNode.js":
/*!*************************************!*\
  !*** ./wordReading/sequenceNode.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SequenceNode)\n/* harmony export */ });\n/* harmony import */ var _trial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trial */ \"./wordReading/trial.js\");\n\n\n\nclass SequenceNode {\n    constructor(screen) {\n        this.screen = screen\n        this.previous = null\n        this.next = null\n        this.trial = null\n    }\n\n    initializeTrial(trial) {\n        this.trial = new _trial__WEBPACK_IMPORTED_MODULE_0__[\"default\"](trial)\n    }\n}\n\n//# sourceURL=webpack://behavioral/./wordReading/sequenceNode.js?");

/***/ }),

/***/ "./wordReading/task.js":
/*!*****************************!*\
  !*** ./wordReading/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _shared_components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/container */ \"./shared/components/container.js\");\n/* harmony import */ var _orchestrator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orchestrator */ \"./wordReading/orchestrator.js\");\n/* harmony import */ var _qualtricsClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qualtricsClient */ \"./wordReading/qualtricsClient.js\");\n/* harmony import */ var _variants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variants */ \"./wordReading/variants.js\");\n\n\n\n\n\n\nclass Task {\n\tconstructor(data, engine, variant) {\n        jQuery(\"#Questions\").remove()\n        jQuery(\"#PushStickyFooter\").remove()\n        jQuery(\"#Plug\").hide()\n        jQuery(\".SkinInner\").hide()\n        jQuery(\"#Wrapper\").append(_shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER)\n        \n        this.orchestrator = new _orchestrator__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n            (0,_variants__WEBPACK_IMPORTED_MODULE_3__.variantFromString)(variant),\n            new _qualtricsClient__WEBPACK_IMPORTED_MODULE_2__[\"default\"](engine)\n        )\n        this.orchestrator.initialize(data)\n        this.orchestrator.render()\n\t}\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./wordReading/task.js?");

/***/ }),

/***/ "./wordReading/trial.js":
/*!******************************!*\
  !*** ./wordReading/trial.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Trial)\n/* harmony export */ });\n\n\nclass Trial {\n    constructor(config) {\n        this.ItemNum = config.ItemNum\n        this.Item = config.Word\n        this.TrialType = config.TrialType\n        this.Repetitions = 0\n        this.WordType = config.WordType\n        this.PrecedingWordType = config.PrecedingWordType\n        this.Imageability = config.Imageability\n        this.Frequency = config.Frequency\n        this.PartofSpeech = config.PartofSpeech\n        this.startTime = null\n        this.responseTime = null\n        this.TimedOut = false\n        this.Regularity = config.Regularity\n        this.Block = config.Block\n    }\n\n    get columns() {\n        return [\n            ...Object.keys(this),\n            'TimeOnItem',\n            'Time',\n            'Date',\n        ]\n    }\n\n    get TimeOnItem() {\n        return this.responseTime - this.startTime\n    }\n\n    get Time() {\n        return this.startTime.toTimeString().split(' ')[0]\n    }\n\n    get Date() {\n        return this.startTime.toLocaleDateString('en-US')\n    }\n}\n\n//# sourceURL=webpack://behavioral/./wordReading/trial.js?");

/***/ }),

/***/ "./wordReading/variants.js":
/*!*********************************!*\
  !*** ./wordReading/variants.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   variantFromString: () => (/* binding */ variantFromString)\n/* harmony export */ });\n/* harmony import */ var _static_wordReading_beep_440Hz_300ms_wav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../static/wordReading/beep_440Hz_300ms.wav */ \"./static/wordReading/beep_440Hz_300ms.wav\");\n/* harmony import */ var _static_wordReading_39_ETID_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/wordReading/39_ETID.wav */ \"./static/wordReading/39_ETID.wav\");\n/* harmony import */ var _static_wordReading_44_ETID_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/wordReading/44_ETID.wav */ \"./static/wordReading/44_ETID.wav\");\n/* harmony import */ var _static_wordReading_87_ETID_wav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/wordReading/87_ETID.wav */ \"./static/wordReading/87_ETID.wav\");\n/* harmony import */ var _static_wordReading_83_ETID_wav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/wordReading/83_ETID.wav */ \"./static/wordReading/83_ETID.wav\");\n/* harmony import */ var _static_wordReading_71_ETID_wav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/wordReading/71_ETID.wav */ \"./static/wordReading/71_ETID.wav\");\n/* harmony import */ var _static_wordReading_92_ETID_wav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/wordReading/92_ETID.wav */ \"./static/wordReading/92_ETID.wav\");\n/* harmony import */ var _static_wordReading_93_ETID_wav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/wordReading/93_ETID.wav */ \"./static/wordReading/93_ETID.wav\");\n/* harmony import */ var _static_wordReading_64_ETID_wav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/wordReading/64_ETID.wav */ \"./static/wordReading/64_ETID.wav\");\n/* harmony import */ var _screens_instruction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./screens/instruction */ \"./wordReading/screens/instruction.js\");\n/* harmony import */ var _screens_transition__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./screens/transition */ \"./wordReading/screens/transition.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst CROSSED_REALWORD_1 = 'CROSSED_REALWORD_1'\nconst CROSSED_REALWORD_2 = 'CROSSED_REALWORD_2'\nconst PSEUDOWORD_1 = 'PSEUDOWORD_1'\nconst PSEUDOWORD_2 = 'PSEUDOWORD_2'\nconst MULTIMORPHEMIC = 'MULTIMORPHEMIC'\nconst POS_AND_LENGTH_EFFECT = 'POS_AND_LENGTH_EFFECT'\nconst ORAL_SENTENCE_READING = 'ORAL_SENTENCE_READING'\nconst SPOKEN_LETTER_NAMING = 'SPOKEN_LETTER_NAMING'\n\nconst DEFAULT_INSTRUCTION_ONE = 'You will see a word on the screen.\\nRead the word out loud.'\nconst PSEUDOWORD_INSTRUCTION_ONE = 'You will see words that are not real words.\\nThey are all made-up words.\\n\\nRead the words out loud.'\nconst INSTRUCTION_TWO = 'Most of the words do not sound like real words.\\nFor example, nuft.\\n\\nBut some of the made-up words may sound like real words.\\nFor example, toze.'\n\n\nfunction variantFromString(string) {\n    return new {\n        [CROSSED_REALWORD_1]: CrossedRealWord1,\n        [CROSSED_REALWORD_2]: CrossedRealWord2,\n        [PSEUDOWORD_1]: Pseudoword1,\n        [PSEUDOWORD_2]: Pseudoword2,\n        [MULTIMORPHEMIC]: Multimorphemic,\n        [POS_AND_LENGTH_EFFECT]: POSAndLengthEffect,\n        [ORAL_SENTENCE_READING]: OralSentenceReading,\n        [SPOKEN_LETTER_NAMING]: SpokenLetterNaming\n    }[string]()\n}\n\n\nclass Base {\n    constructor() {\n        this.fixationAudio = new Audio(_static_wordReading_beep_440Hz_300ms_wav__WEBPACK_IMPORTED_MODULE_0__)\n        this.timeToTimeout = 10000\n    }\n}\n\n\nclass CrossedRealWord1 extends Base {\n    constructor() {\n        super()\n        this.screens = [\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.ParticipantId,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.InstructionOne,\n            _screens_transition__WEBPACK_IMPORTED_MODULE_10__.LetsPractice\n        ]\n        this.testNameShort = 'CrossedRWRdg1'\n        this.buildTestID = 47\n        this.ePrimeTemplateID = 39\n        this.instructionOne = DEFAULT_INSTRUCTION_ONE\n        this.beginAudio = new Audio(_static_wordReading_39_ETID_wav__WEBPACK_IMPORTED_MODULE_1__)\n    }\n}\n\n\nclass CrossedRealWord2 extends Base {\n    constructor() {\n        super()\n        this.screens = [\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.ParticipantId,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.InstructionOne,\n            _screens_transition__WEBPACK_IMPORTED_MODULE_10__.LetsPractice\n        ]\n        this.testNameShort = 'CrossedRWRdg2'\n        this.buildTestID = 52\n        this.ePrimeTemplateID = 44\n        this.instructionOne = DEFAULT_INSTRUCTION_ONE\n        this.beginAudio = new Audio(_static_wordReading_44_ETID_wav__WEBPACK_IMPORTED_MODULE_2__)\n    }\n}\n\n\nclass Multimorphemic extends Base {\n    constructor() {\n        super()\n        this.screens = [\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.ParticipantId,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.InstructionOne,\n            _screens_transition__WEBPACK_IMPORTED_MODULE_10__.LetsPractice\n        ]\n        this.testNameShort = 'MultimorphemicWordReading'\n        this.buildTestID = 218\n        this.ePrimeTemplateID = 87\n        this.instructionOne = DEFAULT_INSTRUCTION_ONE\n        this.beginAudio = new Audio(_static_wordReading_87_ETID_wav__WEBPACK_IMPORTED_MODULE_3__)\n    }\n}\n\n\nclass OralSentenceReading extends Base {\n    constructor() {\n        super()\n        this.screens = [\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.ParticipantId,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.InstructionOne,\n            _screens_transition__WEBPACK_IMPORTED_MODULE_10__.LetsPractice\n        ]\n        this.testNameShort = 'OralSentenceReading'\n        this.buildTestID = 213\n        this.ePrimeTemplateID = 83\n        this.instructionOne = 'Read the following sentences out loud.'\n        this.timeToTimeout = 30000\n        this.beginAudio = new Audio(_static_wordReading_83_ETID_wav__WEBPACK_IMPORTED_MODULE_4__)\n    }\n}\n\n\nclass POSAndLengthEffect extends Base {\n    constructor() {\n        super()\n        this.screens = [\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.ParticipantId,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.InstructionOne,\n            _screens_transition__WEBPACK_IMPORTED_MODULE_10__.LetsPractice\n        ]\n        this.testNameShort = 'ReadingPOSandLengthEffect'\n        this.buildTestID = 200\n        this.ePrimeTemplateID = 71\n        this.instructionOne = DEFAULT_INSTRUCTION_ONE\n        this.beginAudio = new Audio(_static_wordReading_71_ETID_wav__WEBPACK_IMPORTED_MODULE_5__)\n    }\n}\n\n\nclass Pseudoword1 extends Base {\n    constructor() {\n        super()\n        this.screens = [\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.ParticipantId,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.InstructionOne,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.InstructionTwo,\n            _screens_transition__WEBPACK_IMPORTED_MODULE_10__.LetsPractice\n        ]\n        this.testNameShort = 'PseudowordOralReading1'\n        this.buildTestID = 46\n        this.ePrimeTemplateID = 38\n        this.instructionOne = PSEUDOWORD_INSTRUCTION_ONE\n        this.instructionTwo = INSTRUCTION_TWO\n        this.beginAudio = new Audio(_static_wordReading_92_ETID_wav__WEBPACK_IMPORTED_MODULE_6__)\n    }\n}\n\n\nclass Pseudoword2 extends Base {\n    constructor() {\n        super()\n        this.screens = [\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.ParticipantId,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.InstructionOne,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.InstructionTwo,\n            _screens_transition__WEBPACK_IMPORTED_MODULE_10__.LetsPractice\n        ]\n        this.testNameShort = 'PseudowordOralReading2'\n        this.buildTestID = 51\n        this.ePrimeTemplateID = 43\n        this.instructionOne = PSEUDOWORD_INSTRUCTION_ONE\n        this.instructionTwo = INSTRUCTION_TWO\n        this.beginAudio = new Audio(_static_wordReading_93_ETID_wav__WEBPACK_IMPORTED_MODULE_7__)\n    }\n}\n\nclass SpokenLetterNaming extends Base {\n    constructor() {\n        super()\n        this.screens = [\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.ParticipantId,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_9__.InstructionOne,\n            _screens_transition__WEBPACK_IMPORTED_MODULE_10__.LetsPractice\n        ]\n        this.testNameShort = 'SpokenLetterNaming'\n        this.buildTestID = 193\n        this.ePrimeTemplateID = 64\n        this.instructionOne = 'You will see a letter on the screen.\\nName the letter out loud.'\n        this.beginAudio = new Audio(_static_wordReading_64_ETID_wav__WEBPACK_IMPORTED_MODULE_8__)\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./wordReading/variants.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./wordReading/task.js");
/******/ 	wordReading = __webpack_exports__;
/******/ 	
/******/ })()
;