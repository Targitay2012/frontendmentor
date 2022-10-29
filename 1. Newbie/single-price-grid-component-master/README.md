# Frontend Mentor - Single price grid component solution

This is a solution to the [Single price grid component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See a hover state on desktop for the Sign Up call-to-action

### Screenshot

![](./screenshot-1.jpg)
![](./screenshot-2.jpg)


### Links

- Solution URL: [https://github.com/Targitay2012/frontendmentor/tree/main/1.%20Newbie/single-price-grid-component-master](https://github.com/Targitay2012/frontendmentor/tree/main/1.%20Newbie/single-price-grid-component-master)
- Live Site URL: [https://targitay2012.github.io/frontendmentor/1.%20Newbie/single-price-grid-component-master/](https://targitay2012.github.io/frontendmentor/1.%20Newbie/single-price-grid-component-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid

### What I learned

In this challenge, I practiced building a layout using grids. Tried the new commands grid-template-areas and grid-area:

```html
    <div class="price">
      <div class="price__grid-item price__header">

      </div>
      <div class="price__grid-item price__offer">

      </div>
      <div class="price__grid-item price__why">

      </div>
    </div>
```
```scss
.price {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "header header"
    "price why";

  &__header {
    grid-area: header;
  }

  &__offer {
    grid-area: price;
  }

  &__why {
    grid-area: why;
  }
}
```

### Continued development

I continue to improve in HTML, CSS, JS

## Author

- Frontend Mentor - [@Targitay2012](https://www.frontendmentor.io/profile/Targitay2012)

