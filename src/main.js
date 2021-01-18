import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import {  faUser, faIdBadge, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {  faBriefcase, faBars, faGraduationCap, faCode, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faIdBadge, faUser, faEnvelope, faBriefcase, faGraduationCap, faCode, faEye)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
