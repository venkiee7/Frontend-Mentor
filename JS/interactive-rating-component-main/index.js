const scores = document.querySelectorAll(".score");
const result = document.querySelector(".result");
const submit = document.querySelector(".ratingsubmit");
const containerRating = document.querySelector(".container");
const containerThank = document.querySelector(".latercontainer");

// score.addEventListener("click", (e) => {
//   let numberSelected = e.target.innerText;
//   console.log(e.currentTarget);
//   console.log(numberSelected);
//   result.innerText = numberSelected;

//   if (numberSelected > 0 && numberSelected <= 5) {
//     submit.addEventListener("click", () => {
//       containerRating.style.display = "none";
//       containerThank.style.display = "flex";
//     });
//   }
// });

let clickedButton = "";

scores.forEach(function (button) {
  button.addEventListener("click", (event) => {
    clickedButton = event.target.textContent;
    console.log("Button clicked:", clickedButton);
    clickedButton.classList.add("selected");
    result.textContent = clickedButton;
  });
});

submit.addEventListener("click", () => {
  if (clickedButton) {
    containerRating.style.display = "none";
    containerThank.style.display = "flex";
  }
});
