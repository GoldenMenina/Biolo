"use strict";
(() => {
var exports = {};
exports.id = 3453;
exports.ids = [3453];
exports.modules = {

/***/ 8054:
/***/ ((module) => {

module.exports = require("bson");

/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

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

/***/ }),

/***/ 5433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2598);
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8054);
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bson__WEBPACK_IMPORTED_MODULE_1__);


async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;
  const {
    id
  } = data;
  const cliente = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
  const db = cliente.db("anje");
  const resul = await db.collection("posts").aggregate([// Match the post with the specified ID
  {
    $match: {
      _id: (0,bson__WEBPACK_IMPORTED_MODULE_1__.ObjectId)(id)
    }
  }, // Unwind the comments array to separate each comment into its own document
  {
    $unwind: "$comments"
  }, // Lookup the user information based on the email in each comment
  {
    $lookup: {
      from: "usuarios",
      localField: "comments.email",
      foreignField: "email",
      as: "commentUser"
    }
  }, // Project to shape the final output
  {
    $project: {
      _id: 0,
      // Exclude the _id field
      commentario: "$comments.commentario",
      // Rename the comment field
      timestamp: "$comments.timestamp",
      // Rename the timestamp field
      avatar: "$commentUser.avatar",
      // Get the avatar field from the user document
      nome: "$commentUser.nome",
      classe: "$commentUser.classe"
    }
  }]).toArray();
  res.json(resul);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5433));
module.exports = __webpack_exports__;

})();