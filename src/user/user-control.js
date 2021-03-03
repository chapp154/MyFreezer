import {loading} from "../tools/loading";
import { Visitor } from "./user-ui";


export class UserController {
    constructor(settings) {
        this.settings = settings;

        this.displayFreezer();
    }

    displayFreezer() {
		const newFreezerBox = document.querySelector(".info__freezer");

        if (this.settings.hasFreezer) {
            newFreezerBox.remove();
        } else {
			newFreezerBox.addEventListener("click", Visitor.openAddFreezerWindow);
		}

        loading.end();

    }
}