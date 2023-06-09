export function getPOIs(filter, routeCoords) {
	let regionOfInterest = generateROI(routeCoords[0], 
								   routeCoords[routeCoords.length - 1], 
								   routeCoords.slice(routeCoords[0], routeCoords.length));

	
	// let uniquePoints = [...new Set(pointsOfInterest)];
}

function generateROI(start, end, route) {
}

