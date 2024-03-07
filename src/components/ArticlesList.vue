<template>
    <div class="list row bg-info">
        <div class="col-md-6">
            <h4>Articles List</h4>
            <ul class="list-group">
                <li class="list-group-item" :class="{ active: index == currentIndex }" v-for="(article, index) in articles" :key="index" @click="setActiveArticle(article, index)">
                {{ article.title }}
                </li>
            </ul>
            <button class="m-3 btn btn-sm btn-danger" @click="removeAllArticles">Tout Suppr</button>
        </div>
    
        <div class="col-md-6">
            <div v-if="currentArticle">
                <article-details :article="currentArticle" @refreshList="refreshList"></article-details>
            </div>
            <div v-else>
                <br />
                <p>Veuillez choisir un Article...</p>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    import ArticleDataService from "../services/ArticleDataService";
    import ArticleDetails from "./ArticlesDetails.vue";
    
    export default {
    name: "articles-list",
    components: { ArticleDetails },
    data() {
        return {
        articles: [],
        currentArticle: null,
        currentIndex: -1
        };
    },
    methods: {
        onDataChange(items) {
        let _articles = [];
    
        items.forEach((item) => {
            let key = item.key;
            let data = item.val();
            _articles.push({
            key: key,
            title: data.title,
            description: data.description,
            img: data.img,
            published: data.published,
            });
        });
    
        this.articles = _articles;
        },
            refreshList() {
        this.currentArticle = null;
        this.currentIndex = -1;
        },
    
        setActiveArticle(article, index) {
        this.currentArticle = article;
        this.currentIndex = index;
        },
    
        removeAllArticles() {
        ArticleDataService.deleteAll()
        .then(() => {
        this.refreshList();
        })
        .catch((e) => {
        console.log(e);
        });
        },
    },
        mounted() {
        ArticleDataService.getAll().on("value", this.onDataChange);
      },
      beforeUnmount() {
        ArticleDataService.getAll().off("value", this.onDataChange);
      }
    }
    </script>