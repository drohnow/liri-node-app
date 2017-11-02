var action = process.argv[2];
var value = process.argv[3];

function fnTest(value) {
	console.log(value)
}


switch (action) {
    case 'mytweets':
        myTweets();
        break;
    case 'spotify':
        spotifyThis(value);
        break;
    case 'fnTest':
        fnTest(value);
        break;
    case 'random':
        random();
        break;
}