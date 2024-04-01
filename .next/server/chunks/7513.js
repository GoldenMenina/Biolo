"use strict";
exports.id = 7513;
exports.ids = [7513];
exports.modules = {

/***/ 9742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gv": () => (/* binding */ verifyPassword),
/* harmony export */   "c_": () => (/* binding */ hashPassword)
/* harmony export */ });
/* unused harmony export auth */
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);


async function hashPassword(password) {
  const hashedPassword = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 12);
  return hashedPassword;
}
async function verifyPassword(password, hashedPassword) {
  const isValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compare)(password, hashedPassword);
  return isValid;
}
async function auth(req, res) {
  const session = await getSession({
    req
  });

  if (session) {
    res.json({
      content: "ok"
    });
  } else {
    res.json({
      error: "error"
    });
  }
}

/***/ }),

/***/ 2598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const uri = "mongodb+srv://wolf:shinobi777@glabcluster.k4kiylg.mongodb.net/?retryWrites=true&w=majority";
const options = {};
let client;
let clientPromise;

if (false) {}

if (false) {} else {
  // In production mode, it's best to not use a global variable.
  client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);
  clientPromise = client.connect();
} // Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);

/***/ })

};
;