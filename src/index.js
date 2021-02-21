// Inject Sass
import "../style/sass/main.scss";

import firebase from 'firebase/app';
import "firebase/auth";

import '@fortawesome/fontawesome-free/js/all';
import {renderUi} from "./components/render-user-ui";
import {loginInit} from "./app/app";


const init = (() => {

  firebase.auth().onIdTokenChanged(async (user) => {

    if (user) {

      await renderUi("user");

      const btn = document.querySelector("#logout");
      btn.addEventListener("click", () => {
        firebase.auth().signOut();
      });

    } else {

      await renderUi("login");
      loginInit();
    }
  });


})();






