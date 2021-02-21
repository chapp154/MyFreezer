// Inject Sass
import "../style/sass/main.scss";

import firebase from 'firebase/app';
import "firebase/auth";

import {loginInit} from "./app/app";
import '@fortawesome/fontawesome-free/js/all';
import {userSigned} from "./firebase/auth/login-state";
import {renderUi} from "./components/render-user-ui";
import {addFormHandler} from "./app/app";


const init = (() => {

  firebase.auth().onIdTokenChanged(async (user) => {

    if (user) {

      await renderUi("user");

      const btn = document.querySelector("#logout");
      btn.addEventListener("click", () => {
        firebase.auth().signOut().then((result) => {
          return result;
        })
      });

    } else {

      await renderUi("login");
      addFormHandler();
      loginInit();
    }
  });


})();






