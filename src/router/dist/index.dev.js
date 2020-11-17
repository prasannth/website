'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var _vue = _interopRequireDefault(require('vue'))

var _vueRouter = _interopRequireDefault(require('vue-router'))

var _index = _interopRequireDefault(require('../store/index'))

var _Home = _interopRequireDefault(require('../views/Home.vue'))

var _Offers = _interopRequireDefault(require('../views/Offers.vue'))

var _Gifts = _interopRequireDefault(require('../views/Gifts.vue'))

var _Login = _interopRequireDefault(require('../views/Login.vue'))

var _Account = _interopRequireDefault(require('../views/Account.vue'))

var _CreateAccount = _interopRequireDefault(require('../views/CreateAccount.vue'))

var _Type = _interopRequireDefault(require('../components/types/Type1.vue'))

var _Type2 = _interopRequireDefault(require('../components/types/Type2.vue'))

var _Type3 = _interopRequireDefault(require('../components/types/Type3.vue'))

var _Type4 = _interopRequireDefault(require('../components/types/Type4.vue'))

var _Type5 = _interopRequireDefault(require('../components/types/Type5.vue'))

var _CreateView = _interopRequireDefault(require('../CreateView.vue'))

var _Checkout = _interopRequireDefault(require('../views/Checkout.vue'))

var _OrderDetails = _interopRequireDefault(require('../views/OrderDetails.vue'))

var _MyOrders = _interopRequireDefault(require('../views/MyOrders.vue'))

var _PageNotFound = _interopRequireDefault(require('@/views/exception/PageNotFound.vue'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _typeof (obj) { if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

function _getRequireWildcardCache () { if (typeof WeakMap !== 'function') return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache () { return cache }; return cache }

function _interopRequireWildcard (obj) { if (obj && obj.__esModule) { return obj } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj } } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj) } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc) } else { newObj[key] = obj[key] } } } newObj.default = obj; if (cache) { cache.set(obj, newObj) } return newObj }

_vue.default.use(_vueRouter.default)

var routes = [{
  path: '/checkout',
  name: 'Checkout',
  component: _Checkout.default
}, {
  path: '/account/my-orders',
  name: 'MyOrders',
  component: _MyOrders.default
}, {
  path: '/account/my-orders/order-details',
  name: 'MyOrders',
  component: _OrderDetails.default
}, {
  path: '/design/create-canvas/create',
  name: 'CreateView',
  component: _CreateView.default
}, {
  path: '/account/create-account',
  name: 'CreateAccount',
  component: _CreateAccount.default
}, {
  path: '/account/login',
  name: 'Login',
  component: _Login.default
}, {
  path: '/account',
  name: 'Account',
  component: _Account.default
}, {
  path: '/gifts',
  name: 'Gifts',
  component: _Gifts.default
}, {
  path: '/offers',
  name: 'Offers',
  component: _Offers.default
}, {
  path: '/',
  name: 'Home',
  component: _Home.default
}, {
  path: '/types/type1',
  name: 'Type1',
  component: _Type.default
}, {
  path: '/types/type2',
  name: 'Type2',
  component: _Type2.default
}, {
  path: '/types/type3',
  name: 'Type3',
  component: _Type3.default
}, {
  path: '/types/type4',
  name: 'Type4',
  component: _Type4.default
}, {
  path: '/types/type5',
  name: 'Type5',
  component: _Type5.default
}, {
  path: '/about',
  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: function component () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/About.vue'))
    })
  }
}, {
  path: '*',
  name: 'Page-Not-Found',
  component: _PageNotFound.default
}]
var router = new _vueRouter.default({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
router.beforeEach(function (to, from, next) {
  // console.log('path - ' + to.path)
  if (to.path === '/account' && !_index.default.getters.getLoggedInStatus) {
    next('/')
    return
  }

  next()
})
var _default = router
exports.default = _default
