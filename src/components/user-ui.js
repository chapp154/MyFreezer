import firebase from 'firebase/app';
import "firebase/auth";


export class Visitor {
    constructor(user) {
        this.user = user;
        this.userID = user.uid;
        this.userName = user.displayName;
        this.userEmail = user.email;
        this.userUpdate();

    }

    signOutBtn() {
        const btn = document.querySelector("#signout");
        btn.addEventListener("click", () => {
          firebase.auth().signOut();
        });
    }

    async userUpdate() {
        if (this.userName === null) {
            await this.user.updateProfile({
                displayName: this.userEmail.slice(0, this.userEmail.indexOf('@'))
            });
            console.log(this.userName);
        }
    }
}


