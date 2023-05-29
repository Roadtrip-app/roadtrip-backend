const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for location pins
const pinSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		default: ""
	},
	author: {
		username: {
			type: String,
			required: true
		},
		userID: {
			type: String,
			required: true
		}
	},
	category: {
		type: String,
		required: true,
		default: "general"
	},
	tags: {
		type: [String],
		default: []
	},
	location: {
		country: {
			type: String,
			required: true
		},
		state_or_province: {
			type: String,
			required: true
		},
		city: {
			type: String,
			required: true
		},
		zipcode: {
			type: Number,
			required: true
		},
		address: {
			type: String,
			required: true
		},
		coordinates: {
			type: [Number],
			required: true
		},
	},
	images: {
		thumbnail_url: {
			type: String,
			required: true
		},
		main_image_urls: {
			type: [String],
			default: []
		}
	}

	}, {timestamps: true})

const Pins = mongoose.model('Pin', pinSchema);
module.exports = Pins;