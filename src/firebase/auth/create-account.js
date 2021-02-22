import firebase from 'firebase/app';
import "firebase/auth";
import {db} from "../db-main";




export const createUser = (email, password) => {

  return new Promise((resolve, reject) => {
    resolve(firebase.auth().createUserWithEmailAndPassword(email, password));    
    reject(error);

  })
}