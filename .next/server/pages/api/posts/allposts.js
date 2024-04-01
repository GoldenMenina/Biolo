"use strict";
(() => {
var exports = {};
exports.id = 5658;
exports.ids = [5658];
exports.modules = {

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

/***/ 9466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2598);

async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({
      message: "Method Not Allowed"
    });
    return;
  }

  try {
    const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
    const db = client.db("anje");
    const result = await db.collection("posts").aggregate([{
      $lookup: {
        from: "usuarios",
        localField: "email",
        foreignField: "email",
        as: "user_info"
      }
    }, {
      $unwind: "$user_info"
    }, {
      $project: {
        _id: 1,
        avatar: "$user_info.avatar",
        imageUrl: 1,
        content: 1,
        user: {
          name: "$user_info.nome",
          membership: "$user_info.classe",
          tipo: "$user_info.tipo"
        },
        timestamp: 1,
        comments: 1,
        likes: 1,
        email: 1
      }
    }, {
      $sort: {
        timestamp: -1
      } // Sort by timestamp in descending order (latest first)

    }]).toArray();
    res.status(200).json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9466));
module.exports = __webpack_exports__;

})();