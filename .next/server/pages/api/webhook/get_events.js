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
exports.id = "pages/api/webhook/get_events";
exports.ids = ["pages/api/webhook/get_events"];
exports.modules = {

/***/ "(api)/./pages/api/webhook/get_events.tsx":
/*!******************************************!*\
  !*** ./pages/api/webhook/get_events.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ get_events)\n/* harmony export */ });\nconst {\n  APP_BASE_URL\n} = process.env;\nasync function get_events(req, res) {\n  const logTitle = \" get_events() \";\n\n  try {\n    const requestUrl = \"https://api.bigcommerce.com/stores/\" + req.body.authInfo.storeHash + \"/v3/hooks\";\n    const requestHeaders = {\n      \"X-Auth-Token\": req.body.authInfo.access_token,\n      \"Content-Type\": \"application/json\",\n      \"Accept\": \"application/json\"\n    };\n    fetch(requestUrl, {\n      method: \"GET\",\n      headers: requestHeaders\n    }).then(response => response.json()).then(responseObj => {\n      console.log(logTitle + \"responseObj\", responseObj);\n      res.json(responseObj);\n    });\n  } catch (e) {\n    console.error(\"ERROR IN\" + logTitle, e);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvd2ViaG9vay9nZXRfZXZlbnRzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTTtFQUNGQTtBQURFLElBRUZDLE9BQU8sQ0FBQ0MsR0FGWjtBQUllLGVBQWVDLFVBQWYsQ0FBMEJDLEdBQTFCLEVBQStCQyxHQUEvQixFQUFvQztFQUMvQyxNQUFNQyxRQUFRLEdBQUcsZ0JBQWpCOztFQUNBLElBQUk7SUFDQSxNQUFNQyxVQUFVLEdBQUcsd0NBQXNDSCxHQUFHLENBQUNJLElBQUosQ0FBU0MsUUFBVCxDQUFrQkMsU0FBeEQsR0FBa0UsV0FBckY7SUFDQSxNQUFNQyxjQUFjLEdBQUc7TUFDbkIsZ0JBQWdCUCxHQUFHLENBQUNJLElBQUosQ0FBU0MsUUFBVCxDQUFrQkcsWUFEZjtNQUVuQixnQkFBZ0Isa0JBRkc7TUFHbkIsVUFBVTtJQUhTLENBQXZCO0lBS0FDLEtBQUssQ0FBQ04sVUFBRCxFQUFhO01BQ2RPLE1BQU0sRUFBRSxLQURNO01BRWRDLE9BQU8sRUFBRUo7SUFGSyxDQUFiLENBQUwsQ0FJQ0ssSUFKRCxDQUlNQyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUpsQixFQUtDRixJQUxELENBS01HLFdBQVcsSUFBSTtNQUNqQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlmLFFBQVEsR0FBQyxhQUFyQixFQUFvQ2EsV0FBcEM7TUFDQWQsR0FBRyxDQUFDYSxJQUFKLENBQVNDLFdBQVQ7SUFDSCxDQVJEO0VBU0gsQ0FoQkQsQ0FnQkUsT0FBTUcsQ0FBTixFQUFTO0lBQ1BGLE9BQU8sQ0FBQ0csS0FBUixDQUFjLGFBQWFqQixRQUEzQixFQUFxQ2dCLENBQXJDO0VBQ0g7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3NhbXBsZS1hcHAtbm9kZWpzLy4vcGFnZXMvYXBpL3dlYmhvb2svZ2V0X2V2ZW50cy50c3g/NGM2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7XHJcbiAgICBBUFBfQkFTRV9VUkxcclxufSA9IHByb2Nlc3MuZW52O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0X2V2ZW50cyhyZXEsIHJlcykge1xyXG4gICAgY29uc3QgbG9nVGl0bGUgPSBcIiBnZXRfZXZlbnRzKCkgXCI7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RVcmwgPSBcImh0dHBzOi8vYXBpLmJpZ2NvbW1lcmNlLmNvbS9zdG9yZXMvXCIrcmVxLmJvZHkuYXV0aEluZm8uc3RvcmVIYXNoK1wiL3YzL2hvb2tzXCI7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdEhlYWRlcnMgPSB7XHJcbiAgICAgICAgICAgIFwiWC1BdXRoLVRva2VuXCI6IHJlcS5ib2R5LmF1dGhJbmZvLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICBmZXRjaChyZXF1ZXN0VXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczogcmVxdWVzdEhlYWRlcnNcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZU9iaiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvZ1RpdGxlK1wicmVzcG9uc2VPYmpcIiwgcmVzcG9uc2VPYmopXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHJlc3BvbnNlT2JqKTtcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVSUk9SIElOXCIgKyBsb2dUaXRsZSwgZSk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiQVBQX0JBU0VfVVJMIiwicHJvY2VzcyIsImVudiIsImdldF9ldmVudHMiLCJyZXEiLCJyZXMiLCJsb2dUaXRsZSIsInJlcXVlc3RVcmwiLCJib2R5IiwiYXV0aEluZm8iLCJzdG9yZUhhc2giLCJyZXF1ZXN0SGVhZGVycyIsImFjY2Vzc190b2tlbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXNwb25zZU9iaiIsImNvbnNvbGUiLCJsb2ciLCJlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/webhook/get_events.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/webhook/get_events.tsx"));
module.exports = __webpack_exports__;

})();