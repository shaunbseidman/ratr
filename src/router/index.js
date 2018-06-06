import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import splash from '@/components/splash'
import signup from '@/components/signup'
import BootstrapVue from 'bootstrap-vue'
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios';

Vue.use(BootstrapVue);
Vue.component('splash', splash)
Vue.component('signup', signup)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/splash',
      name: 'splash',
      component: splash
    }
  ]
})
