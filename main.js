/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./chocolate-background.jpg */ \"./src/chocolate-background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin:0;\n    padding:0;\n    box-sizing: border-box;\n}\n\nbody {\n    color: #E5AA70; \n    text-align: center;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\nnav {\n    padding:20px;\n}\n\nnav > button {\n    margin:10px; \n    height: 30px;\n    width: 50px;\n    color: #E5AA70; \n    background-color: #490206;\n    border-radius: 10px; \n    border:none; \n}\n\n.home-div, .menu-div, .about-div {\n    border-radius: 25px; \n    background-color: #7B3F00;\n    padding:10px; \n    margin: 20px 50px;\n    display: flex;\n    flex-direction: column;\n}\n\n.home-div > div, .menu-div > div, .about-div > div {\n    border: 5px solid #490206; \n    padding:0px; \n    margin: 20px; \n}\n\np {\n    padding:15px; \n}\n\nh2 {\n    padding:15px;  \n}\n\n.hours-div > ul {\n    list-style-type: none;\n    padding:15px; \n}\n\nimg {\n    height:250px;\n    width:250px; \n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAboutPage: () => (/* binding */ loadAboutPage)\n/* harmony export */ });\nfunction loadAboutPage() {\n    const contentDiv = document.querySelector(\"#content\"); \n\n    const aboutDiv = document.createElement(\"div\");\n    aboutDiv.classList.add(\"about-div\"); \n\n    const aboutHeading = document.createElement(\"h1\");\n    aboutHeading.textContent = \"About Us\"; \n\n    aboutDiv.append(aboutHeading); \n\n    const aboutMeDiv = document.createElement(\"div\"); \n    aboutMeDiv.classList.add(\"about-me-div\");\n    const aboutMeFirstPara = document.createElement(\"p\");\n    aboutMeFirstPara.textContent = \"Welcome to Tim's Tasty Truffles. I'm Timothy or Tim for short. I've had a passion for chocolates and sweet treats ever since I can remember. But something about chocolate truffles in particular always spoke to me on a deeper level.\";\n    const aboutMeSecondPara = document.createElement(\"p\");\n    aboutMeSecondPara.textContent = \"So with Tim's Tasty Truffles (or Triple T, as I like to call it), my team of chocolatiers and I bring you the tastiest, most decadent chocolate truffles and treats made from only the finest ingredients.\";\n    const aboutMeThirdPara = document.createElement(\"p\");\n    aboutMeThirdPara.textContent = \"And we specifically formulate our recipes with everyone in mind. We are proud to offer a variety of dairy-free, gluten-free, vegan, and non-GMO products. That way, everyone has the chance to savor the flavor of our delicious treats!\"; \n    aboutMeDiv.append(aboutMeFirstPara, aboutMeSecondPara, aboutMeThirdPara);\n\n    const contactUsDiv = document.createElement(\"div\");\n    contactUsDiv.classList.add(\"contact-us-div\");\n\n    const contactUsHeading = document.createElement(\"h2\");\n    contactUsHeading.textContent = \"Contact Us\"; \n\n    contactUsDiv.append(contactUsHeading); \n\n    const contactUsFirstPara = document.createElement(\"p\");\n    contactUsFirstPara.textContent = \"Have a question, comment, or concern you'd like to send to us?\";\n    const contactUsSecondPara = document.createElement(\"p\");\n    contactUsSecondPara.textContent = \"You can contact Tim's Tasty Truffles using one of the methods below:\";\n\n    const contactUsEmailPara = document.createElement(\"p\");\n    contactUsEmailPara.textContent = \"Email: customerInquiries@timstastytruffles.com\";\n    const contactUsPhonePara = document.createElement(\"p\");\n    contactUsPhonePara.textContent = \"Phone: (555) - 555 - 0880\"; \n    const contactUsFaxPara = document.createElement(\"p\");\n    contactUsFaxPara.textContent = \"Fax: (515) - 050 - 8190\"; \n\n    contactUsDiv.append(contactUsFirstPara, contactUsSecondPara, contactUsEmailPara, contactUsPhonePara, contactUsFaxPara); \n\n    aboutDiv.append(aboutMeDiv, contactUsDiv); \n    contentDiv.append(aboutDiv); \n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?\n}");

/***/ }),

/***/ "./src/chocolate-background.jpg":
/*!**************************************!*\
  !*** ./src/chocolate-background.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"54f28e24852a36c7f52c.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/chocolate-background.jpg?\n}");

/***/ }),

/***/ "./src/empty.js":
/*!**********************!*\
  !*** ./src/empty.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   emptyPage: () => (/* binding */ emptyPage)\n/* harmony export */ });\nfunction emptyPage() {\n    const contentDiv = document.querySelector(\"#content\");\n    contentDiv.textContent = \"\"; \n}\n\n \n\n//# sourceURL=webpack://restaurant-page/./src/empty.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _empty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty.js */ \"./src/empty.js\");\n/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initial.js */ \"./src/initial.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n\n\nconst homeButton = document.querySelector(\".home-button\");\nhomeButton.addEventListener(\"click\", () => {\n    (0,_empty_js__WEBPACK_IMPORTED_MODULE_1__.emptyPage)();\n    (0,_initial_js__WEBPACK_IMPORTED_MODULE_2__.loadInitialPage)(); \n});\n\nconst menuButton = document.querySelector(\".menu-button\");\nmenuButton.addEventListener(\"click\", () => {\n    (0,_empty_js__WEBPACK_IMPORTED_MODULE_1__.emptyPage)();\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.loadMenuPage)(); \n});\n\nconst aboutButton = document.querySelector(\".about-button\");\naboutButton.addEventListener(\"click\", () => {\n    (0,_empty_js__WEBPACK_IMPORTED_MODULE_1__.emptyPage)();\n    (0,_about_js__WEBPACK_IMPORTED_MODULE_4__.loadAboutPage)();\n});\n\n(0,_initial_js__WEBPACK_IMPORTED_MODULE_2__.loadInitialPage)(); \n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ }),

/***/ "./src/initial.js":
/*!************************!*\
  !*** ./src/initial.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadInitialPage: () => (/* binding */ loadInitialPage)\n/* harmony export */ });\nfunction loadInitialPage() {\n    const contentDiv = document.querySelector(\"#content\"); \n\n    const homeDiv = document.createElement(\"div\");\n    homeDiv.classList.add(\"home-div\");  \n\n    const homeHeading = document.createElement(\"h1\"); \n    homeHeading.textContent = \"Tim's Tasty Truffles\"; \n\n    const infoDiv = document.createElement(\"div\");\n    infoDiv.classList.add(\"info-div\"); \n\n    const firstInfoPara = document.createElement(\"p\"); \n    firstInfoPara.textContent = \"Welcome to Tim's Tasty Truffles, where our team of highly trained chocolatiers has worked meticulously to create an array of amazingly delectable confections to dazzle your tastebuds.\";\n    const secondInfoPara = document.createElement(\"p\"); \n    secondInfoPara.textContent = \"So please, come one, come all and have a taste of our irresistible chocolate truffles!\"\n\n    infoDiv.append(firstInfoPara, secondInfoPara); \n\n    const hoursDiv = document.createElement(\"div\");\n    hoursDiv.classList.add(\"hours-div\");\n\n    const hoursHeading = document.createElement(\"h2\");\n    hoursHeading.textContent = \"Hours\";\n\n    const hoursList = document.createElement(\"ul\");\n\n    const mondayHours = document.createElement(\"li\"); \n    mondayHours.textContent = \"Monday: 8am - 8pm\";\n    const tuesdayHours = document.createElement(\"li\"); \n    tuesdayHours.textContent = \"Tuesday: 8am - 8pm\";\n    const wednesdayHours = document.createElement(\"li\");\n    wednesdayHours.textContent = \"Wednesday: 8am - 8pm\";\n    const thursdayHours = document.createElement(\"li\");\n    thursdayHours.textContent = \"Thursday: 8am - 10pm\";\n    const fridayHours = document.createElement(\"li\");\n    fridayHours.textContent = \"Friday: 8am - 10pm\";\n    const saturdayHours = document.createElement(\"li\");\n    saturdayHours.textContent = \"Saturday: 10am - 8pm\";\n    const sundayHours = document.createElement(\"li\");\n    sundayHours.textContent = \"Sunday: 10am - 6pm\";\n   \n    hoursList.append(mondayHours, tuesdayHours, wednesdayHours, thursdayHours, fridayHours, saturdayHours, sundayHours); \n   \n    hoursDiv.append(hoursHeading); \n    hoursDiv.append(hoursList); \n\n    const addressDiv = document.createElement(\"div\");\n    addressDiv.classList.add(\"address-div\");\n\n    const addressHeading = document.createElement(\"h2\");\n    addressHeading.textContent = \"Address\";\n\n    const addressPara = document.createElement(\"p\");\n    addressPara.textContent = \"358 Truffle Trail, Truffletown, NY, 11111, United States\"; \n\n    addressDiv.append(addressHeading); \n    addressDiv.append(addressPara); \n\n    homeDiv.append(homeHeading);\n    homeDiv.append(infoDiv); \n    homeDiv.append(hoursDiv); \n    homeDiv.append(addressDiv); \n\n    contentDiv.append(homeDiv); \n}\n\n \n\n//# sourceURL=webpack://restaurant-page/./src/initial.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenuPage: () => (/* binding */ loadMenuPage)\n/* harmony export */ });\n/* harmony import */ var _milk_chocolate_truffles_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./milk-chocolate-truffles.jpg */ \"./src/milk-chocolate-truffles.jpg\");\n/* harmony import */ var _strawberry_chocolate_truffles_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strawberry-chocolate-truffles.jpg */ \"./src/strawberry-chocolate-truffles.jpg\");\n/* harmony import */ var _raspberry_chocolate_truffles_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./raspberry-chocolate-truffles.jpg */ \"./src/raspberry-chocolate-truffles.jpg\");\n\n\n\n\nfunction loadMenuPage() {\n    const contentDiv = document.querySelector(\"#content\"); \n\n    const menuDiv = document.createElement(\"div\");\n    menuDiv.classList.add(\"menu-div\"); \n\n    const menuHeading = document.createElement(\"h1\");\n    menuHeading.textContent = \"Our Menu\"; \n\n    const milkChocolateDiv = document.createElement(\"div\");\n    milkChocolateDiv.classList.add(\"milk-chocolate-div\"); \n\n    const milkChocolateHeading = document.createElement(\"h2\");\n    milkChocolateHeading.textContent = \"Milk Chocolate Ganache Truffles\"; \n    \n    const milkChocolateImage = document.createElement(\"img\");\n    milkChocolateImage.src = _milk_chocolate_truffles_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n    const milkChocolatePara = document.createElement(\"p\"); \n    milkChocolatePara.textContent = \"Our wonderfully sweet milk chocolate truffles, drizzled with an exquisite chocolate ganache.\"; \n    const milkChocolatePrice = document.createElement(\"p\");\n    milkChocolatePrice.textContent = \"$5.00\"; \n\n    milkChocolateDiv.append(milkChocolateHeading, milkChocolateImage, milkChocolatePara, milkChocolatePrice); \n\n    const strawberryChocolateDiv = document.createElement(\"div\");\n    strawberryChocolateDiv.classList.add(\"strawberry-chocolate-div\"); \n\n    const strawberryChocolateHeading = document.createElement(\"h2\");\n    strawberryChocolateHeading.textContent = \"Strawberry Dark Chocolate Truffles\";\n\n    const strawberryChocolateImage = document.createElement(\"img\");\n    strawberryChocolateImage.src = _strawberry_chocolate_truffles_jpg__WEBPACK_IMPORTED_MODULE_1__;\n\n    const strawberryChocolatePara = document.createElement(\"p\"); \n    strawberryChocolatePara.textContent = \"Elegant dark chocolate truffles, sprinkled with hazelnut pieces and topped with our fresh, all natural strawberries.\"; \n    const strawberryChocolatePrice = document.createElement(\"p\");\n    strawberryChocolatePrice.textContent = \"$5.00\"; \n\n    strawberryChocolateDiv.append(strawberryChocolateHeading, strawberryChocolateImage, strawberryChocolatePara, strawberryChocolatePrice); \n\n    const raspberryChocolateDiv = document.createElement(\"div\");\n    raspberryChocolateDiv.classList.add(\"raspberry-chocolate-div\"); \n\n    const raspberryChocolateHeading = document.createElement(\"h2\");\n    raspberryChocolateHeading.textContent = \"Raspberry Dark Chocolate Truffles (Dairy-Free)\"; \n\n    const raspberryChocolateImage = document.createElement(\"img\");\n    raspberryChocolateImage.src = _raspberry_chocolate_truffles_jpg__WEBPACK_IMPORTED_MODULE_2__;\n\n    const raspberryChocolatePara = document.createElement(\"p\");\n    raspberryChocolatePara.textContent = \"Rich dairy-free dark chocolate truffles with a candied raspberry inside and complete with pink icing on top.\"; \n    const raspberryChocolatePrice = document.createElement(\"p\");\n    raspberryChocolatePrice.textContent = \"$5.00\"; \n\n    raspberryChocolateDiv.append(raspberryChocolateHeading, raspberryChocolateImage, raspberryChocolatePara, raspberryChocolatePrice); \n\n    menuDiv.append(menuHeading, milkChocolateDiv, strawberryChocolateDiv, raspberryChocolateDiv); \n\n    contentDiv.append(menuDiv); \n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

/***/ }),

/***/ "./src/milk-chocolate-truffles.jpg":
/*!*****************************************!*\
  !*** ./src/milk-chocolate-truffles.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"a059dadc605b1bc4231b.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/milk-chocolate-truffles.jpg?\n}");

/***/ }),

/***/ "./src/raspberry-chocolate-truffles.jpg":
/*!**********************************************!*\
  !*** ./src/raspberry-chocolate-truffles.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"7e090f45da3f6d6bf068.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/raspberry-chocolate-truffles.jpg?\n}");

/***/ }),

/***/ "./src/strawberry-chocolate-truffles.jpg":
/*!***********************************************!*\
  !*** ./src/strawberry-chocolate-truffles.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"e964fd39128500de4192.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/strawberry-chocolate-truffles.jpg?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (document && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;