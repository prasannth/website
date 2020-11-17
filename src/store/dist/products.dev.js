"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import store from '@/store'
_vue["default"].use(_vuex["default"]);

var state = {
  status: '',
  type1Details: ''
};
var getters = {
  getType1Details: function getType1Details(state) {
    return state.type1Details;
  }
};
var mutations = {
  set_status: function set_status(state, status) {
    state.status = status;
  },
  set_type1Details: function set_type1Details(state, data) {
    state.type1Details = data;
  }
};
var actions = {
  getType1Details: function getType1Details(_ref, data) {
    var commit = _ref.commit;
    return new Promise(function (resolve, reject) {
      commit('set_status', 'LOADING');
      var config = {
        method: 'post',
        url: 'http://192.168.0.9:3000/product/detail',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };
      (0, _axios["default"])(config).then(function (response) {
        return response.data;
      }).then(function (response) {
        // console.log(JSON.stringify(response.productDetail))
        commit('set_status', 'SUCCESS');
        commit('set_type1Details', response.productDetail);
        resolve(response);
      })["catch"](function (error) {
        // console.log(error)
        commit('set_status', 'SUCCESS');
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