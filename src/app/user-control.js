import {loading} from "../tools/loading";
import { UserUI } from "../user/user-ui";
import{ UserData } from "../user/user-model";



export const userInit = async (user) => {

	const userIn = new UserData(user);
	await userIn.userHasFreezer();

    const visit = new UserUI(user);
    visit.signOutBtn();
    visit.greeting();
    visit.simulateMenuHover();
    visit.displayFreezer(userIn.getSettings, controll.buildFreezer);
    	
}

const controll = {

	buildFreezer() {
        const freezerBuilder = new UserUI();
        freezerBuilder.openNewFreezerWindow();

        return;
    },


}