import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

let routes = [{
    path: 'login',
    component: login,
    name: '',
    hidden: true
},{
    path: '/404',
    component: notFound,
    name: '',
    hidden: true
}];

var router = new VueRouter({
    routes
})

export default router;
