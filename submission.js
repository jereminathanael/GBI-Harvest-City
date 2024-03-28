window.onscroll = function () {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
