import {loading} from "../tools/loading";
import { UserUI } from "../user/user-ui";
import{ UserModel } from "../user/user-model";



const controll = function() {
	let dataStorage;

	const setUserDb = (globalData) => dataStorage = globalData;

	return {	
		getData: dataStorage,
	}
}


export const userInit = (user) => {

	const userIn = new UserModel(user);
	const visit = new UserUI(user);


	return {
		async run() {

			await userIn.userHasFreezer();
	
			visit.signOutBtn();
			visit.greeting();
			visit.simulateMenuHover();
			visit.displayFreezer(userIn.getSettings, controll().buildFreezer);
		},


	}

    	
}


