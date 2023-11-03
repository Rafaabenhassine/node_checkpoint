var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rafaabenhassine1@gmail.com',
    pass: 'Haroun'
  }
});

var mailOptions = {
  from: 'rafaabenhassine1@gmail.com',
  to: 'ouerfelliiachref@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'welcome my instractor!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});