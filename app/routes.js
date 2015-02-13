 // app/routes.js

// grab the nerd model we just created
var Meta = require('./models/meta');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        var my_client_id = '35c547d034a54d188c7138be55a5fe67'; // Your client id
        var my_secret = '98726d99fca94661aad8b50f7939b679'; // Your secret
        var redirect_uri = 'http://localhost:3000/callback'; // Your redirect uri

        app.get('/api/meta', function(req, res) {
            // use mongoose to get all nerds in the database
            Meta.find(function(err, meta) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(meta); // return all nerds in JSON format
            });
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

    };