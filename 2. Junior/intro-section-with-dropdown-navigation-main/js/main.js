// get DOM elements
const menuBtnOpen = document.querySelector(".burger-btn-open");
const menuBtnClose = document.querySelector(".burger-btn-close");
const menu = document.querySelector(".nav__inner");

// create media querys for show or hide menu
const mediaQueryShowMenu = window.matchMedia("(min-width: 901px)");
const mediaQueryHideMenu = window.matchMedia("(max-width: 900px)");


const showMenu = function () {
  menu.style.opacity = 1;
  menu.style.zIndex = 1;
  menuBtnOpen.style.display = "none";
  menuBtnClose.style.display = "block";
}

const closeMenu = function () {
  menu.style.opacity = 0;
  menu.style.zIndex = -1;
  menuBtnOpen.style.display = "block";
  menuBtnClose.style.display = "none";
}

function menuShow() {
  if (mediaQueryShowMenu.matches) {
    menu.style.opacity = 1;
    menu.style.zIndex = 1;
  }
  if (mediaQueryHideMenu.matches) {
    closeMenu();
  }
}

menuBtnOpen.addEventListener("click", showMenu);
menuBtnClose.addEventListener("click", closeMenu);

window.addEventListener("resize", menuShow);