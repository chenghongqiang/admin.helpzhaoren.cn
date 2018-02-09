import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

let route = [{
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

var route = new VueRouter({
    routes
})

export default route;
