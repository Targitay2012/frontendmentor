// get DOM objects
const bars = document.querySelectorAll(".chart__bars-item span");
const barsValue = document.querySelectorAll(".chart__bars-value");

// get data from file data.json
async function getJSON() {
  const response = await fetch("data.json");
  const json = await response.text();
  return JSON.parse(json);
}

getJSON().then(
  function (myJson) {
    myFun(myJson);
  },
  function (error) {
    alert(error);
  }
)

// data processing function from a file: setting the heights
// of the chart columns, setting values in pop-up boxes.
function myFun(myJson) {
  // search for a record with the maximum value of the "amount" field
  let maxValue = () => {
    let max = myJson[0].amount;
    myJson.forEach((dayJson) => {
      if (max < dayJson.amount) {
        max = dayJson.amount;
      }
    })
    return maxValue = max;
  }

  // calculation of the scaling factor of the chart columns
  const factor = 150 / maxValue();

  // 
  myJson.forEach((dayJson) => {
    bars.forEach((bar) => {
      // assigning chart column heights by day
      if (dayJson.day == bar.dataset.id) {
        bar.style = `--h: ${dayJson.amount}px; --factor: ${factor};`;

        // assigning a different color to the tallest column
        if (dayJson.amount == maxValue) {
          bar.style = `--h: ${dayJson.amount}px; --factor: ${factor}; background-color: var(--cyan);`;
        }
      }
      
    })

    // setting popup values
    barsValue.forEach((barVal) => {
      if (dayJson.day == barVal.dataset.id) {
        barVal.innerHTML = `$${dayJson.amount}`;
      }
    })
  })
}

// pop-up display
function showBarValue(bar) {
  barsValue.forEach((pElement) => {
    if (pElement.dataset.id == bar.dataset.id) {
      pElement.style.opacity = 1;
    }
  })
}

// hiding pop-ups
function hideBarValue(bar) {
  barsValue.forEach((pElement) => {
    if (pElement.dataset.id == bar.dataset.id) {
      pElement.style.opacity = 0;
    }
  })
}

// setting the event tracking of the mouse cursor passing over the column
bars.forEach((bar) => {
  bar.addEventListener("mouseover", () => showBarValue(bar));
  bar.addEventListener("mouseleave", () => hideBarValue(bar));
})
