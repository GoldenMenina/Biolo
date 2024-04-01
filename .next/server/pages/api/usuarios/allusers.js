"use strict";
(() => {
var exports = {};
exports.id = 1795;
exports.ids = [1795];
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

/***/ 4493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2598);

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const cliente = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
  const data = req.body;
  const {
    page,
    info
  } = data;
  const perPage = 9;
  const currentPage = page || 1;
  const db = cliente.db("anje");

  try {
    const pipeline = []; // Match stage for your filter criteria

    if (info) {
      pipeline.push({
        $match: info
      });
    } // Sort by email in ascending order (modify if you want descending order)


    pipeline.push({
      $sort: {
        email: 1
      }
    }); // Skip and limit based on pagination

    pipeline.push({
      $skip: (currentPage - 1) * perPage
    });
    pipeline.push({
      $limit: perPage
    }); // Execute the aggregation pipeline

    const results = await db.collection("usuarios").aggregate(pipeline).toArray(); // Get the total count without pagination

    const total = await db.collection("usuarios").countDocuments(info); // Calculate the total number of pages

    const totalPages = Math.ceil(total / perPage);
    res.json({
      pages: totalPages,
      usuarios: results,
      inscritos: total
    });
  } catch (error) {
    console.error("Error in pagination:", error);
    res.status(500).json({
      error: "Internal Server Error"
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
var __webpack_exports__ = (__webpack_exec__(4493));
module.exports = __webpack_exports__;

})();