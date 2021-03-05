import firebase from 'firebase/app';
import "firebase/firestore";
import {db} from "../firebase/db-main";


export class UserData {
    constructor(user) {
        this.user = user;
        this.userID = user.uid;
        this.userName = user.displayName;
        this.userEmail = user.email;
        this.dbSettingsPath = db.collection("users").doc(this.userID).collection("settings").doc("init-settings");
        this.getSettingsTemp = "";

    }

    set getSettings() {

        const request = this.dbSettingsPath.get();
        const data = request.data();
 
        return data;

    }

    get getSettings() {
        return this.getSettings;
    }

    createUserSettings() {
        return new Promise((resolve, reject) => {
            resolve(            
                this.dbSettingsPath.set({
                hasFreezer: false,
                numberOfFreezers: 0,
            }));
            reject(error);
        })
    }

    async userHasSettings() {
		const getSettingsTemp = await this.dbSettingsPath.get();
        try {
            if (!getSettingsTemp.exists) {
                await this.createUserSettings();
				this.getSettingsTemp = getSettingsTemp.data();
            };

            return new Promise((resolve, reject) => {
                resolve(true);
                reject(false);
            })

        } catch (error) {
            console.log(error)
            return false;
        }
    }

    async userHasFreezer() {
        try {
            const userHasSettings = await this.userHasSettings();

            if (userHasSettings && !this.getSettingsTemp.hasFreezer) {
                //User has no freezer but has created settings 
                return false;
            }   

        } catch (error) {throw new Error(error);};
    };


}