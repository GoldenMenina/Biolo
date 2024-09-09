"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/send-email";
exports.ids = ["pages/api/send-email"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/send-email.js":
/*!*********************************!*\
  !*** ./pages/api/send-email.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n// pages/api/send-email.js\n\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    const {\n      username,\n      email,\n      phone,\n      subject,\n      message\n    } = req.body;\n\n    try {\n      // Create a transporter\n      let transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n        host: \"mail.emainvest.ao\",\n        port: 465,\n        secure: true,\n        // true for 465, false for other ports\n        auth: {\n          user: \"geral@emainvest.ao\",\n          // generated ethereal user\n          pass: \"geralEmainvest2O22\" // generated ethereal password\n\n        }\n      }); // Set up email data\n\n      let mailOptions = {\n        from: email,\n        to: 'marcioqui3@gmail.com',\n        subject: subject || 'No subject provided',\n        text: `Name: ${username}\\nPhone: ${phone}\\nMessage: ${message}`\n      }; // Send the email\n\n      let info = await transporter.sendMail(mailOptions);\n      res.status(200).json({\n        success: true,\n        message: `Email sent: ${info.response}`\n      });\n    } catch (error) {\n      res.status(500).json({\n        success: false,\n        message: error.message\n      });\n    }\n  } else {\n    res.status(405).json({\n      success: false,\n      message: 'Only POST requests allowed'\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZC1lbWFpbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBO0FBRWUsZUFBZUMsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzlDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFVBQU07QUFBRUMsTUFBQUEsUUFBRjtBQUFZQyxNQUFBQSxLQUFaO0FBQW1CQyxNQUFBQSxLQUFuQjtBQUEwQkMsTUFBQUEsT0FBMUI7QUFBbUNDLE1BQUFBO0FBQW5DLFFBQStDUCxHQUFHLENBQUNRLElBQXpEOztBQUVBLFFBQUk7QUFDRjtBQUNBLFVBQUlDLFdBQVcsR0FBR1gsaUVBQUEsQ0FBMkI7QUFDM0NhLFFBQUFBLElBQUksRUFBRSxtQkFEcUM7QUFFM0NDLFFBQUFBLElBQUksRUFBRSxHQUZxQztBQUczQ0MsUUFBQUEsTUFBTSxFQUFFLElBSG1DO0FBRzdCO0FBQ2RDLFFBQUFBLElBQUksRUFBRTtBQUNKQyxVQUFBQSxJQUFJLEVBQUUsb0JBREY7QUFDd0I7QUFDNUJDLFVBQUFBLElBQUksRUFBRSxvQkFGRixDQUV3Qjs7QUFGeEI7QUFKcUMsT0FBM0IsQ0FBbEIsQ0FGRSxDQVlGOztBQUNBLFVBQUlDLFdBQVcsR0FBRztBQUNoQkMsUUFBQUEsSUFBSSxFQUFFZCxLQURVO0FBRWhCZSxRQUFBQSxFQUFFLEVBQUUsc0JBRlk7QUFHaEJiLFFBQUFBLE9BQU8sRUFBRUEsT0FBTyxJQUFJLHFCQUhKO0FBSWhCYyxRQUFBQSxJQUFJLEVBQUcsU0FBUWpCLFFBQVMsWUFBV0UsS0FBTSxjQUFhRSxPQUFRO0FBSjlDLE9BQWxCLENBYkUsQ0FvQkY7O0FBQ0EsVUFBSWMsSUFBSSxHQUFHLE1BQU1aLFdBQVcsQ0FBQ2EsUUFBWixDQUFxQkwsV0FBckIsQ0FBakI7QUFFQWhCLE1BQUFBLEdBQUcsQ0FBQ3NCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxRQUFBQSxPQUFPLEVBQUUsSUFBWDtBQUFpQmxCLFFBQUFBLE9BQU8sRUFBRyxlQUFjYyxJQUFJLENBQUNLLFFBQVM7QUFBdkQsT0FBckI7QUFDRCxLQXhCRCxDQXdCRSxPQUFPQyxLQUFQLEVBQWM7QUFDZDFCLE1BQUFBLEdBQUcsQ0FBQ3NCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxRQUFBQSxPQUFPLEVBQUUsS0FBWDtBQUFrQmxCLFFBQUFBLE9BQU8sRUFBRW9CLEtBQUssQ0FBQ3BCO0FBQWpDLE9BQXJCO0FBQ0Q7QUFDRixHQTlCRCxNQThCTztBQUNMTixJQUFBQSxHQUFHLENBQUNzQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFLEtBQVg7QUFBa0JsQixNQUFBQSxPQUFPLEVBQUU7QUFBM0IsS0FBckI7QUFDRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3NlbmQtZW1haWwuanM/NmE2OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvc2VuZC1lbWFpbC5qc1xuXG5pbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgY29uc3QgeyB1c2VybmFtZSwgZW1haWwsIHBob25lLCBzdWJqZWN0LCBtZXNzYWdlIH0gPSByZXEuYm9keTtcblxuICAgIHRyeSB7XG4gICAgICAvLyBDcmVhdGUgYSB0cmFuc3BvcnRlclxuICAgICAgbGV0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgICAgICBob3N0OiBcIm1haWwuZW1haW52ZXN0LmFvXCIsXG4gICAgICAgIHBvcnQ6IDQ2NSxcbiAgICAgICAgc2VjdXJlOiB0cnVlLCAvLyB0cnVlIGZvciA0NjUsIGZhbHNlIGZvciBvdGhlciBwb3J0c1xuICAgICAgICBhdXRoOiB7XG4gICAgICAgICAgdXNlcjogXCJnZXJhbEBlbWFpbnZlc3QuYW9cIiwgLy8gZ2VuZXJhdGVkIGV0aGVyZWFsIHVzZXJcbiAgICAgICAgICBwYXNzOiBcImdlcmFsRW1haW52ZXN0Mk8yMlwiLCAvLyBnZW5lcmF0ZWQgZXRoZXJlYWwgcGFzc3dvcmRcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBTZXQgdXAgZW1haWwgZGF0YVxuICAgICAgbGV0IG1haWxPcHRpb25zID0ge1xuICAgICAgICBmcm9tOiBlbWFpbCxcbiAgICAgICAgdG86ICdtYXJjaW9xdWkzQGdtYWlsLmNvbScsXG4gICAgICAgIHN1YmplY3Q6IHN1YmplY3QgfHwgJ05vIHN1YmplY3QgcHJvdmlkZWQnLFxuICAgICAgICB0ZXh0OiBgTmFtZTogJHt1c2VybmFtZX1cXG5QaG9uZTogJHtwaG9uZX1cXG5NZXNzYWdlOiAke21lc3NhZ2V9YCxcbiAgICAgIH07XG5cbiAgICAgIC8vIFNlbmQgdGhlIGVtYWlsXG4gICAgICBsZXQgaW5mbyA9IGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zKTtcblxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBgRW1haWwgc2VudDogJHtpbmZvLnJlc3BvbnNlfWAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdPbmx5IFBPU1QgcmVxdWVzdHMgYWxsb3dlZCcgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInVzZXJuYW1lIiwiZW1haWwiLCJwaG9uZSIsInN1YmplY3QiLCJtZXNzYWdlIiwiYm9keSIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0IiwiaG9zdCIsInBvcnQiLCJzZWN1cmUiLCJhdXRoIiwidXNlciIsInBhc3MiLCJtYWlsT3B0aW9ucyIsImZyb20iLCJ0byIsInRleHQiLCJpbmZvIiwic2VuZE1haWwiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/send-email.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/send-email.js"));
module.exports = __webpack_exports__;

})();