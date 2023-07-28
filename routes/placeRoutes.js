const express = require('express');
const router = express.Router();
const Place = require('../models/place.js');

router.get('/', async (req, res) => {
    try {
        const places = await Place.find();
        res.json(places);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});

module.exports = router;