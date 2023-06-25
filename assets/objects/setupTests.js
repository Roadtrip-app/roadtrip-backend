const request = require('supertest');
const app = require('../../server');
const getRoute = async (origin, dest) => {
    const testRoute = await request(app).get(`/map/generate-route/?origin=${origin}&destination=${dest}`);
    return testRoute.body
}

module.exports = {getRoute}