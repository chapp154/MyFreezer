import { loading } from "../tools/loading";
import { UserUI } from "../user/user-ui";
import { UserModelSettings, UserGlobal } from "../user/user-model";
import { customClickEvent } from "../tools/customClickEvent";



export const controller = {

	getGlobal: "",
	setGlobal: function (globalData) { this.getGlobal = globalData },

	saveFreezer: async function (mapData, numberOfDrawers) {
		loading.start();
		const saveFreezer = new UserModelSettings();
		await saveFreezer.saveFreezerSettings(mapData, numberOfDrawers, this.getGlobal);
		
		const reload = new UserModelSettings();
		await reload.userHasFreezer();

		const render = new UserUI();
		render.displayFreezer(this.getGlobal);

		customClickEvent(".freezer__creator-open-head span");
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


