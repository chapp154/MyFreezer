



export class FreezerCreator {

	constructor() {

	}

	keepDoorOpen() {
		const elToHover = document.querySelector(".freezer__creator-open-img");

		if (!elToHover.classList.contains("door-hovered")) {

			elToHover.addEventListener("mouseenter", () => {
				console.log(elToHover.classList.contains("door-hovered"));

				elToHover.classList.add("door-hovered");
			})
		}

	}

	closeWindow() {
		const closeEl = document.querySelector(".freezer__creator-open-head span");
		const creatorEl = document.querySelector(".freezer__creator-open");

		closeEl.addEventListener("click", () => {
            creatorEl.classList.add("animation__popout");
            setTimeout(() => {creatorEl.remove()}, 290);
		})
	}
}