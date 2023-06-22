const {dist, calcPoint} = require("./MapHelper");

// Function that takes a route and finds locations to visit along that route
function findPOIs(filter, route, numStops = null) {
	const regionsOfInterest = generateROIs(route, numStops);
	let pointsOfInterest = []
	regionsOfInterest.forEach(region => {
		console.log(region)
		// DB call
		// API call

		// look for user-generated ones first, if none are rated higher than 3 then use API
	})
}

function generateROIs(apiResponse, numStops) {
	let totalDistance = 0;
	route = apiResponse.routes[0]
	route.legs.forEach(leg => {
		totalDistance += leg.distance.value
	})
	// Add ROI to start 
	let ROIs = []
	ROIs.push([route.legs[0].start_location.lat, route.legs[0].start_location.lng]);
	// Divide route by number of stops requested, subtract 1 for the start ROI
	const distBetweenROI = totalDistance / (numStops - 1); 
	let distances = {idealDistance: distBetweenROI, actualDistances: []};

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
					// This is done by taking the distance from the previous ROI to the step.start_location (currDist - step.distance.value + distBetweenROI)
					// and adding it to the distance from the step.start_location to the nextROI
					const leftoverDistFromPrevROI = currDist - step.distance.value + distBetweenROI;
					const resultDist = leftoverDistFromPrevROI + dist(step.start_location, {lat: nextROI[0], lng: nextROI[1]});

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

module.exports = {generateROIs, findPOIs}