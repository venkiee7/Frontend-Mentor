const sendBtn = document.querySelector(".btn");
const errorMsg = document.querySelector(".error-msg");
const errorIcon = document.querySelector(".err");
const inputEl = document.querySelector(".input-field");
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

sendBtn.addEventListener("click", function () {
  if (inputEl.value.length === 0 || !inputEl.value.match(emailValidation)) {
    errorMsg.style.display = "flex";
    errorIcon.style.display = "flex";
    errorMsg.style.color = "red";
    inputEl.style.border = "3px solid hsl(0, 93%, 68%)";
    errorMsg.textContent = "Please provide a valid email address";
  } else {
    errorMsg.style.display = "flex";
    errorMsg.style.color = "green";
    errorIcon.style.display = "none";
    errorMsg.textContent = "Thank you for subscribing to our newsletter!";
  }
});
