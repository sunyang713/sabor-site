import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const HomePage = resolve => require(['pages/Home'], resolve)

const AboutPage = resolve => require(['pages/About'], resolve)

const TeamPage = resolve => require(['pages/Team'], resolve)

const JoinPage = resolve => require(['pages/Join'], resolve)

const MediaPage = resolve => require(['pages/Media'], resolve)

const NewsletterSubscriptionPage = resolve => require(['pages/NewsletterSubscription'], resolve)

const NotFoundPage = resolve => require(['pages/NotFound'], resolve)

export const routes = [
  { path: '/', name: 'Home', component: HomePage, showInNav: true },
  { path: '/about', name: 'About', component: AboutPage, showInNav: false },
  { path: '/team', name: 'Team', component: TeamPage, showInNav: true },
  { path: '/join', name: 'Join', component: JoinPage, showInNav: true },
  { path: '/media', name: 'Media', component: MediaPage, showInNav: true },
  { path: '/subscribe', name: 'Newsletter Subscription', component: NewsletterSubscriptionPage, showInNav: false },
  { path: '*', component: NotFoundPage, showInNav: true }
]

export default new VueRouter({
  base: process.env.PUBLIC_PATH,
  mode: 'history',
  linkActiveClass: 'active', // for bootstrap
  scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 },
  routes
})
