import {loading} from "../tools/loading";
import { UserUI } from "../user/user-ui";
import{ UserModel, UserGlobal } from "../user/user-model";



const controller = {

	setUserDb: function(globalData) {this.getData = globalData},
	
}


export const userInit = async (user) => {

	controller.setUserDb(await new UserGlobal(user).globalData());

	const userIn = new UserModel(user);
	const visit = new UserUI(user);


	return {
		async run() {

			await userIn.userHasFreezer();
	
			visit.signOutBtn();
			visit.greeting();
			visit.simulateMenuHover();
			visit.displayFreezer(userIn.getSettings);
		},


	}

    	
}


