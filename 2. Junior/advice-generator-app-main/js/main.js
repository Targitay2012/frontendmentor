// getting DOM elements
const numberAdvice = document.querySelector(".advice__title");
const textAdvice = document.querySelector(".advice__text");
const adviceButton = document.querySelector(".advice__btn");


async function getAdvice() {
    // getting response from server
    let myResponse = await fetch("https://api.adviceslip.com/advice");
    // getting a JSON string from the response from the server
    let myString = await myResponse.text();
    // getting an object from JSON string
    let myObject = JSON.parse(myString);
    // getting a advice number
    let numAdv = myObject.slip["id"];
    // getting advice text
    let advice = myObject.slip["advice"];
    // set content
    numberAdvice.innerHTML = `advice #${numAdv}`;
    textAdvice.innerHTML = `"${advice}"`;
}

getAdvice();

adviceButton.addEventListener("click", getAdvice);