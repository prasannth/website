"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _buefy = _interopRequireDefault(require("buefy"));

require("../public/style.scss");

var _axios = _interopRequireDefault(require("axios"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _vueCryptojs = _interopRequireDefault(require("vue-cryptojs"));

var _vueNotification = _interopRequireDefault(require("vue-notification"));

var _components = require("vue-material/dist/components");

var _vueBreakpointComponent = require("vue-breakpoint-component");

var _vuelidate = _interopRequireDefault(require("vuelidate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueNotification["default"]);

_vue["default"].use(_vuelidate["default"]);

_vue["default"].use(_vueCryptojs["default"]);

_vue["default"].use(_components.MdProgress);

_vue["default"].use(_vueBreakpointComponent.Plugin);

_vue["default"].use(_vueRouter["default"]);

_vue["default"].prototype.$http = _axios["default"];
_vue["default"].config.productionTip = false;

_vue["default"].use(_buefy["default"]);

new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');