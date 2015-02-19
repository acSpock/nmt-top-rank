module.exports = function(app){

	//spotify api auth
	var clientId = '35c547d034a54d188c7138be55a5fe67'; // Your client id
	var clientSecret = '98726d99fca94661aad8b50f7939b679'; // Your secret
	var redirectUri = 'http://localhost:3000/home'; // Your redirect uri
	var SpotifyWebApi = require('spotify-web-api-node');

	// credentials are optional 
	var spotifyApi = new SpotifyWebApi({
		clientId : clientId,
		clientSecret : clientSecret,
		redirectUri : redirectUri
	});

	/*spotifyApi.clientCredentialsGrant()
		.then(function(data) {
			console.log('The access token expires in ' + data['expires_in']);
			console.log('The access token is ' + data['access_token']);
		 
			// Save the access token so that it's used in future calls 
			spotifyApi.setAccessToken(data['access_token']);



		  }, function(err) {
				console.log('Something went wrong when retrieving an access token', err);
		  });*/


	app.get('/api/nmt', function(req, res) {

		spotifyApi.getPlaylist('dcarter42', '40uzPnFuQkMzQFWLkJivxp').then(function(data) {
			console.log('Some information about this playlist', data);
			res.send(data);
		}, function(err) {
			console.log('Something went wrong!', err);
		});

		/*spotifyApi.getPlaylist(user, uri).then(function(data) {
			console.log('Some information about this playlist', data);
			res.send(data);
		}, function(err) {
			console.log('Something went wrong!', err);
		});*/


	});	


};