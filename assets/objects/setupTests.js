const request = require('supertest');
const app = require('../../server');
const getRoute = async () => {
    const testRoute = await request(app).get('/map/generate-route/?origin=Denver&destination=Littleton');
    return testRoute.body
}

module.exports = {getRoute}