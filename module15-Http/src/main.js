import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);

//Check out the vue-resource github page for more global options such as set headers like content type
Vue.http.options.root = 'https://vue-http-7b311.firebaseio.com/';

Vue.http.interceptors.push((request, next) => {

    // if(request.method == 'POST'){
    //   request.method = 'PUT';
    // }
    next(response => {
        //You could redirect to an error page if not equal to 200??
        console.log(response.status);
    });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
