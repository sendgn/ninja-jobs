import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
import JobsView from '../views/jobs/JobsView.vue'
import JobDetailsView from '../views/jobs/JobDetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'JobsView',
    component: JobsView
  },
  {
    // :id is a Route parameter
    path: '/jobs/:id',
    name: 'JobDetailsView',
    component: JobDetailsView,
    // Accept any Route parameters as props
    props: true
  },
  // Redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // Catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
