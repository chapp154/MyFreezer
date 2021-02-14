import firebase from 'firebase/app';
import "firebase/firestore";

// Firestore config
var firebaseConfig = {
    apiKey: "AIzaSyBt-UzvZGoX8yWnxRMvaxLBpyiqGp2Sxgw",
    authDomain: "myfreezer-23bbd.firebaseapp.com",
    projectId: "myfreezer-23bbd",
    storageBucket: "myfreezer-23bbd.appspot.com",
    messagingSenderId: "518193349323",
    appId: "1:518193349323:web:1cde7fa939b6bf45a3114e",
    measurementId: "G-356FSCB98Z"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
