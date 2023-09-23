const titleday = document.querySelector(".daytitle");
const titlemonth = document.querySelector(".monthtitle");
const titleyear = document.querySelector(".yeartitle");
const inputages = document.querySelectorAll(".ageinput");
const inputday = document.querySelector(".dayinput");
const inputmonth = document.querySelector(".monthinput");
const inputyear = document.querySelector(".yearinput");
const submitbtn = document.querySelector(".btn");
const emptyerrors = document.querySelectorAll(".error");
const dayerror = document.querySelector(".errorday");
const montherror = document.querySelector(".errormonth");
const yearerror = document.querySelector(".erroryear");
const formerror = document.querySelector(".errorform");
const titles = document.querySelectorAll(".title");
const answers = document.querySelectorAll(".answer");
const yearanswer = document.querySelector(".answeryear");
const monthanswer = document.querySelector(".answermonth");
const dayanswer = document.querySelector(".answerday");

function resetErrors() {
  emptyerrors.forEach((emptyerror) => {
    emptyerror.style.display = "none";
    inputages.forEach((inputage) => {
      inputage.style.border = "1px solid hsl(0, 0%, 86%)";
    });
    titles.forEach((title) => {
      title.style.color = "hsl(0, 1%, 44%)";
    });
  });
  dayerror.style.display = "none";
  inputday.style.border = "1px solid hsl(0, 0%, 86%)";
  titleday.style.color = "hsl(0, 1%, 44%)";
  montherror.style.display = "none";
  inputmonth.style.border = "1px solid hsl(0, 0%, 86%)";
  titlemonth.style.color = "hsl(0, 1%, 44%)";
  yearerror.style.display = "none";
  inputyear.style.border = "1px solid hsl(0, 0%, 86%)";
  titleyear.style.color = "hsl(0, 1%, 44%)";
  formerror.style.display = "none";
}

function dayErrors() {
  dayerror.style.display = "flex";
  inputday.style.border = "2px solid hsl(0, 100%, 67%)";
  titleday.style.color = "hsl(0, 100%, 67%)";
}

function monthErrors() {
  montherror.style.display = "flex";
  inputmonth.style.border = "2px solid hsl(0, 100%, 67%)";
  titlemonth.style.color = "hsl(0, 100%, 67%)";
}

function yearErrors() {
  yearerror.style.display = "flex";
  inputyear.style.border = "2px solid hsl(0, 100%, 67%)";
  titleyear.style.color = "hsl(0, 100%, 67%)";
}

function answererror() {
  answers.forEach((answer) => {
    answer.innerText = "--";
    answer.style.fontStyle = "italic";
    answer.style.fontSize = "100px";
  });
}

submitbtn.addEventListener("click", () => {
  resetErrors();
  const isEmpty = Array.from(inputages).some((input) => input.value === "");
  const daysInMonth = new Date(inputyear.value, inputmonth.value, 0).getDate();
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDate = new Date().getDate();
  if (isEmpty) {
    emptyerrors.forEach((emptyerror) => {
      emptyerror.style.display = "flex";
      inputages.forEach((inputage) => {
        inputage.style.border = "2px solid hsl(0, 100%, 67%)";
      });
      titles.forEach((title) => {
        title.style.color = "hsl(0, 100%, 67%)";
      });
    });
  } else {
    if (
      (inputday.value > 31 &&
        inputmonth.value > 12 &&
        inputyear.value > currentYear) ||
      (inputday.value < 1 && inputmonth.value < 1 && inputyear.value < 1)
    ) {
      dayErrors();
      monthErrors();
      yearErrors();
      answererror();
    } else if (
      (inputday.value > 31 && inputmonth.value > 12) ||
      (inputday.value < 1 && inputmonth.value < 1)
    ) {
      dayErrors();
      monthErrors();
      answererror();
    } else if (
      (inputmonth.value > 12 && inputyear.value > currentYear) ||
      (inputmonth.value < 1 && inputyear.value < 1)
    ) {
      monthErrors();
      yearErrors();
      answererror();
    } else if (
      (inputyear.value > currentYear && inputday.value > 31) ||
      (inputyear.value < 1 && inputday.value < 1)
    ) {
      yearErrors();
      dayErrors();
      answererror();
    } else if (inputday.value > 31 || inputday.value < 1) {
      dayErrors();
      answererror();
    } else if (inputmonth.value > 12 || inputmonth.value < 1) {
      monthErrors();
      answererror();
    } else if (
      inputyear.value > currentYear ||
      inputyear.value < 1 ||
      (inputyear.value == currentYear && inputmonth.value > currentMonth) ||
      (inputyear.value == currentYear &&
        inputmonth.value == currentMonth &&
        inputday.value > currentDate)
    ) {
      yearErrors();
      answererror();
    } else if (inputday.value > daysInMonth) {
      formerror.style.display = "flex";
      inputday.style.border = "2px solid hsl(0, 100%, 67%)";
      titleday.style.color = "hsl(0, 100%, 67%)";
      inputmonth.style.border = "2px solid hsl(0, 100%, 67%)";
      titlemonth.style.color = "hsl(0, 100%, 67%)";
      inputyear.style.border = "2px solid hsl(0, 100%, 67%)";
      titleyear.style.color = "hsl(0, 100%, 67%)";
      answererror();
    } else {
      let ay = currentYear - inputyear.value;
      let am = currentMonth - inputmonth.value;
      let ad = currentDate - inputday.value;

      function daysInCurrentMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
      }

      if (ad < 0) {
        ad = daysInCurrentMonth(currentYear, currentMonth - 1) + ad;
        am -= 1;
      }

      if (am < 0) {
        am = 12 + am;
        ay = ay - 1;
      }

      yearanswer.innerText = ay;
      monthanswer.innerText = am;
      dayanswer.innerText = ad;

      answers.forEach((answer) => {
        answer.style.fontStyle = "normal";
        answer.style.fontSize = "80px";
      });
    }
  }
});
