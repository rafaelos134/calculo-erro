/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_rafael_visualcode_site_puro_teste_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_rafael_visualcode_site_puro_teste_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_rafael_visualcode_site_puro_teste_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _home_rafael_visualcode_site_puro_teste_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _home_rafael_visualcode_site_puro_teste_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/home/rafael/visualcode/site puro/teste/pages/index.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_home_rafael_visualcode_site_puro_teste_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_home_rafael_visualcode_site_puro_teste_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_home_rafael_visualcode_site_puro_teste_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nfunction fazPost(url, body) {\n  console.log(\"Body=\", body);\n  var request = new XMLHttpRequest();\n  request.open(\"POST\", url, true);\n  request.setRequestHeader(\"Content-type\", \"application/json\");\n  request.send(JSON.stringify(body));\n\n  request.onload = function () {\n    console.log(this.responseText);\n  };\n\n  return request.responseText;\n}\n\nfunction mandavalor(t) {\n  var url = \"https://polar-headland-20103.herokuapp.com/https://teste-ca.herokuapp.com//hello\";\n  fazPost(url, t);\n}\n\nvar Input = /*#__PURE__*/function (_React$Component) {\n  (0,_home_rafael_visualcode_site_puro_teste_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(Input, _React$Component);\n\n  var _super = _createSuper(Input);\n\n  function Input() {\n    var _this;\n\n    (0,_home_rafael_visualcode_site_puro_teste_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Input);\n\n    _this = _super.call(this);\n    _this.state = {\n      variaveis: \"\",\n      valordavariavel: \"\",\n      f: \"\",\n      erro: \"\"\n    };\n\n    _this.onChange = function (evento) {\n      var state = Object.assign({}, _this.state);\n      var campo = evento.target.name;\n      state[campo] = evento.target.value;\n\n      _this.setState(state);\n    };\n\n    _this.onSubmit = function (evento) {\n      evento.preventDefault();\n      var t = _this.state;\n      mandavalor(t);\n    };\n\n    return _this;\n  }\n\n  (0,_home_rafael_visualcode_site_puro_teste_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Input, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\"variaveis:\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          name: \"variaveis\",\n          value: this.state.evento,\n          onChange: this.onChange,\n          type: \"text\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 19\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 9\n        }, this), \"valordavariavel:\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          name: \"valordavariavel\",\n          value: this.state.evento,\n          onChange: this.onChange,\n          type: \"text\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 25\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 9\n        }, this), \"f:\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          name: \"f\",\n          value: this.state.evento,\n          onChange: this.onChange,\n          type: \"text\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 9\n        }, this), \"erro:\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          name: \"erro\",\n          value: this.state.evento,\n          onChange: this.onChange,\n          type: \"text\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 14\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          onClick: this.onSubmit,\n          children: \"enviar\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this);\n    }\n  }]);\n\n  return Input;\n}((react__WEBPACK_IMPORTED_MODULE_7___default().Component));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJmYXpQb3N0IiwidXJsIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5Iiwib25sb2FkIiwicmVzcG9uc2VUZXh0IiwibWFuZGF2YWxvciIsInQiLCJJbnB1dCIsInN0YXRlIiwidmFyaWF2ZWlzIiwidmFsb3JkYXZhcmlhdmVsIiwiZiIsImVycm8iLCJvbkNoYW5nZSIsImV2ZW50byIsIk9iamVjdCIsImFzc2lnbiIsImNhbXBvIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic2V0U3RhdGUiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFJQSxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQkMsSUFBdEIsRUFBMkI7QUFDdkJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBb0JGLElBQXBCO0FBQ0EsTUFBSUcsT0FBTyxHQUFHLElBQUlDLGNBQUosRUFBZDtBQUNBRCxTQUFPLENBQUNFLElBQVIsQ0FBYSxNQUFiLEVBQW9CTixHQUFwQixFQUF3QixJQUF4QjtBQUNBSSxTQUFPLENBQUNHLGdCQUFSLENBQXlCLGNBQXpCLEVBQXdDLGtCQUF4QztBQUNBSCxTQUFPLENBQUNJLElBQVIsQ0FBYUMsSUFBSSxDQUFDQyxTQUFMLENBQWVULElBQWYsQ0FBYjs7QUFFQUcsU0FBTyxDQUFDTyxNQUFSLEdBQWlCLFlBQVU7QUFDdkJULFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtTLFlBQWpCO0FBQ0gsR0FGRDs7QUFJQSxTQUFPUixPQUFPLENBQUNRLFlBQWY7QUFDSDs7QUFFRCxTQUFTQyxVQUFULENBQW9CQyxDQUFwQixFQUFzQjtBQUNsQixNQUFJZCxHQUFHLEdBQUcsa0ZBQVY7QUFHQUQsU0FBTyxDQUFDQyxHQUFELEVBQUtjLENBQUwsQ0FBUDtBQUNIOztJQUdLQyxLOzs7OztBQUNGLG1CQUFhO0FBQUE7O0FBQUE7O0FBQ1Q7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsZUFBUyxFQUFFLEVBREY7QUFFVEMscUJBQWUsRUFBQyxFQUZQO0FBR1RDLE9BQUMsRUFBQyxFQUhPO0FBSVRDLFVBQUksRUFBQztBQUpJLEtBQWI7O0FBTUEsVUFBS0MsUUFBTCxHQUFnQixVQUFDQyxNQUFELEVBQVU7QUFDdEIsVUFBTU4sS0FBSyxHQUFHTyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWlCLE1BQUtSLEtBQXRCLENBQWQ7QUFDQSxVQUFNUyxLQUFLLEdBQUdILE1BQU0sQ0FBQ0ksTUFBUCxDQUFjQyxJQUE1QjtBQUNBWCxXQUFLLENBQUNTLEtBQUQsQ0FBTCxHQUFlSCxNQUFNLENBQUNJLE1BQVAsQ0FBY0UsS0FBN0I7O0FBQ0EsWUFBS0MsUUFBTCxDQUFjYixLQUFkO0FBQ0gsS0FMRDs7QUFNQSxVQUFLYyxRQUFMLEdBQWdCLFVBQUNSLE1BQUQsRUFBVTtBQUN0QkEsWUFBTSxDQUFDUyxjQUFQO0FBQ0EsVUFBSWpCLENBQUMsR0FBRyxNQUFLRSxLQUFiO0FBQ0FILGdCQUFVLENBQUNDLENBQUQsQ0FBVjtBQUNILEtBSkQ7O0FBZFM7QUFtQlo7Ozs7NkJBRU87QUFDSiwwQkFDQTtBQUFBLDhDQUNVO0FBQU8sY0FBSSxFQUFDLFdBQVo7QUFBd0IsZUFBSyxFQUFFLEtBQUtFLEtBQUwsQ0FBV00sTUFBMUM7QUFBa0Qsa0JBQVEsRUFBRSxLQUFLRCxRQUFqRTtBQUEyRSxjQUFJLEVBQUM7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEVixlQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkEsZUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhBLG1DQUlnQjtBQUFPLGNBQUksRUFBQyxpQkFBWjtBQUE4QixlQUFLLEVBQUUsS0FBS0wsS0FBTCxDQUFXTSxNQUFoRDtBQUF3RCxrQkFBUSxFQUFFLEtBQUtELFFBQXZFO0FBQWlGLGNBQUksRUFBQztBQUF0RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpoQixlQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEEsZUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5BLHFCQU9FO0FBQU8sY0FBSSxFQUFDLEdBQVo7QUFBZ0IsZUFBSyxFQUFFLEtBQUtMLEtBQUwsQ0FBV00sTUFBbEM7QUFBMEMsa0JBQVEsRUFBRSxLQUFLRCxRQUF6RDtBQUFtRSxjQUFJLEVBQUM7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRixlQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkEsZUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRBLHdCQVVLO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsZUFBSyxFQUFFLEtBQUtMLEtBQUwsQ0FBV00sTUFBckM7QUFBNkMsa0JBQVEsRUFBRSxLQUFLRCxRQUE1RDtBQUFzRSxjQUFJLEVBQUM7QUFBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWTCxlQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEEsZUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpBLGVBYUE7QUFBUSxpQkFBTyxFQUFJLEtBQUtTLFFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBO0FBa0JIOzs7O0VBekNlRSx3RDs7QUFzRHBCLCtEQUFlakIsS0FBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb2JqZWN0IH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NICBmcm9tICdyZWFjdC1kb20nO1xuXG5cblxuZnVuY3Rpb24gZmF6UG9zdCh1cmwsIGJvZHkpe1xuICAgIGNvbnNvbGUubG9nKFwiQm9keT1cIixib2R5KVxuICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgICByZXF1ZXN0Lm9wZW4oXCJQT1NUXCIsdXJsLHRydWUpXG4gICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsXCJhcHBsaWNhdGlvbi9qc29uXCIpXG4gICAgcmVxdWVzdC5zZW5kKEpTT04uc3RyaW5naWZ5KGJvZHkpKVxuXG4gICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVxdWVzdC5yZXNwb25zZVRleHRcbn1cblxuZnVuY3Rpb24gbWFuZGF2YWxvcih0KXtcbiAgICBsZXQgdXJsID0gXCJodHRwczovL3BvbGFyLWhlYWRsYW5kLTIwMTAzLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly90ZXN0ZS1jYS5oZXJva3VhcHAuY29tLy9oZWxsb1wiXG4gICAgXG4gICAgXG4gICAgZmF6UG9zdCh1cmwsdClcbn1cblxuXG5jbGFzcyBJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFyaWF2ZWlzOiBcIlwiLFxuICAgICAgICAgICAgdmFsb3JkYXZhcmlhdmVsOlwiXCIsXG4gICAgICAgICAgICBmOlwiXCIsXG4gICAgICAgICAgICBlcnJvOlwiXCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IChldmVudG8pPT57XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sdGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBjYW1wbyA9IGV2ZW50by50YXJnZXQubmFtZTtcbiAgICAgICAgICAgIHN0YXRlW2NhbXBvXSA9IGV2ZW50by50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vblN1Ym1pdCA9IChldmVudG8pPT57XG4gICAgICAgICAgICBldmVudG8ucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciB0ID0gdGhpcy5zdGF0ZVxuICAgICAgICAgICAgbWFuZGF2YWxvcih0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgIHZhcmlhdmVpczo8aW5wdXQgbmFtZT1cInZhcmlhdmVpc1wiIHZhbHVlPXt0aGlzLnN0YXRlLmV2ZW50b30gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgICA8YnIvPlxuICAgICAgICA8YnIvPlxuICAgICAgICB2YWxvcmRhdmFyaWF2ZWw6PGlucHV0IG5hbWU9XCJ2YWxvcmRhdmFyaWF2ZWxcIiB2YWx1ZT17dGhpcy5zdGF0ZS5ldmVudG99IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSB0eXBlPVwidGV4dFwiLz4gXG4gICAgICAgIDxici8+XG4gICAgICAgIDxici8+XG4gICAgICAgIGY6PGlucHV0IG5hbWU9XCJmXCIgdmFsdWU9e3RoaXMuc3RhdGUuZXZlbnRvfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gdHlwZT1cInRleHRcIi8+IFxuICAgICAgICA8YnIvPlxuICAgICAgICA8YnIvPlxuICAgICAgICBlcnJvOjxpbnB1dCBuYW1lPVwiZXJyb1wiIHZhbHVlPXt0aGlzLnN0YXRlLmV2ZW50b30gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgICA8YnIvPlxuICAgICAgICA8YnIvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7dGhpcy5vblN1Ym1pdH0+ZW52aWFyPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});