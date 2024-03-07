<script setup>
// import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<template>
<Header v-if="!isPageWithoutHeader" />
  
  <RouterView />

<Footer v-if="!isPageWithoutFooter" />
</template>



