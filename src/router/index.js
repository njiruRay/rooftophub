import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CafeView from '../views/CafeView.vue'
import ContactView from '../views/ContactView.vue'
import NewsEventsView from '../views/NewsEventsView.vue'

import CoworkingView from '../views/facilities/CoworkingView.vue'
import CorporateCommunalView from '../views/facilities/CorporateCommunalView.vue'
import MeetingSpaceView from '../views/facilities/MeetingSpaceView.vue'
import PodcastStudioView from '../views/facilities/PodcastStudioView.vue'
import RooftopView from '../views/facilities/RooftopView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/cafe', name: 'cafe', component: CafeView },
  { path: '/news-events', name: 'news-events', component: NewsEventsView },
  { path: '/contact', name: 'contact', component: ContactView },

  { path: '/facilities/coworking-spaces', name: 'coworking-spaces', component: CoworkingView },
  { path: '/facilities/corporate-communal-spaces', name: 'corporate-communal-spaces', component: CorporateCommunalView },
  { path: '/facilities/meeting-space', name: 'meeting-space', component: MeetingSpaceView },
  { path: '/facilities/podcasting-studio', name: 'podcasting-studio', component: PodcastStudioView },
  { path: '/facilities/rooftop', name: 'rooftop', component: RooftopView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router