function _(el){
    return document.getElementById(el);
  }
  function uploadFile(){
    var file = _("file1").files[0];
    // alert(file.name+" | "+file.size+" | "+file.type);
    var formdata = new FormData();
    formdata.append("file1", file);
    var ajax = new XMLHttpRequest();
    ajax.upload.addEventListener("progress", progressHandler, false);
    ajax.addEventListener("load", completeHandler, false);
    ajax.addEventListener("error", errorHandler, false);
    ajax.addEventListener("abort", abortHandler, false);
    ajax.open("POST", "../../js/file_upload_parser.php");
    ajax.send(formdata);
  }
  function progressHandler(event){
    _("loaded_n_total").innerHTML = "Uploaded "+event.loaded+" bytes of "+event.total;
    var percent = (event.loaded / event.total) * 100;
    _("progressBar").value = Math.round(percent);
    _("status").innerHTML = Math.round(percent)+"% uploaded... please wait";
  }
  function completeHandler(event){
    _("status").innerHTML = event.target.responseText;
    _("progressBar").value = 100;
  }
  function errorHandler(event){
    _("status").innerHTML = "Upload Failed";
  }
  function abortHandler(event){
    _("status").innerHTML = "Upload Aborted";
  }
  function myFunction() {
    setInterval(function () { window.location.href = "../success.html";}, 3000);
    myButton.disabled = true; return true;
}
document.addEventListener("DOMContentLoaded", function() {
  const myForm = document.getElementById("PromoterApplicationForm");
  const field1 = document.getElementById("FirstName");
  const field2 = document.getElementById("LastName");
  const field3 = document.getElementById("PhoneNumber");
  const field4 = document.getElementById("Email");
  const field5 = document.getElementById("Followers");
  const field6 = document.getElementById("Location");
  const field7 = document.getElementById("Instagram");
  const field8 = document.getElementById("promotertype");
  const field9 = document.getElementById("file1");
  const submitButton = document.getElementById("submitButton");

  // Function to check if all fields are filled
  function areFieldsFilled() {
      return field1.value.trim() !== "" && 
      field2.value.trim() !== "" && 
      field3.value.trim() !== "" && 
      field4.value.trim() !== "" && 
      field5.value.trim() !== "" && 
      field6.value.trim() !== "" && 
      field7.value.trim() !== "" && 
      field8.value.trim() !== "" && 
      field9.value.trim() !== "";
  }

  // Function to toggle the submit button's disabled state and text
  function toggleSubmitButton() {
      const isFilled = areFieldsFilled();
      submitButton.disabled = !isFilled;
      submitButton.textContent = isFilled ? "Apply" : "Please fill out the required information";
  }

  // Add event listeners to form fields to check and toggle the button state
  field1.addEventListener("input", toggleSubmitButton);
  field2.addEventListener("input", toggleSubmitButton);
  field3.addEventListener("input", toggleSubmitButton);
  field4.addEventListener("input", toggleSubmitButton);
  field5.addEventListener("input", toggleSubmitButton);
  field6.addEventListener("input", toggleSubmitButton);
  field7.addEventListener("input", toggleSubmitButton);
  field8.addEventListener("input", toggleSubmitButton);
  field9.addEventListener("input", toggleSubmitButton);

  // Initially, check and set the submit button state
  toggleSubmitButton();

  // Handle form submission
  PromoterApplicationForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting (you can remove this if needed)

      // Change the submit button text to "Loading..."
      submitButton.textContent = "Please Wait";
      submitButton.style.background = "rgb(88, 122, 97)";
      submitButton.disabled = true;

      // Simulate a delay (you can replace this with your actual form submission logic)
      setTimeout(function() {
        // Your form submission logic here
        // This code will only execute when all fields are filled out.

        // Clear the form or perform any other post-submission actions here

        // Re-enable the input fields after submission
        field1.value = "";
        field2.value = "";
        field3.value = "";
        field4.value = "";
        field5.value = "";
        field6.value = "";
        field7.value = "";
        field8.value = "";
        field9.value = "";
        
        toggleSubmitButton();
      }, 4000); // Simulated 2-second delay; replace with your actual submission logic
  });
});
// Get all required input fields and their associated span elements
const requiredInputs = document.querySelectorAll('.required');
const requiredDotSpans = document.querySelectorAll('.required-dot');

// Function to check if the input field is filled and remove the red dot
function checkAndRemoveRedDot() {
  for (let i = 0; i < requiredInputs.length; i++) {
    const input = requiredInputs[i];
    const dotSpan = requiredDotSpans[i];
    
    if (input.value.trim() !== '') {
      dotSpan.style.display = 'none';
    } else {
      dotSpan.style.display = 'inline'; // Show the red dot if the input is empty
    }
  }
}

// Add event listeners to the input fields to check and remove the red dot
for (let i = 0; i < requiredInputs.length; i++) {
  const input = requiredInputs[i];
  input.addEventListener('input', checkAndRemoveRedDot);
}

// Initially, check and set the red dot state
checkAndRemoveRedDot();
document.addEventListener("DOMContentLoaded", function() {
  const emailInput = document.getElementById("Email");
  const submitButton = document.getElementById("submitButton");

  // Function to check if the email field is filled
  function isEmailFilled() {
    return emailInput.value.trim() !== "";
  }

  // Function to toggle the submit button's disabled state and text
  function toggleSubmitButton() {
    if (isEmailFilled()) {
      newsletterButton.disabled = false;
      newsletterButton.textContent = "Subscribe";
    } else {
      newsletterButton.disabled = true;
      newsletterButton.textContent = "Please enter an email";
    }
  }

  // Add event listener to the email input field to check and toggle the button state
  emailInput.addEventListener("input", toggleSubmitButton);

  // Handle form submission
  document.forms["NewsletterForm"].addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting (you can remove this if needed)

    // Change the submit button text to "Subscribed"
    newsletterButton.textContent = "Subscribed ✓";
    newsletterButton.disabled = true;
    newsletterButton.style.background = "rgb(88, 122, 97)";

    // You can add additional logic here for handling the subscription, e.g., sending a request to a server.

    // Optional: Reset the form or perform other post-submission actions
    // document.forms["NewsletterForm"].reset();
  });
});