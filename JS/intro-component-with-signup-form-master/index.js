const firstName = document.querySelector("#firstNameInput");
const lastName = document.querySelector("#lastnameInput");
const email = document.querySelector("#emailInput");
const password = document.querySelector("#passInput");

const firstNameError = document.querySelector("#firstnameError");
const lastNameError = document.querySelector("#lastnameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passError");

const claimbtn = document.querySelector(".claim");

claimbtn.addEventListener("click", (e) => {
  e.preventDefault();
  validateEmpty(
    firstName.value,
    firstName,
    firstNameError,
    "First Name cannot be empty"
  );
  validateEmpty(
    lastName.value,
    lastName,
    lastNameError,
    "Last Name cannot be empty"
  );
  validateEmail(
    email.value,
    email,
    emailError,
    "Looks like this is not an email"
  );
  validateEmpty(
    password.value,
    password,
    passwordError,
    "Password cannot be empty"
  );
});

function validateEmpty(valueInput, field, fieldError, message) {
  if (valueInput.length == 0) {
    showError(field, fieldError, message);
  } else {
    hideError(field, fieldError);
  }
}

function validateEmail(valueInput, field, fieldError, message) {
  let regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  if (regExp.test(valueInput) == true) {
    hideError(field, fieldError);
  } else {
    showError(field, fieldError, message);
  }
}

function showError(field, fieldError, message) {
  field.style.border = "2px solid hsl(0, 100%, 74%)";
  fieldError.innerHTML = `<img
  class="icon-error"
  src="./images/icon-error.svg"
  alt="error"
  />
<p class="error">${message} </p>`;
}

function hideError(field, fieldError) {
  field.style.border = "2px solid hsl(246, 25%, 77%)";
  fieldError.innerHTML = ``;
}
