require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const {connectDB} = require('./db')
const pinRoutes = require('./routes/pinRoutes');

// Init app
const app = express();

// Set up middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Set up routes
app.use('/pins', pinRoutes);

// Connect to production db if not testing
if (process.env.NODE_ENV !== 'test') {
	const port = process.env.PORT;
	connectDB(process.env.MONGO_URI)
	  .then(() => {
		app.listen(port, () => {
		  console.log(`Server listening on port ${port}`);
		});
	  })
	  .catch((err) => {
		console.error(`Failed to connect to database: ${err}`);
	  });
}

module.exports = app;