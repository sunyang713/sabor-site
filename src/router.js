import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const HomePage = resolve => require.ensure(
  ['pages/Home'],
  () => resolve(require('pages/Home'))
)

const TeamPage = resolve => require.ensure(
  ['pages/Team'],
  () => resolve(require('pages/Team'))
)

const MediaPage = resolve => require.ensure(
  ['pages/Media'],
  () => resolve(require('pages/Media'))
)

const NewsletterSubscriptionPage = resolve => require.ensure(
  ['pages/NewsletterSubscription'],
  () => resolve(require('pages/NewsletterSubscription'))
)

const NotFoundPage = resolve => require.ensure(
  ['pages/NotFound'],
  () => resolve(require('pages/NotFound'))
)

export const routes = [
  { path: '/', name: 'Home', component: HomePage, showInNav: true },
  { path: '/team', name: 'Team', component: TeamPage, showInNav: true },
  { path: '/media', name: 'Media', component: MediaPage, showInNav: true },
  { path: '/subscribe', name: 'Newsletter Subscription', component: NewsletterSubscriptionPage, showInNav: false },
  { path: '*', component: NotFoundPage, showInNav: true }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.PUBLIC_PATH,
  linkActiveClass: 'active', // for bootstrap
  scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 },
  routes
})
