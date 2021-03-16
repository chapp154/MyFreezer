// Inject Sass
import "../style/sass/main.scss";

import firebase from 'firebase/app';
import "firebase/auth";

import '@fortawesome/fontawesome-free/js/all';
import {renderUi} from "./components/render-ui";
import {loginInit} from "./app/app";
import {userInit} from "./app/user-control";
import { loading } from "./tools/loading";


const init = (() => {

    firebase.auth().onIdTokenChanged(async (user) => { // need to be async???
        loading.start();

        if (user) {

            await renderUi("user");
            const loadUser = await userInit(user);
            loadUser.run();

        } else {
            await renderUi("login");
            loginInit();
        }
    });
 

})();






