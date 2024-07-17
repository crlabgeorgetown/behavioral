/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var semanticRelatedness;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./semanticRelatedness/orchestrator.js":
/*!*********************************************!*\
  !*** ./semanticRelatedness/orchestrator.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Orchestrator)\n/* harmony export */ });\n/* harmony import */ var _shared_components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/container */ \"./shared/components/container.js\");\n/* harmony import */ var _screens_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/transition */ \"./semanticRelatedness/screens/transition.js\");\n/* harmony import */ var _screens_trial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/trial */ \"./semanticRelatedness/screens/trial.js\");\n/* harmony import */ var _sequenceNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sequenceNode */ \"./semanticRelatedness/sequenceNode.js\");\n\n\n\n\n\n\nclass Orchestrator {\n\n    constructor(variant, client) {\n        this.client = client\n        this.variant = variant\n        this.root = null\n        this.previousScreen = null\n        this.currentScreen = null\n        this.beginScreen = new _screens_transition__WEBPACK_IMPORTED_MODULE_1__.Begin(this)\n        this.breakScreen = new _screens_transition__WEBPACK_IMPORTED_MODULE_1__.Break(this)\n        this.completeScreen = new _screens_transition__WEBPACK_IMPORTED_MODULE_1__.Complete(this)\n        this.incorrectScreen = new _screens_transition__WEBPACK_IMPORTED_MODULE_1__.Incorrect(this)\n        this.timeoutScreen = new _screens_transition__WEBPACK_IMPORTED_MODULE_1__.TimeOut(this)\n        this.trialScreen = new _screens_trial__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this)\n    }\n\n    get currentTrial() {\n        return this.currentScreen.trial\n    }\n\n    initialize(data) {\n        let previous = null\n        let current = null\n        this.variant.screens.forEach((screen, _) => {\n            previous = current\n            current = new _sequenceNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"](new screen(this))\n\n            if (this.root === null) {\n                this.root = current\n                this.currentScreen = this.root\n            }\n\n            if (previous) previous.next = current\n            current.previous = previous\n        })\n\n        let previousRow = null\n        data.forEach((row, _) => {\n            previous = current\n            \n            if (previousRow && previousRow.Procedure === 'showlastpractice') {\n                current = new _sequenceNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.beginScreen)\n\n                previous.next = current\n                current.previous = previous\n                previous = current\n            }\n            \n            if (row.Procedure === 'showasbreak') {\n                current = new _sequenceNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.breakScreen)\n            } else {\n                current = new _sequenceNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.trialScreen)\n                current.initializeTrial(this.variant.trialClass, row)\n            }\n\n            previous.next = current\n            current.previous = previous\n            previousRow = row\n        })\n\n        current.next = new _sequenceNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.completeScreen)\n    }\n\n    collectMetadata(key, value) {\n        this.client.collectMetadata(key, value)\n    }\n\n    complete() {\n        this.client.submit(this.root)\n        this.render()\n    }\n\n    timedOut() {\n        this.previousScreen = this.currentScreen\n        this.currentScreen = new _sequenceNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.timeoutScreen)\n        this.render()\n    }\n\n    reenterSequence() {\n        this.currentScreen = this.previousScreen.next\n        this.render()\n        if (this.currentScreen.trial !== null) this.currentScreen.screen.startTrial()\n    }\n\n    replay() {\n        const replayTrial = new _sequenceNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.trialScreen)\n        replayTrial.initializeTrial(this.variant.trialClass, this.currentTrial)\n\n        const incorrectScreen = new _sequenceNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.incorrectScreen)\n        \n        incorrectScreen.next = replayTrial\n        replayTrial.next = this.currentScreen.next\n        this.currentScreen.next = incorrectScreen\n\n        this.next()\n    }\n\n    next() {\n        this.currentScreen = this.currentScreen.next\n        this.render()\n        if (this.currentScreen.trial !== null) this.currentScreen.screen.startTrial()\n    }\n\n    previous() {\n        this.currentScreen = this.currentScreen.previous\n        this.render()\n    }\n\n    render() {\n        _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.children().detach()\n        for (const [component, ] of this.currentScreen.screen.components.entries()) {\n            _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.append(component)\n        }\n        this.currentScreen.screen.setClasses()\n        this.currentScreen.screen.setClickHandlers()\n        this.currentScreen.screen.setTimeouts()\n    }\n}\n\n//# sourceURL=webpack://behavioral/./semanticRelatedness/orchestrator.js?");

/***/ }),

/***/ "./semanticRelatedness/qualtricsClient.js":
/*!************************************************!*\
  !*** ./semanticRelatedness/qualtricsClient.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ QualtricsClient)\n/* harmony export */ });\n\n\nclass QualtricsClient {\n    constructor(engine, variant) {\n        this.engine = engine\n        this.trialData = {}\n        this.metaData = {\n            'ExperimentNameShort': variant.testNameShort,\n            'BuildTestID': variant.buildTestID,\n            'userAgent': navigator.userAgent.replace(',', '|').replace(';','|'),\n            'RecipientFirstName': 'N/A',\n            'RecipientLastName': 'N/A',\n            'RecipientEmail': 'N/A',\n            'ExternalReference': 'N/A'\n        }\n    }\n\n    collectTrialData(root) {\n        let current = root\n        while(current !== null) {\n            if (current.trial !== null) {\n                current.trial.columns.forEach((column, _) => {\n                    if (column in this.trialData) {\n                        this.trialData[column].push(current.trial[column])\n                    } else {\n                        this.trialData[column] = [current.trial[column]]\n                    }\n                })\n            }\n            \n            current = current.next\n        }\n    }\n\n    collectMetadata(key, value) {\n        this.metaData[key] = value\n    }\n\n    submit(root) {\n        this.collectTrialData(root)\n\n        if (window.location.host === \"georgetown.az1.qualtrics.com\") {\n            for (const [key, values] of Object.entries(this.trialData)) {\n                Qualtrics.SurveyEngine.setEmbeddedData(key, values.join(';'))\n            }\n            for (const [key, value] of Object.entries(this.metaData)) {\n                Qualtrics.SurveyEngine.setEmbeddedData(key, value)\n            }\n\n            this.engine.clickNextButton()\n        }\n    }\n}\n\n//# sourceURL=webpack://behavioral/./semanticRelatedness/qualtricsClient.js?");

/***/ }),

/***/ "./semanticRelatedness/screens/base.js":
/*!*********************************************!*\
  !*** ./semanticRelatedness/screens/base.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Screen)\n/* harmony export */ });\n/* harmony import */ var _shared_components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/container */ \"./shared/components/container.js\");\n\n\n\nclass Screen {\n    constructor(orchestrator) {\n        this.orchestrator = orchestrator\n    }\n\n    get clickHandlers() { return {} }\n\n    get timeouts() { return [] }\n\n    audioContainerClickHandler(audio) {\n        audio.addEventListener('ended', () => this.containerClickHandler())\n        audio.play()\n    }\n\n    containerClickHandler() {\n        _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.off('click')\n        this.orchestrator.next()\n    }\n\n    timeoutContainerClickHandler() {\n        _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.off('click')\n        this.orchestrator.reenterSequence()\n    }\n\n    setClasses() {\n        for (const [component, settings] of this.components.entries()) {\n            for (const [setting, value] of Object.entries(settings)) {\n                if (setting === 'addClass') component.removeClass()\n                component[setting](value)\n            }\n        }\n    }\n\n    setClickHandlers() {\n        for (const [id, callback] of Object.entries(this.clickHandlers)) {\n            const element = jQuery(`#${id}`)\n            element.off('click')\n            element.on('click', callback)\n        }\n    }\n\n    setTimeouts() {\n        this.timeouts.forEach((milliseconds, callback) => setTimeout(callback, milliseconds))\n    }\n}\n\n//# sourceURL=webpack://behavioral/./semanticRelatedness/screens/base.js?");

/***/ }),

/***/ "./semanticRelatedness/screens/instruction.js":
/*!****************************************************!*\
  !*** ./semanticRelatedness/screens/instruction.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InputDevice: () => (/* binding */ InputDevice),\n/* harmony export */   InstructionOne: () => (/* binding */ InstructionOne),\n/* harmony export */   InstructionThree: () => (/* binding */ InstructionThree),\n/* harmony export */   InstructionTwo: () => (/* binding */ InstructionTwo),\n/* harmony export */   ParticipantId: () => (/* binding */ ParticipantId)\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./semanticRelatedness/screens/base.js\");\n/* harmony import */ var _shared_components_inputDevices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/inputDevices */ \"./shared/components/inputDevices.js\");\n/* harmony import */ var _shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/instructionButtons */ \"./shared/components/instructionButtons.js\");\n/* harmony import */ var _shared_components_participantID__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/participantID */ \"./shared/components/participantID.js\");\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n\n\n\n\n\n\n\nclass InputDevice extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_inputDevices__WEBPACK_IMPORTED_MODULE_1__.INPUT_DEVICE_CONTAINER, {}],\n            [_shared_components_inputDevices__WEBPACK_IMPORTED_MODULE_1__.INPUT_DEVICE_LABEL_CONTAINER, {}],\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_4__.TEXT_CONTAINER, {text: 'Please choose your input device to start.', addClass: 'base-text large-text'}],\n        ])\n    }\n\n    get clickHandlers() {\n        return {\n            mouseButton: () => this.inputDeviceHandler('mouse'),\n            trackpadButton: () => this.inputDeviceHandler('trackpad'),\n            touchscreenButton: () => this.inputDeviceHandler('touchscreen'),\n            otherButton: () => this.inputDeviceHandler('other'),\n        }\n    }\n\n    inputDeviceHandler(inputDevice) {\n        this.orchestrator.collectMetadata('inputDevice', inputDevice)\n        this.orchestrator.next()\n    }\n}\n\n\nclass ParticipantId extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_participantID__WEBPACK_IMPORTED_MODULE_3__.PARTICIPANT_ID_CONTAINER, {}],\n        ])\n    }\n\n    get clickHandlers() {\n        return {submitButton: () => this.handleSubmit()}\n    }\n\n    handleSubmit() {\n        this.orchestrator.collectMetadata('SubjectID', jQuery('#participantIdInput')[0].value)\n        this.orchestrator.next()\n    }\n}\n\n\nclass InstructionOne extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_4__.TEXT_CONTAINER, {text: this.orchestrator.variant.instructionOne, addClass: 'base-text large-text'}],\n            [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_2__.INSTRUCTION_BUTTON_CONTAINER, {}]\n        ])\n    }\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.orchestrator.next(),\n            previousButton: () => this.orchestrator.previous()\n        }\n    }\n}\n\n\nclass InstructionTwo extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_4__.TEXT_CONTAINER, {text: this.orchestrator.variant.instructionTwo, addClass: 'base-text large-text'}],\n            [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_2__.INSTRUCTION_BUTTON_CONTAINER, {}]\n        ])\n    }\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.orchestrator.next(),\n            previousButton: () => this.orchestrator.previous()\n        }\n    }\n}\n\n\nclass InstructionThree extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_4__.TEXT_CONTAINER, {text: this.orchestrator.variant.instructionThree, addClass: 'base-text large-text'}],\n            [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_2__.INSTRUCTION_BUTTON_CONTAINER, {}]\n        ])\n    }\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.orchestrator.next(),\n            previousButton: () => this.orchestrator.previous()\n        }\n    }\n}\n\n\n\n\n\n//# sourceURL=webpack://behavioral/./semanticRelatedness/screens/instruction.js?");

/***/ }),

/***/ "./semanticRelatedness/screens/transition.js":
/*!***************************************************!*\
  !*** ./semanticRelatedness/screens/transition.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Begin: () => (/* binding */ Begin),\n/* harmony export */   Break: () => (/* binding */ Break),\n/* harmony export */   Complete: () => (/* binding */ Complete),\n/* harmony export */   Incorrect: () => (/* binding */ Incorrect),\n/* harmony export */   LetsPractice: () => (/* binding */ LetsPractice),\n/* harmony export */   TimeOut: () => (/* binding */ TimeOut)\n/* harmony export */ });\n/* harmony import */ var _shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/instructionButtons */ \"./shared/components/instructionButtons.js\");\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ \"./semanticRelatedness/screens/base.js\");\n\n\n\n\n\nclass Begin extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {text: `Any questions?\\nLet's begin.`}],\n        ])\n    }\n\n    get clickHandlers() {\n        return {container: () => this.containerClickHandler()}\n    }\n}\n\n\nclass Break extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {\n                text: 'Take a break. Click or touch anywhere to continue.',\n                addClass: 'base-text extra-large-text blue'\n            }]\n        ])\n    }\n\n    get clickHandlers() {\n        return {container: () => this.containerClickHandler()}\n    }\n}\n\n\nclass Incorrect extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    get components() {\n        return new Map([\n            [\n                _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, \n                {\n                    text: 'Incorrect, click or touch anywhere to try again.',\n                    addClass: 'base-text extra-large-text red'\n                }\n            ]\n        ])\n   }\n\n    get clickHandlers() {\n        return {container: () => this.containerClickHandler()}\n    }\n}\n\n\nclass LetsPractice extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    get components() {\n       return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {text: `Let's Practice.`, addClass: 'base-text extra-large-text'}],\n            [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__.INSTRUCTION_BUTTON_CONTAINER, {}]\n        ])\n    }\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.orchestrator.next(),\n            previousButton: () => this.orchestrator.previous()\n        }\n    }\n}\n\n\nclass TimeOut extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {text: 'Click or touch to continue.'}]\n        ])\n    }\n\n    get clickHandlers() {\n        return { container: () => this.timeoutContainerClickHandler() }\n    }\n}\n\n\nclass Complete extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {addClass: 'base-text large-text', text: `You've completed this exercise!`}]\n        ])\n    }\n\n    get timeouts() {\n        return new Map([\n            [() => this.orchestrator.complete(), 1000]\n        ])\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./semanticRelatedness/screens/transition.js?");

/***/ }),

/***/ "./semanticRelatedness/screens/trial.js":
/*!**********************************************!*\
  !*** ./semanticRelatedness/screens/trial.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Trial)\n/* harmony export */ });\n/* harmony import */ var _shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/responseButtons */ \"./shared/components/responseButtons.js\");\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ \"./semanticRelatedness/screens/base.js\");\n\n\n\n\n\nclass Trial extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n\n    get components() {\n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],\n            [_shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_0__.BUTTON_CONTAINER, {}],\n            [_shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_0__.BUTTON_LABEL_CONTAINER, {}]\n        ])\n    }\n\n    get clickHandlers() {\n        return {\n            greenButton: (event) => this.responseClickHandler(event, 'yes'),\n            redButton: (event) => this.responseClickHandler(event, 'no'),\n        }\n    }\n\n    responseClickHandler(event, response) {\n        event.stopPropagation()  // required in order to prevent container on clicks from triggering immediately after being set\n        clearTimeout(this.timeoutID)\n        this.orchestrator.currentTrial.responseTime = new Date()\n        this.orchestrator.currentTrial.Response = response\n\n        const isCorrect = this.orchestrator.currentTrial.CRESP === response\n        const isPractice = this.orchestrator.currentTrial.TrialType === 'Practice' \n        \n        if (!isCorrect && isPractice) {\n            this.orchestrator.replay()\n        } else {\n            this.orchestrator.next()\n        }\n    }\n\n    startTrial() {\n        setTimeout(() => {\n            _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER.text(`${this.orchestrator.currentTrial.Sound1}\\n${this.orchestrator.currentTrial.Sound2}`)\n            this.orchestrator.currentTrial.startTime = new Date()\n            this.timeoutID = setTimeout(() => {\n                this.orchestrator.currentTrial.TimedOut = true\n                this.orchestrator.currentTrial.responseTime = new Date()\n                this.orchestrator.timedOut()\n            }, 10000)\n        }, 500)\n    }\n}\n\n//# sourceURL=webpack://behavioral/./semanticRelatedness/screens/trial.js?");

/***/ }),

/***/ "./semanticRelatedness/sequenceNode.js":
/*!*********************************************!*\
  !*** ./semanticRelatedness/sequenceNode.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SequenceNode)\n/* harmony export */ });\n\nclass SequenceNode {\n    constructor(screen) {\n        this.screen = screen\n        this.previous = null\n        this.next = null\n        this.trial = null\n    }\n\n    initializeTrial(trialClass, trial) {\n        this.trial = new trialClass(trial)\n    }\n}\n\n//# sourceURL=webpack://behavioral/./semanticRelatedness/sequenceNode.js?");

/***/ }),

/***/ "./semanticRelatedness/task.js":
/*!*************************************!*\
  !*** ./semanticRelatedness/task.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _shared_components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/container */ \"./shared/components/container.js\");\n/* harmony import */ var _orchestrator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orchestrator */ \"./semanticRelatedness/orchestrator.js\");\n/* harmony import */ var _qualtricsClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qualtricsClient */ \"./semanticRelatedness/qualtricsClient.js\");\n/* harmony import */ var _variants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variants */ \"./semanticRelatedness/variants.js\");\n\n\n\n\n\n\nclass Task {\n    constructor(data, engine, variantString) {\n        jQuery(\"#Questions\").remove()\n        jQuery(\"#PushStickyFooter\").remove()\n        jQuery(\"#Plug\").hide()\n        jQuery(\".SkinInner\").hide()\n        jQuery(\"#Wrapper\").append(_shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER)\n        \n        const variant = (0,_variants__WEBPACK_IMPORTED_MODULE_3__.variantFromString)(variantString)\n        this.orchestrator = new _orchestrator__WEBPACK_IMPORTED_MODULE_1__[\"default\"](variant, new _qualtricsClient__WEBPACK_IMPORTED_MODULE_2__[\"default\"](engine, variant))\n        this.orchestrator.initialize(data)\n        this.orchestrator.render()\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./semanticRelatedness/task.js?");

/***/ }),

/***/ "./semanticRelatedness/trial.js":
/*!**************************************!*\
  !*** ./semanticRelatedness/trial.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WrittenTrial: () => (/* binding */ WrittenTrial)\n/* harmony export */ });\n\n\nclass WrittenTrial {\n    constructor(config) {\n        this.ItemNum = config.ItemNum\n        this.TrialType = config.TrialType\n        this.WordType = config.WordType\n        this.RelationType = config.RelationType\n        this.Sound1 = config.Sound1\n        this.Sound2 = config.Sound2\n        this.CRESP = config.CRESP\n        this.Response = null\n        this.startTime = null\n        this.responseTime = null\n        this.TimedOut = false\n    }\n\n    get columns() {\n        return [\n            ...Object.keys(this),\n            'Item',\n            'Time',\n            'Date',\n            'RT',\n            'Accuracy',\n            'TrialWasAdministered',\n            'Repetitions'\n        ]\n    }\n\n    get Repetitions() {\n        return 0\n    }\n\n    get TrialWasAdministered() {\n        return 1\n    }\n\n    get Accuracy() {\n        return this.Response === this.CRESP ? 1 : 0\n    }\n\n    get RT() {\n        return this.responseTime - this.startTime\n    }\n\n    get Item() {\n        return `${this.Sound1}-${this.Sound2}`\n    }\n\n    get Time() {\n        return this.startTime.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h24'})\n    }\n\n    get Date() {\n        return this.startTime.toLocaleDateString('en-US')\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./semanticRelatedness/trial.js?");

/***/ }),

/***/ "./semanticRelatedness/variants.js":
/*!*****************************************!*\
  !*** ./semanticRelatedness/variants.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   variantFromString: () => (/* binding */ variantFromString)\n/* harmony export */ });\n/* harmony import */ var _screens_instruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/instruction */ \"./semanticRelatedness/screens/instruction.js\");\n/* harmony import */ var _screens_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/transition */ \"./semanticRelatedness/screens/transition.js\");\n/* harmony import */ var _trial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trial */ \"./semanticRelatedness/trial.js\");\n\n\n\n\n\nconst AUDITORY = 'AUDITORY'\nconst WRITTEN = 'WRITTEN'\n\nconst INSTRUCTION_TWO = 'If they are related, press Related.\\nFor example, juice and cup.'\nconst INSTRUCTION_THREE = 'If they are NOT related, press Not Related.\\nFor example, juice and roof.'\n\n\nfunction variantFromString(string) {\n    return new {\n        [AUDITORY]: AuditorySemanticRelatedness,\n        [WRITTEN]: WrittenSemanticRelatedness,\n    }[string]()\n}\n\n\nclass AuditorySemanticRelatedness {\n    constructor() {\n        this.screens = [\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_0__.InputDevice,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_0__.ParticipantId,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionOne,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionTwo,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionThree,\n            _screens_transition__WEBPACK_IMPORTED_MODULE_1__.LetsPractice\n        ]\n        this.testNameShort = 'AuditorySemanticRelatednessJudgment'\n        this.buildTestID = 209\n        this.ePrimeTemplateID = 79\n        this.instructionOne = 'You will hear two words.'\n        this.instructionTwo = INSTRUCTION_TWO\n        this.instructionThree = INSTRUCTION_THREE\n        this.trialClass = _trial__WEBPACK_IMPORTED_MODULE_2__.WrittenTrial\n    }\n}\n\nclass WrittenSemanticRelatedness {\n    constructor() {\n        this.screens = [\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_0__.InputDevice,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_0__.ParticipantId,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionOne,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionTwo,\n            _screens_instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionThree,\n            _screens_transition__WEBPACK_IMPORTED_MODULE_1__.LetsPractice\n        ]\n        this.testNameShort = 'WrittenSemanticRelatednessJudgment'\n        this.buildTestID = 204\n        this.ePrimeTemplateID = 75\n        this.instructionOne = 'You will see two words.'\n        this.instructionTwo = INSTRUCTION_TWO\n        this.instructionThree = INSTRUCTION_THREE\n        this.trialClass = _trial__WEBPACK_IMPORTED_MODULE_2__.WrittenTrial\n    }\n}\n\n\n\n\n//# sourceURL=webpack://behavioral/./semanticRelatedness/variants.js?");

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

/***/ "./shared/components/textContainer.js":
/*!********************************************!*\
  !*** ./shared/components/textContainer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TEXT_CONTAINER: () => (/* binding */ TEXT_CONTAINER)\n/* harmony export */ });\nconst TEXT_CONTAINER = jQuery(\"<div/>\", {id: 'textContainer'})\n\n\n\n\n//# sourceURL=webpack://behavioral/./shared/components/textContainer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./semanticRelatedness/task.js");
/******/ 	semanticRelatedness = __webpack_exports__;
/******/ 	
/******/ })()
;