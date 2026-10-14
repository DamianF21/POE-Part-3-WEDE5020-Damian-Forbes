/**
 * validation.js - Custom Client-Side Form Validation
 *
 * This file is used only on contact.html.
 *
 * It demonstrates:
 * 1. Variables
 * 2. Functions
 * 3. Conditions
 * 4. Regular expressions
 * 5. Events
 * 6. classList
 * 7. Form validation
 */

document.addEventListener("DOMContentLoaded", () => {

  // Find the contact form.
  const form = document.getElementById("contactForm");

  // Stop if this is not the contact page.
  if (!form) return;


  /* ---------- EMAIL PATTERN ---------- */

  // This pattern checks for a basic structure such as:
  // student@example.com
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  /* ---------- FORM SUBMISSION EVENT ---------- */

  form.addEventListener("submit", (event) => {

    // Stop the browser from refreshing/submitting the page.
    event.preventDefault();

    // Assume the form is valid until an error is found.
    let isValid = true;


    /* ---------- FIND FORM ELEMENTS ---------- */

    const fullName =
      document.getElementById("fullName");

    const email =
      document.getElementById("email");

    const service =
      document.getElementById("serviceSelect");

    const message =
      document.getElementById("message");

    const formStatus =
      document.getElementById("formStatus");


    /* ---------- RESET OLD ERRORS ---------- */

    formStatus.classList.remove("success");

    resetErrors([
      fullName,
      email,
      service,
      message
    ]);


    /* ---------- VALIDATE FULL NAME ---------- */

    if (fullName.value.trim().length < 3) {
      showError(fullName, "nameError");
      isValid = false;
    }


    /* ---------- VALIDATE EMAIL ---------- */

    if (!emailRegex.test(email.value.trim())) {
      showError(email, "emailError");
      isValid = false;
    }


    /* ---------- VALIDATE SERVICE ---------- */

    if (service.value === "") {
      showError(service, "serviceError");
      isValid = false;
    }


    /* ---------- VALIDATE MESSAGE ---------- */

    if (message.value.trim().length < 10) {
      showError(message, "messageError");
      isValid = false;
    }


    /* ---------- SUCCESS ---------- */

    if (isValid) {
      formStatus.classList.add("success");

      // Clear all entered values after successful validation.
      form.reset();
    }
  });


  /* ========================================================
     FUNCTION: showError
     Adds the error class to an input and displays its message.
     ======================================================== */

  function showError(inputElement, errorSpanId) {

    inputElement.classList.add("error");

    const errorSpan =
      document.getElementById(errorSpanId);

    if (errorSpan) {
      errorSpan.classList.add("visible");
    }
  }


  /* ========================================================
     FUNCTION: resetErrors
     Removes all old error styles/messages before validation.
     ======================================================== */

  function resetErrors(elements) {

    elements.forEach((element) => {
      element.classList.remove("error");
    });

    const errorSpans =
      document.querySelectorAll(".error-message");

    errorSpans.forEach((span) => {
      span.classList.remove("visible");
    });
  }

});



document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".minimal-form");
    if (!form) return;

    const nameInput = document.getElementById("fullName");
    const emailInput = document.getElementById("email");
    const detailsInput = document.getElementById("details");
    const fieldset = document.querySelector(".minimal-fieldset");
    const statusBox = document.getElementById("enquiryStatus");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const typeError = document.getElementById("typeError");
    const detailsError = document.getElementById("detailsError");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateName() {
        if (!nameInput) return true;
        const valid = nameInput.value.trim().length >= 3;
        if (!valid) {
            nameInput.classList.add("input-error");
            if (nameError) nameError.classList.add("show");
        } else {
            nameInput.classList.remove("input-error");
            if (nameError) nameError.classList.remove("show");
        }
        return valid;
    }

    function validateEmail() {
        if (!emailInput) return true;
        const valid = emailPattern.test(emailInput.value.trim());
        if (!valid) {
            emailInput.classList.add("input-error");
            if (emailError) emailError.classList.add("show");
        } else {
            emailInput.classList.remove("input-error");
            if (emailError) emailError.classList.remove("show");
        }
        return valid;
    }

    function validateRadio() {
        const checked = form.querySelector('input[name="enquiryType"]:checked');
        if (!checked) {
            if (fieldset) fieldset.classList.add("input-error");
            if (typeError) typeError.classList.add("show");
            return false;
        } else {
            if (fieldset) fieldset.classList.remove("input-error");
            if (typeError) typeError.classList.remove("show");
            return true;
        }
    }

    function validateDetails() {
        if (!detailsInput) return true;
        const valid = detailsInput.value.trim().length >= 10;
        if (!valid) {
            detailsInput.classList.add("input-error");
            if (detailsError) detailsError.classList.add("show");
        } else {
            detailsInput.classList.remove("input-error");
            if (detailsError) detailsError.classList.remove("show");
        }
        return valid;
    }

    // Clear red style immediately when user types
    if (nameInput) nameInput.addEventListener("input", validateName);
    if (emailInput) emailInput.addEventListener("input", validateEmail);
    if (detailsInput) detailsInput.addEventListener("input", validateDetails);
    form.querySelectorAll('input[name="enquiryType"]').forEach((radio) => {
        radio.addEventListener("change", validateRadio);
    });

    // Run check on Submit click
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Stop page reload

        const isNameOk = validateName();
        const isEmailOk = validateEmail();
        const isRadioOk = validateRadio();
        const isDetailsOk = validateDetails();

        if (isNameOk && isEmailOk && isRadioOk && isDetailsOk) {
            if (statusBox) {
                statusBox.textContent = "Thank you! Your enquiry has been submitted.";
                statusBox.classList.add("show");
            }
            form.reset();
            if (nameInput) nameInput.classList.remove("input-error");
            if (emailInput) emailInput.classList.remove("input-error");
            if (detailsInput) detailsInput.classList.remove("input-error");
            if (fieldset) fieldset.classList.remove("input-error");
        } else {
            if (statusBox) {
                statusBox.classList.remove("show");
            }
        }
    });
});