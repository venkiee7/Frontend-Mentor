const menubtn = document.querySelector(".menu");
const menuclosebtn = document.querySelector(".menuclose");
const navlinks = document.querySelector(".navlinks");
const sidebar = document.querySelector(".sidebar");

menubtn.addEventListener("click", () => {
  sidebar.style.display = "flex";
  menubtn.style.display = "none";
  menuclosebtn.style.display = "block";
  navlinks.style.display = "flex";
});

menuclosebtn.addEventListener("click", () => {
  sidebar.style.display = "none";
  menubtn.style.display = "block";
  menuclosebtn.style.display = "none";
  navlinks.style.display = "none";
});
