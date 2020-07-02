import firebase from "firebase/app";
import 'firebase/firestore';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCozKYXza9IGwdVkdbBtIZATntWe_v-SIA",
    authDomain: "react-urlshort.firebaseapp.com",
    databaseURL: "https://react-urlshort.firebaseio.com",
    projectId: "react-urlshort",
    storageBucket: "react-urlshort.appspot.com",
    messagingSenderId: "358599520778",
    appId: "1:358599520778:web:afb3dba7550610f5f1e5f3"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();