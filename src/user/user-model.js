import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";
import {db} from "../firebase/db-main";
import {controller} from "../app/user-control";


export class UserModelSettings {
    constructor(user) {
		if (user) {
			this.user = user;
			this.userID = user.uid;
			this.userName = user.displayName;
			this.userEmail = user.email;
			this.dbSettingsPath = db.collection("users").doc(this.userID).collection("settings").doc("init-settings");
			this.getSettings = "";
		}


    }

    createUserSettings() {
        return new Promise((resolve, reject) => {
            resolve(            
                this.dbSettingsPath.set({
                hasFreezer: false,
                numberOfFreezers: 0,
                numberOfDrawers: {
                    first: 0,
                },

            }));
            reject(error);
        })
    }

    async userHasSettings() {
		let getSettings = await this.dbSettingsPath.get();
        try {
            if (!getSettings.exists) {
                await this.createUserSettings();
            };
            getSettings = await this.dbSettingsPath.get();
            this.getSettings = getSettings.data();

            return new Promise((resolve, reject) => {
                resolve(true);
            })

        } catch (error) {
            return false;
        }
    }

    async userHasFreezer() {
        try {
            const userHasSettings = await this.userHasSettings();

            if (userHasSettings && !this.getSettings.hasFreezer) {
                //User has no freezer but has created settings 
                return new Promise(resolve => {
                    resolve(false)
                })
            }   

        } catch (error) {throw new Error(error);};
    };

	freezerSetup() {
		
	}
}

export class UserGlobal extends UserModelSettings {
	constructor(user) {
		super(user);

	}

	globalData() {

		return new Promise(async (resolve, reject) => {

			if (await firebase.auth().currentUser.getIdToken() === await this.user.getIdToken()) {

				const settingsRequest = await this.dbSettingsPath.get();
				const settingsResult = settingsRequest.data();
				resolve(settingsResult);
				return;
			}

			reject("Error initiazing user");
		})
	}

}