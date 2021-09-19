import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}

const routerReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
    return routerReplace.call(this, location).catch(err => err)
}


export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/msite',
            meta: {
                showFooter: true,
            }
        },
        {
            path: '/msite',
            component: () => import('../pages/Msite/Msite.vue'),
            meta: {
                showFooter: true,
            }
        },
        {
            path: '/search',
            component: () => import('../pages/Search/Search.vue'),
            meta: {
                showFooter: true,
            }
        },
        {
            path: '/order',
            component: () => import('../pages/Order/Order.vue'),
            meta: {
                showFooter: true,
            }
        },
        {
            path: '/profile',
            component: () => import('../pages/Profile/Profile.vue'),
            meta: {
                showFooter: true,
            }
        },
        {
            path: '/login',
            component: () => import('../pages/Login/Login.vue')
        }
    ]
})