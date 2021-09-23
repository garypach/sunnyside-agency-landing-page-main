"use strict";

var hamburger = document.querySelector(".ham-menu");
var menu = document.querySelector(".mobile-menu");

function closeMenu() {
  menu.classList.remove("active");
  console.log('close');
}

function mobileMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    console.log('close');
  } else {
    menu.classList.add("active");
  }
}

var navLink = document.querySelectorAll(".nav-link");
navLink.forEach(function (n) {
  return n.addEventListener("click", closeMenu);
});
hamburger.addEventListener("click", mobileMenu);