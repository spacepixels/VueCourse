import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value) {
    return value.toLowerCase();
});


//This will get called THREE times for only two pages. Its because the new Vue() instance calls it, then App.vue calls it
//then List.vue calls it.
// Global mixins should only be used for plugins.
//Typically you want to use a mixin Locally through using an array and importing the mixin.
Vue.mixin({
    created() {
        console.log("Global Mixin - Created Hook.");
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
