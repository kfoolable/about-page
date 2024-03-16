"use strict";

const menuBtn = document.querySelector(".menu-btn");
const navColumn = document.querySelector(".col-6");

menuBtn.addEventListener("click", function () {
  console.log("Clicked");
  navColumn.classList.toggle("nav-open");
});
