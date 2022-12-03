# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot-1.jpg)
![](./screenshot-2.jpg)

### Links

- Solution URL: [link](https://github.com/Targitay2012/frontendmentor/tree/main/2.%20Junior/intro-section-with-dropdown-navigation-main)
- Live Site URL: [link](https://targitay2012.github.io/frontendmentor/2.%20Junior/intro-section-with-dropdown-navigation-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JS

### What I learned

In this assignment, I learned how to set media queries in JS

```js
// create media querys for show or hide menu
const mediaQueryShowMenu = window.matchMedia("(min-width: 901px)");
const mediaQueryHideMenu = window.matchMedia("(max-width: 900px)");

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

window.addEventListener("resize", menuShow);
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

I continue to improve in HTML, CSS, JS

### Useful resources

- [w3schools/](https://www.w3schools.com/) - a great reference book with good examples.

## Author

- Frontend Mentor - [@Targitay2012](https://www.frontendmentor.io/profile/Targitay2012)
- Twitter - [@PurboDans](https://www.twitter.com/PurboDans)
