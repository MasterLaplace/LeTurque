const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
];
let konamiCodePosition = 0;

function konamiHandler(event) {
    const key = event.key.toLowerCase();
    const requiredKey = konamiCode[konamiCodePosition].toLowerCase();
    console.log("KEY: " + key);
    console.log("REQUIRED KEY: " + requiredKey);

    if (key == requiredKey) {
        konamiCodePosition++;
        if (konamiCodePosition == konamiCode.length) {
            document.body.classList.add("konami");
            document.getElementById("normalPage").style.display = "none";
            document.getElementById("buttonSound").style.display = "none";
            document.getElementById("hiddenContent").style.display = "block";
            konamiCodePosition = 0;
        }
    } else {
        console.log("failed");
        konamiCodePosition = 0;
    }
}

document.addEventListener("keydown", konamiHandler);