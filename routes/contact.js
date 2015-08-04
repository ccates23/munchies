var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('templates/contact');
	var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport();
    transporter.sendMail({from: 'cates.chad@gmail', to: 'cates.chad@gmail.com', subject: 'James is a smart guy', text: 'I love big real tities'});
    console.log('kittens');
});

module.exports = router;

