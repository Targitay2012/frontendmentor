window.addEventListener("load", function () {
	const timeFramesBtns = document.querySelectorAll(
		".report__person-timeframes"
	);
	const lastPeriodList = document.querySelectorAll(".report__item-last-period");
	const currentHoursList = document.querySelectorAll(".report__item-time");
	const previousHoursList = document.querySelectorAll(
		".report__item-last-time"
	);
	let dataObj;

	getData("data.json");

	timeFramesBtns.forEach((btn) => {
		btn.addEventListener("click", function () {
			timeFramesBtns.forEach((btn) => {
				btn.classList.remove("report__person-timeframes--active");
			});
			this.classList.add("report__person-timeframes--active");

			let period = this.attributes.getNamedItem("id").value;

			switch (period) {
				case "daily":
					fillLastPeriod("Yesterday -");
					insertData("daily");
					break;
				case "weekly":
					fillLastPeriod("Last Week -");
					insertData("weekly");
					break;
				case "monthly":
					fillLastPeriod("Last Month - ");
					insertData("monthly");
					break;
			}
		});
	});

	setTimeout(() => {
		timeFramesBtns.item(0).click();
	}, 200);

	// get data from file data.json
	async function getData(file) {
		let fileData = await fetch(file);
		let data = await fileData.text();
		dataObj = JSON.parse(data);
	}

	// insert last period
	function fillLastPeriod(message) {
		lastPeriodList.forEach((item) => {
			item.innerHTML = message;
		});
	}

	// insert current hours
	function insertData(period) {
		currentHoursList.forEach((item) => {
			let category = item
				.closest(".report__item")
				.attributes.getNamedItem("id").value;
			let previos = item
				.closest(".report__item")
				.querySelector(".report__item-last-time");
			switch (category) {
				case "work":
					item.innerHTML = getCurrent(0, period);
					previos.innerText = getPrevios(0, period);
					break;
				case "play":
					item.innerHTML = getCurrent(1, period);
					previos.innerHTML = getPrevios(1, period);
					break;
				case "study":
					item.innerHTML = getCurrent(2, period);
					previos.innerHTML = getPrevios(2, period);
					break;
				case "gym":
					item.innerHTML = getCurrent(3, period);
					previos.innerHTML = getPrevios(3, period);
					break;
				case "social":
					item.innerHTML = getCurrent(4, period);
					previos.innerHTML = getPrevios(4, period);
					break;
				case "care":
					item.innerHTML = getCurrent(5, period);
					previos.innerHTML = getPrevios(5, period);
					break;
			}
		});
	}

	function getCurrent(i, period) {
		return dataObj[i].timeframes[`${period}`].current + "hrs";
	}

	function getPrevios(i, period) {
		return dataObj[i].timeframes[`${period}`].previous + "hrs";
	}
});
