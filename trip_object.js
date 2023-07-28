const axios = require('axios');
require('dotenv').config();
const { connectDB } = require('./db.js');  // Replace './database' with the path to your connectDB module
const Place = require('./models/place.js');  // Replace './Place' with the path to your Place model

const apiKey = process.env.GOOGLE_MAPS_API_KEY;
const lat = 39.7392;
const lng = -104.9903;
const radius = 5000;
const type = 'restaurant';
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/test';  // Replace with your MongoDB URI

let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type}&key=${apiKey}`;

const processPlaces = (results) => {
    const numResults = Math.min(results.length, 100);
    for (let i = 0; i < numResults; i++) {
        // Check if the place has photos
        let photos = [];
        if (results[i].photos && results[i].photos.length > 0) {
            photos = results[i].photos.map(photo => ({
                photo_reference: photo.photo_reference
            }));
        }

        // Check if the place has opening hours
        let opening_hours = {};
        if (results[i].opening_hours) {
            opening_hours = { open_now: results[i].opening_hours.open_now };
        }

        // Prepare a new Place document with data from the Google Places API
        const placeData = {
            icon: results[i].icon,
            name: results[i].name,
            opening_hours: opening_hours,
            photos: photos,
            rating: results[i].rating,
            types: results[i].types,
            vicinity: results[i].vicinity
        };

        // Update the document in the 'places' collection, or insert if it doesn't exist
        Place.updateOne(
            { name: results[i].name },
            { $set: placeData },
            { upsert: true },
        )
        .then(() => console.log(`Saved place: ${results[i].name}`))
        .catch((error) => console.error('Error saving place to database:', error));
    }
}

const getNextPage = async (nextPageToken) => {
    let urlNext = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${apiKey}&pagetoken=${nextPageToken}`;
    let response = await axios.get(urlNext);
    processPlaces(response.data.results);
    if (response.data.next_page_token) {
        setTimeout(() => getNextPage(response.data.next_page_token), 2000); // Delay before requesting the next page
    }
}

connectDB(MONGO_URI)
    .then(() => {
        axios.get(url)
            .then(response => {
                processPlaces(response.data.results);
                if (response.data.next_page_token) {
                    setTimeout(() => getNextPage(response.data.next_page_token), 2000); // Delay before requesting the next page
                }
            })
            .catch((error) => {
                console.error('Error fetching data from Google Maps API:', error);
            });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
