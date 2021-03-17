



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
		const drawerParrent = document.querySelector(".freezer__drawers");
		const drawerModel = document.querySelector(".drawer__model-front");
		const slot = document.querySelector(".drawer-empty");

		drawerModel.addEventListener("dragstart", dragStart);
		drawerModel.addEventListener("dragend", dragEnd);

		slot.addEventListener("dragover", dragOver);
		slot.addEventListener("dragenter", dragEnter);
		slot.addEventListener("dragleave", dragLeave);
		slot.addEventListener("drop", () => new DragDrop(slot));

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
				cloneDrawer.style.transform = "none";
				const newList = document.createElement("li");
				newList.classList.add("freezer__drawers-list");
				newList.appendChild(cloneDrawer);
				drawerParrent.insertAdjacentElement("beforeend", newList);
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