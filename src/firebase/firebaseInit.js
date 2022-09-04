import firebase from "firebase/app" ; 
import "firebase/firestore" ; // <- needed if using firestore

// Your web app's Firebase configuration
var firebaseConfig = {
     // Your web app's Firebase configuration
    apiKey: "AIzaSyDU7umkR3oiMG-IfR3sGFCmJzFiquIqZ5o",
    authDomain: "vuejs-app-invoice.firebaseapp.com",
    projectId: "vuejs-app-invoice",
    storageBucket: "vuejs-app-invoice.appspot.com",
    messagingSenderId: "1063740506694",
    appId: "1:1063740506694:web:df732ea24a6ec042674047"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore();