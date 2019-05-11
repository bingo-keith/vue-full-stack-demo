import Vue from 'vue';
import Router from 'vue-router';
//@��ʾ srcĿ¼ webpack��������webpack.base.conf.js��29�� alias{'@':resolve('src')}
// import Home from '@/views/Home/Home.vue'
// import Login from '@/views/Login/Login.vue'
// import Test from '@/views/Test/Test.vue'
// �����ط�ʽ
const Home=()=>import('@/views/Home/Home.vue');
const Login=()=>import('@/views/Login/Login.vue');
const Test=()=>import('@/views/Test/Test.vue');


Vue.use(Router);

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
});

//��ÿ�ν���·����ת֮ǰ����
router.beforeEach((to, from, next) => {
  console.log(localStorage.getItem('token'), 'token');
  const isLogin = !!localStorage.getItem('token');
  if(to.path === '/login') {
    next()
  } else {
    isLogin ? next() : next('/login');
  }
});

export default router;
