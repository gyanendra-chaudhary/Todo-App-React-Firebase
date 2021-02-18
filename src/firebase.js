import firebase from "firebase";

 const firebaseApp = firebase.initializeApp({
  //your config code here

    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
// end

 });
 const  db = firebaseApp.firestore();
 export default db;
