export class RouteNode {
	constructor(lat, lon, next = null, prev = null) {
		this.lat = lat;
		this.lon = lon;
		this.next = next;
		this.prev = prev;
	}
}