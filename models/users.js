const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	city: String,
	occupation: String,
});
const Movie = mongoose.model('User', userSchema);

module.exports = Movie;
