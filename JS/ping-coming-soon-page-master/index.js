submitbtn = document.querySelector(".btn");
input = document.querySelector(".inputfield");
errorbox = document.querySelector(".errorContainer");

submitbtn.addEventListener("click", () => {
  if (input.value.length == 0) {
    errorbox.innerHTML = `<p class="error">Please provide a valid email address</p>`;
    input.style.border = "2px solid hsl(354, 100%, 66%)";
  } else {
    let regExp =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (regExp.test(input.value) == true) {
      errorbox.innerHTML = "";
      input.style.border = "";
    } else {
      errorbox.innerHTML = `<p class="error">Please provide a valid email address</p>`;
      input.style.border = "2px solid hsl(354, 100%, 66%)";
    }
  }
});
