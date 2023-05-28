require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const pinRoutes = require('./routes/pinRoutes');

// Init app
const app = express();

// Set up middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Set up routes
app.use('/pins', pinRoutes);

// Connect to DB and start server
mongoose.connect(process.env.MONGO_URI, { 
	useNewUrlParser: true, 
	useUnifiedTopology: true
})
.then(() => {app.listen(process.env.PORT)})
.catch((err) => {console.log(err)});