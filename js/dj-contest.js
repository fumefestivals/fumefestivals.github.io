function myFunction() {
    var submitButton = document.getElementById("submitButton");
    var form = document.forms["DJContestApplicationForm"];

    // Check if all required fields are filled out
    var firstName = form["FirstName"].value;
    var lastName = form["LastName"].value;
    var djName = form["DJName"].value;
    var email = form["Email"].value;
    var link = form["Link"].value;
    var instagram = form["Instagram"].value;

    if (
        firstName === "" ||
        lastName === "" ||
        djName === "" ||
        email === "" ||
        link === "" ||
        instagram === ""
    ) {
        submitButton.innerText = "Please fill out all the information";
        return false;
    }

    // Disable the submit button and change its text
    submitButton.disabled = true;
    submitButton.innerText = "Applying...";

    // Simulate a delay and redirect after 4 seconds
    setTimeout(function () {
        window.location.href = "success.html";
    }, 4000);

    // Prevent the form from submitting to the default action
    return false;
}

// Add an event listener for input changes to check when all fields are filled
var formFields = document.getElementsByClassName("required");
for (var i = 0; i < formFields.length; i++) {
    formFields[i].addEventListener("input", function () {
        // Hide the required-dot element (the asterisk) when the user starts typing
        this.nextElementSibling.style.display = "none";

        var allFieldsFilled = true;
        for (var i = 0; i < formFields.length; i++) {
            if (formFields[i].value === "") {
                allFieldsFilled = false;
                break;
            }
        }
        if (allFieldsFilled) {
            submitButton.disabled = false;
            submitButton.innerText = "Apply";
        } else {
            submitButton.disabled = true;
            submitButton.innerText = "Please fill out all the information";
        }
    });
}