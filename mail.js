const nodemailer = require('nodemailer');
// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport('smtps://${process.env.GMAIL_ADDRESS}:${process.env.GMAIL_PASSWORD}@smtp.gmail.com');

// setup e-mail data with unicode symbols
const mailOptions = {
    from: '"Discord Bot" <blaze.imba@gmail.com>', // sender address
    to: 'kwerkee12@gmail.com', // list of receivers
    subject: '✖ Discord Bot Has Crashed ✖', // Subject line
    text: 'Hello world ?', // plaintext body
};

module.exports = {
    transporter, mailOptions
}