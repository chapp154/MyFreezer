import {loading} from "../tools/loading";
import { UserUI } from "../user/user-ui";
import{ UserModel, UserGlobal } from "../user/user-model";



export const controller = {
	
	getGlobal: "",
	setGlobal: function(globalData) {this.getGlobal = globalData},
	
}


export const userInit = async (user) => {

	controller.setGlobal(await new UserGlobal(user).globalData());

	const model = new UserModel(user);
	const view = new UserUI(user);

	return new Promise(resolve => {
		resolve(
			{
				async run() {
		
					await model.userHasFreezer();
			
					view.signOutBtn();
					view.greeting();
					view.simulateMenuHover();
					view.displayFreezer(model.getSettings);
				},
		
		
			}
		)
	})

    	
}


