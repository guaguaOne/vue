import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/girlComponents/Home'
import Second from '@/components/girlComponents/Second'
import Third from '@/components/girlComponents/Third'
import Fourth from '@/components/girlComponents/Fourth'

import BoyHome from '@/components/boyComponents/BoyHome'

import AdminHome from '@/components/adminComponents/AdminHome'

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/second',
      name: 'Second',
      component: Second
    },
    {
      path: '/third',
      name: 'Third',
      component: Third
    },
    {
      path: '/fourth',
      name: 'Fourth',
      component: Fourth
    },
    {
      path: '/boy',
      name: 'BoyHome',
      component: BoyHome
    },
    {
      path: '/admin',
      name: 'AdminHome',
      component: AdminHome
    }
  ],
  mode:'history'
})
