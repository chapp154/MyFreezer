import firebase from 'firebase/app';
import "firebase/auth";
import {db} from "../db-main";


export const userLogged = () => {

  var user = firebase.auth().currentUser;

  if (user) {
    return user;
  } else {
    return "no user";
  }
    
}
