// Function to generate a unique number
function generateUniqueNumber() {
  return 'F-' + (Math.floor(100000000 + Math.random() * 900000000));
}

// Set the value of the "uniqueNumber" input field when the page loads
document.addEventListener('DOMContentLoaded', function() {
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

  // Send the form data to the Google Apps Script
  const formData = new FormData(document.getElementById('contactForm'));
  fetch('https://script.google.com/macros/s/AKfycbyw68vyQYAf6yvYoNw5dt0HNHUbeWz6-k02vzpIiPhQTqzreFl9zviX6EBaV85DFRs/exec', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      // Handle the response as needed
      console.log('Success!', response);
      submitButton.innerHTML = `Thanks for contacting us: Your Case ID: ${uniqueNumber}`;
      submitButton.style.background = 'green';
      submitButton.style.color = 'white'; // Set text color to white for visibility
    })
    .catch(error => {
      console.error('Error!', error.message);
      submitButton.innerHTML = 'Error occurred';
      submitButton.style.background = 'red';
    });
}

// Add event listener for form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', handleSubmit);

// Function to check if all input fields are filled
function checkForm() {
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const submitButton = document.getElementById('submitButton');

  if (fullName.trim() !== '' && email.trim() !== '' && message.trim() !== '') {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.disabled = true;
  }
}

// Add event listeners to input fields to check the form status
const formInputs = document.querySelectorAll('input, textarea');
formInputs.forEach(function(input) {
  input.addEventListener('input', checkForm);
});
