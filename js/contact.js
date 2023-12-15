const scriptURL2 = 'https://script.google.com/macros/s/AKfycbyzG8wNb0K1Ekgl7SDozph985UAJNnWyCtF-oblXAlQmMPVnkjYjZR5gWsRkhRjDJSb/exec';
const form2 = document.forms['contactForm'];

form2.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL2, { method: 'POST', body: new FormData(form2) })
    .then(response => console.log('Success Form 2!', response))
    .catch(error => console.error('Error Form 2!', error.message));
});

// contact.js

// Function to generate a unique number
function generateUniqueNumber() {
  return 'F-' + (Math.floor(100000000 + Math.random() * 900000000));
}

// Set the value of the "uniqueNumber" input field when the page loads
document.addEventListener('DOMContentLoaded', function () {
  const uniqueNumber = generateUniqueNumber();
  document.getElementById('uniqueNumber').value = uniqueNumber;
});

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Disable the input fields
  document.getElementById('fullName').disabled = true;
  document.getElementById('email').disabled = true;
  document.getElementById('message').disabled = true;

  // Disable the button
  const submitButton = document.getElementById('submitButton');
  submitButton.disabled = true;

  // Update the button text to "Sending..."
  submitButton.innerHTML = 'Sending...';

  // Get the unique number from the input field
  const uniqueNumber = document.getElementById('uniqueNumber').value;

  // Get reCAPTCHA token
  grecaptcha.ready(function () {
    grecaptcha.execute('6Lctfy4pAAAAAP6FXMS3Z_PX547erCLHCXcpWtip', { action: 'submit' }).then(function (token) {
      // Add the reCAPTCHA token to the form data
      const formData = new FormData(document.getElementById('contactForm'));
      formData.append('recaptchaToken', token);

      // Send the form data to the Google Apps Script
      const scriptURL2 = 'https://script.google.com/macros/s/AKfycbyw68vyQYAf6yvYoNw5dt0HNHUbeWz6-k02vzpIiPhQTqzreFl9zviX6EBaV85DFRs/exec';
      fetch(scriptURL2, {
        method: 'POST',
        body: formData
      })
        .then(response => {
          // Handle the response as needed
          console.log('Success!', response);
          // Update the button text to "Thanks for contacting us..."
          submitButton.innerHTML = `Thanks for contacting us: Check your Mails!`;
          submitButton.style.background = 'green';
          submitButton.style.color = 'white'; // Set text color to white for visibility
        })
        .catch(error => {
          console.error('Error!', error.message);
          // Update the button text to 'Error occurred'
          submitButton.innerHTML = 'Error occurred';
          submitButton.style.background = 'red';
        });
    });
  });
}

// Add event listener for form submission
document.getElementById('contactForm').addEventListener('submit', handleSubmit);

// Function to check if all input fields are filled, including reCAPTCHA
function checkForm(token) {
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const submitButton = document.getElementById('submitButton');

  if (fullName.trim() !== '' && email.trim() !== '' && message.trim() !== '' && token) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.disabled = true;
  }
}

// Add event listeners to input fields to check the form status
const formInputs = document.querySelectorAll('input, textarea');
formInputs.forEach(function (input) {
  input.addEventListener('input', checkForm);
});

// Include reCAPTCHA script
const recaptchaScript = document.createElement('script');
recaptchaScript.src = 'https://www.google.com/recaptcha/api.js?render=6Lctfy4pAAAAAP6FXMS3Z_PX547erCLHCXcpWtip';
recaptchaScript.async = true;
recaptchaScript.defer = true;
document.body.appendChild(recaptchaScript);