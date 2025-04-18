htmlCounter = 0;
cssCounter = 0;
jsCounter = 0;
bootCounter = 0;

const menuIcon = document.querySelector(".header-menu__icon");
const middleLine = document.querySelector(".middle-line");
const topLine = document.querySelector(".top-line");
const bottomLine = document.querySelector(".bottom-line");
const nav = document.querySelector(".nav");
const cover = document.querySelector(".cover");
let htmlSkillPercent = document.getElementById("html-skill-percent");
let cssSkillPercent = document.getElementById("css-skill-percent");
let jsSkillPercent = document.getElementById("js-skill-percent");
let bootstrapSkillPercent = document.getElementById("bootstrap-skill-percent");

// show menu
menuIcon.addEventListener("click", () => {
  middleLine.classList.toggle("active");
  cover.classList.toggle("active");
  nav.classList.toggle("nav-active");
});

// skills
setInterval(() => {
  if (htmlCounter === 90) {
    clearInterval();
  } else {
    htmlCounter += 1;
    htmlSkillPercent.innerText = `${htmlCounter}%`;
  }
}, 20);

setInterval(() => {
  if (cssCounter === 85) {
    clearInterval();
  } else {
    cssCounter += 1;
    cssSkillPercent.innerText = `${cssCounter}%`;
  }
}, 20);

setInterval(() => {
  if (jsCounter === 77) {
    clearInterval();
  } else {
    jsCounter += 1;
    jsSkillPercent.innerText = `${jsCounter}%`;
  }
}, 20);

setInterval(() => {
  if (bootCounter === 86) {
    clearInterval();
  } else {
    bootCounter += 1;
    bootstrapSkillPercent.innerText = `${bootCounter}%`;
  }
}, 20);
