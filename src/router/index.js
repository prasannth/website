import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store/index'

import Home from '../views/Home.vue'
import Offers from '../views/Offers.vue'
import Gifts from '../views/Gifts.vue'
import Login from '../views/Login.vue'
import Account from '../views/Account.vue'
import CreateAccount from '../views/CreateAccount.vue'

import Type1 from '../components/types/Type1.vue'
import Type2 from '../components/types/Type2.vue'
import Type3 from '../components/types/Type3.vue'
import Type4 from '../components/types/Type4.vue'
import Type5 from '../components/types/Type5.vue'

import CreateView from '../CreateView.vue'
import Checkout from '../views/Checkout.vue'
import OrderDetails from '../views/OrderDetails.vue'
import MyOrders from '../views/MyOrders.vue'

import PageNotFound from '@/views/exception/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  }, {
    path: '/account/my-orders',
    name: 'MyOrders',
    component: MyOrders
  }, {
    path: '/account/my-orders/order-details',
    name: 'MyOrders',
    component: OrderDetails
  }, {
    path: '/design/create-canvas/create',
    name: 'CreateView',
    component: CreateView
  }, {
    path: '/account/create-account',
    name: 'CreateAccount',
    component: CreateAccount
  }, {
    path: '/account/login',
    name: 'Login',
    component: Login
  }, {
    path: '/account',
    name: 'Account',
    component: Account
  }, {
    path: '/gifts',
    name: 'Gifts',
    component: Gifts
  }, {
    path: '/offers',
    name: 'Offers',
    component: Offers
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/types/type1',
    name: 'Type1',
    component: Type1
  },
  {
    path: '/types/type2',
    name: 'Type2',
    component: Type2
  },
  {
    path: '/types/type3',
    name: 'Type3',
    component: Type3
  },
  {
    path: '/types/type4',
    name: 'Type4',
    component: Type4
  },
  {
    path: '/types/type5',
    name: 'Type5',
    component: Type5
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    name: 'Page-Not-Found',
    component: PageNotFound
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log('path - ' + to.path)

  if (to.path === '/account' && !store.getters.getLoggedInStatus) {
    next('/')
    return
  }

  next()
})

export default router
