module.exports = function(app){

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
	
};