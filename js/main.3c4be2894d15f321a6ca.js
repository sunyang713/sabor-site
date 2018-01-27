webpackJsonp([5],{

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "30p7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("Rf4r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ba5bd90_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("UxKN");
function injectStyle (ssrContext) {
  __webpack_require__("T596")
}
var normalizeComponent = __webpack_require__("/4AN")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ba5bd90_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "JkW7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__("QPfz");

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__("30p7");

var _App2 = _interopRequireDefault(_App);

var _router = __webpack_require__("rSE8");

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
  el: '#root',
  router: _router2.default,
  render: function render(h) {
    return h(_App2.default);
  }
});

/***/ }),

/***/ "Rf4r":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _router = __webpack_require__("rSE8");

exports.default = {
  data: function data() {
    return {
      routes: _router.routes
    };
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "T596":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "UxKN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('nav', {
    staticClass: "navbar navbar-light navbar-toggleable-md bg-faded"
  }, [_c('div', {
    staticClass: "container"
  }, [_vm._m(0), _vm._v(" "), _c('router-link', {
    staticClass: "navbar-brand font-weight-bold",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Sabor")]), _vm._v(" "), _c('div', {
    staticClass: "collapse navbar-collapse",
    attrs: {
      "id": "navbarCollapse"
    }
  }, [_c('ul', {
    staticClass: "navbar-nav ml-auto"
  }, _vm._l((_vm.routes), function(route) {
    return (route.showInNav) ? _c('router-link', {
      key: route.path,
      staticClass: "nav-item",
      attrs: {
        "tag": "li",
        "to": route.path,
        "exact": route.path === '/'
      }
    }, [_c('a', {
      staticClass: "nav-link"
    }, [_vm._v(_vm._s(route.name))])]) : _vm._e()
  }))])], 1)]), _vm._v(" "), _c('router-view'), _vm._v(" "), _vm._m(1)], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "navbar-toggler navbar-toggler-right",
    attrs: {
      "type": "button",
      "data-toggle": "collapse",
      "data-target": "#navbarCollapse",
      "aria-controls": "navbarCollapse",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }
  }, [_c('span', {
    staticClass: "navbar-toggler-icon"
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    staticClass: "footer bg-inverse text-white py-5"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "copyright py-4"
  }, [_c('div', {
    staticClass: "float-md-left"
  }, [_c('p', [_vm._v("© Copyright 2017 Sabor. All Rights Reserved.")])]), _vm._v(" "), _c('div', {
    staticClass: "float-md-right"
  }, [_c('a', {
    attrs: {
      "href": "https://www.facebook.com/cusabor"
    }
  }, [_c('i', {
    staticClass: "fa fa-lg fa-fw fade-on-hover fa-facebook"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://twitter.com/sabortweets"
    }
  }, [_c('i', {
    staticClass: "fa fa-lg fa-fw fade-on-hover fa-twitter"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://instagram.com/cusabor"
    }
  }, [_c('i', {
    staticClass: "fa fa-lg fa-fw fade-on-hover fa-instagram "
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://github.com/sunyang713/sabor-website"
    }
  }, [_c('i', {
    staticClass: "fa fa-lg fa-fw fade-on-hover fa-github"
  })]), _vm._v(" "), _c('span', [_vm._v("Created by "), _c('a', {
    attrs: {
      "href": "https://www.linkedin.com/in/jonathansun0/"
    }
  }, [_vm._v("Jonathan Sun")])])])])])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "rSE8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = undefined;

var _vue = __webpack_require__("QPfz");

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__("7ov2");

var _vueRouter2 = _interopRequireDefault(_vueRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

var HomePage = function HomePage(resolve) {
  return __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("vsG3")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};

var TeamPage = function TeamPage(resolve) {
  return __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("mfKp")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};

var MediaPage = function MediaPage(resolve) {
  return __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("tWNt")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};

var NewsletterSubscriptionPage = function NewsletterSubscriptionPage(resolve) {
  return __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("N3Mj")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};

var NotFoundPage = function NotFoundPage(resolve) {
  return __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Cffp")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};

var routes = exports.routes = [{ path: '/', name: 'Home', component: HomePage, showInNav: true }, { path: '/team', name: 'Team', component: TeamPage, showInNav: true }, { path: '/media', name: 'Media', component: MediaPage, showInNav: true }, { path: '/subscribe', name: 'Newsletter Subscription', component: NewsletterSubscriptionPage, showInNav: false }, { path: '*', component: NotFoundPage, showInNav: true }];

exports.default = new _vueRouter2.default({
  mode: 'history',
  base: "/sabor-website/",
  linkActiveClass: 'active', // for bootstrap
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 };
  },
  routes: routes
});

/***/ })

},["JkW7"]);