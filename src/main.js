import { createApp } from "vue";
import App from "./App.vue";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { firebaseConfig } from '../src/firebaseConfig.js'; // Importez la configuration Firebase
import router from "./router";
import firebase from "firebase";
    
firebase.initializeApp(firebaseConfig);
createApp(App).use(router).mount("#app");