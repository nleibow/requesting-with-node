var get = require("./movie.js");

var threeFavouriteMovies = ["Alien", "Frozen", "Pulp Fiction"];


threeFavouriteMovies.forEach(function(film){
	get(film);
});