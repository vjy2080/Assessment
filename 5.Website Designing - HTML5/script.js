// ========== Validate email format ==========

function validateEmail() {
    const email = document.getElementById('email').value;
    const msgEmail = document.getElementById('msgEmail');
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const isValidEmail = filter.test(email);

    if (!isValidEmail) {
        msgEmail.innerHTML = "Enter a valid email address";
    } else {
        msgEmail.innerHTML = "";
    }
}
// ========== Validate mobile number ==========

function validateMobile() {
    const mobile = document.getElementById('mobile').value;
    const msgMobile = document.getElementById("msgMobile");

    if (isNaN(mobile)) {
        msgMobile.innerHTML = "Please enter Numeric value";
        return false;
    }

    if (mobile.length !== 10) {
        msgMobile.innerHTML = "Enter a valid mobile number";
        return false;
    }

    msgMobile.innerHTML = "";
    return true;
}

// ========== Form submission function ==========

function submit(event) {
    event.preventDefault();
    console.log("called-submit");

    const msgSubmit = document.getElementById("msgSubmit"); // Move this line up

    const isValidEmail = validateEmail();
    const isValidMobile = validateMobile();

    if (!isValidEmail && !isValidMobile) {
        // Additional code for form submission logic can be added here.
        msgSubmit.innerHTML = "Please fix the validation errors before submitting.";
        return false;
    }

    const inputs = document.querySelectorAll('form input[type="text"], form input[type="email"], form input[type="tel"], form input[type="password"],form input[type="number"],form input[type="checkbox"], form textarea');

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            msgSubmit.innerHTML = "Please fill in all the required fields.";
            return false;
        }
    }

    msgSubmit.innerHTML = "Form submitted successfully!";
}

document.getElementById("register").addEventListener("click", submit);
