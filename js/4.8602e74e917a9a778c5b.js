webpackJsonp([4],{

/***/ "5tM3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "newsletter-subscription-page"
    }
  }, [_c('section', {
    staticClass: "newsletter-subscription bg-info py-5"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block py-5"
  }, [_c('h4', {
    staticClass: "card-title display-4 text-center"
  }, [_vm._v("Want a taste?")]), _vm._v(" "), _c('h6', {
    staticClass: "card-subtitle text-muted text-center"
  }, [_vm._v("Subscribe to our newsletter. No spam, promised.")]), _vm._v(" "), _c('hr', {
    staticClass: "my-4"
  }), _vm._v(" "), _c('form', {
    attrs: {
      "method": "POST",
      "action": "https://lists.columbia.edu/mailman/subscribe/saborgbody"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md"
  }, [_c('label', {
    staticClass: "sr-only",
    attrs: {
      "for": "newsletter-subscription-input-name"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_vm._m(0), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "id": "newsletter-subscription-input-name",
      "name": "fullname",
      "type": "text",
      "placeholder": "Name",
      "aria-describedby": "newsletter-subscription-help-message"
    },
    on: {
      "focus": function($event) {
        _vm.newsletterSubscriptionHelpMessage = 'Optional.'
      },
      "blur": function($event) {
        _vm.newsletterSubscriptionHelpMessage = null
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md"
  }, [_c('label', {
    staticClass: "sr-only",
    attrs: {
      "for": "newsletter-subscription-input-email"
    }
  }, [_vm._v("Email Address")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_vm._m(1), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "id": "newsletter-subscription-input-email",
      "name": "email",
      "type": "email",
      "placeholder": "Email Address",
      "aria-describedby": "newsletter-subscription-help-message"
    },
    on: {
      "focus": function($event) {
        _vm.newsletterSubscriptionHelpMessage = 'Required. We\'ll never share your email with anyone else.'
      },
      "blur": function($event) {
        _vm.newsletterSubscriptionHelpMessage = null
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('button', {
    staticClass: "btn btn-info",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Subscribe!")]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "v-fade"
    }
  }, [(_vm.newsletterSubscriptionHelpMessage) ? _c('small', {
    staticClass: "form-text text-muted",
    attrs: {
      "id": "newsletter-subscription-help-message"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.newsletterSubscriptionHelpMessage) + "\n                ")]) : _vm._e()])], 1)])])])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-user-o fa-fw"
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-envelope-o fa-fw"
  })])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "N3Mj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NewsletterSubscription_vue__ = __webpack_require__("bsh2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NewsletterSubscription_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NewsletterSubscription_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_25654d1a_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_NewsletterSubscription_vue__ = __webpack_require__("5tM3");
function injectStyle (ssrContext) {
  __webpack_require__("hx83")
}
var normalizeComponent = __webpack_require__("/4AN")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-25654d1a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NewsletterSubscription_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_25654d1a_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_NewsletterSubscription_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "bsh2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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
//

exports.default = {
  data: function data() {
    return {
      name: null,
      email: null,
      newsletterSubscriptionHelpMessage: null
    };
  }
};

/***/ }),

/***/ "hx83":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});