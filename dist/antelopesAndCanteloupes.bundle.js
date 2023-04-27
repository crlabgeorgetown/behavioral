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

/***/ "./antelopesAndCanteloupes/components/allStimuli.js":
/*!**********************************************************!*\
  !*** ./antelopesAndCanteloupes/components/allStimuli.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ALL_STIMULI_CONTAINER\": () => (/* binding */ ALL_STIMULI_CONTAINER),\n/* harmony export */   \"ALL_STIMULI_FOUR\": () => (/* binding */ ALL_STIMULI_FOUR),\n/* harmony export */   \"ALL_STIMULI_ONE\": () => (/* binding */ ALL_STIMULI_ONE),\n/* harmony export */   \"ALL_STIMULI_THREE\": () => (/* binding */ ALL_STIMULI_THREE),\n/* harmony export */   \"ALL_STIMULI_TWO\": () => (/* binding */ ALL_STIMULI_TWO)\n/* harmony export */ });\n\nconst ALL_STIMULI_CONTAINER = jQuery('<div/>', {id: 'allStimuliContainer', class: 'all-stimuli-container'})\n\n\nconst ALL_STIMULI_ONE = jQuery('<div/>', {id: 'allStimuliOne', class: 'stimuli-row-container'})\nconst ALL_STIMULI_TWO = jQuery('<div/>', {id: 'allStimuliTwo', class: 'stimuli-row-container'})\nconst ALL_STIMULI_THREE = jQuery('<div/>', {id: 'allStimuliThree', class: 'stimuli-row-container'})\nconst ALL_STIMULI_FOUR = jQuery('<div/>', {id: 'allStimuliFour', class: 'stimuli-row-container'})\n\n\nALL_STIMULI_CONTAINER.append(\n    ALL_STIMULI_ONE,\n    ALL_STIMULI_TWO,\n    ALL_STIMULI_THREE,\n    ALL_STIMULI_FOUR\n)\n\n\n\n\n//# sourceURL=webpack://js-crlab/./antelopesAndCanteloupes/components/allStimuli.js?");

/***/ }),

/***/ "./antelopesAndCanteloupes/components/reminder.js":
/*!********************************************************!*\
  !*** ./antelopesAndCanteloupes/components/reminder.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RED_ARROW\": () => (/* binding */ RED_ARROW),\n/* harmony export */   \"REMINDERS\": () => (/* binding */ REMINDERS),\n/* harmony export */   \"REMINDER_BLOCK\": () => (/* binding */ REMINDER_BLOCK)\n/* harmony export */ });\n/* harmony import */ var _static_images_redArrow_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../static/images/redArrow.png */ \"./static/images/redArrow.png\");\n\n\n\nconst REMINDER_BLOCK = jQuery('<div/>', {id: 'reminderBlock', class: 'reminder-block'})\nconst RED_ARROW = jQuery('<img/>', {id: 'redArrow', src: _static_images_redArrow_png__WEBPACK_IMPORTED_MODULE_0__, class: 'red-arrow'})\nconst REMINDER_CONTAINER = jQuery('<div/>', {id: 'reminderContainer', class: 'reminder-container'})\nconst REMINDERS = [\n    jQuery('<img/>', {id: 'reminder1', class: 'reminder'}),\n    jQuery('<img/>', {id: 'reminder2', class: 'reminder'})\n]\n\n\nREMINDER_BLOCK.append(RED_ARROW, REMINDER_CONTAINER.append(...REMINDERS))  \n\n\n\n\n//# sourceURL=webpack://js-crlab/./antelopesAndCanteloupes/components/reminder.js?");

/***/ }),

/***/ "./antelopesAndCanteloupes/components/searchStimuli.js":
/*!*************************************************************!*\
  !*** ./antelopesAndCanteloupes/components/searchStimuli.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SEARCH_STIMULI\": () => (/* binding */ SEARCH_STIMULI),\n/* harmony export */   \"SEARCH_STIMULI_CONTAINER\": () => (/* binding */ SEARCH_STIMULI_CONTAINER)\n/* harmony export */ });\n\nconst SEARCH_STIMULI_CONTAINER = jQuery('<div/>', {\n    id: 'searchStimuliContainer', \n    class: 'search-stimuli-container'\n})\n\n\nconst SEARCH_STIMULI = [\n    jQuery('<img/>', {id: 'stimuliToSelect1', class: 'search-stimuli'}),\n    jQuery('<div/>', {id: 'stimuliToSelect1Label', class: 'search-stimuli-label'}),\n    jQuery('<img/>', {id: 'stimuliToSelect2', class: 'search-stimuli'}),\n    jQuery('<div/>', {id: 'stimuliToSelect2Label', class: 'search-stimuli-label'})\n]\n\n\nSEARCH_STIMULI_CONTAINER.append(...SEARCH_STIMULI)\n\n\n\n\n//# sourceURL=webpack://js-crlab/./antelopesAndCanteloupes/components/searchStimuli.js?");

/***/ }),

/***/ "./antelopesAndCanteloupes/components/stimuliGrid.js":
/*!***********************************************************!*\
  !*** ./antelopesAndCanteloupes/components/stimuliGrid.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"STIMULI\": () => (/* binding */ STIMULI),\n/* harmony export */   \"STIMULI_GRID\": () => (/* binding */ STIMULI_GRID)\n/* harmony export */ });\n\nconst STIMULI_GRID = jQuery('<div/>', {id: 'stimuliGrid', class: 'stimuli-grid'})\n\nconst STIMULI = [\n    jQuery('<img/>', {id: 'stimuli1', class: 'random-stimulus'}),\n    jQuery('<img/>', {id: 'stimuli2', class: 'random-stimulus'}),\n    jQuery('<img/>', {id: 'stimuli3', class: 'random-stimulus'}),\n    jQuery('<img/>', {id: 'stimuli4', class: 'random-stimulus'})\n]\n\nSTIMULI_GRID.append(...STIMULI)\n\n\n\n\n//# sourceURL=webpack://js-crlab/./antelopesAndCanteloupes/components/stimuliGrid.js?");

/***/ }),

/***/ "./antelopesAndCanteloupes/components/stop.js":
/*!****************************************************!*\
  !*** ./antelopesAndCanteloupes/components/stop.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"STOP\": () => (/* binding */ STOP)\n/* harmony export */ });\n/* harmony import */ var _static_images_stop_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../static/images/stop.png */ \"./static/images/stop.png\");\n\n\n\nconst STOP = jQuery('<img/>', {id: 'stop', class: 'stop', src: _static_images_stop_png__WEBPACK_IMPORTED_MODULE_0__})\n\n\n\n\n//# sourceURL=webpack://js-crlab/./antelopesAndCanteloupes/components/stop.js?");

/***/ }),

/***/ "./antelopesAndCanteloupes/constants.js":
/*!**********************************************!*\
  !*** ./antelopesAndCanteloupes/constants.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MAX_PRACTICE_TRIALS\": () => (/* binding */ MAX_PRACTICE_TRIALS),\n/* harmony export */   \"READY_TIMEOUT\": () => (/* binding */ READY_TIMEOUT),\n/* harmony export */   \"ROUND_DURATION\": () => (/* binding */ ROUND_DURATION),\n/* harmony export */   \"TaskType\": () => (/* binding */ TaskType)\n/* harmony export */ });\nconst BASE_IMAGE_URL = 'https://jslawjslaw.github.io/js-crlab/static/images/readmap'\n\nconst SEMANTIC = 'semantic'\nconst PHONOLOGICAL = 'phonological'\nconst STANDARD = 'standard'\nconst MAX_PRACTICE_TRIALS = 3\nconst READY_TIMEOUT = 1000\nconst ROUND_DURATION = 20000\n\n\nclass TaskType {\n    static SemanticReadMap = new TaskType(SEMANTIC)\n    static PhonologicalReadMap = new TaskType(PHONOLOGICAL)\n    static StandardReadMap = new TaskType(STANDARD)\n\n    constructor(name) {\n        this.name = name\n    }\n\n    get version() {\n        return `${this.name.charAt(0).toUpperCase()}${this.name.slice(1)}ReadMap`\n    }\n\n    get roundSchedule() {\n        return {\n            [PHONOLOGICAL]: [[0], [1], [2], [3]],\n            [SEMANTIC]: [[0], [1], [2], [3]],\n            [STANDARD]: [[0], [1, 2], [1], [2, 3], [2], [3, 1]]\n        }[this.name]\n    }\n\n    get stimuli() {\n        return {\n            [PHONOLOGICAL]: ['can', 'coin', 'cone', 'corn'],\n            [SEMANTIC]: ['cow', 'pig', 'sheep', 'goat'],\n            [STANDARD]: ['triangle', 'square', 'circle', 'star']\n        }[this.name]\n    }\n\n    get imageExtension() {\n        return {\n            [PHONOLOGICAL]: 'jpg',\n            [SEMANTIC]: 'jpg',\n            [STANDARD]: 'bmp'\n        }[this.name]\n    }\n\n    get shouldShowInstructionScreenTwo() {\n        return this.name !== STANDARD\n    }\n\n    static fromString(string) {\n        switch(string) {\n            case SEMANTIC:\n                return TaskType.SemanticReadMap\n            case PHONOLOGICAL:\n                return TaskType.PhonologicalReadMap\n            case STANDARD:\n                return TaskType.StandardReadMap\n            default:\n                throw new Error(`Undefined task type: ${string}`)\n        }\n    }\n\n    imageUrlFromStimulus(stimulus, imageNumber) {\n        return `${BASE_IMAGE_URL}/${this.getOption(stimulus, imageNumber)}.${this.imageExtension}`\n    }\n\n    getOption(stimulus, imageNumber) {\n        let option = `${stimulus}`\n        if (this.name !== STANDARD) {\n            option += imageNumber\n        }\n        return option\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./antelopesAndCanteloupes/constants.js?");

/***/ }),

/***/ "./antelopesAndCanteloupes/round.js":
/*!******************************************!*\
  !*** ./antelopesAndCanteloupes/round.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Round\": () => (/* binding */ Round)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./antelopesAndCanteloupes/constants.js\");\n/* harmony import */ var _trial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trial */ \"./antelopesAndCanteloupes/trial.js\");\n\n\n\n\nclass Round {\n    constructor(taskType, roundSchedule) {\n        this.taskType = taskType\n        this.orderedStimuli = taskType.stimuli\n        this.roundSchedule = roundSchedule\n        this.scheduleIndex = 0\n        this.trials = []\n        this.newTrial()\n    }\n\n    incrementScheduleIndex() {\n        this.scheduleIndex++\n        if (this.scheduleIndex === this.roundSchedule.length) {\n            this.scheduleIndex = 0\n        }\n    }\n \n    getSearchStimuli() {\n        return this.orderedStimuli[this.roundSchedule[this.scheduleIndex]]\n    }\n\n    getStimuliSchedule() {\n        return this.roundSchedule.map((index) => this.orderedStimuli[index])\n    }\n\n    getRandomImageNumbers() {\n        let imageNumbers = []\n        for (let i = 0; i < 4; i++) {\n            imageNumbers.push(Math.floor(Math.random() * 10) + 1)\n        }\n        return imageNumbers\n    }\n\n    shuffle() {\n        let array = this.orderedStimuli.map((x) => x)\n        let currentIndex = array.length\n      \n        while (currentIndex != 0) {\n          let randomIndex = Math.floor(Math.random() * currentIndex)\n          currentIndex--\n          [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]\n        }\n\n        return array\n    }\n\n    newTrial() {\n        const trialType = this.trials.length < _constants__WEBPACK_IMPORTED_MODULE_0__.MAX_PRACTICE_TRIALS * this.roundSchedule.length ? 'practice': 'experiment'\n        const searchStimuli = this.getSearchStimuli()\n        let shuffled = this.shuffle()\n        let imageNumbers = this.getRandomImageNumbers()\n        \n        if (this.currentTrial) {\n            while (this.currentTrial.getSearchStimulusIndex() === shuffled.indexOf(searchStimuli)) {\n                shuffled = this.shuffle()\n            }\n            while (this.currentTrial.getSearchStimuliImageNumber() === imageNumbers[shuffled.indexOf(searchStimuli)]) {\n                imageNumbers = this.getRandomImageNumbers()\n            }\n        }\n        \n        this.trials.push(new _trial__WEBPACK_IMPORTED_MODULE_1__.Trial(\n            trialType,\n            shuffled,\n            imageNumbers,\n            searchStimuli,\n            this.taskType\n        ))\n    }\n\n    get currentTrial() {\n        return this.trials[this.trials.length - 1]\n    }\n\n    shouldBeginExperiment() {\n        return this.trials.length === _constants__WEBPACK_IMPORTED_MODULE_0__.MAX_PRACTICE_TRIALS * this.roundSchedule.length\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./antelopesAndCanteloupes/round.js?");

/***/ }),

/***/ "./antelopesAndCanteloupes/screens/base.js":
/*!*************************************************!*\
  !*** ./antelopesAndCanteloupes/screens/base.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BaseScreen\": () => (/* binding */ BaseScreen)\n/* harmony export */ });\n/* harmony import */ var _shared_screens_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/screens/base */ \"./shared/screens/base.js\");\n/* harmony import */ var _components_reminder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/reminder */ \"./antelopesAndCanteloupes/components/reminder.js\");\n/* harmony import */ var _components_stimuliGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/stimuliGrid */ \"./antelopesAndCanteloupes/components/stimuliGrid.js\");\n\n\n\n\n\nclass BaseScreen extends _shared_screens_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    \n    setStimuliImages(images) {\n        _components_stimuliGrid__WEBPACK_IMPORTED_MODULE_2__.STIMULI.map((stimulus, index) => stimulus.attr({src: images[index]}))\n    }\n\n    pluralize(stimulus) {\n        if (stimulus === 'coin') {\n            return 'coin(s)'\n        }\n        return stimulus\n    }\n\n    updateReminders() {\n        _components_reminder__WEBPACK_IMPORTED_MODULE_1__.REMINDERS.map((reminder) => reminder.hide())\n        this.task.currentRound.getStimuliSchedule().map((stimulus, index) => {\n            const reminder = _components_reminder__WEBPACK_IMPORTED_MODULE_1__.REMINDERS[index]\n            reminder.show()\n            reminder.attr({src: this.task.taskType.imageUrlFromStimulus(stimulus, 1)})\n            if (this.task.currentRound.getSearchStimuli() === stimulus) {\n                reminder.addClass('red-border')\n                reminder.removeClass('black-border')\n            } else {\n                reminder.removeClass('red-border')\n                reminder.addClass('black-border')\n            }\n        })\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./antelopesAndCanteloupes/screens/base.js?");

/***/ }),

/***/ "./antelopesAndCanteloupes/screens/instructions.js":
/*!*********************************************************!*\
  !*** ./antelopesAndCanteloupes/screens/instructions.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InstructionsFour\": () => (/* binding */ InstructionsFour),\n/* harmony export */   \"InstructionsOne\": () => (/* binding */ InstructionsOne),\n/* harmony export */   \"InstructionsThree\": () => (/* binding */ InstructionsThree),\n/* harmony export */   \"InstructionsTwo\": () => (/* binding */ InstructionsTwo)\n/* harmony export */ });\n/* harmony import */ var _shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/instructionButtons */ \"./shared/components/instructionButtons.js\");\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _components_allStimuli__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/allStimuli */ \"./antelopesAndCanteloupes/components/allStimuli.js\");\n/* harmony import */ var _components_reminder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/reminder */ \"./antelopesAndCanteloupes/components/reminder.js\");\n/* harmony import */ var _components_searchStimuli__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/searchStimuli */ \"./antelopesAndCanteloupes/components/searchStimuli.js\");\n/* harmony import */ var _components_stimuliGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/stimuliGrid */ \"./antelopesAndCanteloupes/components/stimuliGrid.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base */ \"./antelopesAndCanteloupes/screens/base.js\");\n\n\n\n\n\n\n\n\n\nclass InstructionsOne extends _base__WEBPACK_IMPORTED_MODULE_6__.BaseScreen {\n    components = new Map([\n        [_components_stimuliGrid__WEBPACK_IMPORTED_MODULE_5__.STIMULI_GRID, {}],\n        [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {addClass: 'base-text small-text'}],\n        [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__.INSTRUCTION_BUTTON_CONTAINER, {}]\n    ])\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.instructionButtonClickHandler('next'),\n            previousButton: () => this.instructionButtonClickHandler('previous')\n        }\n    }\n\n    render() {\n        this.setStimuliImages(this.task.taskType.stimuli.map((stimulus) => this.task.taskType.imageUrlFromStimulus(stimulus, 1)))\n        const pluralized = this.task.taskType.stimuli.map(this.pluralize)\n        _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER.text(`Every screen will show pictures of a ${pluralized[0]}, a ${pluralized[1]}, a ${pluralized[2]}, and ${pluralized[3]}, but the exact pictures will change.`)\n        super.render()\n    }\n}\n\n\nclass InstructionsTwo extends _base__WEBPACK_IMPORTED_MODULE_6__.BaseScreen {\n    components = new Map([\n        [_components_allStimuli__WEBPACK_IMPORTED_MODULE_2__.ALL_STIMULI_CONTAINER, {}],\n        [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {addClass: 'base-text small-text', text: 'Here are all the pictures you may see. Notice that some of them may look similar to each other.'}],\n        [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__.INSTRUCTION_BUTTON_CONTAINER, {}]\n    ])\n\n    constructor(task) {\n        super(task)\n        this.appendAllStimuli(_components_allStimuli__WEBPACK_IMPORTED_MODULE_2__.ALL_STIMULI_ONE, this.task.taskType.stimuli[0])\n        this.appendAllStimuli(_components_allStimuli__WEBPACK_IMPORTED_MODULE_2__.ALL_STIMULI_TWO, this.task.taskType.stimuli[1])\n        this.appendAllStimuli(_components_allStimuli__WEBPACK_IMPORTED_MODULE_2__.ALL_STIMULI_THREE, this.task.taskType.stimuli[2])\n        this.appendAllStimuli(_components_allStimuli__WEBPACK_IMPORTED_MODULE_2__.ALL_STIMULI_FOUR, this.task.taskType.stimuli[3])\n    }\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.instructionButtonClickHandler('next'),\n            previousButton: () => this.instructionButtonClickHandler('previous')\n        }\n    }\n\n    appendAllStimuli(container, pattern) {\n        container.append(jQuery('<div/>', {id: pattern, class: 'stimuli-label'}).text(this.pluralize(pattern)))\n        for (let i=1; i<11; i++){\n            container.append(\n                jQuery('<img/>', {id: `${pattern}${i}`, src: this.task.taskType.imageUrlFromStimulus(pattern, i), class: 'stimulus'})\n            )\n        }\n    }\n}\n\n\nclass InstructionsThree extends _base__WEBPACK_IMPORTED_MODULE_6__.BaseScreen {\n    components = new Map([\n        [_components_reminder__WEBPACK_IMPORTED_MODULE_3__.REMINDER_BLOCK, {}],\n        [_components_stimuliGrid__WEBPACK_IMPORTED_MODULE_5__.STIMULI_GRID, {addClass: 'stimuli-grid'}],\n        [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {\n            text: 'You will be asked to touch one picture as fast as you can. When you touch the picture, the location will change. If you forget what picture to touch, look for the reminder.',\n            addClass: 'base-text extra-small-text'\n        }],\n        [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__.INSTRUCTION_BUTTON_CONTAINER, {}]\n    ])\n\n    constructor(task) {\n        super(task)\n        this.updateReminders()\n    }\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.instructionButtonClickHandler('next'),\n            previousButton: () => this.instructionButtonClickHandler('previous')\n        }\n    }\n}\n\n\nclass InstructionsFour extends _base__WEBPACK_IMPORTED_MODULE_6__.BaseScreen {\n    components = new Map([\n        [_components_searchStimuli__WEBPACK_IMPORTED_MODULE_4__.SEARCH_STIMULI_CONTAINER, {}],\n        [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {addClass: 'base-text small-text'}],\n        [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__.INSTRUCTION_BUTTON_CONTAINER, {}]\n    ])\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.instructionButtonClickHandler('next'),\n            previousButton: () => this.instructionButtonClickHandler('previous')\n        }\n    }\n\n    updateSearchStimuli() {\n        _components_searchStimuli__WEBPACK_IMPORTED_MODULE_4__.SEARCH_STIMULI.map((stimulusToSelect) => stimulusToSelect.hide())\n        this.task.currentRound.getStimuliSchedule().map((stimulus, index) => {\n            _components_searchStimuli__WEBPACK_IMPORTED_MODULE_4__.SEARCH_STIMULI[2 * index].show()\n            _components_searchStimuli__WEBPACK_IMPORTED_MODULE_4__.SEARCH_STIMULI[2 * index].attr({src: this.task.taskType.imageUrlFromStimulus(stimulus, 1)})\n            _components_searchStimuli__WEBPACK_IMPORTED_MODULE_4__.SEARCH_STIMULI[2 * index + 1].show()\n            _components_searchStimuli__WEBPACK_IMPORTED_MODULE_4__.SEARCH_STIMULI[2 * index + 1].text(this.pluralize(stimulus))\n        })\n    }\n\n    render() {\n        super.render()\n        let text\n        if (this.task.currentRound.roundSchedule.length === 1) {\n            text = `Please touch the ${this.pluralize(this.task.currentRound.getSearchStimuli())} every time. Let's practice a few.`\n        } else {\n            const stimuli = this.task.currentRound.getStimuliSchedule().map(this.pluralize)\n            text = `Please alternate between the ${stimuli[0]} and the ${stimuli[1]}. Let's practice a few.`\n        }\n        _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER.text(text)\n        this.updateSearchStimuli()\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./antelopesAndCanteloupes/screens/instructions.js?");

/***/ }),

/***/ "./antelopesAndCanteloupes/screens/transitions.js":
/*!********************************************************!*\
  !*** ./antelopesAndCanteloupes/screens/transitions.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FinalScreen\": () => (/* binding */ FinalScreen),\n/* harmony export */   \"ReadyScreen\": () => (/* binding */ ReadyScreen),\n/* harmony export */   \"StopScreen\": () => (/* binding */ StopScreen)\n/* harmony export */ });\n/* harmony import */ var _shared_components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/container */ \"./shared/components/container.js\");\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _components_stop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/stop */ \"./antelopesAndCanteloupes/components/stop.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./antelopesAndCanteloupes/constants.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base */ \"./antelopesAndCanteloupes/screens/base.js\");\n\n\n\n\n\n\n\nclass FinalScreen extends _base__WEBPACK_IMPORTED_MODULE_4__.BaseScreen {\n    components = new Map([\n        [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {addClass: 'base-text large-text', text: `You've completed this exercise!`}]\n    ])\n}\n\n\nclass StopScreen extends _base__WEBPACK_IMPORTED_MODULE_4__.BaseScreen {\n    components = new Map([\n        [_components_stop__WEBPACK_IMPORTED_MODULE_2__.STOP, {}],\n        [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {addClass: 'base-text medium-text', text: 'Click anywhere when you are ready to begin the real thing. Go as fast as you can.'}]\n    ])\n\n    get clickHandlers() {\n        return {container: () => this.handler()}\n    }\n\n    handler() {\n        if (Date.now() - this.renderTime > 500) {\n            _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.off('click')\n            this.task.currentScreen = this.task.readyScreen\n            this.task.currentScreen.render()\n        }\n    }\n}\n\n\nclass ReadyScreen extends _base__WEBPACK_IMPORTED_MODULE_4__.BaseScreen {\n    components = new Map([\n        [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {addClass: 'base-text extra-large-text blue'}]\n    ])\n\n    render() {\n        super.render()\n        _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER.text('Ready')\n        setTimeout(() => {\n            _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER.text('Set')\n            setTimeout(() => {\n                _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER.text('Go!')\n                setTimeout(() => {\n                    this.task.currentRound.newTrial()\n                    this.task.currentScreen = this.task.trialScreen\n                    this.task.currentScreen.render()\n                    setTimeout(() => {\n                        this.task.inTrial = false\n                        if (this.task.isDone()) {\n                            this.task.submit()\n                            this.task.currentScreen = this.task.finalScreen\n                        } else {\n                            this.task.newRound()\n                            this.task.currentScreen = this.task.instructionScreens[this.task.instructionScreens.length - 2]\n                        }\n                        this.task.currentScreen.render()\n                    }, _constants__WEBPACK_IMPORTED_MODULE_3__.ROUND_DURATION)\n                }, _constants__WEBPACK_IMPORTED_MODULE_3__.READY_TIMEOUT)\n            }, _constants__WEBPACK_IMPORTED_MODULE_3__.READY_TIMEOUT)\n        }, _constants__WEBPACK_IMPORTED_MODULE_3__.READY_TIMEOUT)\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./antelopesAndCanteloupes/screens/transitions.js?");

/***/ }),

/***/ "./antelopesAndCanteloupes/screens/trial.js":
/*!**************************************************!*\
  !*** ./antelopesAndCanteloupes/screens/trial.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TrialScreen\": () => (/* binding */ TrialScreen)\n/* harmony export */ });\n/* harmony import */ var _components_reminder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/reminder */ \"./antelopesAndCanteloupes/components/reminder.js\");\n/* harmony import */ var _components_stimuliGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/stimuliGrid */ \"./antelopesAndCanteloupes/components/stimuliGrid.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ \"./antelopesAndCanteloupes/screens/base.js\");\n\n\n\n\n\nclass TrialScreen extends _base__WEBPACK_IMPORTED_MODULE_2__.BaseScreen {\n    components = new Map([\n        [_components_reminder__WEBPACK_IMPORTED_MODULE_0__.REMINDER_BLOCK, {}],\n        [_components_stimuliGrid__WEBPACK_IMPORTED_MODULE_1__.STIMULI_GRID, {}],\n\n    ])\n\n    get clickHandlers() {\n        return {\n            stimuli1: () => this.stimuliButtonClickHandler(this.task.currentRound.currentTrial.stimuli[0]),\n            stimuli2: () => this.stimuliButtonClickHandler(this.task.currentRound.currentTrial.stimuli[1]),\n            stimuli3: () => this.stimuliButtonClickHandler(this.task.currentRound.currentTrial.stimuli[2]),\n            stimuli4: () => this.stimuliButtonClickHandler(this.task.currentRound.currentTrial.stimuli[3])\n        }\n    }\n\n    stimuliButtonClickHandler(stimulus) {\n        this.task.currentRound.currentTrial.responses.push(stimulus)\n        this.task.currentRound.currentTrial.responseTimes.push(new Date())\n        if (this.task.currentRound.currentTrial.isCorrectResponse(stimulus)) {\n            this.inTask = false\n            this.task.currentScreen = this.task.stopScreen\n            this.task.currentRound.incrementScheduleIndex()\n            if (!this.task.currentRound.shouldBeginExperiment()) {\n                this.task.currentScreen = this.task.trialScreen\n                this.task.currentRound.newTrial()\n            }\n            this.task.currentScreen.render()\n        }\n    }\n\n    render() {\n        _components_reminder__WEBPACK_IMPORTED_MODULE_0__.RED_ARROW.hide()\n        this.updateReminders()\n        this.setStimuliImages(this.task.currentRound.currentTrial.getImages())\n        this.task.currentRound.currentTrial.startTime = new Date()\n        this.task.inTrial = true\n        super.render()\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./antelopesAndCanteloupes/screens/trial.js?");

/***/ }),

/***/ "./antelopesAndCanteloupes/task.js":
/*!*****************************************!*\
  !*** ./antelopesAndCanteloupes/task.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./antelopesAndCanteloupes/constants.js\");\n/* harmony import */ var _shared_screens_inputDevices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/screens/inputDevices */ \"./shared/screens/inputDevices.js\");\n/* harmony import */ var _shared_screens_participantID__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/screens/participantID */ \"./shared/screens/participantID.js\");\n/* harmony import */ var _screens_instructions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/instructions */ \"./antelopesAndCanteloupes/screens/instructions.js\");\n/* harmony import */ var _round__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./round */ \"./antelopesAndCanteloupes/round.js\");\n/* harmony import */ var _screens_transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screens/transitions */ \"./antelopesAndCanteloupes/screens/transitions.js\");\n/* harmony import */ var _screens_trial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screens/trial */ \"./antelopesAndCanteloupes/screens/trial.js\");\n/* harmony import */ var _shared_task__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/task */ \"./shared/task.js\");\n\n\n\n\n\n\n\n\n\n\nclass Task extends _shared_task__WEBPACK_IMPORTED_MODULE_7__.BaseTask {\n    constructor(engine, taskType) {\n        super()\n\n        this.engine = engine\n        this.taskType = _constants__WEBPACK_IMPORTED_MODULE_0__.TaskType.fromString(taskType)\n        this.rounds = []\n        this.newRound()\n\n        this.initializeScreens()\n    }\n\n    initializeScreens() {\n        this.setupDOM()\n\n        this.readyScreen = new _screens_transitions__WEBPACK_IMPORTED_MODULE_5__.ReadyScreen(this)\n        this.finalScreen = new _screens_transitions__WEBPACK_IMPORTED_MODULE_5__.FinalScreen(this)\n        this.trialScreen = new _screens_trial__WEBPACK_IMPORTED_MODULE_6__.TrialScreen(this)\n        this.stopScreen = new _screens_transitions__WEBPACK_IMPORTED_MODULE_5__.StopScreen(this)\n\n        this.instructionScreens = [\n            new _shared_screens_participantID__WEBPACK_IMPORTED_MODULE_2__.ParticipantIdScreen(this),\n            new _shared_screens_inputDevices__WEBPACK_IMPORTED_MODULE_1__.InputDevicesScreen(this),\n            new _screens_instructions__WEBPACK_IMPORTED_MODULE_3__.InstructionsOne(this),\n        ]\n        \n        if (this.taskType.shouldShowInstructionScreenTwo) {\n            this.instructionScreens.push(new _screens_instructions__WEBPACK_IMPORTED_MODULE_3__.InstructionsTwo(this))\n        }\n            \n        this.instructionScreens.push(\n            new _screens_instructions__WEBPACK_IMPORTED_MODULE_3__.InstructionsThree(this),\n            new _screens_instructions__WEBPACK_IMPORTED_MODULE_3__.InstructionsFour(this),\n            this.trialScreen\n        )\n\n        this.setupInstructionScreens()\n    }\n\n    get currentTrial() {\n        return this.currentRound.currentTrial\n    }\n\n    get currentRound() {\n        return this.rounds[this.rounds.length - 1]\n    }\n\n    newRound() {\n        this.rounds.push(new _round__WEBPACK_IMPORTED_MODULE_4__.Round(this.taskType, this.taskType.roundSchedule[this.rounds.length]))\n    }\n\n    isDone() {\n        return this.rounds.length === this.taskType.roundSchedule.length\n    }\n\n    submit() {\n        const columns = {\n            'OptionA': [],\n            'OptionB': [],\n            'OptionC': [],\n            'OptionD': [],\n            'Item': [],\n            'CRESP': [],\n            'RT': [],\n            'IncorrRT': [],\n            'IncorrResp': [],\n            'PresOrder': [],\n            'RunInPeriod': [],\n            'Time': [],\n            'TimedOut': [],\n        }\n        const mouseMoveDistances = []\n        const mouseMoveDurations = []\n        const mouseMoveAverageVelocities = []\n        const firstMouseMoves = []\n\n        const thePattern = []\n        const patternLength = []\n        const patternNumber = []\n        const curPatternElementNum = []\n        const timeOnSequence = []\n\n        this.rounds.map((round, roundIndex) => {\n            round.trials.map((trial, trialIndex) => {\n                let firstMouseMove, duration, distance, avgVelocity \n                [firstMouseMove, duration, distance, avgVelocity] = trial.computeMousemoveStats()\n                firstMouseMoves.push(firstMouseMove)\n                mouseMoveDurations.push(duration)\n                mouseMoveDistances.push(distance)\n                mouseMoveAverageVelocities.push(avgVelocity)\n\n                for (const [key, values] of Object.entries(columns)) {\n                    values.push(trial[key])\n                }\n\n                patternNumber.push(roundIndex + 1)\n                thePattern.push(round.roundSchedule.join(''))\n                patternLength.push(round.roundSchedule.length)\n                curPatternElementNum.push(trialIndex % round.roundSchedule.length + 1)\n\n                const blockStartIndex = trial.trialType === 'practice' ? 0 : _constants__WEBPACK_IMPORTED_MODULE_0__.MAX_PRACTICE_TRIALS * round.roundSchedule.length\n                timeOnSequence.push(trial.startTime - round.trials[blockStartIndex].startTime)\n            })\n        })\n        if (window.location.host === \"georgetown.az1.qualtrics.com\") {\n            for (const [key, values] of Object.entries(columns)) {\n                Qualtrics.SurveyEngine.setEmbeddedData(key, values.join(';'))\n            }\n            Qualtrics.SurveyEngine.setEmbeddedData('ThePattern', thePattern.join(';'))\n            Qualtrics.SurveyEngine.setEmbeddedData('PatternLength', patternLength.join(';'))\n            Qualtrics.SurveyEngine.setEmbeddedData('PatternNumber', patternNumber.join(';'))\n            Qualtrics.SurveyEngine.setEmbeddedData('CurPatternElementNum', curPatternElementNum.join(';'))\n            Qualtrics.SurveyEngine.setEmbeddedData('TimeOnSequence', timeOnSequence.join(';'))\n            Qualtrics.SurveyEngine.setEmbeddedData('userAgent', navigator.userAgent.replace(',', '|').replace(';','|'))\n            Qualtrics.SurveyEngine.setEmbeddedData('inputDevice', this.inputDevice)\n            Qualtrics.SurveyEngine.setEmbeddedData('SubjectID', this.participantID)\n            Qualtrics.SurveyEngine.setEmbeddedData('firstMouseMoves', firstMouseMoves.join(';'))\n            Qualtrics.SurveyEngine.setEmbeddedData('mouseMoveDurations', mouseMoveDurations.join(';'))\n            Qualtrics.SurveyEngine.setEmbeddedData('mouseMoveDistances', mouseMoveDistances.join(';'))\n            Qualtrics.SurveyEngine.setEmbeddedData('mouseMoveAverageVelocities', mouseMoveAverageVelocities.join(';'))\n            Qualtrics.SurveyEngine.setEmbeddedData('StimVersion', this.taskType.version)\n            Qualtrics.SurveyEngine.setEmbeddedData('RecipientFirstName', 'N/A')\n            Qualtrics.SurveyEngine.setEmbeddedData('RecipientLastName', 'N/A')\n            Qualtrics.SurveyEngine.setEmbeddedData('RecipientEmail', 'N/A')\n            Qualtrics.SurveyEngine.setEmbeddedData('ExternalReference', 'N/A')\n\n            this.engine.clickNextButton()\n        }\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./antelopesAndCanteloupes/task.js?");

/***/ }),

/***/ "./antelopesAndCanteloupes/trial.js":
/*!******************************************!*\
  !*** ./antelopesAndCanteloupes/trial.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Trial\": () => (/* binding */ Trial)\n/* harmony export */ });\n/* harmony import */ var _shared_trial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/trial */ \"./shared/trial.js\");\n\n\n\nclass Trial extends _shared_trial__WEBPACK_IMPORTED_MODULE_0__.BaseTrial {\n    constructor(trialType, stimuli, imageNumbers, searchStimulus, taskType) {\n        super()\n        this.trialType = trialType\n        this.startTime = null\n        this.stimuli = stimuli\n        this.imageNumbers = imageNumbers\n        this.searchStimulus = searchStimulus\n        this.taskType = taskType\n        this.responses = []\n        this.responseTimes = []\n    }\n\n    getSearchStimulusIndex() {\n        return this.stimuli.indexOf(this.searchStimulus)\n    }\n\n    getSearchStimuliImageNumber() {\n        return this.imageNumbers[this.getSearchStimulusIndex()]\n    }\n\n    getImages() {\n        return this.stimuli.map((stimulus, index) => this.taskType.imageUrlFromStimulus(stimulus, this.imageNumbers[index]))\n    }\n\n    isCorrectResponse(stimulus) {\n        return this.searchStimulus === stimulus\n    }\n\n    get OptionA() {\n        return this.taskType.getOption(this.stimuli[0], this.imageNumbers[0])\n    }\n    \n    get OptionB() {\n        return this.taskType.getOption(this.stimuli[1], this.imageNumbers[1])\n    }\n    \n    get OptionC() {\n        return this.taskType.getOption(this.stimuli[2], this.imageNumbers[2])\n    }\n    \n    get OptionD() {\n        return this.taskType.getOption(this.stimuli[3], this.imageNumbers[3])\n    }\n\n    get CRESP() {\n        return this.taskType.getOption(this.searchStimulus, this.getSearchStimuliImageNumber())\n    }\n\n    get Time() {\n        return this.startTime.toTimeString().split(' ')[0]\n    }\n\n    get RT() {\n        if (this.responseTimes.length > 0 && this.isCorrectResponse(this.responses[this.responses.length - 1])) {\n            return this.responseTimes[this.responseTimes.length - 1] - this.startTime\n        } else {\n            return 'N/A'\n        } \n    }\n\n    get PresOrder() {\n        return this.stimuli.map((stimulus) => this.taskType.stimuli.indexOf(stimulus) + 1).join('')\n    }\n\n    get IncorrRT() {\n        const incorrectResponseTimes = []\n        this.responses.forEach((response, index) => {\n            if (!this.isCorrectResponse(response)) {\n                incorrectResponseTimes.push(this.responseTimes[index] - this.startTime)\n            }\n        })\n        if (incorrectResponseTimes.length === 0) {\n            return 0\n        }\n        return incorrectResponseTimes.join('|')\n    }\n\n    get IncorrResp() {\n        const incorrectResponses = []\n        this.responses.forEach((response) => {\n            if (!this.isCorrectResponse(response)) {\n                incorrectResponses.push(this.taskType.stimuli.indexOf(response))\n            }\n        })\n        return incorrectResponses.join('|')\n    }\n\n    get TimedOut() {\n        return !this.responses.includes(this.searchStimulus)\n    }\n\n    get RunInPeriod() {\n        return this.trialType === 'practice' ? 1 : 0\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./antelopesAndCanteloupes/trial.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"INSTRUCTION_BUTTON_CONTAINER\": () => (/* binding */ INSTRUCTION_BUTTON_CONTAINER)\n/* harmony export */ });\nconst INSTRUCTION_BUTTON_CONTAINER = jQuery('<div/>', {\n    id: 'instructionButtonContainer', \n    class: 'instruction-button-container'\n})\n\n\nconst NEXT_BUTTON = jQuery('<div/>', {\n    id: 'nextButton',\n    class: 'instruction-button right-margined',\n    text: 'Next >>'\n})\n\n\nconst PREVIOUS_BUTTON = jQuery('<div/>', {\n    id: 'previousButton',\n    class: 'instruction-button left-margined',\n    text: '<< Previous'\n})\n\n\nINSTRUCTION_BUTTON_CONTAINER.append(PREVIOUS_BUTTON, NEXT_BUTTON)\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/components/instructionButtons.js?");

/***/ }),

/***/ "./shared/components/participantID.js":
/*!********************************************!*\
  !*** ./shared/components/participantID.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PARTICIPANT_ID_CONTAINER\": () => (/* binding */ PARTICIPANT_ID_CONTAINER)\n/* harmony export */ });\nconst PARTICIPANT_ID_CONTAINER = jQuery(\"<div/>\", {\n    id: 'participantIdContainer', \n    class: \"participant-id-container\"\n})\n\n\nconst PARTICIPANT_ID_LABEL = jQuery('<div/>', {\n    id: 'participantIdLabel',\n    class: 'participant-id-label',\n    text: 'Participant ID'\n})\n\nconst PARTICIPANT_ID_INPUT = jQuery('<input/>', {\n    id: 'participantIdInput',\n    class: 'participant-id-input'\n})\n\n\nconst SUBMIT_BUTTON = jQuery('<div/>', {\n    id: 'submitButton',\n    class: 'submit-button',\n    text: 'Submit'\n\n}).hover(\n    () => SUBMIT_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => SUBMIT_BUTTON.css({background: '#A8A8A8'})\n)\n\nPARTICIPANT_ID_CONTAINER.append(PARTICIPANT_ID_LABEL, PARTICIPANT_ID_INPUT, SUBMIT_BUTTON)\n\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/components/participantID.js?");

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

/***/ "./shared/task.js":
/*!************************!*\
  !*** ./shared/task.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BaseTask\": () => (/* binding */ BaseTask)\n/* harmony export */ });\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/container */ \"./shared/components/container.js\");\n\n\nclass BaseTask {\n\n    constructor() {\n        this.recordMouseMove = this.recordMouseMove.bind(this)\n        jQuery(document).mousemove(this.recordMouseMove)\n    }\n    \n    setupDOM() {\n        jQuery(\"#Questions\").remove()\n        jQuery(\"#PushStickyFooter\").remove()\n        jQuery(\"#Plug\").hide()\n        jQuery(\".SkinInner\").hide()\n        jQuery(\"#Wrapper\").append(_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER)\n    }\n\n    setupInstructionScreens() {\n        for (let i=0; i<this.instructionScreens.length; i++) {\n            if (i < this.instructionScreens.length - 1) {\n                this.instructionScreens[i].nextScreen = this.instructionScreens[i + 1]\n            }\n            if (i > 0) {\n                this.instructionScreens[i].previousScreen = this.instructionScreens[i - 1]\n            }\n        }\n\n        this.currentScreen = this.instructionScreens[0]\n        this.currentScreen.render()\n    }\n\n    recordMouseMove(event) {\n        if (this.inTrial) {\n            this.currentTrial.recordMouseMove(Date.now(), event.clientX, event.clientY)\n        }\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/task.js?");

/***/ }),

/***/ "./shared/trial.js":
/*!*************************!*\
  !*** ./shared/trial.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BaseTrial\": () => (/* binding */ BaseTrial)\n/* harmony export */ });\nclass BaseTrial {\n    constructor() {\n        this.mouseMoveTimes = []\n        this.mouseMoveXPositions = []\n        this.mouseMoveYPositions = []\n    }\n\n    recordMouseMove(time, xPosition, yPosition) {\n        this.mouseMoveTimes.push(time)\n        this.mouseMoveXPositions.push(xPosition)\n        this.mouseMoveYPositions.push(yPosition)\n    }\n\n    computeMousemoveStats() {\n        const firstMouseMoveTime = this.mouseMoveTimes.length > 0 ? this.mouseMoveTimes[0] - this.startTime : 'N/A'\n        let duration = 0\n        let distance = 0\n        let avgVelocity = 'N/A'\n        let startTime = null\n        let startX = null\n        let startY = null\n        while (this.mouseMoveTimes.length > 0) {\n            let currentTime = this.mouseMoveTimes.shift() \n            let currentX = this.mouseMoveXPositions.shift()\n            let currentY = this.mouseMoveYPositions.shift()\n            if (startTime !== null || currentTime - startTime < 500) {\n                const aSquared = Math.pow(startX - currentX, 2)        \n                const bSquared = Math.pow(startY - currentY, 2)\n                distance += Math.round(Math.sqrt(aSquared + bSquared))\n                duration += currentTime - startTime\n                avgVelocity = (distance / duration).toFixed(3)\n            }\n            startTime = currentTime\n            startX = currentX\n            startY = currentY\n        }\n\n        return [firstMouseMoveTime, duration, distance, avgVelocity]\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/trial.js?");

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

/***/ "./static/images/redArrow.png":
/*!************************************!*\
  !*** ./static/images/redArrow.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"afde89044752819d2890.png\";\n\n//# sourceURL=webpack://js-crlab/./static/images/redArrow.png?");

/***/ }),

/***/ "./static/images/stop.png":
/*!********************************!*\
  !*** ./static/images/stop.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a06a9198185417df2959.png\";\n\n//# sourceURL=webpack://js-crlab/./static/images/stop.png?");

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