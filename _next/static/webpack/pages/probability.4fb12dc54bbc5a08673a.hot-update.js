webpackHotUpdate_N_E("pages/probability",{

/***/ "./components/Probability/NormalInput.js":
/*!***********************************************!*\
  !*** ./components/Probability/NormalInput.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Input; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_data_com_termux_files_home_calculator_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _styles_Probability_BinomialInput_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Probability/BinomialInput.module.css */ \"./styles/Probability/BinomialInput.module.css\");\n/* harmony import */ var _styles_Probability_BinomialInput_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Probability_BinomialInput_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/data/data/com.termux/files/home/calculator/components/Probability/NormalInput.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_data_data_com_termux_files_home_calculator_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nfunction Input(_ref) {\n  var values = _ref.values,\n      setValues = _ref.setValues;\n\n  function inputHandler(e) {\n    var _e$target = e.target,\n        name = _e$target.name,\n        value = _e$target.value;\n    setValues(function (old) {\n      return _objectSpread(_objectSpread({}, old), {}, Object(_data_data_com_termux_files_home_calculator_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, name, value));\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Probability_BinomialInput_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.inputBox,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"m\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"number\",\n        className: _styles_Probability_BinomialInput_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.input,\n        value: values.m,\n        name: \"m\",\n        onChange: inputHandler\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"sd\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"number\",\n        className: _styles_Probability_BinomialInput_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.input,\n        value: values.sd,\n        name: \"sd\",\n        onChange: inputHandler\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Probability_BinomialInput_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.precisionMsg,\n      children: \"Left limit\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"number\",\n        className: _styles_Probability_BinomialInput_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.input,\n        value: values.left,\n        name: \"left\",\n        onChange: inputHandler\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Probability_BinomialInput_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.precisionMsg,\n      children: \"Right Limit\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"number\",\n        className: _styles_Probability_BinomialInput_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.input,\n        value: values.right,\n        name: \"right\",\n        onChange: inputHandler\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Probability_BinomialInput_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.precisionMsg,\n      children: \"no of digits after decimal point\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"number\",\n        className: _styles_Probability_BinomialInput_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.input,\n        value: values.prec,\n        name: \"prec\",\n        onChange: inputHandler\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}\n_c = Input;\n\nvar _c;\n\n$RefreshReg$(_c, \"Input\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9iYWJpbGl0eS9Ob3JtYWxJbnB1dC5qcz80YTkxIl0sIm5hbWVzIjpbIklucHV0IiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaW5wdXRIYW5kbGVyIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIm9sZCIsInN0eWxlcyIsImlucHV0Qm94IiwiaW5wdXQiLCJtIiwic2QiLCJwcmVjaXNpb25Nc2ciLCJsZWZ0IiwicmlnaHQiLCJwcmVjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLEtBQVQsT0FBbUM7QUFBQSxNQUFuQkMsTUFBbUIsUUFBbkJBLE1BQW1CO0FBQUEsTUFBWkMsU0FBWSxRQUFaQSxTQUFZOztBQUVoRCxXQUFTQyxZQUFULENBQXNCQyxDQUF0QixFQUF5QjtBQUFBLG9CQUNKQSxDQUFDLENBQUNDLE1BREU7QUFBQSxRQUNsQkMsSUFEa0IsYUFDbEJBLElBRGtCO0FBQUEsUUFDYkMsS0FEYSxhQUNiQSxLQURhO0FBRXZCTCxhQUFTLENBQUMsVUFBQU0sR0FBRyxFQUFFO0FBQ2IsNkNBQVdBLEdBQVgsNkpBQWdCRixJQUFoQixFQUFzQkMsS0FBdEI7QUFDRCxLQUZRLENBQVQ7QUFHRDs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBRUUsbUZBQU0sQ0FBQ0MsUUFBdkI7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSw2QkFDRTtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGlCQUFTLEVBQUVELG1GQUFNLENBQUNFLEtBQXZDO0FBQThDLGFBQUssRUFBRVYsTUFBTSxDQUFDVyxDQUE1RDtBQUErRCxZQUFJLEVBQUMsR0FBcEU7QUFBd0UsZ0JBQVEsRUFBRVQ7QUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFNRTtBQUFBLDZCQUNFO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsaUJBQVMsRUFBRU0sbUZBQU0sQ0FBQ0UsS0FBdkM7QUFBOEMsYUFBSyxFQUFFVixNQUFNLENBQUNZLEVBQTVEO0FBQWdFLFlBQUksRUFBQyxJQUFyRTtBQUEwRSxnQkFBUSxFQUFFVjtBQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBU0U7QUFBSyxlQUFTLEVBQUVNLG1GQUFNLENBQUNLLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEYsZUFZRTtBQUFBLDZCQUNFO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsaUJBQVMsRUFBRUwsbUZBQU0sQ0FBQ0UsS0FBdkM7QUFBOEMsYUFBSyxFQUFFVixNQUFNLENBQUNjLElBQTVEO0FBQWtFLFlBQUksRUFBQyxNQUF2RTtBQUE4RSxnQkFBUSxFQUFFWjtBQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGLGVBZUU7QUFBSyxlQUFTLEVBQUVNLG1GQUFNLENBQUNLLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkYsZUFrQkU7QUFBQSw2QkFDRTtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGlCQUFTLEVBQUVMLG1GQUFNLENBQUNFLEtBQXZDO0FBQThDLGFBQUssRUFBRVYsTUFBTSxDQUFDZSxLQUE1RDtBQUFtRSxZQUFJLEVBQUMsT0FBeEU7QUFBZ0YsZ0JBQVEsRUFBRWI7QUFBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQkYsZUFxQkU7QUFBSyxlQUFTLEVBQUVNLG1GQUFNLENBQUNLLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckJGLGVBd0JFO0FBQUEsNkJBQ0U7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixpQkFBUyxFQUFFTCxtRkFBTSxDQUFDRSxLQUF2QztBQUE4QyxhQUFLLEVBQUVWLE1BQU0sQ0FBQ2dCLElBQTVEO0FBQWtFLFlBQUksRUFBQyxNQUF2RTtBQUE4RSxnQkFBUSxFQUFFZDtBQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThCRDtLQXZDdUJILEsiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2JhYmlsaXR5L05vcm1hbElucHV0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvUHJvYmFiaWxpdHkvQmlub21pYWxJbnB1dC5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dCh7dmFsdWVzLHNldFZhbHVlc30pIHtcbiAgXG4gIGZ1bmN0aW9uIGlucHV0SGFuZGxlcihlKSB7XG4gICAgbGV0IHtuYW1lLHZhbHVlfSA9IGUudGFyZ2V0XG4gICAgc2V0VmFsdWVzKG9sZD0+e1xuICAgICAgcmV0dXJuIHsuLi5vbGQsW25hbWVdOnZhbHVlfTtcbiAgICB9KVxuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRCb3h9PlxuICAgICAgPGRpdj5tPC9kaXY+XG4gICAgICA8ZGl2ID5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gdmFsdWU9e3ZhbHVlcy5tfSBuYW1lPVwibVwiIG9uQ2hhbmdlPXtpbnB1dEhhbmRsZXJ9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5zZDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gdmFsdWU9e3ZhbHVlcy5zZH0gbmFtZT1cInNkXCIgb25DaGFuZ2U9e2lucHV0SGFuZGxlcn0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByZWNpc2lvbk1zZ30+XG4gICAgICAgIExlZnQgbGltaXRcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gdmFsdWU9e3ZhbHVlcy5sZWZ0fSBuYW1lPVwibGVmdFwiIG9uQ2hhbmdlPXtpbnB1dEhhbmRsZXJ9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmVjaXNpb25Nc2d9PlxuICAgICAgICBSaWdodCBMaW1pdFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSB2YWx1ZT17dmFsdWVzLnJpZ2h0fSBuYW1lPVwicmlnaHRcIiBvbkNoYW5nZT17aW5wdXRIYW5kbGVyfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJlY2lzaW9uTXNnfT5cbiAgICAgICAgbm8gb2YgZGlnaXRzIGFmdGVyIGRlY2ltYWwgcG9pbnRcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gdmFsdWU9e3ZhbHVlcy5wcmVjfSBuYW1lPVwicHJlY1wiIG9uQ2hhbmdlPXtpbnB1dEhhbmRsZXJ9Lz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Probability/NormalInput.js\n");

/***/ })

})