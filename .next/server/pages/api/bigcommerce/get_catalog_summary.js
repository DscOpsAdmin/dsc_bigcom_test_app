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
exports.id = "pages/api/bigcommerce/get_catalog_summary";
exports.ids = ["pages/api/bigcommerce/get_catalog_summary"];
exports.modules = {

/***/ "nextjs-cors":
/*!******************************!*\
  !*** external "nextjs-cors" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("nextjs-cors");

/***/ }),

/***/ "(api)/./pages/api/bigcommerce/get_catalog_summary.js":
/*!******************************************************!*\
  !*** ./pages/api/bigcommerce/get_catalog_summary.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ get_products)\n/* harmony export */ });\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nextjs-cors */ \"nextjs-cors\");\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nextjs_cors__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function get_products(req, res) {\n  const logTitle = \" get_products() \";\n\n  try {\n    await nextjs_cors__WEBPACK_IMPORTED_MODULE_0___default()(req, res, {\n      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],\n      origin: '*',\n      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204\n\n    });\n    console.log(logTitle, \"EXECUTED!\");\n    const storeHash = req.body ? req.body.storeHash : \"\";\n    const accessToken = req.body ? req.body.access_token ? req.body.access_token : req.body.accessToken : \"\";\n    console.log(logTitle + \"storeHash\", storeHash);\n    console.log(logTitle + \"accessToken\", accessToken);\n\n    if (storeHash && accessToken) {\n      const requestUrl = \"https://api.bigcommerce.com/stores/\" + storeHash + \"/v3/catalog/summary\";\n      const requestHeaders = {\n        \"X-Auth-Token\": accessToken,\n        \"Content-Type\": \"application/json\",\n        \"Accept\": \"application/json\"\n      };\n      fetch(requestUrl, {\n        method: \"GET\",\n        headers: requestHeaders\n      }).then(response => response.json()).then(responseObj => {\n        res.json(responseObj);\n      });\n    }\n  } catch (e) {\n    console.log(\"ERROR IN\" + logTitle, e);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmlnY29tbWVyY2UvZ2V0X2NhdGFsb2dfc3VtbWFyeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNlLGVBQWVDLFlBQWYsQ0FBNEJDLEdBQTVCLEVBQWlDQyxHQUFqQyxFQUFzQztFQUNqRCxNQUFNQyxRQUFRLEdBQUcsa0JBQWpCOztFQUNBLElBQUk7SUFDQSxNQUFNSixrREFBUSxDQUFDRSxHQUFELEVBQU1DLEdBQU4sRUFBVztNQUNyQkUsT0FBTyxFQUFFLENBQUMsS0FBRCxFQUFRLE1BQVIsRUFBZ0IsS0FBaEIsRUFBdUIsT0FBdkIsRUFBZ0MsTUFBaEMsRUFBd0MsUUFBeEMsQ0FEWTtNQUVyQkMsTUFBTSxFQUFFLEdBRmE7TUFHckJDLG9CQUFvQixFQUFFLEdBSEQsQ0FHTTs7SUFITixDQUFYLENBQWQ7SUFLQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlMLFFBQVosRUFBc0IsV0FBdEI7SUFDQSxNQUFNTSxTQUFTLEdBQUdSLEdBQUcsQ0FBQ1MsSUFBSixHQUFXVCxHQUFHLENBQUNTLElBQUosQ0FBU0QsU0FBcEIsR0FBZ0MsRUFBbEQ7SUFDQSxNQUFNRSxXQUFXLEdBQUdWLEdBQUcsQ0FBQ1MsSUFBSixHQUFZVCxHQUFHLENBQUNTLElBQUosQ0FBU0UsWUFBVCxHQUF3QlgsR0FBRyxDQUFDUyxJQUFKLENBQVNFLFlBQWpDLEdBQWdEWCxHQUFHLENBQUNTLElBQUosQ0FBU0MsV0FBckUsR0FBb0YsRUFBeEc7SUFFQUosT0FBTyxDQUFDQyxHQUFSLENBQVlMLFFBQVEsR0FBQyxXQUFyQixFQUFrQ00sU0FBbEM7SUFDQUYsT0FBTyxDQUFDQyxHQUFSLENBQVlMLFFBQVEsR0FBQyxhQUFyQixFQUFvQ1EsV0FBcEM7O0lBRUEsSUFBSUYsU0FBUyxJQUFJRSxXQUFqQixFQUE4QjtNQUMxQixNQUFNRSxVQUFVLEdBQUcsd0NBQXNDSixTQUF0QyxHQUFnRCxxQkFBbkU7TUFDQSxNQUFNSyxjQUFjLEdBQUc7UUFDbkIsZ0JBQWdCSCxXQURHO1FBRW5CLGdCQUFnQixrQkFGRztRQUduQixVQUFVO01BSFMsQ0FBdkI7TUFLQUksS0FBSyxDQUFDRixVQUFELEVBQWE7UUFDZEcsTUFBTSxFQUFFLEtBRE07UUFFZEMsT0FBTyxFQUFFSDtNQUZLLENBQWIsQ0FBTCxDQUlDSSxJQUpELENBSU1DLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBSmxCLEVBS0NGLElBTEQsQ0FLTUcsV0FBVyxJQUFJO1FBQ2pCbkIsR0FBRyxDQUFDa0IsSUFBSixDQUFTQyxXQUFUO01BQ0gsQ0FQRDtJQVNIO0VBQ0osQ0E5QkQsQ0E4QkUsT0FBTUMsQ0FBTixFQUFTO0lBQ1BmLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVdMLFFBQXZCLEVBQWlDbUIsQ0FBakM7RUFDSDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FtcGxlLWFwcC1ub2RlanMvLi9wYWdlcy9hcGkvYmlnY29tbWVyY2UvZ2V0X2NhdGFsb2dfc3VtbWFyeS5qcz82MWM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0Q29ycyBmcm9tIFwibmV4dGpzLWNvcnNcIjtcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0X3Byb2R1Y3RzKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCBsb2dUaXRsZSA9IFwiIGdldF9wcm9kdWN0cygpIFwiO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBOZXh0Q29ycyhyZXEsIHJlcywge1xyXG4gICAgICAgICAgICBtZXRob2RzOiBbJ0dFVCcsICdIRUFEJywgJ1BVVCcsICdQQVRDSCcsICdQT1NUJywgJ0RFTEVURSddLFxyXG4gICAgICAgICAgICBvcmlnaW46ICcqJyxcclxuICAgICAgICAgICAgb3B0aW9uc1N1Y2Nlc3NTdGF0dXM6IDIwMCwgLy8gc29tZSBsZWdhY3kgYnJvd3NlcnMgKElFMTEsIHZhcmlvdXMgU21hcnRUVnMpIGNob2tlIG9uIDIwNFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxvZ1RpdGxlLCBcIkVYRUNVVEVEIVwiKTtcclxuICAgICAgICBjb25zdCBzdG9yZUhhc2ggPSByZXEuYm9keSA/IHJlcS5ib2R5LnN0b3JlSGFzaCA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSByZXEuYm9keSA/IChyZXEuYm9keS5hY2Nlc3NfdG9rZW4gPyByZXEuYm9keS5hY2Nlc3NfdG9rZW4gOiByZXEuYm9keS5hY2Nlc3NUb2tlbikgOiBcIlwiO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhsb2dUaXRsZStcInN0b3JlSGFzaFwiLCBzdG9yZUhhc2gpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxvZ1RpdGxlK1wiYWNjZXNzVG9rZW5cIiwgYWNjZXNzVG9rZW4pO1xyXG5cclxuICAgICAgICBpZiAoc3RvcmVIYXNoICYmIGFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RVcmwgPSBcImh0dHBzOi8vYXBpLmJpZ2NvbW1lcmNlLmNvbS9zdG9yZXMvXCIrc3RvcmVIYXNoK1wiL3YzL2NhdGFsb2cvc3VtbWFyeVwiO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0SGVhZGVycyA9IHtcclxuICAgICAgICAgICAgICAgIFwiWC1BdXRoLVRva2VuXCI6IGFjY2Vzc1Rva2VuLFxyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmZXRjaChyZXF1ZXN0VXJsLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiByZXF1ZXN0SGVhZGVyc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlT2JqID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uKHJlc3BvbnNlT2JqKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBJTlwiK2xvZ1RpdGxlLCBlKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJOZXh0Q29ycyIsImdldF9wcm9kdWN0cyIsInJlcSIsInJlcyIsImxvZ1RpdGxlIiwibWV0aG9kcyIsIm9yaWdpbiIsIm9wdGlvbnNTdWNjZXNzU3RhdHVzIiwiY29uc29sZSIsImxvZyIsInN0b3JlSGFzaCIsImJvZHkiLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsInJlcXVlc3RVcmwiLCJyZXF1ZXN0SGVhZGVycyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXNwb25zZU9iaiIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/bigcommerce/get_catalog_summary.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/bigcommerce/get_catalog_summary.js"));
module.exports = __webpack_exports__;

})();