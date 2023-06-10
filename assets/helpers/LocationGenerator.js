import { RouteNode } from "./RouteNode";
import {dist, midpoint, midpoint} from "./MapHelper";

// Function that takes a route and finds locations to visit along that route
export function findPOIs(filter, routeCoords) {
	const regionsOfInterest = generateROI(routeCoords[0], 
								   routeCoords[routeCoords.length - 1], 
								   routeCoords.slice(routeCoords[0], routeCoords.length));
	let pointsOfInterest = []
	regionsOfInterest.forEach(region => {
		// API call
	})
}

function generateROIs(start, end, route) {
	// Make route into doubly linked list
	const head = new RouteNode(start.latitude, start.longitude);
	const tail = new RouteNode(end.latitude, end.longitude);
	let current = head;
	route.forEach(element => {
		current.next = new RouteNode(element.latitude, element.longitude, null, current);
		current = current.next;
	});
	current.next = tail;
	tail.prev = current;

	let currentNode = head;
	const thresh = 10; // The max distance a bounding box can cover
	const minDist = 10; // The min distance a point must be away from the prev points
	const offset = 10; // The buffer around the points to add to bound box
	let currDist = 0;
	let ROIs = []
	while(currentNode.next) {
		const distanceToNext = dist(currentNode, currentNode.next)
		// If there is too much distance from current node to next
		if (distanceToNext > thresh) {
			// Create a new node inbetween current and next route node
			const midpointCoordinates = calcMidpoint(currentNode, currentNode.next);
			const midpoint = new RouteNode(midpointCoordinates[0], midpointCoordinates[1], 
															currentNode.next, currentNode);
			currentNode.next.prev = midpoint;
			currentNode.next = midpoint;
			continue
		} else {
			// If the next node is far enough away from the current
			if(distanceToNext > minDist) {
				// Add bbox to array
				ROIs.push([Math.min(currentNode.long - offset, currentNode.next.long - offset), 
						  Math.max(currentNode.long + offset, currentNode.next.long + offset),
						  Math.min(currentNode.lat - offset, currentNode.next.lat - offset),
						  Math.max(currentNode.lat + offset, currentNode.next.lat + offset)])
			} else {
				// If there are more nodes after, just remove next node
				if (current.next.next) {
					current.next.prev = null
					current.next = current.next.next
					current.next.prev = current
					continue
				} else {
					// If the next node is a tail node, then just draw the bbox even if it's small
					ROIs.push([Math.min(currentNode.long - offset, currentNode.next.long - offset), 
						Math.max(currentNode.long + offset, currentNode.next.long + offset),
						Math.min(currentNode.lat - offset, currentNode.next.lat - offset),
						Math.max(currentNode.lat + offset, currentNode.next.lat + offset)])
				}
			}
		}
	}

}

