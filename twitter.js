var request = require("request");
var Twitter = require('twitter');
 
var client = new Twitter({
   consumer_key: 'No6yZ5ObhqRPaG4KU5x20g4Ui',
   consumer_secret: 'XUtXrWEox1XjvhCP0NILWYKlajFuATHzoiHHfeeqM61S7xvVhU',
   access_token_key: '925447064263077888-C4IYwOkduyZXrf833lH6xWcatzJFPzF',
   access_token_secret: 'WOMA4wrkRFNf50SjHXiBtByijOTolvLvmYxFx81MgAqEq',
});
 
var params = {screen_name: 'Liri15_Twit'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {

    var tweeters = tweets;
    var x = 0

    for (i = 0; i < 20; i++ ) {
    	    x = ++x
    	    console.log(x + ") " + tweeters[i].text + " " + "===> Tweet was created on: " + tweeters[i].created_at + "\n");
    }

  }
});