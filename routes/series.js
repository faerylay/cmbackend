const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.send('');
});
// router.get('/movies', movieController);
// router.get('/series', seriesController);
module.exports = router;
