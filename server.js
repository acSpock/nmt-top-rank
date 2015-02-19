var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(express.static(__dirname + '/public'));

// Define routes
require('./app/routes/mainRoute')(app);


// App port for Dev
app.listen(3000, function(){
	console.log('Magic happens on 3000');
});

exports = module.exports = app;