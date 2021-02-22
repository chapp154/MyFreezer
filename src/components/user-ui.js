import firebase from 'firebase/app';
import "firebase/auth";


export class Visitor {
    constructor() {
        this.user = firebase.auth().getIdToken();

    }

    signOutBtn() {
        const btn = document.querySelector("#signout");
        btn.addEventListener("click", () => {
          firebase.auth().signOut();
        });
    }
}


