const form = document.querySelector(".form");
const email = document.querySelector(".js-input");
const myAlarm = document.querySelector(".js-alarm");

function clearAlerts() {
  emailClassList = email.classList;

  emailClassList.remove("form__input--alarm");

  myAlarm.innerHTML ="";
};

function showAlerts() {
  emailClassList = email.classList;

  emailClassList.add("form__input--alarm");

  myAlarm.innerHTML = "<i>Please provide a valid email address</i>";
}

function checkEmail() {
  const emailValue = email.value;
  const validSymbols = /^(?:[a-z0-9.]){2,30}@{1}(?:[a-z0-9-]){2,30}\.{1}(?:[a-z0-9]){2,3}(?:\.(?:[a-z0-9]){2,3})?$/;

  let isEmailValid = validSymbols.test(emailValue);

  if (emailValue == "" || !isEmailValid) {
    showAlerts();
    return isEmailValid = false;
  }

  return isEmailValid;
};

const formValidate = (event) => {
  clearAlerts();
  const isEmail = checkEmail();

  
  if (!isEmail) {
    event.preventDefault();
  }
  
};

form.addEventListener("submit", formValidate);