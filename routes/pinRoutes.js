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
		const pin = new Pin(req.body);
	
		await pin.save();
		res.redirect('/pins');
	} catch (err) {
		console.log(err);
		res.status(400);
	}
	
})

module.exports = router;