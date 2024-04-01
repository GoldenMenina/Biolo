"use strict";
(() => {
var exports = {};
exports.id = 9622;
exports.ids = [9622,1406];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 8054:
/***/ ((module) => {

module.exports = require("bson");

/***/ }),

/***/ 2390:
/***/ ((module) => {

module.exports = require("imap");

/***/ }),

/***/ 8902:
/***/ ((module) => {

module.exports = require("mailparser");

/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 9722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9742);
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2598);
/* harmony import */ var _email_em__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6836);
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8054);
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bson__WEBPACK_IMPORTED_MODULE_3__);






async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
  const db = client.db("anje");
  const now = new Date();
  const existingUser = await db.collection("usuarios").findOne({
    email: req.body.email
  });

  if (existingUser) {
    res.status(200).json({
      message: "Email já existe"
    });
    console.log(existingUser);
    return;
  }

  try {
    await db.collection("usuarios").insertOne(req.body);
    res.status(200).json({
      message: "success"
    });
  } catch (error) {
    console.log(error);
    res.status(422).json({
      message: "Houve um erro!"
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7513,6836], () => (__webpack_exec__(9722)));
module.exports = __webpack_exports__;

})();