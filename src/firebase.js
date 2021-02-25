import firebase from "firebase/app";
import database from "firebase/database";

//import * as firebase from 'firebase/firebase'
//import * as database from "firebase/database";

const config = {
    apiKey: "AIzaSyB7nBBmSFDobcYuoUpRCtUourr-fkGnSeo",
    authDomain: "exampleblog-ae78d.firebaseapp.com",
    databaseURL: "https://exampleblog-ae78d-default-rtdb.firebaseio.com",
    projectId: "exampleblog-ae78d",
    storageBucket: "exampleblog-ae78d.appspot.com",
    messagingSenderId: "925890262531",
    appId: "1:925890262531:web:e3131137e2ad3af8ad0036"
};

let firebaseCache;

export const getFirebase = () => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebase.initializeApp(config);
  firebaseCache = firebase;
  return firebase;
};
