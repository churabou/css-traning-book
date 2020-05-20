webpackHotUpdate("static/development/pages/posts/[page].js",{

/***/ "./components/liveEditor.tsx":
/*!***********************************!*\
  !*** ./components/liveEditor.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor */ \"./components/editor.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/churabou/study/react/css-tutorial/components/liveEditor.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"liveEditor__Wrapper\",\n  componentId: \"sc-1b1g6v6-0\"\n})([\"display:flex;margin-top:20px;*{box-sizing:border-box;}.left{width:100%;margin-right:20px;}.right{width:100%;background:white;iframe{border:none;width:100%;height:100%;}}\"]);\n_c = Wrapper;\n\nvar LiveEditor = function LiveEditor(_ref) {\n  _s();\n\n  var html = _ref.html,\n      css = _ref.css,\n      commonCSS = _ref.commonCSS;\n  var htmlEditor = Object(_editor__WEBPACK_IMPORTED_MODULE_3__[\"useCodeEditor\"])({\n    language: \"html\",\n    content: html\n  });\n  var cssEditor = Object(_editor__WEBPACK_IMPORTED_MODULE_3__[\"useCodeEditor\"])({\n    language: \"css\",\n    content: css\n  });\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(Wrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, __jsx(_editor__WEBPACK_IMPORTED_MODULE_3__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, htmlEditor, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  })), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }), __jsx(_editor__WEBPACK_IMPORTED_MODULE_3__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, cssEditor, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    className: \"right\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, __jsx(\"iframe\", {\n    srcDoc: \"<html><style>\".concat(commonCSS).concat(cssEditor.content, \"</style><body>\").concat(htmlEditor.content, \"</body></html>\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(LiveEditor, \"yS1t+8C+SXukB88omhvicTLXnpU=\", false, function () {\n  return [_editor__WEBPACK_IMPORTED_MODULE_3__[\"useCodeEditor\"], _editor__WEBPACK_IMPORTED_MODULE_3__[\"useCodeEditor\"]];\n});\n\n_c2 = LiveEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LiveEditor);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"LiveEditor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xpdmVFZGl0b3IudHN4P2M3ZjIiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkxpdmVFZGl0b3IiLCJodG1sIiwiY3NzIiwiY29tbW9uQ1NTIiwiaHRtbEVkaXRvciIsInVzZUNvZGVFZGl0b3IiLCJsYW5ndWFnZSIsImNvbnRlbnQiLCJjc3NFZGl0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaUxBQWI7S0FBTUYsTzs7QUF5Qk4sSUFBTUcsVUFJSixHQUFHLFNBSkNBLFVBSUQsT0FBOEI7QUFBQTs7QUFBQSxNQUEzQkMsSUFBMkIsUUFBM0JBLElBQTJCO0FBQUEsTUFBckJDLEdBQXFCLFFBQXJCQSxHQUFxQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDakMsTUFBTUMsVUFBVSxHQUFHQyw2REFBYSxDQUFDO0FBQy9CQyxZQUFRLEVBQUUsTUFEcUI7QUFFL0JDLFdBQU8sRUFBRU47QUFGc0IsR0FBRCxDQUFoQztBQUlBLE1BQU1PLFNBQVMsR0FBR0gsNkRBQWEsQ0FBQztBQUM5QkMsWUFBUSxFQUFFLEtBRG9CO0FBRTlCQyxXQUFPLEVBQUVMO0FBRnFCLEdBQUQsQ0FBL0I7QUFLQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQseUZBQWdCRSxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLCtDQUFELHlGQUFnQkksU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUhGLENBREYsRUFNRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFVBQU0seUJBQWtCTCxTQUFsQixTQUE4QkssU0FBUyxDQUFDRCxPQUF4QywyQkFBZ0VILFVBQVUsQ0FBQ0csT0FBM0UsbUJBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBTkYsQ0FERixDQURGO0FBZ0JELENBOUJEOztHQUFNUCxVO1VBS2VLLHFELEVBSURBLHFEOzs7TUFUZEwsVTtBQWdDU0EseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpdmVFZGl0b3IudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBDb2RlRWRpdG9yLCB7IHVzZUNvZGVFZGl0b3IgfSBmcm9tIFwiLi9lZGl0b3JcIjtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgbWFyZ2luLXRvcDogMjBweDtcblxuICAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgLmxlZnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxuXG4gIC5yaWdodCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgaWZyYW1lIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgTGl2ZUVkaXRvcjogUmVhY3QuRkM8e1xuICBodG1sOiBzdHJpbmc7XG4gIGNzczogc3RyaW5nO1xuICBjb21tb25DU1M/OiBzdHJpbmc7XG59PiA9ICh7IGh0bWwsIGNzcywgY29tbW9uQ1NTIH0pID0+IHtcbiAgY29uc3QgaHRtbEVkaXRvciA9IHVzZUNvZGVFZGl0b3Ioe1xuICAgIGxhbmd1YWdlOiBcImh0bWxcIixcbiAgICBjb250ZW50OiBodG1sLFxuICB9KTtcbiAgY29uc3QgY3NzRWRpdG9yID0gdXNlQ29kZUVkaXRvcih7XG4gICAgbGFuZ3VhZ2U6IFwiY3NzXCIsXG4gICAgY29udGVudDogY3NzLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8V3JhcHBlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XG4gICAgICAgICAgPENvZGVFZGl0b3Igey4uLmh0bWxFZGl0b3J9IC8+XG4gICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgPENvZGVFZGl0b3Igey4uLmNzc0VkaXRvcn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cbiAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICBzcmNEb2M9e2A8aHRtbD48c3R5bGU+JHtjb21tb25DU1N9JHtjc3NFZGl0b3IuY29udGVudH08L3N0eWxlPjxib2R5PiR7aHRtbEVkaXRvci5jb250ZW50fTwvYm9keT48L2h0bWw+YH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpdmVFZGl0b3I7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/liveEditor.tsx\n");

/***/ })

})