
const {generateROIs, findPOIs} = require('../assets/helpers/LocationGenerator');
const request = require('supertest');
const app = require('../server');
const {getRoute} = require('../assets/objects/setupTests')
let testRoute;
describe('Test route generation', () => { 

	beforeAll(async () => {
		testRoute = await getRoute();
	})
    
	// it('tests google maps directions API', async () => {
    //     let res = await request(app).get('/generate-route/?origin=Denver&destination=Littleton');
    //     console.log(res)
    // })

	describe('Test ROI generation', () => {
		it('should create a list of 10 ROIs', async () => {
			const regions = generateROIs(testRoute, 10);
			console.log(regions)
			expect(regions.length).toEqual(10)
		});
	}); 
})