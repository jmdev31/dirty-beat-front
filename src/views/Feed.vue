<template>
    <!-- Contenu principal -->
    <div class="container mt-4">
      <div class="row">
        <div class="col-lg-8">
                <!-- Zone de publication -->
          <add-feed></add-feed>
          <!-- Flux de publication -->
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Mon Flux</h5>
    
              <!-- Publication 1 VFOOOOR -->
              <div v-for="(oneFeed, index) in feeds" :key="index" class="mb-3">
                <h6 class="card-subtitle mb-2 text-muted">{{user.uid}} - 2 heures</h6>
                <p class="card-text">{{ oneFeed.txt }}</p>
              </div>
    
            </div>
          </div>
        </div>
    
        <!-- Barre latérale -->
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Suggestions</h5>
    
              <!-- Suggestions d'amis -->
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Ami 1</li>
                <li class="list-group-item">Ami 2</li>
                <li class="list-group-item">Ami 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </template>
    
    <script setup>
    import firebase from 'firebase'
    import { useRouter } from 'vue-router'
    import { onMounted, onBeforeUnmount,ref } from 'vue'
    import AddFeed from '../components/AddFeed.vue';
    import FeedDataService from '../services/FeedDataService';
    
    const router = useRouter();
    // Dès qu'on arrive sur le component (onMounted) on check si le user est connecté sinon go Accueil
    const authListener = firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
        // not logged in (A terme trouver un truc plus sexy qu'une Alerte ???)
        alert('Vous devez être connecté pour voir ceci. redirection à la home page')
        router.push('/')
      }
    });
    const user = firebase.auth().currentUser;
    let feeds = ref([])
    
    const onDataChange = (items) => {
        let _feeds = [];
    
        items.forEach((item) => {
            let key = item.key;
            let data = item.val();
            _feeds.push({
                key: key,
                txt: data.txt,
                author: user.uid,
                logo:data.logo,
                published: data.published,
            });
        });
        feeds.value = _feeds;
    };
    onMounted(() => {
      authListener();
      FeedDataService.getAll().on("value", onDataChange);
    
    });
    onBeforeUnmount(() => {
      // clear up listener
      authListener();
      FeedDataService.getAll().off("value", onDataChange);
    
    })
    </script>
    
    <style scoped lang="css"></style>