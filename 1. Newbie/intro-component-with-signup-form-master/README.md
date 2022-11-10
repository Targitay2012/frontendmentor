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

- Solution URL: [link](https://github.com/Targitay2012/frontendmentor/tree/main/1.%20Newbie/intro-component-with-signup-form-master)
- Live Site URL: [link](https://targitay2012.github.io/frontendmentor/1.%20Newbie/intro-component-with-signup-form-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JS

### What I learned

In this task, I got acquainted with ARIA attributes, such as `aria-describedby`, `aria-live`.Practiced in creating accessible forms.

```html
    <form class="signup__form js-form" novalidate>
    <label class="signup__form-label">
      <input 
        class="signup__form-input js-input"
        type="text"
        required
        aria-describedby="firstName-alert"
        data-id="firstName"
        placeholder="First Name">
      <i 
        id="firstName-alert"
        class="signup__form-warning js-alert"
        aria-live="polite"
        data-id="firstName"></i>
    </label>
    <label class="signup__form-label">
      <input
        class="signup__form-input js-input"
        type="text"
        required
        aria-describedby="secondName-alert"
        data-id="secondName"
        placeholder="Last Name">
      <i
        id="secondName-alert"
        class="signup__form-warning js-alert"
        aria-live="polite"
        data-id="secondName"></i>
    </label>
    <label class="signup__form-label">
      <input
        class="signup__form-input js-input"
        type="text"
        required
        aria-describedby="email-alert"
        data-id="email"
        placeholder="Email Address">
      <i
        id="email-alert"
        class="signup__form-warning js-alert"
        aria-live="polite"
        data-id="email"></i>
    </label>
    <label class="signup__form-label">
      <input
        class="signup__form-input js-input"
        type="password"
        required
        aria-describedby="password-alert"
        data-id="password"
        placeholder="Password">
      <i
        id="password-alert"
        class="signup__form-warning js-alert"
        aria-live="polite"
        data-id="password"></i>
    </label>
    <button 
      class="signup__form-btn" 
      type="submit">Claim your free trial</button>
  </form>
```

### Continued development

I continue to improve in HTML, CSS, JS.

### Useful resources

- [https://www.w3schools.com/](https://www.w3schools.com/) - This site helps me learn javascript. There are many examples here to help you better understand the nuances.
- [https://css-tricks.com/video-screencasts/115-dont-overthink-it-grids/](https://css-tricks.com/video-screencasts/115-dont-overthink-it-grids/) - Here I studied the nuances of the size of the elements of the grid.

## Author

- Frontend Mentor - [@Targitay2012](https://www.frontendmentor.io/profile/Targitay2012)

## Acknowledgments

Thanks to [Grace](https://www.frontendmentor.io/profile/grace-snow) and [Vanza Setia](https://www.frontendmentor.io/profile/vanzasetia) for their feedback, and valuable advice, and for pushing me deeper into the problem of accessible forms and accessibility in general.

Vanza's [article](https://community.codenewbie.org/vanzasetia/how-to-create-accessible-form-with-boring-design-4ab0#javascript) on accessible forms.
