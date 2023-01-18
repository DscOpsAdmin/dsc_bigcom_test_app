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
exports.id = "pages/api/bigcommerce/get_brands";
exports.ids = ["pages/api/bigcommerce/get_brands"];
exports.modules = {

/***/ "nextjs-cors":
/*!******************************!*\
  !*** external "nextjs-cors" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("nextjs-cors");

/***/ }),

/***/ "(api)/./pages/api/bigcommerce/get_brands.js":
/*!*********************************************!*\
  !*** ./pages/api/bigcommerce/get_brands.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ get_brands)\n/* harmony export */ });\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nextjs-cors */ \"nextjs-cors\");\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nextjs_cors__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function get_brands(req, res) {\n  const logTitle = \" get_brands() \";\n\n  try {\n    await nextjs_cors__WEBPACK_IMPORTED_MODULE_0___default()(req, res, {\n      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],\n      origin: '*',\n      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204\n\n    });\n    console.log(logTitle, \"EXECUTED!\");\n    console.log(logTitle + \"req.body\", req.body);\n    const requestBody = req.body;\n\n    if (requestBody.storeHash && requestBody.accessToken) {\n      // const requestUrl = \"https://api.bigcommerce.com/stores/\"+requestBody.storeHash+\"/v2/customers\";\n      const requestUrl = \"https://api.bigcommerce.com/stores/\" + requestBody.storeHash + \"/v3/catalog/brands\";\n      const requestHeaders = {\n        \"X-Auth-Token\": requestBody.accessToken,\n        \"Content-Type\": \"application/json\",\n        \"Accept\": \"application/json\"\n      };\n      fetch(requestUrl, {\n        method: \"GET\",\n        headers: requestHeaders\n      }).then(response => response.json()).then(responseObj => {\n        res.json(responseObj);\n      });\n    }\n  } catch (e) {\n    console.log(\"ERROR IN\" + logTitle, e);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmlnY29tbWVyY2UvZ2V0X2JyYW5kcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNlLGVBQWVDLFVBQWYsQ0FBMEJDLEdBQTFCLEVBQStCQyxHQUEvQixFQUFvQztFQUMvQyxNQUFNQyxRQUFRLEdBQUcsZ0JBQWpCOztFQUNBLElBQUk7SUFDQSxNQUFNSixrREFBUSxDQUFDRSxHQUFELEVBQU1DLEdBQU4sRUFBVztNQUNyQkUsT0FBTyxFQUFFLENBQUMsS0FBRCxFQUFRLE1BQVIsRUFBZ0IsS0FBaEIsRUFBdUIsT0FBdkIsRUFBZ0MsTUFBaEMsRUFBd0MsUUFBeEMsQ0FEWTtNQUVyQkMsTUFBTSxFQUFFLEdBRmE7TUFHckJDLG9CQUFvQixFQUFFLEdBSEQsQ0FHTTs7SUFITixDQUFYLENBQWQ7SUFLQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlMLFFBQVosRUFBc0IsV0FBdEI7SUFDQUksT0FBTyxDQUFDQyxHQUFSLENBQVlMLFFBQVEsR0FBRSxVQUF0QixFQUFrQ0YsR0FBRyxDQUFDUSxJQUF0QztJQUNBLE1BQU1DLFdBQVcsR0FBR1QsR0FBRyxDQUFDUSxJQUF4Qjs7SUFDQSxJQUFHQyxXQUFXLENBQUNDLFNBQVosSUFBeUJELFdBQVcsQ0FBQ0UsV0FBeEMsRUFBcUQ7TUFDakQ7TUFDQSxNQUFNQyxVQUFVLEdBQUcsd0NBQXNDSCxXQUFXLENBQUNDLFNBQWxELEdBQTRELG9CQUEvRTtNQUNBLE1BQU1HLGNBQWMsR0FBRztRQUNuQixnQkFBZ0JKLFdBQVcsQ0FBQ0UsV0FEVDtRQUVuQixnQkFBZ0Isa0JBRkc7UUFHbkIsVUFBVTtNQUhTLENBQXZCO01BS0FHLEtBQUssQ0FBQ0YsVUFBRCxFQUFhO1FBQ2RHLE1BQU0sRUFBRSxLQURNO1FBRWRDLE9BQU8sRUFBRUg7TUFGSyxDQUFiLENBQUwsQ0FJQ0ksSUFKRCxDQUlNQyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUpsQixFQUtDRixJQUxELENBS01HLFdBQVcsSUFBSTtRQUNqQm5CLEdBQUcsQ0FBQ2tCLElBQUosQ0FBU0MsV0FBVDtNQUNILENBUEQ7SUFRSDtFQUNKLENBMUJELENBMEJFLE9BQU1DLENBQU4sRUFBUztJQUNQZixPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFXTCxRQUF2QixFQUFpQ21CLENBQWpDO0VBQ0g7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3NhbXBsZS1hcHAtbm9kZWpzLy4vcGFnZXMvYXBpL2JpZ2NvbW1lcmNlL2dldF9icmFuZHMuanM/MTE0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dENvcnMgZnJvbSBcIm5leHRqcy1jb3JzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldF9icmFuZHMocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IGxvZ1RpdGxlID0gXCIgZ2V0X2JyYW5kcygpIFwiO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBOZXh0Q29ycyhyZXEsIHJlcywge1xyXG4gICAgICAgICAgICBtZXRob2RzOiBbJ0dFVCcsICdIRUFEJywgJ1BVVCcsICdQQVRDSCcsICdQT1NUJywgJ0RFTEVURSddLFxyXG4gICAgICAgICAgICBvcmlnaW46ICcqJyxcclxuICAgICAgICAgICAgb3B0aW9uc1N1Y2Nlc3NTdGF0dXM6IDIwMCwgLy8gc29tZSBsZWdhY3kgYnJvd3NlcnMgKElFMTEsIHZhcmlvdXMgU21hcnRUVnMpIGNob2tlIG9uIDIwNFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxvZ1RpdGxlLCBcIkVYRUNVVEVEIVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhsb2dUaXRsZSsgXCJyZXEuYm9keVwiLCByZXEuYm9keSk7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdEJvZHkgPSByZXEuYm9keVxyXG4gICAgICAgIGlmKHJlcXVlc3RCb2R5LnN0b3JlSGFzaCAmJiByZXF1ZXN0Qm9keS5hY2Nlc3NUb2tlbikge1xyXG4gICAgICAgICAgICAvLyBjb25zdCByZXF1ZXN0VXJsID0gXCJodHRwczovL2FwaS5iaWdjb21tZXJjZS5jb20vc3RvcmVzL1wiK3JlcXVlc3RCb2R5LnN0b3JlSGFzaCtcIi92Mi9jdXN0b21lcnNcIjtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdFVybCA9IFwiaHR0cHM6Ly9hcGkuYmlnY29tbWVyY2UuY29tL3N0b3Jlcy9cIityZXF1ZXN0Qm9keS5zdG9yZUhhc2grXCIvdjMvY2F0YWxvZy9icmFuZHNcIjtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdEhlYWRlcnMgPSB7XHJcbiAgICAgICAgICAgICAgICBcIlgtQXV0aC1Ub2tlblwiOiByZXF1ZXN0Qm9keS5hY2Nlc3NUb2tlbixcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZmV0Y2gocmVxdWVzdFVybCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogcmVxdWVzdEhlYWRlcnNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZU9iaiA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXMuanNvbihyZXNwb25zZU9iailcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SIElOXCIrbG9nVGl0bGUsIGUpO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIk5leHRDb3JzIiwiZ2V0X2JyYW5kcyIsInJlcSIsInJlcyIsImxvZ1RpdGxlIiwibWV0aG9kcyIsIm9yaWdpbiIsIm9wdGlvbnNTdWNjZXNzU3RhdHVzIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJyZXF1ZXN0Qm9keSIsInN0b3JlSGFzaCIsImFjY2Vzc1Rva2VuIiwicmVxdWVzdFVybCIsInJlcXVlc3RIZWFkZXJzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3BvbnNlT2JqIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/bigcommerce/get_brands.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/bigcommerce/get_brands.js"));
module.exports = __webpack_exports__;

})();