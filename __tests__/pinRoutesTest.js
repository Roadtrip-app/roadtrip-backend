const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../server');
const { connectDB } = require('../db');
const {testPin} = require('../assets/testObjects');
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
		.send(testPin);
		expect(res.statusCode).toEqual(200);
		expect(res.body).toHaveProperty('_id');
	});
}); 

describe("Test GET routes", () => {
	// Test pins index route
	it('should retrieve all pins', async () => {
		const res = await request(app)
		.get('/pins');
		expect(res.statusCode).toBe(200);
		expect(res.body[0].name).toEqual("test")
		expect(res.statusCode).toEqual(200);
	});
})

describe("Test PATCH routes", () => {
	// Test pin update route
	it('should update the name of the test pin with the given ID', async () => {
		const pin = await request(app).get('/pins');
		const res = await request(app)
		.patch('/pins/' + pin.body[0]._id)
		.send({name: 'updated name'})
		expect(res.statusCode).toEqual(200);
		expect(res.body.name).toEqual('updated name')
	})
})

describe('Test DELETE routes', () => {
	it('should delete a pin with the given id', async () => {
		const pin = await request(app).get('/pins');
	  	const res = await request(app)
		.delete('/pins/' + pin.body[0]._id)
		expect(res.statusCode).toEqual(200);
	});
  });
  
});