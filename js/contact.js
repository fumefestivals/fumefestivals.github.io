// Function to enable or disable the submit button based on form validation
function updateSubmitButton() {
  var fullName = document.getElementById('fullName').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  var submitButton = document.getElementById('submitButton');
  
  // Enable the submit button if all fields are filled out
  if (fullName !== '' && email !== '' && message !== '') {
      submitButton.removeAttribute('disabled');
  } else {
      submitButton.setAttribute('disabled', 'disabled');
  }
}

// Function to submit the form with reCAPTCHA token
function submitForm() {
  grecaptcha.ready(function() {
      grecaptcha.execute('6Lctfy4pAAAAAP6FXMS3Z_PX547erCLHCXcpWtip', { action: 'submit' }).then(function(token) {
          document.getElementById('recaptchaResponse').value = token;
          document.getElementById('contactForm').submit();
      });
  });
}

// Add event listeners to update the submit button on input change
document.getElementById('fullName').addEventListener('input', updateSubmitButton);
document.getElementById('email').addEventListener('input', updateSubmitButton);
document.getElementById('message').addEventListener('input', updateSubmitButton);
