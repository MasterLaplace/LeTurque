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

window.addEventListener("scroll", function() {
    const button = document.getElementById("buttonSound");

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        button.style.bottom = "0";
    } else {
        button.style.bottom = "-50px";
    }
});