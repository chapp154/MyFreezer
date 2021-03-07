import {loading} from "../tools/loading";
import { UserUI } from "../user/user-ui";
import{ UserData } from "../user/user-model";


export const global = {
	user: "",
	state: "",
	access: {

	}
}

export class Global {
	constructor() {

	}

}

const controll = function() {


	return {	
	
	}
}


export const userInit = (user) => {

	const userIn = new UserData(user);
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


