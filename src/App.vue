<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="wrapper container">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <!-- <a class="navbar-brand" href="#"> -->
          <RouterLink class="nav-link" to="/"><img src="@/assets/logo_dirty_beat.png" alt="log Dirty Beat" width="100px"></RouterLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse main-menu" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <RouterLink class="nav-link" to="#">Medias</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/news">News</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="#">Contact</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="#">A propos</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="#">Boutique</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16">
                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"/>
                  </svg>
                </RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
                </svg>
                </RouterLink>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
  <footer>
    <div class="container">
      <div class="row">
        <div class="">
          <form>
            <h3>S'inscrire à la NewsLetter</h3>
            <div class="row">
              <div class="mb-3 col">
                <label for="exampleInputEmail1" class="form-label">Nom</label>
                <input type="text" class="form-control form-control-sm" id="exampleInputPassword1">
              </div>
              <div class="mb-3 col">
                <label for="exampleInputPassword1" class="form-label">Email</label>
                <input type="text" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp">
              </div>
            <div class="mb-3 col cs-btn-container">
              <button type="submit" class="btn btn-warning btn-sm">Envoyer</button>
            </div>
          </div>
          </form>
        </div>
        <div class="footer-nav">
          <ul class="nav">
            <li class="nav-item">
              <RouterLink class="nav-link" to="#">Contact</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="#">Mentions Légales</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

  
</template>

<style scoped>
header {
  background-color: #000000;
}
header .nav-link {
  color: #ffffff;
}

header .nav-link:hover {
  color: #ffc107;
}

.main-menu {
  justify-content: center;
}
.mb-3 {
  color: white;
}
footer {
  padding:15px;
  background-color: #000000;
}
footer, 
footer .nav-link {
  color: #ffffff;
}

footer .cs-btn-container {
    display: flex;
    justify-content: start;
    align-items: end;
}

.footer-nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  } */
/* } */
</style>
