const {Client} = require('@googlemaps/google-maps-services-js');
const client = new Client({});

async function generateRoute(origin, destination, stops) {
    const params = {
        origin: origin,
        destination: destination,
        departure_time: "now",
        key: process.env.GOOGLE_MAPS_API_KEY,
    }

    const waypoints = stops == null ? null : await stops.map((waypoint) => waypoint.coordinates)
    waypoints == null ? null : params.waypoints = waypoints
    
    const response = await client.directions({params: params});
    return response.data;
}

module.exports = {generateRoute}