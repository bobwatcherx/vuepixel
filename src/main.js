import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.use(VueMaterial)
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import LightTimeline from 'vue-light-timeline';
 
Vue.use(LightTimeline);
Vue.use(Vuetify)

Vue.config.productionTip = false
Vue.component('apexchart', VueApexCharts)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
