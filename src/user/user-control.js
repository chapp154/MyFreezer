import {loading} from "../tools/loading";


export class UserController {
    constructor(settings) {
        this.settings = settings;

        this.displayFreezer();
    }

    displayFreezer() {
        if (!this.settings.hasFreezer) {
            document.querySelector(".info__freezer").remove();
        }

        loading.end();

    }
}