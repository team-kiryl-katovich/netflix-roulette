/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/src/index.tsx":
/*!******************************!*\
  !*** ./server/src/index.tsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _webpack_webpack_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../webpack/webpack.config */ \"./webpack/webpack.config.js\");\n/* harmony import */ var _webpack_webpack_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_webpack_webpack_config__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _src_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/components */ \"./src/components/index.ts\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @store/index */ \"./src/store/index.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store */ \"./server/src/store/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar SERVER_PORT = 3000;\r\nvar app = express__WEBPACK_IMPORTED_MODULE_6___default()();\r\nif (true) {\r\n    var compiler = webpack__WEBPACK_IMPORTED_MODULE_2__(_webpack_webpack_config__WEBPACK_IMPORTED_MODULE_5__());\r\n    app.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3__(compiler, {\r\n        publicPath: '/',\r\n        index: false,\r\n    }));\r\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4__(compiler));\r\n}\r\nelse {}\r\napp.get('/*', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var store, app, indexFile;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                store = new _store_index__WEBPACK_IMPORTED_MODULE_10__[\"default\"]({}, req.url);\r\n                return [4 /*yield*/, Object(_store__WEBPACK_IMPORTED_MODULE_11__[\"executeAsyncActions\"])(store, req)];\r\n            case 1:\r\n                _a.sent();\r\n                app = react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"](react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_src_components__WEBPACK_IMPORTED_MODULE_9__[\"App\"], { store: store.instance, history: store.history }));\r\n                indexFile = path__WEBPACK_IMPORTED_MODULE_7___default.a.resolve('./dist/base-index.html');\r\n                fs__WEBPACK_IMPORTED_MODULE_8___default.a.readFile(indexFile, 'utf8', function (err, data) { return __awaiter(void 0, void 0, void 0, function () {\r\n                    var html;\r\n                    return __generator(this, function (_a) {\r\n                        if (err) {\r\n                            console.error('Something went wrong:', err);\r\n                            return [2 /*return*/, res.status(500).send('Oops, better luck next time!')];\r\n                        }\r\n                        html = data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\" + app + \"</div>\");\r\n                        html = html.replace('<script id=\"preloaded-state\"></script>', \"<script id=\\\"preloaded-state\\\">window.__PRELOADED_STATE__ = \" + JSON.stringify(store.instance.getState()).replace(/</g, '\\\\u003c') + \"</script>\");\r\n                        return [2 /*return*/, res.send(html)];\r\n                    });\r\n                }); });\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\napp.listen(SERVER_PORT, function () {\r\n    console.log(\"Server is running: http://localhost:\" + SERVER_PORT);\r\n});\r\n\n\n//# sourceURL=webpack:///./server/src/index.tsx?");

/***/ }),

/***/ "./server/src/store/index.ts":
/*!***********************************!*\
  !*** ./server/src/store/index.ts ***!
  \***********************************/
/*! exports provided: executeAsyncActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"executeAsyncActions\", function() { return executeAsyncActions; });\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_movies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/movies */ \"./src/store/movies/index.ts\");\n/* harmony import */ var _store_movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/movie */ \"./src/store/movie/index.ts\");\n/* harmony import */ var _store_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/filter */ \"./src/store/filter/index.ts\");\n/* harmony import */ var _common_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @common/routes */ \"./src/common/routes/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\n\r\n\r\n\r\nvar pageSize = 9;\r\nvar executeAsyncActions = function (store, req) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, searchMoviesAction(store, req)];\r\n            case 1:\r\n                _a.sent();\r\n                return [4 /*yield*/, selectMovieAction(store, req)];\r\n            case 2:\r\n                _a.sent();\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nvar searchMoviesAction = function (store, req) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var match;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                match = Object(react_router__WEBPACK_IMPORTED_MODULE_0__[\"matchPath\"])(req.path, {\r\n                    path: _common_routes__WEBPACK_IMPORTED_MODULE_4__[\"ROUTES\"].SEARCH + \"/:\" + _common_routes__WEBPACK_IMPORTED_MODULE_4__[\"ROUTES_PARAMS\"].QUERY,\r\n                    exact: true,\r\n                    strict: true,\r\n                });\r\n                if (match && match.isExact) {\r\n                    store.dispatch(_store_filter__WEBPACK_IMPORTED_MODULE_3__[\"actions\"].setFilter({\r\n                        search: decodeURIComponent(match.params[_common_routes__WEBPACK_IMPORTED_MODULE_4__[\"ROUTES_PARAMS\"].QUERY]),\r\n                    }));\r\n                }\r\n                return [4 /*yield*/, store.thunkDispatch(_store_movies__WEBPACK_IMPORTED_MODULE_1__[\"thunkActions\"].searchMovies({ limit: pageSize }))];\r\n            case 1: return [2 /*return*/, _a.sent()];\r\n        }\r\n    });\r\n}); };\r\nvar selectMovieAction = function (store, req) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var match, id;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                match = Object(react_router__WEBPACK_IMPORTED_MODULE_0__[\"matchPath\"])(req.path, {\r\n                    path: _common_routes__WEBPACK_IMPORTED_MODULE_4__[\"ROUTES\"].MOVIE + \"/:\" + _common_routes__WEBPACK_IMPORTED_MODULE_4__[\"ROUTES_PARAMS\"].ID,\r\n                    exact: true,\r\n                    strict: true,\r\n                });\r\n                if (!(match && match.isExact)) return [3 /*break*/, 2];\r\n                id = Number(match.params[_common_routes__WEBPACK_IMPORTED_MODULE_4__[\"ROUTES_PARAMS\"].ID]);\r\n                return [4 /*yield*/, store.thunkDispatch(_store_movie__WEBPACK_IMPORTED_MODULE_2__[\"thunkActions\"].selectMovie(id))];\r\n            case 1: return [2 /*return*/, _a.sent()];\r\n            case 2: return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\n\n\n//# sourceURL=webpack:///./server/src/store/index.ts?");

/***/ }),

/***/ "./src/common/api/constants.ts":
/*!*************************************!*\
  !*** ./src/common/api/constants.ts ***!
  \*************************************/
/*! exports provided: MOVIE_ENDPOINT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MOVIE_ENDPOINT\", function() { return MOVIE_ENDPOINT; });\nvar MOVIE_ENDPOINT = {\r\n    BASE_ENDPOINT: 'https://reactjs-cdp.herokuapp.com/',\r\n    GET_MOVIES: 'movies'\r\n};\r\n\n\n//# sourceURL=webpack:///./src/common/api/constants.ts?");

/***/ }),

/***/ "./src/common/api/index.ts":
/*!*********************************!*\
  !*** ./src/common/api/index.ts ***!
  \*********************************/
/*! exports provided: getMovies, getMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMovies\", function() { return getMovies; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMovie\", function() { return getMovie; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/common/api/constants.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/common/api/utils.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\nvar getMovies = function (offset, filter) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var _a, data, error;\r\n    return __generator(this, function (_b) {\r\n        switch (_b.label) {\r\n            case 0: return [4 /*yield*/, Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"callApiWithGet\"])(_constants__WEBPACK_IMPORTED_MODULE_0__[\"MOVIE_ENDPOINT\"].GET_MOVIES, __assign(__assign({}, offset), filter))];\r\n            case 1:\r\n                _a = _b.sent(), data = _a.data, error = _a.error;\r\n                return [2 /*return*/, __assign(__assign({}, data), { error: error })];\r\n        }\r\n    });\r\n}); };\r\nvar getMovie = function (id) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"callApiWithGet\"])(_constants__WEBPACK_IMPORTED_MODULE_0__[\"MOVIE_ENDPOINT\"].GET_MOVIES + \"/\" + id)];\r\n    });\r\n}); };\r\n\n\n//# sourceURL=webpack:///./src/common/api/index.ts?");

/***/ }),

/***/ "./src/common/api/utils.ts":
/*!*********************************!*\
  !*** ./src/common/api/utils.ts ***!
  \*********************************/
/*! exports provided: callApiWithGet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"callApiWithGet\", function() { return callApiWithGet; });\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/common/api/constants.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\nvar getEndpoint = function (endpointKey, params) {\r\n    var endpoint = \"\" + _constants__WEBPACK_IMPORTED_MODULE_1__[\"MOVIE_ENDPOINT\"].BASE_ENDPOINT + endpointKey;\r\n    return !!params ? endpoint + \"?\" + params : endpoint;\r\n};\r\nvar queryParams = function (params) {\r\n    if (!params) {\r\n        return '';\r\n    }\r\n    return Object.keys(params)\r\n        .map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]); })\r\n        .join('&');\r\n};\r\nvar callApiWithGet = function (endpointKey, params) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var response, data, e_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 3, , 4]);\r\n                return [4 /*yield*/, isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"\" + getEndpoint(endpointKey, queryParams(params)))];\r\n            case 1:\r\n                response = _a.sent();\r\n                return [4 /*yield*/, response.json()];\r\n            case 2:\r\n                data = _a.sent();\r\n                return [2 /*return*/, { data: data }];\r\n            case 3:\r\n                e_1 = _a.sent();\r\n                return [2 /*return*/, { error: e_1 }];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\n\n\n//# sourceURL=webpack:///./src/common/api/utils.ts?");

/***/ }),

/***/ "./src/common/components/Button/index.tsx":
/*!************************************************!*\
  !*** ./src/common/components/Button/index.tsx ***!
  \************************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/common/components/Button/styles.scss\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\nvar Button = function (_a) {\r\n    var _b;\r\n    var title = _a.title, onClick = _a.onClick, className = _a.className, type = _a.type;\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"button\", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('netflix-button', \"netflix-button--\" + (type || 'primary'), (_b = {},\r\n            _b[className] = !!className,\r\n            _b)), type: \"button\", onClick: onClick }, title));\r\n};\r\n\n\n//# sourceURL=webpack:///./src/common/components/Button/index.tsx?");

/***/ }),

/***/ "./src/common/components/Button/styles.scss":
/*!**************************************************!*\
  !*** ./src/common/components/Button/styles.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/common/components/Button/styles.scss?");

/***/ }),

/***/ "./src/common/components/ErrorBoundary/index.tsx":
/*!*******************************************************!*\
  !*** ./src/common/components/ErrorBoundary/index.tsx ***!
  \*******************************************************/
/*! exports provided: ErrorBoundary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorBoundary\", function() { return ErrorBoundary; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/common/components/ErrorBoundary/styles.scss\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_1__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\nvar ErrorBoundary = /** @class */ (function (_super) {\r\n    __extends(ErrorBoundary, _super);\r\n    function ErrorBoundary(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.state = {\r\n            error: null,\r\n            errorInfo: null\r\n        };\r\n        return _this;\r\n    }\r\n    ErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {\r\n        this.setState({\r\n            error: error,\r\n            errorInfo: errorInfo\r\n        }, this.reset);\r\n    };\r\n    ErrorBoundary.prototype.render = function () {\r\n        var children = this.props.children;\r\n        var _a = this.state, error = _a.error, errorInfo = _a.errorInfo;\r\n        return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null,\r\n            children,\r\n            error && (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"error-message\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"error-message__title\" }, error.toString()),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"error-message__description\" }, errorInfo.componentStack)))));\r\n    };\r\n    ErrorBoundary.prototype.reset = function () {\r\n        var _this = this;\r\n        setTimeout(function () {\r\n            return _this.setState({\r\n                error: null,\r\n                errorInfo: null\r\n            });\r\n        }, 3000);\r\n    };\r\n    return ErrorBoundary;\r\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./src/common/components/ErrorBoundary/index.tsx?");

/***/ }),

/***/ "./src/common/components/ErrorBoundary/styles.scss":
/*!*********************************************************!*\
  !*** ./src/common/components/ErrorBoundary/styles.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/common/components/ErrorBoundary/styles.scss?");

/***/ }),

/***/ "./src/common/components/Input/index.tsx":
/*!***********************************************!*\
  !*** ./src/common/components/Input/index.tsx ***!
  \***********************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Input\", function() { return Input; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/common/components/Input/styles.scss\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\nvar Input = function (_a) {\r\n    var _b;\r\n    var placeholder = _a.placeholder, className = _a.className, onChange = _a.onChange, value = _a.value;\r\n    var onChangeCallback = react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"](function (e) {\r\n        onChange(e.currentTarget.value);\r\n    }, [onChange]);\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"input\", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('netflix-input', (_b = {},\r\n            _b[className] = !!className,\r\n            _b)), type: \"text\", placeholder: placeholder, onChange: onChangeCallback, value: value }));\r\n};\r\n\n\n//# sourceURL=webpack:///./src/common/components/Input/index.tsx?");

/***/ }),

/***/ "./src/common/components/Input/styles.scss":
/*!*************************************************!*\
  !*** ./src/common/components/Input/styles.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/common/components/Input/styles.scss?");

/***/ }),

/***/ "./src/common/components/Label/index.tsx":
/*!***********************************************!*\
  !*** ./src/common/components/Label/index.tsx ***!
  \***********************************************/
/*! exports provided: Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Label\", function() { return Label; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/common/components/Label/styles.scss\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\nvar Label = function (_a) {\r\n    var _b;\r\n    var text = _a.text, className = _a.className, uppercase = _a.uppercase;\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('netflix-label', (_b = {},\r\n            _b[className] = !!className,\r\n            _b['netflix-label--uppercase'] = uppercase,\r\n            _b)) }, text));\r\n};\r\n\n\n//# sourceURL=webpack:///./src/common/components/Label/index.tsx?");

/***/ }),

/***/ "./src/common/components/Label/styles.scss":
/*!*************************************************!*\
  !*** ./src/common/components/Label/styles.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/common/components/Label/styles.scss?");

/***/ }),

/***/ "./src/common/components/Loader/index.tsx":
/*!************************************************!*\
  !*** ./src/common/components/Loader/index.tsx ***!
  \************************************************/
/*! exports provided: Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Loader\", function() { return Loader; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/common/components/Loader/styles.scss\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nvar Loader = function (_a) {\r\n    var loading = _a.loading;\r\n    return loading && (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"loader-container\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"loader-container__loader\" }, \"Loading...\")));\r\n};\r\n\n\n//# sourceURL=webpack:///./src/common/components/Loader/index.tsx?");

/***/ }),

/***/ "./src/common/components/Loader/styles.scss":
/*!**************************************************!*\
  !*** ./src/common/components/Loader/styles.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/common/components/Loader/styles.scss?");

/***/ }),

/***/ "./src/common/components/Logo/index.tsx":
/*!**********************************************!*\
  !*** ./src/common/components/Logo/index.tsx ***!
  \**********************************************/
/*! exports provided: Logo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Logo\", function() { return Logo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/common/components/Logo/styles.scss\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nvar Logo = function () { return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"logo\" },\r\n    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", { className: \"logo__bold\" }, \"netflix\"),\r\n    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", { className: \"logo__normal\" }, \"roulette\"))); };\r\n\n\n//# sourceURL=webpack:///./src/common/components/Logo/index.tsx?");

/***/ }),

/***/ "./src/common/components/Logo/styles.scss":
/*!************************************************!*\
  !*** ./src/common/components/Logo/styles.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/common/components/Logo/styles.scss?");

/***/ }),

/***/ "./src/common/components/ScaleImage/index.tsx":
/*!****************************************************!*\
  !*** ./src/common/components/ScaleImage/index.tsx ***!
  \****************************************************/
/*! exports provided: ScaleImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScaleImage\", function() { return ScaleImage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/common/components/ScaleImage/styles.scss\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nvar ScaleImage = function (_a) {\r\n    var src = _a.src, width = _a.width, ratio = _a.ratio;\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"scale-image\", style: {\r\n            width: width || '100%',\r\n            paddingTop: (ratio || 100) + \"%\"\r\n        } },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", { src: src, className: \"scale-image__image\", alt: \"\" })));\r\n};\r\n\n\n//# sourceURL=webpack:///./src/common/components/ScaleImage/index.tsx?");

/***/ }),

/***/ "./src/common/components/ScaleImage/styles.scss":
/*!******************************************************!*\
  !*** ./src/common/components/ScaleImage/styles.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/common/components/ScaleImage/styles.scss?");

/***/ }),

/***/ "./src/common/components/SelectOptionButtons/index.tsx":
/*!*************************************************************!*\
  !*** ./src/common/components/SelectOptionButtons/index.tsx ***!
  \*************************************************************/
/*! exports provided: SelectOptionButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SelectOptionButtons\", function() { return SelectOptionButtons; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ \"./src/common/components/index.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/common/components/SelectOptionButtons/styles.scss\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\nvar SelectOptionButtons = function (_a) {\r\n    var title = _a.title, options = _a.options, onChange = _a.onChange, value = _a.value;\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"select-option-buttons\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](___WEBPACK_IMPORTED_MODULE_1__[\"Label\"], { className: \"select-option-buttons__title\", text: title, uppercase: true }),\r\n        options.map(function (_a) {\r\n            var item = _a.item, clientId = _a.clientId;\r\n            var isSelected = item.value === value;\r\n            return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](___WEBPACK_IMPORTED_MODULE_1__[\"Button\"], { className: \"select-option-buttons__button\", title: item.title, type: isSelected ? 'primary' : 'secondary', onClick: function () {\r\n                    if (!isSelected) {\r\n                        onChange(item.value);\r\n                    }\r\n                }, key: clientId }));\r\n        })));\r\n};\r\n\n\n//# sourceURL=webpack:///./src/common/components/SelectOptionButtons/index.tsx?");

/***/ }),

/***/ "./src/common/components/SelectOptionButtons/styles.scss":
/*!***************************************************************!*\
  !*** ./src/common/components/SelectOptionButtons/styles.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/common/components/SelectOptionButtons/styles.scss?");

/***/ }),

/***/ "./src/common/components/index.ts":
/*!****************************************!*\
  !*** ./src/common/components/index.ts ***!
  \****************************************/
/*! exports provided: Logo, ScaleImage, Button, Label, Input, ErrorBoundary, SelectOptionButtons, Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo */ \"./src/common/components/Logo/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Logo\", function() { return _Logo__WEBPACK_IMPORTED_MODULE_0__[\"Logo\"]; });\n\n/* harmony import */ var _ScaleImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScaleImage */ \"./src/common/components/ScaleImage/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ScaleImage\", function() { return _ScaleImage__WEBPACK_IMPORTED_MODULE_1__[\"ScaleImage\"]; });\n\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"./src/common/components/Button/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return _Button__WEBPACK_IMPORTED_MODULE_2__[\"Button\"]; });\n\n/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Label */ \"./src/common/components/Label/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Label\", function() { return _Label__WEBPACK_IMPORTED_MODULE_3__[\"Label\"]; });\n\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Input */ \"./src/common/components/Input/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Input\", function() { return _Input__WEBPACK_IMPORTED_MODULE_4__[\"Input\"]; });\n\n/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorBoundary */ \"./src/common/components/ErrorBoundary/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ErrorBoundary\", function() { return _ErrorBoundary__WEBPACK_IMPORTED_MODULE_5__[\"ErrorBoundary\"]; });\n\n/* harmony import */ var _SelectOptionButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SelectOptionButtons */ \"./src/common/components/SelectOptionButtons/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SelectOptionButtons\", function() { return _SelectOptionButtons__WEBPACK_IMPORTED_MODULE_6__[\"SelectOptionButtons\"]; });\n\n/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Loader */ \"./src/common/components/Loader/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Loader\", function() { return _Loader__WEBPACK_IMPORTED_MODULE_7__[\"Loader\"]; });\n\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/common/components/index.ts?");

/***/ }),

/***/ "./src/common/routes/constants.ts":
/*!****************************************!*\
  !*** ./src/common/routes/constants.ts ***!
  \****************************************/
/*! exports provided: ROUTES, ROUTES_PARAMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ROUTES\", function() { return ROUTES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ROUTES_PARAMS\", function() { return ROUTES_PARAMS; });\nvar ROUTES = {\r\n    HOME: '/',\r\n    MOVIE: '/movie',\r\n    PAGE_404: '/404',\r\n    SEARCH: '/search'\r\n};\r\nvar ROUTES_PARAMS = {\r\n    ID: 'id',\r\n    QUERY: 'query'\r\n};\r\n\n\n//# sourceURL=webpack:///./src/common/routes/constants.ts?");

/***/ }),

/***/ "./src/common/routes/index.ts":
/*!************************************!*\
  !*** ./src/common/routes/index.ts ***!
  \************************************/
/*! exports provided: ROUTES, ROUTES_PARAMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/common/routes/constants.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ROUTES\", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__[\"ROUTES\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ROUTES_PARAMS\", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__[\"ROUTES_PARAMS\"]; });\n\n\r\n\n\n//# sourceURL=webpack:///./src/common/routes/index.ts?");

/***/ }),

/***/ "./src/common/utils/index.ts":
/*!***********************************!*\
  !*** ./src/common/utils/index.ts ***!
  \***********************************/
/*! exports provided: uniqueId, uniqueIdItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uniqueId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uniqueId */ \"./src/common/utils/uniqueId.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"uniqueId\", function() { return _uniqueId__WEBPACK_IMPORTED_MODULE_0__[\"uniqueId\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"uniqueIdItems\", function() { return _uniqueId__WEBPACK_IMPORTED_MODULE_0__[\"uniqueIdItems\"]; });\n\n\r\n\n\n//# sourceURL=webpack:///./src/common/utils/index.ts?");

/***/ }),

/***/ "./src/common/utils/uniqueId.ts":
/*!**************************************!*\
  !*** ./src/common/utils/uniqueId.ts ***!
  \**************************************/
/*! exports provided: uniqueId, uniqueIdItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uniqueId\", function() { return uniqueId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uniqueIdItems\", function() { return uniqueIdItems; });\nvar idCounter = 0;\r\nvar uniqueId = function (prefix) {\r\n    var id = idCounter++;\r\n    return prefix ? prefix + \"-\" + id : id.toString();\r\n};\r\nvar uniqueIdItems = function (items, prefix) {\r\n    if (!items) {\r\n        return [];\r\n    }\r\n    var id = uniqueId(prefix);\r\n    return items.map(function (item, index) { return ({\r\n        clientId: id + \"-\" + index,\r\n        item: item\r\n    }); });\r\n};\r\n\n\n//# sourceURL=webpack:///./src/common/utils/uniqueId.ts?");

/***/ }),

/***/ "./src/components/App/index.tsx":
/*!**************************************!*\
  !*** ./src/components/App/index.tsx ***!
  \**************************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ \"connected-react-router\");\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @common/components */ \"./src/common/components/index.ts\");\n/* harmony import */ var _common_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/routes */ \"./src/common/routes/index.ts\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ */ \"./src/components/index.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ \"./src/components/App/styles.scss\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_7__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar App = function (_a) {\r\n    var store = _a.store, history = _a.history;\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"netflix-roulette\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_redux__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"], { store: store },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](connected_react_router__WEBPACK_IMPORTED_MODULE_2__[\"ConnectedRouter\"], { history: history },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_4__[\"ErrorBoundary\"], null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](___WEBPACK_IMPORTED_MODULE_6__[\"Header\"], null,\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Switch\"], null,\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], { exact: true, path: _common_routes__WEBPACK_IMPORTED_MODULE_5__[\"ROUTES\"].HOME },\r\n                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](___WEBPACK_IMPORTED_MODULE_6__[\"Search\"], null)),\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], { path: _common_routes__WEBPACK_IMPORTED_MODULE_5__[\"ROUTES\"].SEARCH + \"/:\" + _common_routes__WEBPACK_IMPORTED_MODULE_5__[\"ROUTES_PARAMS\"].QUERY },\r\n                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](___WEBPACK_IMPORTED_MODULE_6__[\"Search\"], null)),\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], { path: _common_routes__WEBPACK_IMPORTED_MODULE_5__[\"ROUTES\"].MOVIE + \"/:\" + _common_routes__WEBPACK_IMPORTED_MODULE_5__[\"ROUTES_PARAMS\"].ID },\r\n                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](___WEBPACK_IMPORTED_MODULE_6__[\"MovieInfo\"], null)),\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], { path: _common_routes__WEBPACK_IMPORTED_MODULE_5__[\"ROUTES\"].PAGE_404 },\r\n                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](___WEBPACK_IMPORTED_MODULE_6__[\"NotFound\"], null)),\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Redirect\"], { from: \"*\", to: _common_routes__WEBPACK_IMPORTED_MODULE_5__[\"ROUTES\"].PAGE_404 }))),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](___WEBPACK_IMPORTED_MODULE_6__[\"InfoBar\"], null),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](___WEBPACK_IMPORTED_MODULE_6__[\"Content\"], null),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](___WEBPACK_IMPORTED_MODULE_6__[\"Footer\"], null))))));\r\n};\r\n\n\n//# sourceURL=webpack:///./src/components/App/index.tsx?");

/***/ }),

/***/ "./src/components/App/styles.scss":
/*!****************************************!*\
  !*** ./src/components/App/styles.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/components/App/styles.scss?");

/***/ }),

/***/ "./src/components/Content/components/MovieCard/index.tsx":
/*!***************************************************************!*\
  !*** ./src/components/Content/components/MovieCard/index.tsx ***!
  \***************************************************************/
/*! exports provided: MovieCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MovieCard\", function() { return MovieCard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/components */ \"./src/common/components/index.ts\");\n/* harmony import */ var _common_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/routes */ \"./src/common/routes/index.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./src/components/Content/components/MovieCard/styles.scss\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\nvar MovieCard = function (_a) {\r\n    var id = _a.id, title = _a.title, gengre = _a.gengre, year = _a.year, imageUrl = _a.imageUrl;\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"movie-card\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], { to: _common_routes__WEBPACK_IMPORTED_MODULE_3__[\"ROUTES\"].MOVIE + \"/\" + id },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_2__[\"ScaleImage\"], { src: imageUrl, ratio: 140 }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"movie-card__description\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"movie-card-title\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_2__[\"Label\"], { className: \"movie-card-title__title\", text: title }),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_2__[\"Label\"], { className: \"movie-card-title__gengre\", text: gengre })),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"movie-card-year\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_2__[\"Label\"], { className: \"movie-card-year__label\", text: year.toString() }))))));\r\n};\r\n\n\n//# sourceURL=webpack:///./src/components/Content/components/MovieCard/index.tsx?");

/***/ }),

/***/ "./src/components/Content/components/MovieCard/styles.scss":
/*!*****************************************************************!*\
  !*** ./src/components/Content/components/MovieCard/styles.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/components/Content/components/MovieCard/styles.scss?");

/***/ }),

/***/ "./src/components/Content/components/MovieContainer/index.tsx":
/*!********************************************************************!*\
  !*** ./src/components/Content/components/MovieContainer/index.tsx ***!
  \********************************************************************/
/*! exports provided: MovieContainerComponent, MovieContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MovieContainerComponent\", function() { return MovieContainerComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MovieContainer\", function() { return MovieContainer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/components */ \"./src/common/components/index.ts\");\n/* harmony import */ var _enhancers_withMovies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @enhancers/withMovies */ \"./src/enhancers/withMovies/index.ts\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ */ \"./src/components/Content/components/index.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./src/components/Content/components/MovieContainer/styles.scss\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\nvar pageSize = 9;\r\nvar MovieContainerComponent = function (_a) {\r\n    var _b = _a.moviesData, movies = _b.movies, loading = _b.loading, offset = _b.offset, moreMovies = _a.moreMovies;\r\n    if (loading && !movies.length) {\r\n        return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Loader\"], { loading: loading });\r\n    }\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"movie-container\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](___WEBPACK_IMPORTED_MODULE_3__[\"MoviePagination\"], { moviesCount: movies.length, loading: loading, fetch: moreMovies, pageSize: pageSize, offset: offset }, movies.map(function (movie) { return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](___WEBPACK_IMPORTED_MODULE_3__[\"MovieCard\"], { id: movie.id, title: movie.title, gengre: movie.genres.join(','), year: new Date(movie.release_date).getFullYear(), imageUrl: movie.poster_path, key: movie.id })); }))));\r\n};\r\nvar MovieContainer = Object(_enhancers_withMovies__WEBPACK_IMPORTED_MODULE_2__[\"withMovies\"])(MovieContainerComponent);\r\n\n\n//# sourceURL=webpack:///./src/components/Content/components/MovieContainer/index.tsx?");

/***/ }),

/***/ "./src/components/Content/components/MovieContainer/styles.scss":
/*!**********************************************************************!*\
  !*** ./src/components/Content/components/MovieContainer/styles.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/components/Content/components/MovieContainer/styles.scss?");

/***/ }),

/***/ "./src/components/Content/components/MoviePagination/index.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/Content/components/MoviePagination/index.tsx ***!
  \*********************************************************************/
/*! exports provided: MoviePagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MoviePagination\", function() { return MoviePagination; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/components */ \"./src/common/components/index.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\nvar MoviePagination = /** @class */ (function (_super) {\r\n    __extends(MoviePagination, _super);\r\n    function MoviePagination(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.handleScroll = function () {\r\n            if (!_this.checkBottom()) {\r\n                return;\r\n            }\r\n            if (_this.props.loading) {\r\n                return;\r\n            }\r\n            _this.getMoreItems();\r\n        };\r\n        _this.checkBottom = function () {\r\n            var body = document.body, html = document.documentElement;\r\n            var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);\r\n            var windowBottom = window.innerHeight + window.pageYOffset + 1;\r\n            return windowBottom >= docHeight;\r\n        };\r\n        return _this;\r\n    }\r\n    MoviePagination.prototype.componentDidMount = function () {\r\n        window.addEventListener('scroll', this.handleScroll);\r\n    };\r\n    MoviePagination.prototype.componentWillUnmount = function () {\r\n        window.removeEventListener('scroll', this.handleScroll);\r\n    };\r\n    MoviePagination.prototype.render = function () {\r\n        var _a = this.props, loading = _a.loading, children = _a.children;\r\n        return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null,\r\n            children,\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Loader\"], { loading: loading })));\r\n    };\r\n    MoviePagination.prototype.getMoreItems = function () {\r\n        var _a = this.props, moviesCount = _a.moviesCount, offset = _a.offset, pageSize = _a.pageSize, fetch = _a.fetch;\r\n        if (moviesCount < offset.limit) {\r\n            fetch({\r\n                limit: pageSize,\r\n                offset: offset.offset + pageSize,\r\n            });\r\n        }\r\n    };\r\n    return MoviePagination;\r\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./src/components/Content/components/MoviePagination/index.tsx?");

/***/ }),

/***/ "./src/components/Content/components/index.ts":
/*!****************************************************!*\
  !*** ./src/components/Content/components/index.ts ***!
  \****************************************************/
/*! exports provided: MovieCard, MovieContainerComponent, MovieContainer, MoviePagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MovieCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovieCard */ \"./src/components/Content/components/MovieCard/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MovieCard\", function() { return _MovieCard__WEBPACK_IMPORTED_MODULE_0__[\"MovieCard\"]; });\n\n/* harmony import */ var _MovieContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieContainer */ \"./src/components/Content/components/MovieContainer/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MovieContainerComponent\", function() { return _MovieContainer__WEBPACK_IMPORTED_MODULE_1__[\"MovieContainerComponent\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MovieContainer\", function() { return _MovieContainer__WEBPACK_IMPORTED_MODULE_1__[\"MovieContainer\"]; });\n\n/* harmony import */ var _MoviePagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MoviePagination */ \"./src/components/Content/components/MoviePagination/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MoviePagination\", function() { return _MoviePagination__WEBPACK_IMPORTED_MODULE_2__[\"MoviePagination\"]; });\n\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/components/Content/components/index.ts?");

/***/ }),

/***/ "./src/components/Content/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Content/index.tsx ***!
  \******************************************/
/*! exports provided: Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Content\", function() { return Content; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ \"./src/components/Content/components/index.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/Content/styles.scss\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\nvar Content = function () {\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"content\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components__WEBPACK_IMPORTED_MODULE_1__[\"MovieContainer\"], null)));\r\n};\r\n\n\n//# sourceURL=webpack:///./src/components/Content/index.tsx?");

/***/ }),

/***/ "./src/components/Content/styles.scss":
/*!********************************************!*\
  !*** ./src/components/Content/styles.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/components/Content/styles.scss?");

/***/ }),

/***/ "./src/components/Footer/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Footer/index.tsx ***!
  \*****************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/components */ \"./src/common/components/index.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/Footer/styles.scss\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\nvar Footer = function () { return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"footer\" },\r\n    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Logo\"], null))); };\r\n\n\n//# sourceURL=webpack:///./src/components/Footer/index.tsx?");

/***/ }),

/***/ "./src/components/Footer/styles.scss":
/*!*******************************************!*\
  !*** ./src/components/Footer/styles.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/components/Footer/styles.scss?");

/***/ }),

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/components */ \"./src/common/components/index.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/Header/styles.scss\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\nvar Header = function (_a) {\r\n    var children = _a.children;\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"header\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"header__layout\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"header__background\" })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Logo\"], null),\r\n        children));\r\n};\r\n\n\n//# sourceURL=webpack:///./src/components/Header/index.tsx?");

/***/ }),

/***/ "./src/components/Header/styles.scss":
/*!*******************************************!*\
  !*** ./src/components/Header/styles.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/components/Header/styles.scss?");

/***/ }),

/***/ "./src/components/InfoBar/constatns.ts":
/*!*********************************************!*\
  !*** ./src/components/InfoBar/constatns.ts ***!
  \*********************************************/
/*! exports provided: options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"options\", function() { return options; });\n/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/utils */ \"./src/common/utils/index.ts\");\n\r\nvar options = Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__[\"uniqueIdItems\"])([\r\n    { title: 'Release date', value: 'release_date' },\r\n    { title: 'Rating', value: 'vote_average' },\r\n], 'sort-options');\r\n\n\n//# sourceURL=webpack:///./src/components/InfoBar/constatns.ts?");

/***/ }),

/***/ "./src/components/InfoBar/index.tsx":
/*!******************************************!*\
  !*** ./src/components/InfoBar/index.tsx ***!
  \******************************************/
/*! exports provided: InfoBarComponent, InfoBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InfoBarComponent\", function() { return InfoBarComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InfoBar\", function() { return InfoBar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _enhancers_withMovies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @enhancers/withMovies */ \"./src/enhancers/withMovies/index.ts\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/components */ \"./src/common/components/index.ts\");\n/* harmony import */ var _enhancers_withFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @enhancers/withFilter */ \"./src/enhancers/withFilter/index.ts\");\n/* harmony import */ var _constatns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constatns */ \"./src/components/InfoBar/constatns.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ \"./src/components/InfoBar/styles.scss\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_6__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar InfoBarComponent = function (_a) {\r\n    var filter = _a.filter, setFilter = _a.setFilter, movies = _a.moviesData.movies, searchMovies = _a.searchMovies;\r\n    var didMountRef = react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"](false);\r\n    react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"](function () {\r\n        if (didMountRef.current) {\r\n            searchMovies({\r\n                offset: 0,\r\n                limit: movies.length,\r\n            }, filter);\r\n        }\r\n        else {\r\n            didMountRef.current = true;\r\n        }\r\n    }, [filter.sortBy]);\r\n    var onChangeCallback = react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"](function (value) {\r\n        setFilter({ sortBy: value });\r\n    }, [setFilter]);\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"info-bar\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"info-bar__controls\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], { className: \"info-label\", text: movies.length + \" movies found\" }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_3__[\"SelectOptionButtons\"], { title: \"Sort by\", options: _constatns__WEBPACK_IMPORTED_MODULE_5__[\"options\"], value: filter.sortBy, onChange: onChangeCallback }))));\r\n};\r\nvar InfoBar = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"compose\"])(_enhancers_withFilter__WEBPACK_IMPORTED_MODULE_4__[\"withFilter\"], _enhancers_withMovies__WEBPACK_IMPORTED_MODULE_2__[\"withMovies\"])(InfoBarComponent);\r\n\n\n//# sourceURL=webpack:///./src/components/InfoBar/index.tsx?");

/***/ }),

/***/ "./src/components/InfoBar/styles.scss":
/*!********************************************!*\
  !*** ./src/components/InfoBar/styles.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/components/InfoBar/styles.scss?");

/***/ }),

/***/ "./src/components/MovieInfo/index.tsx":
/*!********************************************!*\
  !*** ./src/components/MovieInfo/index.tsx ***!
  \********************************************/
/*! exports provided: MovieInfoComponent, MovieInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MovieInfoComponent\", function() { return MovieInfoComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MovieInfo\", function() { return MovieInfo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/components */ \"./src/common/components/index.ts\");\n/* harmony import */ var _common_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @common/routes */ \"./src/common/routes/index.ts\");\n/* harmony import */ var _enhancers_withMovie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @enhancers/withMovie */ \"./src/enhancers/withMovie/index.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ \"./src/components/MovieInfo/styles.scss\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_6__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar MovieInfoComponent = function (_a) {\r\n    var _b = _a.movieData, movie = _b.movie, loading = _b.loading, notFound = _b.notFound, selectMovie = _a.selectMovie;\r\n    var id = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"useParams\"])().id;\r\n    react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"](function () {\r\n        selectMovie(Number(id));\r\n        window.scrollTo({\r\n            top: 0,\r\n            behavior: 'smooth',\r\n        });\r\n    }, [id]);\r\n    if (loading) {\r\n        return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_3__[\"Loader\"], { loading: loading });\r\n    }\r\n    if (notFound) {\r\n        return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], { to: _common_routes__WEBPACK_IMPORTED_MODULE_4__[\"ROUTES\"].PAGE_404 });\r\n    }\r\n    if (!movie) {\r\n        return null;\r\n    }\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"movie-info\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], { className: \"movie-info__search-link\", to: _common_routes__WEBPACK_IMPORTED_MODULE_4__[\"ROUTES\"].HOME },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], { icon: \"search\", flip: \"horizontal\" })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"movie-info__image\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_3__[\"ScaleImage\"], { src: movie.poster_path, ratio: 140 })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"movie-info__content\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"movie-info-header\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], { className: \"movie-info-header__title\", text: movie.title, uppercase: true }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], { className: \"movie-info-header__rating\", text: movie.vote_average })),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], { className: \"movie-info-subtitle\", text: movie.tagline }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"movie-info-time\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"movie-info-time__year\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], { className: \"movie-info-time-label\", text: new Date(movie.release_date).getFullYear(), uppercase: true }),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], { className: \"movie-info-time-sublabel\", text: \"year\" })),\r\n                movie.runtime && (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"movie-info-time__duration\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], { className: \"movie-info-time-label\", text: movie.runtime }),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], { className: \"movie-info-time-sublabel\", text: \"min\" })))),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], { className: \"movie-info-description\", text: movie.overview }))));\r\n};\r\nvar MovieInfo = Object(_enhancers_withMovie__WEBPACK_IMPORTED_MODULE_5__[\"withMovie\"])(MovieInfoComponent);\r\n\n\n//# sourceURL=webpack:///./src/components/MovieInfo/index.tsx?");

/***/ }),

/***/ "./src/components/MovieInfo/styles.scss":
/*!**********************************************!*\
  !*** ./src/components/MovieInfo/styles.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/components/MovieInfo/styles.scss?");

/***/ }),

/***/ "./src/components/NotFound/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/NotFound/index.tsx ***!
  \*******************************************/
/*! exports provided: NotFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NotFound\", function() { return NotFound; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/components */ \"./src/common/components/index.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/NotFound/styles.scss\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\nvar NotFound = function () { return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"page-not-found\" },\r\n    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Label\"], { className: \"page-not-found__label\", text: \"Page not found\" }))); };\r\n\n\n//# sourceURL=webpack:///./src/components/NotFound/index.tsx?");

/***/ }),

/***/ "./src/components/NotFound/styles.scss":
/*!*********************************************!*\
  !*** ./src/components/NotFound/styles.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/components/NotFound/styles.scss?");

/***/ }),

/***/ "./src/components/Search/constants.ts":
/*!********************************************!*\
  !*** ./src/components/Search/constants.ts ***!
  \********************************************/
/*! exports provided: options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"options\", function() { return options; });\n/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/utils */ \"./src/common/utils/index.ts\");\n\r\nvar options = Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__[\"uniqueIdItems\"])([\r\n    { title: 'Title', value: 'title' },\r\n    { title: 'Gengre', value: 'genres' },\r\n], 'search-by-options');\r\n\n\n//# sourceURL=webpack:///./src/components/Search/constants.ts?");

/***/ }),

/***/ "./src/components/Search/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Search/index.tsx ***!
  \*****************************************/
/*! exports provided: SearchComponent, Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchComponent\", function() { return SearchComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Search\", function() { return Search; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/components */ \"./src/common/components/index.ts\");\n/* harmony import */ var _enhancers_withMovies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @enhancers/withMovies */ \"./src/enhancers/withMovies/index.ts\");\n/* harmony import */ var _enhancers_withFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @enhancers/withFilter */ \"./src/enhancers/withFilter/index.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./src/components/Search/constants.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ \"./src/components/Search/styles.scss\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_6__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar searchSize = 9;\r\nvar SearchComponent = function (_a) {\r\n    var filter = _a.filter, setFilter = _a.setFilter, searchMovies = _a.searchMovies;\r\n    var _b = react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"](''), search = _b[0], setSearch = _b[1];\r\n    var _c = react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"]('title'), searchBy = _c[0], setSearchBy = _c[1];\r\n    var onClickCallback = react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"](function () {\r\n        setFilter({\r\n            search: search,\r\n            searchBy: searchBy,\r\n        });\r\n        searchMovies({ limit: searchSize });\r\n    }, [setFilter, filter, search, searchBy]);\r\n    var value = search || filter.search;\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"search\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_2__[\"Label\"], { className: \"search__title\", text: \"Find your movie\", uppercase: true }),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"search__area\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"search-controls\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], { className: \"search-controls__input\", placeholder: \"Quentin Tarantio\", value: value, onChange: setSearch }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], { className: \"search-controls__button\", title: \"Search\", onClick: onClickCallback }))),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"search__filter\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_2__[\"SelectOptionButtons\"], { title: \"Search by\", options: _constants__WEBPACK_IMPORTED_MODULE_5__[\"options\"], value: searchBy, onChange: setSearchBy }))));\r\n};\r\nvar Search = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"compose\"])(_enhancers_withFilter__WEBPACK_IMPORTED_MODULE_4__[\"withFilter\"], _enhancers_withMovies__WEBPACK_IMPORTED_MODULE_3__[\"withMoviesDataHandlers\"])(SearchComponent);\r\n\n\n//# sourceURL=webpack:///./src/components/Search/index.tsx?");

/***/ }),

/***/ "./src/components/Search/styles.scss":
/*!*******************************************!*\
  !*** ./src/components/Search/styles.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/components/Search/styles.scss?");

/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! exports provided: App, Content, Footer, Header, SearchComponent, Search, InfoBarComponent, InfoBar, MovieInfoComponent, MovieInfo, NotFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/components/App/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return _App__WEBPACK_IMPORTED_MODULE_0__[\"App\"]; });\n\n/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Content */ \"./src/components/Content/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Content\", function() { return _Content__WEBPACK_IMPORTED_MODULE_1__[\"Content\"]; });\n\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ \"./src/components/Footer/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return _Footer__WEBPACK_IMPORTED_MODULE_2__[\"Footer\"]; });\n\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./src/components/Header/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return _Header__WEBPACK_IMPORTED_MODULE_3__[\"Header\"]; });\n\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Search */ \"./src/components/Search/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SearchComponent\", function() { return _Search__WEBPACK_IMPORTED_MODULE_4__[\"SearchComponent\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Search\", function() { return _Search__WEBPACK_IMPORTED_MODULE_4__[\"Search\"]; });\n\n/* harmony import */ var _InfoBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InfoBar */ \"./src/components/InfoBar/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"InfoBarComponent\", function() { return _InfoBar__WEBPACK_IMPORTED_MODULE_5__[\"InfoBarComponent\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"InfoBar\", function() { return _InfoBar__WEBPACK_IMPORTED_MODULE_5__[\"InfoBar\"]; });\n\n/* harmony import */ var _MovieInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MovieInfo */ \"./src/components/MovieInfo/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MovieInfoComponent\", function() { return _MovieInfo__WEBPACK_IMPORTED_MODULE_6__[\"MovieInfoComponent\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MovieInfo\", function() { return _MovieInfo__WEBPACK_IMPORTED_MODULE_6__[\"MovieInfo\"]; });\n\n/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NotFound */ \"./src/components/NotFound/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"NotFound\", function() { return _NotFound__WEBPACK_IMPORTED_MODULE_7__[\"NotFound\"]; });\n\n/* istanbul ignore file */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/components/index.ts?");

/***/ }),

/***/ "./src/enhancers/withFilter/index.ts":
/*!*******************************************!*\
  !*** ./src/enhancers/withFilter/index.ts ***!
  \*******************************************/
/*! exports provided: mapStateToProps, withFilterData, mapDispatchToProps, withFilterHandlers, withFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapStateToProps\", function() { return mapStateToProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withFilterData\", function() { return withFilterData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapDispatchToProps\", function() { return mapDispatchToProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withFilterHandlers\", function() { return withFilterHandlers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withFilter\", function() { return withFilter; });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/filter */ \"./src/store/filter/index.ts\");\n\r\n\r\n\r\nvar mapStateToProps = function (state) { return ({ filter: state.moviesFilter }); };\r\nvar withFilterData = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps);\r\nvar mapDispatchToProps = function (dispatch) {\r\n    return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"bindActionCreators\"])({\r\n        setFilter: _store_filter__WEBPACK_IMPORTED_MODULE_2__[\"actions\"].setFilter,\r\n    }, dispatch);\r\n};\r\nvar withFilterHandlers = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(null, mapDispatchToProps);\r\nvar withFilter = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps);\r\n\n\n//# sourceURL=webpack:///./src/enhancers/withFilter/index.ts?");

/***/ }),

/***/ "./src/enhancers/withMovie/index.ts":
/*!******************************************!*\
  !*** ./src/enhancers/withMovie/index.ts ***!
  \******************************************/
/*! exports provided: mapStateToProps, withMovieData, mapDispatchToProps, withMovieDataHandlers, withMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapStateToProps\", function() { return mapStateToProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withMovieData\", function() { return withMovieData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapDispatchToProps\", function() { return mapDispatchToProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withMovieDataHandlers\", function() { return withMovieDataHandlers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withMovie\", function() { return withMovie; });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/movie */ \"./src/store/movie/index.ts\");\n\r\n\r\n\r\nvar mapStateToProps = function (_a) {\r\n    var movieData = _a.movieData;\r\n    return ({ movieData: movieData });\r\n};\r\nvar withMovieData = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps);\r\nvar mapDispatchToProps = function (dispatch) {\r\n    return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"bindActionCreators\"])({\r\n        selectMovie: _store_movie__WEBPACK_IMPORTED_MODULE_2__[\"thunkActions\"].selectMovie,\r\n    }, dispatch);\r\n};\r\nvar withMovieDataHandlers = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(null, mapDispatchToProps);\r\nvar withMovie = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps);\r\n\n\n//# sourceURL=webpack:///./src/enhancers/withMovie/index.ts?");

/***/ }),

/***/ "./src/enhancers/withMovies/index.ts":
/*!*******************************************!*\
  !*** ./src/enhancers/withMovies/index.ts ***!
  \*******************************************/
/*! exports provided: mapStateToProps, withMoviesData, mapDispatchToProps, withMoviesDataHandlers, withMovies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapStateToProps\", function() { return mapStateToProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withMoviesData\", function() { return withMoviesData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapDispatchToProps\", function() { return mapDispatchToProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withMoviesDataHandlers\", function() { return withMoviesDataHandlers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withMovies\", function() { return withMovies; });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/movies */ \"./src/store/movies/index.ts\");\n\r\n\r\n\r\nvar mapStateToProps = function (_a) {\r\n    var moviesData = _a.moviesData;\r\n    return ({ moviesData: moviesData });\r\n};\r\nvar withMoviesData = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps);\r\nvar mapDispatchToProps = function (dispatch) {\r\n    return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"bindActionCreators\"])({\r\n        searchMovies: _store_movies__WEBPACK_IMPORTED_MODULE_2__[\"thunkActions\"].searchMovies,\r\n        moreMovies: _store_movies__WEBPACK_IMPORTED_MODULE_2__[\"thunkActions\"].moreMovies,\r\n    }, dispatch);\r\n};\r\nvar withMoviesDataHandlers = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(null, mapDispatchToProps);\r\nvar withMovies = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps);\r\n\n\n//# sourceURL=webpack:///./src/enhancers/withMovies/index.ts?");

/***/ }),

/***/ "./src/store/filter/actions.ts":
/*!*************************************!*\
  !*** ./src/store/filter/actions.ts ***!
  \*************************************/
/*! exports provided: ACTION_TYPES, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ACTION_TYPES\", function() { return ACTION_TYPES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actions\", function() { return actions; });\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ \"redux-actions\");\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);\n\r\nvar ACTION_TYPES = {\r\n    SET_FILTER: 'SET_FILTER',\r\n};\r\nvar setFilter = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(ACTION_TYPES.SET_FILTER, function (payload) { return payload; });\r\nvar actions = {\r\n    setFilter: setFilter,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/store/filter/actions.ts?");

/***/ }),

/***/ "./src/store/filter/index.ts":
/*!***********************************!*\
  !*** ./src/store/filter/index.ts ***!
  \***********************************/
/*! exports provided: initialState, reducer, ACTION_TYPES, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/store/filter/reducer.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__[\"initialState\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__[\"reducer\"]; });\n\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/store/filter/actions.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ACTION_TYPES\", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__[\"ACTION_TYPES\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"actions\", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__[\"actions\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/store/filter/index.ts?");

/***/ }),

/***/ "./src/store/filter/reducer.ts":
/*!*************************************!*\
  !*** ./src/store/filter/reducer.ts ***!
  \*************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return reducer; });\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ \"redux-actions\");\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/store/filter/actions.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar _a;\r\n\r\n\r\nvar initialState = {\r\n    filter: '',\r\n    search: '',\r\n    searchBy: 'title',\r\n    sortBy: 'release_date',\r\n    sortOrder: 'desc',\r\n};\r\nvar reducer = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"handleActions\"])((_a = {},\r\n    _a[_actions__WEBPACK_IMPORTED_MODULE_1__[\"ACTION_TYPES\"].SET_FILTER] = function (state, action) { return (__assign(__assign({}, state), action.payload)); },\r\n    _a), initialState);\r\n\n\n//# sourceURL=webpack:///./src/store/filter/reducer.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ \"history\");\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router */ \"connected-react-router\");\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer */ \"./src/store/reducer.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n/* istanbul ignore file */\r\n\r\n\r\n\r\n\r\n\r\nvar AppStore = /** @class */ (function () {\r\n    function AppStore(preloadedState, ssrUrl) {\r\n        this.routerHistory = !!ssrUrl\r\n            ? Object(history__WEBPACK_IMPORTED_MODULE_0__[\"createMemoryHistory\"])({\r\n                initialEntries: [ssrUrl],\r\n            })\r\n            : Object(history__WEBPACK_IMPORTED_MODULE_0__[\"createBrowserHistory\"])();\r\n        var middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a, Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__[\"routerMiddleware\"])(this.routerHistory)];\r\n        var composeEnhancers = this.getComposeEnhancer();\r\n        var enhancer = composeEnhancers(redux__WEBPACK_IMPORTED_MODULE_2__[\"applyMiddleware\"].apply(void 0, middlewares));\r\n        this.storeInstance = Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"createStore\"])(Object(_reducer__WEBPACK_IMPORTED_MODULE_4__[\"makeRootReducer\"])(this.routerHistory), preloadedState, enhancer);\r\n    }\r\n    Object.defineProperty(AppStore.prototype, \"instance\", {\r\n        get: function () {\r\n            return this.storeInstance;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(AppStore.prototype, \"history\", {\r\n        get: function () {\r\n            return this.routerHistory;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    AppStore.prototype.dispatch = function (action) {\r\n        this.instance.dispatch(action);\r\n    };\r\n    AppStore.prototype.thunkDispatch = function (action) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/, this.instance.dispatch(action)];\r\n            });\r\n        });\r\n    };\r\n    AppStore.prototype.getComposeEnhancer = function () {\r\n        // return compose without REDUX DEV TOOLS when running production bundle\r\n        if (false) {}\r\n        return typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']\r\n            ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']\r\n            : redux__WEBPACK_IMPORTED_MODULE_2__[\"compose\"];\r\n    };\r\n    return AppStore;\r\n}());\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppStore);\r\n\n\n//# sourceURL=webpack:///./src/store/index.ts?");

/***/ }),

/***/ "./src/store/movie/actions.ts":
/*!************************************!*\
  !*** ./src/store/movie/actions.ts ***!
  \************************************/
/*! exports provided: ACTION_TYPES, actions, thunkActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ACTION_TYPES\", function() { return ACTION_TYPES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actions\", function() { return actions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"thunkActions\", function() { return thunkActions; });\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ \"redux-actions\");\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/api */ \"./src/common/api/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\nvar ACTION_TYPES = {\r\n    FETCH_MOVIE: 'FETCH_MOIVE',\r\n    FETCH_MOVIE_ERROR: 'FETCH_MOVIE_ERROR',\r\n    RECEIVE_MOVIE_UPDATE: 'RECEIVE_MOVIE_UPDATE',\r\n};\r\nvar fetchMovie = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(ACTION_TYPES.FETCH_MOVIE, function (payload) { return payload; });\r\nvar fetchMovieError = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(ACTION_TYPES.FETCH_MOVIE_ERROR, function (payload) { return payload; });\r\nvar receiveMovieUpdate = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(ACTION_TYPES.RECEIVE_MOVIE_UPDATE, function (payload) { return payload; });\r\nvar actions = {\r\n    fetchMovie: fetchMovie,\r\n    fetchMovieError: fetchMovieError,\r\n    receiveMovieUpdate: receiveMovieUpdate,\r\n};\r\nvar selectMovie = function (id) { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var moviesData, movie, _a, error, data, notFound;\r\n    return __generator(this, function (_b) {\r\n        switch (_b.label) {\r\n            case 0:\r\n                dispatch(fetchMovie({ loading: true, error: null, notFound: false }));\r\n                moviesData = getState().moviesData;\r\n                movie = moviesData.movies.find(function (mov) { return mov.id === id; });\r\n                if (!!movie) {\r\n                    dispatch(receiveMovieUpdate({ movie: movie, loading: false, notFound: false }));\r\n                    return [2 /*return*/];\r\n                }\r\n                return [4 /*yield*/, Object(_common_api__WEBPACK_IMPORTED_MODULE_1__[\"getMovie\"])(id)];\r\n            case 1:\r\n                _a = _b.sent(), error = _a.error, data = _a.data;\r\n                if (!!error) {\r\n                    dispatch(fetchMovieError({ error: error, loading: false, notFound: false }));\r\n                }\r\n                else {\r\n                    notFound = !data || !Object.keys(data).length;\r\n                    dispatch(receiveMovieUpdate({\r\n                        movie: !notFound && data,\r\n                        loading: false,\r\n                        notFound: notFound,\r\n                    }));\r\n                }\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); }; };\r\nvar thunkActions = {\r\n    selectMovie: selectMovie,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/store/movie/actions.ts?");

/***/ }),

/***/ "./src/store/movie/index.ts":
/*!**********************************!*\
  !*** ./src/store/movie/index.ts ***!
  \**********************************/
/*! exports provided: initialState, reducer, ACTION_TYPES, actions, thunkActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/store/movie/reducer.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__[\"initialState\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__[\"reducer\"]; });\n\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/store/movie/actions.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ACTION_TYPES\", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__[\"ACTION_TYPES\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"actions\", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__[\"actions\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"thunkActions\", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__[\"thunkActions\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/store/movie/index.ts?");

/***/ }),

/***/ "./src/store/movie/reducer.ts":
/*!************************************!*\
  !*** ./src/store/movie/reducer.ts ***!
  \************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return reducer; });\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ \"redux-actions\");\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/store/movie/actions.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar _a;\r\n\r\n\r\nvar initialState = {\r\n    error: null,\r\n    loading: false,\r\n    notFound: false,\r\n    movie: null,\r\n};\r\nvar reducer = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"handleActions\"])((_a = {},\r\n    _a[_actions__WEBPACK_IMPORTED_MODULE_1__[\"ACTION_TYPES\"].FETCH_MOVIE] = function (state, action) { return (__assign(__assign({}, state), action.payload)); },\r\n    _a[_actions__WEBPACK_IMPORTED_MODULE_1__[\"ACTION_TYPES\"].FETCH_MOVIE_ERROR] = function (state, action) { return (__assign(__assign({}, state), action.payload)); },\r\n    _a[_actions__WEBPACK_IMPORTED_MODULE_1__[\"ACTION_TYPES\"].RECEIVE_MOVIE_UPDATE] = function (state, action) { return (__assign(__assign({}, state), action.payload)); },\r\n    _a), initialState);\r\n\n\n//# sourceURL=webpack:///./src/store/movie/reducer.ts?");

/***/ }),

/***/ "./src/store/movies/actions.ts":
/*!*************************************!*\
  !*** ./src/store/movies/actions.ts ***!
  \*************************************/
/*! exports provided: ACTION_TYPES, actions, thunkActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ACTION_TYPES\", function() { return ACTION_TYPES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actions\", function() { return actions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"thunkActions\", function() { return thunkActions; });\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ \"redux-actions\");\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/api */ \"./src/common/api/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\nvar ACTION_TYPES = {\r\n    FETCH_MOVIES: 'FETCH_MOIVES',\r\n    FETCH_MOVIES_ERROR: 'FETCH_MOVIES_ERROR',\r\n    RECEIVE_MOVIES_UPDATE: 'RECEIVE_MOVIES_UPDATE',\r\n    RECEIVE_MOVIES_ADD: 'RECEIVE_ADD_MOVIES_ADD',\r\n};\r\nvar fetchMovies = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(ACTION_TYPES.FETCH_MOVIES, function (payload) { return payload; });\r\nvar fetchMoviesError = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(ACTION_TYPES.FETCH_MOVIES_ERROR, function (payload) { return payload; });\r\nvar receiveMoviesUpdate = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(ACTION_TYPES.RECEIVE_MOVIES_UPDATE, function (payload) { return payload; });\r\nvar receiveMoviesAdd = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(ACTION_TYPES.RECEIVE_MOVIES_ADD, function (payload) { return payload; });\r\nvar actions = {\r\n    fetchMovies: fetchMovies,\r\n    fetchMoviesError: fetchMoviesError,\r\n    receiveMoviesUpdate: receiveMoviesUpdate,\r\n    receiveMoviesAdd: receiveMoviesAdd,\r\n};\r\nvar searchMovies = function (offset, filter) { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var moviesFilter, _a, error, data, total, cursor;\r\n    return __generator(this, function (_b) {\r\n        switch (_b.label) {\r\n            case 0:\r\n                dispatch(fetchMovies({ loading: true, error: null, movies: [] }));\r\n                moviesFilter = getState().moviesFilter;\r\n                return [4 /*yield*/, Object(_common_api__WEBPACK_IMPORTED_MODULE_1__[\"getMovies\"])(offset, filter || moviesFilter)];\r\n            case 1:\r\n                _a = _b.sent(), error = _a.error, data = _a.data, total = _a.total, cursor = _a.offset;\r\n                if (!!error) {\r\n                    dispatch(fetchMoviesError({ loading: false, error: error }));\r\n                }\r\n                else {\r\n                    dispatch(receiveMoviesUpdate({\r\n                        loading: false,\r\n                        movies: data,\r\n                        offset: {\r\n                            offset: cursor,\r\n                            limit: total,\r\n                        },\r\n                    }));\r\n                }\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); }; };\r\nvar moreMovies = function (offset) { return function (dispatch, getSate) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var moviesFilter, _a, error, data, total, cursor;\r\n    return __generator(this, function (_b) {\r\n        switch (_b.label) {\r\n            case 0:\r\n                dispatch(fetchMovies({ loading: true, error: null }));\r\n                moviesFilter = getSate().moviesFilter;\r\n                return [4 /*yield*/, Object(_common_api__WEBPACK_IMPORTED_MODULE_1__[\"getMovies\"])(offset, moviesFilter)];\r\n            case 1:\r\n                _a = _b.sent(), error = _a.error, data = _a.data, total = _a.total, cursor = _a.offset;\r\n                if (!!error) {\r\n                    dispatch(fetchMoviesError({ loading: false, error: error }));\r\n                }\r\n                else {\r\n                    dispatch(receiveMoviesAdd({\r\n                        loading: false,\r\n                        movies: data,\r\n                        offset: {\r\n                            offset: cursor,\r\n                            limit: total,\r\n                        },\r\n                    }));\r\n                }\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); }; };\r\nvar thunkActions = {\r\n    searchMovies: searchMovies,\r\n    moreMovies: moreMovies,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/store/movies/actions.ts?");

/***/ }),

/***/ "./src/store/movies/index.ts":
/*!***********************************!*\
  !*** ./src/store/movies/index.ts ***!
  \***********************************/
/*! exports provided: initialState, reducer, ACTION_TYPES, actions, thunkActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/store/movies/reducer.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__[\"initialState\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__[\"reducer\"]; });\n\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/store/movies/actions.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ACTION_TYPES\", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__[\"ACTION_TYPES\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"actions\", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__[\"actions\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"thunkActions\", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__[\"thunkActions\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/store/movies/index.ts?");

/***/ }),

/***/ "./src/store/movies/reducer.ts":
/*!*************************************!*\
  !*** ./src/store/movies/reducer.ts ***!
  \*************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return reducer; });\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ \"redux-actions\");\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/store/movies/actions.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\nvar _a;\r\n\r\n\r\nvar initialState = {\r\n    error: null,\r\n    loading: false,\r\n    movies: [],\r\n    offset: {\r\n        offset: 0,\r\n        limit: 0,\r\n    },\r\n};\r\nvar reducer = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"handleActions\"])((_a = {},\r\n    _a[_actions__WEBPACK_IMPORTED_MODULE_1__[\"ACTION_TYPES\"].FETCH_MOVIES] = function (state, action) { return (__assign(__assign({}, state), action.payload)); },\r\n    _a[_actions__WEBPACK_IMPORTED_MODULE_1__[\"ACTION_TYPES\"].FETCH_MOVIES_ERROR] = function (state, action) { return (__assign(__assign({}, state), action.payload)); },\r\n    _a[_actions__WEBPACK_IMPORTED_MODULE_1__[\"ACTION_TYPES\"].RECEIVE_MOVIES_UPDATE] = function (state, action) { return (__assign(__assign({}, state), action.payload)); },\r\n    _a[_actions__WEBPACK_IMPORTED_MODULE_1__[\"ACTION_TYPES\"].RECEIVE_MOVIES_ADD] = function (state, action) { return (__assign(__assign(__assign({}, state), action.payload), { movies: __spreadArrays(state.movies, action.payload.movies) })); },\r\n    _a), initialState);\r\n\n\n//# sourceURL=webpack:///./src/store/movies/reducer.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/*! exports provided: makeRootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeRootReducer\", function() { return makeRootReducer; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router */ \"connected-react-router\");\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies */ \"./src/store/movies/index.ts\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter */ \"./src/store/filter/index.ts\");\n/* harmony import */ var _movie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie */ \"./src/store/movie/index.ts\");\n/* istanbul ignore file */\r\n\r\n\r\n\r\n\r\n\r\nvar makeRootReducer = function (history) {\r\n    return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\r\n        moviesData: _movies__WEBPACK_IMPORTED_MODULE_2__[\"reducer\"],\r\n        moviesFilter: _filter__WEBPACK_IMPORTED_MODULE_3__[\"reducer\"],\r\n        movieData: _movie__WEBPACK_IMPORTED_MODULE_4__[\"reducer\"],\r\n        router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__[\"connectRouter\"])(history)\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack:///./src/store/reducer.ts?");

/***/ }),

/***/ "./webpack/config/webpack.config.base.js":
/*!***********************************************!*\
  !*** ./webpack/config/webpack.config.base.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const HtmlWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\r\nconst OptimizeCssAssetsPlugin = __webpack_require__(/*! optimize-css-assets-webpack-plugin */ \"optimize-css-assets-webpack-plugin\");\r\nconst path = __webpack_require__(/*! path */ \"path\");\r\n\r\nmodule.exports = {\r\n  entry: {\r\n    main: ['./src/index.tsx'],\r\n  },\r\n  output: {\r\n    filename: 'main.js',\r\n    chunkFilename: '[name].chunk.js',\r\n    publicPath: '/',\r\n  },\r\n  resolve: {\r\n    extensions: ['.tsx', '.ts', '.js', '.css', '.scss'],\r\n    alias: {\r\n      '@assets': path.resolve(process.cwd(), './public/'),\r\n      '@common': path.resolve(process.cwd(), './src/common/'),\r\n      '@enhancers': path.resolve(process.cwd(), './src/enhancers/'),\r\n      '@store': path.resolve(process.cwd(), './src/store/'),\r\n      'react-dom': '@hot-loader/react-dom',\r\n    },\r\n  },\r\n  module: {\r\n    rules: [\r\n      {\r\n        test: /\\.ts(x?)$/,\r\n        exclude: /node_modules/,\r\n        use: [\r\n          {\r\n            loader: 'ts-loader',\r\n          },\r\n        ],\r\n      },\r\n      /**\r\n       * Rules to support SASS pre-processor.\r\n       *\r\n       * Add ability to import CSS from JS code.\r\n       * CSS will be injected automatically to DOM using <style> tag.\r\n       *\r\n       * @see https://webpack.js.org/loaders/css-loader/\r\n       * @see https://webpack.js.org/loaders/style-loader/\r\n       * @see https://webpack.js.org/loaders/sass-loader/\r\n       */\r\n      {\r\n        test: /\\.(scss)$/,\r\n        use: [\r\n          'style-loader',\r\n          {\r\n            loader: 'css-loader',\r\n          },\r\n          {\r\n            loader: 'sass-loader',\r\n          },\r\n        ],\r\n      },\r\n      {\r\n        test: /\\.(png|jpe?g|gif)$/i,\r\n        loader: 'file-loader',\r\n        options: {\r\n          outputPath: 'images',\r\n        },\r\n      },\r\n      {\r\n        test: /\\.(woff(2)?|ttf|eot)$/i,\r\n        use: [\r\n          {\r\n            loader: 'file-loader',\r\n            options: {\r\n              outputPath: 'fonts',\r\n            },\r\n          },\r\n        ],\r\n      },\r\n    ],\r\n  },\r\n  plugins: [\r\n    /*\r\n     * Plugin: HtmlWebpackPlugin\r\n     * Description: Simplifies creation of HTML files to serve your webpack bundles.\r\n     * This is especially useful for webpack bundles that include a hash in the filename\r\n     * which changes every compilation.\r\n     *\r\n     * @see https://github.com/ampedandwired/html-webpack-plugin\r\n     */\r\n    new HtmlWebpackPlugin({\r\n      filename: 'base-index.html',\r\n      template: './public/index.html',\r\n      chunks: ['main'],\r\n      hash: true,\r\n    }),\r\n    /**\r\n     * Plugin: OptimizeCssAssetsPlugin\r\n     * Description: Minifies resulted CSS. Removes duplicated SCSS imports.\r\n     *\r\n     * @see https://github.com/NMFR/optimize-css-assets-webpack-plugin\r\n     */\r\n    new OptimizeCssAssetsPlugin(),\r\n  ],\r\n};\r\n\n\n//# sourceURL=webpack:///./webpack/config/webpack.config.base.js?");

/***/ }),

/***/ "./webpack/config/webpack.config.dev.js":
/*!**********************************************!*\
  !*** ./webpack/config/webpack.config.dev.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const webpack = __webpack_require__(/*! webpack */ \"webpack\");\r\n\r\nconst DEV_SERVER_PORT = 3000;\r\nconst DEV_SERVER_PUBLIC_PATH = '/';\r\n\r\nmodule.exports = {  \r\n  mode: 'development',\r\n  devtool: 'source-map',\r\n  devServer: {\r\n    port: DEV_SERVER_PORT,\r\n    publicPath: DEV_SERVER_PUBLIC_PATH,\r\n    historyApiFallback: true,\r\n    https: false,\r\n  },\r\n  plugins: [new webpack.HotModuleReplacementPlugin()],\r\n};\r\n\n\n//# sourceURL=webpack:///./webpack/config/webpack.config.dev.js?");

/***/ }),

/***/ "./webpack/config/webpack.config.prod.js":
/*!***********************************************!*\
  !*** ./webpack/config/webpack.config.prod.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { CleanWebpackPlugin } = __webpack_require__(/*! clean-webpack-plugin */ \"clean-webpack-plugin\");\r\n\r\nmodule.exports = {\r\n  mode: 'production',\r\n  optimization: {\r\n    minimize: true,\r\n  },\r\n  plugins: [new CleanWebpackPlugin({})],\r\n};\r\n\n\n//# sourceURL=webpack:///./webpack/config/webpack.config.prod.js?");

/***/ }),

/***/ "./webpack/webpack.config.js":
/*!***********************************!*\
  !*** ./webpack/webpack.config.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const yargs = __webpack_require__(/*! yargs */ \"yargs\");\r\nconst webpackMerge = __webpack_require__(/*! webpack-merge */ \"webpack-merge\");\r\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\r\n\r\nconst baseConfig = __webpack_require__(/*! ./config/webpack.config.base */ \"./webpack/config/webpack.config.base.js\");\r\nconst devConfig = __webpack_require__(/*! ./config/webpack.config.dev */ \"./webpack/config/webpack.config.dev.js\");\r\nconst prodConfig = __webpack_require__(/*! ./config/webpack.config.prod */ \"./webpack/config/webpack.config.prod.js\");\r\n\r\nmodule.exports = () => {\r\n  const { env } = yargs.argv;\r\n  const isProduction = env === 'production';\r\n  if (!isProduction) {\r\n    baseConfig.entry.main.unshift('react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true');\r\n  }  \r\n  baseConfig.plugins.push(\r\n    new webpack.DefinePlugin({\r\n      'env.production': JSON.stringify(isProduction),\r\n    })\r\n  );\r\n  return webpackMerge(baseConfig, isProduction ? prodConfig : devConfig);\r\n};\r\n\n\n//# sourceURL=webpack:///./webpack/webpack.config.js?");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@fortawesome/react-fontawesome\");\n\n//# sourceURL=webpack:///external_%22@fortawesome/react-fontawesome%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "clean-webpack-plugin":
/*!***************************************!*\
  !*** external "clean-webpack-plugin" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"clean-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22clean-webpack-plugin%22?");

/***/ }),

/***/ "connected-react-router":
/*!*****************************************!*\
  !*** external "connected-react-router" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connected-react-router\");\n\n//# sourceURL=webpack:///external_%22connected-react-router%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"history\");\n\n//# sourceURL=webpack:///external_%22history%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "optimize-css-assets-webpack-plugin":
/*!*****************************************************!*\
  !*** external "optimize-css-assets-webpack-plugin" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"optimize-css-assets-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22optimize-css-assets-webpack-plugin%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-actions":
/*!********************************!*\
  !*** external "redux-actions" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-actions\");\n\n//# sourceURL=webpack:///external_%22redux-actions%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ }),

/***/ "webpack-merge":
/*!********************************!*\
  !*** external "webpack-merge" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-merge\");\n\n//# sourceURL=webpack:///external_%22webpack-merge%22?");

/***/ }),

/***/ "yargs":
/*!************************!*\
  !*** external "yargs" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"yargs\");\n\n//# sourceURL=webpack:///external_%22yargs%22?");

/***/ })

/******/ });