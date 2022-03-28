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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/new-meetup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// api/new-meetup\n// POST api/new-meetup\n\n\nasync function handeler(req, res) {\n  if (req.method === \"POST\") {\n    //  Geeting data for post\n    const data = req.body; //connect to usermongodb & create databse with name \"meetup\"\n\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect(\"mongodb+srv://meet:mnXyMojHjW7ymLmt@cluster0.gyf4z.mongodb.net/meetup?retryWrites=true&w=majority\");\n    console.log(\"cli\", client); //Redirect to client database\n\n    const db = client.db(); //Redirect table(Collection) With name \"MEETUP\"\n\n    const meetupcollection = db.collection(\"meetupdata\"); //insert data to \"meetupdata\"\n\n    const result = await meetupcollection.insertOne(data);\n    console.log(result.ok); //close connnection\n\n    client.close(); //sending response\n\n    res.status(201).json({\n      msg: \"dsta inserted\"\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handeler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz84Yjg2Il0sIm5hbWVzIjpbImhhbmRlbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIiwiZGIiLCJtZWV0dXBjb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsIm9rIiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwibXNnIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZUEsUUFBZixDQUF3QkMsR0FBeEIsRUFBNkJDLEdBQTdCLEVBQWtDO0FBRTlCLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBRXZCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQWpCLENBSHVCLENBSXZCOztBQUNBLFVBQU1DLE1BQU0sR0FBRyxNQUFNQyxtREFBVyxDQUFDQyxPQUFaLENBQW9CLG1HQUFwQixDQUFyQjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CSixNQUFuQixFQU51QixDQU92Qjs7QUFDQSxVQUFNSyxFQUFFLEdBQUdMLE1BQU0sQ0FBQ0ssRUFBUCxFQUFYLENBUnVCLENBU3ZCOztBQUNBLFVBQU1DLGdCQUFnQixHQUFHRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxZQUFkLENBQXpCLENBVnVCLENBWXZCOztBQUNBLFVBQU1DLE1BQU0sR0FBRyxNQUFNRixnQkFBZ0IsQ0FBQ0csU0FBakIsQ0FBMkJYLElBQTNCLENBQXJCO0FBQ0FLLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSSxNQUFNLENBQUNFLEVBQW5CLEVBZHVCLENBZXZCOztBQUNBVixVQUFNLENBQUNXLEtBQVAsR0FoQnVCLENBa0J2Qjs7QUFDQWYsT0FBRyxDQUFDZ0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFNBQUcsRUFBRTtBQUFQLEtBQXJCO0FBRUg7QUFDSjs7QUFDY3BCLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcGkvbmV3LW1lZXR1cFxuLy8gUE9TVCBhcGkvbmV3LW1lZXR1cFxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kZWxlcihyZXEsIHJlcykge1xuXG4gICAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG5cbiAgICAgICAgLy8gIEdlZXRpbmcgZGF0YSBmb3IgcG9zdFxuICAgICAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XG4gICAgICAgIC8vY29ubmVjdCB0byB1c2VybW9uZ29kYiAmIGNyZWF0ZSBkYXRhYnNlIHdpdGggbmFtZSBcIm1lZXR1cFwiXG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXCJtb25nb2RiK3NydjovL21lZXQ6bW5YeU1vakhqVzd5bUxtdEBjbHVzdGVyMC5neWY0ei5tb25nb2RiLm5ldC9tZWV0dXA/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpXCIsIGNsaWVudCk7XG4gICAgICAgIC8vUmVkaXJlY3QgdG8gY2xpZW50IGRhdGFiYXNlXG4gICAgICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG4gICAgICAgIC8vUmVkaXJlY3QgdGFibGUoQ29sbGVjdGlvbikgV2l0aCBuYW1lIFwiTUVFVFVQXCJcbiAgICAgICAgY29uc3QgbWVldHVwY29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBkYXRhXCIpO1xuXG4gICAgICAgIC8vaW5zZXJ0IGRhdGEgdG8gXCJtZWV0dXBkYXRhXCJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwY29sbGVjdGlvbi5pbnNlcnRPbmUoZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5vayk7XG4gICAgICAgIC8vY2xvc2UgY29ubm5lY3Rpb25cbiAgICAgICAgY2xpZW50LmNsb3NlKCk7XG5cbiAgICAgICAgLy9zZW5kaW5nIHJlc3BvbnNlXG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbXNnOiBcImRzdGEgaW5zZXJ0ZWRcIiB9KTtcblxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGhhbmRlbGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/new-meetup.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });