/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var wordRepetition;
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

/***/ "./shared/components/videoContainer.js":
/*!*********************************************!*\
  !*** ./shared/components/videoContainer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VIDEO_CONTAINER: () => (/* binding */ VIDEO_CONTAINER),\n/* harmony export */   VIDEO_SOURCE: () => (/* binding */ VIDEO_SOURCE)\n/* harmony export */ });\nconst VIDEO_CONTAINER = jQuery(\"<video/>\", {id: 'videoContainer'})\nconst VIDEO_SOURCE = jQuery(\"<source/>\", {id: 'videoSource', type: 'video/mp4'})\n\nVIDEO_CONTAINER.append(VIDEO_SOURCE)\n\n\n\n\n//# sourceURL=webpack://behavioral/./shared/components/videoContainer.js?");

/***/ }),

/***/ "./wordRepetition/orchestrator.js":
/*!****************************************!*\
  !*** ./wordRepetition/orchestrator.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Orchestrator)\n/* harmony export */ });\n/* harmony import */ var _shared_components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/container */ \"./shared/components/container.js\");\n/* harmony import */ var _screens_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/transition */ \"./wordRepetition/screens/transition.js\");\n/* harmony import */ var _screens_trial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/trial */ \"./wordRepetition/screens/trial.js\");\n/* harmony import */ var _sequenceNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sequenceNode */ \"./wordRepetition/sequenceNode.js\");\n\n\n\n\n\n\nclass Orchestrator {\n\n    constructor(variant, client) {\n        this.client = client\n        this.variant = variant\n        this.root = null\n        this.previousScreen = null\n        this.currentScreen = null\n        this.beginScreen = new _screens_transition__WEBPACK_IMPORTED_MODULE_1__.Begin(this)\n        this.breakScreen = new _screens_transition__WEBPACK_IMPORTED_MODULE_1__.Break(this)\n        this.completeScreen = new _screens_transition__WEBPACK_IMPORTED_MODULE_1__.Complete(this)\n        this.timeoutScreen = new _screens_transition__WEBPACK_IMPORTED_MODULE_1__.TimeOut(this)\n        this.trialScreen = new _screens_trial__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this)\n    }\n\n    get currentTrial() {\n        return this.currentScreen.trial\n    }\n\n    initialize(data) {\n        let previous = null\n        let current = null\n        this.variant.screens.forEach((screen, _) => {\n            previous = current\n            current = new _sequenceNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"](new screen(this))\n\n            if (this.root === null) {\n                this.root = current\n                this.currentScreen = this.root\n            }\n\n            if (previous) previous.next = current\n            current.previous = previous\n        })\n\n        let previousRow = null\n        data.forEach((row, _) => {\n            previous = current\n            \n            if (previousRow && previousRow.Procedure === 'showlastpractice') {\n                current = new _sequenceNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.beginScreen)\n\n                previous.next = current\n                current.previous = previous\n                previous = current\n            }\n            \n            if (row.Procedure === 'showasbreak') {\n                current = new _sequenceNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.breakScreen)\n            } else {\n                current = new _sequenceNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.trialScreen)\n                current.initializeTrial(this.variant.trialClass, row)\n            }\n\n            previous.next = current\n            current.previous = previous\n            previousRow = row\n        })\n\n        current.next = new _sequenceNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.completeScreen)\n    }\n\n    collectMetadata(key, value) {\n        this.client.collectMetadata(key, value)\n    }\n\n    complete() {\n        this.client.submit(this.root)\n        this.render()\n    }\n\n    timedOut() {\n        this.previousScreen = this.currentScreen\n        this.currentScreen = new _sequenceNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.timeoutScreen)\n        this.render()\n    }\n\n    reenterSequence() {\n        this.currentScreen = this.previousScreen.next\n        this.render()\n        if (this.currentScreen.trial !== null) this.currentScreen.screen.startTrial()\n    }\n\n    next() {\n        this.currentScreen = this.currentScreen.next\n        this.render()\n        if (this.currentScreen.trial !== null) this.currentScreen.screen.startTrial()\n    }\n\n    previous() {\n        this.currentScreen = this.currentScreen.previous\n        this.render()\n    }\n\n    render() {\n        _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.children().detach()\n        for (const [component, ] of this.currentScreen.screen.components.entries()) {\n            _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.append(component)\n        }\n        this.currentScreen.screen.setClasses()\n        this.currentScreen.screen.setClickHandlers()\n        this.currentScreen.screen.setTimeouts()\n    }\n}\n\n//# sourceURL=webpack://behavioral/./wordRepetition/orchestrator.js?");

/***/ }),

/***/ "./wordRepetition/qualtricsClient.js":
/*!*******************************************!*\
  !*** ./wordRepetition/qualtricsClient.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ QualtricsClient)\n/* harmony export */ });\n\n\nclass QualtricsClient {\n    constructor(engine, variant) {\n        this.engine = engine\n        this.trialData = {}\n        this.metaData = {\n            'ExperimentNameShort': variant.testNameShort,\n            'BuildTestID': variant.buildTestID,\n            'userAgent': navigator.userAgent.replace(',', '|').replace(';','|'),\n            'RecipientFirstName': 'N/A',\n            'RecipientLastName': 'N/A',\n            'RecipientEmail': 'N/A',\n            'ExternalReference': 'N/A'\n        }\n    }\n\n    collectTrialData(root) {\n        let current = root\n        while(current !== null) {\n            if (current.trial !== null) {\n                current.trial.columns.forEach((column, _) => {\n                    if (column in this.trialData) {\n                        this.trialData[column].push(current.trial[column])\n                    } else {\n                        this.trialData[column] = [current.trial[column]]\n                    }\n                })\n            }\n            \n            current = current.next\n        }\n    }\n\n    collectMetadata(key, value) {\n        this.metaData[key] = value\n    }\n\n    submit(root) {\n        this.collectTrialData(root)\n\n        if (window.location.host === \"georgetown.az1.qualtrics.com\") {\n            for (const [key, values] of Object.entries(this.trialData)) {\n                Qualtrics.SurveyEngine.setEmbeddedData(key, values.join(';'))\n            }\n            for (const [key, value] of Object.entries(this.metaData)) {\n                Qualtrics.SurveyEngine.setEmbeddedData(key, value)\n            }\n\n            this.engine.clickNextButton()\n        }\n    }\n}\n\n//# sourceURL=webpack://behavioral/./wordRepetition/qualtricsClient.js?");

/***/ }),

/***/ "./wordRepetition/screens/base.js":
/*!****************************************!*\
  !*** ./wordRepetition/screens/base.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Screen)\n/* harmony export */ });\n/* harmony import */ var _shared_components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/container */ \"./shared/components/container.js\");\n\n\n\nclass Screen {\n    constructor(orchestrator) {\n        this.orchestrator = orchestrator\n    }\n\n    get clickHandlers() { return {} }\n\n    get timeouts() { return [] }\n\n    audioContainerClickHandler(audio) {\n        audio.addEventListener('ended', () => this.containerClickHander())\n        audio.play()\n    }\n\n    containerClickHander() {\n        _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.off('click')\n        this.orchestrator.next()\n    }\n\n    timeoutContainerClickHandler() {\n        _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.off('click')\n        this.orchestrator.reenterSequence()\n    }\n\n    setClasses() {\n        for (const [component, settings] of this.components.entries()) {\n            for (const [setting, value] of Object.entries(settings)) {\n                if (setting === 'addClass') component.removeClass()\n                component[setting](value)\n            }\n        }\n    }\n\n    setClickHandlers() {\n        for (const [id, callback] of Object.entries(this.clickHandlers)) {\n            const element = jQuery(`#${id}`)\n            element.off('click')\n            element.on('click', callback)\n        }\n    }\n\n    setTimeouts() {\n        this.timeouts.forEach((milliseconds, callback) => setTimeout(callback, milliseconds))\n    }\n}\n\n//# sourceURL=webpack://behavioral/./wordRepetition/screens/base.js?");

/***/ }),

/***/ "./wordRepetition/screens/instruction.js":
/*!***********************************************!*\
  !*** ./wordRepetition/screens/instruction.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InstructionOne: () => (/* binding */ InstructionOne),\n/* harmony export */   ParticipantId: () => (/* binding */ ParticipantId)\n/* harmony export */ });\n/* harmony import */ var _shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/instructionButtons */ \"./shared/components/instructionButtons.js\");\n/* harmony import */ var _shared_components_participantID__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/participantID */ \"./shared/components/participantID.js\");\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ \"./wordRepetition/screens/base.js\");\n\n\n\n\n\n\nclass ParticipantId extends _base__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_participantID__WEBPACK_IMPORTED_MODULE_1__.PARTICIPANT_ID_CONTAINER, {}],\n        ])\n    }\n\n    get clickHandlers() {\n        return {submitButton: () => this.handleSubmit()}\n    }\n\n    handleSubmit() {\n        this.orchestrator.collectMetadata('SubjectID', jQuery('#participantIdInput')[0].value)\n        this.orchestrator.next()\n    }\n}\n\n\nclass InstructionOne extends _base__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__.TEXT_CONTAINER, {text: this.orchestrator.variant.instructionOne, addClass: 'base-text large-text'}],\n            [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__.INSTRUCTION_BUTTON_CONTAINER, {}]\n        ])\n    }\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.orchestrator.next(),\n            previousButton: () => this.orchestrator.previous()\n        }\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./wordRepetition/screens/instruction.js?");

/***/ }),

/***/ "./wordRepetition/screens/transition.js":
/*!**********************************************!*\
  !*** ./wordRepetition/screens/transition.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Begin: () => (/* binding */ Begin),\n/* harmony export */   Break: () => (/* binding */ Break),\n/* harmony export */   Complete: () => (/* binding */ Complete),\n/* harmony export */   LetsPractice: () => (/* binding */ LetsPractice),\n/* harmony export */   TimeOut: () => (/* binding */ TimeOut)\n/* harmony export */ });\n/* harmony import */ var _shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/instructionButtons */ \"./shared/components/instructionButtons.js\");\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ \"./wordRepetition/screens/base.js\");\n\n\n\n\n\nclass Begin extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {text: `Any questions?\\nLet's begin.`}],\n        ])\n    }\n\n    get clickHandlers() {\n        return {\n            container: () => {\n                this.audioContainerClickHandler(this.orchestrator.variant.beginAudio)\n            }\n        }\n    }\n}\n\n\nclass Break extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {\n                text: 'Take a break. Click or touch anywhere to continue.',\n                addClass: 'base-text extra-large-text blue'\n            }]\n        ])\n    }\n\n    get clickHandlers() {\n        return {container: () => this.containerClickHander()}\n    }\n}\n\n\nclass LetsPractice extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    get components() {\n       return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {text: `Let's Practice.`, addClass: 'base-text extra-large-text'}],\n            [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__.INSTRUCTION_BUTTON_CONTAINER, {}]\n        ])\n    }\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.orchestrator.next(),\n            previousButton: () => this.orchestrator.previous()\n        }\n    }\n}\n\n\nclass TimeOut extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {text: 'Click or touch to continue.'}]\n        ])\n    }\n\n    get clickHandlers() {\n        return { container: () => this.timeoutContainerClickHandler() }\n    }\n}\n\n\nclass Complete extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {addClass: 'base-text large-text', text: `You've completed this exercise!`}]\n        ])\n    }\n\n    get timeouts() {\n        return new Map([\n            [() => this.orchestrator.complete(), 1000]\n        ])\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./wordRepetition/screens/transition.js?");

/***/ }),

/***/ "./wordRepetition/screens/trial.js":
/*!*****************************************!*\
  !*** ./wordRepetition/screens/trial.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Trial: () => (/* binding */ Trial),\n/* harmony export */   \"default\": () => (/* binding */ Trial)\n/* harmony export */ });\n/* harmony import */ var _shared_components_rightChevron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/rightChevron */ \"./shared/components/rightChevron.js\");\n/* harmony import */ var _shared_components_videoContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/videoContainer */ \"./shared/components/videoContainer.js\");\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ \"./wordRepetition/screens/base.js\");\n\n\n\n\n\n\nclass Trial extends _base__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    constructor(orchestrator, trialManager) {\n        super(orchestrator)\n        this.trialManager = trialManager\n    }\n\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__.TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],\n            [_shared_components_videoContainer__WEBPACK_IMPORTED_MODULE_1__.VIDEO_CONTAINER, {}],\n            [_shared_components_rightChevron__WEBPACK_IMPORTED_MODULE_0__.PROCEED_CONTAINER, {}]\n        ])\n    }\n\n    get clickHandlers() {\n        return {\n            rightChevron: (event) => this.proceedClickHandler(event),\n        }\n    }\n\n    proceedClickHandler(event) {\n        event.stopPropagation()  // required in order to prevent container on clicks from triggering immediately after being set\n        clearTimeout(this.timeoutID)\n        this.orchestrator.currentTrial.responseTime = new Date()\n        _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__.TEXT_CONTAINER.show()\n        this.orchestrator.next()\n    }\n\n    startTrial() {\n        _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__.TEXT_CONTAINER.show()\n        _shared_components_videoContainer__WEBPACK_IMPORTED_MODULE_1__.VIDEO_CONTAINER.hide()\n        _shared_components_rightChevron__WEBPACK_IMPORTED_MODULE_0__.PROCEED_CONTAINER.hide()\n\n        setTimeout(() => {\n            _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__.TEXT_CONTAINER.hide()\n            _shared_components_videoContainer__WEBPACK_IMPORTED_MODULE_1__.VIDEO_CONTAINER.show()\n            _shared_components_videoContainer__WEBPACK_IMPORTED_MODULE_1__.VIDEO_SOURCE.attr('src', this.orchestrator.currentTrial.source)\n            _shared_components_videoContainer__WEBPACK_IMPORTED_MODULE_1__.VIDEO_CONTAINER.off('ended')\n            _shared_components_videoContainer__WEBPACK_IMPORTED_MODULE_1__.VIDEO_CONTAINER.on('ended', () => {\n                _shared_components_videoContainer__WEBPACK_IMPORTED_MODULE_1__.VIDEO_CONTAINER.hide()\n                _shared_components_rightChevron__WEBPACK_IMPORTED_MODULE_0__.PROCEED_CONTAINER.show()\n            })\n            _shared_components_videoContainer__WEBPACK_IMPORTED_MODULE_1__.VIDEO_CONTAINER[0].load()\n            _shared_components_videoContainer__WEBPACK_IMPORTED_MODULE_1__.VIDEO_CONTAINER[0].play().then(() => {\n                this.timeoutID = setTimeout(() => {\n                    this.orchestrator.currentTrial.TimedOut = true\n                    this.orchestrator.currentTrial.responseTime = new Date()\n                    _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__.TEXT_CONTAINER.show()\n                    this.orchestrator.timedOut()\n                }, this.orchestrator.variant.timeToTimeout)\n            })\n            // Start time used to compute RT is recorded when the audio plays\n            this.orchestrator.currentTrial.startTime = new Date()\n        }, 100)\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./wordRepetition/screens/trial.js?");

/***/ }),

/***/ "./wordRepetition/sequenceNode.js":
/*!****************************************!*\
  !*** ./wordRepetition/sequenceNode.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SequenceNode)\n/* harmony export */ });\n\n\nclass SequenceNode {\n    constructor(screen) {\n        this.screen = screen\n        this.previous = null\n        this.next = null\n        this.trial = null\n    }\n\n    initializeTrial(trialClass, trial) {\n        this.trial = new trialClass(trial)\n    }\n}\n\n//# sourceURL=webpack://behavioral/./wordRepetition/sequenceNode.js?");

/***/ }),

/***/ "./wordRepetition/task.js":
/*!********************************!*\
  !*** ./wordRepetition/task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _orchestrator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orchestrator */ \"./wordRepetition/orchestrator.js\");\n/* harmony import */ var _qualtricsClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qualtricsClient */ \"./wordRepetition/qualtricsClient.js\");\n/* harmony import */ var _variants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variants */ \"./wordRepetition/variants.js\");\n/* harmony import */ var _shared_components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/container */ \"./shared/components/container.js\");\n\n\n\n\n\n\nclass Task {\n    constructor(data, engine, variantString) {\n        jQuery(\"#Questions\").remove()\n        jQuery(\"#PushStickyFooter\").remove()\n        jQuery(\"#Plug\").hide()\n        jQuery(\".SkinInner\").hide()\n        jQuery(\"#Wrapper\").append(_shared_components_container__WEBPACK_IMPORTED_MODULE_3__.CONTAINER)\n        \n        console.log('hello')\n        const variant = (0,_variants__WEBPACK_IMPORTED_MODULE_2__.variantFromString)(variantString)\n        this.orchestrator = new _orchestrator__WEBPACK_IMPORTED_MODULE_0__[\"default\"](variant, new _qualtricsClient__WEBPACK_IMPORTED_MODULE_1__[\"default\"](engine, variant))\n        this.orchestrator.initialize(data)\n        this.orchestrator.render()\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./wordRepetition/task.js?");

/***/ }),

/***/ "./wordRepetition/trial.js":
/*!*********************************!*\
  !*** ./wordRepetition/trial.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Trial: () => (/* binding */ Trial)\n/* harmony export */ });\n\nclass Trial {\n    constructor(config) {\n        this.ItemNum = config.ItemNum\n        this.TrialType = config.TrialType\n        this.Item = config.Item\n        this.startTime = null\n        this.responseTime = null\n        this.TimedOut = false\n        this.Accuracy = -1\n        this.Repetitions = 0\n        this.TrialWasAdministered = true\n    }\n\n    get columns() {\n        return [\n            ...Object.keys(this),\n            'TimeOnItem',\n            'Time',\n            'Date',\n        ]\n    }\n\n    get TimeOnItem() {\n        return this.responseTime - this.startTime\n    }\n\n    get Time() {\n        return this.startTime.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h24'})\n    }\n\n    get Date() {\n        return this.startTime.toLocaleDateString('en-US')\n    }\n\n    get source() {\n        return `https://crlabgeorgetown.github.io/behavioral/static/wordRepetition/${this.Item}.mp4`\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./wordRepetition/trial.js?");

/***/ }),

/***/ "./wordRepetition/variants.js":
/*!************************************!*\
  !*** ./wordRepetition/variants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Pseudoword: () => (/* binding */ Pseudoword),\n/* harmony export */   Realword: () => (/* binding */ Realword),\n/* harmony export */   variantFromString: () => (/* binding */ variantFromString)\n/* harmony export */ });\n/* harmony import */ var _static_wordReading_beep_440Hz_300ms_wav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../static/wordReading/beep_440Hz_300ms.wav */ \"./static/wordReading/beep_440Hz_300ms.wav\");\n/* harmony import */ var _static_wordRepetition_100_ETID_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/wordRepetition/100_ETID.wav */ \"./static/wordRepetition/100_ETID.wav\");\n/* harmony import */ var _static_wordRepetition_101_ETID_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/wordRepetition/101_ETID.wav */ \"./static/wordRepetition/101_ETID.wav\");\n/* harmony import */ var _screens_instruction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/instruction */ \"./wordRepetition/screens/instruction.js\");\n/* harmony import */ var _screens_transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/transition */ \"./wordRepetition/screens/transition.js\");\n/* harmony import */ var _trial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trial */ \"./wordRepetition/trial.js\");\n\n\n\n\n\n\n\n\nconst PSEUDOWORD_REPETITION = 'PSEUDOWORD_REPETITION'\nconst REALWORD_REPETITION = 'REALWORD_REPETITION'\n\n\nfunction variantFromString(string) {\n    return new {\n        [PSEUDOWORD_REPETITION]: Pseudoword,\n        [REALWORD_REPETITION]: Realword\n    }[string]()\n}\n\n\nclass Base {\n    constructor() {\n        this.fixationAudio = new Audio(_static_wordReading_beep_440Hz_300ms_wav__WEBPACK_IMPORTED_MODULE_0__)\n        this.timeToTimeout = 10000\n    }\n}\n\n\nclass Pseudoword extends Base {\n    constructor() {\n        super()\n        this.screens = [\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_3__.ParticipantId,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_3__.InstructionOne,\n            _screens_transition__WEBPACK_IMPORTED_MODULE_4__.LetsPractice\n        ]\n        this.instructionOne = 'You will hear a word that is not real.\\nAll of these words are made up.\\nPlease repeat the word.'\n        this.beginAudio = new Audio(_static_wordRepetition_100_ETID_wav__WEBPACK_IMPORTED_MODULE_1__)\n        this.trialClass = _trial__WEBPACK_IMPORTED_MODULE_5__.Trial\n        this.testNameShort = 'PseudowordRepReadMap'\n        this.buildTestID = 238\n        this.ePrimeTemplateID = 100\n    }\n}\n\n\nclass Realword extends Base {\n    constructor() {\n        super()\n        this.screens = [\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_3__.ParticipantId,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_3__.InstructionOne,\n            _screens_transition__WEBPACK_IMPORTED_MODULE_4__.LetsPractice\n        ]\n        this.instructionOne = 'You will hear a word.\\n\\nPlease repeat the word.'\n        this.beginAudio = new Audio(_static_wordRepetition_101_ETID_wav__WEBPACK_IMPORTED_MODULE_2__)\n        this.trialClass = _trial__WEBPACK_IMPORTED_MODULE_5__.Trial\n        this.testNameShort = 'RealwordRepReadMap'\n        this.buildTestID = 239\n        this.ePrimeTemplateID = 101\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./wordRepetition/variants.js?");

/***/ }),

/***/ "./static/images/rightChevron.png":
/*!****************************************!*\
  !*** ./static/images/rightChevron.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7981b55cd02dd66aaa94.png\";\n\n//# sourceURL=webpack://behavioral/./static/images/rightChevron.png?");

/***/ }),

/***/ "./static/wordReading/beep_440Hz_300ms.wav":
/*!*************************************************!*\
  !*** ./static/wordReading/beep_440Hz_300ms.wav ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9c7fa9174eba13523787.wav\";\n\n//# sourceURL=webpack://behavioral/./static/wordReading/beep_440Hz_300ms.wav?");

/***/ }),

/***/ "./static/wordRepetition/100_ETID.wav":
/*!********************************************!*\
  !*** ./static/wordRepetition/100_ETID.wav ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"76a4d7962f6381388214.wav\";\n\n//# sourceURL=webpack://behavioral/./static/wordRepetition/100_ETID.wav?");

/***/ }),

/***/ "./static/wordRepetition/101_ETID.wav":
/*!********************************************!*\
  !*** ./static/wordRepetition/101_ETID.wav ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"063a36739f68dcfc14dc.wav\";\n\n//# sourceURL=webpack://behavioral/./static/wordRepetition/101_ETID.wav?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./wordRepetition/task.js");
/******/ 	wordRepetition = __webpack_exports__;
/******/ 	
/******/ })()
;