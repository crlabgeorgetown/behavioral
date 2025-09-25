# Beginner Guide: Trial Screen Class Structure

> Quick links: [Main README](../README.md) • [Creating New Tasks](newTask.md) • [Qualtrics Integration](qualtricsExplained.md)

This guide explains how to implement a Trial Screen class: setup, components, event handlers, `startTrial`, timing, and writing response variables back to the Trial class.

Related docs: `development_instructions/newTask.md`, `development_instructions/componentExamples.md`.

---

## 1) Where Trial Screens Live

- File location: `task/screens/trials/YOUR_TASK.js`
- Export your screen classes at the bottom so the Variant can reference them

---

## 2) Class Skeleton

```js
import Screen from "../base"
import { TEXT_CONTAINER } from "../../../shared/components/textContainer"

class YourTrialScreen extends Screen {
    get components() {
        return new Map([
            [TEXT_CONTAINER, { text: '+', addClass: 'base-text extra-large-text large-fixed-height' }],
            // Add other components here (audio, images, typing, buttons)
        ])
    }

    get clickHandlers() {
        return {
            // map component IDs to handler functions
            // e.g., rightChevron: (event) => this.proceedClickHandler(event)
        }
    }

    get eventListeners() {
        return {
            // global event listeners, e.g., keydown: (event) => this.keydownHandler(event)
        }
    }

    startTrial() {
        // timing, show/hide components, load stimuli, start response window
        // set trial start time and schedule timeout if needed
        this.orchestrator.currentTrial.startTime = new Date()
        // when complete:
        // this.orchestrator.next() or this.orchestrator.replay() (for practice)
    }
}

export { YourTrialScreen }
```

---

## 3) Components (UI Layout)

- Use shared components from `shared/components/` (audio, text, image grids, typing, replay, proceed buttons)
- Return them in a Map from `components()` in the order they should appear
- See `development_instructions/componentExamples.md` for code and visuals

Example (typing + proceed):
```js
get components() {
    return new Map([
        [TEXT_CONTAINER, { text: '+', addClass: 'base-text extra-large-text large-fixed-height' }],
        [PROCEED_CONTAINER, {}],
        [TYPING_CONTAINER, {}]
    ])
}
```

---

## 4) Event Handlers

- `clickHandlers` map element IDs (e.g., `rightChevron`, `replayAudio`) to methods
- `eventListeners` define global listeners (e.g., `keydown`)
- Use handlers to update Trial fields in real time (e.g., appending typed characters, logging key times)

Example (typing):
```js
keydownHandler(event) {
    if (event.key === 'Enter') { this.proceedClickHandler(event) }
    this.orchestrator.currentTrial.keydown(event.key)
    TYPING_INPUT.text(this.orchestrator.currentTrial.Response)
}
```

---

## 5) startTrial() and Timing

Typical flow:
1) Hide interactive UI
2) Show fixation or instructions
3) After `fixationDuration`, load/play stimulus
4) Show interactive UI and start timers
5) On response or timeout, record data and advance

Example (audio + typing):
```js
startTrial() {
    PROCEED_CONTAINER.hide()
    TYPING_CONTAINER.hide()
    TYPING_INPUT.text(this.orchestrator.currentTrial.Response)

    setTimeout(() => {
        TEXT_CONTAINER.text('')
        AUDIO_SOURCE.attr('src', this.orchestrator.currentTrial.audioSource())
        AUDIO_CONTAINER[0].load()
        AUDIO_CONTAINER[0].play()

        PROCEED_CONTAINER.show()
        TYPING_CONTAINER.show()

        this.orchestrator.currentTrial.startTime = new Date()

        this.timeoutID = setTimeout(() => {
            this.orchestrator.currentTrial.TimedOut = true
            this.orchestrator.currentTrial.responseTime = new Date()
            this.orchestrator.timedOut()
        }, this.orchestrator.variant.timeToTimeout)
    }, this.orchestrator.variant.fixationDuration)
}
```

---

## 6) Writing to Trial Variables

- The Trial Screen should update the `currentTrial` instance as the participant interacts
- Common fields to set:
  - `Response`
  - `responseTime` (set when advancing)
  - `TimedOut` (set in timeout callback)
  - Any counters (e.g., `Repetitions`)

Example (proceed button):
```js
proceedClickHandler(event) {
    event.stopPropagation()
    clearTimeout(this.timeoutID)

    this.orchestrator.currentTrial.responseTime = new Date()
    const isPractice = this.orchestrator.currentTrial.TrialType === 'Practice'

    if (!this.orchestrator.currentTrial.isCorrect() && isPractice) {
        this.orchestrator.replay()
    } else {
        this.orchestrator.next()
    }
}
```

---

## 7) Exported Columns (from Trial Class)

- The Trial class defines a `columns` getter: this controls what gets sent to Qualtrics
- Add any derived getters in the Trial class (e.g., `Accuracy`, `KeysPressed`, `TimeOnItem`)
- The Qualtrics client concatenates values across trials with `;`

See examples in `task/trials/typing.js`.

---

## 8) Checklist

- Components render and show/hide correctly
- Event handlers update Trial fields
- `startTrial` manages timing and timeouts
- Proceed/replay advances correctly (practice vs real)
- Trial `columns` include all variables you need

If you need inspiration, open `task/screens/trials/typing.js` and mirror the pattern.
