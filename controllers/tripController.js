const {generateRoute} = require('../services/RouteService');
const {generateROIs, findPOIs} = require('../services/TripService')

const getRoute = (async (req, res) => {
    try {
        const route = await generateRoute(req.query.origin, req.query.destination, null)
        res.send(route.data)
    } catch(err) {
        console.log(err)
    }
})

const planTrip = (async (req, res) => {
    try {
        const initialRoute = await generateRoute(req.query.origin, req.query.destination, null);
        const regionsOfInterest = await generateROIs(initialRoute.routes[0], req.query.stops);
        const routeStops = await findPOIs(regionsOfInterest, req.query.radius);
        res.send({origin: req.query.origin, destination: req.query.destination, locations: routeStops})
    } catch(err) {
        console.log(err)
    }
})

module.exports = {getRoute, planTrip}
