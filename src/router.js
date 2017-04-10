import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const HomePage = resolve => {
  require.ensure(['pages/Home'], () => {
    resolve(require('pages/Home'))
  })
}

const TeamPage = resolve => {
  require.ensure(['pages/Team'], () => {
    resolve(require('pages/Team'))
  })
}

const NotFoundPage = resolve => {
  require.ensure(['pages/NotFound'], () => {
    resolve(require('pages/NotFound'))
  })
}

export const routes = [
  { path: '/', name: 'Home', component: HomePage, showInNav: true },
  { path: '/team', name: 'Team', component: TeamPage, showInNav: true },
  { path: '*', component: NotFoundPage, showInNav: true }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.PUBLIC_PATH,
  linkActiveClass: 'active', // for bootstrap
  scrollBehavior (to, from, savedPosition) {
    return savedPosition ? savedPosition : { x: 0, y: 0 }
  },
  routes
})
