const mongoose = require('mongoose');
const createConnect = async () => {
	try {
		const db = 'mongodb+srv://cmswebsite:faerylay1345@cluster0.kt4gi2y.mongodb.net/cmswebsite';

		mongoose
			.connect(db)
			.then(() => console.log('Connected to MongoDB...'))
			.catch(error => console.error('Could not connect to MongoDb ...', error));
	} catch (error) {}
};
module.exports = createConnect;
