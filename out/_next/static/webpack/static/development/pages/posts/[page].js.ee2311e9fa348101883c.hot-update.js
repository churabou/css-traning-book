webpackHotUpdate("static/development/pages/posts/[page].js",{

/***/ "./pages/posts/[page].tsx":
/*!********************************!*\
  !*** ./pages/posts/[page].tsx ***!
  \********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/page */ \"./components/page.tsx\");\n/* harmony import */ var _components_liveEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/liveEditor */ \"./components/liveEditor.tsx\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/churabou/study/react/css-tutorial/pages/posts/[page].tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar _MDWapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"page___MDWapper\",\n  componentId: \"mxv6kk-0\"\n})([\"h1,h2,h3,h4{color:var(--theme-color);}\"]);\n\nvar MarkdownBlock = function MarkdownBlock(_ref) {\n  var content = _ref.content;\n  return __jsx(_MDWapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 3\n    }\n  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    source: content,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 5\n    }\n  }));\n}; // これでlinkを外から入れらるようになった。\n// mdからメニューを取得してページングできるはず。\n// ぱすぱらむを取得すれば（static prposで)\n\n\n_c = MarkdownBlock;\n\nvar createProps = function createProps(sections) {\n  return {\n    LinkComponent: function LinkComponent(item) {\n      return __jsx(\"span\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 7\n        }\n      }, __jsx(\"a\", {\n        href: item.item.path,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 9\n        }\n      }, item.item.title));\n    },\n    sections: sections\n  };\n};\n\nvar Page = function Page(_ref2) {\n  var post = _ref2.post,\n      sections = _ref2.sections;\n  var menuProps = createProps(sections);\n\n  var Content = function Content() {\n    return __jsx(\"div\", {\n      style: {\n        padding: \"40px\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 5\n      }\n    }, post.contents.map(function (content, i) {\n      var key = \"\".concat(content.type, \"-\").concat(i);\n\n      if (content.type === \"markdown\" || contets.type === \"common-css\") {\n        return __jsx(MarkdownBlock, {\n          key: key,\n          content: content.value,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 18\n          }\n        });\n      }\n\n      if (content.type === \"frontmatter\") {\n        return __jsx(_MDWapper, {\n          key: key,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 13\n          }\n        }, __jsx(\"h1\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 15\n          }\n        }, content.value.title));\n      }\n\n      return __jsx(_components_liveEditor__WEBPACK_IMPORTED_MODULE_3__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        key: key\n      }, content.value, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 16\n        }\n      }));\n    }));\n  };\n\n  return __jsx(_components_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    content: __jsx(Content, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 24\n      }\n    }),\n    menu: menuProps,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 10\n    }\n  });\n};\n\n_c2 = Page;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MarkdownBlock\");\n$RefreshReg$(_c2, \"Page\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9bcGFnZV0udHN4PzI1YTgiXSwibmFtZXMiOlsiX01EV2FwcGVyIiwic3R5bGVkIiwiZGl2IiwiTWFya2Rvd25CbG9jayIsImNvbnRlbnQiLCJjcmVhdGVQcm9wcyIsInNlY3Rpb25zIiwiTGlua0NvbXBvbmVudCIsIml0ZW0iLCJwYXRoIiwidGl0bGUiLCJQYWdlIiwicG9zdCIsIm1lbnVQcm9wcyIsIkNvbnRlbnQiLCJwYWRkaW5nIiwiY29udGVudHMiLCJtYXAiLCJpIiwia2V5IiwidHlwZSIsImNvbnRldHMiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFDQTs7QUFrRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhDQUFmOztBQVNBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxTQUNwQixNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBZSxVQUFNLEVBQUVBLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURvQjtBQUFBLENBQXRCLEMsQ0FNQTtBQUNBO0FBQ0E7OztLQVJNRCxhOztBQVNOLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFFBQUQ7QUFBQSxTQUFxQztBQUN2REMsaUJBQWEsRUFBRSx1QkFBQ0MsSUFBRCxFQUFlO0FBQzVCLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUcsWUFBSSxFQUFFQSxJQUFJLENBQUNBLElBQUwsQ0FBVUMsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUEwQkQsSUFBSSxDQUFDQSxJQUFMLENBQVVFLEtBQXBDLENBREYsQ0FERjtBQUtELEtBUHNEO0FBUXZESixZQUFRLEVBQVJBO0FBUnVELEdBQXJDO0FBQUEsQ0FBcEI7O0FBV0EsSUFBTUssSUFBcUIsR0FBRyxTQUF4QkEsSUFBd0IsUUFBd0I7QUFBQSxNQUFyQkMsSUFBcUIsU0FBckJBLElBQXFCO0FBQUEsTUFBZk4sUUFBZSxTQUFmQSxRQUFlO0FBQ3BELE1BQU1PLFNBQVMsR0FBR1IsV0FBVyxDQUFDQyxRQUFELENBQTdCOztBQUNBLE1BQU1RLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsV0FDZDtBQUFLLFdBQUssRUFBRTtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0gsSUFBSSxDQUFDSSxRQUFMLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ2IsT0FBRCxFQUFpQmMsQ0FBakIsRUFBK0I7QUFDaEQsVUFBTUMsR0FBRyxhQUFNZixPQUFPLENBQUNnQixJQUFkLGNBQXNCRixDQUF0QixDQUFUOztBQUNBLFVBQUlkLE9BQU8sQ0FBQ2dCLElBQVIsS0FBaUIsVUFBakIsSUFBK0JDLE9BQU8sQ0FBQ0QsSUFBUixLQUFpQixZQUFwRCxFQUFrRTtBQUNoRSxlQUFPLE1BQUMsYUFBRDtBQUFlLGFBQUcsRUFBRUQsR0FBcEI7QUFBeUIsaUJBQU8sRUFBRWYsT0FBTyxDQUFDa0IsS0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBQ0QsVUFBSWxCLE9BQU8sQ0FBQ2dCLElBQVIsS0FBaUIsYUFBckIsRUFBb0M7QUFDbEMsZUFDRSxNQUFDLFNBQUQ7QUFBVyxhQUFHLEVBQUVELEdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUtmLE9BQU8sQ0FBQ2tCLEtBQVIsQ0FBY1osS0FBbkIsQ0FERixDQURGO0FBS0Q7O0FBQ0QsYUFBTyxNQUFDLDhEQUFEO0FBQVksV0FBRyxFQUFFUztBQUFqQixTQUEwQmYsT0FBTyxDQUFDa0IsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFQO0FBQ0QsS0FiQSxDQURILENBRGM7QUFBQSxHQUFoQjs7QUFrQkEsU0FBTyxNQUFDLHdEQUFEO0FBQUssV0FBTyxFQUFFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQWQ7QUFBMkIsUUFBSSxFQUFFVCxTQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVA7QUFDRCxDQXJCRDs7TUFBTUYsSTs7QUF1QlNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcG9zdHMvW3BhZ2VdLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGFnZVwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBMaXZlRWRpdG9yIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xpdmVFZGl0b3JcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHRyYW5zZm9ybUNvbnRlbnQsIFRva2VuIH0gZnJvbSBcIi4uLy4uL2xpYi90cmFuc2Zvcm1cIjtcbmltcG9ydCB7IFByb3BzIGFzIE1lbnVQcm9wcyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lbnVcIjtcblxuaW50ZXJmYWNlIFNlY3Rpb24ge1xuICB0aXRsZTogc3RyaW5nO1xuICBpdGVtczoge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgcGF0aDogc3RyaW5nO1xuICB9W107XG59XG5cbmNvbnN0IGZldGNoU2VjdGlvbnMgPSAoKTogU2VjdGlvbltdID0+IHtcbiAgY29uc3QgcG9zdHNEaXJlY3RvcnkgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJjb250ZW50c1wiKTtcbiAgY29uc3Qgc2VjdGlvbkRpcmVjdG9yaWVzID0gZnMucmVhZGRpclN5bmMocG9zdHNEaXJlY3RvcnkpO1xuICByZXR1cm4gc2VjdGlvbkRpcmVjdG9yaWVzLm1hcCgoc2VjdGlvbikgPT4ge1xuICAgIGNvbnN0IGZpbGVuYW1lcyA9IGZzLnJlYWRkaXJTeW5jKHBhdGguam9pbihwb3N0c0RpcmVjdG9yeSwgc2VjdGlvbikpO1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogc2VjdGlvbixcbiAgICAgIGl0ZW1zOiBmaWxlbmFtZXMubWFwKChuYW1lKSA9PiAoe1xuICAgICAgICB0aXRsZTogbmFtZSxcbiAgICAgICAgcGF0aDogYCR7c2VjdGlvbn0uJHtuYW1lfWAsXG4gICAgICB9KSksXG4gICAgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBsb2FkQ29udGVudCA9IChmaWxlbmFtZTogc3RyaW5nKTogVG9rZW5bXSA9PiB7XG4gIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwiY29udGVudHNcIiwgZmlsZW5hbWUpO1xuICBjb25zdCBmaWxlQ29udGVudHMgPSBmcy5yZWFkRmlsZVN5bmMocGF0aC5qb2luKGZpbGVQYXRoKSwgXCJ1dGY4XCIpO1xuICBjb25zdCBjb250ZW50ID0gdHJhbnNmb3JtQ29udGVudChmaWxlQ29udGVudHMpO1xuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgY29udGVudHMgPSBmZXRjaFNlY3Rpb25zKCkubWFwKChzZWN0aW9uOiBTZWN0aW9uKSA9PlxuICAgIHNlY3Rpb24uaXRlbXMubWFwKChpdGVtKSA9PiAoe1xuICAgICAgcGFyYW1zOiB7IHBhZ2U6IGl0ZW0ucGF0aCB9LFxuICAgIH0pKVxuICApO1xuICAvLyBmbGF0dGVuXG4gIGNvbnN0IHBhdGhzID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgY29udGVudHMpO1xuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9OiBhbnkpIHtcbiAgLy8gSEFDSyBzZWN0aW9uMS5kZW1v44G/44Gf44GE44Gr44Gq44Gj44Gm44GE44KL44Gu44Gnc2VjdGlvbjEvZGVtb+OBq+OBmeOCi1xuICBjb25zdCBwYXRoID0gcGFyYW1zLnBhZ2UucmVwbGFjZShcIi5cIiwgXCIvXCIpO1xuICBjb25zdCBwcm9wczogUHJvcHMgPSB7XG4gICAgcG9zdDoge1xuICAgICAgY29udGVudHM6IGxvYWRDb250ZW50KHBhdGgpLFxuICAgIH0sXG4gICAgc2VjdGlvbnM6IGZldGNoU2VjdGlvbnMoKSxcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wcyxcbiAgfTtcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcG9zdDoge1xuICAgIGNvbnRlbnRzOiBUb2tlbltdO1xuICB9O1xuICBzZWN0aW9uczogU2VjdGlvbltdO1xufVxuXG5jb25zdCBfTURXYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCB7XG4gICAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcbiAgfVxuYDtcblxuY29uc3QgTWFya2Rvd25CbG9jayA9ICh7IGNvbnRlbnQgfTogeyBjb250ZW50OiBzdHJpbmcgfSkgPT4gKFxuICA8X01EV2FwcGVyPlxuICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17Y29udGVudH0gLz5cbiAgPC9fTURXYXBwZXI+XG4pO1xuXG4vLyDjgZPjgozjgadsaW5r44KS5aSW44GL44KJ5YWl44KM44KJ44KL44KI44GG44Gr44Gq44Gj44Gf44CCXG4vLyBtZOOBi+OCieODoeODi+ODpeODvOOCkuWPluW+l+OBl+OBpuODmuODvOOCuOODs+OCsOOBp+OBjeOCi+OBr+OBmuOAglxuLy8g44Gx44GZ44Gx44KJ44KA44KS5Y+W5b6X44GZ44KM44Gw77yIc3RhdGljIHBycG9z44GnKVxuY29uc3QgY3JlYXRlUHJvcHMgPSAoc2VjdGlvbnM6IFNlY3Rpb25bXSk6IE1lbnVQcm9wcyA9PiAoe1xuICBMaW5rQ29tcG9uZW50OiAoaXRlbTogYW55KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuPlxuICAgICAgICA8YSBocmVmPXtpdGVtLml0ZW0ucGF0aH0+e2l0ZW0uaXRlbS50aXRsZX08L2E+XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfSxcbiAgc2VjdGlvbnMsXG59KTtcblxuY29uc3QgUGFnZTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgcG9zdCwgc2VjdGlvbnMgfSkgPT4ge1xuICBjb25zdCBtZW51UHJvcHMgPSBjcmVhdGVQcm9wcyhzZWN0aW9ucyk7XG4gIGNvbnN0IENvbnRlbnQgPSAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjQwcHhcIiB9fT5cbiAgICAgIHtwb3N0LmNvbnRlbnRzLm1hcCgoY29udGVudDogVG9rZW4sIGk6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBgJHtjb250ZW50LnR5cGV9LSR7aX1gO1xuICAgICAgICBpZiAoY29udGVudC50eXBlID09PSBcIm1hcmtkb3duXCIgfHwgY29udGV0cy50eXBlID09PSBcImNvbW1vbi1jc3NcIikge1xuICAgICAgICAgIHJldHVybiA8TWFya2Rvd25CbG9jayBrZXk9e2tleX0gY29udGVudD17Y29udGVudC52YWx1ZX0gLz47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRlbnQudHlwZSA9PT0gXCJmcm9udG1hdHRlclwiKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxfTURXYXBwZXIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICA8aDE+e2NvbnRlbnQudmFsdWUudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDwvX01EV2FwcGVyPlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDxMaXZlRWRpdG9yIGtleT17a2V5fSB7Li4uY29udGVudC52YWx1ZX0gLz47XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbiAgcmV0dXJuIDxBcHAgY29udGVudD17PENvbnRlbnQgLz59IG1lbnU9e21lbnVQcm9wc30gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[page].tsx\n");

/***/ })

})