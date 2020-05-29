import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { transitionName: `slide` }
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import('../views/Experience.vue'),
    meta: { transitionName: `slide` }
  },
  {
    path: '/education',
    name: 'Education',
    component: () => import('../views/Education.vue'),
    meta: { transitionName: `slide` }
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('../views/Skill.vue'),
    meta: { transitionName: `slide` }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Project.vue'),
    meta: { transitionName: `slide` }
  },
  {
    path: '/interests',
    name: 'Interests',
    component: () => import('../views/Interest.vue'),
    meta: { transitionName: `slide` }
  },
  {
    path: '**',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
