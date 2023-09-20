submitbtn = document.querySelector(".btn");
errcon = document.querySelector(".error-container");
inputemail = document.querySelector(".emailinput");
signupcon = document.querySelector(".sign-up");
successcon = document.querySelector(".success");
spanemail = document.querySelector(".insertemail");

submitbtn.addEventListener("click", (e) => {
  if (inputemail.value.length == 0) {
    errcon.style.display = "flex";
    inputemail.style.border = "2px solid hsl(4, 100%, 67%)";
    inputemail.style.backgroundColor = "hsl(5, 78%, 78%)";
    inputemail.style.color = "";
  } else {
    let regExp =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (regExp.test(inputemail.value) == true) {
      errcon.style.display = "none";
      inputemail.style.border = "";
      inputemail.style.backgroundColor = "";
      inputemail.style.color = "";
      signupcon.style.display = "none";
      successcon.style.display = "flex";
      spanemail.innerText = inputemail.value + ".";
    } else {
      errcon.style.display = "flex";
      inputemail.style.border = "2px solid hsl(4, 100%, 67%)";
      inputemail.style.backgroundColor = "hsl(5, 78%, 78%)";
      console.log(inputemail.value);
      inputemail.style.color = "hsl(4, 100%, 67%)";
    }
  }
});
