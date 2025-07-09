# Visual Components #

Tutorial on how to use different components, with visual and coding examples.

This also includes other Container objects used throughout different tasks. Like audio, video, instructional buttons, typing, and other elements used to create trial or instructional screens.

These are all HTML components.

___
### ~~~ PLEASE READ ME ~~~ ###

**These components are used by all tasks. Editing them and their styling will affect any tasks that use these objects.** Only change the source file if the component needs to be changed for all tasks. Only change the styling if the component needs to be changed for all tasks.

Change styling at the local level for a fine tune change of components. Style changing included along with other examples in the following.
___

### Location ###

Components can be found in `crlabgeorgetown/behavioral/shared/components/`.

Styling for components, texts, and images can be found in `crlabgeorgetown/behavioral/shared/styles`.

### Use ###

When setting up a 

### Examples ###

#### Audio ####

The audio containers acts like a regular components

#### Images ####

Contain images with formatting. 

`FOUR_IMAGE_CONTAINER`
<link rel="stylesheet" href="/behavioral/shared/styles/main.css">

<script>
const FOUR_IMAGE_CONTAINER = jQuery('<div/>', {
    id: 'four-image-container', 
    class: 'four-image-container'
})

const topleftImage = jQuery('<img/>', {
    id: 'topleftImage',
    class: 'image-container'
})

const toprightImage = jQuery('<img/>', {
    id: 'toprightImage',
    class: 'image-container'
})

const botleftImage = jQuery('<img/>', {
    id: 'botleftImage',
    class: 'image-container'
})

const botrightImage = jQuery('<img/>', {
    id: 'botrightImage',
    class: 'image-container'
})

FOUR_IMAGE_CONTAINER.append(topleftImage, toprightImage, botleftImage, botrightImage)
</script>