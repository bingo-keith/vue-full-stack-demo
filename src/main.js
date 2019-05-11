// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from  'axios';
import apiconfig from './apis/api.config';

axios.default.baseURL = apiconfig.baseUrL;

import '!style-loader!css-loader!less-loader!./assets/styles/base.less';
import iviewComs from './components/iview-coms';

axios.get('https://api.github.com/users?since=10')
  .then(res=>console.log(res))
  .catch(err=>console.log(err));

axios.get('/apis/api')
  .then(res=>console.log(res))
  .catch(err=>console.log(err));

Vue.use(iviewComs);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
