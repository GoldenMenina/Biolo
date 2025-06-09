"use strict";
(() => {
var exports = {};
exports.id = 957;
exports.ids = [957];
exports.modules = {

/***/ 6286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/send-email.js
// pages/api/send-email.js

async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      username,
      email,
      phone,
      subject,
      message
    } = req.body;

    try {
      // Create a transporter
      let transporter = external_nodemailer_default().createTransport({
        host: "mail.emainvest.ao",
        port: 465,
        secure: true,
        // true for 465, false for other ports
        auth: {
          user: "geral@emainvest.ao",
          // generated ethereal user
          pass: "geralEmainvest2O22" // generated ethereal password

        }
      }); // Set up email data

      let mailOptions = {
        from: email,
        to: 'giannu@giannu.co.ao',
        subject: subject || 'No subject provided',
        text: `Name: ${username}\nPhone: ${phone}\nMessage: ${message}`
      }; // Send the email

      let info = await transporter.sendMail(mailOptions);
      res.status(200).json({
        success: true,
        message: `Email sent: ${info.response}`
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  } else {
    res.status(405).json({
      success: false,
      message: 'Only POST requests allowed'
    });
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6286));
module.exports = __webpack_exports__;

})();