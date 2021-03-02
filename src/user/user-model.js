import firebase from 'firebase/app';
import "firebase/firestore";
import {db} from "../firebase/db-main";
import {UserController} from "./user-control";


export class UserData {
    constructor(user) {
        this.user = user;
        this.userID = user.uid;
        this.userName = user.displayName;
        this.userEmail = user.email;
        this.userInitSettings = db.collection("users").doc(this.userID).collection("settings").doc("init-settings");

        this.userSettingsData = "";

        this.userHasFreezer();
    }

    createUserSettings() {
        return new Promise((resolve, reject) => {
            resolve(            
                this.userInitSettings.set({
                hasFreezer: false,
                numberOfFreezers: 0,
            }));
            reject(error);
        })
    }

    async userHasSettings() {
		const getSettings = await this.userInitSettings.get();
        try {
            if (!getSettings.exists) {
                await this.createUserSettings()
            };

            return new Promise((resolve, reject) => {
                resolve([true, getSettings]);
                reject([false, null]);
            })

        } catch (error) {
            console.log(error)
            return [false, null];
        }
    }

    async userHasFreezer() {
        try {
            const [userHasSettings, getSettings] = await this.userHasSettings();
            this.userSettingsData = getSettings.data();

            if (userHasSettings && !this.userSettingsData.hasFreezer) {
                //User has no freezer but has created settings 
                new UserController(this.userSettingsData);
            }   

        } catch (error) {console.log(error)};
    };


}