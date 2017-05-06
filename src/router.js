import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const HomePage = resolve => require(['pages/Home'], resolve)

const TeamPage = resolve => require(['pages/Team'], resolve)

const MediaPage = resolve => require(['pages/Media'], resolve)

const NewsletterSubscriptionPage = resolve => require(['pages/NewsletterSubscription'], resolve)

const NotFoundPage = resolve => require(['pages/NotFound'], resolve)

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
