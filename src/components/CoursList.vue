<template>
    <div class="list row bg-warning">
        <div class="col-md-6">
            <h4>Cours List</h4>
            <ul class="list-group">
                <li class="list-group-item" :class="{ active: index == currentIndex }" v-for="(cours, index) in cours"
                    :key="index" @click="setActiveArticle(cours, index)">
                    {{ cours.title }}
                </li>
            </ul>
            <button class="m-3 btn btn-sm btn-danger" @click="removeAllCours">Tout Suppr</button>
        </div>

        <div class="col-md-6">
            <div v-if="currentCours">
                <cours-details :cours="currentCours" @refreshList="refreshList"></cours-details>
            </div>
            <div v-else>
                <br />
                <p>Veuillez choisir un Cours...</p>
            </div>
        </div>
    </div>
</template>
    
<script>
import CoursDataService from "../services/CoursDataService";
import CoursDetails from "./CoursDetails.vue";

export default {
    name: "cours-list",
    components: { CoursDetails },
    data() {
        return {
            cours: [],
            currentCours: null,
            currentIndex: -1
        };
    },
    methods: {
        onDataChange(items) {
            let _cours = [];

            items.forEach((item) => {
                let key = item.key;
                let data = item.val();
                _cours.push({
                    key: key,
                    title: data.title,
                    description: data.description,
                    logo:data.logo,
                    published: data.published,
                });
            });

            this.cours = _cours;
        },
        refreshList() {
            this.currentCours = null;
            this.currentIndex = -1;
        },

        setActiveArticle(article, index) {
            this.currentCours = article;
            this.currentIndex = index;
        },

        removeAllCours() {
            CoursDataService.deleteAll()
                .then(() => {
                    this.refreshList();
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        CoursDataService.getAll().on("value", this.onDataChange);
    },
    beforeUnmount() {
        CoursDataService.getAll().off("value", this.onDataChange);
    }
}
</script>