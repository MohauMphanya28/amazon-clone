import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiX8at8uJaaee-erTfQMI_nH3hIdUcM00",
  authDomain: "zaio--clone-96ecd.firebaseapp.com",
  projectId: "zaio--clone-96ecd",
  storageBucket: "zaio--clone-96ecd.appspot.com",
  messagingSenderId: "349502779022",
  appId: "1:349502779022:web:ed622fe88e8e904c3de3df",
  measurementId: "G-ZB83NMTPT0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
