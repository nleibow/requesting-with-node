var request = require('request');


var get = function(movieTitle) {
	var movies = request('http://www.omdbapi.com/?t=' + movieTitle, function(error, response, body) {
		var titleA = JSON.parse(body);
		console.log(titleA);

	});
};	



module.exports = get;