import ArticleDataService


<template>
    <div class="vision" >
        <form>
            <div class="form-group">
                <label for="title">Titre</label>
                <input  type="text" class="form-control" id="title"/>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea class="form-control" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label><strong>Status:</strong></label>PUblié ou en attente
            </div>
        </form>
        <button  class="btn btn-outline-dark">Dépublier</button>
        <button class="btn btn-info mx-1">Publier</button>
        <button class="btn btn-danger mx-1" >Supprimer</button>
        <button type="submit" class="btn btn-success mx-1">Metre à jour</button>
        <p>{{ message }}</p>
    </div>
    <div >
        <p>Cliquez sur un article Por Favor</p>
    </div>
</template>

<script>
import ArticleDataService from "../services/ArticleDataService";
export default {
    name: 'un-article',
    props: ['article'],
    data() {
        return {
            currentArticle: null,
            message: ''
        }
    },
    watch: {
        article: function (article) {
            console.log(`watcher de article`);
            this.currentArticle = { ...article };
            this.message = '';
        },
    },
    methods: {
        updatePublished(status) {
            ArticleDataService.update(this.currentArticle.key, { published: status })
                .then(() => {
                    this.currentArticle.published = status;
                    this.message = `Le status de l'article a été update`;
                }).catch((e) => { console.log(e) });
        },
        updateArticle() {
            const data = {
                title: this.currentArticle.title,
                description: this.currentArticle.description
            };
            ArticleDataService.update(this.currentArticle.key, data)
                .then(() => {
                    this.message = `L'article a été mis à jour !'`;
                }).catch((e) => { console.log(e) });
        },
        deleteArticle() {
            ArticleDataService.delete(this.currentArticle.key)
                .then(() => {
                    this.$emit("refreshList");
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.message = "";
        this.currentArticle = { ...this.article }
    },
};
</script>

<style scoped lang="css">
</style>