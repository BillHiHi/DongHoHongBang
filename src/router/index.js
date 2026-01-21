import { createRouter, createWebHistory } from 'vue-router'
import Index from '../components/Index.vue'
import HomePage from '../pages/home/HomePage.vue'
import CataloguePage from '../pages/ads/CataloguePage.vue'
import NameCardPage from '../pages/namecards/NameCardPage.vue'
import BrochurePage from '../pages/brochures/BrochurePage.vue'
import EnvelopePage from '../pages/envelope/EnvelopePage.vue'
import VoucherPage from '../pages/voucher/VoucherPage.vue'

import LaserDuaHau from '../pages/laser/laserduahau.vue'
import KhacLaser from '../pages/laser/khaclaser.vue'

import StandeePage from '../pages/standee/StandeePage.vue'
import TuiPage from '../pages/tui/Tuipage.vue'
import inlogo from '../pages/logo/inlogo.vue'
import intemnhan from '../pages/logo/intemnhan.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/catalogue', name: 'Catalogue', component: CataloguePage },
  { path: '/namecards', name: 'NameCards', component: NameCardPage },
  { path: '/brochures', name: 'Brochures', component: BrochurePage },
  { path: '/envelope', name: 'Envelope', component: EnvelopePage },
  { path: '/voucher', name: 'Voucher', component: VoucherPage },
  { path: '/laser', name: 'Laser', component: LaserDuaHau },
  { path: '/khaclaser', name: 'KhacLaser', component: KhacLaser },
  { path: '/standee', name: 'Standee', component: StandeePage },
  { path: '/tui', name: 'Tui', component: TuiPage },
  { path: '/inlogo', name: 'inlogo', component: inlogo },
  { path: '/intemnhan', name: 'intemnhan', component: intemnhan }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router