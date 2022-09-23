
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  // Your web app's Firebase configuration
  apiKey: "AIzaSyDU7umkR3oiMG-IfR3sGFCmJzFiquIqZ5o",
  authDomain: "vuejs-app-invoice.firebaseapp.com",
  projectId: "vuejs-app-invoice",
  storageBucket: "vuejs-app-invoice.appspot.com",
  messagingSenderId: "1063740506694",
  appId: "1:1063740506694:web:df732ea24a6ec042674047"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export default app