const express = require('express');
const { movies, series } = require('./routes');
const cors = require('cors');
const createConnect = require('./database');
const port = 4000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/movies', movies);
app.use('/series', series);

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});


createConnect();
