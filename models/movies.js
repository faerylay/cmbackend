const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
	name: String,
	age: Number,
	city: String,
	occupation: String,
});
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

// const mongoose = require('mongoose');

// const movieSchema = new mongoose.Schema({
// 	title: String,
// 	description: String,
// 	rate: Number,
// 	votes: Number,
// 	occupation: String,
// });
// const Movie = mongoose.model('Movie', movieSchema);

// module.exports = Movie;
