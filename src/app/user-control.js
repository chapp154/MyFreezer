import {loading} from "../tools/loading";
import { Visitor } from "../user/user-ui";
import{ UserData } from "../user/user-model";



export const userInit = (user) => {

	const userIn = new UserData(user);  
	userIn.userHasFreezer();

    const visit = new Visitor(user);
    visit.signOutBtn();
    visit.greeting();
    visit.simulateMenuHover();
    visit.displayFreezer(userIn.getSettings);

    	
}

const controll = {

	getSettings: function(settings) {return settings},


}