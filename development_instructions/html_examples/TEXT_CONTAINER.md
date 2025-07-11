<html>
<body>
<style>
html, body {
    overflow: hidden;
    touch-action: none;
}
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: landscape)
  and (-webkit-min-device-pixel-ratio: 2) {
    .large-text {
        font-size: 33pt;
    }

    .medium-text {
        font-size: 27pt;
    }
}
.base-text {
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    flex-direction: column;
    color: #000000;
    white-space: pre-line;
    line-height: 1.7em;
    margin-top: auto;
    margin-bottom: auto;
    font-family: Arial;
}
.extra-large-text {
    font-size: 60pt;
}
.large-fixed-height {
    height: 275px;
}
</style>
<div id="textContainer" class="base-text extra-large-text large-fixed-height">
+
</div>
</body>
</html>

