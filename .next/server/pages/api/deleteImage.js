"use strict";
(() => {
var exports = {};
exports.id = 971;
exports.ids = [971];
exports.modules = {

/***/ 7064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "cloudinary"
const external_cloudinary_namespaceObject = require("cloudinary");
;// CONCATENATED MODULE: ./pages/api/deleteImage.js

external_cloudinary_namespaceObject.v2.config({
  cloud_name: "dbagu0ju8",
  api_key: "561762424759781",
  api_secret: "La4IRpy4e4iRrm7gUphZCdFtfIM"
});
async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      publicId
    } = req.body;
    const folderName = 'uploads';
    const fullPublicId = `${folderName}/${publicId}`;

    try {
      const result = await external_cloudinary_namespaceObject.v2.uploader.destroy(fullPublicId);
      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({
        error: 'Failed to delete image'
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7064));
module.exports = __webpack_exports__;

})();