"use strict";
(() => {
var exports = {};
exports.id = 5756;
exports.ids = [5756];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 9904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2598);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9742);



async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  var data = req.body;
  const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
  const newpassword = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__/* .hashPassword */ .c_)(data.password);
  data.password = newpassword;
  const db = client.db("anje");
  const existingUser = await db.collection("usuarios").findOne({
    email: data.email
  });

  if (existingUser) {
    res.status(422).json({
      message: "Email já existe"
    });
    return;
  }

  try {
    await db.collection("usuarios").insertOne(data);
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
var __webpack_exports__ = __webpack_require__.X(0, [7513], () => (__webpack_exec__(9904)));
module.exports = __webpack_exports__;

})();