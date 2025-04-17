const menuIcon = document.querySelector(".header-menu__icon");
const middleLine = document.querySelector(".middle-line");
const topLine = document.querySelector(".top-line");
const bottomLine = document.querySelector(".bottom-line");
const nav = document.querySelector(".nav");
const cover = document.querySelector(".cover");

menuIcon.addEventListener("click", () => {
  middleLine.classList.toggle("active");  
  cover.classList.toggle("active");  
  nav.classList.toggle("nav-active");
});
