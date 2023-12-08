document.addEventListener('DOMContentLoaded', function() {
    const greetings = [
        "Hello there!",
        "Welcome to my website!",
        "Greetings!",
        "Hey, nice to see you!",
        "Good to have you here!",
    ];

    const randomGreeting = Math.floor(Math.random() * greetings.length);

    const greetingContainer = document.getElementById("greetingContainer");
    if (greetingContainer) {
        greetingContainer.textContent = greetings[randomGreeting];
    }
});

function showContent() {
    const greeting = document.getElementById("greetingName");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            greeting.style.display = "none";
        } else if (window.scrollY == 0) {
            greeting.style.display = "block";
        }
    });
}

window.addEventListener("load", showContent);