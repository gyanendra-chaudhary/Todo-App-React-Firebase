import firebase from "firebase";

 const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyD9jstA0Mxkm3Mzrf_VCMn1w7TcwWGAH50",
    authDomain: "todo-app-92cfc.firebaseapp.com",
    projectId: "todo-app-92cfc",
    storageBucket: "todo-app-92cfc.appspot.com",
    messagingSenderId: "80943405653",
    appId: "1:80943405653:web:e6f9695ebebfc676e452dc",
    measurementId: "G-5EG41ZE0WV"


 });
 const  db = firebaseApp.firestore();
 export default db;