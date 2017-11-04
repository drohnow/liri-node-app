var request = require("request");
var fs = require('fs');
var Twitter = require('twitter');
var twitterKeys = require("./keys.js")
var Spotify = require('node-spotify-api');


var liri_Programs = process.argv[2];


if (process.argv[3] === undefined) {
	var userInput = undefined
	
}
else {
	var userInput = process.argv.slice(3).join(" ");
	//console.log(userInput)
}


//start of function myTweets() //
function myTweets() {
  var client = new Twitter(twitterKeys);

  var params = {screen_name: 'Liri15_Twit'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {

      var tweeters = tweets;
      var x = 0
      fs.appendFileSync("log.txt", "\n====================== LOG ENTRY START ====================\n")
      for (i = 0; i < 20; i++ ) {
      	    x = ++x
      	    console.log(x + ") " + tweeters[i].text + " " + "===> Tweet was created on: " + tweeters[i].created_at + "\n");
			
			fs.appendFileSync("log.txt", x + ") " + tweeters[i].text + " " + "===> Tweet was created on: " + tweeters[i].created_at + "\n")
			      
      }
      fs.appendFileSync("log.txt", "=================== LOG ENTRY COMPLETE ===================\n")
    }
  });
 
 } 
// end of function myTweets() //

//start of function movieThis() //
function movieThis() {

	if (userInput === undefined) {

		var movieName = "Mr. Nobody";


		var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";


		request(queryUrl, function(error, response, body) {

	  	if (!error && response.statusCode === 200) {

	  	fs.appendFileSync("log.txt", "\n====================== LOG ENTRY START ====================\n")
	    console.log("Title: " + JSON.parse(body).Title + "\nPlot: " + JSON.parse(body).Plot + "\nActors: " + JSON.parse(body).Actors + 
	    "\nYear: " + JSON.parse(body).Year + "\nCountry: " + JSON.parse(body).Country +
	    "\nLanguage: " + JSON.parse(body).Language)

	    fs.appendFileSync("log.txt", "Title: " + JSON.parse(body).Title + "\nPlot: " + JSON.parse(body).Plot + "\nActors: " + JSON.parse(body).Actors + 
	    "\nYear: " + JSON.parse(body).Year + "\nCountry: " + JSON.parse(body).Country +
	    "\nLanguage: " + JSON.parse(body).Language)

	      function fnRatings() {
	        var ratings = JSON.parse(body).Ratings

	       for (i = 0; i < ratings.length; i++) {
	        if (JSON.parse(body).Ratings[i].Source === "Rotten Tomatoes") {
	          var x = JSON.parse(body).Ratings[i].Value;
	          
	          console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[i].Value)
	          fs.appendFileSync("log.txt", "Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[i].Value)
	          
	         } 

	        }
	        if (x === undefined) {
	          console.log("Rotten Tomatoes Rating: None");
	          fs.appendFileSync("log.txt", "Rotten Tomatoes Rating: None\n")
	        }
	          
	       }

	   	fnRatings();

	   	fs.appendFileSync("log.txt", "\n====================== LOG ENTRY COMPLETE ==================\n");
	  		}


		});

	} 
	  else {
	var movieName = userInput;


	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";


	request(queryUrl, function(error, response, body) {

	  // If the request is successful
	  if (!error && response.statusCode === 200) {

	  	fs.appendFileSync("log.txt", "\n====================== LOG ENTRY START ====================\n");

	    console.log("Title: " + JSON.parse(body).Title + "\nPlot: " + JSON.parse(body).Plot + "\nActors: " + JSON.parse(body).Actors + 
	    "\nYear: " + JSON.parse(body).Year + "\nCountry: " + JSON.parse(body).Country +
	    "\nLanguage: " + JSON.parse(body).Language)


	   fs.appendFileSync("log.txt", "Title: " + JSON.parse(body).Title + "\nPlot: " + JSON.parse(body).Plot + "\nActors: " + JSON.parse(body).Actors + 
	    "\nYear: " + JSON.parse(body).Year + "\nCountry: " + JSON.parse(body).Country +
	    "\nLanguage: " + JSON.parse(body).Language)

	      function fnRatings() {
	        var ratings = JSON.parse(body).Ratings;

	       for (i = 0; i < ratings.length; i++) {
	        if (JSON.parse(body).Ratings[i].Source === "Rotten Tomatoes") {
	          var x = JSON.parse(body).Ratings[i].Value;
	          
	          console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[i].Value);
	          fs.appendFileSync("log.txt", "Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[i].Value);
	          
	         } 

	        }
	        if (x === undefined) {
	          console.log("Rotten Tomatoes Rating: None");
	          fs.appendFileSync("log.txt", "\nRotten Tomatoes Rating: None");
	        }
	          
	       }

	   fnRatings();
	   fs.appendFileSync("log.txt", "\n====================== LOG ENTRY COMPLETE ==================\n")	   	
	  }


	});
  }
}
// end of function movieThis() //

// start of function spotifyThis() //
function spotifyThis() {

	if (userInput === undefined) {
		var spotify = new Spotify({
    	id: '63ecefedb61d454aaf1c009d37da4df0',
    	secret: '3dec1c715d2740ca93b677606c56c49f',
  		});
   
	  spotify
	    .search({ type: 'track', query: "The Sign", limit: 10 })
	    .then(function(response) {

	     fs.appendFileSync("log.txt", "\n====================== LOG ENTRY START ====================\n")	

	     var nameArtist = response.tracks.items[8].artists[0].name;
	     var nameSong = response.tracks.items[8].name;
	     var nameAlbum = response.tracks.items[8].album.name;
	     var namePreviewURL = response.tracks.items[8].preview_url;

	     console.log("Name of Song: " + nameSong);
	     console.log("Name of Band/Artist: " + nameArtist);
	     console.log("Album Name: " + nameAlbum);
	     console.log("Preview URL: " + namePreviewURL);

	     fs.appendFileSync("log.txt", "Name of Song: " + nameSong + "\n");
	     fs.appendFileSync("log.txt", "Name of Band/Artist: " + nameArtist + "\n");
	     fs.appendFileSync("log.txt", "Album Name: " + nameAlbum + "\n");
	     fs.appendFileSync("log.txt", "Preview URL: " + namePreviewURL + "\n");


	     fs.appendFileSync("log.txt", "===================== LOG ENTRY COMPLETE ==================\n")
	     
	    })
	    .catch(function(err) {
	      console.log(err);
    	});
	}
	else {
		 var spotify = new Spotify({
	    id: '63ecefedb61d454aaf1c009d37da4df0',
	    secret: '3dec1c715d2740ca93b677606c56c49f',
	  	});
	   
	  spotify
	    .search({ type: 'track', query: userInput, limit: 1 })
	    .then(function(response) {
	    
	    fs.appendFileSync("log.txt", "\n====================== LOG ENTRY START ====================\n")

	     var nameArtist = response.tracks.items[0].artists[0].name;
	     var nameSong = response.tracks.items[0].name;
	     var nameAlbum = response.tracks.items[0].album.name;
	     var namePreviewURL = response.tracks.items[0].preview_url;
	     console.log("Name of Song: " + nameSong);
	     console.log("Name of Band/Artist: " + nameArtist);
	     console.log("Album Name: " + nameAlbum);
	     console.log("Preview URL: " + namePreviewURL);

	     fs.appendFileSync("log.txt", "Name of Song: " + nameSong + "\n");
	     fs.appendFileSync("log.txt", "Name of Band/Artist: " + nameArtist + "\n");
	     fs.appendFileSync("log.txt", "Album Name: " + nameAlbum + "\n");
	     fs.appendFileSync("log.txt", "Preview URL: " + namePreviewURL + "\n");


	     fs.appendFileSync("log.txt", "====================== LOG ENTRY COMPLETE ==================\n")
	    })
	    .catch(function(err) {
	    console.log(err);
	    });
	}
}
// end of function spotifyThis() //


// start of function doWIS() //

function doWIS() {

	fs.readFile("random.txt", "utf8", function(error, data) {

		if (error) {
    		return console.log("error, somwthing went wrong :(");
  		}


  		if (data != "my-tweets") {

	  		var dataSplit = data.split(",");

	  		liri_Programs = dataSplit[0]
			userInput = dataSplit[1]

		} else {
			liri_Programs = data.trim();
		}

		
		if (liri_Programs === "spotify-this-song") {

			spotifyThis(userInput);
		}	

		if (liri_Programs === "my-tweets") {

			myTweets();
		
		}	

		if (liri_Programs === "movie-this") {

		
				movieThis(userInput);
		}



	})

}


//choose which Liri program to run //
switch (liri_Programs) {
    case 'my-tweets': //type my-tweets
        myTweets();
        break;
    case 'movie-this': //type movie-this 'movie_name'
        movieThis(userInput);
        break;
    case 'spotify-this-song': //type spotify-this-song 'song_name'
        spotifyThis(userInput); 
        break;
    case 'do-what-it-says':
        doWIS();
        break;
}