var request = require("request");

var action = process.argv[2];
var value = process.argv[3];
console.log(value)



function fnTest(value) {

}



function spotifyThis() {
  var Spotify = require('node-spotify-api');
   
  var spotify = new Spotify({
    id: '63ecefedb61d454aaf1c009d37da4df0',
    secret: '3dec1c715d2740ca93b677606c56c49f',
  });
   
  spotify
    .search({ type: 'track', query: value, limit: 1 })
    .then(function(response) {
      //console.log(response.tracks);
     var nameArtist = response.tracks.items[0].artists[0].name;
     var nameSong = response.tracks.items[0].name
     console.log(nameArtist)
     console.log(nameSong)
     var nameAlbum = response.tracks.items[0].album.name
     console.log(nameAlbum);
    })
    .catch(function(err) {
      console.log(err);
    });
}


  switch (action) {
      case 'mytweets':
          myTweets();
          break;
      case 'spotify-this-song':
          spotifyThis(value);
          break;
      case 'fnTest':
          fnTest(value);
          break;
      case 'random':
          random();
          break;
  }

