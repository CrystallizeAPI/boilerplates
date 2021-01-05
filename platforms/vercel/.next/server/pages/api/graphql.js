module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/graphql.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../src/graphql/index.js":
/*!*************************************************************************************************!*\
  !*** /Users/hakonmartinholmsenkrogh/Documents/www/service-api-boilerplate/src/graphql/index.js ***!
  \*************************************************************************************************/
/*! exports provided: resolvers, typeDefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolvers */ \"../../src/graphql/resolvers.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"resolvers\", function() { return _resolvers__WEBPACK_IMPORTED_MODULE_0__[\"resolvers\"]; });\n\n/* harmony import */ var _typedefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typedefs */ \"../../src/graphql/typedefs.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"typeDefs\", function() { return _typedefs__WEBPACK_IMPORTED_MODULE_1__[\"typeDefs\"]; });\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL2hha29ubWFydGluaG9sbXNlbmtyb2doL0RvY3VtZW50cy93d3cvc2VydmljZS1hcGktYm9pbGVycGxhdGUvc3JjL2dyYXBocWwvaW5kZXguanM/M2VhZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0QjtBQUNEIiwiZmlsZSI6Ii4uLy4uL3NyYy9ncmFwaHFsL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vcmVzb2x2ZXJzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90eXBlZGVmc1wiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../src/graphql/index.js\n");

/***/ }),

/***/ "../../src/graphql/resolvers.js":
/*!*****************************************************************************************************!*\
  !*** /Users/hakonmartinholmsenkrogh/Documents/www/service-api-boilerplate/src/graphql/resolvers.js ***!
  \*****************************************************************************************************/
/*! exports provided: resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resolvers\", function() { return resolvers; });\nconst resolvers = {\n  Query: {\n    users(parent, args, context) {\n      return [{ name: \"Nextjs\" }];\n    },\n  },\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL2hha29ubWFydGluaG9sbXNlbmtyb2doL0RvY3VtZW50cy93d3cvc2VydmljZS1hcGktYm9pbGVycGxhdGUvc3JjL2dyYXBocWwvcmVzb2x2ZXJzLmpzP2U0OGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDLEtBQUs7QUFDTCxHQUFHO0FBQ0giLCJmaWxlIjoiLi4vLi4vc3JjL2dyYXBocWwvcmVzb2x2ZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcbiAgUXVlcnk6IHtcbiAgICB1c2VycyhwYXJlbnQsIGFyZ3MsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiBbeyBuYW1lOiBcIk5leHRqc1wiIH1dO1xuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../src/graphql/resolvers.js\n");

/***/ }),

/***/ "../../src/graphql/typedefs.js":
/*!****************************************************************************************************!*\
  !*** /Users/hakonmartinholmsenkrogh/Documents/www/service-api-boilerplate/src/graphql/typedefs.js ***!
  \****************************************************************************************************/
/*! exports provided: typeDefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"typeDefs\", function() { return typeDefs; });\nconst typeDefs = (gql) => gql`\n  type Query {\n    users: [User!]!\n  }\n  type User {\n    name: String\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL2hha29ubWFydGluaG9sbXNlbmtyb2doL0RvY3VtZW50cy93d3cvc2VydmljZS1hcGktYm9pbGVycGxhdGUvc3JjL2dyYXBocWwvdHlwZWRlZnMuanM/ODE2OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuLi8uLi9zcmMvZ3JhcGhxbC90eXBlZGVmcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0eXBlRGVmcyA9IChncWwpID0+IGdxbGBcbiAgdHlwZSBRdWVyeSB7XG4gICAgdXNlcnM6IFtVc2VyIV0hXG4gIH1cbiAgdHlwZSBVc2VyIHtcbiAgICBuYW1lOiBTdHJpbmdcbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../src/graphql/typedefs.js\n");

/***/ }),

/***/ "./pages/api/graphql.js":
/*!******************************!*\
  !*** ./pages/api/graphql.js ***!
  \******************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/graphql */ \"../../src/graphql/index.js\");\n\n\nconst apolloServer = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__[\"ApolloServer\"]({\n  typeDefs: Object(_src_graphql__WEBPACK_IMPORTED_MODULE_1__[\"typeDefs\"])(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__[\"gql\"]),\n  resolvers: _src_graphql__WEBPACK_IMPORTED_MODULE_1__[\"resolvers\"]\n});\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (apolloServer.createHandler({\n  path: \"/api/graphql\"\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ3JhcGhxbC5qcz83NDI2Il0sIm5hbWVzIjpbImFwb2xsb1NlcnZlciIsIkFwb2xsb1NlcnZlciIsInR5cGVEZWZzIiwiZ3FsIiwicmVzb2x2ZXJzIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsImNyZWF0ZUhhbmRsZXIiLCJwYXRoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBLE1BQU1BLFlBQVksR0FBRyxJQUFJQyxnRUFBSixDQUFpQjtBQUFFQyxVQUFRLEVBQUVBLDZEQUFRLENBQUNDLHVEQUFELENBQXBCO0FBQTJCQyxtRUFBU0E7QUFBcEMsQ0FBakIsQ0FBckI7QUFFTyxNQUFNQyxNQUFNLEdBQUc7QUFDcEJDLEtBQUcsRUFBRTtBQUNIQyxjQUFVLEVBQUU7QUFEVDtBQURlLENBQWY7QUFNUVAsMkVBQVksQ0FBQ1EsYUFBYixDQUEyQjtBQUFFQyxNQUFJLEVBQUU7QUFBUixDQUEzQixDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2dyYXBocWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9TZXJ2ZXIsIGdxbCB9IGZyb20gXCJhcG9sbG8tc2VydmVyLW1pY3JvXCI7XG5cbmltcG9ydCB7IHR5cGVEZWZzLCByZXNvbHZlcnMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3JjL2dyYXBocWxcIjtcblxuY29uc3QgYXBvbGxvU2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7IHR5cGVEZWZzOiB0eXBlRGVmcyhncWwpLCByZXNvbHZlcnMgfSk7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGFwaToge1xuICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBvbGxvU2VydmVyLmNyZWF0ZUhhbmRsZXIoeyBwYXRoOiBcIi9hcGkvZ3JhcGhxbFwiIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/graphql.js\n");

/***/ }),

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-micro\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyLW1pY3JvXCI/MjM2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhcG9sbG8tc2VydmVyLW1pY3JvLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1taWNyb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-server-micro\n");

/***/ })

/******/ });