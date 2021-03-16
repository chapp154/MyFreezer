import {loading} from "../tools/loading";
import { UserUI } from "../user/user-ui";
import{ UserModel, UserGlobal } from "../user/user-model";



export const controller = {
	
	getGlobal: "",
	setGlobal: function(globalData) {this.getGlobal = globalData},
	
}


export const userInit = (user) => {

	const model = new UserModel(user);
	const view = new UserUI(user);

	return new Promise(resolve => {
		resolve(
			{
				async run() {
		
					await model.userHasFreezer();

					try {controller.setGlobal(await new UserGlobal(user).globalData())}
					catch (error) {throw new Error("Error initiazing user")};
			
					view.signOutBtn();
					view.greeting();
					view.simulateMenuHover();
					view.displayFreezer(controller.getGlobal);
				},
			}
		)
	})	
}


