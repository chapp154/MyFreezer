/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/sass/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/sass/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".animation__fadeIn--fast {\\n  animation: fadeIn 0.2s;\\n}\\n.animation__fadeIn--medium {\\n  animation: fadeIn 1s;\\n}\\n.animation__fadeIn--slow {\\n  animation: fadeIn 3s;\\n}\\n.animation__moveDown--fast {\\n  animation: moveDown 2s;\\n}\\n.animation__slideOpen--fast {\\n  animation: slideOpen 0.2s;\\n}\\n.animation__slideClose--fast {\\n  animation: slideClose 0.2s;\\n}\\n\\n*,\\n*::after,\\n*::before {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: inherit;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n}\\n\\nbody {\\n  box-sizing: border-box;\\n  background: #d9dcd6;\\n}\\n\\nbody {\\n  font-family: \\\"Lato\\\", sans-serif;\\n  font-weight: 400;\\n  line-height: 1.7;\\n}\\n\\n@keyframes moveRightToLeft {\\n  0% {\\n    transform: translateX(3rem);\\n    opacity: 0;\\n  }\\n  100% {\\n    transform: translateX(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes fadeIn {\\n  0% {\\n    opacity: 0;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes moveDown {\\n  0% {\\n    transform: translateY(0);\\n  }\\n  100% {\\n    transform: translateY(3.8rem);\\n  }\\n}\\n@keyframes slideOpen {\\n  0% {\\n    transform: scaleY(0);\\n  }\\n  100% {\\n    transform: scaleY(1);\\n  }\\n}\\n@keyframes slideClose {\\n  0% {\\n    transform: scaleY(1);\\n  }\\n  100% {\\n    transform: scaleY(0);\\n  }\\n}\\n.btn__login {\\n  transform: skewX(-25deg);\\n  padding: 1.2rem 3rem;\\n  background: #81c3d7;\\n  border-radius: 3px;\\n  outline: none;\\n  transition: all 0.2s;\\n}\\n.btn__login:hover {\\n  background-color: #3a7ca5;\\n}\\n.btn__login-text {\\n  font-size: 1.5rem;\\n  letter-spacing: 0.1rem;\\n  transform: skewX(25deg);\\n  display: inline-block;\\n  color: #16425b;\\n}\\n\\n.logo {\\n  grid-column: 2/3;\\n  grid-row: 2/3;\\n  font-size: 7rem;\\n  line-height: 1.3;\\n}\\n.logo__box {\\n  display: grid;\\n  grid-template-columns: auto auto;\\n  grid-template-rows: auto;\\n}\\n.logo__text--1 {\\n  grid-column: 1/2;\\n  justify-self: end;\\n  color: #16425b;\\n}\\n.logo__text--2 {\\n  grid-column: 2/-1;\\n  justify-self: start;\\n  color: #3a7ca5;\\n  background-color: #d9dcd6;\\n  border-radius: 0 3px 3px 0;\\n  animation: moveRightToLeft 0.3s ease-in 0s 1 backwards;\\n}\\n\\n.grid-header {\\n  display: grid;\\n  grid-template-columns: 5rem auto 5rem;\\n  grid-template-rows: 5rem auto 5rem;\\n  max-height: 20vh;\\n}\\n\\n.grid-main {\\n  display: grid;\\n  grid-template-columns: 5rem auto 5rem;\\n  grid-template-rows: 5rem auto auto 5rem;\\n  max-height: 80vh;\\n}\\n\\n.about {\\n  grid-column: 2/3;\\n  grid-row: 2/3;\\n  justify-self: center;\\n  display: none;\\n}\\n.about__container {\\n  width: 60rem;\\n  height: 40rem;\\n  border: 1px solid #928484;\\n}\\n\\n.login {\\n  grid-column: 2/3;\\n  grid-row: 3/4;\\n  justify-self: center;\\n  width: 40rem;\\n  position: relative;\\n}\\n.login__options {\\n  font-size: 2.3rem;\\n  width: 100%;\\n  text-align: center;\\n  transform: translateY(-0.5rem);\\n}\\n.login__options input {\\n  display: none;\\n}\\n.login__options > input + label {\\n  color: #a6ad9f;\\n  font-weight: 600;\\n  transition: color 0.2s;\\n  padding: 0 3rem;\\n  cursor: pointer;\\n}\\n.login__options > input + label:hover {\\n  color: #858e7b;\\n}\\n.login__options input:checked + label {\\n  color: #3a7ca5;\\n}\\n.login__options input:checked + label::after {\\n  content: attr(data-after);\\n  background: #3a7ca5;\\n  color: #3a7ca5;\\n  position: absolute;\\n  transform: translate(-100%, 3.4rem);\\n  clip-path: polygon(50% 0, 100% 60%, 0% 60%);\\n  z-index: 0;\\n  white-space: nowrap;\\n  overflow: hidden;\\n  animation: fadeIn 0.2s ease;\\n}\\n.login__body {\\n  position: relative;\\n}\\n.login__body input, .login__body button {\\n  width: 100%;\\n  padding: 1.3rem 2.3rem;\\n  text-align: center;\\n  border-radius: 5px;\\n  font-size: 1.5rem;\\n  font-weight: 600;\\n  outline: none;\\n}\\n.login__body input:not(:first-child), .login__body button:not(:first-child) {\\n  margin-top: 1rem;\\n}\\n.login__body input {\\n  background: #d9dcd6;\\n  color: #3a7ca5;\\n  border: 2px solid #3a7ca5;\\n  position: relative;\\n  z-index: 1;\\n}\\n.login__body input::placeholder {\\n  color: #3a7ca5;\\n  opacity: 0.7;\\n}\\n.login__body input:focus {\\n  background: #e6e8e4;\\n}\\n.login__body button {\\n  background: #3a7ca5;\\n  color: #f5fafc;\\n  transition: all 0.1s;\\n  border: none;\\n}\\n.login__body button:hover {\\n  background: #37769d;\\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);\\n  transform: translateY(-0.2rem);\\n}\\n.login__body button:active {\\n  transform: translateY(0rem);\\n}\\n.login__body-validation {\\n  position: absolute;\\n  transform: translate(calc(100% + 2rem), -3.5rem);\\n  z-index: 100;\\n  right: 0;\\n}\\n\\n.login-buttons {\\n  grid-column: 2/3;\\n  grid-row: 4/5;\\n  justify-self: center;\\n  display: grid;\\n  grid-template-columns: auto auto;\\n  grid-template-rows: 13.2rem;\\n  align-items: end;\\n  grid-gap: 0 15rem;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://myfreezer/./style/sass/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/js/all.js":
/*!**************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/js/all.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://myfreezer/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://myfreezer/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginInit\": () => /* binding */ loginInit\n/* harmony export */ });\n/* harmony import */ var _components_login_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/login-ui */ \"./src/components/login-ui.js\");\n\n\n\n\nconst loginInit = () => {\n    (0,_components_login_ui__WEBPACK_IMPORTED_MODULE_0__.changeLabelContent)();\n    (0,_components_login_ui__WEBPACK_IMPORTED_MODULE_0__.loginFormArrow)();\n    (0,_components_login_ui__WEBPACK_IMPORTED_MODULE_0__.getFormOption)();\n}\n\n\n//# sourceURL=webpack://myfreezer/./src/app/app.js?");

/***/ }),

/***/ "./src/components/form-validations.js":
/*!********************************************!*\
  !*** ./src/components/form-validations.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"email\": () => /* binding */ email,\n/* harmony export */   \"password1\": () => /* binding */ password1,\n/* harmony export */   \"password2\": () => /* binding */ password2,\n/* harmony export */   \"validationMsg\": () => /* binding */ validationMsg,\n/* harmony export */   \"getValidations\": () => /* binding */ getValidations\n/* harmony export */ });\n/* harmony import */ var _tools_multiple_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/multiple-selector */ \"./src/tools/multiple-selector.js\");\n\n\nlet [email, password1, password2, validationMsg] = (0,_tools_multiple_selector__WEBPACK_IMPORTED_MODULE_0__.multiSelect)([\"#email\", \"#password1\", \"#password2\", \".login__body-validation\"]);\n\n\nconst validationText = (type, input, inputEl) => {\n    switch (type) {\n        case \"email\":\n            if (input.includes(\"@\") && !input.includes(\" \")) {\n                let splitInput = input.split(\"@\");\n        \n                if (splitInput[0].length > 0 && splitInput[1].includes(\".\")) {\n                    splitInput = splitInput[1].split(\".\") \n        \n                    if (splitInput[0].length > 0 && splitInput[1].length > 0) {\n                        \n                        inputEl.style.color = \"rgba(91, 179, 101, 1)\";\n                        return \"Good\";\n                    } \n                }\n            }\n        break;\n        case \"password1\":\n    }\n    \n    console.log(\"woof\")\n\n    inputEl.style.color = \"\";\n    return \"Email is not valid\";\n}\n\nconst validationUI = (currInput) => {\n\n    currInput.addEventListener(\"focus\", (e) => {\n\n        if (validationMsg) validationMsg.remove();\n        \n        validationMsg = document.createElement(\"p\");\n        validationMsg.classList.add(\"login__body-validation\");\n        e.target.insertAdjacentElement(\"afterend\", validationMsg);\n        validationMsg.innerHTML = validationText(currInput.id, e.target.value, e.target);\n\n        currInput.addEventListener('input', (e) => validationMsg.innerHTML = validationText(currInput.id, e.target.value, e.target));\n    })\n}\n\nconst getValidations = () => validationUI(email); validationUI(password1);\n\n//# sourceURL=webpack://myfreezer/./src/components/form-validations.js?");

/***/ }),

/***/ "./src/components/login-ui.js":
/*!************************************!*\
  !*** ./src/components/login-ui.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginFormArrow\": () => /* binding */ loginFormArrow,\n/* harmony export */   \"changeLabelContent\": () => /* binding */ changeLabelContent,\n/* harmony export */   \"getFormOption\": () => /* binding */ getFormOption\n/* harmony export */ });\n/* harmony import */ var _form_validations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-validations */ \"./src/components/form-validations.js\");\n\n\n\nconst loginFormArrow = () => {\n    const elements = document.querySelectorAll(\".login-label-arrow\");\n    elements.forEach(el => {\n        el.addEventListener(\"click\", (e) => changeLabelContent(e));\n    })\n}\n\nconst changeLabelContent = (e, contentToReplace = \"Login\") => {\n    if (e) {\n        contentToReplace = e.srcElement.innerText;\n        e.target.setAttribute(\"data-after\", contentToReplace);\n        return\n    }\n    const loginBtn = document.querySelector(\".login-label-arrow:nth-child(4)\");\n    loginBtn.setAttribute(\"data-after\", contentToReplace);\n}\n\nconst getFormOption = () => {\n    document.querySelectorAll(\".login__options input\").forEach(element => {\n        element.addEventListener(\"click\", (e) => {\n            const changeForm = new FormSwitcher(e);\n            changeForm.switchFormInputs();\n            changeForm.changeBtn();\n        })\n    })\n}\n\nclass FormSwitcher {\n    constructor(formState) {\n        this.formState = formState.target.id;\n    }\n    \n    switchFormInputs() {\n        const passwordElementExist = document.getElementById(\"password2\");\n        \n        if (this.formState === \"signup\" && !passwordElementExist) {\n\n            const passwordInput = document.getElementById(\"password1\");\n\n            const newPasswordInput = passwordInput.cloneNode(false);\n            newPasswordInput.id = \"password2\";\n            newPasswordInput.setAttribute(\"placeholder\", \"Password again\");\n            newPasswordInput.classList.add(\"animation__slideOpen--fast\");\n    \n            passwordInput.insertAdjacentElement(\"afterend\", newPasswordInput);\n\n            _form_validations__WEBPACK_IMPORTED_MODULE_0__.email.classList.add(\"wuff\");\n            return \n        }\n        if (this.formState === \"login\" && passwordElementExist) {\n\n            passwordElementExist.classList.add(\"animation__slideClose--fast\")\n\n            setTimeout(() => {\n                passwordElementExist.remove();\n            }, 200);\n        }\n    }\n\n    changeBtn() {\n        const btnForm = document.getElementById(\"btn-confirm\");\n\n        this.formState === \"login\" ? btnForm.textContent = \"Login\" : btnForm.textContent = \"Register\";\n        \n    }\n}\n\n//# sourceURL=webpack://myfreezer/./src/components/login-ui.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/sass/main.scss */ \"./style/sass/main.scss\");\n/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app */ \"./src/app/app.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all */ \"./node_modules/@fortawesome/fontawesome-free/js/all.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_2__);\n// Inject Sass\n\n\n\n\n\n(0,_app_app__WEBPACK_IMPORTED_MODULE_1__.loginInit)();\n\n\n//# sourceURL=webpack://myfreezer/./src/index.js?");

/***/ }),

/***/ "./src/tools/multiple-selector.js":
/*!****************************************!*\
  !*** ./src/tools/multiple-selector.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"multiSelect\": () => /* binding */ multiSelect\n/* harmony export */ });\nconst multiSelect = (elements) => {\n    const elementArr = elements.map(element => {\n        return document.querySelector(element);\n    })\n\n    return elementArr; // const [el1, el2, el3] = multiSelect([\".wuff\", \"#meoww\", \".kwak\"]);\n}\n\n\n//# sourceURL=webpack://myfreezer/./src/tools/multiple-selector.js?");

/***/ }),

/***/ "./style/sass/main.scss":
/*!******************************!*\
  !*** ./style/sass/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/sass/main.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://myfreezer/./style/sass/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;