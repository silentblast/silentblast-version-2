const express = require('express');
const app = express();

const pug = require('pug');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.send('Hello World!')
})


var port = 8080;
app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})