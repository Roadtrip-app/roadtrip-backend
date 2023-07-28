const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
    photo_reference: {
        type: String,
        required: true
    }
}, {_id : false});

const placeSchema = new Schema({
    icon: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    opening_hours: {
        open_now: {
            type: Boolean,
            required: false
        }
    },
    photos: [photoSchema],
    rating: {
        type: Number,
        required: false
    },
    types: {
        type: [String],
        required: false
    },
    vicinity: {
        type: String,
        required: false
    }
}, {timestamps: true});

const Place = mongoose.model('Place', placeSchema);
module.exports = Place;
