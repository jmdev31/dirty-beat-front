import firebase from "../config/firebaseRealTime";
const db = firebase.ref("/feed");
class FeedDataService {
    getAll() {
        return db;
    }

    create(feed) {
        return db.push(feed);
    }

    update(key, value) {
        return db.child(key).update(value);
    }

    delete(key) {
        return db.child(key).remove();
    }

    deleteAll() {
        return db.remove();
    }
}
export default new FeedDataService();
