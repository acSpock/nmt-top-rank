module.exports = function(app){

	//spotify api auth
	var clientId = '35c547d034a54d188c7138be55a5fe67'; // Your client id
	var clientSecret = '98726d99fca94661aad8b50f7939b679'; // Your secret
	var redirectUri = 'http://localhost:3000/#/home'; // Your redirect uri
	var SpotifyWebApi = require('spotify-web-api-node');
	var scopes = ['user-read-private', 'user-read-email'];
	var state = 'mmt-state';
	var tokenExpirationEpoch;

	var credentials = {
		clientId : clientId,
		clientSecret : clientSecret,
		redirectUri : redirectUri
	};


	// credentials are optional 
	var spotifyApi = new SpotifyWebApi({
		clientId : clientId,
		clientSecret : clientSecret,
		redirectUri : redirectUri
	});

	var getAccessToken = function(){
		spotifyApi.clientCredentialsGrant().then(function(data) {
			spotifyApi.setAccessToken(data['access_token']);
			console.log('The access token is ' + data['access_token']);
			console.log('The access token expires in ' + data['expires_in']);

			tokenExpirationEpoch = (new Date().getTime() / 1000) + data['expires_in'];
			console.log('Retrieved token. It expires in ' + Math.floor(tokenExpirationEpoch - new Date().getTime() / 1000) + ' seconds!');


		}, function(err) {
			console.log('Something went wrong!', err);
		});
	};
	
	getAccessToken();

	var numberOfTimesUpdated = 0;
	var tokenExpireCheck = null;

	setInterval(function() {
	  console.log('Time left: ' + Math.floor((tokenExpirationEpoch - new Date().getTime() / 1000)) + ' seconds left!');
	  tokenExpireCheck = Math.floor((tokenExpirationEpoch - new Date().getTime() / 1000));
	  if(tokenExpireCheck <= 5){
	  	getAccessToken();
	  }

	}, 1000);


	app.post('/api/playlist', function(req, res){

		var playlist = req.body;
		var user = playlist[0].user;
		var playlistId = playlist[0].playlist

		spotifyApi.getPlaylist(user, playlistId, 100).then(function(data) {
			console.log('Some information about this playlist', data);
			res.send(data);
		}, function(err) {
			console.log('Something went wrong!', err);
		});
	});


	
	app.get('/api/searchForPlaylist', function(req, res){
		//var search = req.param
		console.log('req', req.query);


	spotifyApi.searchPlaylists(req.query.search)
	  .then(function(data) {
	    console.log('Found playlists are', data);
	    res.send(data);
	  }, function(err) {
	    console.log('Something went wrong!', err);
	  });
		
	});


};