const readbtn = document.querySelector(".read");
const unreads = document.querySelectorAll(".recent");
const unreadsigns = document.querySelectorAll(".unreadsign");
const counter = document.querySelector(".counter");

readbtn.addEventListener("click", () => {
  unreads.forEach((unread) => {
    unread.style.backgroundColor = "white";
    unreadsigns.forEach((unreadsign) => {
      unreadsign.style.display = "none";
    });
  });
  counter.textContent = "0";
});
