import { RouteNode } from "./RouteNode";
import {dist, calcPoint} from "./MapHelper";

// Function that takes a route and finds locations to visit along that route
export function findPOIs(filter, routeCoords, isInKm, numStops = null) {
	const {routeStart, routeDistance} = createRouteLinkedList(routeCoords);
	const regionsOfInterest = generateROIs(routeStart, routeDistance, isInKm, numStops);
	let pointsOfInterest = []
	regionsOfInterest.forEach(region => {
		// DB call
		// API call

		// look for user-generated ones first, if none are rated higher than 3 then use API
	})
}

function generateROIs(routeHead, totalDistance, isInKm, numStops) {
	// Add ROI to start 
	let ROIs = []
	ROIs.append([currentNode.lat, currentNode.lon]);
	// Divide route by number of stops requested, subtract 1 for the start ROI
	const distBetweenROI = totalDistance / (numStops - 1); 
	
	// Travel through route
	let currentNode = routeHead;
	let currDist = 0;
	while(currentNode.next) {
		// Find distance to the next route node
		const distances = dist(currentNode, currentNode.next)
		const distanceToNext = isInKm ? distances[0] : distances[1];
		// Add it to the distance from the previous ROI to current node
		currDist += distanceToNext
		// While the distance traveled is greater than the set distance
		while(currDist >= distBetweenROI) {
			// Keep adding ROIs in between current and next point
			currDist -= distBetweenROI;
			nextROI = calcPoint(currentNode, currentNode.next, distanceToNext - currDist);
			ROIs.append(nextROI);
		}
		// Continue to next point
		currentNode = currentNode.next
	} 
	return ROIs
}

// Make route into doubly linked list and find the route's total distance
function createRouteLinkedList(route) {
	let head = new RouteNode();
	let current = head;
	let totalDistance = 0;
	route.forEach(element => {
		totalDistance += element.distance
		current.next = new RouteNode(element.latitude, element.longitude, null, prev = current);
		current = current.next;
	});
	head = head.next
	return [head, totalDistance]
}