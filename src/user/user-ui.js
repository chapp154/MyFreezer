import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import {db} from "../firebase/db-main";

import {loading} from "../tools/loading";
import {multiClass} from "../tools/multiClass";
import {renderCreator} from "../components/render-ui";
import {FreezerCreator, freezerCreator} from "../components/freezer-creator";


export class UserUI {
    constructor(user) {
        if (user) {
            this.user = user;
            this.userID = user.uid;
            this.userName = user.displayName;
            this.userEmail = user.email;
        }
    }

    signOutBtn() {
        const btns = document.querySelectorAll("#menu-item-signout");
        for (let btn of btns) {
            btn.addEventListener("click", () => {
                firebase.auth().signOut();
            });
        }
    }

    userUpdate() {
        if (this.userName === null) {
            const NameFromEmail = this.userEmail.slice(0, this.userEmail.indexOf('@'));
            let setName;

            if (confirm(`Hi ${NameFromEmail}, is this your name?`)) setName = NameFromEmail;
			else setName = prompt("Then let me know how you wish to be called.");

			setName = setName !== null ? setName : "User";

            this.user.updateProfile({
                displayName: setName,
            });
            this.userName = setName;
        }
    };

    greeting() {
        const greetingEl = document.querySelector(".greeting");
        greetingEl.textContent = `Greetings ${this.userName}`;
    }

	simulateMenuHover() {
		const menuIcons = document.querySelectorAll(".menu__items--icons li");
		const menuTextLists = document.querySelectorAll(".menu__items--text li");

		menuIcons.forEach((icon, index) => {
			icon.addEventListener("mouseenter", () => menuTextLists[index].classList.add("menu-hover-clone"));
			icon.addEventListener("mouseleave", () => menuTextLists[index].classList.remove("menu-hover-clone"));
		})
	} 

    displayFreezer(settings) {
		const newFreezerBox = document.querySelector(".freezer__creator-ctrl");

        try {
            if (settings.hasFreezer) {
                newFreezerBox.remove();
            } else {
                newFreezerBox.addEventListener("click", this.eventCreatorOpen);
            }
        } catch (error) {
            throw new Error(error);
        }

        loading.end();
    }

    async eventCreatorOpen() {

		const elBox = document.querySelector(".freezer");

		try {
			const htmlToAdd = await renderCreator();
            htmlToAdd.classList.add("animation__popup");
			elBox.insertAdjacentElement("beforeend", htmlToAdd);

			// Bcz of hoisting
			UserUI.prototype.creatorInit();
			
		} catch (error) {
			throw new Error(error);
		}
    }

	creatorInit() {
		const creator = new FreezerCreator();

		creator.closeWindow();
		creator.keepDoorOpen();
		creator.drawerDrag();
        creator.removeDrawer();
        creator.saveFreezer();
	}
}


