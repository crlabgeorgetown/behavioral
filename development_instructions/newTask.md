### How to Create a New Task in the Aphasia Behavioral System

> Documentation: [Home - README](../README.md) • [Task Architecture](taskFunctionality.md) • [Creating New Tasks](newTask.md) • [Component Examples](componentExamples.md) • [Qualtrics Integration](qualtricsExplained.md) • [Git & Setup](gitHub.md) • [Trial Screen Guide](trialScreen.md)

Checklist (10 steps)
1) Put assets in `static/` (audio/images/video)
2) Create CSV in `static/data/` with columns your Trial expects
3) Add HTML entry in `task/html/` to load CSV and instantiate `task.Task`
4) Create Variant class in `task/variants/`
5) Create Trial class in `task/trials/`
6) Create Trial Screen class in `task/screens/trials/`
7) Register variant in `task/variants/index.js`
8) Test locally via HTML
9) Push to main, wait ~1.5 min for GitHub Pages
10) Test in Qualtrics via anonymous link

---

This guide outlines the full process for creating a new behavioral task (a "variant") using this system, from file setup to Qualtrics integration.

---

## 1. Prerequisites

### Before You Begin
- Place all stimuli (audio/image/video) into the appropriate subdirectory under `static/`.
- Create a CSV file that defines your trials.
  - The structure of this CSV is flexible, but it must be consistent with what your custom Trial class expects.
  - Common fields might include: `ItemNum`, `Item`, `TrialType`, `Procedure`, etc.
  - The column names must match the properties your `Trial` constructor reads.
  - Save the file to: `static/data/YOUR_VARIANT.csv`

Tip: Look at existing CSVs in `static/data/` for column naming conventions.

---

## 2. HTML Entry Point (Qualtrics or Local Testing)

- Create a new HTML file in `task/html/`.
  - Name the file after your variant (e.g., `typingToDiction.html`).
  - Use `task/html/index.html` as a minimal example.

- Update the script in your HTML file to load the CSV and instantiate the Task:

```html
<script src="../../dist/task.bundle.js"></script>
<script>
  const variant = 'TYPING_TO_DICTION' // must match the registry key in task/variants/index.js
  const variantDataFilename = `https://crlabgeorgetown.github.io/behavioral/static/data/${variant.toLowerCase()}.csv`
  d3.csv(variantDataFilename).then((data) => new task.Task(data, this, variant))
  // In Qualtrics, `this` will be the Qualtrics engine object
</script>
```

Notes:
- The string in `variant` must exactly match the key you register in `task/variants/index.js`.
- For local CSV testing, you can point `variantDataFilename` to a local file path, but for Qualtrics you should use the GitHub Pages URL as above.

---

## 3. Register the Variant

- File: `task/variants/index.js`

Steps:
1. Import your variant class file.
2. Add a new UPPER_SNAKE_CASE constant for your variant key (e.g., `TYPING_TO_DICTION`).
3. Map that key to your class in `variantFromString`.

Example (mirroring existing typing variants):

```
32:35:./behavioral/task/variants/index.js
// TYPING
const TYPING_BASELINE = 'TYPING_BASELINE'
const TYPING_TO_DICTION = 'TYPING_TO_DICTION'
```

```
75:78:./behavioral/task/variants/index.js
// TYPING
[TYPING_BASELINE]: TypingBaseline,
[TYPING_TO_DICTION]: TypingDiction,
```

Your HTML must use the exact string key (e.g., `'TYPING_TO_DICTION'`).

---

## 4. Create the Variant Class

- File: `task/variants/YourVariantFile.js` (e.g., extend `task/variants/typing.js` style)
- Use an existing variant file (e.g., `task/variants/typing.js`) as a guide for structure and naming.

What to include:
- Administrative metadata: `testNameShort`, `buildTestID`, `ePrimeTemplateID` (use lab-approved values).
- Instruction strings used by default instruction screens.
- Timing defaults (e.g., `fixationDuration`, `timeToTimeout`).
- Pointers to your `trialClass` and `trialScreenClass`.
- A list of administrative screens (`screens`) to include before trials begin.

Example (excerpt adapted from `typing.js`):

```
31:49:./behavioral/task/variants/typing.js
class TypingDiction {
    constructor() {
        this.testNameShort = 'TypingDiction'
        this.buildTestID = 153
        this.ePrimeTemplateID = 49
        this.instructionOne = 'You will hear a word.\nPlease use the keyboard to type the word you hear.'
        this.instructionTwo = 'Press Backspace to delete a letter. Press Enter to move to the next word.'
        this.customPracticeText = `We will start with a few practice items before we begin.`
        this.fixationDuration = 1000
        this.timeToTimeout = 30000
        this.trialClass = TypingDecisionTrial
        this.trialScreenClass = TypingDecisionTrialScreen
        this.screens = [
            ParticipantId,
            InstructionOne,
            InstructionTwo,
            LetsPractice
        ]
    }
}
```

---

## 5. Create the Trial Class

- File: `task/trials/YOUR_TRIAL.js`
- Stores trial-specific state and defines what is exported to Qualtrics.

Key features:
- Constructor accepts a single `config` (the CSV row object).
- Tracks participant response, event timing, and any task-specific values.
- Provides a `columns` getter list that defines the exported variable names (Qualtrics will receive `;`-concatenated values per variable).

Example (excerpt):

```
3:18:./behavioral/task/trials/typing.js
class TypingTrial {
    constructor(config) {
        this.ItemNum = config.ItemNum
        this.TrialType = config.TrialType
        this.Item = config.Item
        
        this.Response = ''
        this._KeysPressed = []
        this._KeyPressTiming = []
        
        this.startTime = null
        this.responseTime = null
        this.TimedOut = false
        this.Repetitions = 0
        this.TrialWasAdministered = 1
    }
```

```
35:47:./behavioral/task/trials/typing.js
get columns() {
    return [
        ...Object.keys(this),
        'Accuracy',
        'KeysPressed',
        'KeyPressTiming',
        'NumBackspaces',
        'NumLettersFinalResponse',
        'NumNonBackspaces',
        'Time',
        'Date',
        'TimeOnItem',
    ]
}
```

---

## 6. Create the Trial Screen Class

- File: `task/screens/trials/YOUR_SCREEN.js`
- Defines visuals, timing, and user interactions for each trial.

Required pieces:
- `get components()` to compose UI elements
- `get clickHandlers()` / `get eventListeners()` to map actions to logic
- `startTrial()` to implement timing and flow (fixation, stimulus load, response window, advance)

Example (excerpt):

```
114:133:./behavioral/task/screens/trials/typing.js
startTrial() {
    PROCEED_CONTAINER.hide()
    REPLAY_CONTAINER.hide()
    TYPING_CONTAINER.hide()
    TYPING_INPUT.text(this.orchestrator.currentTrial.Response)
    setTimeout(() => {
        TEXT_CONTAINER.text('')
        AUDIO_SOURCE.attr('src', this.orchestrator.currentTrial.audioSource())
        PROCEED_CONTAINER.show()
        REPLAY_CONTAINER.show()
        TYPING_CONTAINER.show()
        AUDIO_CONTAINER[0].load()
        AUDIO_CONTAINER[0].play()
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

## 7. Wire Up Stimuli Accessors (if needed)

- If your trial needs to dynamically resolve media files, add helper methods to the Trial (e.g., `audioSource()`), returning fully qualified URLs under `https://crlabgeorgetown.github.io/behavioral/static/...`.

Example (excerpt):

```
171:176:./behavioral/task/trials/typing.js
audioSource() {
    const sound = this.Item
    // TODO: replace link to folder with typing to diction stimuli
    // TODO: add stimuli
    return `https://crlabgeorgetown.github.io/behavioral/static/auditory_rhyme_decision_wav_files/${sound}.wav`
}
```

---

## 8. Testing via Qualtrics

### Use the Anonymous Survey Link
- Do not use the Qualtrics "Preview Survey" feature.
- Use the actual anonymous link in a new tab to ensure the deployed GitHub Pages bundle is used.

### Testing Tips
- Use `XXX` as the Participant ID for developer tests to keep them easy to filter out.

### Deployment Delay
- The bundle is served via GitHub Pages after CI completes.
- Typical delay is under ~1m 25s. For safety, wait up to 2 minutes.
- Verify success in the repo’s Actions tab (green check on the latest Build and Deploy job).

---

## 9. Submission to Qualtrics (Data Format)

- The system concatenates values per variable across trials using a semicolon (`;`).
- Your Trial `columns` list determines which variables are exported.
- Normalize values as needed (e.g., booleans to 1/0, timestamp formats) in your Trial getters.
- Downstream scripts split by `;` to reconstruct trial-wise arrays.

---

## 10. Guardrails (Do Not Modify)

When adding a new variant, do not edit core files:
- `task/task.js`
- `task/orchestrator.js`
- `task/sequenceNode.js`
- `task/qualtricsClient.js`

These provide the shared runtime (orchestration, screen flow, Qualtrics submission).

---

## 11. Quick Checklist

1) CSV ready in `static/data/your_variant.csv` (columns match your Trial constructor)
2) Assets placed under `static/…`
3) New HTML in `task/html/` instantiating `new task.Task(data, this, 'YOUR_KEY')`
4) Variant registered in `task/variants/index.js` (import, constant key, mapping)
5) Variant class created in `task/variants/` with `trialClass`, `trialScreenClass`, screens, timing, instructions
6) Trial class in `task/trials/` with `columns` and any formatting getters
7) Trial screen in `task/screens/trials/` implementing components, handlers, `startTrial()`
8) Test via Qualtrics anonymous link; confirm GitHub Pages deployment


