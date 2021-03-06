import '../css/app.scss'
import 'vue-material/dist/vue-material.min.css'
import Vue from 'vue'
import router from './router'
import VueMaterial from 'vue-material'
import PageMetaControl from './common/services/seo/PageMetaControl'
import App from './App'

Vue.use(VueMaterial)

Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  render: h => h(App),
  mixins: [PageMetaControl],
  router
})