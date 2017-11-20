import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
    //Directives have five hooks,
    // 1: bind(element, binding, vnode) Oncie directive is attached
    // 2: inserted(element, binding, vnode) Inserted in Parent Node
    // 3: update(element, binding, vnode, oldNode) Once component is Updated without children
    // 4: componentUpdated(element, binding, vnode, oldNode) Once Component is Updated with children
    // 5: unbind(element, binding, vnode) Once directive is removed

    bind(el, binding, vnode) {
        // el.style.backgroundColor = 'green';
        // el.style.backgroundColor = binding.value;
        var delay = 0;
        if(binding.modifiers['delayed']){
            delay = 3000;
        }
        setTimeout(() => {
            if(binding.arg == 'background') {
                el.style.backgroundColor = binding.value;
            }
            else {
                el.style.color = binding.value;
            }
        },delay);
    }

});

new Vue({
  el: '#app',
  render: h => h(App)
})
