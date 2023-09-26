(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mui"] = factory();
	else
		root["mui"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./layout/packages/icon-svg/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./layout/packages/icon-svg/index.js":
/*!*******************************************!*\
  !*** ./layout/packages/icon-svg/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue */ \"./layout/packages/icon-svg/index.vue\");\n\n_index_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].install = function (Vue) {\n  Vue.component(_index_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].name, _index_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (_index_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://mui/./layout/packages/icon-svg/index.js?");

/***/ }),

/***/ "./layout/packages/icon-svg/index.vue":
/*!********************************************!*\
  !*** ./layout/packages/icon-svg/index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_6d12d39e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6d12d39e& */ \"./layout/packages/icon-svg/index.vue?vue&type=template&id=6d12d39e&\");\n/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ \"./layout/packages/icon-svg/index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_6d12d39e_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=6d12d39e&lang=css& */ \"./layout/packages/icon-svg/index.vue?vue&type=style&index=0&id=6d12d39e&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_6d12d39e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_6d12d39e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"layout/packages/icon-svg/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://mui/./layout/packages/icon-svg/index.vue?");

/***/ }),

/***/ "./layout/packages/icon-svg/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./layout/packages/icon-svg/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./layout/packages/icon-svg/index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://mui/./layout/packages/icon-svg/index.vue?");

/***/ }),

/***/ "./layout/packages/icon-svg/index.vue?vue&type=style&index=0&id=6d12d39e&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./layout/packages/icon-svg/index.vue?vue&type=style&index=0&id=6d12d39e&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6d12d39e_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=6d12d39e&lang=css& */ \"./node_modules/vue-loader/lib/index.js?!./layout/packages/icon-svg/index.vue?vue&type=style&index=0&id=6d12d39e&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6d12d39e_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6d12d39e_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6d12d39e_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6d12d39e_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6d12d39e_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack://mui/./layout/packages/icon-svg/index.vue?");

/***/ }),

/***/ "./layout/packages/icon-svg/index.vue?vue&type=template&id=6d12d39e&":
/*!***************************************************************************!*\
  !*** ./layout/packages/icon-svg/index.vue?vue&type=template&id=6d12d39e& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6d12d39e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6d12d39e& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./layout/packages/icon-svg/index.vue?vue&type=template&id=6d12d39e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6d12d39e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6d12d39e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://mui/./layout/packages/icon-svg/index.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./layout/packages/icon-svg/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./layout/packages/icon-svg/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/index */ \"./utils/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"icon-svg\",\n\n  props: {\n    name: {\n      type: String,\n    },\n    className: {\n      type: String,\n    },\n    size: {\n      type: [String, Number],\n    },\n  },\n\n  data() {\n    return {\n      style2: {},\n    };\n  },\n\n  computed: {\n    iconName() {\n      return `#${this.name}`;\n    },\n    svgClass() {\n      return [\"icon-svg\", `icon-svg__${this.name}`, this.className];\n    },\n  },\n\n  mounted() {\n    this.style2 = {\n      fontSize: Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__[\"isNumber\"])(this.size) ? this.size + \"px\" : this.size,\n    };\n  },\n});\n\n\n//# sourceURL=webpack://mui/./layout/packages/icon-svg/index.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./layout/packages/icon-svg/index.vue?vue&type=style&index=0&id=6d12d39e&lang=css&":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./layout/packages/icon-svg/index.vue?vue&type=style&index=0&id=6d12d39e&lang=css& ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/* .icon-svg {\n\twidth: 1em;\n\theight: 1em;\n\tvertical-align: -0.15em;\n\tfill: currentColor;\n\toverflow: hidden;\n} */\n\n\n//# sourceURL=webpack://mui/./layout/packages/icon-svg/index.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./layout/packages/icon-svg/index.vue?vue&type=template&id=6d12d39e&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./layout/packages/icon-svg/index.vue?vue&type=template&id=6d12d39e& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c\n  return _c(\n    \"svg\",\n    {\n      class: _vm.svgClass,\n      style: _vm.style2,\n      attrs: { \"aria-hidden\": \"true\" },\n    },\n    [_c(\"use\", { attrs: { \"xlink:href\": _vm.iconName } })]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://mui/./layout/packages/icon-svg/index.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent(\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier /* server only */,\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options =\n    typeof scriptExports === 'function' ? scriptExports.options : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) {\n    // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n          injectStyles.call(\n            this,\n            (options.functional ? this.parent : this).$root.$options.shadowRoot\n          )\n        }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection(h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://mui/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: getUrlParam, getQueryStr, isPc, getBrowser, href, isArray, isObject, isNumber, isFunction, isString, isEmpty, isBoolean, last, clone, deepMerge, contains, orderBy, deepTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUrlParam\", function() { return getUrlParam; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getQueryStr\", function() { return getQueryStr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isPc\", function() { return isPc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBrowser\", function() { return getBrowser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"href\", function() { return href; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArray\", function() { return isArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return isObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNumber\", function() { return isNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isFunction\", function() { return isFunction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isString\", function() { return isString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isEmpty\", function() { return isEmpty; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isBoolean\", function() { return isBoolean; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"last\", function() { return last; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clone\", function() { return clone; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepMerge\", function() { return deepMerge; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contains\", function() { return contains; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderBy\", function() { return orderBy; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepTree\", function() { return deepTree; });\nfunction getUrlParam(name) {\n\tlet reg = new RegExp(\"(^|&)\" + name + \"=([^&]*)(&|$)\");\n\tlet r = window.location.search.substr(1).match(reg);\n\tif (r != null) return decodeURIComponent(r[2]);\n\treturn null;\n}\n\nconst getQueryStr = str => {\n\tlet LocString = String(window.document.location.href);\n\tlet rs = new RegExp(\"(^|)\" + str + \"=([^&]*)(&|$)\", \"gi\").exec(LocString),\n\t\ttmp;\n\tif ((tmp = rs)) {\n\t\tif (tmp[2].indexOf(\"#\") >= 0) {\n\t\t\treturn tmp[2].split(\"#\")[0];\n\t\t}\n\t\treturn tmp[2];\n\t}\n\treturn \"\";\n};\n\nfunction isPc() {\n\tconst userAgentInfo = navigator.userAgent;\n\tconst Agents = [\"Android\", \"iPhone\", \"SymbianOS\", \"Windows Phone\", \"iPad\", \"iPod\"];\n\tlet flag = true;\n\tfor (let v = 0; v < Agents.length; v++) {\n\t\tif (userAgentInfo.indexOf(Agents[v]) > 0) {\n\t\t\tflag = false;\n\t\t\tbreak;\n\t\t}\n\t}\n\treturn flag;\n}\n\nfunction getBrowser() {\n\tconst {\n\t\tclientHeight,\n\t\tclientWidth\n\t} = document.documentElement;\n\n\t// 浏览器信息\n\tconst ua = navigator.userAgent.toLowerCase();\n\n\t// 浏览器类型\n\tlet type = (ua.match(/firefox|chrome|safari|opera/g) || \"other\")[0];\n\n\tif ((ua.match(/msie|trident/g) || [])[0]) {\n\t\ttype = \"msie\";\n\t}\n\n\t// 平台标签\n\tlet tag = \"\";\n\n\tconst isTocuh =\n\t\t\"ontouchstart\" in window || ua.indexOf(\"touch\") !== -1 || ua.indexOf(\"mobile\") !== -1;\n\tif (isTocuh) {\n\t\tif (ua.indexOf(\"ipad\") !== -1) {\n\t\t\ttag = \"pad\";\n\t\t} else if (ua.indexOf(\"mobile\") !== -1) {\n\t\t\ttag = \"mobile\";\n\t\t} else if (ua.indexOf(\"android\") !== -1) {\n\t\t\ttag = \"androidPad\";\n\t\t} else {\n\t\t\ttag = \"pc\";\n\t\t}\n\t} else {\n\t\ttag = \"pc\";\n\t}\n\n\t// 浏览器内核\n\tlet prefix = \"\";\n\n\tswitch (type) {\n\t\tcase \"chrome\":\n\t\tcase \"safari\":\n\t\tcase \"mobile\":\n\t\t\tprefix = \"webkit\";\n\t\t\tbreak;\n\t\tcase \"msie\":\n\t\t\tprefix = \"ms\";\n\t\t\tbreak;\n\t\tcase \"firefox\":\n\t\t\tprefix = \"Moz\";\n\t\t\tbreak;\n\t\tcase \"opera\":\n\t\t\tprefix = \"O\";\n\t\t\tbreak;\n\t\tdefault:\n\t\t\tprefix = \"webkit\";\n\t\t\tbreak;\n\t}\n\n\t// 操作平台\n\tconst plat = ua.indexOf(\"android\") > 0 ? \"android\" : navigator.platform.toLowerCase();\n\n\t// 屏幕信息\n\tlet screen = \"full\";\n\n\tif (clientWidth < 768) {\n\t\tscreen = \"xs\";\n\t} else if (clientWidth < 992) {\n\t\tscreen = \"sm\";\n\t} else if (clientWidth < 1200) {\n\t\tscreen = \"md\";\n\t} else if (clientWidth < 1920) {\n\t\tscreen = \"xl\";\n\t} else {\n\t\tscreen = \"full\";\n\t}\n\n\t// 是否 ios\n\tconst isIOS = !!navigator.userAgent.match(/\\(i[^;]+;( U;)? CPU.+Mac OS X/);\n\n\t// 浏览器版本\n\tconst version = (ua.match(/[\\s\\S]+(?:rv|it|ra|ie)[\\\\/: ]([\\d.]\\+)/) || [])[1];\n\n\t// 是否 PC 端\n\tconst isPC = tag === \"pc\";\n\n\t// 是否移动端\n\tconst isMobile = isPC ? false : true;\n\n\t// 是否移动端 + 屏幕宽过小\n\tconst isMini = screen === \"xs\" || isMobile;\n\n\treturn {\n\t\theight: clientHeight,\n\t\twidth: clientWidth,\n\t\tversion,\n\t\ttype,\n\t\tplat,\n\t\ttag,\n\t\tprefix,\n\t\tisMobile,\n\t\tisIOS,\n\t\tisPC,\n\t\tisMini,\n\t\tscreen\n\t};\n}\n\nfunction href(path, newWindow) {\n\tconst {\n\t\tpathname\n\t} = window.location;\n\n\tif (pathname == path) {\n\t\treturn false;\n\t}\n\n\tlet url = \"\";\n\n\tif (newWindow) {\n\t\twindow.open(url);\n\t} else {\n\t\twindow.location.href = url;\n\t}\n}\n\nfunction isArray(value) {\n\tif (typeof Array.isArray === \"function\") {\n\t\treturn Array.isArray(value);\n\t} else {\n\t\treturn Object.prototype.toString.call(value) === \"[object Array]\";\n\t}\n}\n\nfunction isObject(value) {\n\treturn Object.prototype.toString.call(value) === \"[object Object]\";\n}\n\nfunction isNumber(value) {\n\treturn !isNaN(Number(value));\n}\n\nfunction isFunction(value) {\n\treturn typeof value == \"function\";\n}\n\nfunction isString(value) {\n\treturn typeof value == \"string\";\n}\n\nfunction isEmpty(value) {\n\tif (isArray(value)) {\n\t\treturn value.length === 0;\n\t}\n\n\tif (isObject(value)) {\n\t\treturn Object.keys(value).length === 0;\n\t}\n\n\treturn value === \"\" || value === undefined || value === null;\n}\n\nfunction isBoolean(value) {\n\treturn typeof value === \"boolean\";\n}\n\nfunction last(data) {\n\tif (isArray(data) || isString(data)) {\n\t\treturn data[data.length - 1];\n\t}\n}\n\nfunction clone(obj) {\n\treturn Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));\n}\n\nfunction deepMerge(a, b) {\n\tlet k;\n\tfor (k in b) {\n\t\ta[k] =\n\t\t\ta[k] && a[k].toString() === \"[object Object]\" ? deepMerge(a[k], b[k]) : (a[k] = b[k]);\n\t}\n\treturn a;\n}\n\nfunction contains(parent, node) {\n\tif (document.documentElement.contains) {\n\t\treturn parent !== node && parent.contains(node);\n\t} else {\n\t\twhile (node && (node = node.parentNode))\n\t\t\tif (node === parent) return true;\n\t\treturn false;\n\t}\n}\n\nfunction orderBy(list, key) {\n\treturn list.sort((a, b) => a[key] - b[key]);\n}\n\nfunction deepTree(list) {\n\tlet newList = [];\n\tlet map = {};\n\tlist.forEach(e => (map[e.id] = e));\n\tlist.forEach(e => {\n\t\tlet parent = map[e.parentId];\n\t\tif (parent) {\n\t\t\t(parent.children || (parent.children = [])).push(e);\n\t\t} else {\n\t\t\tnewList.push(e);\n\t\t}\n\t});\n\tconst fn = list => {\n\t\tlist.map(e => {\n\t\t\tif (e.children instanceof Array) {\n\t\t\t\t// e.children = orderBy(e.children, \"orderNum\");\n\t\t\t\tfn(e.children);\n\t\t\t}\n\t\t});\n\t};\n\tfn(newList);\n\treturn orderBy(newList, \"orderNum\");\n}\n\n//# sourceURL=webpack://mui/./utils/index.js?");

/***/ })

/******/ });
});