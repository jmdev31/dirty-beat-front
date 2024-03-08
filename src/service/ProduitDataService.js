import firebase from "../firebaseRealTime";
// import "firebase/firestore";

const db = firebase.ref("/produit");

class ProduitDataService {
    getAll(){
        return db;
    }

    create(produit){
        return db.push(produit);
    }

    update(key, value){
        return db.child(key).update(value);
    }

    delete(key){
        return db.child(key).remove();
    }

    deleteAll(){
        return db.remove();
    }
}
export default new ProduitDataService();