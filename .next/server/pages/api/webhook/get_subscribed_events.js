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
exports.id = "pages/api/webhook/get_subscribed_events";
exports.ids = ["pages/api/webhook/get_subscribed_events"];
exports.modules = {

/***/ "(api)/./pages/api/webhook/get_subscribed_events.tsx":
/*!*****************************************************!*\
  !*** ./pages/api/webhook/get_subscribed_events.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ get_subscribed_events)\n/* harmony export */ });\nconst {\n  APP_BASE_URL\n} = process.env;\nasync function get_subscribed_events(req, res) {\n  const logTitle = \" create_webhook() \";\n\n  try {\n    const requestUrl = \"https://api.bigcommerce.com/stores/\" + req.body.authInfo.storeHash + \"/v3/hooks\";\n    const requestHeaders = {\n      \"X-Auth-Token\": req.body.authInfo.access_token,\n      \"Content-Type\": \"application/json\",\n      \"Accept\": \"application/json\"\n    };\n    fetch(requestUrl, {\n      method: \"GET\",\n      headers: requestHeaders\n    }).then(response => response.json()).then(responseObj => {\n      console.log(logTitle + \"responseObj\", responseObj);\n      res.json(responseObj);\n    });\n  } catch (e) {\n    console.error(\"ERROR IN\" + logTitle, e);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvd2ViaG9vay9nZXRfc3Vic2NyaWJlZF9ldmVudHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNO0VBQ0ZBO0FBREUsSUFFRkMsT0FBTyxDQUFDQyxHQUZaO0FBSWUsZUFBZUMscUJBQWYsQ0FBcUNDLEdBQXJDLEVBQTBDQyxHQUExQyxFQUErQztFQUMxRCxNQUFNQyxRQUFRLEdBQUcsb0JBQWpCOztFQUNBLElBQUk7SUFDQSxNQUFNQyxVQUFVLEdBQUcsd0NBQXNDSCxHQUFHLENBQUNJLElBQUosQ0FBU0MsUUFBVCxDQUFrQkMsU0FBeEQsR0FBa0UsV0FBckY7SUFDQSxNQUFNQyxjQUFjLEdBQUc7TUFDbkIsZ0JBQWdCUCxHQUFHLENBQUNJLElBQUosQ0FBU0MsUUFBVCxDQUFrQkcsWUFEZjtNQUVuQixnQkFBZ0Isa0JBRkc7TUFHbkIsVUFBVTtJQUhTLENBQXZCO0lBS0FDLEtBQUssQ0FBQ04sVUFBRCxFQUFhO01BQ2RPLE1BQU0sRUFBRSxLQURNO01BRWRDLE9BQU8sRUFBRUo7SUFGSyxDQUFiLENBQUwsQ0FJQ0ssSUFKRCxDQUlNQyxRQUFRLElBQUdBLFFBQVEsQ0FBQ0MsSUFBVCxFQUpqQixFQUtDRixJQUxELENBS01HLFdBQVcsSUFBSTtNQUNqQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlmLFFBQVEsR0FBQyxhQUFyQixFQUFvQ2EsV0FBcEM7TUFDQWQsR0FBRyxDQUFDYSxJQUFKLENBQVNDLFdBQVQ7SUFDSCxDQVJEO0VBU0gsQ0FoQkQsQ0FnQkUsT0FBT0csQ0FBUCxFQUFVO0lBQ1JGLE9BQU8sQ0FBQ0csS0FBUixDQUFjLGFBQWFqQixRQUEzQixFQUFxQ2dCLENBQXJDO0VBQ0g7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3NhbXBsZS1hcHAtbm9kZWpzLy4vcGFnZXMvYXBpL3dlYmhvb2svZ2V0X3N1YnNjcmliZWRfZXZlbnRzLnRzeD81YzA5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtcclxuICAgIEFQUF9CQVNFX1VSTFxyXG59ID0gcHJvY2Vzcy5lbnY7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRfc3Vic2NyaWJlZF9ldmVudHMocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IGxvZ1RpdGxlID0gXCIgY3JlYXRlX3dlYmhvb2soKSBcIjtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdFVybCA9IFwiaHR0cHM6Ly9hcGkuYmlnY29tbWVyY2UuY29tL3N0b3Jlcy9cIityZXEuYm9keS5hdXRoSW5mby5zdG9yZUhhc2grXCIvdjMvaG9va3NcIjtcclxuICAgICAgICBjb25zdCByZXF1ZXN0SGVhZGVycyA9IHtcclxuICAgICAgICAgICAgXCJYLUF1dGgtVG9rZW5cIjogcmVxLmJvZHkuYXV0aEluZm8uYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZldGNoKHJlcXVlc3RVcmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiByZXF1ZXN0SGVhZGVycyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlT2JqID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobG9nVGl0bGUrXCJyZXNwb25zZU9ialwiLCByZXNwb25zZU9iailcclxuICAgICAgICAgICAgcmVzLmpzb24ocmVzcG9uc2VPYmopXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRVJST1IgSU5cIiArIGxvZ1RpdGxlLCBlKVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIkFQUF9CQVNFX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJnZXRfc3Vic2NyaWJlZF9ldmVudHMiLCJyZXEiLCJyZXMiLCJsb2dUaXRsZSIsInJlcXVlc3RVcmwiLCJib2R5IiwiYXV0aEluZm8iLCJzdG9yZUhhc2giLCJyZXF1ZXN0SGVhZGVycyIsImFjY2Vzc190b2tlbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXNwb25zZU9iaiIsImNvbnNvbGUiLCJsb2ciLCJlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/webhook/get_subscribed_events.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/webhook/get_subscribed_events.tsx"));
module.exports = __webpack_exports__;

})();