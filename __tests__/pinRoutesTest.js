const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose')
const request = require('supertest');
const app = require('../server');
const { connectDB } = require('../db');

describe('Test pin routes', () => {
  let mongoServer;

  // Start mock DB
  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();

    process.env.NODE_ENV = 'test'; // Set the environment to 'test'

    await connectDB(mongoUri); // Connect to test db
  });

  // Stop mock DB
  afterAll(async () => {
    await mongoose.disconnect(); // Disconnect from the test db
    await mongoServer.stop();
  });

  describe('Test POST routes', () => {
	// Test pin creation route
	it('should create a new pin', async () => {
		const res = await request(app)
		.post('/pins/create')
		.send({
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
		});
		expect(res.statusCode).toEqual(200);
		expect(res.body).toHaveProperty('_id');
	});
}); 

describe("Test GET routes", () => {
	// Test pins index route
	it('should retrieve all pins', async () => {
		const response = await request(app).get('/pins');
		expect(response.statusCode).toBe(200);
		expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({
		_id: expect.any(String),
		name: expect.any(String),
		description: expect.any(String),
		author: expect.objectContaining({
			username: expect.any(String),
			userID: expect.any(String)
		}),
		category: expect.any(String),
		tags: expect.any(Array),
		location: expect.objectContaining({
			country: expect.any(String),
			state_or_province: expect.any(String),
			city: expect.any(String),
			zipcode: expect.any(Number),
			address: expect.any(String),
			coordinates: expect.arrayContaining([expect.any(Number)])
		}),
		images: expect.objectContaining({
			thumbnail_url: expect.any(String),
			main_image_urls: expect.any(Array)
		})
		})]));
		expect(response.statusCode).toEqual(200);
	});
})
  
});