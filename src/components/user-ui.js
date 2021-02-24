import firebase from 'firebase/app';
import "firebase/auth";


export class Visitor {
    constructor(user) {
        this.user = user;
        this.userID = user.uid;
        this.userName = user.displayName;
        this.userEmail = user.email;
        this.userUpdate();
        this.greeting();

    }

    signOutBtn() {
        const btn = document.querySelector("#signout");
        btn.addEventListener("click", () => {
          firebase.auth().signOut();
        });
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
}


