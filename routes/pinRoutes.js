const express = require('express');
const router = express.Router();
const Pin = require('../models/pin')

// Retrieve all pins from DB
router.get('/', async (req, res) => {
	try {
		const pins = await Pin.find();
		res.send(pins);
	} catch (err) {
		console.log(err)
	}
	
})

// Post a new pin
router.post('/create', async (req, res) => {
	try {
		const pin = new Pin({
			name: req.body.name,
			description: req.body.description,
			author: req.body.author,
			category: req.body.category,
			tags: req.body.tags,
			images: req.body.images,
			location: req.body.location
		});
	
		await pin.save();
		res.redirect('/');
	} catch (err) {
		console.log(err);
		res.status(400)
	}
	
})