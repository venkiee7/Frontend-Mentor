const cardholdername = document.querySelector(".cardholder");
const expirydate = document.querySelector(".expdate");
const cardnumber = document.querySelector(".cardnumber");
const cvc = document.querySelector(".cvc");
const inputcardholdername = document.querySelector("#cardholdername");
const inputcardnumber = document.querySelector("#cardnumber");
const inputexpirydate = document.querySelectorAll(".inputexp");
const inputmonth = document.querySelector(".inputmonth");
const inputyear = document.querySelector(".inputyear");
const inputcvc = document.querySelector("#cvc");
const submitbtn = document.querySelector(".submitbtn");
const acceptpage = document.querySelector(".accept");
const formpage = document.querySelector(".form");
const cardholders = document.querySelector(".cardholders");
const cardnumbers = document.querySelector(".cardnumbers");
const cardexpiries = document.querySelector(".cardexpiries");
const cardcvcs = document.querySelector(".cardcvcs");

function clearAllErrorMessages() {
  const errorMessages = document.querySelectorAll(".errorchild");
  errorMessages.forEach((errorMessage) => {
    errorMessage.remove();
  });

  inputcardholdername.style.border = "1px solid #ccc";
  inputcardnumber.style.border = "1px solid #ccc";
  inputmonth.style.border = "1px solid #ccc";
  inputyear.style.border = "1px solid #ccc";
  inputcvc.style.border = "1px solid #ccc";
}

function error(element, input, message) {
  let errortext = document.createElement("p");
  errortext.innerText = message;
  errortext.classList.add("errorchild");
  element.appendChild(errortext);
  errortext.style.color = "hsl(0, 100%, 66%)";
  errortext.style.fontWeight = "bold";
  input.style.border = "1px solid hsl(0, 100%, 66%)";
}

submitbtn.addEventListener("click", () => {
  clearAllErrorMessages();
  if (inputcardholdername.value.length == 0) {
    error(cardholders, inputcardholdername, "Can't be blank");
  } else if (inputcardnumber.value.length == 0) {
    error(cardnumbers, inputcardnumber, "Wrong format, numbers only");
  } else if (inputmonth.value.length == 0) {
    error(cardexpiries, inputmonth, "Can't be blank");
  } else if (inputyear.value.length == 0) {
    error(cardexpiries, inputyear, "Can't be blank");
  } else if (inputcvc.value.length == 0) {
    error(cardcvcs, inputcvc, "Can't be blank");
  } else {
    let formattedValue = inputcardnumber.value.replace(/(\d{4})/g, "$1 ");
    cardnumber.innerText = formattedValue;
    cardholdername.innerText = inputcardholdername.value;
    expirydate.innerText = inputmonth.value + "/" + inputyear.value;
    cvc.innerText = inputcvc.value;
    acceptpage.style.display = "flex";
    formpage.style.display = "none";
    submitbtn.style.display = "none";
  }
});
