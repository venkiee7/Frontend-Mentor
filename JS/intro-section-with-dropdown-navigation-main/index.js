extra = document.querySelectorAll(".extra");
extrafeatures = document.querySelector(".extrafeatures");
extracompanys = document.querySelector(".extracompanys");
features = document.querySelector(".features");
company = document.querySelector(".company");

extrafeatures.addEventListener("click", () => {
  features.style.display = "flex";
});

extracompanys.addEventListener("click", () => {
  company.style.display = "flex";
});
