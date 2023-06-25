const express = require('express');
const router = express.Router();
const {getRoute, planTrip} = require('../controllers/tripController')

// Generates a route from an origin to a destination
router.get('/getRoute', getRoute);

// Finds interesting places along a route and creates a new route to visit them
router.get('/planTrip', planTrip);

module.exports = router;