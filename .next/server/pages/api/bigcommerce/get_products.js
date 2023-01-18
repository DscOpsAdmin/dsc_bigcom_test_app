"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/bigcommerce/get_products";
exports.ids = ["pages/api/bigcommerce/get_products"];
exports.modules = {

/***/ "nextjs-cors":
/*!******************************!*\
  !*** external "nextjs-cors" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("nextjs-cors");

/***/ }),

/***/ "(api)/./pages/api/bigcommerce/get_products.js":
/*!***********************************************!*\
  !*** ./pages/api/bigcommerce/get_products.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ get_products)\n/* harmony export */ });\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nextjs-cors */ \"nextjs-cors\");\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nextjs_cors__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function get_products(req, res) {\n  const logTitle = \" get_products() \";\n\n  try {\n    await nextjs_cors__WEBPACK_IMPORTED_MODULE_0___default()(req, res, {\n      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],\n      origin: '*',\n      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204\n\n    });\n    console.log(logTitle, \"EXECUTED!\");\n    console.log(logTitle + \"req.body\", req.body);\n    const storeHash = req.body ? req.body.storeHash : \"\";\n    const accessToken = req.body ? req.body.access_token ? req.body.access_token : req.body.accessToken : \"\";\n\n    if (storeHash && accessToken) {\n      const requestUrl = \"https://api.bigcommerce.com/stores/\" + storeHash + \"/v3/catalog/products?include=images,variants\";\n      const requestHeaders = {\n        \"X-Auth-Token\": accessToken,\n        \"Content-Type\": \"application/json\",\n        \"Accept\": \"application/json\"\n      };\n      fetch(requestUrl, {\n        method: \"GET\",\n        headers: requestHeaders\n      }).then(response => response.json()).then(responseObj => {\n        res.json(responseObj);\n      });\n    }\n  } catch (e) {\n    console.log(\"ERROR IN\" + logTitle, e);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmlnY29tbWVyY2UvZ2V0X3Byb2R1Y3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ2UsZUFBZUMsWUFBZixDQUE0QkMsR0FBNUIsRUFBaUNDLEdBQWpDLEVBQXNDO0VBQ2pELE1BQU1DLFFBQVEsR0FBRyxrQkFBakI7O0VBQ0EsSUFBSTtJQUNBLE1BQU1KLGtEQUFRLENBQUNFLEdBQUQsRUFBTUMsR0FBTixFQUFXO01BQ3JCRSxPQUFPLEVBQUUsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixLQUFoQixFQUF1QixPQUF2QixFQUFnQyxNQUFoQyxFQUF3QyxRQUF4QyxDQURZO01BRXJCQyxNQUFNLEVBQUUsR0FGYTtNQUdyQkMsb0JBQW9CLEVBQUUsR0FIRCxDQUdNOztJQUhOLENBQVgsQ0FBZDtJQUtBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsUUFBWixFQUFzQixXQUF0QjtJQUNBSSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsUUFBUSxHQUFFLFVBQXRCLEVBQWtDRixHQUFHLENBQUNRLElBQXRDO0lBQ0EsTUFBTUMsU0FBUyxHQUFHVCxHQUFHLENBQUNRLElBQUosR0FBV1IsR0FBRyxDQUFDUSxJQUFKLENBQVNDLFNBQXBCLEdBQWdDLEVBQWxEO0lBQ0EsTUFBTUMsV0FBVyxHQUFHVixHQUFHLENBQUNRLElBQUosR0FBWVIsR0FBRyxDQUFDUSxJQUFKLENBQVNHLFlBQVQsR0FBd0JYLEdBQUcsQ0FBQ1EsSUFBSixDQUFTRyxZQUFqQyxHQUFnRFgsR0FBRyxDQUFDUSxJQUFKLENBQVNFLFdBQXJFLEdBQW9GLEVBQXhHOztJQUNBLElBQUdELFNBQVMsSUFBSUMsV0FBaEIsRUFBNkI7TUFDekIsTUFBTUUsVUFBVSxHQUFHLHdDQUFzQ0gsU0FBdEMsR0FBZ0QsOENBQW5FO01BQ0EsTUFBTUksY0FBYyxHQUFHO1FBQ25CLGdCQUFnQkgsV0FERztRQUVuQixnQkFBZ0Isa0JBRkc7UUFHbkIsVUFBVTtNQUhTLENBQXZCO01BS0FJLEtBQUssQ0FBQ0YsVUFBRCxFQUFhO1FBQ2RHLE1BQU0sRUFBRSxLQURNO1FBRWRDLE9BQU8sRUFBRUg7TUFGSyxDQUFiLENBQUwsQ0FJQ0ksSUFKRCxDQUlNQyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUpsQixFQUtDRixJQUxELENBS01HLFdBQVcsSUFBSTtRQUNqQm5CLEdBQUcsQ0FBQ2tCLElBQUosQ0FBU0MsV0FBVDtNQUNILENBUEQ7SUFRSDtFQUNKLENBMUJELENBMEJFLE9BQU1DLENBQU4sRUFBUztJQUNQZixPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFXTCxRQUF2QixFQUFpQ21CLENBQWpDO0VBQ0g7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3NhbXBsZS1hcHAtbm9kZWpzLy4vcGFnZXMvYXBpL2JpZ2NvbW1lcmNlL2dldF9wcm9kdWN0cy5qcz9lMTkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0Q29ycyBmcm9tIFwibmV4dGpzLWNvcnNcIjtcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0X3Byb2R1Y3RzKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCBsb2dUaXRsZSA9IFwiIGdldF9wcm9kdWN0cygpIFwiO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBOZXh0Q29ycyhyZXEsIHJlcywge1xyXG4gICAgICAgICAgICBtZXRob2RzOiBbJ0dFVCcsICdIRUFEJywgJ1BVVCcsICdQQVRDSCcsICdQT1NUJywgJ0RFTEVURSddLFxyXG4gICAgICAgICAgICBvcmlnaW46ICcqJyxcclxuICAgICAgICAgICAgb3B0aW9uc1N1Y2Nlc3NTdGF0dXM6IDIwMCwgLy8gc29tZSBsZWdhY3kgYnJvd3NlcnMgKElFMTEsIHZhcmlvdXMgU21hcnRUVnMpIGNob2tlIG9uIDIwNFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxvZ1RpdGxlLCBcIkVYRUNVVEVEIVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhsb2dUaXRsZSsgXCJyZXEuYm9keVwiLCByZXEuYm9keSk7XHJcbiAgICAgICAgY29uc3Qgc3RvcmVIYXNoID0gcmVxLmJvZHkgPyByZXEuYm9keS5zdG9yZUhhc2ggOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gcmVxLmJvZHkgPyAocmVxLmJvZHkuYWNjZXNzX3Rva2VuID8gcmVxLmJvZHkuYWNjZXNzX3Rva2VuIDogcmVxLmJvZHkuYWNjZXNzVG9rZW4pIDogXCJcIjtcclxuICAgICAgICBpZihzdG9yZUhhc2ggJiYgYWNjZXNzVG9rZW4pIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdFVybCA9IFwiaHR0cHM6Ly9hcGkuYmlnY29tbWVyY2UuY29tL3N0b3Jlcy9cIitzdG9yZUhhc2grXCIvdjMvY2F0YWxvZy9wcm9kdWN0cz9pbmNsdWRlPWltYWdlcyx2YXJpYW50c1wiO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0SGVhZGVycyA9IHtcclxuICAgICAgICAgICAgICAgIFwiWC1BdXRoLVRva2VuXCI6IGFjY2Vzc1Rva2VuLFxyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmZXRjaChyZXF1ZXN0VXJsLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiByZXF1ZXN0SGVhZGVyc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlT2JqID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uKHJlc3BvbnNlT2JqKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SIElOXCIrbG9nVGl0bGUsIGUpO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIk5leHRDb3JzIiwiZ2V0X3Byb2R1Y3RzIiwicmVxIiwicmVzIiwibG9nVGl0bGUiLCJtZXRob2RzIiwib3JpZ2luIiwib3B0aW9uc1N1Y2Nlc3NTdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsInN0b3JlSGFzaCIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzX3Rva2VuIiwicmVxdWVzdFVybCIsInJlcXVlc3RIZWFkZXJzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3BvbnNlT2JqIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/bigcommerce/get_products.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/bigcommerce/get_products.js"));
module.exports = __webpack_exports__;

})();