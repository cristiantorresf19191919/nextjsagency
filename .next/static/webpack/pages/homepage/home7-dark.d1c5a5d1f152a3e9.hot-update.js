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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_initIsotope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/initIsotope */ \"./src/common/initIsotope.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\user\\\\Documents\\\\programming\\\\nextjsagency\\\\src\\\\components\\\\Works-style4\\\\works-style4.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n/* eslint-disable @next/next/no-img-element */\n\n\n\n\n\n\nvar WorksStyle4 = function WorksStyle4(_ref) {\n  _s();\n\n  var _mapOptions;\n\n  var portafolio = _ref.portafolio;\n  var content = portafolio.content,\n      itemList = portafolio.itemList;\n  var title = content.title,\n      caption = content.caption,\n      options = content.options;\n\n  var mapOptions = function mapOptions(options) {\n    var object = Object.fromEntries(new Map(options.split(\",\").map(function (a) {\n      return a.split(\"=\");\n    })));\n    var optionList = []; // {Todas: '*', branding: 'brand', App Mobiles: 'web', Creativo: 'graphic'}\n\n    for (var key in object) {\n      if (object[key] !== \"*\") {\n        optionList.push({\n          key: \".\" + object[key],\n          label: key\n        });\n        continue;\n      }\n\n      optionList.push({\n        key: object[key],\n        label: key\n      });\n    } // [{key:'*', label:'Todas'}, {key:'brand', label:'branding'}];\n\n\n    return optionList;\n  };\n\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {\n    setTimeout(function () {\n      (0,_common_initIsotope__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    }, 1000);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"section\", {\n    className: \"portfolio-frl section-padding pb-70\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"row justify-content-center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"col-lg-8 col-md-10\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"sec-head  text-center\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h6\", {\n              className: \"wow fadeIn\",\n              \"data-wow-delay\": \".5s\",\n              children: caption\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h3\", {\n              className: \"wow color-font\",\n              children: title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"filtering col-12\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"filter wow fadeIn\",\n            \"data-wow-delay\": \".5s\",\n            children: ((_mapOptions = mapOptions(options)) === null || _mapOptions === void 0 ? void 0 : _mapOptions.length) > 0 && mapOptions(options).map(function (op) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n                \"data-filter\": op.key,\n                className: op.key === '*' && 'active',\n                children: op.label\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 49,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"gallery full-width\",\n          children: itemList.length > 0 && itemList.map(function (item) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n                className: \"col-md-6 items \".concat(item.attributes.key, \" lg-mr wow fadeInUp\"),\n                \"data-wow-delay\": \".4s\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n                  className: \"item-img\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n                    className: \"cont\",\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h6\", {\n                      children: item.attributes.title\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 72,\n                      columnNumber: 23\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n                      children: item.attributes.caption\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 73,\n                      columnNumber: 23\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 71,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/project-details2/project-details2-dark\",\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n                      className: \"rota\",\n                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n                        src: \"/img/portfolio/freelancer/1.jpg\",\n                        alt: \"image\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 77,\n                        columnNumber: 25\n                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n                        className: \"item-img-overlay\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 78,\n                        columnNumber: 25\n                      }, _this)]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 76,\n                      columnNumber: 23\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 75,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n                    className: \"tags\",\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/works2/works2-dark\",\n                        children: item.attributes.key\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 83,\n                        columnNumber: 25\n                      }, _this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 82,\n                      columnNumber: 23\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 81,\n                    columnNumber: 21\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 70,\n                  columnNumber: 19\n                }, _this)\n              }, item.id, false, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(WorksStyle4, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = WorksStyle4;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorksStyle4);\n\nvar _c;\n\n$RefreshReg$(_c, \"WorksStyle4\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Xb3Jrcy1zdHlsZTQvd29ya3Mtc3R5bGU0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFvQjtBQUFBOztBQUFBOztBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDdEMsTUFBUUMsT0FBUixHQUE4QkQsVUFBOUIsQ0FBUUMsT0FBUjtBQUFBLE1BQWlCQyxRQUFqQixHQUE4QkYsVUFBOUIsQ0FBaUJFLFFBQWpCO0FBQ0EsTUFBUUMsS0FBUixHQUFvQ0YsT0FBcEMsQ0FBUUUsS0FBUjtBQUFBLE1BQWVDLE9BQWYsR0FBb0NILE9BQXBDLENBQWVHLE9BQWY7QUFBQSxNQUF3QkMsT0FBeEIsR0FBb0NKLE9BQXBDLENBQXdCSSxPQUF4Qjs7QUFDQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDRCxPQUFELEVBQWE7QUFDOUIsUUFBTUUsTUFBTSxHQUFHQyxNQUFNLENBQUNDLFdBQVAsQ0FBbUIsSUFBSUMsR0FBSixDQUFRTCxPQUFPLENBQUNNLEtBQVIsQ0FBYyxHQUFkLEVBQW1CQyxHQUFuQixDQUF1QixVQUFBQyxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDRixLQUFGLENBQVEsR0FBUixDQUFKO0FBQUEsS0FBeEIsQ0FBUixDQUFuQixDQUFmO0FBQ0EsUUFBTUcsVUFBVSxHQUFHLEVBQW5CLENBRjhCLENBRzlCOztBQUNBLFNBQUssSUFBSUMsR0FBVCxJQUFnQlIsTUFBaEIsRUFBd0I7QUFDdEIsVUFBSUEsTUFBTSxDQUFDUSxHQUFELENBQU4sS0FBZ0IsR0FBcEIsRUFBeUI7QUFDdkJELFFBQUFBLFVBQVUsQ0FBQ0UsSUFBWCxDQUFnQjtBQUFFRCxVQUFBQSxHQUFHLEVBQUUsTUFBTVIsTUFBTSxDQUFDUSxHQUFELENBQW5CO0FBQTBCRSxVQUFBQSxLQUFLLEVBQUVGO0FBQWpDLFNBQWhCO0FBQ0E7QUFDRDs7QUFDREQsTUFBQUEsVUFBVSxDQUFDRSxJQUFYLENBQWdCO0FBQUVELFFBQUFBLEdBQUcsRUFBRVIsTUFBTSxDQUFDUSxHQUFELENBQWI7QUFBb0JFLFFBQUFBLEtBQUssRUFBRUY7QUFBM0IsT0FBaEI7QUFDRCxLQVY2QixDQVc5Qjs7O0FBQ0EsV0FBT0QsVUFBUDtBQUNELEdBYkQ7O0FBY0FsQixFQUFBQSxzREFBQSxDQUFnQixZQUFNO0FBQ3BCdUIsSUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZnJCLE1BQUFBLCtEQUFXO0FBQ1osS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdELEdBSkQsRUFJRyxFQUpIO0FBS0Esc0JBQ0U7QUFBUyxhQUFTLEVBQUMscUNBQW5CO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyw0QkFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxvQkFBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyx1QkFBZjtBQUFBLG9DQUNFO0FBQUksdUJBQVMsRUFBQyxZQUFkO0FBQTJCLGdDQUFlLEtBQTFDO0FBQUEsd0JBQ0dNO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFO0FBQUksdUJBQVMsRUFBQyxnQkFBZDtBQUFBLHdCQUNHRDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFlRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsa0JBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsbUJBQWY7QUFBbUMsOEJBQWUsS0FBbEQ7QUFBQSxzQkFDRyxnQkFBQUcsVUFBVSxDQUFDRCxPQUFELENBQVYsNERBQXFCZSxNQUFyQixJQUE4QixDQUE5QixJQUFtQ2QsVUFBVSxDQUFDRCxPQUFELENBQVYsQ0FBb0JPLEdBQXBCLENBQXdCLFVBQUFTLEVBQUU7QUFBQSxrQ0FDNUQ7QUFBTSwrQkFBYUEsRUFBRSxDQUFDTixHQUF0QjtBQUEyQix5QkFBUyxFQUFFTSxFQUFFLENBQUNOLEdBQUgsS0FBVyxHQUFYLElBQWtCLFFBQXhEO0FBQUEsMEJBQ0dNLEVBQUUsQ0FBQ0o7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUQ0RDtBQUFBLGFBQTFCO0FBRHRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBaUJFO0FBQUssbUJBQVMsRUFBQyxvQkFBZjtBQUFBLG9CQUNHZixRQUFRLENBQUNrQixNQUFULEdBQWtCLENBQWxCLElBQXVCbEIsUUFBUSxDQUFDVSxHQUFULENBQWEsVUFBQVUsSUFBSTtBQUFBLGdDQUN2QztBQUFBLHFDQUNFO0FBQ0UseUJBQVMsMkJBQW9CQSxJQUFJLENBQUNDLFVBQUwsQ0FBZ0JSLEdBQXBDLHdCQURYO0FBRUUsa0NBQWUsS0FGakI7QUFBQSx1Q0FLRTtBQUFLLDJCQUFTLEVBQUMsVUFBZjtBQUFBLDBDQUNFO0FBQUssNkJBQVMsRUFBQyxNQUFmO0FBQUEsNENBQ0U7QUFBQSxnQ0FBS08sSUFBSSxDQUFDQyxVQUFMLENBQWdCcEI7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixlQUVFO0FBQUEsZ0NBQUltQixJQUFJLENBQUNDLFVBQUwsQ0FBZ0JuQjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUtFLDhEQUFDLGtEQUFEO0FBQU0sd0JBQUksMkNBQVY7QUFBQSwyQ0FDRTtBQUFHLCtCQUFTLEVBQUMsTUFBYjtBQUFBLDhDQUNFO0FBQUssMkJBQUcsRUFBQyxpQ0FBVDtBQUEyQywyQkFBRyxFQUFDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsZUFFRTtBQUFLLGlDQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTEYsZUFXRTtBQUFLLDZCQUFTLEVBQUMsTUFBZjtBQUFBLDJDQUNFO0FBQUEsNkNBQ0UsOERBQUMsa0RBQUQ7QUFBTSw0QkFBSSxFQUFDLHFCQUFYO0FBQUEsa0NBQWtDa0IsSUFBSSxDQUFDQyxVQUFMLENBQWdCUjtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEYsaUJBR09PLElBQUksQ0FBQ0UsRUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsNkJBRHVDO0FBQUEsV0FBakI7QUFEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUVELENBM0ZEOztHQUFNekI7O0tBQUFBO0FBNkZOLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1dvcmtzLXN0eWxlNC93b3Jrcy1zdHlsZTQuanN4P2JlMmYiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGluaXRJc290b3BlIGZyb20gXCIuLi8uLi9jb21tb24vaW5pdElzb3RvcGVcIjtcclxuXHJcbmNvbnN0IFdvcmtzU3R5bGU0ID0gKHsgcG9ydGFmb2xpbyB9KSA9PiB7XHJcbiAgY29uc3QgeyBjb250ZW50LCBpdGVtTGlzdCB9ID0gcG9ydGFmb2xpbztcclxuICBjb25zdCB7IHRpdGxlLCBjYXB0aW9uLCBvcHRpb25zIH0gPSBjb250ZW50O1xyXG4gIGNvbnN0IG1hcE9wdGlvbnMgPSAob3B0aW9ucykgPT4ge1xyXG4gICAgY29uc3Qgb2JqZWN0ID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBNYXAob3B0aW9ucy5zcGxpdChcIixcIikubWFwKGEgPT4gYS5zcGxpdChcIj1cIikpKSlcclxuICAgIGNvbnN0IG9wdGlvbkxpc3QgPSBbXTtcclxuICAgIC8vIHtUb2RhczogJyonLCBicmFuZGluZzogJ2JyYW5kJywgQXBwIE1vYmlsZXM6ICd3ZWInLCBDcmVhdGl2bzogJ2dyYXBoaWMnfVxyXG4gICAgZm9yIChsZXQga2V5IGluIG9iamVjdCkge1xyXG4gICAgICBpZiAob2JqZWN0W2tleV0gIT09IFwiKlwiKSB7XHJcbiAgICAgICAgb3B0aW9uTGlzdC5wdXNoKHsga2V5OiBcIi5cIiArIG9iamVjdFtrZXldLCBsYWJlbDoga2V5IH0pO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIG9wdGlvbkxpc3QucHVzaCh7IGtleTogb2JqZWN0W2tleV0sIGxhYmVsOiBrZXkgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBbe2tleTonKicsIGxhYmVsOidUb2Rhcyd9LCB7a2V5OidicmFuZCcsIGxhYmVsOidicmFuZGluZyd9XTtcclxuICAgIHJldHVybiBvcHRpb25MaXN0O1xyXG4gIH1cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGluaXRJc290b3BlKCk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBvcnRmb2xpby1mcmwgc2VjdGlvbi1wYWRkaW5nIHBiLTcwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOCBjb2wtbWQtMTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWMtaGVhZCAgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwid293IGZhZGVJblwiIGRhdGEtd293LWRlbGF5PVwiLjVzXCI+XHJcbiAgICAgICAgICAgICAgICB7Y2FwdGlvbn1cclxuICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ3b3cgY29sb3ItZm9udFwiPlxyXG4gICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlcmluZyBjb2wtMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXIgd293IGZhZGVJblwiIGRhdGEtd293LWRlbGF5PVwiLjVzXCI+XHJcbiAgICAgICAgICAgICAge21hcE9wdGlvbnMob3B0aW9ucyk/Lmxlbmd0aCA+IDAgJiYgbWFwT3B0aW9ucyhvcHRpb25zKS5tYXAob3AgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1maWx0ZXI9e29wLmtleX0gY2xhc3NOYW1lPXtvcC5rZXkgPT09ICcqJyAmJiAnYWN0aXZlJ30+XHJcbiAgICAgICAgICAgICAgICAgIHtvcC5sYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICB7LyogPHNwYW4gZGF0YS1maWx0ZXI9XCIqXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICBBbGxcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gZGF0YS1maWx0ZXI9XCIuYnJhbmRcIj5CcmFuZGluZzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBkYXRhLWZpbHRlcj1cIi53ZWJcIj5Nb2JpbGUgQXBwPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGRhdGEtZmlsdGVyPVwiLmdyYXBoaWNcIj5DcmVhdGl2ZTwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5IGZ1bGwtd2lkdGhcIj5cclxuICAgICAgICAgICAge2l0ZW1MaXN0Lmxlbmd0aCA+IDAgJiYgaXRlbUxpc3QubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbC1tZC02IGl0ZW1zICR7aXRlbS5hdHRyaWJ1dGVzLmtleX0gbGctbXIgd293IGZhZGVJblVwYH1cclxuICAgICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9XCIuNHNcIlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoNj57aXRlbS5hdHRyaWJ1dGVzLnRpdGxlfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5hdHRyaWJ1dGVzLmNhcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvamVjdC1kZXRhaWxzMi9wcm9qZWN0LWRldGFpbHMyLWRhcmtgfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJvdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3BvcnRmb2xpby9mcmVlbGFuY2VyLzEuanBnXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0taW1nLW92ZXJsYXlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi93b3JrczIvd29ya3MyLWRhcmtcIj57aXRlbS5hdHRyaWJ1dGVzLmtleX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9ICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtzU3R5bGU0O1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJpbml0SXNvdG9wZSIsIldvcmtzU3R5bGU0IiwicG9ydGFmb2xpbyIsImNvbnRlbnQiLCJpdGVtTGlzdCIsInRpdGxlIiwiY2FwdGlvbiIsIm9wdGlvbnMiLCJtYXBPcHRpb25zIiwib2JqZWN0IiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJNYXAiLCJzcGxpdCIsIm1hcCIsImEiLCJvcHRpb25MaXN0Iiwia2V5IiwicHVzaCIsImxhYmVsIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsImxlbmd0aCIsIm9wIiwiaXRlbSIsImF0dHJpYnV0ZXMiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Works-style4/works-style4.jsx\n");

/***/ })

});