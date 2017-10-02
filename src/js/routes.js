import Index from './components/Index.vue'
import Prefs from './components/Prefs.vue'
import LargeAreas from './components/LargeAreas.vue'
import SmallAreas from './components/SmallAreas.vue'
import HotelLists from './components/HotelLists.vue'

export default [
  { path: '/', component: Index },
  { path: '/:reg', component: Prefs },
  { path: '/:reg/:pref', component: LargeAreas },
  { path: '/:reg/:pref/:larea', component: SmallAreas },
  { path: '/:reg/:pref/:larea/:sarea', component: HotelLists }
]
