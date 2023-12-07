var clickCount = 0;

function playSound() {
    console.log("playing sound");
    clickCount++;
    console.log(clickCount);
    if (clickCount == 10) {
        var sound = document.getElementById("jeff");
        if (sound) {
            console.log(sound);
            sound.play();
        } else
            console.log("no sound");
        clickCount = 0;
    }
}