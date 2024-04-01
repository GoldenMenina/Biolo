"use strict";
(() => {
var exports = {};
exports.id = 9717;
exports.ids = [9717];
exports.modules = {

/***/ 6617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "@aws-sdk/client-s3"
const client_s3_namespaceObject = require("@aws-sdk/client-s3");
;// CONCATENATED MODULE: ./pages/api/amazon/uploud.js

const s3Client = new client_s3_namespaceObject.S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});
async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const formData = await req.formData();
      const file = formData.get("file");
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${Date.now()}-${file.name}`,
        // Customize file path as needed
        Body: await file.arrayBuffer(),
        ContentType: file.type
      };
      const command = new client_s3_namespaceObject.PutObjectCommand(params);
      await s3Client.send(command);
      const publicUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${params.Key}`;
      res.status(200).json({
        publicUrl
      });
    } else {
      res.setHeader("Allow", "POST");
      res.status(405).end("Method Not Allowed");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to upload file"
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
var __webpack_exports__ = (__webpack_exec__(6617));
module.exports = __webpack_exports__;

})();