<template>
    <div v-if="currentArticle" class="edit-form border border-primary m-2 p-2">
      <h4>Article Détails</h4>
      <form>
        <div class="form-group">
          <label for="title">Titre</label>
          <input type="text" class="form-control" id="title" v-model="currentArticle.title" />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input type="text" class="form-control" id="description" v-model="currentArticle.description" />
        </div>
        <div class="form-group">
          <label for="description">img</label>
          <input type="text" class="form-control" id="description" v-model="currentArticle.img" />
        </div>
        <div class="form-group">
          <label><strong>Status:</strong></label>
          {{ currentArticle.published ? "Publié" : "En attente" }}
        </div>
      </form>
  
      <button class="badge badge-primary me-2" v-if="currentArticle.published" @click="updatePublished(false)">
        Dépublier
      </button>
      <button v-else class="badge badge-primary me-2" @click="updatePublished(true)">
        Publier
      </button>
  
      <button class="badge badge-danger me-2" @click="deleteArticle">
        Delete
      </button>
  
      <button type="submit" class="badge badge-success" @click="updateArticle">
        Update
      </button>
      <p>{{ message }}</p>
    </div>
  
    <div v-else>
      <br />
      <p>Cliquez sur un article Por Favor</p>
    </div>
  </template>
    
  <script>
  import ArticleDataService from "../services/ArticleDataService";
  
  export default {
    name: "article-details",
    props: ["article"],
    data() {
      return {
        currentArticle: null,
        message: "",
      };
    },
    watch: {
      article: function (article) {
        this.currentArticle = { ...article };
        this.message = "";
      },
    },
    methods: {
      updatePublished(status) {
        ArticleDataService.update(this.currentArticle.key, {
          published: status,
        })
          .then(() => {
            this.currentArticle.published = status;
            this.message = "Le status MAJ avec succès!";
          })
          .catch((e) => {
            console.log(e);
          });
      },
  
      updateArticle() {
        const data = {
          title: this.currentArticle.title,
          description: this.currentArticle.description,
          img: this.currentArticle.img
        };
  
        ArticleDataService.update(this.currentArticle.key, data)
          .then(() => {
            this.message = "Article MAJ avec succès!";
          })
          .catch((e) => {
            console.log(e);
          });
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