var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// Server Connect
mongoose.connect('mongodb://acspock:herbert@proximus.modulusmongo.net:27017/yguG5yra'); // connect to mongoDB database on modulus.io

var Todo = mongoose.model('Todos', {
	text : String,
	time : String,
	done : false
	});

// Define routes
require('./app/routes/mainRoute')(app);
//require('./app/routes/devRoute')(app);

app.get('/api/todos', function(req, res){

	// use mongoose to get all todos in the databse
	Todo.find(function(err, todos){

		// if there is an error retrieving, send the error. nothiong after res.send(err) will execute
		if (err){
			res.send(err);
		}
		res.json(todos)
	});
});

// create a todo and send back all todos after creation

app.post('/api/todos', function(req, res){

	//create a todo, information comes from AJAX request from Angular
	Todo.create({
		text : req.body.text,
		time : req.body.time,
		done : false
	}, function(err, todo){
		if(err){
			res.send(err);
		}

		Todo.find(function(err, todos){
			if(err){
				res.send(err)
			}
			res.json(todos);
		});
	});

});

// delete a todo

app.delete('/api/todos/:todo_id', function(req, res){
	Todo.remove({
		_id : req.params.todo_id
	}, function(err, todo){
		if(err){
			res.send(err);
		}

		//get and return all the todos after you create another
		Todo.find(function(err, todos){
			if(err){
				res.send(err);
			}
			res.json(todos)
		});
	});
});


// App port for Dev
app.listen(5000, function(){
	console.log('Magic happens on 5000');
});

exports = module.exports = app;