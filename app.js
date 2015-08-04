var express = require('express');
var nodemailer = require('nodemailer');
var fs = require('fs');
var routes = require('./routes/main');
var about = require('./routes/about');
var contact = require('./routes/contact');

var app = express();

// // respond with "Hello World!" on the homepage
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.set('view engine', 'ejs');
app.set('case sensitive routing', true);

app.locals.title = "Chad Cates";

app.use(express.static('public'));

app.use('/', routes);
app.use('/about', about);
app.use('/contact', contact);

app.use(function (req, res) {
  res.status(403).send('Unauthorized!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%d', host, port);
});