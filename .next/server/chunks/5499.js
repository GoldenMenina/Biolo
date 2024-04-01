"use strict";
exports.id = 5499;
exports.ids = [5499];
exports.modules = {

/***/ 5499:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N5": () => (/* binding */ setEncryptedCookie),
/* harmony export */   "QN": () => (/* binding */ getDecryptedCookie),
/* harmony export */   "kT": () => (/* binding */ deleteCookie)
/* harmony export */ });
/* unused harmony exports encrypt, decrypt */
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5666);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
js_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const SECRET_KEY = "your-secret-key"; // Replace with your secret key

function encrypt(data) {
  const encryptedData = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().AES.encrypt(JSON.stringify(data), SECRET_KEY);
  return encryptedData.toString();
}
function decrypt(encryptedText) {
  const decryptedBytes = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().AES.decrypt(encryptedText, SECRET_KEY);
  const decryptedData = decryptedBytes.toString((crypto_js__WEBPACK_IMPORTED_MODULE_1___default().enc.Utf8));
  return JSON.parse(decryptedData);
}
function setEncryptedCookie(name, value) {
  const encryptedValue = encrypt(value);
  js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set(name, encryptedValue, {
    expires: 7
  });
}
function deleteCookie(name) {
  js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove(name);
}
function getDecryptedCookie(name) {
  const encryptedValue = js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(name);

  if (encryptedValue) {
    const decryptedValue = decrypt(encryptedValue);
    return decryptedValue;
  }

  return null;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;