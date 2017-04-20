var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan')
var cors = require('cors')
var passport = require('passport');

var app = express()

// const users = require('./routes/users');
// const users = require('./routes/users');

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

// app.use('/api/users', users)
// app.use('/api/users', users)


app.listen(3000, function () {
  console.log('app listening on port 3000!');
});

module.exports = app
