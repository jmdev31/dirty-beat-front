import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
//import firebase from "firebase";

const app = createApp(App)
// firebase.initializeApp(firebaseConfig)
app.use(router)

app.mount('#app')
