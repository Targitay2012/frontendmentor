# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./screenshot-1.jpg)
![](./screenshot-2.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JS

### What I learned

In this challenge, I had to break my head over mail verification, and work a lot with different methods for strings. The choice settled on the `match()`, `charAt()`, `search()`, `indexOf()` methods. I learned about regular expressions for searching in strings.

```html
  <form class="signup__form">
    <label class="signup__form-label">
      <input class="signup__form-input " type="text" placeholder="First Name">
      <i class="signup__form-warning">First Name cannot be empty</i>
      <img class="signup__form-warning-img" src="images/icon-error.svg">
    </label>
    <label class="signup__form-label">
      <input class="signup__form-input" type="text" placeholder="Last Name">
      <i class="signup__form-warning">Last Name cannot be empty</i>
      <img class="signup__form-warning-img" src="images/icon-error.svg">
    </label>
    <label class="signup__form-label">
      <input class="signup__form-input" type="text" placeholder="Email Address">
      <i class="signup__form-warning">Looks like this is not an email</i>
      <img class="signup__form-warning-img" src="images/icon-error.svg">
    </label>
    <label class="signup__form-label">
      <input class="signup__form-input" type="password" placeholder="Password">
      <i class="signup__form-warning">Password cannot be empty</i>
      <img class="signup__form-warning-img" src="images/icon-error.svg">
    </label>
    <button class="signup__form-btn" type="button" onclick="formCheck()">Claim your free trial</button>
  </form>
```
```js
  ...
  // an array of all letters and numbers entered in the email field
  let symbolsInEmail = email.value.match(/\w/g);
  // an array of all hyphens entered in the email field
  let hyphensInEmail = email.value.match(/[-]/g)
  // counting the number of dogs and dots in the mail field
  ...
  // counting the number of dogs and dots in the mail field
  for (let i = 0; i < email.value.length; i++) {
    if (email.value.charAt(i) == '@') countDog++;
    if (email.value.charAt(i) == '.') countDot++;
  }
  ...
  // checking the correct number of doggy and dot characters
  // in the mail field
  if (countDog == 1 && countDot == 1) {
    positionDog = email.value.search('@');
    positionDot = email.value.indexOf('.');
    ...
  } else {
    ...
  }
```

### Continued development

I continue to improve in HTML, CSS, JS.

### Useful resources

- [https://www.w3schools.com/](https://www.w3schools.com/) - This site helps me learn javascript. There are many examples here to help you better understand the nuances.
- [https://css-tricks.com/video-screencasts/115-dont-overthink-it-grids/](https://css-tricks.com/video-screencasts/115-dont-overthink-it-grids/) - Here I studied the nuances of the size of the elements of the grid.

## Author

- Frontend Mentor - [@Targitay2012](https://www.frontendmentor.io/profile/Targitay2012)

