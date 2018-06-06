import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import splash from '@/components/splash'
import signup from '@/components/signup'
import login from '@/components/login'
import about from '@/components/about'
import contact from '@/components/contact'
import BootstrapVue from 'bootstrap-vue'
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios';
import 'vue-loaders/dist/vue-loaders.css';
import * as VueLoaders from 'vue-loaders';

Vue.use(VueLoaders);


Vue.use(VueAxios, axios)
Vue.use(BootstrapVue);
Vue.component('splash', splash)
Vue.component('signup', signup)
Vue.component('login', login)
Vue.component('about', about)
Vue.component('contact', contact)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'splash',
      component: splash
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
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }

  ]
})
