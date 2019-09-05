import Vue from 'vue';
import Vuesax from 'vuesax';

import App from './App.vue';
import router from './router';
import store from './store/store';
import 'vuesax/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';

Vue.use(Vuesax);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
