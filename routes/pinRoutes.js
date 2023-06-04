const express = require('express');
const router = express.Router();
const Pin = require('../models/pin')

// Retrieve all pins from DB
router.get('/', async (req, res) => {
	try {
		const pins = await Pin.find();
		res.send(pins);
	} catch (err) {
		console.log(err);
	}
})

// Post a new pin
router.post('/create', async (req, res) => {
	try {
		const pin = new Pin(req.body);
	
		await pin.save();
		res.send(pin);
	} catch (err) {
		console.log(err);
		res.status(400);
	}
	
})

// Update a pin
router.patch('/:id', async (req, res) => {
	// Check if user is authorized first
	try {
		const updated = await Pin.findByIdAndUpdate(req.params.id, req.body, {new: true});
		res.send(updated)
	} catch (err) {
		console.log(err);
		res.send("error occured").status(400);
	}	
})

// Delete a pin
router.delete('/:id', (req, res) => {
	// Check if user is authorized first
	try {
	 	Pin.findOneAndRemove({_id: req.params.id});
		res.send("ok")
	} catch (err) {
		console.log(err);
		res.send("error occured").status(400);
	}
	
})
module.exports = router;