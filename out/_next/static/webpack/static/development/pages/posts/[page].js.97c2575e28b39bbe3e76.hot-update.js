webpackHotUpdate("static/development/pages/posts/[page].js",{

/***/ "./components/liveEditor.tsx":
/*!***********************************!*\
  !*** ./components/liveEditor.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor */ \"./components/editor.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/churabou/study/react/css-tutorial/components/liveEditor.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"liveEditor__Wrapper\",\n  componentId: \"sc-1b1g6v6-0\"\n})([\"width:700px;padding:30px;background:#f7f7f7;display:flex;*{box-sizing:border-box;}.left{width:100%;margin-right:20px;}.right{width:100%;background:white;iframe{border:none;width:100%;height:100%;}}\"]);\n_c = Wrapper;\n\nvar LiveEditor = function LiveEditor(_ref) {\n  _s();\n\n  var html = _ref.html,\n      css = _ref.css;\n  var htmlEditor = Object(_editor__WEBPACK_IMPORTED_MODULE_3__[\"useCodeEditor\"])({\n    language: \"html\",\n    content: html\n  });\n  var cssEditor = Object(_editor__WEBPACK_IMPORTED_MODULE_3__[\"useCodeEditor\"])({\n    language: \"css\",\n    content: css\n  });\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }\n  }, __jsx(Wrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, __jsx(_editor__WEBPACK_IMPORTED_MODULE_3__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, htmlEditor, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  })), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }), __jsx(_editor__WEBPACK_IMPORTED_MODULE_3__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, cssEditor, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    className: \"right\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx(\"iframe\", {\n    srcDoc: \"<html><style>\".concat(cssEditor.content, \"</style><body>\").concat(htmlEditor.content, \"</body></html>\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(LiveEditor, \"yS1t+8C+SXukB88omhvicTLXnpU=\", false, function () {\n  return [_editor__WEBPACK_IMPORTED_MODULE_3__[\"useCodeEditor\"], _editor__WEBPACK_IMPORTED_MODULE_3__[\"useCodeEditor\"]];\n});\n\n_c2 = LiveEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LiveEditor);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"LiveEditor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xpdmVFZGl0b3IudHN4P2M3ZjIiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkxpdmVFZGl0b3IiLCJodG1sIiwiY3NzIiwiaHRtbEVkaXRvciIsInVzZUNvZGVFZGl0b3IiLCJsYW5ndWFnZSIsImNvbnRlbnQiLCJjc3NFZGl0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNk1BQWI7S0FBTUYsTzs7QUEwQk4sSUFBTUcsVUFJSixHQUFHLFNBSkNBLFVBSUQsT0FBbUI7QUFBQTs7QUFBQSxNQUFoQkMsSUFBZ0IsUUFBaEJBLElBQWdCO0FBQUEsTUFBVkMsR0FBVSxRQUFWQSxHQUFVO0FBQ3RCLE1BQU1DLFVBQVUsR0FBR0MsNkRBQWEsQ0FBQztBQUMvQkMsWUFBUSxFQUFFLE1BRHFCO0FBRS9CQyxXQUFPLEVBQUVMO0FBRnNCLEdBQUQsQ0FBaEM7QUFJQSxNQUFNTSxTQUFTLEdBQUdILDZEQUFhLENBQUM7QUFDOUJDLFlBQVEsRUFBRSxLQURvQjtBQUU5QkMsV0FBTyxFQUFFSjtBQUZxQixHQUFELENBQS9CO0FBS0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtDQUFELHlGQUFnQkMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQywrQ0FBRCx5RkFBZ0JJLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FIRixDQURGLEVBTUU7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxVQUFNLHlCQUFrQkEsU0FBUyxDQUFDRCxPQUE1QiwyQkFBb0RILFVBQVUsQ0FBQ0csT0FBL0QsbUJBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBTkYsQ0FERixDQURGO0FBZ0JELENBOUJEOztHQUFNTixVO1VBS2VJLHFELEVBSURBLHFEOzs7TUFUZEosVTtBQWdDU0EseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpdmVFZGl0b3IudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBDb2RlRWRpdG9yLCB7IHVzZUNvZGVFZGl0b3IgfSBmcm9tIFwiLi9lZGl0b3JcIjtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA3MDBweDtcbiAgcGFkZGluZzogMzBweDtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgZGlzcGxheTogZmxleDtcblxuICAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgLmxlZnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxuXG4gIC5yaWdodCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgaWZyYW1lIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgTGl2ZUVkaXRvcjogUmVhY3QuRkM8e1xuICBodG1sOiBzdHJpbmc7XG4gIGNzczogc3RyaW5nO1xuICBjb21tb25DU1M/OiBzdHJpbmc7XG59PiA9ICh7IGh0bWwsIGNzcyB9KSA9PiB7XG4gIGNvbnN0IGh0bWxFZGl0b3IgPSB1c2VDb2RlRWRpdG9yKHtcbiAgICBsYW5ndWFnZTogXCJodG1sXCIsXG4gICAgY29udGVudDogaHRtbCxcbiAgfSk7XG4gIGNvbnN0IGNzc0VkaXRvciA9IHVzZUNvZGVFZGl0b3Ioe1xuICAgIGxhbmd1YWdlOiBcImNzc1wiLFxuICAgIGNvbnRlbnQ6IGNzcyxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxuICAgICAgICAgIDxDb2RlRWRpdG9yIHsuLi5odG1sRWRpdG9yfSAvPlxuICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgIDxDb2RlRWRpdG9yIHsuLi5jc3NFZGl0b3J9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XG4gICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgc3JjRG9jPXtgPGh0bWw+PHN0eWxlPiR7Y3NzRWRpdG9yLmNvbnRlbnR9PC9zdHlsZT48Ym9keT4ke2h0bWxFZGl0b3IuY29udGVudH08L2JvZHk+PC9odG1sPmB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXZlRWRpdG9yO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/liveEditor.tsx\n");

/***/ })

})