<template>
    <div class="list row bg-warning">
        <div class="col-md-6">
            <h4>Cours List</h4>
            <ul class="list-group">
                <li class="list-group-item" :class="{ active: index == currentIndex }" v-for="(news, index) in news"
                    :key="index" @click="setActiveNews(news, index)">
                    {{ news.title }}
                </li>
            </ul>
            <button class="m-3 btn btn-sm btn-danger" @click="removeAllNews">Tout Suppr</button>
        </div>

        <div class="col-md-6">
            <div v-if="currentNews">
               
            </div>
            <div v-else>
                <br />
                <p>Veuillez choisir une News...</p>
            </div>
        </div>
    </div>
</template>
    
<script>
import NewsDataService from "../service/NewsDataService.js";

export default {
    name: "news-list",
    components: { NewsDetails },
    data() {
        return {
            news: [],
            current: null,
            currentIndex: -1
        };
    },
    methods: {
        onDataChange(items) {
            let _news = [];

            items.forEach((item) => {
                let key = item.key;
                let data = item.val();
                _news.push({
                    key: key,
                    title: data.title,
                    description: data.description,
                    logo:data.logo,
                    published: data.published,
                });
            });

            this.news = _news;
        },
        refreshList() {
            this.currentNews = null;
            this.currentIndex = -1;
        },

        setActiveNews(news, index) {
            this.currentNews = news;
            this.currentIndex = index;
        },

        removeAllCours() {
            NewsDataService.deleteAll()
                .then(() => {
                    this.refreshList();
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        NewsDataService.getAll().on("value", this.onDataChange);
    },
    beforeUnmount() {
        NewsDataService.getAll().off("value", this.onDataChange);
    }
}
</script>