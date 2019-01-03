// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import SearchBar from './components/Search.bar.vue'
import FlipCards from './components/Flip.cards.vue'


Vue.component('searchBar', SearchBar);
Vue.component('flipCards', FlipCards);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
