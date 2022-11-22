// getting DOM elements
const myForm = document.querySelector(".form");
const inputs = document.querySelectorAll(".js-input");
const alerts = document.querySelectorAll(".js-alert");
const button = document.querySelector(".js-button");
const formInner = document.querySelector(".form__inner");

const cardComplete = document.querySelector(".card__complete");
const cardCompleteBtn = document.querySelector(".card__complete-btn");

// we create boolean variables for the states of the input fields,
// the form, and the button in the successful form completion block.
let isNameValid = false;
let isNumberValid = false;
let isMonthValid = false;
let isYearValid = false;
let isCvcValid = false;
let isFormValid = false;

let isFormCompliteBtnPress = false;

// **** start creating input templates ****

let maskNumber, maskMonth, maskYear, maskCvc;
// card number mask
let maskNumberOptions = {
  mask: "**** **** **** ****"
}
// month number mask
let maskMonthOptions = {
  mask: IMask.MaskedRange,
  from: 1,
  to: 12
}
// year number mask
let maskYearOptions = {
  mask: IMask.MaskedRange,
  from: 0,
  to: 99
}
// cvc number mack
let maskCvcOptions = {
  mask: IMask.MaskedRange,
  from: 0,
  to: 999
}

inputs.forEach((input) => {
  let inputID = input.dataset.id;

  switch (inputID) {
    case "number":
      maskNumber = IMask(input, maskNumberOptions);
      break;

    case "cvc":
      maskCvc = IMask(input, maskCvcOptions);
      break;

    default:
      break;
  }

  input.classList.forEach((inputClass) => {
    if (inputClass == "form__input-month") {
      maskMonth = IMask(input, maskMonthOptions);
    }
    if (inputClass == "form__input-year") {
      maskYear = IMask(input, maskYearOptions);
    }
  })
})
// **** end creating input templates ****

// clearing the form from warnings
const removeAlert = () => {
  inputs.forEach((input) => {
    input.classList.remove("form__input--alert");
  });

  alerts.forEach((alert) => {
    alert.innerHTML = "";
  });

  formInner.style.marginBottom = "40px";
}

// error message output
const outPutAlert = (inputID, message) => {
  alerts.forEach((alert) => {
    let alertID = alert.dataset.id;

    if (inputID == alertID) {
      alert.textContent = message;
    };

    if (alertID == "month" || alertID == "year" || alertID == "cvc") {
      formInner.style.marginBottom = "50px";
    }
  });
}

// input validation
const checkInputs = () => {
  inputs.forEach((input) => {
    let inputID = input.dataset.id;

    // checking if the field is empty or not
    if (input.value == "") {
      input.classList.add("form__input--alert");

      outPutAlert(inputID, "Can't be blank");

      isNameValid = false;
      isNumberValid = false;
      isMonthValid = false;
      isYearValid = false;
      isCvcValid = false;
    } else {
      isNameValid = true;
      isMonthValid = true;
      isYearValid = true;
      isCvcValid = true;
    };

    // card number check
    switch (inputID) {
      case "number":
        // creating valid character set (numbers only)
        const numberSet = /[0-9]/;

        checkNumber: {
          // checking the characters of the card number for
          // occurrence in the valid character set
          for (let i = 0; i < maskNumber.unmaskedValue.length; i++) {
            if (!numberSet.test(maskNumber.unmaskedValue.charAt(i))) {
              input.classList.add("form__input--alert");

              outPutAlert(inputID, "Wrong format, numbers only");

              isNumberValid = false;
              break checkNumber;
            };
          };

          // checking if all numbers of the card number are entered
          if (input.value.length < 19) {
            input.classList.add("form__input--alert");

            outPutAlert(inputID, "Wrong format, input all numbers");

            isNumberValid = false;
            break;
          }

          isNumberValid = true;
          break;
        }

      default:
        break;
    }
  });

  isFormValid = isNameValid && isNumberValid && isMonthValid && isYearValid && isCvcValid;

  return isFormValid;
}

// **** start the output of details on the picture of a card ****
const outputCardDetailes = () => {
  // get DOM elements
  const resultCardNumber = document.querySelector(".card__result-num");
  const resultCardName = document.querySelector(".card__result-name");
  const resultCardCvc = document.querySelector(".card__result-cvc");
  const resultCardDate = document.querySelector(".card__result-date");

  let resultMonth = "00";
  let resultYear = "00";

  // output card number, name, cvc
  inputs.forEach((input) => {
    switch (input.dataset.id) {
      case "number":
        resultCardNumber.textContent = input.value;
        break;

      case "name":
        resultCardName.textContent = input.value;
        break;

      case "cvc":
        if (input.value.length < 1) {
          resultCardCvc.textContent = "000";
          break;
        }
        if (input.value.length < 2) {
          resultCardCvc.textContent = `00${input.value}`;
          break;
        }
        if (input.value.length < 3) {
          resultCardCvc.textContent = `0${input.value}`;
          break;
        }
        resultCardCvc.textContent = input.value;
        break;

      default:
        break;
    }
    // output the number of the month, year
    input.classList.forEach((inputClass) => {
      switch (inputClass) {
        case "form__input-month":
          if (input.value.length < 1) {
            resultMonth = "00";
            break;
          }
          if (input.value.length < 2) {
            resultMonth = `0${input.value}`;
            break;
          }
          resultMonth = input.value;
          break;

        case "form__input-year":
          if (input.value.length < 1) {
            resultYear = "00";
            break;
          }
          if (input.value.length < 2) {
            resultYear = `0${input.value}`;
            break;
          }
          resultYear = input.value;
          break;

        default:
          break;
      }
    });
  });

  resultCardDate.textContent = `${resultMonth}/${resultYear}`;
}
// **** end the output of details on the picture of a card ****

// displaying the form of successful completion of card data entry
function formComplete() {
  myForm.style.display = "none";
  cardComplete.style.display = "block";

  cardCompleteBtn.onclick = () => {
    cardComplete.style.display = "none";
    myForm.style.display = "block";
    myForm.submit();
  }
}

// form validation
function formValedate() {
  removeAlert();
  checkInputs();
  outputCardDetailes();

  if (!isFormCompliteBtnPress && isFormValid) {
    formComplete();
  };
}

// handle getting input field focus to display border with gradient color
function borderInputFocus(input) {
  // if (input.getAttributeNode("id").value == "year") {
  //   input.parentElement.parentElement.classList.add("form__input-wrap--focus");
  // }
  input.parentElement.classList.add("form__input-wrap--focus");
}

function borderInputBlur(input) {
  // if (input.getAttributeNode("id").value == "year") {
  //   input.parentElement.parentElement.classList.remove("form__input-wrap--focus");
  // }
  input.parentElement.classList.remove("form__input-wrap--focus");
}

inputs.forEach((input) => {
  input.addEventListener("focus", function () {borderInputFocus(input)});
  input.addEventListener("blur", function () {borderInputBlur(input)});
});
// ****

// Handling events for entering data into form fields
// and clicking the "confirm" button
button.addEventListener("click", formValedate);
inputs.forEach((input) => {
  input.addEventListener("input", outputCardDetailes);
  
  input.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {formValedate()}
  });
});