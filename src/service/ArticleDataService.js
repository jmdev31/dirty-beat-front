import firebase from '../firebase';

const db = firebase.ref("/articles");

class ArticleDataService {
    getAll(){
        return db;
    }

    create(article){
        return db.push(article);
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
export default new ArticleDataService();