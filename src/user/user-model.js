import firebase from 'firebase/app';
import "firebase/firestore";
import {db} from "../firebase/db-main";


export class UserData {
    constructor(user) {
        this.user = user;
        this.userID = user.uid;
        this.userName = user.displayName;
        this.userEmail = user.email;
    }

    createUserSettings() {
        return new Promise((resolve, reject) => {
            resolve(            
                db.collection("users").doc(this.userID).set({
                hasFreezer: false,
                numberOfFreezers: 0,
            }));
            reject(error);
        })
    }

    userHasSettings() {
        
    }


}