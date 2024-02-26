import firebase from "firebase/app";
import "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAliFiLVZ-5hXtG2beHybcGeHzhkkQ01_8",
  authDomain: "authemejer.firebaseapp.com",
  databaseURL: "https://authemejer-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "authemejer",
  storageBucket: "authemejer.appspot.com",
  messagingSenderId: "139829906148",
  appId: "1:139829906148:web:5621d6e94f788280003af1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.database();