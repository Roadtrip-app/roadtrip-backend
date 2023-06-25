const express = require('express');
const router = express.Router();
const {Client} = require('@googlemaps/google-maps-services-js');
const client = new Client({});
const {testROIs} = require('../assets/objects/testObjects');
const {findPOIs} = require('../assets/helpers/LocationGenerator');
router.get('/generate-route', async (req, res) => {
    const params = {
        origin: req.query.origin,
        destination: req.query.destination,
        departure_time: "now",
        key: process.env.GOOGLE_MAPS_API_KEY,
    }

    client.directions({params: params})
    .then((route) => {
        res.send(route.data);
    })
    .catch((err) => {
        console.log(err)
    })
})

router.get('/find-places', async (req, res) => {
    const points = await findPOIs(testROIs, 2000)
    res.send(points)
})
module.exports = router;