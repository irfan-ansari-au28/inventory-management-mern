const nodemailer = require("nodemailer");

const sendEmail = async (sent_from, send_to, reply_to, message, subject) => {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: true,
      // minVersion: "TLSv1.2"
    },
  });

  // Options for sending mail
  const options = {
    from: sent_from,
    to: send_to,
    replyTo: reply_to,
    subject: subject,
    html: message,
  };

  // send email
  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
    }
    console.log(info);
  });
};

module.exports = sendEmail;
