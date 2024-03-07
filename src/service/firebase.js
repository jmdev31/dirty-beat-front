import firebase from 'firebase/app';
import "firebase/database";
import "firebase/firestore";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

export const firebaseConfig = {
  apiKey: "AIzaSyA2E9tUHRDlfJWdY71YOgAH54vje87y_j0",
  authDomain: "dirty-beat-auth-2802.firebaseapp.com",
  databaseURL: "https://dirty-beat-auth-2802-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dirty-beat-auth-2802",
  storageBucket: "dirty-beat-auth-2802.appspot.com",
  messagingSenderId: "921605813147",
  appId: "1:921605813147:web:41232c5fca0a3841a8673e"
};


// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database()