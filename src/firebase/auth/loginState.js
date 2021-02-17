import firebase from 'firebase/app';
import "firebase/auth";
import {db} from "../db-main";


export const userLogged = () => {

  return new Promise((resolve, reject) => {

    let state;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        state = user;
      } else {
        state = false;
      }
    });

    resolve(state);
  })




}
