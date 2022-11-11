// get DOM elements
const menuButton = document.querySelector(".menu__btn");
const menuButtonImg = document.querySelector(".menu__btn-img");
const menuList = document.querySelector(".menu__list");
const myMenu = document.querySelector(".menu");
const myBody = document.querySelector("body");

// modal menu call processing
const handleMenu = () => {
  menuListClassList = menuList.classList;
  myMenuClassList = myMenu.classList;
  
  myMenuClassList.toggle("menu--dark");
  menuListClassList.toggle("menu__list--active");
  
  myBody.style.overflow = "auto";
  menuButtonImg.getAttributeNode("src").value = "assets/images/icon-menu.svg";
  
  // replacing the picture of the menu icon if the menu itself is called
  if (menuListClassList.contains("menu__list--active")) {
    myBody.style.overflow = "hidden";
    menuButtonImg.getAttributeNode("src").value = "assets/images/icon-menu-close.svg";
  }
}

menuButton.addEventListener("click", handleMenu);