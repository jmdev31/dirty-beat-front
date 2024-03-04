<template>
	<header>
    <div class="wrapper container">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <!-- <a class="navbar-brand" href="#"> -->
          <RouterLink class="nav-link" to="/">
			<img src="@/assets/logo_dirty_beat.png" alt="log Dirty Beat" width="100px">
          </RouterLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse main-menu" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <RouterLink class="nav-link" to="/news">News</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/apropos">A propos</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/boutique">Boutique</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket"
                    viewBox="0 0 16 16">
                    <path
                      d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5" />
                  </svg>
                </RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/seconnecter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person"
                    viewBox="0 0 16 16">
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
                  
                </RouterLink>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
	</header>
</template>

<style>
header {
	background-color: #000000;
  }
  header .nav-link {
	color: #ffffff;
  }
</style>