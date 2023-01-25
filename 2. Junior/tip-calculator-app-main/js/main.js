window.addEventListener("load", function () {
	const inputBill = document.querySelector(".calculator__input-bill");
	const inputCustom = document.querySelector(".calculator__input-custom");
	const inputNumPeople = document.querySelector(
		".calculator__input-num-people"
	);
	const alertNumPeople = document.querySelector(
		".calculator__input-num-people-alert-message"
	);
	const tipBtns = document.querySelectorAll(".calculator__tip-btn");
	const pTipAmount = document.querySelector(".calculator__tip-amount");
	const pTipTotal = document.querySelector(".calculator__tip-total");
	const resetBtn = document.querySelector(".calculator__reset-btn");

	inputBill.addEventListener("input", function () {
		// mask for "bill" field
		this.value = this.value.match(/\d{1,}\.?\d*/);
	});

	tipBtns.forEach((btn) => {
		btn.addEventListener("click", function () {
			clearBtn(tipBtns, "calculator__tip-btn--active");
			this.classList.toggle("calculator__tip-btn--active");
			calculateTip(this);
		});
	});

	inputCustom.addEventListener("focus", function () {
		clearBtn(tipBtns, "calculator__tip-btn--active");
		calculateTip(this);
	});

	inputCustom.addEventListener("input", function () {
		this.value = this.value.replace(/\D/, "");
		calculateTip(this);
	});

	inputNumPeople.addEventListener("input", function () {
		this.value = this.value.replace(/\D/, "");
		clearAlert();
	});

	resetBtn.addEventListener("click", function () {
		if (this.classList.contains("calculator__reset-btn--active")) {
			this.classList.remove("calculator__reset-btn--active");
			clearCalculatorItems(inputBill, "");
			clearCalculatorItems(inputCustom, "");
			clearCalculatorItems(inputNumPeople, "");
			clearBtn(tipBtns, "calculator__tip-btn--active");
			clearCalculatorItems(pTipAmount, "$0.00");
			clearCalculatorItems(pTipTotal, "$0.00");
		}
	});

	// remove class from list
	function clearBtn(clearList, clearClass) {
		clearList.forEach((el) => {
			el.classList.remove(clearClass);
		});
	}

	// calculate tip
	function calculateTip(btn) {
		let numOfPeaple = inputNumPeople.value;
		if (numOfPeaple === "" || numOfPeaple === 0) {
			outputAlert();
		} else {
			clearAlert();
			resetActive();

			let bill = parseFloat(inputBill.value);
			let billPercent;
			switch (btn.tagName) {
				case "BUTTON":
					billPercent = parseInt(btn.innerHTML);
					break;
				case "INPUT":
					if (btn.value === "") {
						break;
					}
					billPercent = parseInt(btn.value);
					break;
			}
			let tipAmount = (bill * (billPercent / 100)) / numOfPeaple;
			let total = bill / numOfPeaple + tipAmount;
			tipAmount = tipAmount.toFixed(2);
			total = total.toFixed(2);
			outTip(pTipAmount, tipAmount);
			outTip(pTipTotal, total);
		}
	}

	// output alert for "number of people" field
	function outputAlert() {
		alertNumPeople.innerHTML = "Can't be zero";
		inputNumPeople.classList.add("calculator__input-num-people--alert");
		inputNumPeople.focus();
	}

	// clear alert for "number of people" field
	function clearAlert() {
		alertNumPeople.innerHTML = "";
		inputNumPeople.classList.remove("calculator__input-num-people--alert");
	}

	// output tip value
	function outTip(el, value) {
		if (isNaN(value)) {
			el.innerHTML = "$0.00";
		} else {
			el.innerHTML = "$" + value;
		}
	}

	// activate reset button
	function resetActive() {
		resetBtn.classList.add("calculator__reset-btn--active");
	}

	// reset calculator elements
	function clearCalculatorItems(elem, str) {
		switch (elem.tagName) {
			case "INPUT":
				elem.value = str;
				break;
			case "P":
				elem.innerHTML = str;
				break;
		}
	}
});
