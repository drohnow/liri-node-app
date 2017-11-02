var request = require("request");

var liri_Programs = process.argv[2];
var userInput = process.argv[3];



function movieThis() {

	var movieName = userInput;


	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";


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

	   fnRatings();
	  }


	});

}









switch (liri_Programs) {
    case 'mytweets':
        myTweets();
        break;
    case 'movie-this':
        movieThis(userInput);
        break;
    case 'fnTest':
        fnTest(userInput);
        break;
    case 'random':
        random();
        break;
}