// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../Cargo.toml":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__wbindgen_closure_wrapper7523 = exports.__wbindgen_rethrow = exports.__wbindgen_throw = exports.__wbindgen_debug_string = exports.__wbindgen_string_get = exports.__wbg_set_afe54b1eeb1aa77c = exports.__wbg_global_62ea2619f58bf94d = exports.__wbg_window_492cfe63a6e41dfa = exports.__wbg_self_179e8c2a5a4c73a3 = exports.__wbg_globalThis_8ebfea75c2dd63ee = exports.__wbg_new_8172f4fed77fdb7c = exports.__wbg_is_a2bc492e20d950cf = exports.__wbg_call_e9f0ce4da840ab94 = exports.__wbg_newnoargs_e2fdfe2af14a2323 = exports.__wbg_removeChild_be8cb6ec13799e04 = exports.__wbg_insertBefore_9eecc8d5bbe722b5 = exports.__wbg_appendChild_8658f795c44d1316 = exports.__wbg_setnodeValue_b246d98e9aea8713 = exports.__wbg_lastChild_b7825410c31c6d62 = exports.__wbg_hash_118e5e08a994d5a7 = exports.__wbg_search_9444c9b4f9d75474 = exports.__wbg_pathname_e5d7dbebdeeddf83 = exports.__wbg_state_1eb59e81cf66c118 = exports.__wbg_instanceof_PopStateEvent_5743cfa21cfcdf6c = exports.__wbg_replaceState_c1e57cfd0600163b = exports.__wbg_pushState_e37da71e3deb8da5 = exports.__wbg_state_a6faa97d2b62299c = exports.__wbg_warn_f88df7e1e2a26187 = exports.__wbg_log_7fc0936bf7223435 = exports.__wbg_info_0c64856d96c69122 = exports.__wbg_error_b47ee9a774776bfa = exports.__wbg_error_7dcc755846c00ef7 = exports.__wbg_debug_cd8a0aad17c8c92f = exports.__wbg_setAttribute_156f15ecfed9f628 = exports.__wbg_removeAttribute_3ae98ff009f689b3 = exports.__wbg_namespaceURI_36cdaf4b00c65482 = exports.__wbg_setvalue_dc3cce23da13c2e9 = exports.__wbg_value_6d2605b80cdcbc03 = exports.__wbg_settype_d3d5022d7fd1ef0d = exports.__wbg_setchecked_4c76d21b2d916833 = exports.__wbg_instanceof_HtmlInputElement_aae90057bd26cb78 = exports.__wbg_removeEventListener_ccf115bbfa1fb019 = exports.__wbg_addEventListener_27eb43df29303d67 = exports.__wbg_preventDefault_7670dc6ff59bc226 = exports.__wbg_settype_b026aad6dfe74b9d = exports.__wbg_instanceof_HtmlButtonElement_f5c73c981d727655 = exports.__wbg_setvalue_fc815a91d9a4dec3 = exports.__wbg_value_036b553531ffb781 = exports.__wbg_instanceof_HtmlTextAreaElement_2be5c0dd95f91e2f = exports.__wbg_querySelector_e0528b8b8b25e9be = exports.__wbg_createTextNode_b7dc170e5271d075 = exports.__wbg_createElementNS_8f6ff05d30034b4f = exports.__wbg_createElement_d00b8e24838e36e1 = exports.__wbg_history_3de8d9a8b716d5e0 = exports.__wbg_location_4c98b1eeb5ceccc0 = exports.__wbg_document_d3b6d86af1c5d199 = exports.__wbg_instanceof_Window_e8f84259147dce74 = exports.__wbindgen_object_drop_ref = exports.__wbg_stack_558ba5917b466edd = exports.__wbg_new_59cb74e423758ede = exports.__wbg_error_4bb6c2a97407129a = exports.__wbindgen_cb_drop = exports.__wbindgen_is_undefined = exports.__wbindgen_object_clone_ref = exports.__wbindgen_string_new = exports.run = exports.default = void 0;

var _yew_app_bg = _interopRequireDefault(require("./pkg/yew_app_bg.wasm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _yew_app_bg.default;
exports.default = _default;
var run = _yew_app_bg.default.run;
exports.run = run;
var __wbindgen_string_new = _yew_app_bg.default.__wbindgen_string_new;
exports.__wbindgen_string_new = __wbindgen_string_new;
var __wbindgen_object_clone_ref = _yew_app_bg.default.__wbindgen_object_clone_ref;
exports.__wbindgen_object_clone_ref = __wbindgen_object_clone_ref;
var __wbindgen_is_undefined = _yew_app_bg.default.__wbindgen_is_undefined;
exports.__wbindgen_is_undefined = __wbindgen_is_undefined;
var __wbindgen_cb_drop = _yew_app_bg.default.__wbindgen_cb_drop;
exports.__wbindgen_cb_drop = __wbindgen_cb_drop;
var __wbg_error_4bb6c2a97407129a = _yew_app_bg.default.__wbg_error_4bb6c2a97407129a;
exports.__wbg_error_4bb6c2a97407129a = __wbg_error_4bb6c2a97407129a;
var __wbg_new_59cb74e423758ede = _yew_app_bg.default.__wbg_new_59cb74e423758ede;
exports.__wbg_new_59cb74e423758ede = __wbg_new_59cb74e423758ede;
var __wbg_stack_558ba5917b466edd = _yew_app_bg.default.__wbg_stack_558ba5917b466edd;
exports.__wbg_stack_558ba5917b466edd = __wbg_stack_558ba5917b466edd;
var __wbindgen_object_drop_ref = _yew_app_bg.default.__wbindgen_object_drop_ref;
exports.__wbindgen_object_drop_ref = __wbindgen_object_drop_ref;
var __wbg_instanceof_Window_e8f84259147dce74 = _yew_app_bg.default.__wbg_instanceof_Window_e8f84259147dce74;
exports.__wbg_instanceof_Window_e8f84259147dce74 = __wbg_instanceof_Window_e8f84259147dce74;
var __wbg_document_d3b6d86af1c5d199 = _yew_app_bg.default.__wbg_document_d3b6d86af1c5d199;
exports.__wbg_document_d3b6d86af1c5d199 = __wbg_document_d3b6d86af1c5d199;
var __wbg_location_4c98b1eeb5ceccc0 = _yew_app_bg.default.__wbg_location_4c98b1eeb5ceccc0;
exports.__wbg_location_4c98b1eeb5ceccc0 = __wbg_location_4c98b1eeb5ceccc0;
var __wbg_history_3de8d9a8b716d5e0 = _yew_app_bg.default.__wbg_history_3de8d9a8b716d5e0;
exports.__wbg_history_3de8d9a8b716d5e0 = __wbg_history_3de8d9a8b716d5e0;
var __wbg_createElement_d00b8e24838e36e1 = _yew_app_bg.default.__wbg_createElement_d00b8e24838e36e1;
exports.__wbg_createElement_d00b8e24838e36e1 = __wbg_createElement_d00b8e24838e36e1;
var __wbg_createElementNS_8f6ff05d30034b4f = _yew_app_bg.default.__wbg_createElementNS_8f6ff05d30034b4f;
exports.__wbg_createElementNS_8f6ff05d30034b4f = __wbg_createElementNS_8f6ff05d30034b4f;
var __wbg_createTextNode_b7dc170e5271d075 = _yew_app_bg.default.__wbg_createTextNode_b7dc170e5271d075;
exports.__wbg_createTextNode_b7dc170e5271d075 = __wbg_createTextNode_b7dc170e5271d075;
var __wbg_querySelector_e0528b8b8b25e9be = _yew_app_bg.default.__wbg_querySelector_e0528b8b8b25e9be;
exports.__wbg_querySelector_e0528b8b8b25e9be = __wbg_querySelector_e0528b8b8b25e9be;
var __wbg_instanceof_HtmlTextAreaElement_2be5c0dd95f91e2f = _yew_app_bg.default.__wbg_instanceof_HtmlTextAreaElement_2be5c0dd95f91e2f;
exports.__wbg_instanceof_HtmlTextAreaElement_2be5c0dd95f91e2f = __wbg_instanceof_HtmlTextAreaElement_2be5c0dd95f91e2f;
var __wbg_value_036b553531ffb781 = _yew_app_bg.default.__wbg_value_036b553531ffb781;
exports.__wbg_value_036b553531ffb781 = __wbg_value_036b553531ffb781;
var __wbg_setvalue_fc815a91d9a4dec3 = _yew_app_bg.default.__wbg_setvalue_fc815a91d9a4dec3;
exports.__wbg_setvalue_fc815a91d9a4dec3 = __wbg_setvalue_fc815a91d9a4dec3;
var __wbg_instanceof_HtmlButtonElement_f5c73c981d727655 = _yew_app_bg.default.__wbg_instanceof_HtmlButtonElement_f5c73c981d727655;
exports.__wbg_instanceof_HtmlButtonElement_f5c73c981d727655 = __wbg_instanceof_HtmlButtonElement_f5c73c981d727655;
var __wbg_settype_b026aad6dfe74b9d = _yew_app_bg.default.__wbg_settype_b026aad6dfe74b9d;
exports.__wbg_settype_b026aad6dfe74b9d = __wbg_settype_b026aad6dfe74b9d;
var __wbg_preventDefault_7670dc6ff59bc226 = _yew_app_bg.default.__wbg_preventDefault_7670dc6ff59bc226;
exports.__wbg_preventDefault_7670dc6ff59bc226 = __wbg_preventDefault_7670dc6ff59bc226;
var __wbg_addEventListener_27eb43df29303d67 = _yew_app_bg.default.__wbg_addEventListener_27eb43df29303d67;
exports.__wbg_addEventListener_27eb43df29303d67 = __wbg_addEventListener_27eb43df29303d67;
var __wbg_removeEventListener_ccf115bbfa1fb019 = _yew_app_bg.default.__wbg_removeEventListener_ccf115bbfa1fb019;
exports.__wbg_removeEventListener_ccf115bbfa1fb019 = __wbg_removeEventListener_ccf115bbfa1fb019;
var __wbg_instanceof_HtmlInputElement_aae90057bd26cb78 = _yew_app_bg.default.__wbg_instanceof_HtmlInputElement_aae90057bd26cb78;
exports.__wbg_instanceof_HtmlInputElement_aae90057bd26cb78 = __wbg_instanceof_HtmlInputElement_aae90057bd26cb78;
var __wbg_setchecked_4c76d21b2d916833 = _yew_app_bg.default.__wbg_setchecked_4c76d21b2d916833;
exports.__wbg_setchecked_4c76d21b2d916833 = __wbg_setchecked_4c76d21b2d916833;
var __wbg_settype_d3d5022d7fd1ef0d = _yew_app_bg.default.__wbg_settype_d3d5022d7fd1ef0d;
exports.__wbg_settype_d3d5022d7fd1ef0d = __wbg_settype_d3d5022d7fd1ef0d;
var __wbg_value_6d2605b80cdcbc03 = _yew_app_bg.default.__wbg_value_6d2605b80cdcbc03;
exports.__wbg_value_6d2605b80cdcbc03 = __wbg_value_6d2605b80cdcbc03;
var __wbg_setvalue_dc3cce23da13c2e9 = _yew_app_bg.default.__wbg_setvalue_dc3cce23da13c2e9;
exports.__wbg_setvalue_dc3cce23da13c2e9 = __wbg_setvalue_dc3cce23da13c2e9;
var __wbg_namespaceURI_36cdaf4b00c65482 = _yew_app_bg.default.__wbg_namespaceURI_36cdaf4b00c65482;
exports.__wbg_namespaceURI_36cdaf4b00c65482 = __wbg_namespaceURI_36cdaf4b00c65482;
var __wbg_removeAttribute_3ae98ff009f689b3 = _yew_app_bg.default.__wbg_removeAttribute_3ae98ff009f689b3;
exports.__wbg_removeAttribute_3ae98ff009f689b3 = __wbg_removeAttribute_3ae98ff009f689b3;
var __wbg_setAttribute_156f15ecfed9f628 = _yew_app_bg.default.__wbg_setAttribute_156f15ecfed9f628;
exports.__wbg_setAttribute_156f15ecfed9f628 = __wbg_setAttribute_156f15ecfed9f628;
var __wbg_debug_cd8a0aad17c8c92f = _yew_app_bg.default.__wbg_debug_cd8a0aad17c8c92f;
exports.__wbg_debug_cd8a0aad17c8c92f = __wbg_debug_cd8a0aad17c8c92f;
var __wbg_error_7dcc755846c00ef7 = _yew_app_bg.default.__wbg_error_7dcc755846c00ef7;
exports.__wbg_error_7dcc755846c00ef7 = __wbg_error_7dcc755846c00ef7;
var __wbg_error_b47ee9a774776bfa = _yew_app_bg.default.__wbg_error_b47ee9a774776bfa;
exports.__wbg_error_b47ee9a774776bfa = __wbg_error_b47ee9a774776bfa;
var __wbg_info_0c64856d96c69122 = _yew_app_bg.default.__wbg_info_0c64856d96c69122;
exports.__wbg_info_0c64856d96c69122 = __wbg_info_0c64856d96c69122;
var __wbg_log_7fc0936bf7223435 = _yew_app_bg.default.__wbg_log_7fc0936bf7223435;
exports.__wbg_log_7fc0936bf7223435 = __wbg_log_7fc0936bf7223435;
var __wbg_warn_f88df7e1e2a26187 = _yew_app_bg.default.__wbg_warn_f88df7e1e2a26187;
exports.__wbg_warn_f88df7e1e2a26187 = __wbg_warn_f88df7e1e2a26187;
var __wbg_state_a6faa97d2b62299c = _yew_app_bg.default.__wbg_state_a6faa97d2b62299c;
exports.__wbg_state_a6faa97d2b62299c = __wbg_state_a6faa97d2b62299c;
var __wbg_pushState_e37da71e3deb8da5 = _yew_app_bg.default.__wbg_pushState_e37da71e3deb8da5;
exports.__wbg_pushState_e37da71e3deb8da5 = __wbg_pushState_e37da71e3deb8da5;
var __wbg_replaceState_c1e57cfd0600163b = _yew_app_bg.default.__wbg_replaceState_c1e57cfd0600163b;
exports.__wbg_replaceState_c1e57cfd0600163b = __wbg_replaceState_c1e57cfd0600163b;
var __wbg_instanceof_PopStateEvent_5743cfa21cfcdf6c = _yew_app_bg.default.__wbg_instanceof_PopStateEvent_5743cfa21cfcdf6c;
exports.__wbg_instanceof_PopStateEvent_5743cfa21cfcdf6c = __wbg_instanceof_PopStateEvent_5743cfa21cfcdf6c;
var __wbg_state_1eb59e81cf66c118 = _yew_app_bg.default.__wbg_state_1eb59e81cf66c118;
exports.__wbg_state_1eb59e81cf66c118 = __wbg_state_1eb59e81cf66c118;
var __wbg_pathname_e5d7dbebdeeddf83 = _yew_app_bg.default.__wbg_pathname_e5d7dbebdeeddf83;
exports.__wbg_pathname_e5d7dbebdeeddf83 = __wbg_pathname_e5d7dbebdeeddf83;
var __wbg_search_9444c9b4f9d75474 = _yew_app_bg.default.__wbg_search_9444c9b4f9d75474;
exports.__wbg_search_9444c9b4f9d75474 = __wbg_search_9444c9b4f9d75474;
var __wbg_hash_118e5e08a994d5a7 = _yew_app_bg.default.__wbg_hash_118e5e08a994d5a7;
exports.__wbg_hash_118e5e08a994d5a7 = __wbg_hash_118e5e08a994d5a7;
var __wbg_lastChild_b7825410c31c6d62 = _yew_app_bg.default.__wbg_lastChild_b7825410c31c6d62;
exports.__wbg_lastChild_b7825410c31c6d62 = __wbg_lastChild_b7825410c31c6d62;
var __wbg_setnodeValue_b246d98e9aea8713 = _yew_app_bg.default.__wbg_setnodeValue_b246d98e9aea8713;
exports.__wbg_setnodeValue_b246d98e9aea8713 = __wbg_setnodeValue_b246d98e9aea8713;
var __wbg_appendChild_8658f795c44d1316 = _yew_app_bg.default.__wbg_appendChild_8658f795c44d1316;
exports.__wbg_appendChild_8658f795c44d1316 = __wbg_appendChild_8658f795c44d1316;
var __wbg_insertBefore_9eecc8d5bbe722b5 = _yew_app_bg.default.__wbg_insertBefore_9eecc8d5bbe722b5;
exports.__wbg_insertBefore_9eecc8d5bbe722b5 = __wbg_insertBefore_9eecc8d5bbe722b5;
var __wbg_removeChild_be8cb6ec13799e04 = _yew_app_bg.default.__wbg_removeChild_be8cb6ec13799e04;
exports.__wbg_removeChild_be8cb6ec13799e04 = __wbg_removeChild_be8cb6ec13799e04;
var __wbg_newnoargs_e2fdfe2af14a2323 = _yew_app_bg.default.__wbg_newnoargs_e2fdfe2af14a2323;
exports.__wbg_newnoargs_e2fdfe2af14a2323 = __wbg_newnoargs_e2fdfe2af14a2323;
var __wbg_call_e9f0ce4da840ab94 = _yew_app_bg.default.__wbg_call_e9f0ce4da840ab94;
exports.__wbg_call_e9f0ce4da840ab94 = __wbg_call_e9f0ce4da840ab94;
var __wbg_is_a2bc492e20d950cf = _yew_app_bg.default.__wbg_is_a2bc492e20d950cf;
exports.__wbg_is_a2bc492e20d950cf = __wbg_is_a2bc492e20d950cf;
var __wbg_new_8172f4fed77fdb7c = _yew_app_bg.default.__wbg_new_8172f4fed77fdb7c;
exports.__wbg_new_8172f4fed77fdb7c = __wbg_new_8172f4fed77fdb7c;
var __wbg_globalThis_8ebfea75c2dd63ee = _yew_app_bg.default.__wbg_globalThis_8ebfea75c2dd63ee;
exports.__wbg_globalThis_8ebfea75c2dd63ee = __wbg_globalThis_8ebfea75c2dd63ee;
var __wbg_self_179e8c2a5a4c73a3 = _yew_app_bg.default.__wbg_self_179e8c2a5a4c73a3;
exports.__wbg_self_179e8c2a5a4c73a3 = __wbg_self_179e8c2a5a4c73a3;
var __wbg_window_492cfe63a6e41dfa = _yew_app_bg.default.__wbg_window_492cfe63a6e41dfa;
exports.__wbg_window_492cfe63a6e41dfa = __wbg_window_492cfe63a6e41dfa;
var __wbg_global_62ea2619f58bf94d = _yew_app_bg.default.__wbg_global_62ea2619f58bf94d;
exports.__wbg_global_62ea2619f58bf94d = __wbg_global_62ea2619f58bf94d;
var __wbg_set_afe54b1eeb1aa77c = _yew_app_bg.default.__wbg_set_afe54b1eeb1aa77c;
exports.__wbg_set_afe54b1eeb1aa77c = __wbg_set_afe54b1eeb1aa77c;
var __wbindgen_string_get = _yew_app_bg.default.__wbindgen_string_get;
exports.__wbindgen_string_get = __wbindgen_string_get;
var __wbindgen_debug_string = _yew_app_bg.default.__wbindgen_debug_string;
exports.__wbindgen_debug_string = __wbindgen_debug_string;
var __wbindgen_throw = _yew_app_bg.default.__wbindgen_throw;
exports.__wbindgen_throw = __wbindgen_throw;
var __wbindgen_rethrow = _yew_app_bg.default.__wbindgen_rethrow;
exports.__wbindgen_rethrow = __wbindgen_rethrow;
var __wbindgen_closure_wrapper7523 = _yew_app_bg.default.__wbindgen_closure_wrapper7523;
exports.__wbindgen_closure_wrapper7523 = __wbindgen_closure_wrapper7523;
},{"./pkg/yew_app_bg.wasm":"../pkg/yew_app_bg.wasm"}],"index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Cargo_toml_1 = require("../Cargo.toml");

Cargo_toml_1.run();
},{"../Cargo.toml":"../Cargo.toml"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "44055" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/parcel-bundler/src/builtins/_empty.js":[function(require,module,exports) {

},{}],"../node_modules/parcel-plugin-wasm.rs/wasm-loader.js":[function(require,module,exports) {
var global = arguments[3];
var __dirname = "/home/chrisp/lab/clpweb/pyew/node_modules/parcel-plugin-wasm.rs";
var wasm;const __exports = {};

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');

    heap[idx] = obj;
    return idx;
}

function getObject(idx) { return heap[idx]; }

function _assertBoolean(n) {
    if (typeof(n) !== 'boolean') {
        throw new Error('expected a boolean argument');
    }
}

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (typeof(arg) !== 'string') throw new Error('expected a string argument');

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);
        if (ret.read !== arg.length) throw new Error('failed to pass whole string');
        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);

            } else {
                state.a = a;
            }
        }
    };
    real.original = state;

    return real;
}

function logError(f) {
    return function () {
        try {
            return f.apply(this, arguments);

        } catch (e) {
            let error = (function () {
                try {
                    return e instanceof Error ? `${e.message}\n\nStack:\n${e.stack}` : e.toString();
                } catch(_) {
                    return "<failed to stringify thrown value>";
                }
            }());
            console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", error);
            throw e;
        }
    };
}

function _assertNum(n) {
    if (typeof(n) !== 'number') throw new Error('expected a number argument');
}

let stack_pointer = 32;

function addBorrowedObject(obj) {
    if (stack_pointer == 1) throw new Error('out of js stack');
    heap[--stack_pointer] = obj;
    return stack_pointer;
}
function __wbg_adapter_20(arg0, arg1, arg2) {
    try {
        _assertNum(arg0);
        _assertNum(arg1);
        wasm._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h15c136516fc81a66(arg0, arg1, addBorrowedObject(arg2));
    } finally {
        heap[stack_pointer++] = undefined;
    }
}

/**
*/
__exports. run = function() {
    wasm.run();
}

function handleError(f) {
    return function () {
        try {
            return f.apply(this, arguments);

        } catch (e) {
            wasm.__wbindgen_exn_store(addHeapObject(e));
        }
    };
}

__exports.__wbindgen_string_new = function(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

__exports.__wbindgen_object_clone_ref = function(arg0) {
    var ret = getObject(arg0);
    return addHeapObject(ret);
};

__exports.__wbindgen_is_undefined = function(arg0) {
    var ret = getObject(arg0) === undefined;
    _assertBoolean(ret);
    return ret;
};

__exports.__wbindgen_cb_drop = function(arg0) {
    const obj = takeObject(arg0).original;
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return true;
    }
    var ret = false;
    _assertBoolean(ret);
    return ret;
};

__exports.__wbg_error_4bb6c2a97407129a = logError(function(arg0, arg1) {
    try {
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        wasm.__wbindgen_free(arg0, arg1);
    }
});

__exports.__wbg_new_59cb74e423758ede = logError(function() {
    var ret = new Error();
    return addHeapObject(ret);
});

__exports.__wbg_stack_558ba5917b466edd = logError(function(arg0, arg1) {
    var ret = getObject(arg1).stack;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
});

__exports.__wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

__exports.__wbg_instanceof_Window_e8f84259147dce74 = logError(function(arg0) {
    var ret = getObject(arg0) instanceof Window;
    _assertBoolean(ret);
    return ret;
});

__exports.__wbg_document_d3b6d86af1c5d199 = logError(function(arg0) {
    var ret = getObject(arg0).document;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

__exports.__wbg_location_4c98b1eeb5ceccc0 = logError(function(arg0) {
    var ret = getObject(arg0).location;
    return addHeapObject(ret);
});

__exports.__wbg_history_3de8d9a8b716d5e0 = handleError(function(arg0) {
    var ret = getObject(arg0).history;
    return addHeapObject(ret);
});

__exports.__wbg_createElement_d00b8e24838e36e1 = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).createElement(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
});

__exports.__wbg_createElementNS_8f6ff05d30034b4f = handleError(function(arg0, arg1, arg2, arg3, arg4) {
    var ret = getObject(arg0).createElementNS(arg1 === 0 ? undefined : getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
    return addHeapObject(ret);
});

__exports.__wbg_createTextNode_b7dc170e5271d075 = logError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).createTextNode(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
});

__exports.__wbg_querySelector_e0528b8b8b25e9be = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).querySelector(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

__exports.__wbg_instanceof_HtmlTextAreaElement_2be5c0dd95f91e2f = logError(function(arg0) {
    var ret = getObject(arg0) instanceof HTMLTextAreaElement;
    _assertBoolean(ret);
    return ret;
});

__exports.__wbg_value_036b553531ffb781 = logError(function(arg0, arg1) {
    var ret = getObject(arg1).value;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
});

__exports.__wbg_setvalue_fc815a91d9a4dec3 = logError(function(arg0, arg1, arg2) {
    getObject(arg0).value = getStringFromWasm0(arg1, arg2);
});

__exports.__wbg_instanceof_HtmlButtonElement_f5c73c981d727655 = logError(function(arg0) {
    var ret = getObject(arg0) instanceof HTMLButtonElement;
    _assertBoolean(ret);
    return ret;
});

__exports.__wbg_settype_b026aad6dfe74b9d = logError(function(arg0, arg1, arg2) {
    getObject(arg0).type = getStringFromWasm0(arg1, arg2);
});

__exports.__wbg_preventDefault_7670dc6ff59bc226 = logError(function(arg0) {
    getObject(arg0).preventDefault();
});

__exports.__wbg_addEventListener_27eb43df29303d67 = handleError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).addEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3), getObject(arg4));
});

__exports.__wbg_removeEventListener_ccf115bbfa1fb019 = handleError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).removeEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3), arg4 !== 0);
});

__exports.__wbg_instanceof_HtmlInputElement_aae90057bd26cb78 = logError(function(arg0) {
    var ret = getObject(arg0) instanceof HTMLInputElement;
    _assertBoolean(ret);
    return ret;
});

__exports.__wbg_setchecked_4c76d21b2d916833 = logError(function(arg0, arg1) {
    getObject(arg0).checked = arg1 !== 0;
});

__exports.__wbg_settype_d3d5022d7fd1ef0d = logError(function(arg0, arg1, arg2) {
    getObject(arg0).type = getStringFromWasm0(arg1, arg2);
});

__exports.__wbg_value_6d2605b80cdcbc03 = logError(function(arg0, arg1) {
    var ret = getObject(arg1).value;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
});

__exports.__wbg_setvalue_dc3cce23da13c2e9 = logError(function(arg0, arg1, arg2) {
    getObject(arg0).value = getStringFromWasm0(arg1, arg2);
});

__exports.__wbg_namespaceURI_36cdaf4b00c65482 = logError(function(arg0, arg1) {
    var ret = getObject(arg1).namespaceURI;
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
});

__exports.__wbg_removeAttribute_3ae98ff009f689b3 = handleError(function(arg0, arg1, arg2) {
    getObject(arg0).removeAttribute(getStringFromWasm0(arg1, arg2));
});

__exports.__wbg_setAttribute_156f15ecfed9f628 = handleError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
});

__exports.__wbg_debug_cd8a0aad17c8c92f = logError(function(arg0, arg1, arg2, arg3) {
    console.debug(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
});

__exports.__wbg_error_7dcc755846c00ef7 = logError(function(arg0) {
    console.error(getObject(arg0));
});

__exports.__wbg_error_b47ee9a774776bfa = logError(function(arg0, arg1, arg2, arg3) {
    console.error(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
});

__exports.__wbg_info_0c64856d96c69122 = logError(function(arg0, arg1, arg2, arg3) {
    console.info(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
});

__exports.__wbg_log_7fc0936bf7223435 = logError(function(arg0, arg1, arg2, arg3) {
    console.log(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
});

__exports.__wbg_warn_f88df7e1e2a26187 = logError(function(arg0, arg1, arg2, arg3) {
    console.warn(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
});

__exports.__wbg_state_a6faa97d2b62299c = handleError(function(arg0) {
    var ret = getObject(arg0).state;
    return addHeapObject(ret);
});

__exports.__wbg_pushState_e37da71e3deb8da5 = handleError(function(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).pushState(getObject(arg1), getStringFromWasm0(arg2, arg3), arg4 === 0 ? undefined : getStringFromWasm0(arg4, arg5));
});

__exports.__wbg_replaceState_c1e57cfd0600163b = handleError(function(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).replaceState(getObject(arg1), getStringFromWasm0(arg2, arg3), arg4 === 0 ? undefined : getStringFromWasm0(arg4, arg5));
});

__exports.__wbg_instanceof_PopStateEvent_5743cfa21cfcdf6c = logError(function(arg0) {
    var ret = getObject(arg0) instanceof PopStateEvent;
    _assertBoolean(ret);
    return ret;
});

__exports.__wbg_state_1eb59e81cf66c118 = logError(function(arg0) {
    var ret = getObject(arg0).state;
    return addHeapObject(ret);
});

__exports.__wbg_pathname_e5d7dbebdeeddf83 = handleError(function(arg0, arg1) {
    var ret = getObject(arg1).pathname;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
});

__exports.__wbg_search_9444c9b4f9d75474 = handleError(function(arg0, arg1) {
    var ret = getObject(arg1).search;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
});

__exports.__wbg_hash_118e5e08a994d5a7 = handleError(function(arg0, arg1) {
    var ret = getObject(arg1).hash;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
});

__exports.__wbg_lastChild_b7825410c31c6d62 = logError(function(arg0) {
    var ret = getObject(arg0).lastChild;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

__exports.__wbg_setnodeValue_b246d98e9aea8713 = logError(function(arg0, arg1, arg2) {
    getObject(arg0).nodeValue = arg1 === 0 ? undefined : getStringFromWasm0(arg1, arg2);
});

__exports.__wbg_appendChild_8658f795c44d1316 = handleError(function(arg0, arg1) {
    var ret = getObject(arg0).appendChild(getObject(arg1));
    return addHeapObject(ret);
});

__exports.__wbg_insertBefore_9eecc8d5bbe722b5 = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).insertBefore(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
});

__exports.__wbg_removeChild_be8cb6ec13799e04 = handleError(function(arg0, arg1) {
    var ret = getObject(arg0).removeChild(getObject(arg1));
    return addHeapObject(ret);
});

__exports.__wbg_newnoargs_e2fdfe2af14a2323 = logError(function(arg0, arg1) {
    var ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
});

__exports.__wbg_call_e9f0ce4da840ab94 = handleError(function(arg0, arg1) {
    var ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
});

__exports.__wbg_is_a2bc492e20d950cf = logError(function(arg0, arg1) {
    var ret = Object.is(getObject(arg0), getObject(arg1));
    _assertBoolean(ret);
    return ret;
});

__exports.__wbg_new_8172f4fed77fdb7c = logError(function() {
    var ret = new Object();
    return addHeapObject(ret);
});

__exports.__wbg_globalThis_8ebfea75c2dd63ee = handleError(function() {
    var ret = globalThis.globalThis;
    return addHeapObject(ret);
});

__exports.__wbg_self_179e8c2a5a4c73a3 = handleError(function() {
    var ret = self.self;
    return addHeapObject(ret);
});

__exports.__wbg_window_492cfe63a6e41dfa = handleError(function() {
    var ret = window.window;
    return addHeapObject(ret);
});

__exports.__wbg_global_62ea2619f58bf94d = handleError(function() {
    var ret = global.global;
    return addHeapObject(ret);
});

__exports.__wbg_set_afe54b1eeb1aa77c = handleError(function(arg0, arg1, arg2) {
    var ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
    _assertBoolean(ret);
    return ret;
});

__exports.__wbindgen_string_get = function(arg0, arg1) {
    const obj = getObject(arg1);
    var ret = typeof(obj) === 'string' ? obj : undefined;
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

__exports.__wbindgen_debug_string = function(arg0, arg1) {
    var ret = debugString(getObject(arg1));
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

__exports.__wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

__exports.__wbindgen_rethrow = function(arg0) {
    throw takeObject(arg0);
};

__exports.__wbindgen_closure_wrapper7523 = logError(function(arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 406, __wbg_adapter_20);
    return addHeapObject(ret);
});



      function init(wasm_path) {
          const fetchPromise = fetch(wasm_path);
          let resultPromise;
          if (typeof WebAssembly.instantiateStreaming === 'function') {
              resultPromise = WebAssembly.instantiateStreaming(fetchPromise, { './yew_app_bg.js': __exports });
          } else {
              resultPromise = fetchPromise
              .then(response => response.arrayBuffer())
              .then(buffer => WebAssembly.instantiate(buffer, { './yew_app_bg.js': __exports }));
          }
          return resultPromise.then(({instance}) => {
              wasm = init.wasm = instance.exports;
              __exports.wasm = wasm;
              return;
          });
      };
      function init_node(wasm_path) {
          const fs = require('fs');
          return new Promise(function(resolve, reject) {
              fs.readFile(__dirname + wasm_path, function(err, data) {
                  if (err) {
                      reject(err);
                  } else {
                      resolve(data.buffer);
                  }
              });
          })
          .then(data => WebAssembly.instantiate(data, { './yew_app_bg': __exports }))
          .then(({instance}) => {
              wasm = init.wasm = instance.exports;
              __exports.wasm = wasm;
              return;
          });
      }
      const wasm_bindgen = Object.assign(false ? init_node : init, __exports);
      module.exports = function loadWASMBundle(bundle) {
            return wasm_bindgen(bundle).then(() => __exports)
      }
    
},{"fs":"../node_modules/parcel-bundler/src/builtins/_empty.js"}],0:[function(require,module,exports) {
var b=require("../node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("wasm",require("../node_modules/parcel-plugin-wasm.rs/wasm-loader.js"));b.load([["yew_app_bg.a31f2430.wasm","../pkg/yew_app_bg.wasm"]]).then(function(){require("index.ts");});
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/static.77de5100.js.map