# Structure of Repository - `crlabgeorgetown/behavioral/` #

> Documentation: [Home - README](../README.md) • [Git & Setup](gitHub.md) • [Repository Structure](repositoryStructure.md) • [Task Architecture](taskFunctionality.md) • [Creating New Tasks](newTask.md) • [Trial Screen Guide](trialScreen.md) • [Component Examples](componentExamples.md) • [Qualtrics Integration](qualtricsExplained.md)

Main repository (directory, or folder) for task development, distribution, and storage. Contains configuration files and internal guidance (such as instructions, TO-DOs, and code configuration).

[`task/`](#10-task) is the main folder for new task development. Using components from [`shared/components/`](#71-sharedcomponents).

Below are folders within the `crlabgeorgetown/behavioral/` GitHub repository.

### 1. `antelopesAndCanteloupes/` ###

Folder for the Antelopes and Canteloupes task.

*More details on code soon.*

Do: Browse to learn patterns
Don’t: Use as a base for new tasks (prefer `task/`)

### 2. `development_instructions/` ### 

Folder to organize the instructions for future task development.

Do: Read and update docs
Don’t: Store code or assets here

### 3. `dist/` ###

Contains the distribution bundles used by Qualtrics. The bundles combine all source files into one compiled, distributable file for Qualtrics scripts. This one file provides a simpler implementation in Qualtrics.

* `antelopesAndCanteloupes.bundle.js`
* `lexicalDecision.bundle.js`
* `rhymeDecision.bundle.js`
* `stroop.bundle.js`
* `task.bundle.js`
* `wordRepetition.bundle.js`

`task.bundle.js` containing most of the tasks and newly developed tasks.

***DO NOT EDIT THIS FOLDER OR ITS CONTENTS!*** More on distribution later.

### 4. `docs/` ###

Contains files for internal use, like screenshots used for explaining development concepts.

### 5. `lexicalDecision/` ###

Contains source code for the Lexical Decision tasks (Auditory and Written).

*More details on code soon.*

### 6. `rhymeDecision/` ###

Contains source code for the Rhyme Decision tasks (Auditory and Written).

*More details on code soon.*

### 7. `shared/` ###

Contains base implementations for older tasks (Antelopes and Canteloupes, Lexical Decision, Rhyme Decision, and Stroop).

*Do not use these implementations for new task development.*

#### 7.1. `shared/components/` ####

Contains source code for visual elements seen on various HTML pages (instructional and trial). Visual elements should be pulled from this directory, new visual elements should be added here. These are HTML objects implemented in JavaScript.

Use these to create new screens for new task development. See [Component Examples](componentExamples.md) for code and resulting page examples.

*Do not edit existing components to fit new tasks.* 

Examples:
- Text container: `shared/components/textContainer.js`
- Audio: `shared/components/audioContainer.js`
- Typing: `shared/components/typing.js`

#### 7.2. `shared/screens/` ####

Contains base implementation for older tasks' visual screens.

*Do not use these implementations for new task development.*

#### 7.3. `shared/styles/` ####

Contains CSS styling for HTML components found in `shared/components/`. Edit CSS to change styling in components. Since these are shared, remember all tasks will be affected by changes.

More on how to change styling for individual tasks or components of a task later.

*Do not edit existing styles to fit new tasks.* 

### 8. `static/` ###

Contains static folders used by various tasks, such as, images, audio files, and trial ordering. Specific tasks may contain their own subfolder here with task specific images or audio files. 

Do: Place CSVs under `static/data/`, media under appropriate subfolders
Don’t: Reference local file paths (use repo-hosted assets)

#### 8.5. `static/data/` ####

Contains CSV files for all tasks and task variations. These CSV files contain the ordering, descriptors, and other data used to create trial screens. Each task, more specifically, each task various (for example, Auditory Lexical Decision and Written Lexical Decision) should have its own CSV file.

Example CSV path: `static/data/typing_to_diction.csv`

#### 8.7. `static/images/` ####

Contains universal images used by instructional buttons. For example, next buttons, computer mouse, checkmark, etc.

##### 8.7.1. `static/images/readmap/` #####

Contains images used by ReadMap tasks.

### 9. `stroop/` ###

Contains source code for the Stroop task.

*More details on code soon.*

### 10. `task` ###

Contains source code for most tasks (except for Antelopes and Canteloupes, Lexical Decision, Rhyme Decision, and Stroop tasks) and should be the starting point for new task development.

Main folder contains base implementation for task objects, `task.js`. Also contains implementations for trial sequencing, `sequenceNode.js`, formatter to send packaged, correctly formatted data to Qualtrics, `qualtricsClient.js`, and an orchestrator to format and connect all related data and source files, `orchestrator.js`.

***DO NOT EDIT THESE SOURCE CODE FILES***

#### Task subtree (key files)
```
task/
├─ html/                 # HTML entry points (local testing)
├─ screens/
│  ├─ base.js            # Base Screen class
│  ├─ instruction.js     # Instruction screens
│  ├─ transition.js      # Transition/break screens
│  └─ trials/
│     ├─ typing.js       # Trial screens for typing
│     ├─ wordToPicture.js
│     └─ ...
├─ trials/
│  ├─ typing.js          # Trial classes (data & export mapping)
│  └─ ...
├─ variants/
│  ├─ typing.js          # Variant classes (admin/config)
│  ├─ index.js           # Variant key → class mapping
│  └─ ...
├─ orchestrator.js       # Orchestration (do not edit)
├─ sequenceNode.js       # Flow nodes (do not edit)
├─ qualtricsClient.js    # Qualtrics submission (do not edit)
└─ task.js               # Task entry (do not edit)
```

Below are folders within this `task/` folder:

#### 10.1. `task/html/` ####

Contains HTML files for quick launch of corresponding tasks. Allows for development testing, opens and shows similar to how the Qualtrics scripts might open and run the tasks. 

#### 10.2. `task/screens/` ####

Contains base implementations for visual screens (HTML pages).

* `base.js`
* `instruction.js`
* `transition.js`

##### 10.2.1. `task/screens/trials/` #####

Contains task specific trial screen implementations, the Trial Screen Class. These source files contain the logic for a task's trial. For example, what is displayed, when something is displayed, buttons (or response) data collection, like response time or decision.

Each task should have its own file, and each task variant should have its own implementation within the file.

#### 10.3. `task/trials/` ####

Contains task specific trial implementations, the Trial Class. These source files contain the data used by a specific trial for a task. For example, the different options, stimuli, or other trial specific information. This object also stores the trial information, response data, and contains functions specific for trials (like getting audio/image file or formatting data to send to Qualtrics).

Each task should have its own file, and each task variant should have its own implementation within the file.

#### 10.4. `task/variants/` ####

Contains task implementation, the Variant Class. These source files contain a task's instructional screens, "meta" data (like build test ID), and points to the task specific Trial Class and Trial Screen Class.

Each task should have its own file, and each task variant should have its own implementation within the file.

`index.js` contains mapping of the different variants to their specific objects within the different tasks. This is used to connect input received from Qualtrics regarding the task Qualtrics is requesting. Each Qualtrics or HTML "request" sends the name of a task or task variant.
