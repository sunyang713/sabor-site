webpackJsonp([1],{

/***/ "3oem":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateRandomFlavor;
/*
 * Generates a True random flavor
 */
function generateRandomFlavor() {
  var flavors = ['Vanilla', 'Strawberry', 'Chocolate', 'Siracha'];
  return 'siracha';
}

/***/ }),

/***/ "N4Nl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(fetch) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fbapi;

var _jsonToQueryString = __webpack_require__("xXSg");

var _jsonToQueryString2 = _interopRequireDefault(_jsonToQueryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * For Facebook Graph API
 */
function fbapi(path, queryParams, callback) {
  return fetch('https://graph.facebook.com/v2.8/' + path + '?' + (0, _jsonToQueryString2.default)(queryParams) + '&access_token=' + "1441196952571497|460c69839db5ed571fb184066647252e", { method: 'GET' }).then(function (response) {
    return response.json();
  }).then(callback);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("Rufv")))

/***/ }),

/***/ "Qlgy":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Rufv":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, Promise) {/*** IMPORTS FROM imports-loader ***/
(function() {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/*** EXPORTS FROM exports-loader ***/
module.exports = global.fetch;
}.call(global));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("h6ac"), __webpack_require__("Zt7E")))

/***/ }),

/***/ "Tmf5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ['El "smooth as fuck" Rio', 'Domingo', 'Mingo', 'The Admiral', 'The Big D', 'Mingo'];

/***/ }),

/***/ "Y+NB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(fetch) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gSheetsApi;

var _googleSpreadsheetValuesToObjectArray = __webpack_require__("oKtj");

var _googleSpreadsheetValuesToObjectArray2 = _interopRequireDefault(_googleSpreadsheetValuesToObjectArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Fetches a Google Sheets document by ID and executes a callback on the document.
 */
function gSheetsApi(spreadSheetId, sheetName, callback) {
  return fetch('https://sheets.googleapis.com/v4/spreadsheets/' + spreadSheetId + '/values/' + sheetName + '?&key=' + "AIzaSyCphsDseGG3Re2bSA8ToQX45eHvHbYylQU", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (response) {
    return response.json();
  }).then(function (spreadsheet) {
    return callback((0, _googleSpreadsheetValuesToObjectArray2.default)(spreadsheet.values));
  });
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("Rufv")))

/***/ }),

/***/ "ez9B":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRandomInteger;
/*
 * Returns a random integer within a given range.
 */
function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

/***/ }),

/***/ "f/N2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generateRandomFlavor = __webpack_require__("3oem");

var _generateRandomFlavor2 = _interopRequireDefault(_generateRandomFlavor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Data model for a team member. 'Member' should follow exactly the schema defined
 * in the Google Sheets roster list. If the Sheet is updated, you must also update
 * this class appropriately.
 * It's a dated pattern that doesn't work well in JavaScript, but pulling off
 * Google Sheets was already a hack anyways so whatever.
 */
var Member = function Member(_ref) {
  var name = _ref.name,
      school = _ref.school,
      year = _ref.year,
      picture = _ref.picture,
      boardPosition = _ref.boardPosition,
      flavor = _ref.flavor,
      quote = _ref.quote,
      saName = _ref.saName;

  _classCallCheck(this, Member);

  if (!name) throw new Error('Must have a name.');
  if (!year) throw new Error('Must have year.');
  this.name = name;
  this.school = school;
  this.year = year;
  this.picture = picture;
  this.boardPosition = boardPosition;
  this.flavor = flavor || (0, _generateRandomFlavor2.default)();
  this.quote = quote;
  this.saName = saName;
};

exports.default = Member;

/***/ }),

/***/ "fDag":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "team-page"
    }
  }, [_vm._m(0), _vm._v(" "), (_vm.boardMembers) ? _c('section', {
    staticClass: "board container mb-4"
  }, [_c('h1', [_vm._v("The Board")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "row no-gutters"
  }, _vm._l((_vm.boardMembers), function(member) {
    return _c('div', {
      key: member.name,
      staticClass: "col-6 col-sm-4 col-md-3"
    }, [_c('div', {
      staticClass: "card card-inverse mb-1 p-0"
    }, [_c('img', {
      staticClass: "card-img h-100",
      attrs: {
        "src": member.picture || __webpack_require__("kJaC"),
        "alt": ((member.name) + " picture")
      }
    }), _vm._v(" "), _c('transition', {
      attrs: {
        "name": "v-fade"
      }
    }, [_c('div', {
      staticClass: "card-img-overlay"
    }, [_c('h4', {
      staticClass: "card-title"
    }, [_vm._v(_vm._s(member.name))]), _vm._v(" "), _c('h6', {
      staticClass: "card-subtitle mb-2"
    }, [_vm._v(_vm._s(member.boardPosition))]), _vm._v(" "), _c('p', {
      staticClass: "card-text"
    }, [_vm._v(_vm._s(member.year))])])])], 1)])
  }))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "parallax-image",
    style: (("background-image: url('" + _vm.teamPicture + "')"))
  }), _vm._v(" "), _c('section', {
    staticClass: "quote bg-info mb-5 py-5"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('transition', {
    attrs: {
      "name": "v-fade-overlay"
    }
  }, [_c('blockquote', {
    key: _vm.quote.name,
    staticClass: "blockquote text-white"
  }, [_c('p', {
    staticClass: "h4 font-weight-normal"
  }, [_c('i', {
    staticClass: "fa fa-2x fa-fw fa-quote-left align-middle",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s(_vm.quote.text))]), _c('i', {
    staticClass: "fa fa-2x fa-fw fa-quote-right align-middle",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c('footer', {
    staticClass: "blockquote-footer text-white"
  }, [_vm._v("\n            " + _vm._s(_vm.quote.name) + ",\n            "), _c('cite', {
    attrs: {
      "title": _vm.quote.name
    }
  }, [_vm._v(_vm._s(_vm.quote.source))])])])])], 1)]), _vm._v(" "), (_vm.roster) ? _c('section', {
    staticClass: "roster container my-5"
  }, [_c('h1', [_vm._v("Full Roster")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('ul', {
    staticClass: "list-unstyled"
  }, [_vm._l((_vm.roster), function(member) {
    return _c('li', {
      key: member.name,
      staticClass: "member",
      class: {
        'fade-on-hover': member.quote
      },
      attrs: {
        "title": member.flavor
      },
      on: {
        "click": function($event) {
          _vm.setQuote(member, true)
        }
      }
    }, [_vm._v("\n        " + _vm._s(member.name) + "\n      ")])
  }), _vm._v(" "), _vm._l((_vm.legends), function(legend) {
    return _c('li', {
      key: legend,
      staticClass: "text-white"
    }, [_vm._v("\n        " + _vm._s(legend) + "\n      ")])
  })], 2)]) : _vm._e(), _vm._v(" "), _c('section', {
    staticClass: "join"
  }, [_c('div', {
    staticClass: "container py-5"
  }, [_c('div', {
    staticClass: "card text-center"
  }, [_c('div', {
    staticClass: "card-block my-5"
  }, [_c('h4', {
    staticClass: "card-title display-4 my-3"
  }, [_vm._v("What flavor are you?")]), _vm._v(" "), _c('h6', {
    staticClass: "card-subtitle text-muted my-3"
  }, [_vm._v("We’re committed to our family and our dance, and we're always looking for new talent.")]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-lg btn-danger my-3",
    attrs: {
      "to": "/join"
    }
  }, [_vm._v("Join the family ›")])], 1)])]), _vm._v(" "), _c('p', {
    staticClass: "sr-only"
  }, [_vm._v("what flavor r u? find out how join")])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "hero jumbotron"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('h1', {
    staticClass: "display-1"
  }, [_vm._v("Meet the Sa-familia")]), _vm._v(" "), _c('p', {
    staticClass: "lead font-italic"
  }, [_vm._v("Un grupo unido jamás será vencido Sabor")])])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "kJaC":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/e4c6292a6f40444e3080cb0ad9fc2949.png";

/***/ }),

/***/ "mfKp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_script_js__ = __webpack_require__("qaX3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_script_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_script_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a06fa778_hasScoped_true_template_html__ = __webpack_require__("fDag");
function injectStyle (ssrContext) {
  __webpack_require__("Qlgy")
}
var normalizeComponent = __webpack_require__("/4AN")
/* script */
/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a06fa778"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_script_js___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a06fa778_hasScoped_true_template_html__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "oKtj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = googleSpreadsheetValuesToObjectArray;
/*
 * Converts the default Google Sheets data format from an
 * 'array of arrays' to an 'array of objects'.
 * i.e., from this:
 * [ [ 'field1', 'field2', 'field3'  ],
 *   [ 'apple',  '1',      'dog'     ],
 *   [ 'orange', '13',     'cat'     ],
 *   [ 'carrot', '-12',    'scorpion'] ]
 * to this:
 * [ { field1: 'apple',  field2: '1',   field3: 'dog'      },
 *   { field1: 'orange', field2: '13',  field3: 'cat'      },
 *   { field1: 'carrot', field2: '-12', field3: 'scorpion' } ]
 */
function googleSpreadsheetValuesToObjectArray(spreadsheetValues) {
  var fields = spreadsheetValues[0];
  return spreadsheetValues.slice(1).map(function (row) {
    return fields.reduce(function (obj, field, index) {
      obj[field] = row[index];
      return obj;
    }, {});
  });
}

/***/ }),

/***/ "qaX3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Member = __webpack_require__("f/N2");

var _Member2 = _interopRequireDefault(_Member);

var _legends = __webpack_require__("Tmf5");

var _legends2 = _interopRequireDefault(_legends);

var _fbapi = __webpack_require__("N4Nl");

var _fbapi2 = _interopRequireDefault(_fbapi);

var _gSheetsApi = __webpack_require__("Y+NB");

var _gSheetsApi2 = _interopRequireDefault(_gSheetsApi);

var _getRandomInteger = __webpack_require__("ez9B");

var _getRandomInteger2 = _interopRequireDefault(_getRandomInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  name: 'team-page',

  data: function data() {
    return {
      legends: _legends2.default,
      boardMembers: null,
      roster: null,
      quotedMembers: null,
      teamPicture: null,
      quote: {
        name: 'Sabor',
        source: '2003',
        text: 'Un grupo unido jamás será vencido Sabor'
      },
      intervalId: 0
    };
  },
  // end 'data()'

  mounted: function mounted() {
    var _this = this;

    (0, _fbapi2.default)('cusabor/picture', {
      redirect: false,
      height: '999999' // because facebook is fucking retarded and you can't get a simple image.
    }, function (response) {
      _this.teamPicture = response.data.url;
    });

    (0, _gSheetsApi2.default)('1ulbKpj6sHkf4bQqvgUk8clmP0C0AdMgW9Dk2YVB0C9w', // roster spreadsheet id
    'roster', // sheet name
    function (roster) {
      _this.roster = roster.map(function (memberInfo) {
        return new _Member2.default(memberInfo);
      });
      _this.boardMembers = _this.roster.filter(function (member) {
        return member.boardPosition;
      });
      _this.quotedMembers = _this.roster.filter(function (member) {
        return member.quote;
      });
      _this.setQuoteRandom();
      _this.intervalId = setInterval(_this.setQuoteRandom, 6000); // six seconds
    });
  },
  // end 'mounted()'

  beforeDestroy: function beforeDestroy() {
    clearInterval(this.intervalId);
  },
  // end 'beforeDestroy()'

  methods: {
    setQuote: function setQuote(member, stopInterval) {
      if (member.quote) {
        this.quote.source = member.school + ' ' + member.year;
        this.quote.name = member.name;
        this.quote.text = member.quote;
        stopInterval && clearInterval(this.intervalId);
      }
    },


    /*
     * Random functions aren't fantastic, could be bad performance.
     */
    setQuoteRandom: function setQuoteRandom() {
      do {
        var i = (0, _getRandomInteger2.default)(0, this.quotedMembers.length);
      } while (!this.quotedMembers[i].quote);
      this.setQuote(this.quotedMembers[i]);
    }
  } // end 'methods()'

};

/***/ }),

/***/ "xXSg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/*
 * Converts a json object to a query string.
 * i.e. from this:
 * { query1: 'dog', query2: '13', query3: 'carrot' }
 * to this:
 * 'query1=dog&query2=13&query3=carrot'
 */
exports.default = function (json) {
  return json ? Object.keys(json).map(function (key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
  }).join('&') : '';
};

/***/ })

});