# Visual Components #

Tutorial on how to use different components, with visual and coding examples.

This also includes other Container objects used throughout different tasks. Like audio, video, instructional buttons, typing, and other elements used to create trial or instructional screens.

These are all HTML components.

___
### ~~~ PLEASE READ ME ~~~ ###

**These components are used by all tasks. Editing them and their styling will affect any tasks that use these objects.** Only change the source file if the component needs to be changed for all tasks. Only change the styling if the component needs to be changed for all tasks.

Change styling at the local level for a fine tune change of components. Style changing included along with other examples in the following.
___

## Location ##

Components can be found in `crlabgeorgetown/behavioral/shared/components/`.

Styling for components, texts, and images can be found in `crlabgeorgetown/behavioral/shared/styles`.

## Use ##

When setting up a new task, you may use these components sample code and screenshots of the various components are below.

To see these components in action, please check out the Component Sample Task. A mock task (no data is being collected nor sent anywhere) to showcase the components with names. Please refer back to this document for more details on implementing. 

# Components #

## Audio ##

### `AUDIO_CONTAINER` ###
___
<img src="./componentExamples/AUDIO_CONTAINER.png" alt="AUDIO_CONTAINER image" width="433.4" height="279.4">

___
This container allows browser to play audio. Does not really take up space on screen.

```
const AUDIO_CONTAINER = jQuery("<audio/>", {id: 'audioContainer'})
const AUDIO_SOURCE = jQuery("<source/>", {id: 'audioSource', type: 'audio/wav'})
```
In use, `task/screens/trials/auditory.js` lines 12, 54-55, 59:
```
[AUDIO_CONTAINER, {}]

...

AUDIO_SOURCE.attr('src', this.orchestrator.currentTrial.audioSource())
AUDIO_CONTAINER[0].load()

...

AUDIO_CONTAINER[0].play()
```
Where audio file is linked in `this.orchestrator.currentTrial.audioSource()`, any audio source link and be placed here.

*More details on audio coming soon*

## Video ##

### `VIDEO_CONTAINER` ###
*More detail on video coming soon*

## Text ##

### `TEXT_CONTAINER` ###
___
<img src="./componentExamples/TEXT_CONTAINER.png" alt="TEXT_CONTAINER image" width=433.4 height="279.4">

___

Simple container to display text. No strict formatting, would probably show up in the middle of the screen when placed alone. 

```
const TEXT_CONTAINER = jQuery("<div/>", {id: 'textContainer'})
```

In use, `task/screens/trials/wordToPicture.js` line 99:
```
[TEXT_CONTAINER, {text: '+', addClass: 'base-text extra-large-text large-fixed-height'}]
```
Where the displayed text is "+" and the classes are formatting styles defined in CSS files.

### `TEXT_CRESP_CONTAINER` ###



While not too different from `TEXT_CONTAINER`, this text container allows words to be displayed at the center of the screen, regardless of other components. This simplifies formats for the other components. 

### `SIX_LETTER_CONTAINER` ###

### `FOUR_LETTER_CONTAINER` ###

### `ARIZONA_TEXT_CONTAINER` ###

### `TWO_LETTER_CONTAINER` ###

### `ONE_LETTER_CONTAINER` ###


## Images ##

Contain images with formatting. 

### `IMAGE_CONTAINER` ###

### `FOUR_IMAGE_CONTAINER` ###

### `ARIZONA_IMAGE_CONTAINER` ###

### `ONE_IMAGE_CONTAINER` ###

## Typing ##

### `TYPING_CONTAINER` ###

## Trial ##

### `REPLAY_CONTAINER` ###

### `BUTTON_CONTAINER` ###

### `BUTTON_LABEL_CONTAINER` ###

### `PROCEED_CONTAINER` ###

### `STOP` ###


## Instructional ##

### `BEGIN_OR_PRACTICE_CONTAINER` ###

### `INPUT_DEVICE_CONTAINER` ###

### `INPUT_DEVICE_LABEL_CONTAINER` ###

### `INSTRUCTIONAL_BUTTON_CONTAINER` ###

### `PARTICIPANT_ID_CONTAINER` ###

## Other ##

### `CONTAINER` ###

# Styling #

Styling classes availble:

## `test.css` ##

* `base-text`