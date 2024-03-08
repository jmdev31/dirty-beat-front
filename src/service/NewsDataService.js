import firebase from "../firebaseRealTime";
// import "firebase/firestore";

const db = firebase.ref("/news");

class NewsDataService {
    getAll(){
        return db;
    }

    create(news){
        return db.push(news);
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
export default new NewsDataService();