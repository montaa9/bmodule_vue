import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '@/views/Register.vue'
import Articles from '@/views/Articles.vue'
import AddArticle from '@/views/AddArticle.vue'
import EditArticles from '@/views/EditArticles.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/articles',
    name: 'articles',
    component: Articles
  },
  {
    path: '/articles/create',
    name: 'articles-create',
    component: AddArticle
  },
  {
    path: '/articles/:id',
    name: 'articles-update',
    component: EditArticles,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //   }
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
