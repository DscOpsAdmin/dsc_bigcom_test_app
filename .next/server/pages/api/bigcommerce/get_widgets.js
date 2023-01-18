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
exports.id = "pages/api/bigcommerce/get_widgets";
exports.ids = ["pages/api/bigcommerce/get_widgets"];
exports.modules = {

/***/ "nextjs-cors":
/*!******************************!*\
  !*** external "nextjs-cors" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("nextjs-cors");

/***/ }),

/***/ "(api)/./pages/api/bigcommerce/get_widgets.js":
/*!**********************************************!*\
  !*** ./pages/api/bigcommerce/get_widgets.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ get_widgets)\n/* harmony export */ });\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nextjs-cors */ \"nextjs-cors\");\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nextjs_cors__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function get_widgets(req, res) {\n  const logTitle = \" get_widgets() \";\n\n  try {\n    await nextjs_cors__WEBPACK_IMPORTED_MODULE_0___default()(req, res, {\n      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],\n      origin: '*',\n      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204\n\n    });\n    console.log(logTitle, \"EXECUTED!\");\n    console.log(logTitle + \"req.body\", req.body);\n    const requestBody = req.body;\n    console.log(logTitle + \"requestBody\", requestBody);\n\n    if (requestBody.storeHash && requestBody.access_token) {\n      const requestUrl = \"https://api.bigcommerce.com/stores/\" + requestBody.storeHash + \"/v3/content/widgets\";\n      const requestHeaders = {\n        \"X-Auth-Token\": requestBody.access_token,\n        \"Content-Type\": \"application/json\",\n        \"Accept\": \"application/json\"\n      };\n      fetch(requestUrl, {\n        method: \"GET\",\n        headers: requestHeaders\n      }).then(response => response.json()).then(responseObj => {\n        res.json(responseObj);\n      });\n    }\n  } catch (e) {\n    console.log(\"ERROR IN\" + logTitle, e);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmlnY29tbWVyY2UvZ2V0X3dpZGdldHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDZSxlQUFlQyxXQUFmLENBQTJCQyxHQUEzQixFQUFnQ0MsR0FBaEMsRUFBcUM7RUFDaEQsTUFBTUMsUUFBUSxHQUFHLGlCQUFqQjs7RUFDQSxJQUFJO0lBQ0EsTUFBTUosa0RBQVEsQ0FBQ0UsR0FBRCxFQUFNQyxHQUFOLEVBQVc7TUFDckJFLE9BQU8sRUFBRSxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLEtBQWhCLEVBQXVCLE9BQXZCLEVBQWdDLE1BQWhDLEVBQXdDLFFBQXhDLENBRFk7TUFFckJDLE1BQU0sRUFBRSxHQUZhO01BR3JCQyxvQkFBb0IsRUFBRSxHQUhELENBR007O0lBSE4sQ0FBWCxDQUFkO0lBS0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxRQUFaLEVBQXNCLFdBQXRCO0lBQ0FJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxRQUFRLEdBQUUsVUFBdEIsRUFBa0NGLEdBQUcsQ0FBQ1EsSUFBdEM7SUFDQSxNQUFNQyxXQUFXLEdBQUdULEdBQUcsQ0FBQ1EsSUFBeEI7SUFDQUYsT0FBTyxDQUFDQyxHQUFSLENBQVlMLFFBQVEsR0FBQyxhQUFyQixFQUFvQ08sV0FBcEM7O0lBQ0EsSUFBSUEsV0FBVyxDQUFDQyxTQUFaLElBQXlCRCxXQUFXLENBQUNFLFlBQXpDLEVBQXVEO01BQ25ELE1BQU1DLFVBQVUsR0FBRyx3Q0FBc0NILFdBQVcsQ0FBQ0MsU0FBbEQsR0FBNEQscUJBQS9FO01BQ0EsTUFBTUcsY0FBYyxHQUFHO1FBQ25CLGdCQUFnQkosV0FBVyxDQUFDRSxZQURUO1FBRW5CLGdCQUFnQixrQkFGRztRQUduQixVQUFVO01BSFMsQ0FBdkI7TUFLQUcsS0FBSyxDQUFDRixVQUFELEVBQWE7UUFDZEcsTUFBTSxFQUFFLEtBRE07UUFFZEMsT0FBTyxFQUFFSDtNQUZLLENBQWIsQ0FBTCxDQUlDSSxJQUpELENBSU1DLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBSmxCLEVBS0NGLElBTEQsQ0FLTUcsV0FBVyxJQUFJO1FBQ2pCbkIsR0FBRyxDQUFDa0IsSUFBSixDQUFTQyxXQUFUO01BQ0gsQ0FQRDtJQVNIO0VBQ0osQ0EzQkQsQ0EyQkUsT0FBTUMsQ0FBTixFQUFTO0lBQ1BmLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVdMLFFBQXZCLEVBQWlDbUIsQ0FBakM7RUFDSDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FtcGxlLWFwcC1ub2RlanMvLi9wYWdlcy9hcGkvYmlnY29tbWVyY2UvZ2V0X3dpZGdldHMuanM/NDJmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dENvcnMgZnJvbSBcIm5leHRqcy1jb3JzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldF93aWRnZXRzKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCBsb2dUaXRsZSA9IFwiIGdldF93aWRnZXRzKCkgXCI7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IE5leHRDb3JzKHJlcSwgcmVzLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZHM6IFsnR0VUJywgJ0hFQUQnLCAnUFVUJywgJ1BBVENIJywgJ1BPU1QnLCAnREVMRVRFJ10sXHJcbiAgICAgICAgICAgIG9yaWdpbjogJyonLFxyXG4gICAgICAgICAgICBvcHRpb25zU3VjY2Vzc1N0YXR1czogMjAwLCAvLyBzb21lIGxlZ2FjeSBicm93c2VycyAoSUUxMSwgdmFyaW91cyBTbWFydFRWcykgY2hva2Ugb24gMjA0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobG9nVGl0bGUsIFwiRVhFQ1VURUQhXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxvZ1RpdGxlKyBcInJlcS5ib2R5XCIsIHJlcS5ib2R5KTtcclxuICAgICAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxvZ1RpdGxlK1wicmVxdWVzdEJvZHlcIiwgcmVxdWVzdEJvZHkpXHJcbiAgICAgICAgaWYgKHJlcXVlc3RCb2R5LnN0b3JlSGFzaCAmJiByZXF1ZXN0Qm9keS5hY2Nlc3NfdG9rZW4pIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdFVybCA9IFwiaHR0cHM6Ly9hcGkuYmlnY29tbWVyY2UuY29tL3N0b3Jlcy9cIityZXF1ZXN0Qm9keS5zdG9yZUhhc2grXCIvdjMvY29udGVudC93aWRnZXRzXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RIZWFkZXJzID0ge1xyXG4gICAgICAgICAgICAgICAgXCJYLUF1dGgtVG9rZW5cIjogcmVxdWVzdEJvZHkuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZmV0Y2gocmVxdWVzdFVybCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogcmVxdWVzdEhlYWRlcnNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZU9iaiA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXMuanNvbihyZXNwb25zZU9iailcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBJTlwiK2xvZ1RpdGxlLCBlKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJOZXh0Q29ycyIsImdldF93aWRnZXRzIiwicmVxIiwicmVzIiwibG9nVGl0bGUiLCJtZXRob2RzIiwib3JpZ2luIiwib3B0aW9uc1N1Y2Nlc3NTdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsInJlcXVlc3RCb2R5Iiwic3RvcmVIYXNoIiwiYWNjZXNzX3Rva2VuIiwicmVxdWVzdFVybCIsInJlcXVlc3RIZWFkZXJzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3BvbnNlT2JqIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/bigcommerce/get_widgets.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/bigcommerce/get_widgets.js"));
module.exports = __webpack_exports__;

})();