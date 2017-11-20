import Vue from 'vue'
import App from './App.vue'
import Header from './components/Shared/Header.vue'
import Footer from './components/Shared/Footer.vue'

Vue.component('header-cmp', Header);
Vue.component('footer-cmp', Footer);

new Vue({
  el: '#app',
  render: h => h(App)
})
