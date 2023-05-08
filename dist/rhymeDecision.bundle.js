/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var rhymeDecision;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./rhymeDecision/screens/auditoryTrial.js":
/*!************************************************!*\
  !*** ./rhymeDecision/screens/auditoryTrial.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuditoryTrialScreen\": () => (/* binding */ AuditoryTrialScreen)\n/* harmony export */ });\n/* harmony import */ var _shared_components_audioContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/audioContainer */ \"./shared/components/audioContainer.js\");\n/* harmony import */ var _shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/responseButtons */ \"./shared/components/responseButtons.js\");\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _shared_screens_decisionTrial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/screens/decisionTrial */ \"./shared/screens/decisionTrial.js\");\n\n\n\n\n\n\nclass AuditoryTrialScreen extends _shared_screens_decisionTrial__WEBPACK_IMPORTED_MODULE_3__.DecisionTrialScreen {\n    components = new Map([\n        [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__.TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text fixed-height'}],\n        [_shared_components_audioContainer__WEBPACK_IMPORTED_MODULE_0__.AUDIO_CONTAINER, {}],\n        [_shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__.BUTTON_CONTAINER, {}],\n        [_shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__.BUTTON_LABEL_CONTAINER, {}]\n    ])\n\n    render() {\n        setTimeout(() => {\n            this.task.newTrial()\n            super.render()\n            let sourceIndex = 1\n            _shared_components_audioContainer__WEBPACK_IMPORTED_MODULE_0__.AUDIO_SOURCE.attr('src', this.task.currentTrial.audioSource(1))\n            _shared_components_audioContainer__WEBPACK_IMPORTED_MODULE_0__.AUDIO_CONTAINER.off('ended')\n            _shared_components_audioContainer__WEBPACK_IMPORTED_MODULE_0__.AUDIO_CONTAINER.on('ended', () => {\n                switch (sourceIndex) {\n                    case 1:\n                        sourceIndex++\n                        _shared_components_audioContainer__WEBPACK_IMPORTED_MODULE_0__.AUDIO_SOURCE.attr('src', this.task.currentTrial.audioSource(2))\n                        _shared_components_audioContainer__WEBPACK_IMPORTED_MODULE_0__.AUDIO_CONTAINER[0].load()\n                        _shared_components_audioContainer__WEBPACK_IMPORTED_MODULE_0__.AUDIO_CONTAINER[0].play()\n                        break\n                    case 2:\n                        this.task.currentTrial.startTime = new Date()\n                        this.task.inTrial = true\n                        _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__.TEXT_CONTAINER.text('')\n                        this.timeoutID = setTimeout(() => this.responseClickHandler('NR'), 5000)\n                        break\n                }\n            })\n            _shared_components_audioContainer__WEBPACK_IMPORTED_MODULE_0__.AUDIO_CONTAINER[0].load()\n            _shared_components_audioContainer__WEBPACK_IMPORTED_MODULE_0__.AUDIO_CONTAINER[0].play()\n        }, 250)\n    }\n}\n\n\n\n//# sourceURL=webpack://js-crlab/./rhymeDecision/screens/auditoryTrial.js?");

/***/ }),

/***/ "./rhymeDecision/screens/instructions.js":
/*!***********************************************!*\
  !*** ./rhymeDecision/screens/instructions.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InstructionsOne\": () => (/* binding */ InstructionsOne),\n/* harmony export */   \"InstructionsThree\": () => (/* binding */ InstructionsThree),\n/* harmony export */   \"InstructionsTwo\": () => (/* binding */ InstructionsTwo)\n/* harmony export */ });\n/* harmony import */ var _shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/instructionButtons */ \"./shared/components/instructionButtons.js\");\n/* harmony import */ var _shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/responseButtons */ \"./shared/components/responseButtons.js\");\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _shared_screens_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/screens/base */ \"./shared/screens/base.js\");\n\n\n\n\n\n\nclass InstructionsOne extends _shared_screens_base__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    get components() {\n        let instructionText\n        switch (this.task.type) {\n            case 'auditory':\n                instructionText = 'You will hear a word.\\nSome of these words are real words.\\nOthers are not real words.'\n                break\n            case 'written':\n                instructionText = 'You will see two words.\\nDecide if they rhyme or not.'\n                break\n        }\n        \n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__.TEXT_CONTAINER, {text: instructionText, addClass: 'base-text large-text'}],\n            [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__.INSTRUCTION_BUTTON_CONTAINER, {}]\n        ])\n    }\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.instructionButtonClickHandler('next'),\n            previousButton: () => this.instructionButtonClickHandler('previous')\n        }\n    }\n}\n\n\nclass InstructionsTwo extends _shared_screens_base__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    components = new Map([\n        [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__.TEXT_CONTAINER, {text: 'If the words rhyme, press Rhyme.\\nFor example, hat and cat.'}],\n        [_shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__.BUTTON_CONTAINER, {}],\n        [_shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__.BUTTON_LABEL_CONTAINER, {}],\n        [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__.INSTRUCTION_BUTTON_CONTAINER, {}]\n    ])\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.instructionButtonClickHandler('next'),\n            previousButton: () => this.instructionButtonClickHandler('previous')\n        }\n    }\n}\n\n\nclass InstructionsThree extends _shared_screens_base__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    components = new Map([\n        [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__.TEXT_CONTAINER, {text: 'If the words do not rhyme, press No Rhyme.\\nFor example, hat and sit.'}],\n        [_shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__.BUTTON_CONTAINER, {}],\n        [_shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__.BUTTON_LABEL_CONTAINER, {}],\n        [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__.INSTRUCTION_BUTTON_CONTAINER, {}]\n    ])\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.instructionButtonClickHandler('next'),\n            previousButton: () => this.instructionButtonClickHandler('previous')\n        }\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./rhymeDecision/screens/instructions.js?");

/***/ }),

/***/ "./rhymeDecision/screens/writtenTrial.js":
/*!***********************************************!*\
  !*** ./rhymeDecision/screens/writtenTrial.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WrittenTrialScreen\": () => (/* binding */ WrittenTrialScreen)\n/* harmony export */ });\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/responseButtons */ \"./shared/components/responseButtons.js\");\n/* harmony import */ var _shared_screens_decisionTrial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/screens/decisionTrial */ \"./shared/screens/decisionTrial.js\");\n\n\n\n\n\nclass WrittenTrialScreen extends _shared_screens_decisionTrial__WEBPACK_IMPORTED_MODULE_2__.DecisionTrialScreen {\n    components = new Map([\n        [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_0__.TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}],\n        [_shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__.BUTTON_CONTAINER, {}],\n        [_shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__.BUTTON_LABEL_CONTAINER, {}]\n    ])\n\n    render() {\n        this.task.newTrial()\n        super.render()\n        setTimeout(() => {\n            _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_0__.TEXT_CONTAINER.text(`${this.task.currentTrial.Sound1}\\n${this.task.currentTrial.Sound2}`)\n            this.task.currentTrial.startTime = new Date()\n            this.task.inTrial = true\n            this.timeoutID = setTimeout(() => this.responseClickHandler('NR'), 5000)\n        }, 500)\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./rhymeDecision/screens/writtenTrial.js?");

/***/ }),

/***/ "./rhymeDecision/task.js":
/*!*******************************!*\
  !*** ./rhymeDecision/task.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _shared_screens_inputDevices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/screens/inputDevices */ \"./shared/screens/inputDevices.js\");\n/* harmony import */ var _screens_auditoryTrial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/auditoryTrial */ \"./rhymeDecision/screens/auditoryTrial.js\");\n/* harmony import */ var _screens_writtenTrial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/writtenTrial */ \"./rhymeDecision/screens/writtenTrial.js\");\n/* harmony import */ var _shared_screens_participantID__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/screens/participantID */ \"./shared/screens/participantID.js\");\n/* harmony import */ var _trial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trial */ \"./rhymeDecision/trial.js\");\n/* harmony import */ var _shared_task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/task */ \"./shared/task.js\");\n/* harmony import */ var _shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/responseButtons */ \"./shared/components/responseButtons.js\");\n/* harmony import */ var _screens_instructions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./screens/instructions */ \"./rhymeDecision/screens/instructions.js\");\n\n\n\n\n\n\n\n\n\n\nclass Task extends _shared_task__WEBPACK_IMPORTED_MODULE_5__.BaseTask {\n\tconstructor(data, engine, type) {\n        super()\n        \n        this.engine = engine\n        this.trials = []\n        this.data = data\n        this.dataIndex = 0\n        this.inTrial = false\n        this.type = type\n\n        this.initializeScreens()\n\t}\n\n    initializeScreens() {\n        _shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_6__.RED_LABEL.text('No Rhyme')\n        _shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_6__.GREEN_LABEL.text('Rhyme')\n\n        this.trialScreen = this.type === 'auditory' ? new _screens_auditoryTrial__WEBPACK_IMPORTED_MODULE_1__.AuditoryTrialScreen(this) : new _screens_writtenTrial__WEBPACK_IMPORTED_MODULE_2__.WrittenTrialScreen(this)\n        \n        this.instructionScreens = [\n            new _shared_screens_participantID__WEBPACK_IMPORTED_MODULE_3__.ParticipantIdScreen(this),\n            new _shared_screens_inputDevices__WEBPACK_IMPORTED_MODULE_0__.InputDevicesScreen(this), \n            new _screens_instructions__WEBPACK_IMPORTED_MODULE_7__.InstructionsOne(this),\n            new _screens_instructions__WEBPACK_IMPORTED_MODULE_7__.InstructionsTwo(this),\n            new _screens_instructions__WEBPACK_IMPORTED_MODULE_7__.InstructionsThree(this),\n            this.letsPracticeScreen,\n            this.trialScreen\n        ]\n\n        this.setupInstructionScreens()\n    }\n\n    get currentTrial() {\n        return this.trials[this.trials.length - 1]\n    }\n\n    get currentProcedure() {\n        return this.data[this.dataIndex].Procedure\n    }\n\n    get isDone() {\n        return this.dataIndex === this.data.length - 1\n    }\n\n    newTrial() {\n        this.trials.push(new _trial__WEBPACK_IMPORTED_MODULE_4__.Trial(this.data[this.dataIndex]))        \n    }\n\n    submit() {\n        const columns = {\n            'ItemNum': [],\n            'CRESP': [],\n            'TimedOut': [],\n            'RT': [],\n            'Accuracy': [],\n            'Response': [],\n            'Sound1': [],\n            'Sound2': [],\n            'RhymeMatch': [],\n            'OrthoMatch': [],\n            'TrialType': [],\n            'Time': []\n        }\n        const mouseMoveDistances = []\n        const mouseMoveDurations = []\n        const mouseMoveAverageVelocities = []\n        const firstMouseMoves = []\n\n        this.trials.map((trial) => {\n            let firstMouseMove, duration, distance, avgVelocity \n            [firstMouseMove, duration, distance, avgVelocity] = trial.computeMousemoveStats()\n            firstMouseMoves.push(firstMouseMove)\n            mouseMoveDurations.push(duration)\n            mouseMoveDistances.push(distance)\n            mouseMoveAverageVelocities.push(avgVelocity)\n            \n            for (const [key, values] of Object.entries(columns)) {\n                values.push(trial[key])\n            }\n        })\n\n        if (window.location.host === \"georgetown.az1.qualtrics.com\") {\n            for (const [key, values] of Object.entries(columns)) {\n                Qualtrics.SurveyEngine.setEmbeddedData(key, values.join(';'))\n            }\n            Qualtrics.SurveyEngine.setEmbeddedData('userAgent', navigator.userAgent.replace(',', '|').replace(';','|'))\n            Qualtrics.SurveyEngine.setEmbeddedData('inputDevice', this.inputDevice)\n            Qualtrics.SurveyEngine.setEmbeddedData('SubjectID', this.participantID)\n            Qualtrics.SurveyEngine.setEmbeddedData('firstMouseMoves', firstMouseMoves.join(';'))\n            Qualtrics.SurveyEngine.setEmbeddedData('mouseMoveDurations', mouseMoveDurations.join(';'))\n            Qualtrics.SurveyEngine.setEmbeddedData('mouseMoveDistances', mouseMoveDistances.join(';'))\n            Qualtrics.SurveyEngine.setEmbeddedData('mouseMoveAverageVelocities', mouseMoveAverageVelocities.join(';'))\n            Qualtrics.SurveyEngine.setEmbeddedData('RecipientFirstName', 'N/A')\n            Qualtrics.SurveyEngine.setEmbeddedData('RecipientLastName', 'N/A')\n            Qualtrics.SurveyEngine.setEmbeddedData('RecipientEmail', 'N/A')\n            Qualtrics.SurveyEngine.setEmbeddedData('ExternalReference', 'N/A')\n\n            this.engine.clickNextButton()\n        }\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./rhymeDecision/task.js?");

/***/ }),

/***/ "./rhymeDecision/trial.js":
/*!********************************!*\
  !*** ./rhymeDecision/trial.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Trial\": () => (/* binding */ Trial)\n/* harmony export */ });\n/* harmony import */ var _shared_trial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/trial */ \"./shared/trial.js\");\n\n\nclass Trial extends _shared_trial__WEBPACK_IMPORTED_MODULE_0__.BaseTrial {\n    constructor(config) {\n        super()\n        this.ItemNum = config.ItemNum\n        this.TrialType = config.TrialType\n        this.Sound1 = config.Sound1\n        this.Sound2 = config.Sound2\n        this.RhymeMatch = config.RhymeMatch\n        this.OrthoMatch = config.OrthoMatch\n        this.CRESP = config.CRESP\n        this.Response = null\n        this.startTime = null\n        this.responseTime = null\n    }\n\n    get RT() {\n        return this.responseTime - this.startTime\n    }\n\n    get TimedOut() {\n        return this.Response === 'NR'\n    }\n\n    get Accuracy() {\n        return this.Response === this.CRESP ? 1 : 0\n    }\n\n    get Time() {\n        return this.startTime.toTimeString().split(' ')[0]\n    }\n\n    audioSource(sourceIndex) {\n        const sound = sourceIndex === 1 ? this.Sound1 : this.Sound2\n        return `https://jslawjslaw.github.io/js-crlab/static/auditory_rhyme_decision_wav_files/${sound}.wav`\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./rhymeDecision/trial.js?");

/***/ }),

/***/ "./shared/components/audioContainer.js":
/*!*********************************************!*\
  !*** ./shared/components/audioContainer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AUDIO_CONTAINER\": () => (/* binding */ AUDIO_CONTAINER),\n/* harmony export */   \"AUDIO_SOURCE\": () => (/* binding */ AUDIO_SOURCE)\n/* harmony export */ });\nconst AUDIO_CONTAINER = jQuery(\"<audio/>\", {id: 'audioContainer'})\nconst AUDIO_SOURCE = jQuery(\"<source/>\", {id: 'audioSource', type: 'audio/wav'})\n\nAUDIO_CONTAINER.append(AUDIO_SOURCE)\n\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/components/audioContainer.js?");

/***/ }),

/***/ "./shared/components/beginOrPractice.js":
/*!**********************************************!*\
  !*** ./shared/components/beginOrPractice.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BEGIN_OR_PRACTICE_CONTAINER\": () => (/* binding */ BEGIN_OR_PRACTICE_CONTAINER)\n/* harmony export */ });\nconst BEGIN_OR_PRACTICE_CONTAINER = jQuery('<div/>', {\n    id: 'instructionButtonContainer', \n    class: 'instruction-button-container'\n})\n\n\nconst PRACTICE_BUTTON = jQuery('<div/>', {\n    id: 'practiceButton',\n    class: 'grey-button medium-button-text left-margined',\n    text: '<< Practice'\n}).hover(\n    () => PRACTICE_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => PRACTICE_BUTTON.css({background: '#A8A8A8'})\n)\n\n\nconst BEGIN_BUTTON = jQuery('<div/>', {\n    id: 'beginButton',\n    class: 'grey-button medium-button-text right-margined',\n    text: 'Begin >>'\n}).hover(\n    () => BEGIN_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => BEGIN_BUTTON.css({background: '#A8A8A8'})\n)\n\n\nBEGIN_OR_PRACTICE_CONTAINER.append(PRACTICE_BUTTON, BEGIN_BUTTON)\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/components/beginOrPractice.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"INPUT_DEVICE_CONTAINER\": () => (/* binding */ INPUT_DEVICE_CONTAINER),\n/* harmony export */   \"INPUT_DEVICE_LABEL_CONTAINER\": () => (/* binding */ INPUT_DEVICE_LABEL_CONTAINER)\n/* harmony export */ });\n/* harmony import */ var _static_images_joystick_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../static/images/joystick.png */ \"./static/images/joystick.png\");\n/* harmony import */ var _static_images_mouse_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/images/mouse.png */ \"./static/images/mouse.png\");\n/* harmony import */ var _static_images_touchscreen_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/images/touchscreen.png */ \"./static/images/touchscreen.png\");\n/* harmony import */ var _static_images_trackpad_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/images/trackpad.png */ \"./static/images/trackpad.png\");\n\n\n\n\n\n\nconst INPUT_DEVICE_CONTAINER = jQuery('<div/>', {id: 'inputDeviceContainer', class: 'device-container'})\n\n\nconst TOUCHSCREEN_BUTTON = jQuery('<img/>', {\n    id: 'touchscreenButton', \n    class: 'device-button',\n    src: _static_images_touchscreen_png__WEBPACK_IMPORTED_MODULE_2__,\n}).hover(\n    () => TOUCHSCREEN_BUTTON.addClass('device-hover'),\n    () => TOUCHSCREEN_BUTTON.removeClass('device-hover')\n)\n\n\nconst TRACKPAD_BUTTON = jQuery('<img/>', {\n    id: 'trackpadButton',\n    class: 'device-button',\n    src: _static_images_trackpad_png__WEBPACK_IMPORTED_MODULE_3__,\n}).hover(\n    () => TRACKPAD_BUTTON.addClass('device-hover'),\n    () => TRACKPAD_BUTTON.removeClass('device-hover')\n)\n\n\nconst MOUSE_BUTTON = jQuery('<img/>', {\n    id: 'mouseButton',\n    class: 'device-button',\n    src: _static_images_mouse_png__WEBPACK_IMPORTED_MODULE_1__,\n}).hover(\n    () => MOUSE_BUTTON.addClass('device-hover'),\n    () => MOUSE_BUTTON.removeClass('device-hover')\n)\n\n\nconst OTHER_BUTTON = jQuery('<img/>', {\n    id: 'otherButton',\n    class: 'device-button',\n    src: _static_images_joystick_png__WEBPACK_IMPORTED_MODULE_0__,\n}).hover(\n    () => OTHER_BUTTON.addClass('device-hover'),\n    () => OTHER_BUTTON.removeClass('device-hover')\n)\n\n\nconst INPUT_DEVICE_LABEL_CONTAINER = jQuery('<div/>', {id: 'inputDeviceLabelContainer', class: 'device-label-container'})\n\n\nconst MOUSE_LABEL = jQuery('<div/>', {id: 'mouseLabel', class: 'device-label'}).text('Mouse')\nconst TRACKPAD_LABEL = jQuery('<div/>', {id: 'trackpadLabel', class: 'device-label',}).text('Trackpad')\nconst TOUCHSCREEN_LABEL = jQuery('<div/>', {id: 'touchscreenLabel', class: 'device-label'}).text('Touchscreen')\nconst OTHER_LABEL = jQuery('<div/>', {id: 'otherLabel', class: 'device-label'}).text('Other')\n\n\nINPUT_DEVICE_CONTAINER.append(MOUSE_BUTTON, TRACKPAD_BUTTON, TOUCHSCREEN_BUTTON, OTHER_BUTTON)\nINPUT_DEVICE_LABEL_CONTAINER.append(MOUSE_LABEL, TRACKPAD_LABEL,TOUCHSCREEN_LABEL, OTHER_LABEL)\n\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/components/inputDevices.js?");

/***/ }),

/***/ "./shared/components/instructionButtons.js":
/*!*************************************************!*\
  !*** ./shared/components/instructionButtons.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"INSTRUCTION_BUTTON_CONTAINER\": () => (/* binding */ INSTRUCTION_BUTTON_CONTAINER)\n/* harmony export */ });\nconst INSTRUCTION_BUTTON_CONTAINER = jQuery('<div/>', {\n    id: 'instructionButtonContainer', \n    class: 'instruction-button-container'\n})\n\n\nconst NEXT_BUTTON = jQuery('<div/>', {\n    id: 'nextButton',\n    class: 'grey-button medium-button-text right-margined',\n    text: 'Next >>'\n})\n\n\nconst PREVIOUS_BUTTON = jQuery('<div/>', {\n    id: 'previousButton',\n    class: 'grey-button medium-button-text left-margined',\n    text: '<< Previous'\n})\n\n\nINSTRUCTION_BUTTON_CONTAINER.append(PREVIOUS_BUTTON, NEXT_BUTTON)\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/components/instructionButtons.js?");

/***/ }),

/***/ "./shared/components/participantID.js":
/*!********************************************!*\
  !*** ./shared/components/participantID.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PARTICIPANT_ID_CONTAINER\": () => (/* binding */ PARTICIPANT_ID_CONTAINER)\n/* harmony export */ });\nconst PARTICIPANT_ID_CONTAINER = jQuery(\"<div/>\", {\n    id: 'participantIdContainer', \n    class: \"participant-id-container\"\n})\n\n\nconst PARTICIPANT_ID_LABEL = jQuery('<div/>', {\n    id: 'participantIdLabel',\n    class: 'participant-id-label',\n    text: 'Participant ID'\n})\n\nconst PARTICIPANT_ID_INPUT = jQuery('<input/>', {\n    id: 'participantIdInput',\n    class: 'participant-id-input'\n})\n\n\nconst SUBMIT_BUTTON = jQuery('<div/>', {\n    id: 'submitButton',\n    class: 'grey-button large-button-text left-margined',\n    text: 'Submit'\n\n}).hover(\n    () => SUBMIT_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => SUBMIT_BUTTON.css({background: '#A8A8A8'})\n)\n\nPARTICIPANT_ID_CONTAINER.append(PARTICIPANT_ID_LABEL, PARTICIPANT_ID_INPUT, SUBMIT_BUTTON)\n\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/components/participantID.js?");

/***/ }),

/***/ "./shared/components/responseButtons.js":
/*!**********************************************!*\
  !*** ./shared/components/responseButtons.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BUTTON_CONTAINER\": () => (/* binding */ BUTTON_CONTAINER),\n/* harmony export */   \"BUTTON_LABEL_CONTAINER\": () => (/* binding */ BUTTON_LABEL_CONTAINER),\n/* harmony export */   \"GREEN_BUTTON\": () => (/* binding */ GREEN_BUTTON),\n/* harmony export */   \"GREEN_LABEL\": () => (/* binding */ GREEN_LABEL),\n/* harmony export */   \"RED_BUTTON\": () => (/* binding */ RED_BUTTON),\n/* harmony export */   \"RED_LABEL\": () => (/* binding */ RED_LABEL)\n/* harmony export */ });\n/* harmony import */ var _static_images_check_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../static/images/check.png */ \"./static/images/check.png\");\n/* harmony import */ var _static_images_remove_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/images/remove.png */ \"./static/images/remove.png\");\n\n\n\n\nconst BUTTON_CONTAINER = jQuery('<div/>', {id: 'buttonContainer', class: 'response-button-container'})\n\n\nconst GREEN_BUTTON = jQuery('<img/>', {\n    id: 'greenButton',\n    src: _static_images_check_png__WEBPACK_IMPORTED_MODULE_0__,\n    class: 'button right-aligned'\n})\n\n\nconst RED_BUTTON = jQuery('<img/>', {\n    id: 'redButton',\n    src: _static_images_remove_png__WEBPACK_IMPORTED_MODULE_1__,\n    class: 'button left-aligned'\n})\n\n\nconst BUTTON_LABEL_CONTAINER = jQuery('<div/>', {\n    id: 'labelContainer', \n    css: {\n        display: 'flex',\n        flexDirection: 'row',\n        justifyContent: 'flex-end',\n        minWidth: '100%',\n        marginBottom: 'auto',\n        fontFamily: 'Arial'\n    }\n})\n\n\nconst GREEN_LABEL = jQuery('<div/>', {id: 'greenLabel', class: 'button-label right-aligned'})\nconst RED_LABEL = jQuery('<div/>', {id: 'redLabel', class: 'button-label left-aligned'})\n\n\nBUTTON_CONTAINER.append(GREEN_BUTTON, RED_BUTTON)\nBUTTON_LABEL_CONTAINER.append(GREEN_LABEL, RED_LABEL)\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/components/responseButtons.js?");

/***/ }),

/***/ "./shared/components/textContainer.js":
/*!********************************************!*\
  !*** ./shared/components/textContainer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TEXT_CONTAINER\": () => (/* binding */ TEXT_CONTAINER)\n/* harmony export */ });\nconst TEXT_CONTAINER = jQuery(\"<div/>\", {id: 'textContainer'})\n\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/components/textContainer.js?");

/***/ }),

/***/ "./shared/screens/base.js":
/*!********************************!*\
  !*** ./shared/screens/base.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Screen)\n/* harmony export */ });\n/* harmony import */ var _shared_components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/container */ \"./shared/components/container.js\");\n\n\n\nclass Screen {\n    constructor(task) {\n        this.task = task\n        this.previousScreen = null\n        this.nextScreen = null\n        this.renderTime = null\n    }\n\n    get clickHandlers() {\n        return {}\n    }\n\n    render() {\n        _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.children().detach()\n        for (const [component, settings] of this.components.entries()) {\n            for (const [setting, value] of Object.entries(settings)) {\n                if (setting === 'addClass') {\n                    component.removeClass()\n                }\n                component[setting](value)\n            }\n            _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.append(component)\n        }\n        this.updateClickHandlers()\n        this.renderTime = Date.now()\n    }\n\n    updateClickHandlers() {\n        for (const [id, callback] of Object.entries(this.clickHandlers)) {\n            const element = jQuery(`#${id}`)\n            element.off('click')\n            element.click(callback)\n        }\n    }\n\n    inputDeviceClickHandler(inputDevice) {\n        this.task.inputDevice = inputDevice\n        this.task.currentScreen = this.nextScreen\n        this.task.currentScreen.render()\n    }\n\n    instructionButtonClickHandler(action) {\n        switch (action) {\n            case 'previous':\n                this.task.currentScreen = this.previousScreen\n                break\n            case 'next':\n                this.task.currentScreen = this.nextScreen\n                break\n        }\n        this.task.currentScreen.render()\n    }\n\n    containerClickHandler(nextItem) {\n        if (Date.now() - this.renderTime > 500) {\n            _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.off('click')\n            if (nextItem) {\n                this.task.dataIndex++\n            }\n            this.task.currentScreen = this.task.trialScreen\n            this.task.currentScreen.render()\n        }\n    }\n}\n\n//# sourceURL=webpack://js-crlab/./shared/screens/base.js?");

/***/ }),

/***/ "./shared/screens/decisionTrial.js":
/*!*****************************************!*\
  !*** ./shared/screens/decisionTrial.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DecisionTrialScreen\": () => (/* binding */ DecisionTrialScreen)\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./shared/screens/base.js\");\n/* harmony import */ var _components_responseButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/responseButtons */ \"./shared/components/responseButtons.js\");\n\n\n\n\n\nclass DecisionTrialScreen extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    get clickHandlers() {\n        return {\n            greenButton: () => this.responseClickHandler('yes'),\n            redButton: () => this.responseClickHandler('no')\n        }\n    }\n\n    responseClickHandler(response) {\n        if (!this.task.inTrial) {\n            return\n        }\n        _components_responseButtons__WEBPACK_IMPORTED_MODULE_1__.GREEN_BUTTON.mouseout()\n        _components_responseButtons__WEBPACK_IMPORTED_MODULE_1__.RED_BUTTON.mouseout()\n        clearTimeout(this.timeoutID)\n        this.task.inTrial = false\n        this.task.currentTrial.responseTime = new Date()\n        this.task.currentTrial.Response = response\n        \n        const isCorrectResponse = this.task.currentTrial.CRESP === response\n        const isPracticeRound = this.task.currentTrial.TrialType === 'Practice'\n        const isLastPracticeRound = this.task.currentProcedure === 'showlastpractice'\n\n        if (isPracticeRound && !isCorrectResponse) {\n            this.task.currentScreen = this.task.incorrectScreen\n        } else if (isLastPracticeRound) {\n            this.task.currentScreen = this.task.beginOrPracticeAgainScreen\n        } else if (this.task.isDone) {\n            this.task.currentScreen = this.task.finishedScreen\n        } else if (response === 'NR') {\n            this.task.currentScreen = this.task.timeoutScreen\n        } else {\n            this.task.dataIndex++\n        }\n        this.task.currentScreen.render()\n    }\n}\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/screens/decisionTrial.js?");

/***/ }),

/***/ "./shared/screens/inputDevices.js":
/*!****************************************!*\
  !*** ./shared/screens/inputDevices.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InputDevicesScreen\": () => (/* binding */ InputDevicesScreen)\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./shared/screens/base.js\");\n/* harmony import */ var _components_inputDevices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/inputDevices */ \"./shared/components/inputDevices.js\");\n/* harmony import */ var _components_textContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/textContainer */ \"./shared/components/textContainer.js\");\n\n\n\n\n\nclass InputDevicesScreen extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    components = new Map([\n        [_components_inputDevices__WEBPACK_IMPORTED_MODULE_1__.INPUT_DEVICE_CONTAINER, {}],\n        [_components_inputDevices__WEBPACK_IMPORTED_MODULE_1__.INPUT_DEVICE_LABEL_CONTAINER, {}],\n        [_components_textContainer__WEBPACK_IMPORTED_MODULE_2__.TEXT_CONTAINER, {text: 'Please choose your input device to start.', addClass: 'base-text large-text'}],\n    ])\n\n    get clickHandlers() {\n        return {\n            mouseButton: () => this.inputDeviceClickHandler('mouse'),\n            trackpadButton: () => this.inputDeviceClickHandler('trackpad'),\n            touchscreenButton: () => this.inputDeviceClickHandler('touchscreen'),\n            otherButton: () => this.inputDeviceClickHandler('other'),\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/screens/inputDevices.js?");

/***/ }),

/***/ "./shared/screens/participantID.js":
/*!*****************************************!*\
  !*** ./shared/screens/participantID.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ParticipantIdScreen\": () => (/* binding */ ParticipantIdScreen)\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./shared/screens/base.js\");\n/* harmony import */ var _components_participantID__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/participantID */ \"./shared/components/participantID.js\");\n\n\n\n\nclass ParticipantIdScreen extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    components = new Map([\n        [_components_participantID__WEBPACK_IMPORTED_MODULE_1__.PARTICIPANT_ID_CONTAINER, {}],\n    ])\n\n    get clickHandlers() {\n        return {submitButton: () => this.handleSubmit()}\n    }\n\n    handleSubmit() {\n        this.task.participantID = jQuery('#participantIdInput')[0].value\n        this.task.currentScreen = this.nextScreen\n        this.task.currentScreen.render()\n    }\n}\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/screens/participantID.js?");

/***/ }),

/***/ "./shared/screens/transitions.js":
/*!***************************************!*\
  !*** ./shared/screens/transitions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BeginOrPracticeAgain\": () => (/* binding */ BeginOrPracticeAgain),\n/* harmony export */   \"Break\": () => (/* binding */ Break),\n/* harmony export */   \"Finished\": () => (/* binding */ Finished),\n/* harmony export */   \"Incorrect\": () => (/* binding */ Incorrect),\n/* harmony export */   \"LetsPractice\": () => (/* binding */ LetsPractice),\n/* harmony export */   \"TimeOut\": () => (/* binding */ TimeOut)\n/* harmony export */ });\n/* harmony import */ var _components_textContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _components_beginOrPractice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/beginOrPractice */ \"./shared/components/beginOrPractice.js\");\n/* harmony import */ var _components_instructionButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/instructionButtons */ \"./shared/components/instructionButtons.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ \"./shared/screens/base.js\");\n\n\n\n\n\n\nclass BeginOrPracticeAgain extends _base__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    components = new Map([\n        [_components_textContainer__WEBPACK_IMPORTED_MODULE_0__.TEXT_CONTAINER, {text: `Any questions?\\nLet's begin`}],\n        [_components_beginOrPractice__WEBPACK_IMPORTED_MODULE_1__.BEGIN_OR_PRACTICE_CONTAINER, {}]\n    ])\n\n    get clickHandlers() {\n        return {\n            practiceButton: () => this.handle('practice'),\n            beginButton: () => this.handle('begin')\n        }\n    }\n\n    handle(action) {\n        switch (action) {\n            case 'practice':\n                this.task.dataIndex = 0\n                break\n            case 'begin':\n                this.task.dataIndex++\n                break\n        }\n        this.task.currentScreen = this.task.trialScreen\n        this.task.currentScreen.render()\n    }\n}\n\n\nclass LetsPractice extends _base__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    components = new Map([\n        [_components_textContainer__WEBPACK_IMPORTED_MODULE_0__.TEXT_CONTAINER, {text: `Let's Practice.`, addClass: 'base-text extra-large-text'}],\n        [_components_instructionButtons__WEBPACK_IMPORTED_MODULE_2__.INSTRUCTION_BUTTON_CONTAINER, {}]\n    ])\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.instructionButtonClickHandler('next'),\n            previousButton: () => this.instructionButtonClickHandler('previous')\n        }\n    }\n}\n\n\nclass Break extends _base__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    components = new Map([\n        [\n            _components_textContainer__WEBPACK_IMPORTED_MODULE_0__.TEXT_CONTAINER, \n            {\n                text: 'Take a break. Click or touch anywhere to continue.',\n                addClass: 'base-text extra-large-text blue'\n            }\n        ]\n    ])\n\n    get clickHandlers() {\n        return {container: () => this.containerClickHandler(true)}\n    }\n}\n\n\nclass Incorrect extends _base__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    components = new Map([\n        [\n            _components_textContainer__WEBPACK_IMPORTED_MODULE_0__.TEXT_CONTAINER, \n            {\n                text: 'Incorrect, click or touch anywhere to try again.',\n                addClass: 'base-text extra-large-text red'\n            }\n        ]\n    ])\n\n    get clickHandlers() {\n        return {container: () => this.containerClickHandler(false)}\n    }\n}\n\n\nclass Finished extends _base__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    components = new Map([\n        [_components_textContainer__WEBPACK_IMPORTED_MODULE_0__.TEXT_CONTAINER, {text: `You've completed this exercise!`}]\n    ])\n\n    render() {\n        setTimeout(() => this.task.submit())\n        super.render()\n    }\n}\n\n\nclass TimeOut extends _base__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    components = new Map([\n        [_components_textContainer__WEBPACK_IMPORTED_MODULE_0__.TEXT_CONTAINER, {text: 'Click or touch to continue.'}]\n    ])\n\n    get clickHandlers() {\n        return {container: () => this.containerClickHandler(true)}\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/screens/transitions.js?");

/***/ }),

/***/ "./shared/task.js":
/*!************************!*\
  !*** ./shared/task.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BaseTask\": () => (/* binding */ BaseTask)\n/* harmony export */ });\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/container */ \"./shared/components/container.js\");\n/* harmony import */ var _screens_transitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/transitions */ \"./shared/screens/transitions.js\");\n\n\n\nclass BaseTask {\n\n    constructor() {\n        this.recordMouseMove = this.recordMouseMove.bind(this)\n        jQuery(document).mousemove(this.recordMouseMove)\n\n        jQuery(\"#Questions\").remove()\n        jQuery(\"#PushStickyFooter\").remove()\n        jQuery(\"#Plug\").hide()\n        jQuery(\".SkinInner\").hide()\n        jQuery(\"#Wrapper\").append(_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER)\n\n        this.incorrectScreen = new _screens_transitions__WEBPACK_IMPORTED_MODULE_1__.Incorrect(this)\n        this.breakScreen = new _screens_transitions__WEBPACK_IMPORTED_MODULE_1__.Break(this)\n        this.beginOrPracticeAgainScreen = new _screens_transitions__WEBPACK_IMPORTED_MODULE_1__.BeginOrPracticeAgain(this)\n        this.finishedScreen = new _screens_transitions__WEBPACK_IMPORTED_MODULE_1__.Finished(this)\n        this.letsPracticeScreen = new _screens_transitions__WEBPACK_IMPORTED_MODULE_1__.LetsPractice(this)\n        this.timeoutScreen = new _screens_transitions__WEBPACK_IMPORTED_MODULE_1__.TimeOut(this)\n    }\n\n    setupInstructionScreens() {\n        for (let i=0; i<this.instructionScreens.length; i++) {\n            if (i < this.instructionScreens.length - 1) {\n                this.instructionScreens[i].nextScreen = this.instructionScreens[i + 1]\n            }\n            if (i > 0) {\n                this.instructionScreens[i].previousScreen = this.instructionScreens[i - 1]\n            }\n        }\n\n        this.currentScreen = this.instructionScreens[0]\n        this.currentScreen.render()\n    }\n\n    recordMouseMove(event) {\n        if (this.inTrial) {\n            this.currentTrial.recordMouseMove(Date.now(), event.clientX, event.clientY)\n        }\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/task.js?");

/***/ }),

/***/ "./shared/trial.js":
/*!*************************!*\
  !*** ./shared/trial.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BaseTrial\": () => (/* binding */ BaseTrial)\n/* harmony export */ });\nclass BaseTrial {\n    constructor() {\n        this.mouseMoveTimes = []\n        this.mouseMoveXPositions = []\n        this.mouseMoveYPositions = []\n    }\n\n    recordMouseMove(time, xPosition, yPosition) {\n        this.mouseMoveTimes.push(time)\n        this.mouseMoveXPositions.push(xPosition)\n        this.mouseMoveYPositions.push(yPosition)\n    }\n\n    computeMousemoveStats() {\n        const firstMouseMoveTime = this.mouseMoveTimes.length > 0 ? this.mouseMoveTimes[0] - this.startTime : 'N/A'\n        let duration = 0\n        let distance = 0\n        let avgVelocity = 'N/A'\n        let startTime = null\n        let startX = null\n        let startY = null\n        while (this.mouseMoveTimes.length > 0) {\n            let currentTime = this.mouseMoveTimes.shift() \n            let currentX = this.mouseMoveXPositions.shift()\n            let currentY = this.mouseMoveYPositions.shift()\n            if (startTime !== null || currentTime - startTime < 500) {\n                const aSquared = Math.pow(startX - currentX, 2)        \n                const bSquared = Math.pow(startY - currentY, 2)\n                distance += Math.round(Math.sqrt(aSquared + bSquared))\n                duration += currentTime - startTime\n                avgVelocity = (distance / duration).toFixed(3)\n            }\n            startTime = currentTime\n            startX = currentX\n            startY = currentY\n        }\n\n        return [firstMouseMoveTime, duration, distance, avgVelocity]\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/trial.js?");

/***/ }),

/***/ "./static/images/check.png":
/*!*********************************!*\
  !*** ./static/images/check.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a2b4bba181f6ccf84f84.png\";\n\n//# sourceURL=webpack://js-crlab/./static/images/check.png?");

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

/***/ "./static/images/remove.png":
/*!**********************************!*\
  !*** ./static/images/remove.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3032c2aacc989cb25071.png\";\n\n//# sourceURL=webpack://js-crlab/./static/images/remove.png?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./rhymeDecision/task.js");
/******/ 	rhymeDecision = __webpack_exports__;
/******/ 	
/******/ })()
;