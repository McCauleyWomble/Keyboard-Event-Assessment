// Define an array of 10 secret keys
var secretKeys = ["b", "p", "a", "l", "w", "j", "x", "k", "z", "q"];

// Select the body element
var body = document.querySelector("body");

// Setup a keyboard event on the whole body
body.addEventListener("keydown", function (event) {
    // Check if the pressed key is a secret key
    if (secretKeys.includes(event.key)) {
        // Append "SECRET KEY PRESSED" and the key that was pressed to the body
        const secretMessage = document.createElement("p");
        secretMessage.innerHTML = "<strong>SECRET KEY PRESSED " + event.key + "</strong>";
        body.appendChild(secretMessage);
    }

});