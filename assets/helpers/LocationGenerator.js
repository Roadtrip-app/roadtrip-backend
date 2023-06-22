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
		console.log(`current leg distance: ${leg.distance.value}`)
		totalDistance += leg.distance.value
	})
	console.log(`total dist: ${totalDistance}`)
	// Add ROI to start 
	let ROIs = []
	ROIs.push([route.legs[0].start_location.lat, route.legs[0].start_location.lng]);
	// Divide route by number of stops requested, subtract 1 for the start ROI
	const distBetweenROI = totalDistance / (numStops - 1); 
	console.log(`dist between: ${distBetweenROI}`)
	// Travel through route
	let currDist = 0;
	route.legs.forEach(leg => {
		if(currDist + leg.distance.value < distBetweenROI) {
			currDist += leg.distance.value;
		} else {
			// Go through trip steps until we're far enough from previous ROI to place another
			leg.steps.forEach(step =>  {
				console.log(step.start_location)
				currDist += step.distance.value
				console.log(currDist)
				while(currDist >= distBetweenROI) {
					// Keep adding ROIs in between current and next point if its far enough to fit multiple
					console.log(currDist / 1000)
					currDist -= distBetweenROI;
					nextROI = calcPoint(step.start_location, step.end_location, (step.distance.value - currDist) / 1000);
					ROIs.push(nextROI);
				}
			});
		}
	})

	// while(currentNode.next) {
	// 	// Find distance to the next route node
	// 	const distances = dist(currentNode, currentNode.next)
	// 	const distanceToNext = isInKm ? distances[0] : distances[1];
	// 	// Add it to the distance from the previous ROI to current node
	// 	currDist += distanceToNext
	// 	// While the distance traveled is greater than the set distance
	// 	while(currDist >= distBetweenROI) {
	// 		// Keep adding ROIs in between current and next point
	// 		currDist -= distBetweenROI;
	// 		nextROI = calcPoint(currentNode, currentNode.next, distanceToNext - currDist);
	// 		ROIs.append(nextROI);
	// 	}
	// 	// Continue to next point
	// 	currentNode = currentNode.next
	// } 
	return ROIs
}

module.exports = {generateROIs, findPOIs}