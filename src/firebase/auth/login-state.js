import firebase from 'firebase/app';
import "firebase/auth";
import {db} from "../db-main";


export const userSigned = () => {

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;

      return [true, uid];

    } else {
      

      return [false];
    }
  });
    
}
