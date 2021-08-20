const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("show");
  menu.classList.toggle("show");
});
