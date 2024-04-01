"use strict";
(() => {
var exports = {};
exports.id = 3748;
exports.ids = [3748];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 5666:
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 3227:
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ 7449:
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 7770:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports encrypt, decrypt, setEncryptedCookie, deleteCookie, getDecryptedCookie */
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5666);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
js_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const SECRET_KEY = "your-secret-key"; // Replace with your secret key

function encrypt(data) {
  const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY);
  return encryptedData.toString();
}
function decrypt(encryptedText) {
  const decryptedBytes = CryptoJS.AES.decrypt(encryptedText, SECRET_KEY);
  const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(decryptedData);
}
function setEncryptedCookie(name, value) {
  const encryptedValue = encrypt(value);
  Cookies.set(name, encryptedValue, {
    expires: 7
  });
}
function deleteCookie(name) {
  Cookies.remove(name);
}
function getDecryptedCookie(name) {
  const encryptedValue = Cookies.get(name);

  if (encryptedValue) {
    const decryptedValue = decrypt(encryptedValue);
    return decryptedValue;
  }

  return null;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5927:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3227);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7449);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9742);
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2598);
/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7770);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_session__WEBPACK_IMPORTED_MODULE_5__]);
_lib_session__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({
  site: "http://localhost:3000",
  secret: "shinobi777",
  session: {
    jwt: true
  },
  providers: [next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({
    async authorize(credentials) {
      const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z;
      const usersCollection = client.db("anje").collection("usuarios");
      const user = await usersCollection.findOne({
        email: credentials.email
      });

      if (!user) {
        throw new Error("usuario não existe.");
      }

      const isValid = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_3__/* .verifyPassword */ .Gv)(credentials.password, user.password);

      if (!isValid) {
        throw new Error("verifique a senha.");
      }

      return user;
    }

  })]
}));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7513], () => (__webpack_exec__(5927)));
module.exports = __webpack_exports__;

})();