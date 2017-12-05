import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import { routes } from './routes.js';


Vue.use(Router);


//To remove the hash from the front of the Url you need to setup the server to always return the index page.
//Then set the property that rmoves the hash which is: mode: history
//Local development is setup to return the index page each request
const router = new Router({
    routes,
    mode: 'history'
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
