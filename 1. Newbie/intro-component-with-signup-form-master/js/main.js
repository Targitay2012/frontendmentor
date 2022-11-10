// get DOM elements
const inputs = document.querySelectorAll('.js-input');
const alerts = document.querySelectorAll('.js-alert');
const form = document.querySelector('.js-form');

let isFormValid = false;
let isFirstNameValid = false;
let isSecondNameValid = false;
let isEmailValid = false;
let isPasswordValid = false;

function clearAllAlerts() {

  inputs.forEach((input) => {
    input.classList.remove('is-alert-input');
  });

  alerts.forEach((alert) => {
    alert.textContent = '';
  });
}

function setAlert(input, nameInput, message) {

  input.classList.add('is-alert-input');

  alerts.forEach((alert) => {

    let nameAlert = alert.dataset.id;

    if (nameAlert == nameInput) {
      alert.textContent = message;
    };
  });
}

function validEmail(input) {

  let emailValidation = /^(?:[a-z0-9.]){2,30}@{1}(?:[a-z0-9-]){2,30}\.{1}(?:[a-z0-9]){2,3}(?:\.(?:[a-z0-9]){2,3})?$/;
  const email = input.value;
  const isValid = emailValidation.test(email);
  const nameInput = input.dataset.id;

  if (!isValid) {
    setAlert(input, nameInput, 'Looks like this is not an email');
  } else {
    isEmailValid = true;
  };
}

function checkAllInputs() {

  inputs.forEach((input) => {

    const nameInput = input.dataset.id;
    let valueInput = input.value;

    switch (nameInput) {
      case 'firstName':
        if (valueInput == '') {
          setAlert(input, nameInput, 'First Name cannot be empty');
        } else {
          isFirstNameValid = true;
        };
        break;

      case 'secondName':
        if (valueInput == '') {
          setAlert(input, nameInput, 'Second Name cannot be empty');
        } else {
          isSecondNameValid = true;
        };
        break;

      case 'email':
        validEmail(input);
        break;

      case 'password':
        if (valueInput == '') {
          setAlert(input, nameInput, 'Password cannot be empty');
        } else {
          isPasswordValid = true;
        };
        break;

      default:
        break;
    };
  });
}

function formCheck(event) {
  clearAllAlerts();
  checkAllInputs();

  isFormValid = isFirstNameValid && isSecondNameValid && isEmailValid && isPasswordValid;

  if (!isFormValid) {
    event.preventDefault();
  }
}

form.addEventListener('submit', formCheck);







