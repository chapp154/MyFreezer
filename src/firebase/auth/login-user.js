import firebase from 'firebase/app';
import "firebase/auth";
import {db} from "../db-main";
import {getLoginInputData} from "../../components/login-ui";




export const loginUser = () => {
  const [email, password] = getLoginInputData();

  return new Promise((resolve, reject) => {
    resolve(firebase.auth().signInWithEmailAndPassword(email, password));
    reject(error);
  })
}
