import firebase from 'firebase/app';
import "firebase/auth";
import {db} from "../db-main";



export const loginUser = (email, password) => {

  return new Promise((resolve, reject) => {
    resolve(firebase.auth().signInWithEmailAndPassword(email, password));
    reject(error);
  })
}
