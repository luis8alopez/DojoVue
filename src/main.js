import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(vueResource) //aqui lo habilitamos

new Vue({
  render: h => h(App),
}).$mount('#app')
