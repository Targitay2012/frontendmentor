
// mail validation function
function checkEmail() {
  // getting string from mail input field
  const stringEmail = document.getElementById('promoEmail').value;
  // character @ counter
  let countDog = 0;
  // getting a picture with an exclamation point
  const imgAlarm = document.getElementById('promo__form-alarm');
  // getting a warning message
  const msgAlarm = document.getElementById('promo__alarm');
  // compare each character of the input string with the character @
  for (let i = 0; i < stringEmail.length; i++) {
    if (stringEmail.charAt(i) == '@') countDog++;
  }

  if (countDog == 1) {
    imgAlarm.className = 'promo__form-alarm';
    msgAlarm.className = 'promo__alarm';
    return true
  } else {
    imgAlarm.className = 'promo__form-alarm promo__form-alarm--alarm';
    msgAlarm.className = 'promo__alarm promo__alarm--alarm';
    return false;
  }
}

// disable warning message
function offAlarm() {
  // getting a picture with an exclamation point
  const imgAlarm = document.getElementById('promo__form-alarm');
  // getting a warning message
  const msgAlarm = document.getElementById('promo__alarm');

  imgAlarm.className = 'promo__form-alarm';
  msgAlarm.className = 'promo__alarm';
}


