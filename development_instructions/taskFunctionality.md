# Task Architecture and Development Guide

> Related: [Main README](../README.md) • [Trial Screen Guide](trialScreen.md) • [Creating New Tasks](newTask.md)

## Overview
This document explains how a task is structured and executed, how it connects to Qualtrics, and what you need to implement when adding a new task variant. The core runtime is stable and shared; variants define task-specific behavior and screens.

## Visual Flow
CSV data → Orchestrator → Trial + Trial Screen → Participant Interactions → Qualtrics Client → Qualtrics variables

## Core Concepts

- **Task**: The root object instantiated by Qualtrics. It is created with three parameters: `data`, `engine`, and `variant`.
  - **data**: A CSV dataset defining trials (ordering, stimulus parameters, practice vs real, etc.).
  - **engine**: The Qualtrics integration details used to submit results back to the survey.
  - **variant**: The task-specific configuration and classes that determine what participants see and how responses are collected.

- **Qualtrics bundle import**: When the built bundle is imported as a script in Qualtrics, the survey simply constructs a `Task` with the appropriate `data`, `engine`, and `variant`. The behavioral differences across tasks come from the variant classes.

- **Qualtrics Client** (`task/qualtricsClient.js`): Handles communication with Qualtrics and submits responses when the overall Task is submitted (e.g., via a Submit button).

- **Orchestrator** (`task/orchestrator.js`): Coordinates everything. It transforms CSV `data` rows into an executable sequence of Screens using the `variant`-provided classes. It builds a linked list of `SequenceNode` objects that the Task will walk through (instructions, practice, trials, breaks, etc.).

- **SequenceNode** (`task/sequenceNode.js`): A node in the task flow. Represents one Screen in a linked sequence. You typically don’t modify this.

Important: You should not change `task/task.js`, `task/sequenceNode.js`, `task/qualtricsClient.js`, or `task/orchestrator.js` when creating or updating a variant.

## Execution Flow

1. Qualtrics loads the distribution bundle and constructs `new Task({ data, engine, variant })`.
2. The `Task` instantiates the Orchestrator.
3. The Orchestrator reads the CSV `data` and the `variant` administrative/configuration class to:
   - Create the default administrative screens (participant ID, instructions, etc.). See also: [Creating New Tasks](newTask.md)
   - Build practice and real trial sequences as needed.
   - For each trial row, create a `Trial` instance and a corresponding `TrialScreen` instance. See also: [Trial Screen Guide](trialScreen.md)
4. The Orchestrator creates a linked list of `SequenceNode` objects representing the entire flow.
5. Participants proceed through Screens. The `TrialScreen` manages display, timing, and event handling; the `Trial` stores trial-level data.
6. On completion/submit, the Qualtrics Client serializes trial variables and sends them to Qualtrics.

## Data Submission to Qualtrics

- The Qualtrics Client aggregates values per variable across all trials and concatenates them using a semicolon (`;`).
  - Example: `responses = "Y;N;Y;Y"`, `rt_ms = "520;610;490;560"`.
- Qualtrics accepts one value per survey variable, so concatenation enables multi-trial data transfer. Downstream analysis (e.g., MATLAB) should split by `;` to reconstruct trial-wise arrays.
- Variants can perform light normalization prior to submission (e.g., convert booleans to 1/0, format timestamps, etc.).

## Screens

Screens are what participants see. There are default screens (instructional, transitional/breaks) and variant-specific trial screens.

- **Default screens**: Provided by the core system; include participant ID input, instructions, practice instructions, and transitional/break screens.
- **Variant trial screens**: Defined by each variant’s Trial Screen Class. These render stimuli (text, images, audio, video), implement timing logic, and handle events (key presses, button clicks). They control when to present stimuli, when to start/stop collecting responses, and how to advance. See: [Trial Screen Guide](trialScreen.md)

## Variants

Each variant consists of four primary components (plus any assets like images/audio/video and any reusable components):

1. **Data file (CSV)**: Defines trial order and parameters (stimulus identifiers, condition labels, practice flags, etc.).
2. **Administrative/Descriptor Class**: Contains metadata and configuration, such as:
   - `buildTestID`, `ePrimeID`, `name`.
   - Instruction strings and timing defaults.
   - Which administrative screens to include (participant ID, instructions, practice instructions).
   - References to the `Trial` Class and `Trial Screen` Class used by this variant.
3. **Trial Class**: Holds per-trial state and defines what gets submitted to Qualtrics. Typical fields include:
   - `stimulus` (from CSV row), `itemNumber`, `trialType` (practice/real), `response`, `rtMs`, etc.
   - A mapping for export (variable names → values) and any light reformatting (e.g., `true → 1`).
4. **Trial Screen Class**: Implements the participant-facing trial behavior:
   - Composes HTML/UI components.
   - Defines event handlers (e.g., button clicks, key presses).
   - Encodes timing (stimulus onset/offset, response windows, ITI) and flow (advance conditions). See: [Trial Screen Guide](trialScreen.md)

## Data Flow Summary

- CSV row → Orchestrator → `Trial` instance (stores state and will export variables)
- `Trial` + `TrialScreen` → participant interaction → response data recorded
- End of task → Qualtrics Client concatenates variables by `;` and submits once

This separation keeps the platform stable while allowing rapid iteration on new tasks via variants.