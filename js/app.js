htmlCounter = 0;
cssCounter = 0;
jsCounter = 0;
bootCounter = 0;
nodejsCounter = 0;
expressCounter = 0;
nextjsCounter = 0;
mongoCounter = 0;

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
let nodejsPercent = document.getElementById("node-number");
let expressPercent = document.getElementById("express-number");
let nextjsPercent = document.getElementById("nextjs-number");
let mongoPercent = document.getElementById("mongo-number");

// show menu
menuIcon.addEventListener("click", () => {
  middleLine.classList.toggle("active");
  nav.classList.toggle("nav-active");
  cover.classList.toggle("active");
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

//professional skills
setInterval(() => {
  if (nodejsCounter === 65) {
    clearInterval();
  } else {
    nodejsCounter += 1;
    nodejsPercent.innerText = `${nodejsCounter}%`;
  }
}, 1000 / 60);

//express
setInterval(() => {
  if (expressCounter === 85) {
    clearInterval();
  } else {
    expressCounter += 1;
    expressPercent.innerText = `${expressCounter}%`;
  }
}, 1000 / 60);

//nextjs
setInterval(() => {
  if (nextjsCounter === 72) {
    clearInterval();
  } else {
    nextjsCounter += 1;
    nextjsPercent.innerText = `${nextjsCounter}%`;
  }
}, 1000 / 60);

//mongodb
setInterval(() => {
  if (mongoCounter === 80) {
    clearInterval();
  } else {
    mongoCounter += 1;
    mongoPercent.innerText = `${mongoCounter}%`;
  }
}, 1000 / 60);
