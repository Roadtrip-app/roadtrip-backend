const axios = require('axios');
const {dist, calcPoint} = require("../utils/MapUtils");

// Takes a route and generates evenly spaced search locations along it
async function generateROIs(route, numStops) {
	let totalDistance = 0;
	route.legs.forEach(leg => {
		totalDistance += leg.distance.value
	})
	// Add ROI to start 
	let ROIs = []
	ROIs.push([route.legs[0].start_location.lat, route.legs[0].start_location.lng]);
	// Divide route by number of stops requested, subtract 1 for the start ROI
	const distBetweenROI = totalDistance / (numStops - 1); 
	let distances = {totalDistance: totalDistance, idealDistance: distBetweenROI, actualDistances: []};

	// Travel through route
	let currDist = 0;
	route.legs.forEach(leg => {
		if(currDist + leg.distance.value < distBetweenROI) {
			currDist += leg.distance.value;
		} else {
			// Go through trip steps until we're far enough from previous ROI to place another
			leg.steps.forEach(step =>  {
				currDist += step.distance.value
				while(currDist >= distBetweenROI) {
					// Keep adding ROIs in between current and next point if its far enough to fit multiple
					currDist -= distBetweenROI;
					nextROI = calcPoint(step.start_location, step.end_location, (step.distance.value - currDist) / 1000);

					// Calculate the distance from the last ROI to the one we just calculated
					const leftoverDistFromPrevROI = currDist - step.distance.value + distBetweenROI;
					const distFromCurrentToROI = dist(step.start_location, {lat: nextROI[0], lng: nextROI[1]});
					const resultDist = distFromCurrentToROI + leftoverDistFromPrevROI;

					// Keep track of distances between ROIs as well as ROI coordinates
					distances.actualDistances.push(resultDist)
					ROIs.push(nextROI);
				}
			});
		}
	})

	if(ROIs.length < numStops) {
		ROIs.push([route.legs[route.legs.length - 1].end_location.lat, route.legs[route.legs.length - 1].end_location.lng])
	}

	return ROIs
}

// Generates a list of the highest rated places in the locations provided
async function findPOIs(searchAreas, radius) {
	let pointsOfInterest = []
	await Promise.all(searchAreas.map(async (region, key) => {
		const location = await searchRadius(region[0], region[1], radius)
		pointsOfInterest.push({key: key, location: location.properties, coordinates: location.geometry.coordinates})
	}));
	pointsOfInterest.sort((a, b) => a.key > b.key ? 1 : -1)
	return pointsOfInterest;
}

async function searchRadius(lat, lon, radius) {
	// DB call 
	const apiLocations = await axios.get(`https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}&lon=${lon}&lat=${lat}&limit=10&apikey=${process.env.OPENTRIPMAP_KEY}`);
	let bestApiLocations = apiLocations.data.features.sort((a, b) => {
		if(a.properties.rate > b.properties.rate){
			return -1;
		} else if(a.properties.rate < b.properties.rate) {
			return 1;
		} else if(a.properties.rate === b.properties.rate) {
			a.properties.dist < b.properties.dist ? -1 : 1
		}
	})	  
	let bestApiLocation = bestApiLocations[0]
	const [locationLon, locationLat] = bestApiLocation.geometry.coordinates
	bestApiLocation.geometry.coordinates = [locationLat, locationLon]
	return bestApiLocation
}

module.exports = {generateROIs, findPOIs, searchRadius}