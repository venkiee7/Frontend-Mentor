const dice = document.querySelector(".dice");
const id = document.querySelector(".id");
const advice = document.querySelector(".advice");
const url = "https://api.adviceslip.com/advice";

document.addEventListener("DOMContentLoaded", () => {
  //   console.log("hi");
  fetchAdvice();
});

const fetchAdvice = async () => {
  //   console.log("hi");
  const response = await fetch(url);
  const data = await response.json();
  id.innerText = data.slip.id;
  advice.innerText = data.slip.advice;
};

dice.addEventListener("click", () => {
  fetchAdvice();
});
