window.addEventListener("keypress", function (keyPressEvent) {
    let audioTag = document.querySelector(`audio[data-key='${keyPressEvent.keyCode}']`)
    if (!audioTag)
        return audioTag
    let polygon = document.querySelector(`.pianoKey[data-key='${keyPressEvent.keyCode}']`);
        audioTag.currentTime = 0;
        polygon.classList.add('pressed');
        audioTag.play()
        polygon.classList.remove('pressed')
    setTimeout(function() {
        polygon.classList.remove("pressed");
      }, 300);
});
