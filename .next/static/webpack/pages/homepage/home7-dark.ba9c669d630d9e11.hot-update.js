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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var C_Users_user_Documents_programming_nextjsagency_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_user_Documents_programming_nextjsagency_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_user_Documents_programming_nextjsagency_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_user_Documents_programming_nextjsagency_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _common_initIsotope__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/initIsotope */ \"./src/common/initIsotope.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\user\\\\Documents\\\\programming\\\\nextjsagency\\\\src\\\\components\\\\Works-style4\\\\works-style4.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n/* eslint-disable @next/next/no-img-element */\n\n\n\n\n\n\nvar WorksStyle4 = function WorksStyle4(_ref) {\n  _s();\n\n  var _mapOptions;\n\n  var portafolio = _ref.portafolio;\n  var content = portafolio.content,\n      itemList = portafolio.itemList;\n  var title = content.title,\n      caption = content.caption,\n      options = content.options;\n\n  var mapOptions = function mapOptions(options) {\n    var object = Object.fromEntries(new Map(options.split(\",\").map(function (a) {\n      return a.split(\"=\");\n    })));\n    var optionList = []; // {Todas: '*', branding: 'brand', App Mobiles: 'web', Creativo: 'graphic'}\n\n    for (var key in object) {\n      if (object[key] !== \"*\") {\n        optionList.push({\n          key: \".\" + object[key],\n          label: key\n        });\n        continue;\n      }\n\n      optionList.push({\n        key: object[key],\n        label: key\n      });\n    } // [{key:'*', label:'Todas'}, {key:'brand', label:'branding'}];\n\n\n    return optionList;\n  };\n\n  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function () {\n    setTimeout(function () {\n      (0,_common_initIsotope__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    }, 1000);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"section\", {\n    className: \"portfolio-frl section-padding pb-70\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"row justify-content-center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: \"col-lg-8 col-md-10\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: \"sec-head  text-center\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h6\", {\n              className: \"wow fadeIn\",\n              \"data-wow-delay\": \".5s\",\n              children: caption\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h3\", {\n              className: \"wow color-font\",\n              children: title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: \"filtering col-12\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: \"filter wow fadeIn\",\n            \"data-wow-delay\": \".5s\",\n            children: ((_mapOptions = mapOptions(options)) === null || _mapOptions === void 0 ? void 0 : _mapOptions.length) > 0 && mapOptions(options).map(function (op) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n                \"data-filter\": op.key,\n                className: op.key === '*' && 'active',\n                children: op.label\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 49,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: \"gallery full-width\",\n          children: itemList.length > 0 && itemList.map(function (item) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                className: \"col-md-6 items \".concat(item.attributes.key, \" lg-mr wow fadeInUp\"),\n                \"data-wow-delay\": \".4s\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                  className: \"item-img\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                    className: \"cont\",\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h6\", {\n                      children: item.attributes.title\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 72,\n                      columnNumber: 23\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n                      children: item.attributes.caption\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 73,\n                      columnNumber: 23\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 71,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/project-details2/project-details2-dark\",\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n                      className: \"rota\",\n                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n                        src: \"/img/portfolio/freelancer/1.jpg\",\n                        alt: \"image\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 77,\n                        columnNumber: 25\n                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                        className: \"item-img-overlay\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 78,\n                        columnNumber: 25\n                      }, _this)]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 76,\n                      columnNumber: 23\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 75,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                    className: \"tags\",\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/works2/works2-dark\",\n                        children: item.attributes.key\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 83,\n                        columnNumber: 25\n                      }, _this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 82,\n                      columnNumber: 23\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 81,\n                    columnNumber: 21\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 70,\n                  columnNumber: 19\n                }, _this)\n              }, item.id, false, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(WorksStyle4, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = WorksStyle4;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorksStyle4);\nfunction getServerSideProps(_x) {\n  return _getServerSideProps.apply(this, arguments);\n}\n\nfunction _getServerSideProps() {\n  _getServerSideProps = (0,C_Users_user_Documents_programming_nextjsagency_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_user_Documents_programming_nextjsagency_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(props) {\n    var url, _yield$axios$get, data;\n\n    return C_Users_user_Documents_programming_nextjsagency_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log(\"props\", props);\n            console.log(process.env.API);\n            url = process.env.API; //http://localhost:1337/api/karens\n\n            _context.next = 5;\n            return axios.get(\"\".concat(url, \"/api/karen-portafolios?populate=*\"));\n\n          case 5:\n            _yield$axios$get = _context.sent;\n            data = _yield$axios$get.data.data;\n            console.log(\"🚀 ~ file: home7-dark.jsx ~ line 55 ~ getStaticProps ~ data\", data);\n            return _context.abrupt(\"return\", {\n              props: {\n                itemListPicture: itemListPicture\n              }\n            });\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getServerSideProps.apply(this, arguments);\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"WorksStyle4\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Xb3Jrcy1zdHlsZTQvd29ya3Mtc3R5bGU0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQW9CO0FBQUE7O0FBQUE7O0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUN0QyxNQUFRQyxPQUFSLEdBQThCRCxVQUE5QixDQUFRQyxPQUFSO0FBQUEsTUFBaUJDLFFBQWpCLEdBQThCRixVQUE5QixDQUFpQkUsUUFBakI7QUFDQSxNQUFRQyxLQUFSLEdBQW9DRixPQUFwQyxDQUFRRSxLQUFSO0FBQUEsTUFBZUMsT0FBZixHQUFvQ0gsT0FBcEMsQ0FBZUcsT0FBZjtBQUFBLE1BQXdCQyxPQUF4QixHQUFvQ0osT0FBcEMsQ0FBd0JJLE9BQXhCOztBQUNBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNELE9BQUQsRUFBYTtBQUM5QixRQUFNRSxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQixJQUFJQyxHQUFKLENBQVFMLE9BQU8sQ0FBQ00sS0FBUixDQUFjLEdBQWQsRUFBbUJDLEdBQW5CLENBQXVCLFVBQUFDLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUNGLEtBQUYsQ0FBUSxHQUFSLENBQUo7QUFBQSxLQUF4QixDQUFSLENBQW5CLENBQWY7QUFDQSxRQUFNRyxVQUFVLEdBQUcsRUFBbkIsQ0FGOEIsQ0FHOUI7O0FBQ0EsU0FBSyxJQUFJQyxHQUFULElBQWdCUixNQUFoQixFQUF3QjtBQUN0QixVQUFJQSxNQUFNLENBQUNRLEdBQUQsQ0FBTixLQUFnQixHQUFwQixFQUF5QjtBQUN2QkQsUUFBQUEsVUFBVSxDQUFDRSxJQUFYLENBQWdCO0FBQUVELFVBQUFBLEdBQUcsRUFBRSxNQUFNUixNQUFNLENBQUNRLEdBQUQsQ0FBbkI7QUFBMEJFLFVBQUFBLEtBQUssRUFBRUY7QUFB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LFlBQUFBLElBTFgsb0JBS0dBLElBTEgsQ0FLV0EsSUFMWDtBQU1MUixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw2REFBWixFQUEyRU8sSUFBM0U7QUFOSyw2Q0FPRTtBQUNMVCxjQUFBQSxLQUFLLEVBQUU7QUFDTFUsZ0JBQUFBLGVBQWUsRUFBZkE7QUFESztBQURGLGFBUEY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvV29ya3Mtc3R5bGU0L3dvcmtzLXN0eWxlNC5qc3g/YmUyZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgaW5pdElzb3RvcGUgZnJvbSBcIi4uLy4uL2NvbW1vbi9pbml0SXNvdG9wZVwiO1xyXG5cclxuY29uc3QgV29ya3NTdHlsZTQgPSAoeyBwb3J0YWZvbGlvIH0pID0+IHtcclxuICBjb25zdCB7IGNvbnRlbnQsIGl0ZW1MaXN0IH0gPSBwb3J0YWZvbGlvO1xyXG4gIGNvbnN0IHsgdGl0bGUsIGNhcHRpb24sIG9wdGlvbnMgfSA9IGNvbnRlbnQ7XHJcbiAgY29uc3QgbWFwT3B0aW9ucyA9IChvcHRpb25zKSA9PiB7XHJcbiAgICBjb25zdCBvYmplY3QgPSBPYmplY3QuZnJvbUVudHJpZXMobmV3IE1hcChvcHRpb25zLnNwbGl0KFwiLFwiKS5tYXAoYSA9PiBhLnNwbGl0KFwiPVwiKSkpKVxyXG4gICAgY29uc3Qgb3B0aW9uTGlzdCA9IFtdO1xyXG4gICAgLy8ge1RvZGFzOiAnKicsIGJyYW5kaW5nOiAnYnJhbmQnLCBBcHAgTW9iaWxlczogJ3dlYicsIENyZWF0aXZvOiAnZ3JhcGhpYyd9XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gb2JqZWN0KSB7XHJcbiAgICAgIGlmIChvYmplY3Rba2V5XSAhPT0gXCIqXCIpIHtcclxuICAgICAgICBvcHRpb25MaXN0LnB1c2goeyBrZXk6IFwiLlwiICsgb2JqZWN0W2tleV0sIGxhYmVsOiBrZXkgfSk7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgb3B0aW9uTGlzdC5wdXNoKHsga2V5OiBvYmplY3Rba2V5XSwgbGFiZWw6IGtleSB9KTtcclxuICAgIH1cclxuICAgIC8vIFt7a2V5OicqJywgbGFiZWw6J1RvZGFzJ30sIHtrZXk6J2JyYW5kJywgbGFiZWw6J2JyYW5kaW5nJ31dO1xyXG4gICAgcmV0dXJuIG9wdGlvbkxpc3Q7XHJcbiAgfVxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaW5pdElzb3RvcGUoKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicG9ydGZvbGlvLWZybCBzZWN0aW9uLXBhZGRpbmcgcGItNzBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IGNvbC1tZC0xMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYy1oZWFkICB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ3b3cgZmFkZUluXCIgZGF0YS13b3ctZGVsYXk9XCIuNXNcIj5cclxuICAgICAgICAgICAgICAgIHtjYXB0aW9ufVxyXG4gICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIndvdyBjb2xvci1mb250XCI+XHJcbiAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyaW5nIGNvbC0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlciB3b3cgZmFkZUluXCIgZGF0YS13b3ctZGVsYXk9XCIuNXNcIj5cclxuICAgICAgICAgICAgICB7bWFwT3B0aW9ucyhvcHRpb25zKT8ubGVuZ3RoID4gMCAmJiBtYXBPcHRpb25zKG9wdGlvbnMpLm1hcChvcCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWZpbHRlcj17b3Aua2V5fSBjbGFzc05hbWU9e29wLmtleSA9PT0gJyonICYmICdhY3RpdmUnfT5cclxuICAgICAgICAgICAgICAgICAge29wLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIHsvKiA8c3BhbiBkYXRhLWZpbHRlcj1cIipcIiBjbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgIEFsbFxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBkYXRhLWZpbHRlcj1cIi5icmFuZFwiPkJyYW5kaW5nPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGRhdGEtZmlsdGVyPVwiLndlYlwiPk1vYmlsZSBBcHA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gZGF0YS1maWx0ZXI9XCIuZ3JhcGhpY1wiPkNyZWF0aXZlPC9zcGFuPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnkgZnVsbC13aWR0aFwiPlxyXG4gICAgICAgICAgICB7aXRlbUxpc3QubGVuZ3RoID4gMCAmJiBpdGVtTGlzdC5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29sLW1kLTYgaXRlbXMgJHtpdGVtLmF0dHJpYnV0ZXMua2V5fSBsZy1tciB3b3cgZmFkZUluVXBgfVxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXdvdy1kZWxheT1cIi40c1wiXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg2PntpdGVtLmF0dHJpYnV0ZXMudGl0bGV9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLmF0dHJpYnV0ZXMuY2FwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9qZWN0LWRldGFpbHMyL3Byb2plY3QtZGV0YWlsczItZGFya2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicm90YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvcG9ydGZvbGlvL2ZyZWVsYW5jZXIvMS5qcGdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1pbWctb3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3dvcmtzMi93b3JrczItZGFya1wiPntpdGVtLmF0dHJpYnV0ZXMua2V5fTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya3NTdHlsZTQ7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHByb3BzKSB7XHJcbiAgY29uc29sZS5sb2coXCJwcm9wc1wiLCBwcm9wcylcclxuICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5BUEkpO1xyXG4gIGNvbnN0IHVybCA9IHByb2Nlc3MuZW52LkFQSTtcclxuICAvL2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkva2FyZW5zXHJcbiAgY29uc3QgeyBkYXRhOiB7IGRhdGEgfSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke3VybH0vYXBpL2thcmVuLXBvcnRhZm9saW9zP3BvcHVsYXRlPSpgKTtcclxuICBjb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiBob21lNy1kYXJrLmpzeCB+IGxpbmUgNTUgfiBnZXRTdGF0aWNQcm9wcyB+IGRhdGFcIiwgZGF0YSlcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgaXRlbUxpc3RQaWN0dXJlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsImluaXRJc290b3BlIiwiV29ya3NTdHlsZTQiLCJwb3J0YWZvbGlvIiwiY29udGVudCIsIml0ZW1MaXN0IiwidGl0bGUiLCJjYXB0aW9uIiwib3B0aW9ucyIsIm1hcE9wdGlvbnMiLCJvYmplY3QiLCJPYmplY3QiLCJmcm9tRW50cmllcyIsIk1hcCIsInNwbGl0IiwibWFwIiwiYSIsIm9wdGlvbkxpc3QiLCJrZXkiLCJwdXNoIiwibGFiZWwiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwibGVuZ3RoIiwib3AiLCJpdGVtIiwiYXR0cmlidXRlcyIsImlkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImVudiIsIkFQSSIsInVybCIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsIml0ZW1MaXN0UGljdHVyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Works-style4/works-style4.jsx\n");

/***/ })

});