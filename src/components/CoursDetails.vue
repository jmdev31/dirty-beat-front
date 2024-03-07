<template>
    <div v-if="currentCours" class="edit-form border border-light m-2 p-2">
      <h4>Cours Détails</h4>
      <form>
        <div class="form-group">
          <label for="title">Titre</label>
          <input type="text" class="form-control" id="title" v-model="currentCours.title" />
        </div>
  
        <div class="form-group">
          <label for="description">Description</label>
          <input type="text" class="form-control" id="description" v-model="currentCours.description" />
        </div>
  
        <div class="form-group">
          <label for="description">Logo</label>
          <input type="text" class="form-control" id="description" v-model="currentCours.logo" />
        </div>
  
        <div class="form-group">
          <label><strong>Status:</strong></label>
          {{ currentCours.published ? "Publié" : "En attente" }}
        </div>
      </form>
  
      <button class="badge badge-primary me-2" v-if="currentCours.published" @click="updatePublished(false)">
        Dépublier
      </button>
      <button v-else class="badge badge-primary me-2" @click="updatePublished(true)">
        Publier
      </button>
  
      <button class="badge badge-danger me-2" @click="deleteCours">
        Delete
      </button>
  
      <button type="submit" class="badge badge-success" @click="updateCours">
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
  import CoursDataService from "../service/CoursDataService";
  
  export default {
    name: "cours-details",
    props: ["cours"],
    data() {
      return {
        currentCours: null,
        message: "",
      };
    },
    watch: {
      cours: function (cours) {
        this.currentCours = { ...cours };
        this.message = "";
      },
    },
    methods: {
      updatePublished(status) {
        CoursDataService.update(this.currentCours.key, {
          published: status,
        })
          .then(() => {
            this.currentCours.published = status;
            this.message = "Le status MAJ avec succès!";
          })
          .catch((e) => {
            console.log(e);
          });
      },
  
      updateCours() {
        const data = {
          title: this.currentCours.title,
          description: this.currentCours.description,
          logo: this.currentCours.logo,
        };
  
        CoursDataService.update(this.currentCours.key, data)
          .then(() => {
            this.message = "Article MAJ avec succès!";
          })
          .catch((e) => {
            console.log(e);
          });
      },
  
      deleteCours() {
        CoursDataService.delete(this.currentCours.key)
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
      this.currentCours = { ...this.cours }
    },
  };
  </script>