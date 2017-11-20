import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
    methods: {
      resetStatus(data) {
          this.$emit('resetStatus', data);
      },
      setServerDetails(data) {
          this.$emit('setServerDetails', data);
      }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
