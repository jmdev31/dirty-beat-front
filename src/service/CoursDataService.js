// import firebase from '../firebase';
// import firebase from "firebase/database";
import firebase from '../firebaseRealTime.js';


const db = firebase.ref("/cours");

class CoursDataService {
    getAll(){
        return db;
    }

    create(cours){
        return db.push(cours);
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
export default new CoursDataService();