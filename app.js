const hamburger = document.querySelector(".ham-menu");
const menu = document.querySelector(".mobile-menu");

function closeMenu() {
    menu.classList.remove("active");
    console.log('close')
}

function mobileMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        console.log('close')

      } else {
        menu.classList.add("active");

    }
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));
hamburger.addEventListener("click", mobileMenu);

