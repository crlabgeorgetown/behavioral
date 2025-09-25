# Component Examples (Structured Guide)

> Related docs: [Main README](../README.md) • [Trial Screen Guide](trialScreen.md) • [Creating New Tasks](newTask.md)

## Table of Contents
- Overview
- How to use components in a Trial Screen
- Audio components
- Text components
- Image components
- Typing components
- Utility/interaction components (proceed, replay)
- Styling: where and how

---

## Overview
Shared UI components (in `shared/components/`) are used to assemble trial screens. You return them from a screen’s `components()` getter as a Map in the order you want them to appear. Use hide/show and attribute setters (e.g., `.text()`, `.attr('src', ...)`) during the trial.

---

## How to use components in a Trial Screen

Minimal example:
```js
get components() {
  return new Map([
    [TEXT_CONTAINER, { text: '+', addClass: 'base-text extra-large-text large-fixed-height' }],
    [PROCEED_CONTAINER, {}]
  ])
}

startTrial() {
  PROCEED_CONTAINER.hide()
  setTimeout(() => {
    TEXT_CONTAINER.text('Ready')
    PROCEED_CONTAINER.show()
  }, this.orchestrator.variant.fixationDuration)
}
```

---

## Audio components
- Files: `shared/components/audioContainer.js`, `shared/components/replayAudio.js`
- Use cases: audio stimulus presentation and replay buttons

Example usage:
```js
[AUDIO_CONTAINER, {}]
...
AUDIO_SOURCE.attr('src', this.orchestrator.currentTrial.audioSource())
AUDIO_CONTAINER[0].load()
AUDIO_CONTAINER[0].play()
```

---

## Text components
- Files: `shared/components/textContainer.js`, `shared/components/textCRESPContainer.js`
- Use cases: fixation cross, prompt text, centrally overlaid text during images

Example usage:
```js
[TEXT_CRESP_CONTAINER, { addClass: 'overlay-container' }]
...
TEXT_CRESP_CONTAINER.text(this.orchestrator.currentTrial.CRESP)
```

---

## Image components
- Files: `shared/components/fourImageContainer.js`, `shared/components/imageContainer.js`, `shared/components/arizona*`
- Use cases: 2x2 selection grids, single images, Arizona layouts

Example usage:
```js
[FOUR_IMAGE_CONTAINER, { addClass: 'four-image-container' }]
...
topleftImage.attr('src', this.orchestrator.currentTrial.getTopLeft())
```

---

## Typing components
- Files: `shared/components/typing.js`
- Use cases: keyboard input trials (typing baseline/diction)

Example usage:
```js
[TYPING_CONTAINER, {}]
...
TYPING_INPUT.text(this.orchestrator.currentTrial.Response)
```

---

## Utility / interaction components
- Proceed: `shared/components/rightChevron.js`
- Replay: `shared/components/replayAudio.js`

Example usage:
```js
[PROCEED_CONTAINER, {}]
...
rightChevron: (event) => this.proceedClickHandler(event)
```

---

## Styling: where and how
- Global/shared styles: `shared/styles/`
- Prefer adding classes from existing styles via component options (e.g., `addClass`)
- If you must add new shared styles, remember all tasks are affected

See also: original examples in `componentExamples.md` for screenshots.
