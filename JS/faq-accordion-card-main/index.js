console.log("Hello World");
// Here I select every question
const questions = document.querySelectorAll(".btn");
let prevElement;

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const children = question.children;
    const [text, img] = children;

    // Toggle the 'bold' class for text
    text.classList.toggle("bold");

    // Toggle the 'rotate' class for img
    img.classList.toggle("rotate");

    const nextElement = question.nextElementSibling;

    if (prevElement && prevElement !== nextElement) {
      prevElement.classList.add("hide");

      // Toggle the 'bold' class for the previous text if it's different from the current one
      const prevChildren = prevElement.previousElementSibling.children;
      const [prevText] = prevChildren;
      if (prevText !== text) {
        prevText.classList.toggle("bold");
      }
    }

    nextElement.classList.toggle("hide");
    prevElement = nextElement;
  });
});
