import Vue from 'vue';
import Router from 'vue-router';
import Main from './pages/Main';

Vue.use(Router);


export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Main,
        }
    ],
    mode: 'history',
    // eslint-disable-next-line no-unused-vars
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0};
    }
});
