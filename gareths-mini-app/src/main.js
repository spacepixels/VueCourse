import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
    methods: {
      setNextAnswer() {
          this.$emit('setQuestionValues');
      },
      setComponent(value) {
          this.$emit('setComponent', value);
      }

    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
