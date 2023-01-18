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
exports.id = "pages/api/netsuite/get_products";
exports.ids = ["pages/api/netsuite/get_products"];
exports.modules = {

/***/ "(api)/./pages/api/netsuite/get_products.js":
/*!********************************************!*\
  !*** ./pages/api/netsuite/get_products.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ get_products)\n/* harmony export */ });\nasync function get_products(req, res) {\n  const logTitle = \" get_products() \";\n\n  try {\n    const requestUrl = \"https://tstdrv2683572.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=1679&deploy=1&compid=TSTDRV2683572&h=b726975cc734c4f5127a\";\n    const requestHeaders = {\n      'Content-Type': 'application/json',\n      \"Accept\": \"application/json\",\n      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'\n    };\n    fetch(requestUrl, {\n      method: \"POST\",\n      headers: requestHeaders,\n      body: JSON.stringify({\n        method: \"getItemInfoFromNs\"\n      })\n    }).then(response => response.json()).then(responseObj => {\n      // console.log(logTitle+\"responseObj\", responseObj)\n      res.json(responseObj);\n    }).catch(e => {\n      console.error(\"ERROR IN\" + logTitle, e);\n    });\n  } catch (e) {\n    console.log(\"ERROR IN\" + logTitle, e);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV0c3VpdGUvZ2V0X3Byb2R1Y3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxlQUFlQSxZQUFmLENBQTRCQyxHQUE1QixFQUFpQ0MsR0FBakMsRUFBc0M7RUFDakQsTUFBTUMsUUFBUSxHQUFHLGtCQUFqQjs7RUFDQSxJQUFJO0lBQ0EsTUFBTUMsVUFBVSxHQUFHLDRJQUFuQjtJQUNBLE1BQU1DLGNBQWMsR0FBRztNQUNuQixnQkFBZ0Isa0JBREc7TUFFbkIsVUFBVSxrQkFGUztNQUduQixjQUFjO0lBSEssQ0FBdkI7SUFLQUMsS0FBSyxDQUFDRixVQUFELEVBQWE7TUFDZEcsTUFBTSxFQUFFLE1BRE07TUFFZEMsT0FBTyxFQUFFSCxjQUZLO01BR2RJLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7UUFDakJKLE1BQU0sRUFBRTtNQURTLENBQWY7SUFIUSxDQUFiLENBQUwsQ0FPQ0ssSUFQRCxDQU9NQyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQVBsQixFQVFDRixJQVJELENBUU1HLFdBQVcsSUFBSTtNQUNqQjtNQUNBYixHQUFHLENBQUNZLElBQUosQ0FBU0MsV0FBVDtJQUNILENBWEQsRUFZQ0MsS0FaRCxDQVlPQyxDQUFDLElBQUc7TUFDUEMsT0FBTyxDQUFDQyxLQUFSLENBQWMsYUFBV2hCLFFBQXpCLEVBQW1DYyxDQUFuQztJQUNILENBZEQ7RUFlSCxDQXRCRCxDQXNCRSxPQUFNQSxDQUFOLEVBQVM7SUFDUEMsT0FBTyxDQUFDRSxHQUFSLENBQVksYUFBV2pCLFFBQXZCLEVBQWlDYyxDQUFqQztFQUNIO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1wbGUtYXBwLW5vZGVqcy8uL3BhZ2VzL2FwaS9uZXRzdWl0ZS9nZXRfcHJvZHVjdHMuanM/OWU1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRfcHJvZHVjdHMocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IGxvZ1RpdGxlID0gXCIgZ2V0X3Byb2R1Y3RzKCkgXCI7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RVcmwgPSBcImh0dHBzOi8vdHN0ZHJ2MjY4MzU3Mi5leHRmb3Jtcy5uZXRzdWl0ZS5jb20vYXBwL3NpdGUvaG9zdGluZy9zY3JpcHRsZXQubmw/c2NyaXB0PTE2NzkmZGVwbG95PTEmY29tcGlkPVRTVERSVjI2ODM1NzImaD1iNzI2OTc1Y2M3MzRjNGY1MTI3YVwiO1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RIZWFkZXJzID0ge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgJ1VzZXItQWdlbnQnOiAnTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwNy4wLjAuMCBTYWZhcmkvNTM3LjM2J1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmV0Y2gocmVxdWVzdFVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiByZXF1ZXN0SGVhZGVycyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcImdldEl0ZW1JbmZvRnJvbU5zXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZU9iaiA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGxvZ1RpdGxlK1wicmVzcG9uc2VPYmpcIiwgcmVzcG9uc2VPYmopXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHJlc3BvbnNlT2JqKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGU9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFUlJPUiBJTlwiK2xvZ1RpdGxlLCBlKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBJTlwiK2xvZ1RpdGxlLCBlKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJnZXRfcHJvZHVjdHMiLCJyZXEiLCJyZXMiLCJsb2dUaXRsZSIsInJlcXVlc3RVcmwiLCJyZXF1ZXN0SGVhZGVycyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3BvbnNlT2JqIiwiY2F0Y2giLCJlIiwiY29uc29sZSIsImVycm9yIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/netsuite/get_products.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/netsuite/get_products.js"));
module.exports = __webpack_exports__;

})();