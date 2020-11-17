"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _loginModule = _interopRequireDefault(require("./loginModule"));

var _ImageUpload = _interopRequireDefault(require("./images/ImageUpload"));

var _products = _interopRequireDefault(require("./products"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    cartItem: '',
    user_info: localStorage.getItem('user_data') || null,
    status: '',
    cartData: ''
  },
  mutations: {
    set_state: function set_state(state, data) {
      state.status = data;
    },
    set_cart_item: function set_cart_item(state, data) {
      state.cartItem = data;
    },
    set_cartData: function set_cartData(state, data) {
      state.cartData = data;
    },
    set_user_address: function set_user_address(state, data) {
      state.user_info.user_address = localStorage.getItem('user_address');
    }
  },
  actions: {
    checkout: function checkout(_ref, cartData) {
      var _this = this;

      var commit = _ref.commit;
      return new Promise(function (resolve, reject) {
        commit('set_state', 'LOADING');
        var data = JSON.stringify({
          id: _this.getters.getUserId,
          cartData: cartData
        });
        var config = {
          method: 'post',
          url: 'http://192.168.0.9:3000/users/addToCart',
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        };
        (0, _axios["default"])(config).then(function (response) {
          // console.log(JSON.stringify(response.data))
          commit('set_state', 'SUCCESS');
          resolve(response);
        })["catch"](function (error) {
          commit('set_state', 'ERROR'); // console.log(error)

          reject(error);
        });
      });
    },
    login: function login(_ref2, data) {
      var commit = _ref2.commit;
      return new Promise(function (resolve, reject) {
        commit('set_state', 'LOADING');
        var config = {
          method: 'post',
          url: 'http://192.168.0.9:3000/users/login',
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        };
        (0, _axios["default"])(config).then(function (response) {
          commit('set_state', 'SUCCESS'); // basic details

          localStorage.setItem('user_data', JSON.stringify(response.data.userData));
          resolve(response);
        })["catch"](function (error) {
          commit('set_state', 'ERROR'); // console.log(error)

          reject(error);
        });
      });
    },
    create_account: function create_account(_ref3, data) {
      var commit = _ref3.commit;
      return new Promise(function (resolve, reject) {
        commit('set_state', 'LOADING');
        var config = {
          method: 'post',
          url: 'http://192.168.0.9:3000/users/signup',
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        };
        (0, _axios["default"])(config).then(function (response) {
          commit('set_state', 'SUCCESS'); // console.log(JSON.stringify(response.data))

          resolve(data);
        })["catch"](function (error) {
          commit('set_state', 'ERROR'); // console.log(error)

          reject(error);
        });
      });
    },
    getPinCodeDetails: function getPinCodeDetails(_ref4, data) {
      var commit = _ref4.commit;
      return new Promise(function (resolve, reject) {
        commit('set_state', 'LOADING');
        var config = {
          method: 'get',
          url: 'https://api.postalpincode.in/pincode/' + data,
          headers: {}
        };
        (0, _axios["default"])(config).then(function (response) {
          commit('set_state', 'SUCCESS');
          resolve(response);
        })["catch"](function (error) {
          commit('set_state', 'ERROR'); // console.log(error)

          reject(error);
        });
      });
    },
    getCartItem: function getCartItem(_ref5) {
      var _this2 = this;

      var commit = _ref5.commit;
      return new Promise(function (resolve, reject) {
        commit('set_state', 'LOADING');
        var data = JSON.stringify({
          id: _this2.getters.getUserId
        });
        var config = {
          method: 'post',
          url: 'http://192.168.0.9:3000/users/getCart',
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        };
        (0, _axios["default"])(config).then(function (response) {
          commit('set_state', 'SUCCESS'); // console.log(JSON.stringify(response.data))

          commit('set_cartData', response.data);
          resolve(response);
        })["catch"](function (error) {
          commit('set_state', 'ERROR'); // console.log(error)

          reject(error);
        });
      });
    },
    updateAddress: function updateAddress(_ref6, data) {
      var commit = _ref6.commit;
      return new Promise(function (resolve, reject) {
        localStorage.setItem('user_address', data);
        resolve('User address updated');
      });
    },
    userLogout: function userLogout(_ref7, data) {
      var commit = _ref7.commit;
      return new Promise(function (resolve, reject) {
        localStorage.clear();
        resolve('User Logged out');
      });
    },
    saveCartOffline: function saveCartOffline(_ref8, data) {
      var commit = _ref8.commit;
      return new Promise(function (resolve, reject) {
        commit('set_user_address', data);
        localStorage.setItem('cart_item', data);
        resolve('User Logged out');
      });
    },
    deleteCartItem: function deleteCartItem(_ref9, cartItem) {
      var _this3 = this;

      var commit = _ref9.commit;
      return new Promise(function (resolve, reject) {
        commit('set_state', 'LOADING');
        var data = JSON.stringify({
          id: _this3.getters.getUserId,
          cartId: cartItem
        });
        var config = {
          method: 'post',
          url: 'http://192.168.0.9:3000/users/deleteCartItem',
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        };
        (0, _axios["default"])(config).then(function (response) {
          commit('set_state', 'SUCCESS'); // console.log(JSON.stringify(response.data))

          resolve(response);
        })["catch"](function (error) {
          commit('set_state', 'ERROR'); // console.log(error)

          reject(error);
        });
      });
    }
  },
  getters: {
    getCartItem: function getCartItem(state) {
      return state.cartItem;
    },
    getCartData: function getCartData(state) {
      return state.cartData;
    },
    getUserEmail: function getUserEmail(state) {
      return '';
    },
    getCurrentAddress: function getCurrentAddress(state) {
      return '';
    },
    getLoggedInStatus: function getLoggedInStatus(state) {
      if (state.user_info !== null) {
        return true;
      } else {
        return false;
      }
    },
    getUserName: function getUserName(state) {
      return JSON.parse(state.user_info).firstName;
    },
    getUserId: function getUserId(state) {
      return JSON.parse(state.user_info)._id;
    }
  },
  modules: {
    login: _loginModule["default"],
    imageUpload: _ImageUpload["default"],
    products: _products["default"]
  }
});

exports["default"] = _default;