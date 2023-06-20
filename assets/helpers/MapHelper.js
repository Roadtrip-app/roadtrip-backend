const toRadians = 0.017453292519943295; // Math.PI / 180, converts from degrees to radians
const cos = Math.cos;
const sin = Math.sin;
const EARTH_RADIUS = 6378.137;

// Calculate distance between two latitude/longitude coordinates
// Taken from https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
const dist = (point1, point2) => {
	const [lat1, lon1] = pointToRadians(point1);
	const [lat2, lon2] = pointToRadians(point2);
	
  	const a = 0.5 - cos(lat2 - lat1)/2 + 
        cos(lat1) * cos(lat2) * 
        (1 - cos(lon2 - lon1)) / 2;

	const km = 2 * EARTH_RADIUS * Math.asin(Math.sqrt(a));
	const mi = km * 0.62137
  	return [km, mi]
}

// Generate latitude and longitude that is in between point1 and point2 and is a certain distance away from point1
// Taken from https://stackoverflow.com/questions/7222382/get-lat-long-given-current-point-distance-and-bearing
const calcPoint = (point1, point2, distance) => {
	const [lat1, lon1] = pointToRadians(point1);
	const [lat2, lon2] = pointToRadians(point2);
	// Find the angle towards point2
	const bearing = calcBearing(lat1, lon1, lat2, lon2) * toRadians;
	// Compensate for earth's radius
	distance /= EARTH_RADIUS;

	// Calculate new lat/lon
	const latInRad = (Math.asin(sin(lat1) * cos(distance) + cos(lat1) * sin(distance)* cos(bearing)));
	const lonInRad = (lat1 + Math.atan2(sin(bearing) * sin(distance) * cos(lat1), cos(distance) - sin(lat1) * sin(latInRad)));

	return [latInRad / toRadians, lonInRad / toRadians]
}

// Calculate the bearing from one set of coordinates to the next
// Taken from https://stackoverflow.com/questions/46590154/calculate-bearing-between-2-points-with-javascript
const calcBearing = (lat1, lon1, lat2, lon2) => {
	y = sin((lon2 - lon1)) * cos(lat2);
	x = cos(lat1) * sin(lat2) -
		  sin(lat1) * cos(lat2) * cos((lon2 - lon1));
	bearing = Math.atan2(y, x);
	return bearing
}

const pointToRadians = (point) => {
	return [point.lat * toRadians, point.lng * toRadians]
}

module.exports = calcPoint