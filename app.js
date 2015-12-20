/**
 * Module dependencies.
 */
var express  = require('express');
var connect = require('connect');
var morgan = require('morgan');
var bodyParser = require('body-parser')
var app      = express();
var port     = process.env.PORT || 8080;
// Configuration
app.use(express.static(__dirname + '/public'));
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Routes

require('./routes/routes.js')(app);

app.listen(port);

console.log('The App runs on port ' + port);
