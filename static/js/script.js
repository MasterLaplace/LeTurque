function generateText() {
    document.getElementById("submitButton").disabled = true;
    var textInput = document.getElementById("textInput").value;

    fetch('/gen', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: textInput }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        document.getElementById("output_img").innerHTML = '';

        var textElement = document.createElement('p');
        textElement.innerHTML = data.text;
        textElement.classList.add('generated-text');

        document.getElementById("output_text").innerHTML = '';
        document.getElementById("output_text").appendChild(textElement);

        data.tab_slide.forEach(image => {
            var imgElement = document.createElement('img');
            imgElement.src = image.image_url;
            imgElement.alt = 'Generated Image';
            imgElement.classList.add('generated-image');

            document.getElementById("output_img").appendChild(imgElement);
        });
        document.getElementById("submitButton").disabled = false;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("submitButton").disabled = false;
    });
}

function showContent() {
    const hiddenButton = document.getElementById("hideButton");
    hiddenButton.style.display = "block";
}

function redirectURL() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
