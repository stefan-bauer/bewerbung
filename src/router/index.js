import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/en",
    name: "English",
    props: { language: 'en' },
    component: () =>
      import(/* webpackChunkName: "about" */ "../document/document.vue")
  },
  {
    path: "/de",
    name: "Deutsch",
    props: { language: 'de' },
    component: () =>
      import(/* webpackChunkName: "about" */ "../document/document.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
