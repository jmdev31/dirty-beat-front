<script setup>
import News from '../components/News.vue'
</script>
<template>
  <div class="news">
    <h1></h1>
    <div class="container">
      <img src="@/assets/header_page_news.jpg" alt="headerpage news">
    </div>
  </div>
  <News/>
</template>

<style>
.news {
  background-color: #000000;
}
.news .container img {
  width: 100%;
}
</style>
