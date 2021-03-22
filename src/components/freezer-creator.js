



export class FreezerCreator {

	constructor() {
		this.tempSettings = new Map();
		this.btnSaveSettings = document.getElementById("save-settings");
		this.eventRemoveDrawer = ""

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

	drawerDrag() {
		let idIncrement = 0;

		const drawerParrent = document.querySelector(".freezer__drawers");
		const drawerModel = document.querySelector(".drawer__model-front");
		const slot = document.querySelector(".drawer-empty");

		drawerModel.addEventListener("dragstart", dragStart);
		drawerModel.addEventListener("dragend", dragEnd.bind(this));

		slot.addEventListener("dragover", dragOver);
		slot.addEventListener("dragenter", dragEnter);
		slot.addEventListener("dragleave", dragLeave);
		slot.addEventListener("drop", dragDrop.bind(this));

		function dragOver(e) {
			e.preventDefault();	
		}
		function dragEnter(e) {
			e.preventDefault();
		} 
		function dragLeave() {
		}
		function dragDrop() {

			const cloneDrawer = drawerModel.cloneNode(true);
			cloneDrawer.style.transform = "none";
			idIncrement++;
			const newList = document.createElement("li");
			newList.id = `drawer-${idIncrement}`;
			newList.classList.add("freezer__drawers-list");
			newList.appendChild(cloneDrawer);
			drawerParrent.insertAdjacentElement("beforeend", newList);

			newList.addEventListener("dragstart", dragStartClone.bind(this));
			function dragStartClone(e) {
				this.eventRemoveDrawer = e.currentTarget;
			}

			FreezerCreator.prototype.drawerSettings(newList);
		}

		function dragStart() {
		}
		function dragEnd() {
		}
	}

	drawerSettings(drawerEl) {


		drawerEl.addEventListener("click", eventDrawerSetup.bind(this));
		function eventDrawerSetup(e) {

			const eventId = e.currentTarget.id;
			const id = eventId.split("-")[1];
			const container = document.querySelector(".freezer__settings");
			const hasChild = container.querySelectorAll(".rendered");

			if (document.getElementById(`drawer-${id}-settings`)) return;
			else if(hasChild) for(const child of hasChild) child.remove();

			const htmlToInject = `
				<div id="drawer-${id}-settings" class="freezer__settings-drawer rendered">
					<div class="drawer-grid">
						<p>Do you wish to set a grid on this drawer?</p>

						<input type="radio" name="grid" value="true" id="grid-yes" checked>
						<label for="grid-yes">Yes</label>

						<input type="radio" name="grid" value="false" id="grid-no">
						<label for="grid-no">No</label>
					</div>
					<div class="drawer-content">
						<p>Define the drawer main content</p>
						<input type="text">
					</div>
				</div>

				<div class="drawer-ctrl rendered">
					<button id="save-temp-settings">Confirm</button>
				</div>
			`;

			this.btnSaveSettings = document.getElementById("save-settings");
			if (!this.btnSaveSettings.classList.contains("visible")) this.btnSaveSettings.classList.toggle("visible");

			container.insertAdjacentHTML("beforeend", htmlToInject);
			this.saveTempSettings(id);

		}
	}

	saveTempSettings(id) {
		const saveBtn = document.getElementById("save-temp-settings");
		saveBtn.addEventListener("click", eventSave.bind(this));

		if(typeof this.tempSettings !== "object") this.tempSettings = new Map();

		function eventSave() {
			const gridOptions = document.getElementsByName("grid");
			const contentValue = document.querySelector(".drawer-content > input").value;
			const childsToRemove = document.querySelectorAll(".rendered");

			const hasGrid = Array.from(gridOptions).filter(el => el.checked)[0].value === "true";
			const content = contentValue.length > 0 ? contentValue : null;

			this.tempSettings.set(id, {grid: hasGrid, content: content});

			for (const child of childsToRemove) child.remove();
			this.btnSaveSettings.classList.toggle("visible");


			this.displaySettings(id);
		}
	}

	displaySettings(id) {
		const drawer = document.querySelector(`#drawer-${id} > .drawer__model-front`);
		let infoEl;

		if (!drawer.classList.contains("is-set")) {
			const wrap = document.querySelector(".freezer__opened");
			const infoIcon = document.createElement("i");
			infoIcon.classList.add("fas", "fa-info-circle", "icon-info");
	
			drawer.insertAdjacentElement("beforeend", infoIcon);

			infoEl = document.createElement("div");
			infoEl.classList.add("freezer__drawers-info");
			infoEl.id = `info-${id}`;


			const position = drawer.getBoundingClientRect();
			infoEl.style.top = `${position.y}px`;
			infoEl.style.left = `${position.right + 20}px`;
			wrap.appendChild(infoEl);
	
			drawer.addEventListener("mouseenter", show);
			drawer.addEventListener("mouseleave", hide);

			drawer.classList.add("is-set");

		} else {
			infoEl = document.getElementById(`info-${id}`);
		}

		infoEl.innerHTML = `<p>Grid: ${this.tempSettings.get(id).grid}</p>
		<p>Content: ${this.tempSettings.get(id).content}</p>`;

		function show() {
			infoEl.style.display = "inline-block";
		}
		function hide() {
			infoEl.style.display = "none";
		}


	}

	removeDrawer() {
		const dragTarget = document.querySelector(".remove");

		dragTarget.addEventListener("dragover", dragOver);
		dragTarget.addEventListener("drop", remove.bind(this));

		function dragOver(e) {
			e.preventDefault()
		};
		function remove(e) {
			this.eventRemoveDrawer.remove();
		};
	}

	refreshIds() {

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