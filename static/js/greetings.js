document.addEventListener('DOMContentLoaded', function() {
    const greetings = [
        "Hello there!",
        "Welcome to my website!",
        "Greetings!",
        "Hey, nice to see you!",
        "Good to have you here!",
    ];

    const randomGreeting = Math.floor(Math.random() * greetings.length);
    alert(greetings[randomGreeting])
});