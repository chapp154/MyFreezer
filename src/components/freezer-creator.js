



export class FreezerCreator {

	constructor() {

	}

	keepDoorOpen() {
		const elToHover = document.querySelector(".freezer__creator-open-img");
		const elClosed = document.querySelector(".freezer__closed");

		elToHover.addEventListener("mouseenter", () => {
			if (!elToHover.classList.contains("door-hovered")) {
				elToHover.classList.add("door-hovered");
				elClosed.classList.add("temp__open-door-hover");
				elClosed.style.setProperty("--rotate", "rotateY(0deg)")

			}
			return;
		});
	}

	setDrawerSlots() {
		
	}

	drawerDrag() {
		const drawerModel = document.querySelector(".drawer__model-front");
		const slots = document.querySelectorAll(".drawer");

		drawerModel.addEventListener("dragstart", dragStart);
		drawerModel.addEventListener("dragend", dragEnd);

		for (const slot of slots) {
			slot.addEventListener("dragover", dragOver);
			slot.addEventListener("dragenter", dragEnter);
			slot.addEventListener("dragleave", dragLeave);
			slot.addEventListener("drop", () => new DragDrop(slot));
		}

		function dragOver(e) {
			e.preventDefault();
			
		}
		function dragEnter(e) {
			e.preventDefault();

		} 
		function dragLeave() {

		}
		class DragDrop {
			constructor(slot) {
				this.slot = slot;
				this.add();
			}

			add() {
				const cloneDrawer = drawerModel.cloneNode(true);
				this.slot.textContent = "";
				this.slot.append(cloneDrawer);
			}
		}

		function dragStart() {
			console.log("start");
		}

		function dragEnd() {
			console.log("end");
		}


		return;

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