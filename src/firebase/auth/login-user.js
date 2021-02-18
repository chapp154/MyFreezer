import firebase from 'firebase/app';
import "firebase/auth";
import {db} from "../db-main";



export const loginUser = (email, password) => {

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      
      var user = userCredential.user;
      return user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}
