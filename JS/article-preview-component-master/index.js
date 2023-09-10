sharebtn = document.querySelector(".btn");
popupshow = document.querySelector(".popup");
popupsharebtn = document.querySelector(".popupbtn");
popupshowshare = document.querySelector(".popupshare");

sharebtn.addEventListener("click", () => {
  popupshow.classList.toggle("show");
});

popupsharebtn.addEventListener("click", () => {
  popupshow.classList.toggle("show");
});
