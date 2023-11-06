// form.js

// Get references to the form, textarea, and submit button
const form = document.getElementById("feedbackForm");
const messageInput = document.getElementById("messageInput");
const submitButton = document.getElementById("submitButton");

// Function to update the submit button text and style
function updateButtonState(greenBackground, text) {
  submitButton.textContent = text;
  submitButton.style.backgroundColor = greenBackground ? "green" : "";
}

// Initial state
updateButtonState(false, "Please fill out the required information");

// Add an event listener to the textarea to check for input
messageInput.addEventListener("input", function () {
  // Enable the submit button when the textarea has input
  if (messageInput.value.trim() !== "") {
    submitButton.removeAttribute("disabled");
    updateButtonState(false, "Submit");
  } else {
    submitButton.setAttribute("disabled", "disabled");
    updateButtonState(false, "Submit");
  }
});

// Add an event listener to the form to handle submission
form.addEventListener("submit", function (e) {
  // Prevent the form from being submitted to another page
  e.preventDefault();

  // Change the button text to "Sending..." and turn it green
  updateButtonState(true, "Sending...");
  submitButton.setAttribute("disabled", "disabled");

  // Delay for 5 seconds and then redirect the user to another page
  setTimeout(function () {
    window.location.href = "success.html"; // Replace with the desired URL
  }, 5000); // 5000 milliseconds = 5 seconds
});
