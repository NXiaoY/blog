import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  }, {
    path: '/home',
    component: () => import('../views/Home/Home')
  }, {
    path: '/blog/new',
    component: () => import('../views/Home/components/Add')
  }, {
    path: '/blog/details',
    component: () => import('../views/Details/Details')
  }, {
    path: '/login',
    component: () => import('../views/Login/Login')
  }, {
    path: '/pblog',
    component: () => import('../views/Personage/Personage')
  }, {
    path: '/blog/edit',
    component: () => import('../views/Details/DetailsEdit')
  }
]

const router = new VueRouter({
  routes
})

export default router
