// pages/api/send-email.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, phone, subject, message } = req.body;

    try {
      // Create a transporter
      let transporter = nodemailer.createTransport({
        host: "mail.emainvest.ao",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "geral@emainvest.ao", // generated ethereal user
          pass: "geralEmainvest2O22", // generated ethereal password
        },
      });

      // Set up email data
      let mailOptions = {
        from: email,
        to: 'giannu@giannu.co.ao',
        subject: subject || 'No subject provided',
        text: `Name: ${username}\nPhone: ${phone}\nMessage: ${message}`,
      };

      // Send the email
      let info = await transporter.sendMail(mailOptions);

      res.status(200).json({ success: true, message: `Email sent: ${info.response}` });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Only POST requests allowed' });
  }
}
