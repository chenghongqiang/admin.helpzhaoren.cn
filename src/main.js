import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-route'

Vue.use(Router);

router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({
        path: '/login'
    });
  } else {
    next();
  }
});

//引入路由
import router from "./route.js"

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
