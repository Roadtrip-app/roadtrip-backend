const testPin = {
	name : "test",
	description : "test description",
	author : {
		username : "test",
		userID : "test"
	},
	category : "test",
	tags : ["test"],
	images : {
		"thumbnail_url" : "test"
	},
	location : {
		country : "country",
		state_or_province : "state",
		city : "city", 
		zipcode : 123,
		coordinates : [123, 123, 123],
		address : "123 place"
	}
}

const fakeRoute = {
	routes:[
		{legs: [{
			start_location: {lat: 39.7411913, lng: -104.9879949},
			end_location: {lat: 39.6133199, lng: -105.0165924},
			distance: {value: 18230},
			steps:[
				{start_location: {lat: 39.7411913, lng: -104.9879949}, end_location: {lat: 39.7415069, lng: -104.9882594},  distance: {value:  48}},
				{start_location: {lat: 39.7415069, lng: -104.9882594} , end_location: {lat: 39.7409126, lng: -104.9890212},  distance: {value:  93}},
				{start_location: {lat: 39.7409126, lng: -104.9890212} , end_location: {lat: 39.7422411, lng: -104.9907508},  distance: {value:  209}},
				{start_location: {lat: 39.7422411, lng: -104.9907508} , end_location: {lat: 39.7401302, lng: -104.9930356},  distance: {value:  319}},
				{start_location: {lat: 39.7401302, lng: -104.9930356} , end_location: {lat: 39.7403599, lng: -105.0096948},  distance: {value:  1425}},
				{start_location: {lat: 39.7403599, lng: -105.0096948} , end_location: {lat: 39.7107968, lng: -104.9989446},  distance: {value:  4464}},
				{start_location: {lat: 39.7107968, lng: -104.9989446} , end_location: {lat: 39.7052031, lng: -104.9969515},  distance: {value:  648}},
				{start_location: {lat: 39.7052031, lng: -104.9969515} , end_location: {lat: 39.6582969, lng: -104.9996712},  distance: {value:  5451}},
				{start_location: {lat: 39.6582969, lng: -104.9996712} , end_location: {lat: 39.6265585, lng: -105.0117677},  distance: {value:  3697}},
				{start_location: {lat: 39.6265585, lng: -105.0117677} , end_location: {lat: 39.6184192, lng: -105.0183283},  distance: {value:  1068}},
				{start_location: {lat: 39.6184192, lng: -105.0183283} , end_location: {lat: 39.6183556, lng: -105.0161354},  distance: {value:  191}},
				{start_location: {lat: 39.6183556, lng: -105.0161354} , end_location: {lat: 39.61321, lng: -105.0161923},  distance: {value:  572}},
				{start_location: {lat: 39.61321, lng: -105.0161923} , end_location: {lat: 39.6132303, lng: -105.0165953},  distance: {value:  35}},
				{start_location: {lat: 39.6132303, lng: -105.0165953} , end_location: {lat: 39.6133199, lng: -105.0165924},  distance: {value:  10}}
			]
		}]}	
	]
	
}
module.exports = {testPin, fakeRoute}