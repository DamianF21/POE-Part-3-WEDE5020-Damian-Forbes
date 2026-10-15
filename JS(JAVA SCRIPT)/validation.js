/**
 * validation.js - Custom Client-Side Form Validation + EmailJS Integration
 *
 * Used on ContactUs.html and Enquiry.html
 */

// ========================================================
// EMAILJS CONFIGURATION
// ========================================================
const EMAILJS_PUBLIC_KEY = "QVTYBfSl85aWqtuZV";   // Found in EmailJS -> Account -> Public Key
const EMAILJS_SERVICE_ID = "service_vilgzc2";   // Found in EmailJS -> Email Services (e.g., "service_xxxxxxx")
const EMAILJS_TEMPLATE_ID = "template_9nozjyh"; // From your Contact Us template URL

// Initialize EmailJS when the page loads
document.addEventListener("DOMContentLoaded", () => {
  if (typeof emailjs !== "undefined") {
    emailjs.init({
      publicKey: EMAILJS_PUBLIC_KEY,
    });
  }
});


/* ========================================================
   1. CONTACT US FORM (ContactUs.html)
   ======================================================== */
document.addEventListener("DOMContentLoaded", () => {

  // Find the contact form.
  const form = document.getElementById("contactForm");

  // Stop if this is not the contact page.
  if (!form) return;

  /* ---------- EMAIL PATTERN ---------- */
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /* ---------- FORM SUBMISSION EVENT ---------- */
  form.addEventListener("submit", (event) => {

    // Stop the browser from refreshing/submitting the page.
    event.preventDefault();

    // Assume the form is valid until an error is found.
    let isValid = true;

    /* ---------- FIND FORM ELEMENTS ---------- */
    const fullName = document.getElementById("fullName");
    const contactNumber = document.getElementById("contactNumber");
    const email = document.getElementById("email");
    const studyInterest = document.getElementById("studyInterest");
    const location = document.getElementById("location");
    const service = document.getElementById("serviceSelect");
    const message = document.getElementById("message");
    const formStatus = document.getElementById("formStatus");

    /* ---------- RESET OLD ERRORS ---------- */
    if (formStatus) {
      formStatus.classList.remove("success", "show");
    }

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

    /* ---------- SEND VIA EMAILJS ---------- */
    if (isValid) {
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.textContent : "Submit";

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";
      }

      // Build extra details from optional fields (Study Interest & Location)
      const extraDetails = [];
      if (studyInterest && studyInterest.value.trim() !== "") {
        extraDetails.push(`Study Interest: ${studyInterest.value.trim()}`);
      }
      if (location && location.value !== "") {
        extraDetails.push(`Location: ${location.value}`);
      }

      const fullMessage = extraDetails.length > 0
        ? `${message.value.trim()}\n\n--- Additional Info ---\n${extraDetails.join("\n")}`
        : message.value.trim();

      // Matches every placeholder in your EmailJS template
      const templateParams = {
        title: service.value,
        name: fullName.value.trim(),
        fullname: fullName.value.trim(),
        Email: email.value.trim(),
        email: email.value.trim(),
        mobileNumber: contactNumber && contactNumber.value.trim() !== "" ? contactNumber.value.trim() : "Not provided",
        subject: service.value,
        message: fullMessage
      };

      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(() => {
          if (formStatus) {
            formStatus.textContent = "Thank you! Your message has been sent successfully.";
            formStatus.classList.add("success", "show");
          }
          // Clear all entered values after successful submission.
          form.reset();
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please check your EmailJS Service ID and Public Key.");
        })
        .finally(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
          }
        });
    }
  });

  /* ========================================================
     FUNCTION: showError
     Adds the error class to an input and displays its message.
     ======================================================== */
  function showError(inputElement, errorSpanId) {
    inputElement.classList.add("error", "input-error");

    const errorSpan = document.getElementById(errorSpanId);
    if (errorSpan) {
      errorSpan.classList.add("visible", "show");
    }
  }

  /* ========================================================
     FUNCTION: resetErrors
     Removes all old error styles/messages before validation.
     ======================================================== */
  function resetErrors(elements) {
    elements.forEach((element) => {
      if (element) element.classList.remove("error", "input-error");
    });

    const errorSpans = document.querySelectorAll(".error-message");
    errorSpans.forEach((span) => {
      span.classList.remove("visible", "show");
    });
  }

});


/* ========================================================
   2. ENQUIRY FORM (Enquiry.html)
   ======================================================== */
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".minimal-form");
  if (!form) return;

  const nameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email");
  const detailsInput = document.getElementById("details");
  const fieldset = document.querySelector(".minimal-fieldset");
  const statusBox = document.getElementById("formStatus") || document.getElementById("enquiryStatus");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const typeError = document.getElementById("typeError");
  const detailsError = document.getElementById("detailsError");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateName() {
    if (!nameInput) return true;
    const valid = nameInput.value.trim().length >= 3;
    if (!valid) {
      nameInput.classList.add("input-error", "error");
      if (nameError) nameError.classList.add("show", "visible");
    } else {
      nameInput.classList.remove("input-error", "error");
      if (nameError) nameError.classList.remove("show", "visible");
    }
    return valid;
  }

  function validateEmail() {
    if (!emailInput) return true;
    const valid = emailPattern.test(emailInput.value.trim());
    if (!valid) {
      emailInput.classList.add("input-error", "error");
      if (emailError) emailError.classList.add("show", "visible");
    } else {
      emailInput.classList.remove("input-error", "error");
      if (emailError) emailError.classList.remove("show", "visible");
    }
    return valid;
  }

  function validateRadio() {
    const checked = form.querySelector('input[name="enquiryType"]:checked');
    if (!checked) {
      if (fieldset) fieldset.classList.add("input-error", "error");
      if (typeError) typeError.classList.add("show", "visible");
      return false;
    } else {
      if (fieldset) fieldset.classList.remove("input-error", "error");
      if (typeError) typeError.classList.remove("show", "visible");
      return true;
    }
  }

  function validateDetails() {
    if (!detailsInput) return true;
    const valid = detailsInput.value.trim().length >= 10;
    if (!valid) {
      detailsInput.classList.add("input-error", "error");
      if (detailsError) detailsError.classList.add("show", "visible");
    } else {
      detailsInput.classList.remove("input-error", "error");
      if (detailsError) detailsError.classList.remove("show", "visible");
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

    if (statusBox) {
      statusBox.classList.remove("show", "success");
    }

    const isNameOk = validateName();
    const isEmailOk = validateEmail();
    const isRadioOk = validateRadio();
    const isDetailsOk = validateDetails();

    if (isNameOk && isEmailOk && isRadioOk && isDetailsOk) {
      const checkedRadio = form.querySelector('input[name="enquiryType"]:checked');
      const enquirySubject = checkedRadio ? `Enquiry: ${checkedRadio.value}` : "Website Enquiry";

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.textContent : "Submit";

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";
      }

      // Matches every placeholder in your EmailJS template
      const templateParams = {
        title: enquirySubject,
        name: nameInput.value.trim(),
        fullname: nameInput.value.trim(),
        Email: emailInput.value.trim(),
        email: emailInput.value.trim(),
        mobileNumber: "N/A (Enquiry Form)",
        subject: enquirySubject,
        message: detailsInput.value.trim()
      };

      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(() => {
          if (statusBox) {
            statusBox.textContent = "Thank you! Your enquiry has been submitted.";
            statusBox.classList.add("show", "success");
          }
          form.reset();
          if (nameInput) nameInput.classList.remove("input-error", "error");
          if (emailInput) emailInput.classList.remove("input-error", "error");
          if (detailsInput) detailsInput.classList.remove("input-error", "error");
          if (fieldset) fieldset.classList.remove("input-error", "error");
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send enquiry. Please check your EmailJS Service ID and Public Key.");
        })
        .finally(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
          }
        });
    }
  });
});