// form data validation function
function formCheck() {
  // getting form fields as objects
  const firstName = document.getElementsByClassName('signup__form-input').item(0);
  const lastName = document.getElementsByClassName('signup__form-input').item(1);
  const email = document.getElementsByClassName('signup__form-input').item(2);
  const password = document.getElementsByClassName('signup__form-input').item(3);
  const myForm = document.getElementsByClassName('signup__form').item(0);

  // counter for @
  let countDog = 0;
  // position @ in the string
  let positionDog = -1;
  // counter for .
  let countDot = 0;
  // position . in the string
  let positionDot = -1;
  let isFormValid = true;

  // an array of all letters and numbers entered in the email field
  let symbolsInEmail = email.value.match(/\w/g);
  // an array of all hyphens entered in the email field
  let hyphensInEmail = email.value.match(/[-]/g)
  
  // counter for letters and numbers entered in the email field
  let amountSymbols = 0;
  // counter for hyphens
  let amountHyphens = 0;
  
  // checking if the first name field is filled in
  if (firstName.value === '') {
    inputNotValid(firstName, 0);
    isFormValid = false;
  } else {
    inputValid(firstName, 0);
  }
  // checking if the last name field is filled in
  if (lastName.value === '') {
    inputNotValid(lastName, 1);
    isFormValid = false;
  } else {
    inputValid(lastName, 1);
  }
  // checking if the password field is filled in
  if (password.value === '') {
    inputNotValid(password, 3);
    isFormValid = false;
  } else {
    inputValid(password, 3);
  }
  
  // counting the number of dogs and dots in the mail field
  for (let i = 0; i < email.value.length; i++) {
    if (email.value.charAt(i) == '@') countDog++;
    if (email.value.charAt(i) == '.') countDot++;
  }
  
  // determining the number of letters and numbers in the mail field
  if (symbolsInEmail !== null) {
    amountSymbols = symbolsInEmail.length;
  }
  
  // determining the number of hyphens in the mail field
  if (hyphensInEmail !== null) {
    amountHyphens = hyphensInEmail.length;
  }

  // checking if there are any characters in the mail field other
  // than letters, numbers, and hyphens
  if (amountSymbols + amountHyphens + 2 !== email.value.length) {
    inputNotValid(email, 2);
    isFormValid = false;
  } else {
    inputValid(email, 2);
  }

  // checking the correct number of doggy and dot characters
  // in the mail field
  if (countDog == 1 && countDot == 1) {
    positionDog = email.value.search('@');
    positionDot = email.value.indexOf('.');

    // checking the correct position of the characters doggy and dot
    // in the mail field
    if (positionDog == 0 || positionDot == (email.value.length - 1) || (positionDot - positionDog < 2)) {
      inputNotValid(email, 2);
      isFormValid = false;
    }
  } else {
    inputNotValid(email, 2);
    isFormValid = false;
  }

  // submitting form data in case of valid input
  if (isFormValid) {
    myForm.submit();
  }
}

// setting classes for form fields to display by default
function inputValid(myInput, numItem) {
  myInput.className = 'signup__form-input';
  document.getElementsByClassName('signup__form-warning').item(numItem).className = 'signup__form-warning';
  document.getElementsByClassName('signup__form-warning-img').item(numItem).className = 'signup__form-warning-img';
}

// setting classes for form fields to display in case of input errors
function inputNotValid(myInput, numItem) {
  myInput.className = 'signup__form-input signup__form-input--warning';
  document.getElementsByClassName('signup__form-warning').item(numItem).className = 'signup__form-warning signup__form-warning--active';
  document.getElementsByClassName('signup__form-warning-img').item(numItem).className = 'signup__form-warning-img signup__form-warning-img--active';
}