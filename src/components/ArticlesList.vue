<template>
    <div class="container list row m-auto">
        <h1>Articles LIST</h1>
        <div class="col-md-6">
            <ul class="list-group">
                <li 
                class="list-group-item" :class="{ active: index === currentIndex }" 
                v-for="(unArticle, index) in articles"
                :key="index" @click="setActiveArticle(unArticle, index)">{{ unArticle.title }}</li>
            </ul>
            <button @click="removeAllArticles" class="m-3 btn btn-sm btn-danger">Tout Suppr.</button>
        </div>
        <div class="col-md-6">
            <div v-if="currentArticle">
                <article-details :article="currentArticle" @refreshList="refreshList"></article-details>
            </div>
            <div v-else>
                <p>Veuillez selectionner un article.</p>
            </div>
        </div>
    </div>
</template>

<script lang='js'>
import ArticleDataService from "../services/ArticleDataService";
import ArticleDetails from "./Article.vue";
export default{
    name: 'articles-list',
    components:{ ArticleDetails},
    data(){
        return{
            articles: [],
            currentArticle: null,
            currentIndex: -1
        }
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
                published: data.published,
                });
            });
            this.articles = _articles;
        },
        refreshList(){
            this.currentArticle = null;
            this.currentIndex = -1;
        },
        setActiveArticle(article, index){
            this.currentArticle = article;
            this.currentIndex = index;
        },
        removeAllArticles(){
            ArticleDataService.deleteAll()
            .then(()=>{
                this.refreshList();
            })
            .catch((e)=>console.log(e));
        }
    },
    mounted(){
        ArticleDataService.getAll().on('value', this.onDataChange)
    },
    beforeUnmount(){
        ArticleDataService.getAll().off('value', this.onDataChange)
    }
}
</script>

<style scoped lang="css">
</style>