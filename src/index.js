// Inject Sass
import "../style/sass/main.scss";

import firebase from 'firebase/app';
import "firebase/auth";

import '@fortawesome/fontawesome-free/js/all';
import {renderUi} from "./components/render-ui";
import {loginInit} from "./app/app";
import {userInit} from "./app/app";
import { LargeLoading } from "./tools/loading";


const init = (() => {

    firebase.auth().onIdTokenChanged(async (user) => {
        if (user) {
            await renderUi("user");
            await userInit(user);

        } else {
            await renderUi("login");
            loginInit();
        }
    });


})();






