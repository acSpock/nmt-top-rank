module.exports = function(app){

	app.get('/home/:sandy', function(req, res){
		res.send(req.params.sandy + 1);
	});

	
};