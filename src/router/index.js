import {
  createRouter,
  createWebHistory
}
from 'vue-router'


import welcome from '../views/welcome/welcome.vue'
import home from '../views/home/Home.vue'
import ResourceRequest from '../views/subpage/ResourceRequest.vue'
import UsersManage from '../views/subpage/UsersMange.vue'

const routes = [{
    path: '/welcome',
    name: 'welcome',
    component: welcome
  },
  {
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/index.html',
    redirect: '/welcome'
  }, {
    path: '/home',
    component: home
  }, {
    path: '/resourceRequest',
      component: ResourceRequest
  }, {
    path: '/usersManage',
    component: UsersManage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


// // 挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//   // to将要访问的路径
//   // from代表从哪个路径的跳转而来
//   // next是一个函数，表示放行
//   // next() 放行 next('/login')强制跳转
//   if (to.path === '/login') {
//     return next();
//   }
//   // 获取token
//   const tokenStr = tool.getCookie('token');
//   // 强制跳转
//   if (!tokenStr) return next('/login');
//   next();
// })

export default router;