export const loading = {
	start: function() {
		const bg = document.createElement('div');
		const body = document.querySelector("body");
		bg.classList.add("loading-main");

		const spinner = document.createElement("i");
		spinner.classList.add("fas");
		spinner.classList.add("fa-snowflake");
		spinner.classList.add("loading-main__bar");

		bg.insertAdjacentElement("afterbegin", spinner);

		body.insertAdjacentElement("afterbegin", bg);
	},

	end: function() {
		const existingBg = document.querySelector(".loading-main");
		existingBg.remove();

	}
}