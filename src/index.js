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

    firebase.auth().onIdTokenChanged(async (user) => {
        loading.start();

        if (user) {

            await renderUi("user");
            userInit(user).run();

        } else {
            await renderUi("login");
            loginInit();
        }
    });


})();






