var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rafaabenhassine1@gmail.com',
    pass: '0123456789'
  }
});

var mailOptions = {
  from: 'rafaabenhassine1@gmail.com',
  to: 'benhssinerafaa@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'welcome back!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});