import Vue from "vue"
import VueRouter from "vue-router"
import login from './page/login.vue'
import home from './page/home.vue'
import notFound from './page/404.vue'

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
},{
    path: '/',
    component: home,
    name: '用户记录',
    iconCls: 'el-icon-message', //图标样式class
    children: [{
        path: '/userRecord',
        component: menutab,
        name: 'Tab'
    }]
},{
    path: '/',
    component: home,
    name: '导航二',
    iconCls: 'fa fa-id-card-o',
    children: [{
            path: '/menutable',
            component: menutable,
            name: 'Table'
        }
    ]
}];

var router = new VueRouter({
    routes
})

export default router;
