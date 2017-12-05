import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';

export const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/user', component: User, children: [
        { path: '', component: UserStart },
        { path: ':id', component: UserDetail },
        { path: ':id/edit', component: UserEdit, name: 'userEdit' },

    ]},
    { path: 'redirect-user', redirect: { name: 'home' }},
    { path: '*', redirect: '/'}, //Catch all like 404 not found page
    // { path: '/user/:id', component: User }
];