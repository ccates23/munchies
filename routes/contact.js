var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
	service: 'gmail',
    auth: {
        user: 'cates.chad@gmail.com',
        pass: ''
    }
});


router.post('/', function (req, res){

})

router.get('/', function (req, res) {
    res.render('templates/contact');
    transporter.sendMail({
    from: 'Lenny',
    to: 'cates.chad@gmail.com',
    subject: 'hello',
    text: 'Hey Chad! Looking good today. Sailor.'
});
    console.log('Captain Chad!')
});

module.exports = router;

