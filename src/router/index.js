import Vue from 'vue'
import Router from 'vue-router'
//@表示 src目录 webpack的配置在webpack.base.conf.js第29行 alias{'@':resolve('src')}
// import Home from '@/views/Home/Home.vue'
// import Login from '@/views/Login/Login.vue'
// import Test from '@/views/Test/Test.vue'
// 懒加载方式
const Home=()=>import('@/views/Home/Home.vue')
const Login=()=>import('@/views/Login/Login.vue')
const Test=()=>import('@/views/Test/Test.vue')


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})

//在每次进行路由跳转之前进行
router.beforeEach((to, from, next) => {
  console.log(localStorage.getItem('token'))
  const isLogin = localStorage.getItem('token') ? true : false;
  if(to.path == '/login') {
    next()
  } else {
    isLogin ? next() : next('/login');
  }
})

export default router
