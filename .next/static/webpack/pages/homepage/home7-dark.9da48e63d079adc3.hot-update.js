"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/homepage/home7-dark",{

/***/ "./src/components/Works-style4/works-style4.jsx":
/*!******************************************************!*\
  !*** ./src/components/Works-style4/works-style4.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var C_Users_user_Documents_programming_nextjsagency_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_user_Documents_programming_nextjsagency_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_user_Documents_programming_nextjsagency_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_user_Documents_programming_nextjsagency_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _common_initIsotope__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/initIsotope */ \"./src/common/initIsotope.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\user\\\\Documents\\\\programming\\\\nextjsagency\\\\src\\\\components\\\\Works-style4\\\\works-style4.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n/* eslint-disable @next/next/no-img-element */\n\n\n\n\n\n\nvar WorksStyle4 = function WorksStyle4(_ref) {\n  _s();\n\n  var _mapOptions;\n\n  var portafolio = _ref.portafolio;\n  var content = portafolio.content,\n      itemList = portafolio.itemList;\n  var title = content.title,\n      caption = content.caption,\n      options = content.options;\n\n  var mapOptions = function mapOptions(options) {\n    var object = Object.fromEntries(new Map(options.split(\",\").map(function (a) {\n      return a.split(\"=\");\n    })));\n    var optionList = []; // {Todas: '*', branding: 'brand', App Mobiles: 'web', Creativo: 'graphic'}\n\n    for (var key in object) {\n      if (object[key] !== \"*\") {\n        optionList.push({\n          key: \".\" + object[key],\n          label: key\n        });\n        continue;\n      }\n\n      optionList.push({\n        key: object[key],\n        label: key\n      });\n    } // [{key:'*', label:'Todas'}, {key:'brand', label:'branding'}];\n\n\n    return optionList;\n  };\n\n  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function () {\n    setTimeout(function () {\n      (0,_common_initIsotope__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    }, 1000);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"section\", {\n    className: \"portfolio-frl section-padding pb-70\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"row justify-content-center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: \"col-lg-8 col-md-10\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: \"sec-head  text-center\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h6\", {\n              className: \"wow fadeIn\",\n              \"data-wow-delay\": \".5s\",\n              children: caption\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h3\", {\n              className: \"wow color-font\",\n              children: title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: \"filtering col-12\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: \"filter wow fadeIn\",\n            \"data-wow-delay\": \".5s\",\n            children: ((_mapOptions = mapOptions(options)) === null || _mapOptions === void 0 ? void 0 : _mapOptions.length) > 0 && mapOptions(options).map(function (op) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n                \"data-filter\": op.key,\n                className: op.key === '*' && 'active',\n                children: op.label\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 49,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: \"gallery full-width\",\n          children: itemList.length > 0 && itemList.map(function (item) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                className: \"col-md-6 items \".concat(item.attributes.key, \" lg-mr wow fadeInUp\"),\n                \"data-wow-delay\": \".4s\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                  className: \"item-img\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                    className: \"cont\",\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h6\", {\n                      children: item.attributes.title\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 72,\n                      columnNumber: 23\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n                      children: item.attributes.caption\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 73,\n                      columnNumber: 23\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 71,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/project-details2/project-details2-dark\",\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n                      className: \"rota\",\n                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n                        src: \"/img/portfolio/freelancer/1.jpg\",\n                        alt: \"image\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 77,\n                        columnNumber: 25\n                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                        className: \"item-img-overlay\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 78,\n                        columnNumber: 25\n                      }, _this)]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 76,\n                      columnNumber: 23\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 75,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                    className: \"tags\",\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/works2/works2-dark\",\n                        children: item.attributes.key\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 83,\n                        columnNumber: 25\n                      }, _this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 82,\n                      columnNumber: 23\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 81,\n                    columnNumber: 21\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 70,\n                  columnNumber: 19\n                }, _this)\n              }, item.id, false, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(WorksStyle4, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = WorksStyle4;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorksStyle4);\nfunction getServerSideProps(_x) {\n  return _getServerSideProps.apply(this, arguments);\n}\n\nfunction _getServerSideProps() {\n  _getServerSideProps = (0,C_Users_user_Documents_programming_nextjsagency_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_user_Documents_programming_nextjsagency_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(props) {\n    var url, _yield$axios$get, data;\n\n    return C_Users_user_Documents_programming_nextjsagency_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log(\"props\", props);\n            console.log(process.env.API);\n            url = process.env.API; //http://localhost:1337/api/karens\n\n            _context.next = 5;\n            return axios.get(\"\".concat(url, \"/api/karen-portafolios?populate=*\"));\n\n          case 5:\n            _yield$axios$get = _context.sent;\n            data = _yield$axios$get.data.data;\n            return _context.abrupt(\"return\", {\n              props: {\n                itemListPicture: itemListPicture\n              }\n            });\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getServerSideProps.apply(this, arguments);\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"WorksStyle4\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Xb3Jrcy1zdHlsZTQvd29ya3Mtc3R5bGU0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQW9CO0FBQUE7O0FBQUE7O0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUN0QyxNQUFRQyxPQUFSLEdBQThCRCxVQUE5QixDQUFRQyxPQUFSO0FBQUEsTUFBaUJDLFFBQWpCLEdBQThCRixVQUE5QixDQUFpQkUsUUFBakI7QUFDQSxNQUFRQyxLQUFSLEdBQW9DRixPQUFwQyxDQUFRRSxLQUFSO0FBQUEsTUFBZUMsT0FBZixHQUFvQ0gsT0FBcEMsQ0FBZUcsT0FBZjtBQUFBLE1BQXdCQyxPQUF4QixHQUFvQ0osT0FBcEMsQ0FBd0JJLE9BQXhCOztBQUNBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNELE9BQUQsRUFBYTtBQUM5QixRQUFNRSxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQixJQUFJQyxHQUFKLENBQVFMLE9BQU8sQ0FBQ00sS0FBUixDQUFjLEdBQWQsRUFBbUJDLEdBQW5CLENBQXVCLFVBQUFDLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUNGLEtBQUYsQ0FBUSxHQUFSLENBQUo7QUFBQSxLQUF4QixDQUFSLENBQW5CLENBQWY7QUFDQSxRQUFNRyxVQUFVLEdBQUcsRUFBbkIsQ0FGOEIsQ0FHOUI7O0FBQ0EsU0FBSyxJQUFJQyxHQUFULElBQWdCUixNQUFoQixFQUF3QjtBQUN0QixVQUFJQSxNQUFNLENBQUNRLEdBQUQsQ0FBTixLQUFnQixHQUFwQixFQUF5QjtBQUN2QkQsUUFBQUEsVUFBVSxDQUFDRSxJQUFYLENBQWdCO0FBQUVELFVBQUFBLEdBQUcsRUFBRSxNQUFNUixNQUFNLENBQUNRLEdBQUQsQ0FBbkI7QUFBMEJFLFVBQUFBLEtBQUssRUFBRUY7QUFB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LFlBQUFBLElBTFgsb0JBS0dBLElBTEgsQ0FLV0EsSUFMWDtBQUFBLDZDQU9FO0FBQ0xULGNBQUFBLEtBQUssRUFBRTtBQUNMVSxnQkFBQUEsZUFBZSxFQUFmQTtBQURLO0FBREYsYUFQRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Xb3Jrcy1zdHlsZTQvd29ya3Mtc3R5bGU0LmpzeD9iZTJmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBpbml0SXNvdG9wZSBmcm9tIFwiLi4vLi4vY29tbW9uL2luaXRJc290b3BlXCI7XHJcblxyXG5jb25zdCBXb3Jrc1N0eWxlNCA9ICh7IHBvcnRhZm9saW8gfSkgPT4ge1xyXG4gIGNvbnN0IHsgY29udGVudCwgaXRlbUxpc3QgfSA9IHBvcnRhZm9saW87XHJcbiAgY29uc3QgeyB0aXRsZSwgY2FwdGlvbiwgb3B0aW9ucyB9ID0gY29udGVudDtcclxuICBjb25zdCBtYXBPcHRpb25zID0gKG9wdGlvbnMpID0+IHtcclxuICAgIGNvbnN0IG9iamVjdCA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgTWFwKG9wdGlvbnMuc3BsaXQoXCIsXCIpLm1hcChhID0+IGEuc3BsaXQoXCI9XCIpKSkpXHJcbiAgICBjb25zdCBvcHRpb25MaXN0ID0gW107XHJcbiAgICAvLyB7VG9kYXM6ICcqJywgYnJhbmRpbmc6ICdicmFuZCcsIEFwcCBNb2JpbGVzOiAnd2ViJywgQ3JlYXRpdm86ICdncmFwaGljJ31cclxuICAgIGZvciAobGV0IGtleSBpbiBvYmplY3QpIHtcclxuICAgICAgaWYgKG9iamVjdFtrZXldICE9PSBcIipcIikge1xyXG4gICAgICAgIG9wdGlvbkxpc3QucHVzaCh7IGtleTogXCIuXCIgKyBvYmplY3Rba2V5XSwgbGFiZWw6IGtleSB9KTtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBvcHRpb25MaXN0LnB1c2goeyBrZXk6IG9iamVjdFtrZXldLCBsYWJlbDoga2V5IH0pO1xyXG4gICAgfVxyXG4gICAgLy8gW3trZXk6JyonLCBsYWJlbDonVG9kYXMnfSwge2tleTonYnJhbmQnLCBsYWJlbDonYnJhbmRpbmcnfV07XHJcbiAgICByZXR1cm4gb3B0aW9uTGlzdDtcclxuICB9XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpbml0SXNvdG9wZSgpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZnJsIHNlY3Rpb24tcGFkZGluZyBwYi03MFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTggY29sLW1kLTEwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjLWhlYWQgIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIndvdyBmYWRlSW5cIiBkYXRhLXdvdy1kZWxheT1cIi41c1wiPlxyXG4gICAgICAgICAgICAgICAge2NhcHRpb259XHJcbiAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwid293IGNvbG9yLWZvbnRcIj5cclxuICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJpbmcgY29sLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyIHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kZWxheT1cIi41c1wiPlxyXG4gICAgICAgICAgICAgIHttYXBPcHRpb25zKG9wdGlvbnMpPy5sZW5ndGggPiAwICYmIG1hcE9wdGlvbnMob3B0aW9ucykubWFwKG9wID0+IChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtZmlsdGVyPXtvcC5rZXl9IGNsYXNzTmFtZT17b3Aua2V5ID09PSAnKicgJiYgJ2FjdGl2ZSd9PlxyXG4gICAgICAgICAgICAgICAgICB7b3AubGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgey8qIDxzcGFuIGRhdGEtZmlsdGVyPVwiKlwiIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgQWxsXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGRhdGEtZmlsdGVyPVwiLmJyYW5kXCI+QnJhbmRpbmc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gZGF0YS1maWx0ZXI9XCIud2ViXCI+TW9iaWxlIEFwcDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBkYXRhLWZpbHRlcj1cIi5ncmFwaGljXCI+Q3JlYXRpdmU8L3NwYW4+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeSBmdWxsLXdpZHRoXCI+XHJcbiAgICAgICAgICAgIHtpdGVtTGlzdC5sZW5ndGggPiAwICYmIGl0ZW1MaXN0Lm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bjb2wtbWQtNiBpdGVtcyAke2l0ZW0uYXR0cmlidXRlcy5rZXl9IGxnLW1yIHdvdyBmYWRlSW5VcGB9XHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PVwiLjRzXCJcclxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0taW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDY+e2l0ZW0uYXR0cmlidXRlcy50aXRsZX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0uYXR0cmlidXRlcy5jYXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2plY3QtZGV0YWlsczIvcHJvamVjdC1kZXRhaWxzMi1kYXJrYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyb3RhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9wb3J0Zm9saW8vZnJlZWxhbmNlci8xLmpwZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWltZy1vdmVybGF5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvd29ya3MyL3dvcmtzMi1kYXJrXCI+e2l0ZW0uYXR0cmlidXRlcy5rZXl9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3Jrc1N0eWxlNDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMocHJvcHMpIHtcclxuICBjb25zb2xlLmxvZyhcInByb3BzXCIsIHByb3BzKVxyXG4gIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LkFQSSk7XHJcbiAgY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuQVBJO1xyXG4gIC8vaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9rYXJlbnNcclxuICBjb25zdCB7IGRhdGE6IHsgZGF0YSB9IH0gPSBhd2FpdCBheGlvcy5nZXQoYCR7dXJsfS9hcGkva2FyZW4tcG9ydGFmb2xpb3M/cG9wdWxhdGU9KmApO1xyXG4gIC8vIGNvbnNvbGUubG9nKFwi8J+agCB+IGZpbGU6IGhvbWU3LWRhcmsuanN4IH4gbGluZSA1NSB+IGdldFN0YXRpY1Byb3BzIH4gZGF0YVwiLCBkYXRhKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBpdGVtTGlzdFBpY3R1cmVcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiaW5pdElzb3RvcGUiLCJXb3Jrc1N0eWxlNCIsInBvcnRhZm9saW8iLCJjb250ZW50IiwiaXRlbUxpc3QiLCJ0aXRsZSIsImNhcHRpb24iLCJvcHRpb25zIiwibWFwT3B0aW9ucyIsIm9iamVjdCIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiTWFwIiwic3BsaXQiLCJtYXAiLCJhIiwib3B0aW9uTGlzdCIsImtleSIsInB1c2giLCJsYWJlbCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJsZW5ndGgiLCJvcCIsIml0ZW0iLCJhdHRyaWJ1dGVzIiwiaWQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiZW52IiwiQVBJIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJkYXRhIiwiaXRlbUxpc3RQaWN0dXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Works-style4/works-style4.jsx\n");

/***/ })

});