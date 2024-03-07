// router.js

import firebase from "firebase/app";
import "firebase/auth";

const authGuard =async (to, from, next) => {
    console.log('authGuard');
    const user = await new Promise(resolve=>{
      const unsubscribe = firebase.auth().onAuthStateChanged(user=>{
        unsubscribe();
        resolve(user)
      })
    });

    if (!user) {
      // L'utilisateur n'est pas connecté, redirigez-le vers la page register
      alert(`AUTHGUARD
            Vous devez être connecté pour voir ceci. 
            Redirection à la page de connexion.`);
      next("/sign-in");
    } else {
      // L'utilisateur est connecté, autorisez la navigation
      next();
    }
};

export default authGuard;
