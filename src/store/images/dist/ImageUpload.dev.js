"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _axios = _interopRequireDefault(require("axios"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import store from '@/store'
_vue["default"].use(_vuex["default"]);

_vue["default"].use(_fs["default"]);

var state = {
  status: ''
};
var getters = {
  isLoggedIn: function isLoggedIn(state) {
    return !!state.token;
  }
};
var mutations = {
  auth_request: function auth_request(state) {
    state.status = 'loading';
  }
};
var actions = {
  uploadImage: function uploadImage(_ref, data) {
    var commit = _ref.commit;
    return new Promise(function (resolve, reject) {
      commit('auth_request');

      _axios["default"].post('http://192.168.0.9:3000/print/upload', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        // console.log('SUCCESS!!')
        resolve(response);
      })["catch"](function (error) {
        // console.log('FAILURE!!')
        reject(error);
      });
    });
  },
  userImageCollection: function userImageCollection(_ref2) {
    var commit = _ref2.commit;
    return new Promise(function (resolve, reject) {
      commit('auth_request');

      _axios["default"].post('http://192.168.0.9:3000/print/getlist', {
        id: 123
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        // console.log('SUCCESS!!')
        resolve(response);
      })["catch"](function (error) {
        // console.log('FAILURE!!')
        reject(error);
      });
    });
  }
};
var _default = {
  namespaced: true,
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};
exports["default"] = _default;