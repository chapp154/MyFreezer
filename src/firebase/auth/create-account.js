import firebase from 'firebase/app';
import "firebase/auth";
import {db} from "../db-main";




export const createUser = (email, password) => {

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user.email;

    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // .. 
    });
}
