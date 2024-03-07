import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsView from '../views/NewsView.vue'
import AproposView from '../views/AproposView.vue'
import SeConnecterView from '../views/SeConnecterView.vue'
import authGuard from "../service/AuthGuardService";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/addproduit',
      name: 'addproduit',
      component: () => import('../components/AddProduit.vue'),
      beforeEnter: authGuard,
    },
    {
      path: "/add-cours",
      name: "add-cours",
      component: () => import("../components/AddCours.vue"),
      beforeEnter: authGuard,
    },
    {
      path: "/cours",
      component: () => import("../components/CoursList.vue"),
     beforeEnter: authGuard,
    },

    {
      path: '/news',
      name: 'news',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: NewsView
    },
    {
      path: '/apropos',
      name: 'apropos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AproposView
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/backoffice',
      name: 'backoffice',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BackOfficeView.vue')
    },
    {
      path: '/boutique',
      name: 'boutique',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BoutiqueView.vue')
    },
    {
      path: '/seconnecter',
      name: 'seconnecter',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SeConnecterView.vue')
    },
    {
      path: '/validationinscription',
      name: 'validationinscription',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ValidationInscription.vue')
    },
    {
      path: '/produitdataservice',
      name: 'produitdataservice',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../service/ProduitDataService.vue')
    }
  ]
})

export default router
