// This import loads the firebase namespace along with all its type information.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import "firebase/firestore";



// Inject Sass
import "../style/sass/main.scss";

const firebaseConfig = {
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

  const db = firebase.firestore();


const fn = async () => {

    const prom = await db.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })

    console.log(prom.id)

}

fn();
