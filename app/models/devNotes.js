module.exports = function(app){
	var mongoose = require('mongoose');
	var Todo = mongoose.model('Todos', {
		text : String,
		time : String
	});
};