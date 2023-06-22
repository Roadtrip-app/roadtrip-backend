const express = require('express');
const router = express.Router();
const {Client} = require('@googlemaps/google-maps-services-js');
const client = new Client({});

router.get('/generate-route', async (req, res) => {
    console.log(req.query)
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

module.exports = router;