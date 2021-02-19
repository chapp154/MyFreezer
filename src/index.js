// Inject Sass
import "../style/sass/main.scss";

import {loginInit} from "./app/app";
import '@fortawesome/fontawesome-free/js/all';
import {userSigned} from "./firebase/auth/login-state";
import {renderUserUi} from "./components/render-user-ui";



const init = (() => {

    const userSign = userSigned();

    if (userSigned()[0]) {
        renderUserUi();
    } else {
       // loginInit();
    }
})();
