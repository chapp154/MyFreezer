import { loading } from "../tools/loading";
import { UserUI } from "../user/user-ui";
import { UserModelSettings, UserGlobal } from "../user/user-model";



export const controller = {

	getGlobal: "",
	setGlobal: function (globalData) { this.getGlobal = globalData },

	saveFreezer: function (mapData, numberOfDrawers) {
		const saveFreezer = new UserModelSettings;
		saveFreezer.saveFreezerSettings(mapData, numberOfDrawers, this.getGlobal);
	}


}


export const userInit = (user) => {

	const model = new UserModelSettings(user);
	const view = new UserUI(user);

	view.signOutBtn();
	view.greeting();
	view.simulateMenuHover();

	return new Promise(resolve => {
		resolve(
			{
				async run() {

					await model.userHasFreezer();

					try { controller.setGlobal(await new UserGlobal(user).globalData()) }
					catch (error) { throw new Error("Error initiazing user") };


					view.displayFreezer(controller.getGlobal);
				},
			}
		)
	})
}


