//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var request = require('request');

//Initialize dependencies
var app = express();
var PORT = process.env.port || 3000;

//Use middleware morgan and body parser with app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
		extended: false
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
	type:'application/vnd/api+json'
}));

//Make a public a static directory
app.use(express.static('public'));

//Routes
require('./routes/html-routes.js')(app);

app.listen(PORT, function() {
	console.log('listening on ', PORT);
});