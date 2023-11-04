const express = require('express');
const Movie = require('../models/movies');
const router = express.Router();

router.put('/editmovie', async (req, res) => {
	const idToUpdate = req.query.id;
	const updatedData = req.body;
	const updatedMovie = await Movie.findByIdAndUpdate(
		idToUpdate,
		{
			name: updatedData.name,
			age: +updatedData.age,
			city: updatedData.city,
			occupation: updatedData.occupation,
		},
		{ new: true }
	);

	res.status(201).json(updatedMovie);
});
router.get('/', async (req, res) => {
	const movies = await Movie.find({});
	res.status(200).json(movies);
});
router.delete('/deletemovie', async (req, res) => {
	const id = req.query.id;
	await Movie.findByIdAndDelete({ _id: id });
	res.status(201).json('Successfully Deleted movie');
});

router.post('/addmovie', async (req, res) => {
	const data = req.body;
	const saveMovie = new Movie({
		name: data.name,
		age: +data.age,
		city: data.city,
		occupation: data.occupation,
	});
	await saveMovie.save();
	res.status(201).json('Successfully added movie');
});
module.exports = router;
