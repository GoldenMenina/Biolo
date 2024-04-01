"use strict";
exports.id = 6836;
exports.ids = [6836];
exports.modules = {

/***/ 6836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendEmailAndAppend": () => (/* binding */ sendEmailAndAppend)
/* harmony export */ });
const nodemailer = __webpack_require__(5184);

const Imap = __webpack_require__(2390);

const {
  simpleParser
} = __webpack_require__(8902); // Email configuration


const senderEmail = "geral@anjeangola.com";
const senderPassword = "Aldasayene1@2023";
const recipientEmail = "marcioqui3@gmail.com";
const subject = "Testing email script";
const body = "This is a test email sent from a Node.js script."; // SMTP (sending) server details

const smtpServer = "smtp.titan.email";
const smtpPort = 587; // IMAP (receiving) server details

const imapServer = "imap.titan.email";
const imapPort = 993;
async function sendEmailAndAppend(req) {
  try {
    // Create a nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: smtpServer,
      port: smtpPort,
      auth: {
        user: senderEmail,
        pass: senderPassword
      }
    }); // Create the email options

    const mailOptions = {
      from: senderEmail,
      to: req.email,
      subject: req.title,
      html: req.message
    }; // Send the email

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
    console.log("Info object:", info); // Append the sent email to the "Sent" folder using IMAP

    const imap = new Imap({
      user: senderEmail,
      password: senderPassword,
      host: imapServer,
      port: imapPort,
      tls: true
    });
    imap.once("ready", () => {
      imap.openBox("Sent", true, err => {
        if (err) {
          console.error('Error opening "Sent" folder:', err);
          imap.end();
          return;
        } // Create the email message as MIMEText


        const emailMessage = `From: ${senderEmail}\r\nTo: ${recipientEmail}\r\nSubject: ${subject}\r\n\r\n${body}`; // Append the sent email to the "Sent" folder

        imap.append(emailMessage, {
          mailbox: "Sent"
        }, appendErr => {
          if (appendErr) {
            console.error('Error appending email to "Sent" folder:', appendErr);
          } else {
            console.log('Email appended to "Sent" folder.');
          }

          imap.end();
        });
      });
    });
    imap.once("error", imapErr => {
      console.error("IMAP Error:", imapErr);
    });
    imap.connect();
  } catch (error) {
    console.error("Error sending email:", error);
  }
} // Call the function to send the email and append it to the "Sent" folder

sendEmailAndAppend();

/***/ })

};
;