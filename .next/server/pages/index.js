/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/rafael/visualcode/site puro/teste/pages/index.js\";\n\n\n\n\nfunction fazPost(url, body) {\n  console.log(\"Body=\", body);\n  let request = new XMLHttpRequest();\n  request.open(\"POST\", url, true);\n  request.setRequestHeader(\"Content-type\", \"application/json\");\n  request.send(JSON.stringify(body));\n\n  request.onload = function () {\n    console.log(this.responseText);\n  };\n\n  return request.responseText;\n}\n\nfunction mandavalor(t) {\n  let url = \"https://polar-headland-20103.herokuapp.com/https://teste-ca.herokuapp.com//calc\";\n  fazPost(url, t);\n}\n\nclass Input extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {\n  constructor() {\n    super();\n    this.state = {\n      variaveis: \"\",\n      valordavariavel: \"\",\n      f: \"\",\n      erro: \"\"\n    };\n\n    this.onChange = evento => {\n      const state = Object.assign({}, this.state);\n      const campo = evento.target.name;\n      state[campo] = evento.target.value;\n      this.setState(state);\n    };\n\n    this.onSubmit = evento => {\n      evento.preventDefault();\n      var t = this.state;\n      mandavalor(t);\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [\"variaveis:\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        name: \"variaveis\",\n        value: this.state.evento,\n        onChange: this.onChange,\n        type: \"text\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 19\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this), \"valordavariavel:\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        name: \"valordavariavel\",\n        value: this.state.evento,\n        onChange: this.onChange,\n        type: \"text\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 25\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this), \"f:\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        name: \"f\",\n        value: this.state.evento,\n        onChange: this.onChange,\n        type: \"text\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this), \"erro:\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        name: \"erro\",\n        value: this.state.evento,\n        onChange: this.onChange,\n        type: \"text\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 14\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: this.onSubmit,\n        children: \"enviar\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0ZS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwibmFtZXMiOlsiZmF6UG9zdCIsInVybCIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9ubG9hZCIsInJlc3BvbnNlVGV4dCIsIm1hbmRhdmFsb3IiLCJ0IiwiSW5wdXQiLCJSZWFjdCIsImNvbnN0cnVjdG9yIiwic3RhdGUiLCJ2YXJpYXZlaXMiLCJ2YWxvcmRhdmFyaWF2ZWwiLCJmIiwiZXJybyIsIm9uQ2hhbmdlIiwiZXZlbnRvIiwiT2JqZWN0IiwiYXNzaWduIiwiY2FtcG8iLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzZXRTdGF0ZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUlBLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxJQUF0QixFQUEyQjtBQUN2QkMsU0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFvQkYsSUFBcEI7QUFDQSxNQUFJRyxPQUFPLEdBQUcsSUFBSUMsY0FBSixFQUFkO0FBQ0FELFNBQU8sQ0FBQ0UsSUFBUixDQUFhLE1BQWIsRUFBb0JOLEdBQXBCLEVBQXdCLElBQXhCO0FBQ0FJLFNBQU8sQ0FBQ0csZ0JBQVIsQ0FBeUIsY0FBekIsRUFBd0Msa0JBQXhDO0FBQ0FILFNBQU8sQ0FBQ0ksSUFBUixDQUFhQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVQsSUFBZixDQUFiOztBQUVBRyxTQUFPLENBQUNPLE1BQVIsR0FBaUIsWUFBVTtBQUN2QlQsV0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS1MsWUFBakI7QUFDSCxHQUZEOztBQUlBLFNBQU9SLE9BQU8sQ0FBQ1EsWUFBZjtBQUNIOztBQUVELFNBQVNDLFVBQVQsQ0FBb0JDLENBQXBCLEVBQXNCO0FBQ2xCLE1BQUlkLEdBQUcsR0FBRyxpRkFBVjtBQUdBRCxTQUFPLENBQUNDLEdBQUQsRUFBS2MsQ0FBTCxDQUFQO0FBQ0g7O0FBR0QsTUFBTUMsS0FBTixTQUFvQkMsd0RBQXBCLENBQW1DO0FBQy9CQyxhQUFXLEdBQUU7QUFDVDtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNUQyxlQUFTLEVBQUUsRUFERjtBQUVUQyxxQkFBZSxFQUFDLEVBRlA7QUFHVEMsT0FBQyxFQUFDLEVBSE87QUFJVEMsVUFBSSxFQUFDO0FBSkksS0FBYjs7QUFNQSxTQUFLQyxRQUFMLEdBQWlCQyxNQUFELElBQVU7QUFDdEIsWUFBTU4sS0FBSyxHQUFHTyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWlCLEtBQUtSLEtBQXRCLENBQWQ7QUFDQSxZQUFNUyxLQUFLLEdBQUdILE1BQU0sQ0FBQ0ksTUFBUCxDQUFjQyxJQUE1QjtBQUNBWCxXQUFLLENBQUNTLEtBQUQsQ0FBTCxHQUFlSCxNQUFNLENBQUNJLE1BQVAsQ0FBY0UsS0FBN0I7QUFDQSxXQUFLQyxRQUFMLENBQWNiLEtBQWQ7QUFDSCxLQUxEOztBQU1BLFNBQUtjLFFBQUwsR0FBaUJSLE1BQUQsSUFBVTtBQUN0QkEsWUFBTSxDQUFDUyxjQUFQO0FBQ0EsVUFBSW5CLENBQUMsR0FBRyxLQUFLSSxLQUFiO0FBQ0FMLGdCQUFVLENBQUNDLENBQUQsQ0FBVjtBQUNILEtBSkQ7QUFLSDs7QUFFRG9CLFFBQU0sR0FBRTtBQUNKLHdCQUNBO0FBQUEsNENBQ1U7QUFBTyxZQUFJLEVBQUMsV0FBWjtBQUF3QixhQUFLLEVBQUUsS0FBS2hCLEtBQUwsQ0FBV00sTUFBMUM7QUFBa0QsZ0JBQVEsRUFBRSxLQUFLRCxRQUFqRTtBQUEyRSxZQUFJLEVBQUM7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURWLGVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBLGVBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhBLG1DQUlnQjtBQUFPLFlBQUksRUFBQyxpQkFBWjtBQUE4QixhQUFLLEVBQUUsS0FBS0wsS0FBTCxDQUFXTSxNQUFoRDtBQUF3RCxnQkFBUSxFQUFFLEtBQUtELFFBQXZFO0FBQWlGLFlBQUksRUFBQztBQUF0RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSmhCLGVBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxBLGVBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5BLHFCQU9FO0FBQU8sWUFBSSxFQUFDLEdBQVo7QUFBZ0IsYUFBSyxFQUFFLEtBQUtMLEtBQUwsQ0FBV00sTUFBbEM7QUFBMEMsZ0JBQVEsRUFBRSxLQUFLRCxRQUF6RDtBQUFtRSxZQUFJLEVBQUM7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJBLGVBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRBLHdCQVVLO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBSyxFQUFFLEtBQUtMLEtBQUwsQ0FBV00sTUFBckM7QUFBNkMsZ0JBQVEsRUFBRSxLQUFLRCxRQUE1RDtBQUFzRSxZQUFJLEVBQUM7QUFBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZMLGVBV0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhBLGVBWUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpBLGVBYUE7QUFBUSxlQUFPLEVBQUksS0FBS1MsUUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQTtBQWtCSDs7QUF6QzhCOztBQXNEbkMsK0RBQWVqQixLQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvYmplY3QgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gIGZyb20gJ3JlYWN0LWRvbSc7XG5cblxuXG5mdW5jdGlvbiBmYXpQb3N0KHVybCwgYm9keSl7XG4gICAgY29uc29sZS5sb2coXCJCb2R5PVwiLGJvZHkpXG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuICAgIHJlcXVlc3Qub3BlbihcIlBPU1RcIix1cmwsdHJ1ZSlcbiAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIixcImFwcGxpY2F0aW9uL2pzb25cIilcbiAgICByZXF1ZXN0LnNlbmQoSlNPTi5zdHJpbmdpZnkoYm9keSkpXG5cbiAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KVxuICAgIH1cblxuICAgIHJldHVybiByZXF1ZXN0LnJlc3BvbnNlVGV4dFxufVxuXG5mdW5jdGlvbiBtYW5kYXZhbG9yKHQpe1xuICAgIGxldCB1cmwgPSBcImh0dHBzOi8vcG9sYXItaGVhZGxhbmQtMjAxMDMuaGVyb2t1YXBwLmNvbS9odHRwczovL3Rlc3RlLWNhLmhlcm9rdWFwcC5jb20vL2NhbGNcIlxuICAgIFxuICAgIFxuICAgIGZhelBvc3QodXJsLHQpXG59XG5cblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZhcmlhdmVpczogXCJcIixcbiAgICAgICAgICAgIHZhbG9yZGF2YXJpYXZlbDpcIlwiLFxuICAgICAgICAgICAgZjpcIlwiLFxuICAgICAgICAgICAgZXJybzpcIlwiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSAoZXZlbnRvKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgY29uc3QgY2FtcG8gPSBldmVudG8udGFyZ2V0Lm5hbWU7XG4gICAgICAgICAgICBzdGF0ZVtjYW1wb10gPSBldmVudG8udGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25TdWJtaXQgPSAoZXZlbnRvKT0+e1xuICAgICAgICAgICAgZXZlbnRvLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgdCA9IHRoaXMuc3RhdGVcbiAgICAgICAgICAgIG1hbmRhdmFsb3IodCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICB2YXJpYXZlaXM6PGlucHV0IG5hbWU9XCJ2YXJpYXZlaXNcIiB2YWx1ZT17dGhpcy5zdGF0ZS5ldmVudG99IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgdmFsb3JkYXZhcmlhdmVsOjxpbnB1dCBuYW1lPVwidmFsb3JkYXZhcmlhdmVsXCIgdmFsdWU9e3RoaXMuc3RhdGUuZXZlbnRvfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gdHlwZT1cInRleHRcIi8+IFxuICAgICAgICA8YnIvPlxuICAgICAgICA8YnIvPlxuICAgICAgICBmOjxpbnB1dCBuYW1lPVwiZlwiIHZhbHVlPXt0aGlzLnN0YXRlLmV2ZW50b30gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IHR5cGU9XCJ0ZXh0XCIvPiBcbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgZXJybzo8aW5wdXQgbmFtZT1cImVycm9cIiB2YWx1ZT17dGhpcy5zdGF0ZS5ldmVudG99IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge3RoaXMub25TdWJtaXR9PmVudmlhcjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIClcbiAgICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();