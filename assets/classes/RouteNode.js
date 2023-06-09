export class RouteNode {
	constructor(lat, lon) {
		this.lat = lat;
		this.lon = lon;
		this.next = null;
		this.prev = null;
	}
}