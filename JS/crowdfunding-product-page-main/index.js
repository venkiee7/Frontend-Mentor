backbtns = document.querySelector(".backbtn");
modal = document.querySelector(".modal");
content = document.querySelector(".content");
headerimage = document.querySelector(".headerimage");
bookmark = document.querySelector(".bookmark");
bookmarkbtn = document.querySelector(".bookmarkbtn");
radiobtns = document.querySelectorAll(".radio");
modalselects = document.querySelectorAll(".modalselect");
modalcards = document.querySelectorAll(".modalcard");
modalcontinuebtns = document.querySelectorAll(".modalcontinuebtn");
successmodal = document.querySelector(".successmodal");
successbtn = document.querySelector(".successbtn");
closebtn = document.querySelector(".imgclose");

function resetStyles() {
  modalselects.forEach((modalselect) => {
    modalselect.classList.remove("selected");
  });
  modalcards.forEach((modalcard) => {
    modalcard.classList.remove("bordered");
  });
}

backbtns.addEventListener("click", () => {
  // console.log("hi");
  modal.style.display = "flex";
  content.style.opacity = "0.3";
  headerimage.style.opacity = "0.8";
  // Array.from(radiobtns).map((radiobtn) => {
  //   radiobtn.addEventListener("click", () => {
  //     // console.log("hi");
  //     Array.from(modalselects).map((modalselect) => {
  //       modalselect.style.display = "flex";
  //     });
  //   });
  // });
  Array.from(radiobtns).map((radiobtn, index) => {
    radiobtn.addEventListener("click", () => {
      resetStyles();
      const modalselect = modalselects[index - 1];
      const modalcard = modalcards[index];
      if (modalselect) {
        modalselect.classList.add("selected");
      }
      if (modalcard) {
        modalcard.classList.add("bordered");
      }
    });
  });
});

bookmark.addEventListener("click", () => {
  bookmarkbtn.style.color = "hsl(176, 72%, 28%)";
  bookmarkbtn.innerText = "Bookmarked";
});

modalcontinuebtns.forEach((modalcontinuebtn) => {
  modalcontinuebtn.addEventListener("click", () => {
    modal.style.display = "none";
    successmodal.style.display = "flex";
  });
});

successbtn.addEventListener("click", () => {
  // modalselects.forEach((modalselect) => {
  //   modalselect.style.display = "none";
  // });
  resetStyles();
  radiobtns.forEach((radiobtn) => {
    console.log(radiobtn);
    radiobtn.checked = false;
  });
  successmodal.style.display = "none";
  content.style.opacity = "1";
});

closebtn.addEventListener("click", () => {
  modal.style.display = "none";
  content.style.opacity = "1";
  resetStyles();
  radiobtns.forEach((radiobtn) => {
    console.log(radiobtn);
    radiobtn.checked = false;
  });
  // modalselects.forEach((modalselect) => {
  //   // modalselect.style.display = "none";
  //   modalselect.classList.remove("selected");
  // });
  // modalselects.forEach((modalselect) => {
  //   modalselect.classList.remove("selected");
  // });
  // modalcards.forEach((modalcard) => {
  //   modalcard.classList.remove("bordered");
  // });
});
