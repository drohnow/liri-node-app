var request = require("request");

var nodeArgs = process.argv;

var movieName = "";

for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {

    movieName = movieName + "+" + nodeArgs[i];
    console.log(movieName)

  }

  else {

    movieName += nodeArgs[i];

  }
}


var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
//var x

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    console.log("Title: " + JSON.parse(body).Title + "\nPlot: " + JSON.parse(body).Plot + "\nActors: " + JSON.parse(body).Actors + 
    "\nYear: " + JSON.parse(body).Year + "\nCountry: " + JSON.parse(body).Country +
    "\nLanguage: " + JSON.parse(body).Language)

       function fnRatings() {
        var ratings = JSON.parse(body).Ratings

       for (i = 0; i < ratings.length; i++) {
        if (JSON.parse(body).Ratings[i].Source === "Rotten Tomatoes") {
          var x = JSON.parse(body).Ratings[i].Value;
          //console.log(x);
          console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[i].Value)
          
         } 

        }
        if (x === undefined) {
          console.log("Rotten Tomatoes Rating: None");
        }
          
       }



       //console.log(x);

   fnRatings();

  }


});



var client_id = '63ecefedb61d454aaf1c009d37da4df0'; // Your client id
var client_secret = '3dec1c715d2740ca93b677606c56c49f'; // Your secret
//var redirect_uri = 'http://localhost:8888/callback'

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    console.log(token)
    var options = {
      //url: 'https://api.spotify.com/v1/search?query=Somewhere+I+Belong&type=track&offset=0&limit=1',
      //url: 'https://api.spotify.com/v1/tracks?query=Somewhere+I+Belong&type=track&offset=0&limit=1',
      url: "https://www.npmjs.com/package/node-spotify-api",
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
      //console.log(body);
      //var body = body.items
      var song = JSON.stringify(body)
      console.log(song)
    
    
     // console.log(response);
    });
  }
});

