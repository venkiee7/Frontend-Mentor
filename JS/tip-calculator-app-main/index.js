dollarinput = document.querySelector(".inputdollar");
personinput = document.querySelector(".inputperson");
tipbuttons = document.querySelectorAll(".btn");
dollardetail = document.querySelector(".detaildollar");
persondetail = document.querySelector(".detailperson");
errorperson = document.querySelector(".errorperson");
errordollar = document.querySelector(".errordollar");
tipperperson = document.querySelector(".tipperperson");
amountperperson = document.querySelector(".amountperperson");
buttonreset = document.querySelector(".resetbtn");
buttoncustom = document.querySelector(".custom");
buttons = document.querySelector(".buttons");

let isValid = false;

let selectedTip;
let inputcustom;

tipbuttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    tipbuttons.forEach((button) => {
      button.classList.remove("selected");
      inputcustom && inputcustom.classList.remove("selected");
    });

    check = document.querySelector(".customdetail");
    if (check) {
      buttoncusto = document.createElement("button");
      buttoncusto.classList.add("custom");
      buttoncusto.innerText = "Custom";
      buttons.replaceChild(buttoncusto, inputcustom);
      buttoncustom = document.querySelector(".custom");
      inputcustom = null;
    }

    selectedTip = e.target.innerText;
    e.target.classList.add("selected");
    selectedTip = parseFloat(e.target.innerText);
    handleValidation();
  });
});

personinput.addEventListener("input", (e) => {
  handleValidation();
});

dollarinput.addEventListener("input", (e) => {
  handleValidation();
});

function handleValidation() {
  if (
    dollarinput.value.trim() !== "" &&
    personinput.value.trim() !== "" &&
    (validateTipButtons() || validateCustomButtons())
  ) {
    isValid = true;
    errorperson.style.display = "none";
    errordollar.style.display = "none";
    dollarinput.style.border = "";
    personinput.style.border = "";
  } else {
    isValid = false;
    if (dollarinput.value.trim() === "") {
      errordollar.style.display = "flex";
      dollarinput.style.border = "2px solid red";
    } else {
      dollarinput.style.border = "";
    }
    if (personinput.value.trim() === "") {
      errorperson.style.display = "flex";
      personinput.style.border = "2px solid red";
    } else {
      personinput.style.border = "";
    }
  }
  if (isValid) {
    handleCalculation();
  }
}

function validateTipButtons() {
  return [...tipbuttons].some((btn) => btn.classList.contains("selected"));
}

function validateCustomButtons() {
  if (inputcustom && inputcustom.classList.contains("selected")) {
    return true;
  } else {
    return false;
  }
}

const validateInput = (input) => {
  return input.trim() === "";
};

function handleCalculation() {
  let finaldollarinput = parseFloat(dollarinput.value);
  let finalpersoninput = parseFloat(personinput.value);

  let finaltipamount =
    ((finaldollarinput / 100) * selectedTip) / finalpersoninput;
  finaltipamount = finaltipamount.toFixed(2);

  let finaltotalamount =
    finaldollarinput / finalpersoninput + parseFloat(finaltipamount);
  finaltotalamount = finaltotalamount.toFixed(2);

  tipperperson.innerText = "$" + finaltipamount;
  amountperperson.innerText = "$" + finaltotalamount;
}

buttonreset.addEventListener("click", () => {
  tipperperson.innerText = "$0.00";
  amountperperson.innerText = "$0.00";
  dollarinput.value = 0;
  personinput.value = 0;
});

function replaceButtonWithInput() {
  tipbuttons.forEach((button) => {
    button.classList.remove("selected");
  });
  inputcustom = document.createElement("input");
  inputcustom.type = "number";

  buttons.replaceChild(inputcustom, buttoncustom);
  inputcustom.classList.add("customdetail");
  inputcustom.classList.add("selected");

  inputcustom.focus();

  inputcustom.addEventListener("input", (e) => {
    selectedTip = parseFloat(inputcustom.value);
    handleCalculation();
  });
}

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("custom")) {
    replaceButtonWithInput();
  }
});
