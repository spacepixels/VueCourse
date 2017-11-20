import Vue from 'vue'
import App from './App.vue'

//Create eventbus before Vue creates the components
export const eventBus = new Vue({
    methods: {
        changeAge(age) {
            this.$emit('ageWasEdited', age);
        }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
